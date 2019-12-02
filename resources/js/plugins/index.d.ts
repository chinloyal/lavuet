import Vue, { VueConstructor } from 'vue';
import Vuex from 'vuex';
import { AxiosInstance } from '$axios';
import { AppDialogInstance } from '@/plugins/types';

declare global {
	interface Window {
		axios: AxiosInstance;
		Vue: any;
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$axios: AxiosInstance;
		$dialog: AppDialogInstance;
	}
	interface VueConstructor {
		$axios: AxiosInstance;
		$dialog: AppDialogInstance;
	}
}

declare module 'vuex/types' {
	interface Store<S> {
		$dialog: AppDialogInstance;
	}
}
