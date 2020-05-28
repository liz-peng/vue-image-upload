import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
	// set initial token from localStrorage to keep user login
	token: window.localStorage.getItem('imgur_token')
};

const getters = {
	isLoggedIn: (state) => {
		// check if token is null
		// !!null => false, !!'token' => true
		return !!state.token;
	}
};

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	}
};

const actions = {
	login: () => {
		api.login();
	},

	finalizeLogin: ({ commit }, hash) => {
		/*
		window.location.hash =
		"#access_token=11e87093d2e5b43fa57ba136576acfdf1fba4b6e
		&expires_in=315360000&token_type=bearer
		&refresh_token=df6b253734acfb77761c3b0c8aa2d8d4bc7e7fe5
		&account_username=littlebambiben
		&account_id=28138829"
		*/

		// query is the object that contains window.location.hash
		const query = qs.parse(hash.replace('#', '')); 
		commit('setToken', query.access_token);
		// set token to localStorage when user first login
		window.localStorage.setItem('imgur_token', query.access_token);
		// router import from main.js
		// after login, router navigate user to root route (http://localhost:8080/)
		router.push('/');
	},

	logout: ({ commit }) => {
		// commit function calls the mutation
		// initial token = null
		commit('setToken', null);
		window.localStorage.removeItem('imgur_token'); // remove token after logout
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}