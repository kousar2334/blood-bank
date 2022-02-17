<template>
	<div>
		<hero></hero>
		<!--Emergency Service-->
		<section class="section">
			<div class="container">
				<div class="row justify-content-center">
					<template v-for="(service, index) in services">
						<div class="col-12 col-md-4 col-sm-6 col-lg-4 mb-4" :key="index">
							<router-link :to="service.url">
								<card class="border-0 py-0" hover shadow>
									<img
										:src="'/' + service.icon"
										class="
											rounded-circle
											img-center img-fluid
											shadow
											shadow-lg--hover
											service-image
										"
									/>

									<h2 class="bangla-font text-center mt-5">
										{{ service.name }}
									</h2>
								</card>
							</router-link>
						</div>
					</template>
				</div>
			</div>
		</section>
		<!--End Emergency Service-->
		<section
			class="content-section--docs-near-me"
			id="docs-near-me"
			data-qa-target="section-docs-near-me"
		>
			<div class="content-section__section-container">
				<div class="section-container section-container--docs-near-me">
					<h2
						class="section-container__title bangla-font"
						data-qa-target="section-docs-near-me-title"
					>
						<span
							class="title__specialty"
							data-qa-target="section-docs-near-me-specialty"
							>খুব সহজেই</span
						>
						খুঁজুন
						<span
							class="title__location"
							data-qa-target="section-docs-near-me-location"
							>আপনার ডাক্তার কে</span
						>
					</h2>
					<div class="section-container__provider-card-deck">
						<div class="visiblity-wrapper visiblity-wrapper--rendered">
							<ul class="provider-card-deck">
								<li class="provider-card-deck__provider-card">
									<div
										class="provider-card provider-card--22RJ2"
										id="provider-card-22RJ2"
										data-qa-target="provider-card-1"
									>
										<div class="provider-card__provider-details">
											<h3 class="provider-details__provider-name-link">
												<a
													class="provider-name-link bangla-font"
													href="/physician/dr-arkady-sheinin-22rj2"
													target="_self"
													>ডাঃ শফিকুর রহমান পাটওয়ারী</a
												>
											</h3>
											<div
												class="provider-details__provider-specialty bangla-font"
											>
												এমবিবিএস; এমপিএইচ; ইওসি (অব্স এন্ড গাইনি)
											</div>
											<div class="provider-details__provider-rating">
												<div
													class="star-rating star-rating--inline"
													data-qa-target="provider-rating"
												>
													<span class="star-rating__rating-stars"
														><svg
															class="rating-stars"
															data-qa-target="rating-stars"
															viewBox="0 0 130 24"
															aria-hidden="true"
														>
															<rect
																class="rating-stars__background-stars"
																fill="url(#svg-star-bg)"
																width="100%"
																height="100%"
															></rect>
															<rect
																class="rating-stars__rating-stars"
																data-qa-target="rating-stars--5-stars"
																fill="url(#svg-star-overlay)"
																width="99%"
																height="100%"
															></rect></svg></span
													><span class="sr-only">Rated 5 out of 5 stars</span
													><span class="star-rating__reviews"
														><span class="sr-only">, with</span></span
													>
												</div>
											</div>
										</div>
										<div class="provider-card__provider-img">
											<img
												class="
													provider-img
													provider-image-mo_root-2YrD_
													provider-image-mo_lg-1OYOU
												"
												alt="Dr. Sheinin"
												itemprop="image"
												src="//photos.healthgrades.com/img/silhouettes/silhouette-male_w90h120_v1.jpg"
												gender="M"
											/>
										</div>
										<div class="provider-card__provider-strengths">
											<ul
												class="provider-strengths"
												data-qa-target="provider-strenghts"
											>
												<li
													class="provider-strengths__strength-item bangla-font"
													data-qa-target="strength-item--1"
												>
													মেডিসিন , বাতজর ও হৃদরোগ বিশেষজ্ঞ
												</li>
												<li
													class="provider-strengths__strength-item bangla-font"
													data-qa-target="strength-item--2"
												>
													সিসিডি (বারডেম)
												</li>
												<li
													class="provider-strengths__strength-item bangla-font"
													data-qa-target="strength-item--3"
												>
													এক্স কনসালটেন্ট(উখিয়া হেল্থ কমপ্লেক্স, কক্সবাজার)
													আজিমপুর মেটারনিটি হাসপাতাল
												</li>
												<li
													class="provider-strengths__strength-item bangla-font"
													data-qa-target="strength-item--3"
												>
													ঢাকা
												</li>
											</ul>
										</div>
										<div class="provider-card__view-profile-btn">
											<a
												class="view-profile-btn button bangla-font"
												href="/physician/dr-arkady-sheinin-22rj2"
												target="_self"
												>বিস্তারিত দেখুন<span class="sr-only">
													of Dr. Sheinin</span
												></a
											>
										</div>
									</div>
								</li>

								<li class="provider-card-deck__provider-card">
									<div
										class="provider-card provider-card--3BXNV"
										id="provider-card-3BXNV"
										data-qa-target="provider-card-2"
									>
										<div class="provider-card__provider-details">
											<h3 class="provider-details__provider-name-link">
												<a
													class="provider-name-link"
													href="/physician/dr-olga-tseyko-3bxnv"
													target="_self"
													>Dr. Olga Tseyko, MD</a
												>
											</h3>
											<div class="provider-details__provider-specialty">
												Family Medicine
											</div>
											<div class="provider-details__provider-rating">
												<div
													class="star-rating star-rating--inline"
													data-qa-target="provider-rating"
												>
													<span class="star-rating__rating-stars"
														><svg
															class="rating-stars"
															data-qa-target="rating-stars"
															viewBox="0 0 130 24"
															aria-hidden="true"
														>
															<rect
																class="rating-stars__background-stars"
																fill="url(#svg-star-bg)"
																width="100%"
																height="100%"
															></rect>
															<rect
																class="rating-stars__rating-stars"
																data-qa-target="rating-stars--3-stars"
																fill="url(#svg-star-overlay)"
																width="59%"
																height="100%"
															></rect></svg></span
													><span class="sr-only">Rated 3 out of 5 stars</span
													><span class="star-rating__reviews"
														><span class="sr-only">, with</span> 9 ratings</span
													>
												</div>
											</div>
										</div>
										<div class="provider-card__provider-img">
											<img
												class="
													provider-img
													provider-image-mo_root-2YrD_
													provider-image-mo_lg-1OYOU
												"
												alt="Dr. Tseyko"
												itemprop="image"
												src="//photos.healthgrades.com/img/silhouettes/silhouette-female_w90h120_v1.jpg"
												gender="F"
											/>
										</div>
										<div class="provider-card__provider-strengths">
											<ul
												class="provider-strengths"
												data-qa-target="provider-strenghts"
											>
												<li
													class="provider-strengths__strength-item"
													data-qa-target="strength-item--1"
												>
													<svg
														class="
															strength-item__icon
															strength-item__icon--TelehealthIcon
															icon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj
														"
														viewBox="0 0 24 24"
														width="1em"
														height="1em"
														aria-hidden="true"
														data-qa-target="telehealth-icon"
														focusable="false"
													>
														<g fill="currentColor">
															<path
																d="M13.5 16h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM13.5 20h-10c-.827 0-1.5-.673-1.5-1.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H3v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z"
															></path>
															<path
																d="M20.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z"
															></path>
															<path
																d="M18.5 18a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
															></path>
														</g>
													</svg>
													Offers Telehealth
												</li>
											</ul>
										</div>
										<div class="provider-card__view-profile-btn">
											<a
												class="view-profile-btn button"
												href="/physician/dr-olga-tseyko-3bxnv"
												target="_self"
												>View Profile<span class="sr-only">
													of Dr. Tseyko</span
												></a
											>
										</div>
									</div>
								</li>
								<li class="provider-card-deck__provider-card">
									<div
										class="provider-card provider-card--G92LC"
										id="provider-card-G92LC"
										data-qa-target="provider-card-3"
									>
										<div class="provider-card__provider-details">
											<h3 class="provider-details__provider-name-link">
												<a
													class="provider-name-link"
													href="/physician/dr-devon-white-g92lc"
													target="_self"
													>Dr. Devon White, DO</a
												>
											</h3>
											<div class="provider-details__provider-specialty">
												Family Medicine
											</div>
											<div class="provider-details__provider-rating">
												<div
													class="star-rating star-rating--inline"
													data-qa-target="provider-rating"
												>
													<span class="star-rating__rating-stars"
														><svg
															class="rating-stars"
															data-qa-target="rating-stars"
															viewBox="0 0 130 24"
															aria-hidden="true"
														>
															<rect
																class="rating-stars__background-stars"
																fill="url(#svg-star-bg)"
																width="100%"
																height="100%"
															></rect>
															<rect
																class="rating-stars__rating-stars"
																data-qa-target="rating-stars--5-stars"
																fill="url(#svg-star-overlay)"
																width="99%"
																height="100%"
															></rect></svg></span
													><span class="sr-only">Rated 5 out of 5 stars</span
													><span class="star-rating__reviews"
														><span class="sr-only">, with</span> 5 ratings</span
													>
												</div>
											</div>
										</div>
										<div class="provider-card__provider-img">
											<img
												class="
													provider-img
													provider-image-mo_root-2YrD_
													provider-image-mo_lg-1OYOU
												"
												alt="Dr. White"
												itemprop="image"
												src="//photos.healthgrades.com/img/silhouettes/silhouette-female_w90h120_v1.jpg"
												gender="F"
											/>
										</div>
										<div class="provider-card__provider-strengths">
											<ul
												class="provider-strengths"
												data-qa-target="provider-strenghts"
											>
												<li
													class="provider-strengths__strength-item"
													data-qa-target="strength-item--1"
												>
													<svg
														class="
															strength-item__icon
															strength-item__icon--TelehealthIcon
															icon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj
														"
														viewBox="0 0 24 24"
														width="1em"
														height="1em"
														aria-hidden="true"
														data-qa-target="telehealth-icon"
														focusable="false"
													>
														<g fill="currentColor">
															<path
																d="M13.5 16h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM13.5 20h-10c-.827 0-1.5-.673-1.5-1.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H3v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z"
															></path>
															<path
																d="M20.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z"
															></path>
															<path
																d="M18.5 18a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
															></path>
														</g>
													</svg>
													Offers Telehealth
												</li>
												<li
													class="provider-strengths__strength-item"
													data-qa-target="strength-item--2"
												>
													<svg
														class="
															strength-item__icon
															strength-item__icon--CalendarIcon
															icon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj
														"
														viewBox="0 0 24 24"
														width="1em"
														height="1em"
														aria-hidden="true"
														data-qa-target="calendar-icon"
														focusable="false"
													>
														<g
															fill="none"
															stroke="currentColor"
															stroke-linecap="round"
														>
															<path
																d="M8.5 11.5h1m2 0h1m2 0h1m2 0h1m-1 2h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m0-14v3m11-3v3"
															></path>
															<path d="M3 8.5h18.5"></path>
															<rect
																height="15"
																width="19"
																rx="1"
																x="2.5"
																y="5.5"
															></rect>
														</g>
													</svg>
													Easy scheduling
												</li>
												<li
													class="provider-strengths__strength-item"
													data-qa-target="strength-item--3"
												>
													<svg
														class="
															strength-item__icon strength-item__icon--HeartIcon
															icon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj
														"
														viewBox="0 0 24 24"
														width="1em"
														height="1em"
														aria-hidden="true"
														data-qa-target="heart-icon"
														focusable="false"
													>
														<path
															fill="currentColor"
															d="M11.9 20h-.2a34 34 0 0 1-4.3-3.2 16.7 16.7 0 0 1-3-3.5C3.4 11.8 3 10.3 3 9c0-.9.2-1.7.7-2.4A5 5 0 0 1 7.9 4c.5 0 1 0 1.4.3a5.3 5.3 0 0 1 2.6 2c.3-.6.7-1 1.2-1.3A4.9 4.9 0 0 1 16 4c.9 0 1.7.2 2.4.7a5 5 0 0 1 2.5 4.2c0 1.5-.5 3-1.4 4.4-.8 1.2-1.7 2.4-3 3.5a25.8 25.8 0 0 1-4.2 3.1l-.3.1zm-4-15.1c-.7 0-1.4.2-2 .5a4 4 0 0 0-2 3.5c0 1.3.4 2.7 1.3 4.1.7 1 1.6 2.1 2.8 3.2a24.8 24.8 0 0 0 3.9 3 22.3 22.3 0 0 0 6.7-6.2 7.7 7.7 0 0 0 1.3-4 4 4 0 0 0-2-3.6c-.6-.3-1.3-.5-2-.5-.5 0-1 .1-1.6.4-.4.2-.9.5-1.2 1-.4.3-.6.7-.8 1.1l-.1.3h-.6l-.2-.3c-.1-.4-.3-.8-.7-1.2l-1.3-1L8 5z"
														></path>
													</svg>
													Employs friendly staff
												</li>
											</ul>
										</div>
										<div class="provider-card__view-profile-btn">
											<a
												class="view-profile-btn button"
												href="/physician/dr-devon-white-g92lc"
												target="_self"
												>View Profile<span class="sr-only">
													of Dr. White</span
												></a
											>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="section-container__view-all-link">
						<a
							class="view-all-link view-all-link--docs-near-me"
							id="docs-near-me-view-all-link"
							data-qa-target="docs-near-me-view-all-link"
							href="/usearch?what=family%20medicine&amp;pageNum=1&amp;sort.provider=bestmatch"
							target="_self"
							><span class="bangla-font">সকল ডাক্তার দেখুন </span>
							<svg
								class="icon-mo_icon-2DQ-j icon-mo_md-1oiv-"
								viewBox="0 0 24 24"
								width="1em"
								height="1em"
								aria-hidden="true"
								data-qa-target="arrow-right-icon"
								focusable="false"
							>
								<g
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M3.5,12.5 L21.5,12.5"></path>
									<polyline points="13.5 20.5 21.5 12.5 13.5 4.5"></polyline>
								</g></svg
						></a>
					</div>
				</div>
			</div>
		</section>
		<!--Govt call centers-->
		<section class="section">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 mb-5">
						<h1 class="bangla-font text-center">সরকারি জরুরী কল সেন্টার</h1>
					</div>
					<div class="col-lg-12">
						<div class="row">
							<div
								class="col-lg-3 col-6 align-middle"
								v-for="(item, index) in national_emergency_numbers"
								:key="index"
							>
								<card class="border-1 call-center-box">
									<img
										:src="'/' + item.logo"
										class="img-center img-fluid"
										style="width: 100px"
									/>

									<h3 class="call-center-number text-center mt-1">
										{{ item.number }}
										<span
											class="bangla-font call-center-badge danger"
											v-if="item.charge"
										>
											চার্জ প্রযোজ্য
										</span>
										<span class="bangla-font call-center-badge success" v-else>
											টোল ফ্রি
										</span>
									</h3>
									<p class="bangla-font text-center call-center-title mt-0">
										{{ item.name }}
									</p>
								</card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End call centers-->
		<Carousel></Carousel>
	</div>
