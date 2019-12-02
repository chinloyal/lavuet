import AppDialog from '@/components/AppDialog.vue';
import { PluginObject } from 'vue';
import { AppDialogOptions } from '@/plugins/types';

const Plugin: PluginObject<any> = {
	install: (Vue, options) => {
		Plugin.EventBus = new Vue();

		Vue.component('app-dialog', AppDialog);

		Vue.prototype.$dialog = {
			show(params: AppDialogOptions) {
				Plugin.EventBus.$emit('show', params);
			},
		};
	},
};

export default Plugin;
