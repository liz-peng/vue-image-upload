import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import Upload from './components/Upload';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history', // use browser router mode
	routes: [
		{ path: '/oauth2/callback', component: AuthHandler },
		{ path: '/', component: ImageList },
		{ path: '/upload', component: Upload }
	]
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');