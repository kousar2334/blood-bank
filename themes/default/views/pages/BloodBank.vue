<template>
	<div>
		<BloodbankHero
			:blood-groups="blood_groups"
			v-on:selectBloodGroup="getSelectedBloodGroup($event)"
		></BloodbankHero>
		<section class="section section-lg pt-0">
			<div class="p-3">
				<div class="row">
					<div class="col-12 page-header pb-4">
						<h2 class="bangla-font text-center mb-2 mt-2">
							{{ title }}
						</h2>
					</div>
					<!-- <loading
						:active="isLoading"
						:can-cancel="true"
						color="red"
						:is-full-page="fullPage"
					/> -->

					<div
						v-for="(donor, index) in blood_donors"
						:key="index"
						class="col-lg-3 p-3"
					>
						<single-donor :donor="donor"> </single-donor>
					</div>
				</div>
				<div class="text-center mb-2 mt-4" v-if="!isLoading">
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
import BloodbankHero from "../../components/bloodBank/BloodBankHero.vue";
import SingleDonor from "../../components/bloodBank/SingleDonor.vue";
import BasePagination from "../../components/BasePagination.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
export default {
	name: "BloodBank",
	components: {
		BloodbankHero,
		SingleDonor,
		BasePagination,
		Loading,
	},
	data() {
		return {
			title: "সকল গ্রুপের রক্তদাতাদের তালিখা",
			emptyMessage: "দুঃখিত !... কোন রক্ত দাতা খুঁজে পাওয়া যায় নি ।",
			blood_groups: [],
			blood_donors: [],
			currentPage: 1,
			total: 0,
			perPage: 12,
			selected_group: "",
			isLoading: false,
			fullPage: true,
			docts: "docts",
		};
	},
	mounted() {
		this.getAllBloodGroup();
		this.getDonorList();
	},
	methods: {
		/**
		 * Get all blood groups
		 */
		getAllBloodGroup() {
			axios
				.get("/api/get-all-blood-groups")
				.then((response) => {
					if (response.data.success) {
						response.data.blood_groups.unshift({
							name: "সকল গ্রুপের",
							id: "",
						});
						this.blood_groups = response.data.blood_groups;
					}
				})
				.catch((error) => {});
		},
		/**
		 * Get blood  group
		 */
		getSelectedBloodGroup(selectedGroup) {
			this.title = selectedGroup.name + " গ্রুপের রক্ত দাতাদের তালিখা";
			this.selected_group = selectedGroup.id;
			this.currentPage = 1;
			this.getDonorList();
		},
		/**
		 * Get blood donors
		 */
		getDonorList() {
			this.isLoading = true;
			axios
				.post("/api/get-blood-donor-list", {
					perPage: this.perPage,
					page: this.currentPage,
					blood_group: this.selected_group,
				})
				.then((response) => {
					if (response.data.success) {
						this.blood_donors = response.data.blood_donors.data;
						this.total = response.data.blood_donors.total;
						this.isLoading = false;
					} else {
						this.isLoading = false;
					}
				})
				.catch((error) => {
					this.isLoading = false;
				});
		},
		changePage(page) {
			this.currentPage = page;
			this.getDonorList();
		},
	},
	metaInfo: {
		title: "ব্লাড ব্যাংক",
	},
};
</script>
