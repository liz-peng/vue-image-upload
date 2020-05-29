<template>
	<div class="dropper">
		<!-- accept multiple files upload but only image files -->
		<input 
			type="file" 
			@change="uploadImages($event.target.files)" 
			multiple
			accept="image/*"
		/>
		<span>Drag and drop image here to upload</span>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'Upload',

	methods: {
		...mapActions(['uploadImages'])
	}
}
</script>

<style scoped>
.dropper {
	height: 30vh;
	border: 2px dashed #000;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.dropper:hover {
	background-color: #eee;
}

input {
	width: 100%;
	height: 30vh;
	position: absolute;
	opacity: 0;
}
</style>