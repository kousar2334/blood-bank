<template>
	<!--Leatest Project--->
	<div class="container pt-100 pb-70 popular_causes_area section_padding">
		<div class="section-title">
			<h2 class="sub-title bangla-font">আমাদের চলমান প্রোজেক্ট সমূহ</h2>
		</div>
		<div class="causes_active owl-carousel">
			<VueSlickCarousel v-bind="settings" v-if="success">
				<div class="single_cause" v-for="(item, index) in items" :key="index">
					<div class="thumb">
						<img :src="`${'/' + item.image}`" alt="">
					</div>
					<div class="causes_content">
						<div class="custom_progress_bar">
							<div class="progress">
								<div class="progress-bar" role="progressbar" style="width: 30%;" aria-valuenow="30"
									aria-valuemin="0" aria-valuemax="100">
									<span class="progres_count">
										30%
									</span>
								</div>
							</div>
						</div>
						<div class="balance d-flex justify-content-between align-items-center">
							<span>Raised: $5000.00 </span>
							<span>Goal: $9000.00 </span>
						</div>
						<h4>Help us to Send Food</h4>
						<p>The passage is attributed to an
							unknown typesetter in the century
							who is thought</p>
						<a class="read_more" href="cause_details.html">Read More</a>
					</div>
				</div>
			</VueSlickCarousel>
		</div>
	</div>
	<!--End Leatest Project--->
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";
export default {
	name: "ProjectSection",
	components: {
		VueSlickCarousel,
	},
	data() {
		return {
			settings: {
				dots: false,
				arrows: false,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			},
			items: [],
			success: false,
		};
	},
	mounted() {
		this.getLatestProjects();
	},
	methods: {
		/**
		 * Get latest projects
		 */
		getLatestProjects() {
			axios
				.get("/api/latest-projects")
				.then((response) => {
					if (response.data.success) {
						this.success = true;
						this.items = response.data.data;
					}
				})
				.catch((error) => { });
		},
	},
};
</script>

