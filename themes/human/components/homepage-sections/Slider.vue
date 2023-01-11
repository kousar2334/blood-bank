<template>
    <div>
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
            <div class="single-item">
                <img data-v-162edc1c="" src="http://blood-bank.local/uploads/projects/09302022054537projects.jpg"
                    alt="">
            </div>
            <div class="single-item">
                <img data-v-162edc1c="" src="http://blood-bank.local/uploads/projects/09302022054537projects.jpg"
                    alt="">
            </div>
            <div class="single-item">
                <img data-v-162edc1c="" src="http://blood-bank.local/uploads/projects/09302022054537projects.jpg"
                    alt="">
            </div>
            <div class="single-item">
                <img data-v-162edc1c="" src="http://blood-bank.local/uploads/projects/09302022054537projects.jpg"
                    alt="">
            </div>

        </VueSlickCarousel>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "Slider",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            settings: {
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 3000,
                centerMode: true,
                slidesToShow: 2,
                centerPadding: "20px"
            },
        }
    },
}
</script>
<style>
/* .single-item {
    width: 800px;
} */

/* .slick-center {
    width: 80% !important;
} */
</style>