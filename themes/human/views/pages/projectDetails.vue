<template>
    <div class="container">

        <div class="row">
            <div style="padding: 0px; background: url(&quot;https://www.bidyanondo.org/uploads/projects/24/Bidyanondo-Mother-&amp;-Child-Care-Hospital-big-1605330843.jpg&quot;) center center / cover no-repeat; visibility: visible; animation-name: fadeInRightSlow;"
                class="col col-md-4 col-xs-12 wow fadeInRightSlow">
                <div class="right-col" style=" ">
                    <div class="video">
                        <img style="min-height: 412px" src="https://www.bidyanondo.org/site-assets/images/blank.png"
                            alt="" class="img img-responsive">
                        <a href="https://www.youtube.com/embed/m4BKwuxnZUA?autoplay=1" class="video-btn"
                            data-type="iframe"><i class="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 col-xs-12">
                <h5>How To Donate</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 px-0">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item px-0">Cras justo odio</li>
                    <li class="list-group-item px-0">Dapibus ac facilisis in</li>
                    <li class="list-group-item px-0">Morbi leo risus</li>
                    <li class="list-group-item px-0">Porta ac consectetur ac</li>
                    <li class="list-group-item px-0">Vestibulum at eros</li>
                </ul>
            </div>
            <div class="col-12 col-md-8">
                <div class="about-event">
                    <h2>Bidyanondo Mother and Child Care Hospitals</h2>
                    <a href="#" class="btn theme-btn donate-project" data-toggle="modal"
                        data-target="#donate-project-modal">Donate now</a>
                    <div class="content">
                        <pre
                            class="p-style">"To ensure proper treatment of the general public and those who live under the poverty line, Bidyanondo has established ""Bidyanondo Mother &amp; Child Care Hospital"". It is a seven-storey hospital based in the Pahartoli area of Chittagong. Primarily, we have started outdoor and emergency treatment services with free medicine for underprivileged people. 
    
    There are a separate mother and child care ward, telemedicine service, and Corona unit. Besides, we have a different mobile team to give treatment among other remote areas of Bangladesh. This hospital is funded by the general people of Bangladesh and is catered for the people. If you want, you can also be a part of this endeavour."</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from "../../components/Modal.vue";
import axios from "axios";
export default {
    name: "ProjectDetails",
    components: {
        Modal,
    },
    data() {
        return {
            about_us: "",
        };
    },
    mounted() {
        this.getAboutUsContent();
    },
    methods: {
        //Get site about us
        getAboutUsContent() {
            axios
                .get("/api/get-site-about-us")
                .then((response) => {
                    if (response.data.success) {
                        this.about_us = response.data.about_us;
                    }
                })
                .catch((error) => { });
        },
    },

    metaInfo: {
        title: "আমাদের সম্পর্কে",
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
