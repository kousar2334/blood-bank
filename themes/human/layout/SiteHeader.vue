<template>
    <header>
        <!-- Header Start -->
        <div class="header-area">
            <div class="main-header ">
                <div class="header-top d-none d-lg-block">
                    <div class="container-fluid">
                        <div class="col-xl-12">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="header-info-left d-flex">
                                    <ul>
                                        <li>Phone: +99 (0) 101 0000 888</li>
                                        <li>Email: noreply@yourdomain.com</li>
                                    </ul>
                                    <div class="header-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/sai4ull"><i
                                                        class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li> <a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="header-info-right d-flex align-items-center">
                                    <div class="select-this">
                                        <form action="#">
                                            <div class="select-itms">
                                                <select name="select" id="select1" style="display: none;">
                                                    <option value="">English</option>
                                                    <option value="">Bangla</option>
                                                    <option value="">Arabic</option>
                                                    <option value="">Hindi</option>
                                                </select>
                                                <div class="nice-select" tabindex="0"><span
                                                        class="current">Arabic</span>
                                                    <ul class="list d-none">
                                                        <li data-value="" class="option">English</li>
                                                        <li data-value="" class="option">Bangla</li>
                                                        <li data-value="" class="option selected focus">Arabic</li>
                                                        <li data-value="" class="option">Hindi</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <ul class=" contact-now list-unstyled">
                                        <li><a href="#">Subscribe Now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <!-- Logo -->
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo">
                                    <a href="index.html"><img
                                            src="http://blood-bank.local/uploads/general/09302022195558logo.png"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10">
                                <div class="menu-wrapper  d-flex align-items-center justify-content-end">
                                    <!-- Main-menu -->
                                    <div class="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="program.html">latest causes</a></li>
                                                <li><a href="events.html">social events </a></li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul class="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <!-- Header-btn -->
                                    <div class="header-right-btn d-none d-lg-block ml-20">
                                        <a href="contact.html" class="btn header-btn text-white">Donate</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
</template>
<script>
export default {
    name: "SiteHeader"
}
</script>
<style scoped>
@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 3, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area {
        box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 3, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area {
        box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
    }
}

@media (max-width: 575px) {

    /* line 3, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area {
        box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
    }
}

/* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top {
    padding: 9px 130px;
    border-bottom: 1px solid #f0f1f2;
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {

    /* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-top {
        padding: 9px 30px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

    /* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-top {
        padding: 9px 15px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-top {
        padding: 9px 50px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-top {
        padding: 9px 20px;
    }
}

@media (max-width: 575px) {

    /* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-top {
        padding: 9px 0px;
    }
}

/* line 36, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left>ul>li {
    color: #687693;
    display: inline-block;
    margin-right: 18px;
    padding-right: 18px;
    border-right: 1px solid #687693;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
}

/* line 45, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left>ul>li:last-child {
    margin-right: 0px;
}

/* line 48, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left>ul>li i {
    margin-right: 8px;
}

/* line 56, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left .header-social>ul>li {
    display: inline-block;
}

/* line 58, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left .header-social>ul>li>a {
    color: #7b8693;
    font-size: 14px;
    padding-left: 25px;
}

/* line 62, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left .header-social>ul>li>a>i {
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
}

/* line 71, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left .header-social>ul>li>a:hover i {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
}

/* line 78, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-left .header-social>ul>li>a:hover {
    color: #09cc7f;
}

/* line 89, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-right .select-this .nice-select {
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    border-radius: 0;
    border: none;
    color: #687693;
}

/* line 96, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-right .select-this .nice-select .option:hover,
.header-area .header-top .header-info-right .select-this .nice-select .option.focus,
.header-area .header-top .header-info-right .select-this .nice-select .option.selected.focus {
    background-color: #09cc7f;
}

/* line 102, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-right .select-this .nice-select::after {
    border-bottom: 1px solid #687693;
    border-right: 1px solid #687693;
    height: 7px;
    width: 7px;
    margin-top: -7px;
}

/* line 112, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-top .header-info-right .contact-now li a {
    color: #687693;
    border-left: 1px solid #687693;
    font-size: 14px;
    line-height: 1;
    padding-left: 21px;
    margin-left: 10px;
    font-weight: 400;
}

/* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-area .header-bottom {
    padding: 0px 130px;
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {

    /* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-bottom {
        padding: 0px 30px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

    /* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-bottom {
        padding: 0px 15px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-bottom {
        padding: 15px 50px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-bottom {
        padding: 15px 20px;
    }
}

@media (max-width: 575px) {

    /* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-area .header-bottom {
        padding: 15px 0px;
    }
}

/* line 148, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header {
    position: relative;
    z-index: 3;
    -webkit-box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {

    /* line 152, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .main-header .main-menu {
        margin-right: 30px;
    }
}

/* line 157, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul li {
    display: inline-block;
    position: relative;
    z-index: 1;
}

/* line 161, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul li a {
    color: #072366;
    font-weight: 400;
    padding: 39px 19px;
    display: block;
    font-size: 16px;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    text-transform: capitalize;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

    /* line 161, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .main-header .main-menu ul li a {
        padding: 39px 14px;
    }
}

/* line 174, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul li:hover>a {
    color: #09cc7f;
}

/* line 179, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul ul.submenu {
    position: absolute;
    width: 170px;
    background: rgba(0, 12, 32, 0.6);
    left: 0;
    top: 90%;
    visibility: hidden;
    opacity: 0;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    padding: 17px 0;
    border-top: 5px solid #09cc7f;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

/* line 191, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul ul.submenu>li {
    margin-left: 7px;
    display: block;
}

/* line 194, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul ul.submenu>li>a {
    padding: 6px 10px !important;
    font-size: 16px;
    color: #fdfdfd;
}

/* line 198, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header .main-menu ul ul.submenu>li>a:hover {
    color: #09cc7f;
    background: none;
    padding-left: 13px !important;
}

/* line 213, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.main-header ul>li:hover>ul.submenu {
    visibility: visible;
    opacity: 1;
    top: 100%;
}

/* line 219, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-transparent {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
}

/* line 229, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-sticky.sticky-bar {
    background: #fff;
}

/* line 235, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.header-sticky.sticky-bar.sticky .main-menu ul li a {
    padding: 20px 20px !important;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    /* line 231, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-sticky.sticky-bar.sticky {
        padding: 15px 0px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {

    /* line 231, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-sticky.sticky-bar.sticky {
        padding: 15px 0px;
    }
}

@media (max-width: 575px) {

    /* line 231, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
    .header-sticky.sticky-bar.sticky {
        padding: 15px 0px;
    }
}

/* line 256, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu {
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: 99;
}

/* line 261, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu {
    background: transparent;
    margin-top: 0px !important;
}

/* line 264, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu .slicknav_btn {
    top: -30px;
}

/* line 267, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu .slicknav_btn .slicknav_icon-bar {
    background-color: #09cc7f !important;
}

/* line 271, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu .slicknav_nav {
    margin-top: 9px !important;
}

/* line 274, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu .slicknav_nav a:hover {
    background: transparent;
    color: #09cc7f;
}

/* line 278, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu .slicknav_nav a {
    font-size: 15px;
    padding: 7px 10px;
}

/* line 283, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_headerMenu.scss */
.mobile_menu .slicknav_menu .slicknav_nav .slicknav_item a {
    padding: 0 !important;
}
</style>