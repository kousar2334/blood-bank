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
					icon: "static/img/theme/doctor.jpg",
					url: "/doctors",
				},
				{
					name: "হাসপাতাল",
					icon: "static/img/theme/hospital225x225.png",
					url: "/hospitals-clinics",
				},
				{
					name: "ব্লাড ব্যাংক",
					icon: "static/img/theme/bloodbank225x225.png",
					url: "/blood-bank",
				},
				{
					name: "অ্যাম্বুলেন্স",
					icon: "static/img/theme/ambulance225x225.png",
					url: "/all-ambulance",
				},
				{
					name: "ফায়ার সার্ভিস",
					icon: "static/img/theme/firestattion225x225.jpg",
					url: "/fire-stations",
				},
				{
					name: "পুলিশ",
					icon: "static/img/theme/police.png",
					url: "/police-stations",
				},
			],
			national_emergency_numbers: [
				{
					name: "জাতীয় জরুরী সেবা",
					number: 999,
					charge: false,
					logo: "static/img/govt_call_centers/nhd_logo2.png",
				},
				{
					name: "দুর্নীতি দমন কমিশন",
					number: 106,
					charge: false,
					logo: "static/img/govt_call_centers/ic_call_acc.png",
				},
				{
					name: "কৃষি কল সেন্টার",
					number: 16123,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_agriculture.png",
				},
				{
					name: "স্বাস্থ্য বাতায়ন",
					number: 16263,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_health.png",
				},
				{
					name: "বিটিসিএল",
					number: 16402,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_btcl.png",
				},
				{
					name: "মহিলা সংস্থা / তথ্য আপা",
					number: 10922,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_national_female.png",
				},
				{
					name: "দুর্যোগের আগাম বার্তা",
					number: 10941,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_durjog.png",
				},
				{
					name: "চাইল্ড হেল্প লাইন",
					number: 1098,
					charge: false,
					logo: "static/img/govt_call_centers/ic_call_durjog.png",
				},
				{
					name: "বাংলাদেশ ব্যাংক",
					number: 16236,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_bank.png",
				},
				{
					name: "নারী ও শিশু নির্যাতন প্রতিরোধ সেল",
					number: 109,
					charge: false,
					logo: "static/img/govt_call_centers/ic_call_mohila_sisu.png",
				},
				{
					name: "প্রবাসবন্ধু কল সেন্টার",
					number: "09654333333",
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_jatio_help_desk.png",
				},
				{
					name: "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
					number: "01799090011",
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_probasi_collan.png",
				},
				{
					name: "জাতীয় পরিচয় পত্র",
					number: 105,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_vote.png",
				},
				{
					name: "সরকারি আইন সেবা",
					number: 16430,
					charge: false,
					logo: "static/img/govt_call_centers/ic_call_sorkari_ayn_seba.png",
				},
				{
					name: "ইউনিয়ন পরিষদ হেল্পলাইন",
					number: 16256,
					charge: true,
					logo: "static/img/govt_call_centers/ic_call_union_porishod.png",
				},
				{
					name: "বিটিআরসি অভিযোগ কেন্দ্র",
					number: 100,
					charge: false,
					logo: "static/img/govt_call_centers/ic_call_btrc.png",
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
</style>
