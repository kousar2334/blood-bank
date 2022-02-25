<template>
	<div class="provider-card" id="provider-card">
		<div class="provider-card__provider-details">
			<h3 class="provider-details__provider-name-link">
				<a class="provider-name-link bangla-font" href="#">
					{{ donor.name }}
				</a>
			</h3>
			<div class="provider-details__provider-specialty bangla-font specialist">
				রক্তের গ্রুপঃ {{ donor.blood_group }}
			</div>
		</div>
		<div class="provider-card__provider-img">
			<img
				v-if="donor.image"
				:src="'/' + donor.image"
				:alt="donor.name"
				class="provider-img provider-image"
			/>
			<img
				v-else
				class="provider-img provider-image"
				:alt="donor.name"
				src="/img/theme/blood-donor-profile.png"
			/>
		</div>
		<div class="provider-card__provider-strengths">
			<ul class="provider-strengths">
				<li class="provider-strengths__strength-item bangla-font">
					মোবাইলঃ {{ donor.mobile }}<span v-if="donor.mobile2">,</span>
					{{ donor.mobile2 }}
				</li>
				<li
					class="provider-strengths__strength-item bangla-font"
					v-if="donor.email"
				>
					ইমেইলঃ {{ donor.email }}
				</li>
				<li class="provider-strengths__strength-item bangla-font">
					{{ donor.address }}
				</li>
			</ul>
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
