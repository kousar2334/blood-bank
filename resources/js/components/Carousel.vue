<template>
	<div class="container p-0">
		<VueSlickCarousel v-bind="settings">
			<div v-for="(item, index) in items" :key="index">
				<div
					class="product-banner-item d-flex align-items-center m-2"
					:style="{ backgroundImage: `url(${'/' + item.img})` }"
				>
					<!-- <div class="product-banner-content">
						<span>{{ item.title }}</span>
						<h2
							class="text-uppercase position-relative pl-20"
							v-if="item.titile_first"
						>
							{{ item.titile_first }} <span>{{ item.title_middle }}</span>
						</h2>
						<p>{{ item.description }}</p>
						<a :href="item.url" class="btn btn_fill radius-50"> </a>
					</div> -->
				</div>
			</div>
		</VueSlickCarousel>
	</div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
	name: "Carousel",
	components: {
		VueSlickCarousel,
	},
	data() {
		return {
			settings: {
				dots: true,
				infinite: true,
				slidesToShow: 1,
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
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
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
			items: [
				{
					title: "This is one",
					img: "img/theme/slider.jpg",
					titile_first: "titile First",
					title_middle: "Middle",
					description: "fgsgfuysd sjgfsduyf",
					url: "/qqwewqe",
				},
				{
					title: "This is one",
					img: "img/theme/slider_2.png",
					titile_first: "titile First",
					title_middle: "Middle",
					description: "fgsgfuysd sjgfsduyf",
					url: "/qqwewqe",
				},
				{
					title: "",
					img: "img/theme/slider_3.jpg",
					titile_first: "",
					title_middle: "",
					description: "",
					url: "/qqwewqe",
				},
				{
					title: "This is one",
					img: "img/theme/slider.jpg",
					titile_first: "titile First",
					title_middle: "Middle",
					description: "fgsgfuysd sjgfsduyf",
					url: "/qqwewqe",
				},
			],
		};
	},
};
</script>
<style lang="scss" scope>
.product-banner {
	&-item {
		background-size: cover;
		background-position: center;
		padding: 130px 60px 138px;
		min-height: 350px;
		max-height: 350px;
	}
	&-content {
		> span {
			font-size: 18px;
			font-weight: 500;
			color: #60b946;
		}
		h2 {
			font-size: 48px;
			$lh: 54 / 48;
			line-height: $lh;
			margin-bottom: 24px;
			span {
				color: #60b946;
			}
			&:before {
				position: absolute;
				content: "";
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 4px;
				height: 85px;
				background-color: #60b946;
			}
		}
		p {
			font-size: 16px;
			$lh: 26 / 16;
			line-height: $lh;
			max-width: 262px;
			margin-bottom: 32px;
		}

		.btn {
			padding: 12px 33px;
			font-size: 14px;
			font-weight: 400;
		}
	}
}
.slick-dots:not(#_) {
	button:before {
		display: none;
	}
	.slick-active {
		background-color: white;
	}
	li {
		width: 40px;
		height: 5px;
		border-radius: 5px;
		background-color: gray;
	}

	bottom: 20px;
	display: flex !important;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 1rem;
	width: auto;
	margin: 0 auto;
	padding: 0.25rem;
}
</style>
