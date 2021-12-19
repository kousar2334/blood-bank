<template>
	<section class="section section-shaped section-lg my-0">
		<div class="shape shape-style-1 bg-gradient-default">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="container pt-lg-md">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<card
						type="secondary"
						shadow
						header-classes="bg-white pb-5"
						body-classes="px-lg-5 py-lg-8"
						class="border-0"
					>
						<template>
							<div class="btn-wrapper text-center mb-5">
								<h3 class="bangla-font">আমাদের সম্পর্কে</h3>
							</div>
						</template>
						<template>
							<div class="bangla-font" v-html="about_us"></div>
						</template>
					</card>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Modal from "../../components/Modal.vue";
import axios from "axios";
export default {
	name: "AboutUs",
	components: {
		Modal,
	},
	data() {
		return {
			about_us: "",
		};
	},
	mounted() {
		this.getAboutUsContent();
	},
	methods: {
		//Get site about us
		getAboutUsContent() {
			axios
				.get("/api/get-site-about-us")
				.then((response) => {
					if (response.data.success) {
						this.about_us = response.data.about_us;
					}
				})
				.catch((error) => {});
		},
	},

	metaInfo: {
		title: "আমাদের সম্পর্কে",
	},
};
</script>
<style>
</style>
