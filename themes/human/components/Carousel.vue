<template>
	<VueSlickCarousel v-bind="settings">
		<div v-for="(item, index) in items" :key="index">
			<div
				class="owl-item active center"
				style="width: 380px; margin-right: 0px"
			>
				<div class="event-grid">
					<div class="event-box">
						<div class="img-holder">
							<router-link
								:to="{ name: 'ProjectDetails', params: { id: item.url } }"
								><img
									:src="`${'/' + item.img}`"
									alt=""
									class="img img-responsive"
							/></router-link>
						</div>
						<div class="event-details">
							<h3 style="margin-top: 0; margin-bottom: 10px">
								<router-link
									:to="{ name: 'ProjectDetails', params: { id: item.url } }"
									>{{ item.title }}</router-link
								>
							</h3>
							<p
								id="text-with-link"
								style="
									text-align: justify;
									text-justify: inter-word;
									padding: 0 10px;
								"
							>
								{{ item.description }}
							</p>

							<router-link
								class="btn theme-btn donate-project"
								:to="{ name: 'ProjectDetails', params: { id: item.url } }"
								>Donate Now</router-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<template #prevArrow>
			<button
				class="prev p-0 d-inline-flex align-items-center justify-content-center"
			>
				<i class="fa fa-angle-right"></i>
			</button>
		</template>
		<template #nextArrow>
			<button
				class="next p-0 d-inline-flex align-items-center justify-content-center"
			>
				<i class="fa fa-angle-right"></i>
			</button>
		</template>
	</VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
	name: "Carousel",
	components: {
		VueSlickCarousel,
	},
	data() {
		return {
			settings: {
				dots: false,
				arrows: true,
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
			items: [
				{
					title: "Food for every one. No one hungry",
					img: "static/img/theme/education.jpg",
					description: "programe for Food ",
					url: "qqwewqe",
				},
				{
					title: "This is one",
					img: "static/img/theme/education.jpg",
					description: "fgsgfuysd sjgfsduyf",
					url: "qqwewqe",
				},
				{
					title: "Public lribary",
					img: "static/img/theme/education.jpg",
					description: "fgsgfuysd sjgfsduyf",
					url: "qqwewqe",
				},

				{
					title: "Education for every one. No one uneducated",
					img: "static/img/theme/education.jpg",
					description: "fgsgfuysd sjgfsduyf",
					url: "qqwewqe",
				},
			],
		};
	},
};
</script>
<style lang="scss" scope>
.slick-next:before {
	content: "\2192";
	display: none;
}
.slick-prev,
.slick-next {
	padding: 20px 15px !important;
	background-color: var(--primaryColor);
	color: #fff;
}
.owl-carousel .owl-item {
	position: relative;
	min-height: 1px;
	float: left;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.event-grid {
	padding: 5px 15px;
}
.event-grid-wrapper .event-box img {
	display: inline-block;
}
.event-details {
	padding: 28px 0 35px;
}
.event-box {
	text-align: center;
	-webkit-box-shadow: 0 0 15px 0 #bfbfbf;
	-moz-box-shadow: 0 0 15px 0 #bfbfbf;
	-o-box-shadow: 0 0 15px 0 #bfbfbf;
	-ms-box-shadow: 0 0 15px 0 #bfbfbf;
	box-shadow: 0 0 15px 0 #bfbfbf;
}
.owl-carousel .owl-item img {
	transform-style: preserve-3d;
}
.owl-carousel .owl-item img {
	display: block;
	width: 100%;
}
.event-grid-wrapper .event-box .event-details h3 {
	font-size: 20px;
	margin: 0.9em 0 0.13em;
	text-transform: capitalize;
}
.event-grid-wrapper .event-box .event-details h3 a {
	color: #3d424b;
	text-decoration: none;
}
.carousel-inner > .item > a > img,
.carousel-inner > .item > img,
.img-responsive,
.thumbnail a > img,
.thumbnail > img {
	display: block;
	max-width: 100%;
	height: auto;
}
.event-grid-wrapper .event-box .event-details {
	padding: 28px 0 35px;
}
.event-grid-wrapper .event-box .event-details h3 {
	font-size: 20px;
	margin: 0.9em 0 0.13em;
	text-transform: capitalize;
}
.event-details .btn,
.event-grid-wrapper .event-box .event-details .btn:hover {
	color: #fff;
}
.event-grid-wrapper .event-box .event-details .btn {
	font-size: 16px;
	font-weight: 700;
	color: #fb5e1c;
	text-transform: capitalize;
}
.btn {
	background-color: var(--primaryColor);
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