</template>
<script>
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel.vue";
export default {
	name: "Home",
	components: {
		Hero,
		Carousel,
	},
	data() {
		return {
			services: [
				{
					name: "ডাক্তার",
					icon: "img/theme/doctor.jpg",
					url: "/doctors",
				},
				{
					name: "হাসপাতাল",
					icon: "img/theme/hospital225x225.png",
					url: "/hospitals-clinics",
				},
				{
					name: "ব্লাড ব্যাংক",
					icon: "img/theme/bloodbank225x225.png",
					url: "/blood-bank",
				},
				{
					name: "অ্যাম্বুলেন্স",
					icon: "img/theme/ambulance225x225.png",
					url: "/all-ambulance",
				},
				{
					name: "ফায়ার সার্ভিস",
					icon: "img/theme/firestattion225x225.jpg",
					url: "/fire-stations",
				},
				{
					name: "পুলিশ",
					icon: "img/theme/police.png",
					url: "/police-stations",
				},
			],
			national_emergency_numbers: [
				{
					name: "জাতীয় জরুরী সেবা",
					number: 999,
					charge: false,
					logo: "img/govt_call_centers/nhd_logo2.png",
				},
				{
					name: "দুর্নীতি দমন কমিশন",
					number: 106,
					charge: false,
					logo: "img/govt_call_centers/ic_call_acc.png",
				},
				{
					name: "কৃষি কল সেন্টার",
					number: 16123,
					charge: true,
					logo: "img/govt_call_centers/ic_call_agriculture.png",
				},
				{
					name: "স্বাস্থ্য বাতায়ন",
					number: 16263,
					charge: true,
					logo: "img/govt_call_centers/ic_call_health.png",
				},
				{
					name: "বিটিসিএল",
					number: 16402,
					charge: true,
					logo: "img/govt_call_centers/ic_call_btcl.png",
				},
				{
					name: "মহিলা সংস্থা / তথ্য আপা",
					number: 10922,
					charge: true,
					logo: "img/govt_call_centers/ic_call_national_female.png",
				},
				{
					name: "দুর্যোগের আগাম বার্তা",
					number: 10941,
					charge: true,
					logo: "img/govt_call_centers/ic_call_durjog.png",
				},
				{
					name: "চাইল্ড হেল্প লাইন",
					number: 1098,
					charge: false,
					logo: "img/govt_call_centers/ic_call_durjog.png",
				},
				{
					name: "বাংলাদেশ ব্যাংক",
					number: 16236,
					charge: true,
					logo: "img/govt_call_centers/ic_call_bank.png",
				},
				{
					name: "নারী ও শিশু নির্যাতন প্রতিরোধ সেল",
					number: 109,
					charge: false,
					logo: "img/govt_call_centers/ic_call_mohila_sisu.png",
				},
				{
					name: "প্রবাসবন্ধু কল সেন্টার",
					number: "09654333333",
					charge: true,
					logo: "img/govt_call_centers/ic_call_jatio_help_desk.png",
				},
				{
					name: "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
					number: "01799090011",
					charge: true,
					logo: "img/govt_call_centers/ic_call_probasi_collan.png",
				},
				{
					name: "জাতীয় পরিচয় পত্র",
					number: 105,
					charge: true,
					logo: "img/govt_call_centers/ic_call_vote.png",
				},
				{
					name: "সরকারি আইন সেবা",
					number: 16430,
					charge: false,
					logo: "img/govt_call_centers/ic_call_sorkari_ayn_seba.png",
				},
				{
					name: "ইউনিয়ন পরিষদ হেল্পলাইন",
					number: 16256,
					charge: true,
					logo: "img/govt_call_centers/ic_call_union_porishod.png",
				},
				{
					name: "বিটিআরসি অভিযোগ কেন্দ্র",
					number: 100,
					charge: false,
					logo: "img/govt_call_centers/ic_call_btrc.png",
				},
			],
		};
	},
	metaInfo: {
		title: "বন্ধন | মানুষের পাশে সব সময় ",
		meta: [
			{
				vmid: "description",
				name: "description",
				content: "মানুষের পাশে সব সময়",
			},
		],
	},
};
</script>
<style scoped>
.call-center-box {
	min-height: 300px;
}
@media (min-width: 75rem) {
	.section-container--docs-near-me {
		grid-template-columns: 18.5rem 1fr;
		grid-template-rows: 2fr 1fr;
		gap: 1rem;
	}
}

