<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data: () => ({
	})
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("primary", (
		primary: #ff9100,
		accent: #ff9100
));

@import "~vue-material/dist/theme/all";
</style>
