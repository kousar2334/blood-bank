<template>
	<div id="app">
		<router-view name="header"></router-view>
		<main>
			<fade-transition origin="center" mode="out-in" :duration="250">
				<router-view />
			</fade-transition>
		</main>
		<router-view name="footer"></router-view>
	</div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
	components: {
		FadeTransition,
	},
	metaInfo: {
		charset: "utf-8",
		// if no subcomponents specify a metaInfo.title, this title will be used
		title: "আমার বগুড়া",
		// all titles will be injected into this template
		titleTemplate: "%s | আমার বগুড়া",
	},
};
</script>
