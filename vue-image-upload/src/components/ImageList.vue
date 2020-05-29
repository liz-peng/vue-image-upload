<template>
	<div>
		<div v-if="isLoggedIn" class="image-container">
			<img 
				v-for="image in allImages" 
				:src="image.link" 
				:key="image.id"
			/>
		</div>
		<h2 v-else>Please login to get started</h2>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ImageList',

	methods: {
		...mapActions(['fetchImages'])
	},

	computed: {
		...mapGetters(['allImages', 'isLoggedIn'])
	},

	created() {
		this.fetchImages();
	}
}
</script>

<style scoped>
.image-container {
	column-count: 5;
	column-gap: 0;
}

img {
	max-width: 100%;
	padding: 10px;
}
</style>