<template>
	<div class="provider-card" id="provider-card">
		<div class="provider-card__provider-details">
			<h3 class="provider-details__provider-name-link">
				<a class="provider-name-link bangla-font" href="#">
					{{ ambulance.name }}
				</a>
			</h3>
			<div class="provider-details__provider-specialty bangla-font specialist">
				{{ ambulance.category }}
			</div>
		</div>
		<div class="provider-card__provider-img">
			<img
				v-if="ambulance.image"
				:src="'/' + ambulance.image"
				:alt="ambulance.name"
				class="provider-img provider-image"
			/>
			<img
				v-else
				class="provider-img provider-image"
				:alt="ambulance.name"
				src="/img/theme/ambulance.png"
			/>
		</div>
		<div class="provider-card__provider-strengths">
			<ul class="provider-strengths">
				<li class="provider-strengths__strength-item bangla-font">
					মোবাইলঃ {{ ambulance.mobile_1
					}}<span v-if="ambulance.mobile_2">,</span>
					{{ ambulance.mobile_2 }}
				</li>
				<li
					class="provider-strengths__strength-item bangla-font"
					v-if="ambulance.email"
				>
					ইমেইলঃ {{ ambulance.email }}
				</li>
				<li
					class="provider-strengths__strength-item bangla-font"
					v-if="ambulance.phone"
				>
					ফোনঃ {{ ambulance.phone }}
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
