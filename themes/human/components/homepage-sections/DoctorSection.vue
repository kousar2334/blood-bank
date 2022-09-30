<template>
    <section class="content-section--docs-near-me" id="docs-near-me" data-qa-target="section-docs-near-me">
        <div class="content-section__section-container">
            <div class="section-container section-container--docs-near-me">
                <h2 class="section-container__title bangla-font" data-qa-target="section-docs-near-me-title">
                    <span class="title__specialty" data-qa-target="section-docs-near-me-specialty">খুব সহজেই</span>
                    খুঁজুন
                    <span class="title__location" data-qa-target="section-docs-near-me-location">আপনার ডাক্তার
                        কে</span>
                </h2>
                <div class="section-container__provider-card-deck">
                    <div class="visiblity-wrapper visiblity-wrapper--rendered">
                        <ul class="provider-card-deck">
                            <li class="provider-card-deck__provider-card" v-for="(doctor, index) in top_doctors"
                                :key="index">
                                <single-doctor :doctor="doctor"> </single-doctor>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="section-container__view-all-link">
                    <router-link class="view-all-link view-all-link--docs-near-me" id="docs-near-me-view-all-link"
                        to="/doctors"><span class="bangla-font">সকল ডাক্তার দেখুন </span>
                        <svg class="icon-mo_icon-2DQ-j icon-mo_md-1oiv-" viewBox="0 0 24 24" width="1em" height="1em"
                            aria-hidden="true" data-qa-target="arrow-right-icon" focusable="false">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3.5,12.5 L21.5,12.5"></path>
                                <polyline points="13.5 20.5 21.5 12.5 13.5 4.5"></polyline>
                            </g>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";
import SingleDoctor from "../doctor/SingleDoctor.vue";
export default {
    name: "DoctorSection",
    components: {
        SingleDoctor
    },
    data() {
        return {
            top_doctors: [],
        };
    },
    created() {
        this.getDoctorList();
    },
    methods: {
        /**
         * Get Doctors
         */
        getDoctorList() {
            axios
                .post("/api/get-top-doctors", {
                    limit: 3,
                })
                .then((response) => {
                    if (response.data.success) {
                        this.top_doctors = response.data.doctors;
                    }
                })
                .catch((error) => { });
        },
    },
}
</script>