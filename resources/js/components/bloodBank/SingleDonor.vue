<template>
	<div class="single-donor">
		<div class="col-12 text-center p-1">
			<img
				v-if="donor.image"
				:src="'/' + donor.image"
				:alt="donor.name"
				class="
					rounded-circle
					img-center img-fluid
					shadow
					shadow-lg--hover
					mb-2
					list-image
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
					list-image
				"
				style="width: 100px"
			/>
			<p class="bangla-font name font-weight-bold">{{ donor.name }}</p>
			<p class="bangla-font specialist">{{ donor.blood_group }}</p>
			<p class="bangla-font mobile">
				মোবাইলঃ {{ donor.mobile }}<span v-if="donor.mobile2">,</span>
				{{ donor.mobile2 }}
			</p>
			<p class="bangla-font mobile" v-if="donor.email">
				ইমেইলঃ {{ donor.email }}
			</p>
			<p class="bangla-font working_place">{{ donor.address }}</p>
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
		donor: {
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
