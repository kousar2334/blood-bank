<template>
	<div class="single-doctor">
		<div class="col-12 text-center p-1">
			<img
				v-if="doctor.image"
				:src="'/' + doctor.image"
				:alt="doctor.name"
				class="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-2"
				style="width: 100px"
			/>
			<img
				v-else
				v-lazy="'img/theme/doctor.jpg'"
				class="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-2"
				style="width: 100px"
			/>
			<p class="bangla-font name font-weight-bold">{{ doctor.name }}</p>
			<p class="bangla-font specialist">{{ doctor.blood_group }}</p>
			<p class="bangla-font mobile">
				মোবাইলঃ {{ doctor.mobile }}<span v-if="doctor.mobile2">,</span>
				{{ doctor.mobile2 }}
			</p>
			<p class="bangla-font working_place">{{ doctor.address }}</p>
		</div>
	</div>
</template>
<script>
import Modal from "../Modal.vue";
export default {
	components: {
		Modal,
	},
	name: "single-donor",
	props: {
		doctor: {
			type: Object,
			default: "",
		},
	},
	data() {
		return {
			active: false,
		};
	},
	methods: {},
};
</script>
<style>
p {
	margin-bottom: 2px;
}
</style>