.section-container--docs-near-me {
	display: grid;
}
@media (min-width: 75rem) {
	.section-container {
		padding-top: 6rem;
		padding-bottom: 7rem;
	}
}
@media (min-width: 48rem) {
	.section-container {
		padding-top: 4rem;
		padding-bottom: 5rem;
	}
}
.section-container--docs-near-me {
	display: grid;
}

.content-section--docs-near-me {
	background-color: #f7f7f7;
}
.section-container {
	max-width: 75rem;
	margin: 0 auto;
	padding: 2rem 1rem;
}
.section-container--docs-near-me {
	display: grid;
}

.section-container {
	max-width: 75rem;
	margin: 0 auto;
	padding: 2rem 1rem;
}
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: 0.75rem;
	color: #4a4a4d;
	font-weight: 700;
	line-height: 1.25;
}

*,
:after,
:before {
	box-sizing: border-box;
}
user agent stylesheet h2 {
	display: block;
	font-size: 1.5em;
	margin-block-start: 0.83em;
	margin-block-end: 0.83em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	font-weight: bold;
}
.section-container--docs-near-me .title__specialty {
	text-transform: capitalize;
}
.section-container__provider-card-deck {
	max-width: 100vw;
	overflow-x: auto;
	margin: 0 -1rem;
	padding: 0 1rem;
}
.provider-card-deck {
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	min-width: 48rem;
	grid-gap: 1rem;
	padding: 0.25rem 1rem 0.5rem 0;
}
*,
:after,
:before {
	box-sizing: border-box;
}
li {
	display: list-item;
	text-align: -webkit-match-parent;
}
.provider-card-deck {
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	min-width: 48rem;
	grid-gap: 1rem;
	padding: 0.25rem 1rem 0.5rem 0;
}
.provider-card {
	display: grid;
	height: 100%;
	border-radius: 0.25rem;
	background-color: #fff;
	box-shadow: 0 1px 3px rgb(0 0 0 / 40%);
	color: #626366;
	transition: box-shadow 0.25s;
	position: relative;
	row-gap: 1rem;
	padding: 1rem;
	grid-template-columns: 1fr 90px;
	grid-template-rows: auto 1fr auto;
	overflow: hidden;
	font-size: 0.75rem;
}
.provider-card__provider-details {
	display: grid;
	row-gap: 0.5rem;
}
.provider-details__provider-name-link {
	margin-bottom: 0;
	font-size: 21px;
}
.provider-img {
	position: absolute;
	right: 0;
	top: 0;
	width: 90px;
	height: auto;
}
.provider-image-mo_lg-1OYOU {
	width: 96px;
	height: 128px;
}
.provider-image-mo_root-2YrD_ {
	box-sizing: border-box;
	display: inline-block;
}
.provider-card__provider-img {
	grid-column: 2;
}
.provider-card__provider-strengths {
	grid-column: 1 / span 2;
	display: flex;
	align-items: flex-start;
	font-size: 0.875rem;
}
.provider-strengths {
	margin: 0;
	padding: 0;
	list-style: none;
	display: grid;
	row-gap: 0.25em;
}
a,
button {
	color: #0202ea;
	font-weight: 500;
	text-decoration: none;
}

.provider-strengths__strength-item {
	display: grid;
	grid-template-columns: auto 1fr;
	-moz-column-gap: 0.5em;
	column-gap: 0.5em;
	line-height: 1.25;
}
@media (min-width: 75rem) {
	.section-container--docs-near-me .section-container__view-all-link {
		margin-top: 0;
	}
}
@media (min-width: 75rem) {
	.section-container--docs-near-me .section-container__provider-card-deck {
		grid-column: 2;
		grid-row: 1 / span 2;
	}
}
.section-container--docs-near-me .section-container__view-all-link {
	margin-top: 1rem;
}
.section-container__view-all-link {
	position: relative;
}
.provider-card__view-profile-btn {
	grid-column: 1 / span 2;
}
.view-profile-btn {
	width: 100%;
}
.button {
	display: inline-block;
	border-radius: 4rem;
	padding: 0.45rem 1.25rem 0.65rem;
	color: #fff;
	font-size: 0.875rem;
	font-weight: 700;
	line-height: 1.25;
	transition: box-shadow 0.25s, background-color 0.25s;
	text-align: center;
	vertical-align: middle;
	background: #d83d40;
	border: 1px solid #d83d40;
}
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}
</style>
