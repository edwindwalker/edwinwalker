<template>
	<div id="splash">
		<div class="site-logo"></div>
		<hr/>
		<div class="bio">Hi, I'm <b>Edwin Walker</b>, a software developer based in Bristol with a particular focus on JavaScript and UI.</div>
	</div>
</template>

<script>
	export default {
		name: "splash"
	};
</script>

<style lang="scss">
	#splash {
        max-width: 300px;
		margin: auto;
		padding: 10vh 0;
		display: flex;
		flex-direction: column;
	}

	.site-logo {
		width: 300px;
        background-image: url("../assets/logo.svg");
        background-size: contain;
        background-repeat: no-repeat;
		background-position: center;
		margin: auto;

		// Dynamic square 
		&:before {
			content: "";
			display: block;
			padding-top: 100%;
		}
	}
	
	hr {
		width: 50%;
		border-color: #00B2E0;
		-webkit-margin-before: 1em;
		-webkit-margin-after: 1em;
		border-style: solid;
	}

	.bio {
		max-width: 300px;
		text-align: center;
		color: #FFF;
	}
</style>
