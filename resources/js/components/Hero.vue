<template>
	<section class="section-hero section-shaped my-0">
		<div class="shape shape-style-1 shape-primary">
			<span class="span-150"></span>
			<span class="span-50"></span>
			<span class="span-50"></span>
			<span class="span-75"></span>
			<span class="span-100"></span>
			<span class="span-75"></span>
			<span class="span-50"></span>
			<span class="span-100"></span>
			<span class="span-50"></span>
			<span class="span-100"></span>
		</div>
		<div class="container shape-container d-flex">
			<div class="col px-0">
				<div
					class="
						row
						justify-content-center
						align-items-center
						mt-3 mt-lg-5 mt-md-5
					"
				>
					<div class="col-lg-12 text-center pt-0 mt-0 mt-lg-5 mt-md-5 pb-0">
						<VueSlickCarousel :arrows="false" :dots="false" v-bind="settings">
							<div>
								<h1 class="bangla-font text-white">দুটি সন্তানের বেশী নয়</h1>
								<h1 class="bangla-font text-white">একটি হলে ভাল হয়</h1>
							</div>
							<div>
								<h1 class="bangla-font text-white">ঘুষ দান ও গ্রহণ</h1>
								<h1 class="bangla-font text-white">দুই টাই সমান অপরাধ</h1>
							</div>
							<div>
								<h1 class="bangla-font text-white">
									এখানে আপনার ডাক্তার খুঁজুন
								</h1>
								<p class="bangla-font text-white btn btn-success">খুঁজুন</p>
							</div>
						</VueSlickCarousel>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
	components: { VueSlickCarousel },
	data() {
		return {
			settings: {
				arrows: false,
				dots: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				speed: 1000,
				autoplaySpeed: 10000,
				cssEase: "linear",
				pauseOnDotsHover: true,
				pauseOnFocus: true,
				pauseOnHover: true,
				fade: true,
			},
		};
	},
};
</script>
<style>
</style>
