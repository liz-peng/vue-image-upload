import api from '../../api/imgur';

const state = {
	// initial token sets to null
	token: null
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

	logout: ({ commit }) => {
		// commit function calls the mutation
		// initial token = null
		commit('setToken', null);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}