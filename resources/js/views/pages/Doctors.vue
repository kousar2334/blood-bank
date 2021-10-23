<template>
	<div>
		<doctor-hero></doctor-hero>
		<!-- <section class="section section-lg pt-lg-0 mt--100">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-12">
						<div class="row row-grid">
							<div class="col-lg-12">
								<card class="border-0" shadow body-classes="py-5">
									<h2 class="bangla-font text-center mb-2 mt-2">সকল ডাক্তার</h2>
								</card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> -->
		<section class="section section-lg pt-lg-0">
			<div class="p-3">
				<div class="row">
					<div class="col-12 page-header pb-4">
						<h2 class="bangla-font text-center mb-2 mt-2">সকল ডাক্তার</h2>
					</div>
					<div
						v-for="(doctor, index) in doctors"
						:key="index"
						class="col-lg-3 p-3"
					>
						<single-doctor :doctor="doctor"> </single-doctor>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import DoctorHero from "../../components/doctor/DoctorHero.vue";
import SingleDoctor from "../../components/doctor/SingleDoctor.vue";
export default {
	name: "Doctors",
	components: {
		DoctorHero,
		SingleDoctor,
	},
	data() {
		return {
			doctors: [
				{
					name: "ডাঃ মোঃ শফিকুর রহমান পাটওয়ারী",
					qualification: "এমবিবিএস; এমপিএইচ; ইওসি (অব্স এন্ড গাইনি)",
					position: "সহকারী অধ্যাপক",
					specialist: "মেডিসিন , বাতজর ও হৃদরোগ বিশেষজ্ঞ",
					working_place: "জাতীয় হৃদরোগ ইন্সিটিউট ও হাসপাতাল, ঢাকা ।",
					mobile: "০১৭১১-৬৭৫৮৪৬, ০১৯১৯৬৫৮৫৯৫",
					bmdc_no: "564654",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
					chambers: [
						{
							chamber:
								"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর । মোবাইল : ০১৭৭৩৩৪০৯২ , সাক্ষাতের সময় : সকাল ৯ টা থেকে রাত ১০ টা , প্রতি শুক্রবার ",
						},
					],
				},
				{
					name: "ডা. আরজিনা আক্তার লাবনী",
					qualification: "এমবিবিএস; এমপিএইচ; ইওসি (অব্স এন্ড গাইনি)",
					position: "সহকারী অধ্যাপক",
					specialist: "প্রসূতি ও গাইনিরোগে অভিজ্ঞ",
					working_place: "জাতীয় হৃদরোগ ইন্সিটিউট ও হাসপাতাল, ঢাকা ।",
					mobile: "০১৭১১-৬৭৫৮৪৬, ০১৯১৯৬৫৮৫৯৫",
					bmdc_no: "564654",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
					chambers: [
						{
							chamber:
								"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর । মোবাইল : ০১৭৭৩৩৪০৯২ , সাক্ষাতের সময় : সকাল ৯ টা থেকে রাত ১০ টা , প্রতি শুক্রবার ",
						},
						{
							chamber:
								"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর । মোবাইল : ০১৭৭৩৩৪০৯২ , সাক্ষাতের সময় : সকাল ৯ টা থেকে রাত ১০ টা , প্রতি শুক্রবার ",
						},
					],
				},
				{
					name: "ডা. মো. আসিফ ইকবাল",
					qualification: "এমবিবিএস; বিসিএস; সিসিডি (বারডেম)",
					position: "",
					specialist:
						"জেনারেল ফিজিশিয়ান(মেডিসিন, হৃদরোগ, মা ও শিশু, ডায়াবেটিস, চর্ম ও যৌন রোগের চিকিৎসক।)",
					working_place: "",
					mobile: "",
					bmdc_no: "564654",
					image: "",
					chambers: [
						{
							chamber:
								"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর । মোবাইল : ০১৭৭৩৩৪০৯২ , সাক্ষাতের সময় : সকাল ৯ টা থেকে রাত ১০ টা , প্রতি শুক্রবার ",
						},
					],
				},
				{
					name: "ডা. মো. আসিফ ইকবাল",
					qualification: "এমবিবিএস; বিসিএস; সিসিডি (বারডেম)",
					position: "",
					specialist:
						"জেনারেল ফিজিশিয়ান(মেডিসিন, হৃদরোগ, মা ও শিশু, ডায়াবেটিস, চর্ম ও যৌন রোগের চিকিৎসক।)",
					working_place: "",
					mobile: "",
					bmdc_no: "564654",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
					chambers: [
						{
							chamber:
								"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর । মোবাইল : ০১৭৭৩৩৪০৯২ , সাক্ষাতের সময় : সকাল ৯ টা থেকে রাত ১০ টা , প্রতি শুক্রবার ",
						},
					],
				},
			],
		};
	},
};
</script>
