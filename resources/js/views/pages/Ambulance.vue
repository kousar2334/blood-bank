<template>
	<div>
		<ambulance-hero
			:categories="categories"
			@selectItem="getSelectvalue($event)"
		></ambulance-hero>
		<section class="section section-lg pt-0">
			<div class="p-3">
				<div class="row">
					<div class="col-12 page-header pb-4">
						<h2 class="bangla-font text-center mb-2 mt-2">
							{{ title }}
						</h2>
					</div>
					<div
						v-for="(ambulance, index) in ambulances"
						:key="index"
						class="col-lg-3 p-3"
					>
						<single-ambulance :ambulance="ambulance"> </single-ambulance>
					</div>
				</div>
				<div class="text-center mb-2 mt-4">
					<base-pagination
						:total="total"
						:perPage="perPage"
						:value="currentPage"
						align="center"
						:empty-message="emptyMessage"
						@input="changePage($event)"
					></base-pagination>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import AmbulanceHero from "../../components/ambulance/AmbulanceHero.vue";
import SingleAmbulance from "../../components/ambulance/SingleAmbulance.vue";

import axios from "axios";
export default {
	name: "Ambulance",
	components: {
		AmbulanceHero,
		SingleAmbulance,
	},
	data() {
		return {
			title: "সকল অ্যাম্বুলেন্স",
			categories: [],
			selectedDepartment: {},
			currentPage: 1,
			total: 0,
			perPage: 12,
			emptyMessage: "দুঃখিত !... কোন অ্যাম্বুলেন্স খুঁজে পাওয়া যায় নি ।",
			search_key: "",
			ambulances: [],
			cat_id: "",
		};
	},
	mounted() {
		this.getAllCetegories();
		this.getAmbulanceList();
	},
	methods: {
		/**
		 * Get all categories
		 */
		getAllCetegories() {
			axios
				.get("/api/get-all-ambulance-categories")
				.then((response) => {
					if (response.data.success) {
						response.data.categories.unshift({
							id: "",
							bn_name: "সকল অ্যাম্বুলেন্স",
						});
						this.categories = response.data.categories;
					}
				})
				.catch((error) => {});
		},
		/**
		 * Get selected category
		 */
		getSelectvalue(category) {
			this.title = category.bn_name;
			this.cat_id = category;
			this.currentPage = 1;
			this.getAmbulanceList();
		},
		/**
		 * Get ambulance
		 */
		getAmbulanceList() {
			axios
				.post("/api/get-ambulance-list", {
					perPage: this.perPage,
					page: this.currentPage,
					cat_id: this.cat_id.id,
				})
				.then((response) => {
					if (response.data.success) {
						this.ambulances = response.data.ambulances.data;
						this.total = response.data.ambulances.total;
					}
				})
				.catch((error) => {});
		},
		changePage(page) {
			this.currentPage = page;
			this.getAmbulanceList();
		},
	},
	metaInfo: {
		title: "অ্যাম্বুলেন্স",
		meta: [
			{ vmid: "description", name: "description", content: "The home page" },
		],
	},
};
</script>
