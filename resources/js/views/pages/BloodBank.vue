<template>
	<div>
		<BloodbankHero
			:blood-groups="bloodGroups"
			v-on:selectBloodGroup="getSelectedBloodGroup($event)"
		></BloodbankHero>
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
						<h2 class="bangla-font text-center mb-2 mt-2">
							{{ title }}
						</h2>
					</div>
					<div
						v-for="(doctor, index) in doctors"
						:key="index"
						class="col-lg-3 p-3"
					>
						<single-donor :doctor="doctor"> </single-donor>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import BloodbankHero from "../../components/bloodBank/BloodBankHero.vue";
import SingleDonor from "../../components/bloodBank/SingleDonor.vue";
export default {
	name: "Doctors",
	components: {
		BloodbankHero,
		SingleDonor,
	},
	data() {
		return {
			title: "সকল গ্রুপের রক্তদাতাদের তালিখা",
			bloodGroups: [
				{
					id: 0,
					bn_name: "সকল গ্রুপের রক্ত",
				},
				{
					id: 1,
					bn_name: "ও পজিটিভ(O+)",
				},
				{
					id: 2,
					bn_name: "ও নেগেটিভ O-",
				},
				{
					id: 3,
					bn_name: "A+",
				},
				{
					id: 4,
					bn_name: "A-",
				},
				{
					id: 5,
					bn_name: "B+",
				},
				{
					id: 6,
					bn_name: "B-",
				},
				{
					id: 7,
					bn_name: "AB+",
				},
				{
					id: 8,
					bn_name: "AB-",
				},
			],
			doctors: [
				{
					name: "মোঃ শফিকুর রহমান পাটওয়ারী",
					blood_group: "O+",
					address: "জাতীয় হৃদরোগ ইন্সিটিউট ও হাসপাতাল, ঢাকা ।",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "০১৯১৯৬৫৮৫৯৫",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
				},
				{
					name: "আরজিনা আক্তার লাবনী",
					blood_group: "O-",
					address: "জাতীয় হৃদরোগ ইন্সিটিউট ও হাসপাতাল, ঢাকা ।",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
				},
				{
					name: "মো. আসিফ ইকবাল",
					blood_group: "AB+",
					address:
						"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর ।",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "০১৯১৯৬৫৮৫৯৫",
					image: "",
				},
				{
					name: "মো. আসিফ ইকবাল",
					blood_group: "AB-",
					address: "চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে )",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "০১৯১৯৬৫৮৫৯৫",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
				},
				{
					name: "মোঃ শফিকুর রহমান পাটওয়ারী",
					blood_group: "O+",
					address: "জাতীয় হৃদরোগ ইন্সিটিউট ও হাসপাতাল, ঢাকা ।",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "০১৯১৯৬৫৮৫৯৫",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
				},
				{
					name: "আরজিনা আক্তার লাবনী",
					blood_group: "O-",
					address: "জাতীয় হৃদরোগ ইন্সিটিউট ও হাসপাতাল, ঢাকা ।",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
				},
				{
					name: "মো. আসিফ ইকবাল",
					blood_group: "AB+",
					address:
						"চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে ) , চাঁদপুর ।",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "০১৯১৯৬৫৮৫৯৫",
					image: "",
				},
				{
					name: "মো. আসিফ ইকবাল",
					blood_group: "AB-",
					address: "চাঁদপুর মেডিকেল সেন্টার , ছলঘার ( ডি , সি অফিসের সামনে )",
					mobile: "০১৭১১-৬৭৫৮৪৬",
					mobile2: "০১৯১৯৬৫৮৫৯৫",
					image: "uploads/profile_image/doctor/10222021043027d.jpg",
				},
			],
		};
	},
	methods: {
		getSelectedBloodGroup(selectedGroup) {
			console.log("from");
			// console.log(event);
			this.title = selectedGroup.bn_name + " গ্রুপের রক্তদাতাদের তালিখা";
		},
	},
};
</script>
