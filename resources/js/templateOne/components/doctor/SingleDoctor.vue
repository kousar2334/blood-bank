<template>
	<div class="single-doctor">
		<div class="col-12 text-center p-1" @click.prevent="viewDetails()">
			<p class="bangla-font name font-weight-bold">{{ doctor.name }}</p>
			<p class="bangla-font qualification">{{ doctor.qualification }}</p>
			<p class="bangla-font specialist">{{ doctor.specialist }}</p>
			<p class="bangla-font position">{{ doctor.position }}</p>
			<p class="bangla-font working_place">{{ doctor.working_place }}</p>
			<p class="bangla-font mobile">{{ doctor.mobile }}</p>
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
							class="
								rounded-circle
								img-center img-fluid
								shadow
								shadow-lg--hover
								mb-2
							"
							style="width: 100px"
						/>
						<img
							v-else
							v-lazy="'img/theme/doctor.jpg'"
							class="
								rounded-circle
								img-center img-fluid
								shadow
								shadow-lg--hover
								mb-2
							"
							style="width: 100px"
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
		<p
			class="cursor-pointer bangla-font success mb-0 bottom-0"
			@click.prevent="viewDetails()"
		>
			বিস্তারিত দেখুন
		</p>
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
