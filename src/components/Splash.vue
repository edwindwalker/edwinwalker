<template>
	<div id="splash" :style="{backgroundColor: theme.background}">
		<logo :color="theme.logo"/>
	</div>
</template>

<script>
	import Logo from "./Logo.vue";

	function randomColor() {
		let random255 = () => (Math.floor(Math.random() * 256));
		return "rgb(" + Array.from({length: 3}, random255).join(",") + ")";
	}
	
	export default {
		name: "splash",
		components: {
			"logo": Logo
		},
		data: () => ({
			// Start with white on black
			theme: {
				background: "rgb(0, 0, 0)",
				logo: "rgb(255, 255, 255)"
			}
		}),
		created: function() {
			setInterval(() => {
				this.theme = {
					background: randomColor(),
					logo: randomColor()
				};
			}, 1000);
		}
	};
</script>

<style lang="scss" scoped>
	#splash {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
	}
</style>
