<template>
	<div>
		<hero></hero>
		<!--Emergency Service-->
		<section class="section section-lg pt-lg-0 mt--100">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-12">
						<div class="row row-grid">
							<div class="col-lg-4">
								<router-link to="/doctors">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/doctor.jpg'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px"
										/>

										<h2 class="bangla-font text-center mt-5">ডাক্তার</h2>
									</card>
								</router-link>
							</div>
							<div class="col-lg-4">
								<router-link to="/hospitals-clinics">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/hospital.png'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px; min-height: 200px"
										/>

										<h2 class="bangla-font text-center mt-5">হাসপাতাল</h2>
									</card>
								</router-link>
							</div>
							<div class="col-lg-4">
								<router-link to="/blood-bank">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/blood_bank.png'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px; min-height: 200px"
										/>
										<h2 class="bangla-font text-center mt-5">ব্লাড ব্যাংক</h2>
									</card>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center mt-5">
					<div class="col-lg-12">
						<div class="row row-grid">
							<div class="col-lg-4">
								<router-link to="/all-ambulance">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/ambulance.png'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px; min-height: 200px"
										/>

										<h2 class="bangla-font text-center mt-5">অ্যাম্বুলেন্স</h2>
									</card>
								</router-link>
							</div>
							<div class="col-lg-4">
								<router-link to="/fire-stations">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/fire_stattion.jpg'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px; min-height: 200px"
										/>

										<h2 class="bangla-font text-center mt-5">ফায়ার সার্ভিস</h2>
									</card>
								</router-link>
							</div>
							<div class="col-lg-4">
								<router-link to="/police-stattons">
									<card class="border-0" hover shadow body-classes="py-5">
										<img
											v-lazy="'img/theme/police.png'"
											class="
												rounded-circle
												img-center img-fluid
												shadow
												shadow-lg--hover
											"
											style="width: 200px; min-height: 200px"
										/>
										<h2 class="bangla-font text-center mt-5">পুলিশ</h2>
									</card>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Emergency Service-->
		<!--Govt call centers-->
		<section class="section section-lg pt-lg-0 mt-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 mb-5">
						<h1 class="bangla-font text-center">সরকারি জরুরী কল সেন্টার</h1>
					</div>
					<div class="col-lg-12">
						<div class="row">
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/nhd_logo2.png'"
										class="img-center img-fluid"
										style="width: 100px"
									/>

									<h2 class="call-center-number text-center mt-1">
										999<span class="bangla-font call-center-badge success"
											>টোল ফ্রি</span
										>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										জাতীয় জরুরী সেবা
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_acc.png'"
										class="img-center img-fluid"
										style="width: 130px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										106<span class="bangla-font call-center-badge success"
											>টোল ফ্রি</span
										>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										দুর্নীতি দমন কমিশন
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_agriculture.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										16123<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										কৃষি কল সেন্টার
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_health.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										16263<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										স্বাস্থ্য বাতায়ন
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_btcl.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										16402<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										বিটিসিএল
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="
											'/img/govt_call_centers/ic_call_national_female.png'
										"
										class="img-center img-fluid"
										style="width: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										10922<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য</span
										>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										মহিলা সংস্থা / তথ্য আপা
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_durjog.png'"
										class="img-center img-fluid"
										style="width: 130px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										10941<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য</span
										>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										দুর্যোগের আগাম বার্তা
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_child.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										1098<span class="bangla-font call-center-badge success"
											>টোল ফ্রি
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										চাইল্ড হেল্প লাইন
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_bank.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										16236<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										বাংলাদেশ ব্যাংক
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_mohila_sisu.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										109<span class="bangla-font call-center-badge success"
											>টোল ফ্রি
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										নারী ও শিশু নির্যাতন প্রতিরোধ সেল
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="
											'/img/govt_call_centers/ic_call_jatio_help_desk.png'
										"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										09654333333<span
											class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										প্রবাসবন্ধু কল সেন্টার
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_probasi_collan.png'"
										class="img-center img-fluid"
										style="width: 100px"
									/>

									<h2 class="call-center-number text-center mt-1">
										01799090011<span
											class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য</span
										>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_vote.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										105<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য</span
										>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										জাতীয় পরিচয় পত্র
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="
											'/img/govt_call_centers/ic_call_sorkari_ayn_seba.png'
										"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										16430<span class="bangla-font call-center-badge success"
											>টোল ফ্রি
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										সরকারি আইন সেবা
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_union_porishod.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										16256<span class="bangla-font call-center-badge danger"
											>চার্জ প্রযোজ্য
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										ইউনিয়ন পরিষদ হেল্পলাইন
									</p>
								</card>
							</div>
							<div class="col-lg-3 call-center-box">
								<card class="border-1">
									<img
										v-lazy="'/img/govt_call_centers/ic_call_btrc.png'"
										class="img-center img-fluid"
										style="width: 120px; min-height: 120px"
									/>

									<h2 class="call-center-number text-center mt-1">
										100<span class="bangla-font call-center-badge success"
											>টোল ফ্রি
										</span>
									</h2>
									<p class="bangla-font text-center call-center-title mt-0">
										বিটিআরসি অভিযোগ কেন্দ্র
									</p>
								</card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End call centers-->
	</div>
</template>
<script>
import Hero from "../../components/Hero";
export default {
	name: "Home",
	components: {
		Hero,
	},
};
</script>
<style scoped>
</style>
