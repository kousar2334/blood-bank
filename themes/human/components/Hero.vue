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
		<div class="container pt-0 shape-container d-flex">
			<div class="row align-items-center justify-content-between">
				<div class="col-12 col-lg-5">
					<div class="py-1">
						<h1 :class="'bangla-font banner-word ' + $i18n.locale">
							{{ $t("we_are_human") }} <br />{{
								$t("we_will_stand_by_everyones_danger_we_will_laugh_together")
							}}
						</h1>
						<!-- <div class="d-flex align-items-center">
							<a
								href="https://www.jarafa.com/reseller/register"
								class="bangla-font banner-btn"
								>Donate Now
							</a>
						</div> -->
					</div>
				</div>
				<div class="col-lg-7 d-none d-lg-block banner-image-setion">
					<img src="/static/common/img/banner5.png" class="banner-img" />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>
<style>
.section-shaped .shape-style-1.shape-primary {
	background: linear-gradient(
		150deg,
		var(--primaryColor) 15%,
		var(--primaryColor) 70%,
		var(--primaryColor) 94%
	);
}
.banner-word {
	color: white;
	line-height: 1.25;
	margin-bottom: 12px;
}
.banner-btn {
	border: none;
	color: #fff;
	padding: 11.5px 35px;
	border-radius: 50px;
	background-color: var(--bannerBtnBgColor);
}
.banner-btn:hover {
	background-color: #0a0e33;
	color: #fff;
}
</style>
