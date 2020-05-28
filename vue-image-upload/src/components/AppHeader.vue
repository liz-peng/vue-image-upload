<template>
	<div class="ui secondary pointing menu">
		<router-link to="/" class="active item">Image Storage</router-link>
		<div class="right menu">
			<div v-if="isLoggedIn" class="horizontal">
				<!-- use router-link instead of <a> tag to avoid the whole page repload but change the view of component -->
				<router-link to="/" class="item">Gallery</router-link>
				<router-link to="/upload" class="item">Upload</router-link>
				<a class="item" @click="logout">Logout</a>
			</div>
			<a v-else href="#" class="ui item" @click="login">Login</a>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AppHeader',

	computed: {
		...mapGetters(['isLoggedIn'])
	},

	methods: {
		...mapActions(['login', 'logout']) // vuex checks actions in all the modules and find login action
	}
}
</script>

<style scoped>
	.horizontal {
		display: flex;
		flex-direction: row;
	}
</style>