import api from '../../api/imgur';
import { router } from '../../main';

const state = {
	images: []
};

const getters = {
	allImages: (state) => {
		return state.images;
	}
};

const mutations = {
	setImages: (state, images) => {
		// images is an array comes back from imgur API
		state.images = images;
	}
};

const actions = {
	// reach out to imgur API and retrieve any img that user has ever uploaded
	async fetchImages({ rootState, commit }) {
		// rootState references to all the state that contains in vuex store and vuex instance
		const token = rootState.auth.token; // auth comes from index.js
		const response = await api.fetchImages(token);
		// 2nd argument is the new image list to store inside the state
		commit('setImages', response.data.data);
	},

	async uploadImages({ rootState }, images) {
		// get the access token
		const token = rootState.auth.token; // auth comes from index.js
		// call API module to upload
		await api.uploadImages(images, token);
		// redirect user to ImageList component 
		router.push('/');
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}