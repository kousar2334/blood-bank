<template>
	<div>
		<hero></hero>
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
								<li
									class="provider-card-deck__provider-card"
									v-for="(doctor, index) in top_doctors"
									:key="index"
								>
									<single-doctor :doctor="doctor"> </single-doctor>
								</li>
							</ul>
						</div>
					</div>
					<div class="section-container__view-all-link">
						<router-link
							class="view-all-link view-all-link--docs-near-me"
							id="docs-near-me-view-all-link"
							to="/doctors"
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
						></router-link>
					</div>
				</div>
			</div>
		</section>
		<div class="benefit-area three pt-100 pb-70">
			<div class="container">
				<div class="section-title">
					<h2 class="sub-title bangla-font">আমাদের অন্যান্য সেবা সমূহ</h2>
				</div>
				<div class="row">
					<div
						class="col-sm-6 col-lg-3"
						v-for="(service, index) in services"
						:key="index"
					>
						<div class="benefit-item">
							<!-- <i class="flaticon-house"></i> -->
							<img :src="'/' + service.icon" class="flaticon-house" />

							<router-link :to="service.url">
								<h3 class="bangla-font">{{ service.name }}</h3>
							</router-link>
							<p class="bangla-font">
								ইউক্রেন ও রাশিয়ার মধ্যে আসন্ন যুদ্ধের যে লক্ষণগুলো সম্পর্কে
								সতর্ক করা হয়েছিল তা এখন পুরোপুরি প্রস্তুত বলে মনে করা হচ্ছে।
								সীমান্তের কাছাকাছি ফিল্ড হাসপাতাল স্থাপন করা হয়েছে।
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel.vue";
import SingleDoctor from "../../components/doctor/SingleDoctor.vue";
import axios from "axios";
export default {
	name: "Home",
	components: {
		Hero,
		Carousel,
		SingleDoctor,
	},
	data() {
		return {
			services: [
				{
					name: "হাসপাতাল",
					icon: "img/theme/hospital_one.png",
					url: "/hospitals-clinics",
				},
				{
					name: "অ্যাম্বুলেন্স",
					icon: "img/theme/ambulance225x225.png",
					url: "/all-ambulance",
				},
				{
					name: "ফায়ার সার্ভিস",
					icon: "img/theme/fire_station_one.png",
					url: "/fire-stations",
				},
				{
					name: "পুলিশ",
					icon: "img/theme/police_one.png",
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
			top_doctors: [],
		};
	},
	created() {
		this.getDoctorList();
	},
	methods: {
		/**
		 * Get Doctors
		 */
		getDoctorList() {
			axios
				.post("/api/get-top-doctors", {
					limit: 3,
				})
				.then((response) => {
					if (response.data.success) {
						this.top_doctors = response.data.doctors;
					}
				})
				.catch((error) => {});
		},
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
</style>
