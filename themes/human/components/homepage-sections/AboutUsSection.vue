<template>
    <section class="about-low-area section-padding2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10">
                    <div class="about-caption mb-50">
                        <!-- Section Tittle -->
                        <div class="section-tittle mb-35">
                            <span>About our foundetion</span>
                            <h2>We Are In A Mission To Help Helpless</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore et
                            dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.</p>
                        <p>Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore
                            et
                            dolore.</p>
                    </div>
                    <a href="about.html" class="btn text-white">About US</a>
                </div>
                <div class="col-lg-6 col-md-12">
                    <!-- about-img -->
                    <div class="about-img ">
                        <div class="about-font-img d-none d-lg-block">
                            <img src="http://blood-bank.local/uploads/projects/09302022054537projects.jpg" alt="">
                        </div>
                        <div class="about-back-img ">
                            <img src="file:///home/kousar/Downloads/charityworks-master/assets/img/gallery/about1.png"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AboutUsSection"
}
</script>
<style scoped>
.about-low-area .about-caption p {
    font-size: 16px;
    color: #64676c;
    line-height: 1.6;
    margin-bottom: 43px;
    padding-right: 50px;
}

.section-tittle span {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 22px;
    color: #09cc7f;
    text-transform: capitalize;
    display: inline-block;
    letter-spacing: 0.05em;
}

.section-tittle h2 {
    font-size: 42px;
    display: block;
    color: #072366;
    font-weight: 800;
    text-transform: capitalize;
    line-height: 1.4;
}

.about-low-area {
    position: relative;
}

.section-padding2 {
    padding-top: 200px;
    padding-bottom: 200px;
}

/* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area {
    position: relative;
}

/* line 5, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .about-caption p {
    font-size: 16px;
    color: #64676c;
    line-height: 1.6;
    margin-bottom: 43px;
    padding-right: 50px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

    /* line 5, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-caption p {
        padding-right: 20px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 5, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-caption p {
        padding-right: 0px;
    }
}

@media (max-width: 575px) {

    /* line 5, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-caption p {
        padding-right: 0px;
    }
}

/* line 22, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .single-caption {
    display: flex;
    align-items: center;
}

/* line 25, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .single-caption .caption-icon span {
    color: #212025;
    font-size: 35px;
    margin-bottom: 0;
    display: block;
}

/* line 31, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .single-caption .caption {
    padding-left: 20px;
}

/* line 33, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .single-caption .caption h5 {
    color: #26264b;
    font-size: 20px;
    font-weight: 500;
}

/* line 38, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .single-caption .caption p {
    color: #7f8192;
    font-size: 14px;
    margin-bottom: 0px;
    display: block;
    line-height: 1.7;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 50, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img {
        padding-top: 50px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 50, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img {
        padding-top: 50px;
    }
}

@media (max-width: 575px) {

    /* line 50, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img {
        padding-top: 50px;
    }
}

/* line 60, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .about-img .about-font-img {
    position: absolute;
    z-index: 1;
    left: 80px;
    bottom: 0;
}

@media (max-width: 575px) {

    /* line 65, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img .about-font-img img {
        width: 100%;
    }
}

/* line 72, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-low-area .about-img .about-back-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
}

@media (max-width: 575px) {

    /* line 78, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img .about-back-img img {
        width: 90%;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 72, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img .about-back-img {
        position: unset;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 72, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img .about-back-img {
        position: unset;
    }
}

@media (max-width: 575px) {

    /* line 72, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-low-area .about-img .about-back-img {
        position: unset;
    }
}

@media (max-width: 575px) {

    /* line 96, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .about-caption {
        margin-bottom: 35px;
    }
}

@media (max-width: 575px) {

    /* line 103, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
    .bg-height.pb-160 {
        padding-bottom: 100px;
    }
}

/* line 112, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-details .about-details-cap h4 {
    font-size: 30px;
    font-family: "Muli", sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    color: #000a2d;
    display: inline-block;
}

/* line 120, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_about.scss */
.about-details .about-details-cap p {
    color: #464d65;
    font-size: 16px;
}
</style>