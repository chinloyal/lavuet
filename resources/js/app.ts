import '@babel/polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import '@/plugins/axios';
import vuetify from '@/plugins/vuetify';
import Dialog from '@/plugins/app-dialog';
import components from '@/components';
import store from '@/store';

Vue.use(Dialog);

Vue.config.productionTip = false;

window.Vue = Vue;

const VueApp: any = Vue;
const app: Vue = new VueApp({
	vuetify,
	components,
	store,
});

app.$mount('#app');

Vuex.Store.prototype.$dialog = app.$dialog;
