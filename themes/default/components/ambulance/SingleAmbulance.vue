<template>
	<div class="single-donor">
		<div class="col-12 text-center p-1">
			<img
				v-if="ambulance.image"
				:src="'/' + ambulance.image"
				:alt="ambulance.name"
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
				v-lazy="'img/theme/ambulance.png'"
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
			<p class="bangla-font name font-weight-bold">{{ ambulance.name }}</p>
			<p class="bangla-font specialist">{{ ambulance.category }}</p>
			<p class="bangla-font mobile">
				মোবাইলঃ {{ ambulance.mobile_1 }}<span v-if="ambulance.mobile_2">,</span>
				{{ ambulance.mobile_2 }}
			</p>
			<p class="bangla-font mobile" v-if="ambulance.email">
				ইমেইলঃ {{ ambulance.email }}
			</p>
			<p class="bangla-font mobile" v-if="ambulance.phone">
				ইমেইলঃ {{ ambulance.phone }}
			</p>
		</div>
	</div>
</template>
<script>
import Modal from "../Modal.vue";
export default {
	components: {
		Modal,
	},
	name: "single-ambulance",
	props: {
		ambulance: {
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
