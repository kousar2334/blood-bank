<template>
	<div class="provider-card" id="provider-card">
		<div class="provider-card__view-profile-btn">
			<h3 class="provider-details__provider-name-link">
				<a
					class="provider-name-link bangla-font"
					href="#"
					@click.prevent="viewDetails()"
				>
					{{ hospital.name }}
				</a>
			</h3>
			<div
				class="provider-details__provider-specialty bangla-font mb-4 specialist"
			>
				{{ hospital.category }}
			</div>
		</div>
		<div class="provider-card__provider-strengths">
			<ul class="provider-strengths">
				<li class="provider-strengths__strength-item bangla-font">
					{{ hospital.address }}
				</li>
				<li class="provider-strengths__strength-item bangla-font">
					ফোনঃ {{ hospital.phone }}
				</li>
				<li
					class="provider-strengths__strength-item bangla-font"
					data-qa-target="strength-item--3"
				>
					মোবাইলঃ {{ hospital.mobile_1 }},{{ hospital.mobile_2 }}
				</li>
				<li class="provider-strengths__strength-item bangla-font">
					ইমেইলঃ {{ hospital.email }}
				</li>
			</ul>
		</div>
		<div class="provider-card__view-profile-btn">
			<a
				class="view-profile-btn button bangla-font"
				href="#"
				@click.prevent="viewDetails()"
				>বিস্তারিত দেখুন</a
			>
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
						<div class="col-lg-5 col-sm-12" v-if="hospital_details.image">
							<img
								v-if="hospital_details.image"
								:src="'/' + hospital_details.image"
								:alt="hospital.name"
								class="mb-2"
								style="width: 100%; max-height: 250px"
							/>
						</div>
						<div class="col-lg-7 col-sm-12">
							<a href="#" class="bangla-font success font-weight-bold mb-0">
								{{ hospital.name }}
							</a>
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
