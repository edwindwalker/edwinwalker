<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app"
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Khula');

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: #7B0D33;
		width: 100%;
		height: 100%;
		font-family: "Khula", sans-serif;
		-webkit-font-smooth: auto;
	}

	#app {
		// App will act as a wrapper
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}
</style>
