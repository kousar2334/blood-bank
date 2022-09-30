<template>
    <div class="container">
        <div class="row">
            <div v-bind:style="{ background:`url(/${project_details.image})` }"
                class="col col-md-4 col-xs-12 wow fadeInRightSlow">
                <div class="right-col" style=" ">
                    <div class="video">
                        <img style="min-height: 412px" src="https://www.bidyanondo.org/site-assets/images/blank.png"
                            alt="" class="img img-responsive">
                        <a :href="`${project_details.video_link}`" class="video-btn" data-type="iframe"><i
                                class="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 col-xs-12">
                <h5>How To Donate</h5>
                <div>
                    {{project_details.donation_instruction}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 px-0">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item px-0">{{project_details.locations}}</li>
                    <li class="list-group-item px-0">{{project_details.purpose}}</li>
                    <li class="list-group-item px-0">Donation Target {{project_details.donation_target}} TK</li>
                </ul>
            </div>
            <div class="col-12 col-md-8">
                <div class="about-event">
                    <h2>{{project_details.name}}</h2>
                    <div class="content">
                        <pre class="p-style">{{project_details.description}}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";
export default {
    name: "ProjectDetails",
    data() {
        return {
            project_details: {},
        };
    },
    mounted() {
        this.getProjectDetails();
    },
    methods: {
        getProjectDetails() {
            axios
                .post("/api/project-details", {
                    id: this.$route.params.id
                })
                .then((response) => {
                    if (response.data.success) {
                        this.project_details = response.data.data;
                    }
                })
                .catch((error) => { });
        },
    },

    metaInfo: {
        title: "Project Details",
    },
};
</script>
<style scoped>
#donate .video {
    box-shadow: 0 -2px 6px 1px rgb(0 0 0 / 23%);
}

.p-style {
    line-height: 1.8em;
    border: none;
    padding: 1px;
    background: inherit;
    font-family: default;
    font-family: montserrat, sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    color: #828791;
    word-break: keep-all;
    text-align: justify !important;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
}

pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}

pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
