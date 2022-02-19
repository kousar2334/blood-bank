<template>
	<div class="provider-card" id="provider-card">
		<div class="provider-card__provider-details">
			<h3 class="provider-details__provider-name-link">
				<a
					class="provider-name-link bangla-font"
					href="#"
					@click.prevent="viewDetails()"
				>
					{{ doctor.name }}
				</a>
			</h3>
			<div class="provider-details__provider-specialty bangla-font mb-4">
				{{ doctor.qualification }}
			</div>
		</div>
		<div class="provider-card__provider-img">
			<img
				v-if="doctor.image"
				:src="'/' + doctor.image"
				:alt="doctor.name"
				class="provider-img provider-image"
			/>
			<img
				v-else
				class="provider-img provider-image"
				:alt="doctor.name"
				src="/img/theme/doctor-profile.png"
			/>
		</div>
		<div class="provider-card__provider-strengths">
			<ul class="provider-strengths">
				<li class="provider-strengths__strength-item bangla-font specialist">
					{{ doctor.specialist }}
				</li>
				<li class="provider-strengths__strength-item bangla-font">
					{{ doctor.position }}
				</li>
				<li class="provider-strengths__strength-item bangla-font">
					{{ doctor.working_place }}
				</li>
				<li class="provider-strengths__strength-item bangla-font">
					{{ doctor.mobile }}
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
			<div class="col-md-4">
				<modal :show.sync="modal_show" modal-classes="modal-dialog-top">
					<h6 slot="header" class="modal-title" id="modal-title-default"></h6>
					<div class="col-12 text-center p-1">
						<img
							v-if="doctor.image"
							:src="'/' + doctor.image"
							:alt="doctor.name"
							class="mb-3 provider-image"
						/>
						<img
							v-else
							v-lazy="'/img/theme/doctor-profile.png'"
							class="mb-3 provider-image"
						/>

						<p class="bangla-font name font-weight-bold">{{ doctor.name }}</p>
						<p class="bangla-font qualification">{{ doctor.qualification }}</p>
						<p class="bangla-font specialist">{{ doctor.specialist }}</p>
						<p class="bangla-font position">{{ doctor.position }}</p>
						<p class="bangla-font working_place">{{ doctor.working_place }}</p>
						<p class="bangla-font mobile">{{ doctor.mobile }}</p>
						<div v-if="chambers.length > 0">
							<p class="bangla-font success mb-0 bottom-0">চেম্বার</p>
							<div
								v-for="(chamber, index) in chambers"
								:key="index"
								class="mb-3"
							>
								<p class="bangla-font mobile font-weight-bold">
									{{ chamber.chamber }}
								</p>
								<p class="bangla-font mobile">
									{{ chamber.address }}
								</p>
								<p class="bangla-font mobile" v-if="chamber.visiting_time">
									রোগী দেখার সময়ঃ {{ chamber.visiting_time }}
								</p>
								<p class="bangla-font mobile" v-if="chamber.mobiles">
									সিরিয়ালের জন্যঃ {{ chamber.mobiles }}
								</p>
							</div>
						</div>
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
	name: "single-doctor",
	props: {
		doctor: {
			type: Object,
			default: "",
		},
	},
	data() {
		return {
			active: false,
			modal_show: false,
			chambers: [],
		};
	},
	methods: {
		viewDetails() {
			this.chambers = [];
			axios
				.post("/api/get-doctor-chambers", {
					id: this.doctor.id,
				})
				.then((response) => {
					if (response.data.success) {
						this.chambers = response.data.chambers;
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
