<template>
	<div>
		<hospital-hero
			:categories="categories"
			@selectItem="getSelectvalue($event)"
		></hospital-hero>
		<section class="section section-lg pt-0">
			<div class="p-3">
				<div class="row">
					<div class="col-12 page-header pb-4">
						<h2 class="bangla-font text-center mb-2 mt-2">
							{{ title }}
						</h2>
					</div>
					<div
						v-for="(hospital, index) in hospitals"
						:key="index"
						class="col-lg-3 p-3"
					>
						<single-hospital :hospital="hospital"> </single-hospital>
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
import HospitalHero from "../../components/hospital/HospitalHero.vue";
import SingleHospital from "../../components/hospital/SingleHospital.vue";
import axios from "axios";
export default {
	name: "Hospitals",
	components: {
		HospitalHero,
		SingleHospital,
	},
	data() {
		return {
			title: "হাসপাতাল ও ক্লিনিক",
			categories: [],
			selectedDepartment: {},
			currentPage: 1,
			total: 0,
			perPage: 12,
			emptyMessage: "দুঃখিত !... কোন হাসপাতাল/ ক্লিনিক খুঁজে পাওয়া যায় নি ।",
			search_key: "",
			hospitals: [],
			cat_id: "",
		};
	},
	mounted() {
		this.getAllCetegories();
		this.getHospitalList();
	},
	methods: {
		/**
		 * Get all categories
		 */
		getAllCetegories() {
			axios
				.get("/api/get-all-hospital-categories")
				.then((response) => {
					if (response.data.success) {
						response.data.categories.unshift({
							id: "",
							bn_name: "সকল হাসপাতাল ও ক্লিনিক",
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
			this.getHospitalList();
		},
		/**
		 * Get hospitals
		 */
		getHospitalList() {
			axios
				.post("/api/get-hospital-list", {
					perPage: this.perPage,
					page: this.currentPage,
					cat_id: this.cat_id.id,
				})
				.then((response) => {
					if (response.data.success) {
						this.hospitals = response.data.hospitals.data;
						this.total = response.data.hospitals.total;
					}
				})
				.catch((error) => {});
		},
		changePage(page) {
			this.currentPage = page;
			this.getHospitalList();
		},
	},
	metaInfo: {
		title: "হাসপাতাল ও ক্লিনিক",
		meta: [
			{ vmid: "description", name: "description", content: "The home page" },
		],
	},
};
</script>
