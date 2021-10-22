<template>
	<div class="single-doctor">
		<div class="col-12 text-center p-1">
			<p class="bangla-font name font-weight-bold">{{ doctor.name }}</p>
			<p class="bangla-font qualification">{{ doctor.qualification }}</p>
			<p class="bangla-font specialist">{{ doctor.specialist }}</p>
			<p class="bangla-font position">{{ doctor.position }}</p>
			<p class="bangla-font working_place">{{ doctor.working_place }}</p>
			<p class="bangla-font mobile">{{ doctor.mobile }}</p>
		</div>
	</div>
</template>
<script>
export default {
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
		};
	},
};
</script>
<style>
.single-doctor {
	border: 1px;
	border-style: dotted;
	padding: 5px;
	text-align: center;
	border-radius: 5px;
	min-height: 200px;
	cursor: pointer;
}
p {
	margin-bottom: 2px;
}

.name {
	color: cornflowerblue;
	margin-bottom: 2px;
}

.specialist {
	font-weight: 700;
	color: red;
	margin-bottom: 2px;
}

.position {
	font-weight: 600;
	color: cornflowerblue;
	margin-bottom: 2px;
}

.working_place,
.qualification,
.mobile {
	font-size: 14px;
	margin-bottom: 2px;
}
</style>
