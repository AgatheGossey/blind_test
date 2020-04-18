<template>
	<div id="container">
		<v-progress-circular
			id="loader"
			:size="70"
			:width="7"	
			indeterminate
		></v-progress-circular>
		<div>Hé allez ! C'est toujours les mêmes qu'on attend...</div>
	</div>
</template>

<script>
export default {
	name:'Loader'
}
</script>

<style scoped>

#container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
}

#loader {
	margin: 2em auto;
}

</style>