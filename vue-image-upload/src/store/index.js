import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// connect these two libraries
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth
	}
});