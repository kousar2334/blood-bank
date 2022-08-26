<template>
	<div>
		<div class="single-doctor">
			<div class="col-12 text-center p-1" @click.prevent="viewDetails()">
				<p class="bangla-font name font-weight-bold">{{ hospital.name }}</p>
				<p class="bangla-font specialist">{{ hospital.category }}</p>
				<p class="bangla-font qualification">{{ hospital.address }}</p>
				<p class="bangla-font mobile">ফোনঃ {{ hospital.phone }}</p>
				<p class="bangla-font mobile">
					মোবাইলঃ {{ hospital.mobile_1 }},{{ hospital.mobile_2 }}
				</p>
				<p class="bangla-font working_place">ইমেইলঃ {{ hospital.email }}</p>
			</div>
			<p
				class="cursor-pointer bangla-font success mb-0 bottom-0"
				@click.prevent="viewDetails()"
			>
				বিস্তারিত দেখুন
			</p>
		</div>
		<!--Details Modal-->
		<div class="row">
			<div class="col-lg-12">
				<modal
					:show.sync="modal_show"
					modal-classes="modal-dialog-top modal-lg"
				>
					<h6 slot="header" class="modal-title" id="modal-title-default"></h6>
					<div class="row">
						<div class="col-lg-5 col-sm-12">
							<img
								v-if="hospital_details.image"
								:src="'/' + hospital_details.image"
								:alt="hospital.name"
								class="mb-2"
								style="width: 100%; max-height: 250px"
							/>
							<img
								v-else
								v-lazy="'img/theme/doctor.jpg'"
								class="mb-2"
								style="width: 100%; max-height: 250px"
							/>
						</div>
						<div class="col-lg-7 col-sm-12">
							<h5 class="bangla-font success font-weight-bold mb-0">
								{{ hospital.name }}
							</h5>
							<p class="bangla-font specialist">{{ hospital.category }}</p>
							<p class="bangla-font mobile">ফোনঃ {{ hospital.phone }}</p>
							<p class="bangla-font mobile">
								মোবাইলঃ {{ hospital.mobile_1 }},{{ hospital.mobile_2 }}
							</p>
							<p class="bangla-font working_place">
								ইমেইলঃ {{ hospital.email }}
							</p>
							<p class="bangla-font qualification">{{ hospital.address }}</p>
							<a
								v-if="hospital_details.fb_link"
								:href="hospital_details.fb_link"
								target="_blank"
								rel="noopener"
								data-toggle="tooltip"
								title="Like us on Facebook"
							>
								<i class="fa fa-facebook-square"></i>
								<span class="nav-link-inner--text bangla-font">ফেসবুক</span>
							</a>
							<a
								v-if="hospital_details.web"
								:href="hospital_details.web"
								target="_blank"
								rel="noopener"
								data-toggle="tooltip"
								title="Follow us on web"
								class="ml-2"
							>
								<i class="fa fa-dribbble"></i>
								<span class="nav-link-inner--text bangla-font">ওয়েব সাইট </span>
							</a>
						</div>
					</div>
					<div class="row">
						<p class="bangla-font mobile">
							{{ hospital_details.description }}
						</p>
					</div>
				</modal>
			</div>
		</div>
		<!--End Details Modal-->
	</div>
</template>
<script>
import Modal from "../Modal.vue";
import axios from "axios";
export default {
	components: {
		Modal,
	},
	name: "single-hospital",
	props: {
		hospital: {
			type: Object,
			default: "",
		},
	},
	data() {
		return {
			active: false,
			modal_show: false,
			hospital_details: "",
		};
	},
	methods: {
		viewDetails() {
			this.hospital_details = "";
			axios
				.post("/api/get-hospital-details", {
					id: this.hospital.id,
				})
				.then((response) => {
					if (response.data.success) {
						this.hospital_details = response.data.hospital_details;
						this.modal_show = true;
					}
				})
				.catch((error) => {});
		},
	},
};
</script>
<style>
p {
	margin-bottom: 2px;
}
</style>
