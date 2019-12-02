// Vuex structure based on https://codeburst.io/vuex-and-typescript-3427ba78cfa8
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	modules: {},
};

export default new Vuex.Store(store);
