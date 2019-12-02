import Vue, { PluginObject } from 'vue';
import axios from '$axios';
import * as nprogress from 'nprogress';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const token: any = document.head.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

const config = {
	// baseURL: process.env.baseURL || process.env.apiUrl || ""
	// timeout: 60 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
	cfg => {
		// Do something before request is sent
		nprogress.start();
		return cfg;
	},
	err => {
		// Do something with request error
		if (nprogress.isStarted()) {
			nprogress.done(true);
		}
		return Promise.reject(err);
		// tslint:disable-next-line: trailing-comma
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	res => {
		// Do something with response data
		nprogress.done();
		return res;
	},
	err => {
		// Do something with response error
		if (nprogress.isStarted()) {
			nprogress.done(true);
		}
		return Promise.reject(err);
		// tslint:disable-next-line: trailing-comma
	}
);

const Plugin: PluginObject<any> = {
	install: Vue => {
		Vue.$axios = _axios;
	},
};
Plugin.install = Vue => {
	Vue.$axios = _axios;
	window.axios = _axios;
	Object.defineProperties(Vue.prototype, {
		$axios: {
			get() {
				return _axios;
			},
		},
	});
};

Vue.use(Plugin);

export default Plugin;
