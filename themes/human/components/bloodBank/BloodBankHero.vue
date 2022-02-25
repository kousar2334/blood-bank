<template>
	<section class="section-hero section-shaped my-0">
		<div class="shape shape-style-1 shape-primary">
			<span class="span-150"></span>
			<span class="span-50"></span>
			<span class="span-50"></span>
			<span class="span-75"></span>
			<span class="span-100"></span>
			<span class="span-75"></span>
			<span class="span-50"></span>
			<span class="span-100"></span>
			<span class="span-50"></span>
			<span class="span-100"></span>
		</div>
		<div class="container shape-container d-flex">
			<div class="col px-0 mt-lg-5">
				<div
					class="
						row
						justify-content-center
						align-items-center
						mb-4 mb-md-0 mb-lg-0
						mt-0 mt-lg-5 mt-md-5
					"
				>
					<div
						class="offset-lg-2 col-lg-8 text-center pt-0 pt-lg-5 pt-md-5 pb-5"
					>
						<h1 class="bangla-font text-white">রক্তের গ্রুপ বাছাই করুন</h1>

						<div id="inputWrapper">
							<v-select
								single
								:options.sync="bloodGroups"
								:key="bloodGroups.id"
								label="name"
								class="bangla-font"
								placeholder="রক্তের গ্রুপ বাছাই করুন"
								@input="setSelected($event)"
								:clearable="false"
							></v-select>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: "BloodBankHero",
	props: {
		bloodGroups: {
			type: Array,
			required: false,
		},
	},
	data() {
		return {
			selectedGroup: {},
		};
	},
	methods: {
		setSelected(event) {
			this.$emit("selectBloodGroup", event);
		},
	},
};
</script>
<style>
</style>
