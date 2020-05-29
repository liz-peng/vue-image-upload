<template>
	<div>
		<img 
			v-for="image in allImages" 
			:src="image.link" 
			:key="image.id"
		/>
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
		...mapGetters(['allImages'])
	},

	created() {
		this.fetchImages();
	}
}
</script>