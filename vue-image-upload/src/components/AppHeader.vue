<template>
	<div class="ui secondary pointing menu">
		<a href="/" class="active item">Image Storage</a>
		<div class="right menu">
			<div v-if="isLoggedIn" class="horizontal">
				<a href="" class="item">Gallery</a>
				<a href="" class="item">Upload</a>
				<a href="" class="item" @click="logout">Logout</a>
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