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
				<div class="col-lg-12 p-3" v-if="fire_services.length > 0">
					<b-table
						bordered
						class="bangla-font"
						:items="fire_services"
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
	name: "FireStation",
	components: {
		Hero,
	},
	data() {
		return {
			title: "ফায়ার সার্ভিস",
			emptyMessage: "দুঃখিত !... কোন ফায়ার সার্ভিস খুঁজে পাওয়া যায় নি ।",
			fields: [
				// {
				// 	key: "no",
				// 	label: "ক্রমিক নং",
				// },
				{
					key: "name",
					label: "অফিস / ফায়ার স্টেশনের নাম ",
				},
				{
					key: "mobile",
					label: "যোগাযোগের নাম্বার",
				},
			],
			fire_services: [],
		};
	},
	mounted() {
		this.getFireServices();
	},
	methods: {
		/**
		 * Get fire services
		 */
		getFireServices() {
			axios
				.post("/api/get-fire-service-list")
				.then((response) => {
					if (response.data.success) {
						this.fire_services = response.data.fire_services;
					}
				})
				.catch((error) => {});
		},
		bangla_number(input) {
			return input;
		},
	},
	metaInfo: {
		title: "ফায়ার সার্ভিস",
	},
};
</script>
<style scoped>
table tr th {
	font-family: "SolaimanLipiNormal";
}
td {
	font-family: "SolaimanLipiNormal";
}
</style>
