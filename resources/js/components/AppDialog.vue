<template>
	<v-dialog v-model="visible" max-width="500px">
		<v-card>
			<v-card-title class="headline">
				{{ title }}
			</v-card-title>
			<v-card-text>
				{{ message }}
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					v-if="showCancelBtn"
					text
					:color="dialogType"
					@click="close"
				>
					{{ cancelBtnText }}
				</v-btn>
				<v-btn :color="dialogType" text @click="ok">{{
					okBtnText
				}}</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AppDialogOptions } from '@/plugins/types';
import Dialog from '@/plugins/app-dialog';

@Component
export default class AppDialog extends Vue {
	private showCancelBtn: boolean = false;
	private cancelBtnText: string = 'Cancel';
	private okBtnText: string = 'Ok';
	private title: string = '';
	private message: string = '';
	private visible: boolean = false;
	private dialogType: string = 'info';
	private onConfirm: Function = null;

	beforeMount() {
		Dialog.EventBus.$on('show', params => {
			this.show(params);
		});
	}

	close() {
		this.visible = false;
	}

	ok() {
		if (this.onConfirm != null) {
			this.onConfirm();
			this.close();
		} else {
			this.close();
		}
	}

	show(params: AppDialogOptions) {
		this.showCancelBtn = params.showCancelBtn || false;
		this.cancelBtnText = params.cancelBtnText || 'Cancel';
		this.okBtnText = params.okBtnText || 'Ok';
		this.title = params.title || '';
		this.message = params.message || '';
		this.visible = true;
		this.dialogType = params.dialogType || 'info';
		this.onConfirm = params.onConfirm || null;
	}
}
</script>
