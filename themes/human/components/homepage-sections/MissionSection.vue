<template>
    <!--? Services Area Start -->
    <div class="service-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>What we are doing</span>
                        <h2>We Are In A Mission To Help The Helpless</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-null-1"></span>
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Clean Water</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to
                                know
                                your processes to.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat active text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-think"></span>
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Clean Water</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to
                                know
                                your processes to.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-gear"></span>
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Clean Water</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to
                                know
                                your processes to.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MissionSection",
}
</script>
<style scoped>
.service-area {
    background: #f8fcff;
}

.section-padding30 {
    padding-top: 195px;
    padding-bottom: 180px;
}

.mb-50 {
    margin-bottom: 50px;
}

.mb-80 {
    margin-bottom: 80px;
}

.section-tittle h2 {
    font-size: 42px;
    display: block;
    color: var(--primaryColor);
    font-weight: 800;
    text-transform: capitalize;
    line-height: 1.4;
}

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

/* line 1, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area {
    background: #f8fcff;
}

/* line 3, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat {
    background: #ffffff;
    border-radius: 6px;
    padding: 85px 22px;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    position: relative;
    z-index: 1;
}

@media (max-width: 575px) {

    /* line 3, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
    .service-area .single-cat {
        padding: 50px 22px;
    }
}

/* line 13, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    background: var(--primaryColor);
    transition: .6s;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 6px;
}

/* line 26, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat .cat-icon span {
    margin-bottom: 50px;
    width: 90px;
    height: 90px;
    background: var(--primaryColor);
    line-height: 90px;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    font-size: 40px;
    color: #fff;
}

/* line 41, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat .cat-cap h5>a {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 21px;
    display: block;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    font-family: "Muli", sans-serif;
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 41, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
    .service-area .single-cat .cat-cap h5>a {
        font-size: 26px;
    }
}

@media (max-width: 575px) {

    /* line 41, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
    .service-area .single-cat .cat-cap h5>a {
        font-size: 26px;
    }
}

/* line 56, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat .cat-cap p {
    margin-bottom: 36px;
    color: #57667e;
    font-size: 16px;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 56, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
    .service-area .single-cat .cat-cap p {
        font-size: 15px;
    }
}

/* line 66, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat .cat-cap a {
    color: #1c165c;
    font-size: 16px;
    font-weight: 600;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
}

/* line 77, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat.active::before {
    height: 100%;
}

/* line 81, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat.active .cat-icon span {
    color: var(--primaryColor);
    background: #fff;
}

/* line 87, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat.active .cat-cap h5 {
    color: #fff;
}

/* line 90, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat.active .cat-cap p {
    color: #fff;
}

/* line 93, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat.active .cat-cap a {
    color: #fff;
}

/* line 99, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat:hover::before {
    height: 100%;
}

/* line 103, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat:hover .cat-icon span {
    color: var(--primaryColor);
    background: #fff;
}

/* line 109, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat:hover .cat-cap h5 {
    color: #fff;
}

/* line 112, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat:hover .cat-cap p {
    color: #fff;
}

/* line 115, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_services_section.scss */
.service-area .single-cat:hover .cat-cap a {
    color: #fff;
}
</style>