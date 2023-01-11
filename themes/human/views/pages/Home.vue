<template>
	<div>
		<hero></hero>
		<about-us-section></about-us-section>
		<!---Doctor List--->
		<doctor-section></doctor-section>
		<!---End doctor list-->
		<project-section></project-section>
		<mission-section></mission-section>
		<!--Service List--->
		<volunteer-section></volunteer-section>
		<VolunteerRegistrationSection></VolunteerRegistrationSection>
	</div>
</template>
<script>
import Hero from "../../components/Hero";
import ProjectSection from "../../components/homepage-sections/ProjectSection.vue";
import VolunteerRegistrationSection from "../../components/homepage-sections/RegistrationSection.vue"
import MissionSection from "../../components/homepage-sections/MissionSection.vue"
import VolunteerSection from "../../components/homepage-sections/VolunteerSection.vue"
import EmergencyCallsSection from "../../components/homepage-sections/EmergencyCallsSection.vue"
import DoctorSection from "../../components/homepage-sections/DoctorSection.vue"
import AboutUsSection from "../../components/homepage-sections/AboutUsSection.vue"
export default {
	name: "Home",
	components: {
		Hero,
		ProjectSection,
		VolunteerRegistrationSection,
		MissionSection,
		VolunteerSection,
		EmergencyCallsSection,
		DoctorSection,
		AboutUsSection
	},
	data() {
		return {

		};
	},
	metaInfo: {
		title: "বন্ধন | মানুষের পাশে সব সময় ",
		meta: [
			{
				vmid: "description",
				name: "description",
				content: "মানুষের পাশে সব সময়",
			},
		],
	},
};
</script>
<style scoped>
.call-center-box {
	min-height: 300px;
}

.light-bg {
	background-color: #f7f7f7;
}
</style>
