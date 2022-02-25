<template>
	<div class="single-doctor">
		<div class="col-12 text-center p-1">
			<p class="bangla-font name font-weight-bold red">
				{{ ambulance.name }}
			</p>
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
	name: "single-fire",
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
