<template>
	<div>
		<doctor-hero
			:departments="departments"
			@selectItem="getSelectedDepartment($event)"
		></doctor-hero>
		<section class="section section-lg pt-0">
			<div class="container">
				<div class="row">
					<div class="col-12 page-header pb-4 mt-4">
						<h2 class="bangla-font text-center mb-2 mt-2">
							{{ title }}
						</h2>
					</div>
					<div
						v-for="(doctor, index) in doctors"
						:key="index"
						class="col-lg-3 col-12 p-2"
					>
						<single-doctor :doctor="doctor"> </single-doctor>
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
import DoctorHero from "../../components/doctor/DoctorHero.vue";
import SingleDoctor from "../../components/doctor/SingleDoctor.vue";
import axios from "axios";
export default {
	name: "Doctors",
	components: {
		DoctorHero,
		SingleDoctor,
	},
	data() {
		return {
			title: "সকল বিভাগের ডাক্তার",
			departments: [],
			selectedDepartment: {},
			currentPage: 1,
			total: 0,
			perPage: 12,
			emptyMessage: "দুঃখিত !... কোন ডাক্তার খুঁজে পাওয়া যায় নি ।",
			search_key: "",
			doctors: [],
		};
	},
	mounted() {
		this.getDocotorDepartments();
		this.getDoctorList();
	},
	methods: {
		/**
		 * Get doctos divisions
		 */
		getDocotorDepartments() {
			axios
				.get("/api/get-doctors-departments")
				.then((response) => {
					if (response.data.success) {
						response.data.departments.unshift({
							id: "",
							name: "",
							bn_name: "সকল বিভাগের ডাক্তার",
						});
						this.departments = response.data.departments;
					}
				})
				.catch((error) => {});
		},
		/**
		 * Get selected department
		 */
		getSelectedDepartment(department) {
			this.title = department.bn_name;
			this.selectedDepartment = department;
			this.currentPage = 1;
			this.getDoctorList();
		},
		/**
		 * Get Doctors
		 */
		getDoctorList() {
			axios
				.post("/api/get-doctor-list", {
					perPage: this.perPage,
					page: this.currentPage,
					department: this.selectedDepartment.id,
				})
				.then((response) => {
					if (response.data.success) {
						this.doctors = response.data.doctors.data;
						this.total = response.data.doctors.total;
					}
				})
				.catch((error) => {});
		},
		changePage(page) {
			this.currentPage = page;
			this.getDoctorList();
		},
	},
	metaInfo: {
		title: "ডাক্তার",
	},
};
</script>
