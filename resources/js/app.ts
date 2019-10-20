import '@babel/polyfill';
import Vue from 'vue';
import '@/plugins/axios';
import vuetify from '@/plugins/vuetify';
import App from '@/App.vue';
import store from '@/store';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

const VueApp: any = Vue;

new VueApp({
	store,
	vuetify,
	render: (h: any) => h(App),
}).$mount('#app');
