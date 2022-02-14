<template>
	<div>
		<hero></hero>
		<section class="section section-lg pt-0">
			<div class="container p-0">
				<div class="col-12 page-header pb-2 pt-2">
					<h2 class="bangla-font text-center mb-2 mt-2">
						{{ title }}
					</h2>
				</div>
				<div class="col-lg-12 p-3" v-if="police_stations.length > 0">
					<b-table
						bordered
						class="bangla-font"
						:items="police_stations"
						:fields="fields"
					>
						<template v-slot:cell(no)="data">
							{{ bangla_number(data.index + 1) }}
						</template>
						<template v-slot:cell(mobile)="data">
							{{ data.item.phone
							}}<span v-if="data.item.mobile_1 && data.item.phone">, </span
							>{{ data.item.mobile_1
							}}<span v-if="data.item.mobile_2 && data.item.mobile_1">, </span
							>{{ data.item.mobile_2 }}
						</template>
					</b-table>
					<!-- <div class="text-right">
						<a
							href="http://www.fireservice.gov.bd/"
							target="_blank"
							class="bangla-font"
							>তথ্য সূত্রঃ বাংলাদেশ ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর</a
						>
					</div> -->
				</div>
				<div class="col-lg-12 p-3" v-else>
					<p class="bangla-font text-danger text-center">
						{{ emptyMessage }}
					</p>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import Hero from "../../components/Hero.vue";
import axios from "axios";
export default {
	name: "Police",
	components: {
		Hero,
	},
	data() {
		return {
			title: "পুলিশ স্টেশন ",
			emptyMessage: "দুঃখিত !... কোন পুলিশ স্টেশন খুঁজে পাওয়া যায় নি ।",
			fields: [
				{
					key: "name",
					label: "অফিস / পুলিশ স্টেশনের নাম ",
				},
				{
					key: "mobile",
					label: "যোগাযোগের নাম্বার",
				},
			],
			police_stations: [],
			items: [
				{
					no: "০১",
					name: "পুলিশ সুপারের কার্যালয়, বগুড়া",
					mobiles: "০১৭১৩-৩৭৪০৫৮",
				},
				{
					no: "০২ ",
					name: "শান্তাহার রেলওয়ে পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "০৩",
					name: "সদর থানা , বগুড়া",
					mobiles: "০৫১-৭৮২৬৬",
				},
				{
					no: "০৪",
					name: "নারুলী পুলিশ ফাঁড়ি",
					mobiles: "নাই",
				},
				{
					no: "০৫",
					name: "রেলওয়ে পুলিশ ফাঁড়ী, বগুড়া",
					mobiles: "০১৭৩৩-৩৯০২০৫",
				},
				{
					no: "০৬",
					name: "ধুনট পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "০৭",
					name: "সারিয়াকান্দি পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৫",
				},
				{
					no: "০৮",
					name: "কাহালু পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৮",
				},
				{
					no: "০৯",
					name: "নন্দীগ্রাম ফায়ার স্টেশন",
					mobiles: "০১৩০৪-১৭১৭৩৬",
				},
				{
					no: "১০",
					name: "শিবগঞ্জ ফায়ার স্টেশন",
					mobiles: "০১৭৪৭-৪১৫৮৭২",
				},
				{
					no: "১১",
					name: "দুপচাঁচিয়া পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৭",
				},
				{
					no: "১২",
					name: "শাহজানপুর পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৭২",
				},
				{
					no: "১৩",
					name: "আদমদিঘী পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৬",
				},
				{
					no: "১৪",
					name: "গাবতলি মডেল পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬৪",
				},
				{
					no: "১৫",
					name: "সোনাতলা পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "১৬",
					name: "শেরপুর  পুলিশ স্টেশন",
					mobiles: "নাই",
				},
				{
					no: "১৭",
					name: "শিবগঞ্জ পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৬২",
				},
				{
					no: "১৮",
					name: "নন্দিগ্রাম পুলিশ স্টেশন",
					mobiles: "০১৭১৩-৩৭৪০৭১",
				},
				{
					no: "১৯",
					name: "ফুলবাড়ী পুলিশ ফাঁড়ী",
					mobiles: "০১৩২০-১২৬৬০৮",
				},
				{
					no: "২০",
					name: "সাত মাথা ট্রাফিক পুলিশ বক্স",
					mobiles: "নাই",
				},
			],
		};
	},
	mounted() {
		this.getPoliceStations();
	},
	methods: {
		/**
		 * Get police stations
		 */
		getPoliceStations() {
			axios
				.post("/api/get-police-station-list")
				.then((response) => {
					console.log(response.data);
					if (response.data.success) {
						this.police_stations = response.data.police_stations;
					}
				})
				.catch((error) => {});
		},
		bangla_number(input) {
			return input;
		},
	},
	metaInfo: {
		title: "পুলিশ স্টেশন",
	},
};
</script>
