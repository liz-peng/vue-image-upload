<template>
	<div class="dropper">
		<input type="file" name="">
		<span>Drag and drop image here to upload</span>
	</div>
</template>

<script>
export default {
	name: 'Upload'
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