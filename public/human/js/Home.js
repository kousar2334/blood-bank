(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Carousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Carousel",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      },
      items: [{
        title: "Food for every one. No one hungry",
        img: "static/img/theme/education.jpg",
        description: "programe for Food ",
        url: "qqwewqe"
      }, {
        title: "This is one",
        img: "static/img/theme/education.jpg",
        description: "fgsgfuysd sjgfsduyf",
        url: "qqwewqe"
      }, {
        title: "Public lribary",
        img: "static/img/theme/education.jpg",
        description: "fgsgfuysd sjgfsduyf",
        url: "qqwewqe"
      }, {
        title: "Education for every one. No one uneducated",
        img: "static/img/theme/education.jpg",
        description: "fgsgfuysd sjgfsduyf",
        url: "qqwewqe"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Hero.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero */ "./themes/human/components/Hero.vue");
/* harmony import */ var _components_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Carousel.vue */ "./themes/human/components/Carousel.vue");
/* harmony import */ var _components_doctor_SingleDoctor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/doctor/SingleDoctor.vue */ "./themes/human/components/doctor/SingleDoctor.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    Hero: _components_Hero__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: _components_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SingleDoctor: _components_doctor_SingleDoctor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      services: [{
        name: "হাসপাতাল",
        icon: "static/img/theme/hospital_one.png",
        url: "/hospitals-clinics"
      }, {
        name: "অ্যাম্বুলেন্স",
        icon: "static/img/theme/ambulance225x225.png",
        url: "/all-ambulance"
      }, {
        name: "ফায়ার সার্ভিস",
        icon: "static/img/theme/fire_station_one.png",
        url: "/fire-stations"
      }, {
        name: "পুলিশ",
        icon: "static/img/theme/police_one.png",
        url: "/police-stations"
      }],
      national_emergency_numbers: [{
        name: "জাতীয় জরুরী সেবা",
        number: 999,
        charge: false,
        logo: "static/img/govt_call_centers/nhd_logo2.png"
      }, {
        name: "দুর্নীতি দমন কমিশন",
        number: 106,
        charge: false,
        logo: "static/img/govt_call_centers/ic_call_acc.png"
      }, {
        name: "কৃষি কল সেন্টার",
        number: 16123,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_agriculture.png"
      }, {
        name: "স্বাস্থ্য বাতায়ন",
        number: 16263,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_health.png"
      }, {
        name: "বিটিসিএল",
        number: 16402,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_btcl.png"
      }, {
        name: "মহিলা সংস্থা / তথ্য আপা",
        number: 10922,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_national_female.png"
      }, {
        name: "দুর্যোগের আগাম বার্তা",
        number: 10941,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_durjog.png"
      }, {
        name: "চাইল্ড হেল্প লাইন",
        number: 1098,
        charge: false,
        logo: "static/img/govt_call_centers/ic_call_durjog.png"
      }, {
        name: "বাংলাদেশ ব্যাংক",
        number: 16236,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_bank.png"
      }, {
        name: "নারী ও শিশু নির্যাতন প্রতিরোধ সেল",
        number: 109,
        charge: false,
        logo: "static/img/govt_call_centers/ic_call_mohila_sisu.png"
      }, {
        name: "প্রবাসবন্ধু কল সেন্টার",
        number: "09654333333",
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_jatio_help_desk.png"
      }, {
        name: "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        number: "01799090011",
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_probasi_collan.png"
      }, {
        name: "জাতীয় পরিচয় পত্র",
        number: 105,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_vote.png"
      }, {
        name: "সরকারি আইন সেবা",
        number: 16430,
        charge: false,
        logo: "static/img/govt_call_centers/ic_call_sorkari_ayn_seba.png"
      }, {
        name: "ইউনিয়ন পরিষদ হেল্পলাইন",
        number: 16256,
        charge: true,
        logo: "static/img/govt_call_centers/ic_call_union_porishod.png"
      }, {
        name: "বিটিআরসি অভিযোগ কেন্দ্র",
        number: 100,
        charge: false,
        logo: "static/img/govt_call_centers/ic_call_btrc.png"
      }],
      top_doctors: []
    };
  },
  created: function created() {
    this.getDoctorList();
  },
  methods: {
    /**
     * Get Doctors
     */
    getDoctorList: function getDoctorList() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/get-top-doctors", {
        limit: 3
      }).then(function (response) {
        if (response.data.success) {
          _this.top_doctors = response.data.doctors;
        }
      })["catch"](function (error) {});
    }
  },
  metaInfo: {
    title: "বন্ধন | মানুষের পাশে সব সময় ",
    meta: [{
      vmid: "description",
      name: "description",
      content: "মানুষের পাশে সব সময়"
    }]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.slick-next:before {\n  content: \"\\2192\";\n  display: none;\n}\n.slick-prev,\n.slick-next {\n  padding: 20px 15px !important;\n  background-color: var(--primaryColor);\n  color: #fff;\n}\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.event-grid {\n  padding: 5px 15px;\n}\n.event-grid-wrapper .event-box img {\n  display: inline-block;\n}\n.event-details {\n  padding: 28px 0 35px;\n}\n.event-box {\n  text-align: center;\n  -o-box-shadow: 0 0 15px 0 #bfbfbf;\n  -ms-box-shadow: 0 0 15px 0 #bfbfbf;\n  box-shadow: 0 0 15px 0 #bfbfbf;\n}\n.owl-carousel .owl-item img {\n  transform-style: preserve-3d;\n}\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n.event-grid-wrapper .event-box .event-details h3 {\n  font-size: 20px;\n  margin: 0.9em 0 0.13em;\n  text-transform: capitalize;\n}\n.event-grid-wrapper .event-box .event-details h3 a {\n  color: #3d424b;\n  text-decoration: none;\n}\n.carousel-inner > .item > a > img,\n.carousel-inner > .item > img,\n.img-responsive,\n.thumbnail a > img,\n.thumbnail > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.event-grid-wrapper .event-box .event-details {\n  padding: 28px 0 35px;\n}\n.event-grid-wrapper .event-box .event-details h3 {\n  font-size: 20px;\n  margin: 0.9em 0 0.13em;\n  text-transform: capitalize;\n}\n.event-details .btn,\n.event-grid-wrapper .event-box .event-details .btn:hover {\n  color: #fff;\n}\n.event-grid-wrapper .event-box .event-details .btn {\n  font-size: 16px;\n  font-weight: 700;\n  color: #fb5e1c;\n  text-transform: capitalize;\n}\n.btn {\n  background-color: var(--primaryColor);\n}\n.slick-dots:not(#_) {\n  bottom: 20px;\n  display: flex !important;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 1rem;\n  width: auto;\n  margin: 0 auto;\n  padding: 0.25rem;\n}\n.slick-dots:not(#_) button:before {\n  display: none;\n}\n.slick-dots:not(#_) .slick-active {\n  background-color: white;\n}\n.slick-dots:not(#_) li {\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: gray;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.section-shaped .shape-style-1.shape-primary {\n\tbackground: linear-gradient(\n\t\t150deg,\n\t\tvar(--primaryColor) 15%,\n\t\tvar(--primaryColor) 70%,\n\t\tvar(--primaryColor) 94%\n\t);\n}\n.banner-word {\n\tcolor: white;\n\tline-height: 1.25;\n\tmargin-bottom: 12px;\n}\n.banner-btn {\n\tborder: none;\n\tcolor: #fff;\n\tpadding: 11.5px 35px;\n\tborder-radius: 50px;\n\tbackground-color: var(--bannerBtnBgColor);\n}\n.banner-btn:hover {\n\tbackground-color: #0a0e33;\n\tcolor: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.call-center-box[data-v-450c1b94] {\n\tmin-height: 300px;\n}\n.light-bg[data-v-450c1b94] {\n\tbackground-color: #f7f7f7;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=template&id=52c09100&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Carousel.vue?vue&type=template&id=52c09100& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "VueSlickCarousel",
    _vm._b(
      {
        scopedSlots: _vm._u([
          {
            key: "prevArrow",
            fn: function() {
              return [
                _c(
                  "button",
                  {
                    staticClass:
                      "prev p-0 d-inline-flex align-items-center justify-content-center"
                  },
                  [_c("i", { staticClass: "fa fa-angle-right" })]
                )
              ]
            },
            proxy: true
          },
          {
            key: "nextArrow",
            fn: function() {
              return [
                _c(
                  "button",
                  {
                    staticClass:
                      "next p-0 d-inline-flex align-items-center justify-content-center"
                  },
                  [_c("i", { staticClass: "fa fa-angle-right" })]
                )
              ]
            },
            proxy: true
          }
        ])
      },
      "VueSlickCarousel",
      _vm.settings,
      false
    ),
    _vm._l(_vm.items, function(item, index) {
      return _c("div", { key: index }, [
        _c(
          "div",
          {
            staticClass: "owl-item active center",
            staticStyle: { width: "380px", "margin-right": "0px" }
          },
          [
            _c("div", { staticClass: "event-grid" }, [
              _c("div", { staticClass: "event-box" }, [
                _c(
                  "div",
                  { staticClass: "img-holder" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "ProjectDetails",
                            params: { id: item.url }
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img img-responsive",
                          attrs: { src: "" + ("/" + item.img), alt: "" }
                        })
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "event-details" },
                  [
                    _c(
                      "h3",
                      {
                        staticStyle: {
                          "margin-top": "0",
                          "margin-bottom": "10px"
                        }
                      },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "ProjectDetails",
                                params: { id: item.url }
                              }
                            }
                          },
                          [_vm._v(_vm._s(item.title))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticStyle: {
                          "text-align": "justify",
                          "text-justify": "inter-word",
                          padding: "0 10px"
                        },
                        attrs: { id: "text-with-link" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t" +
                            _vm._s(item.description) +
                            "\n\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn theme-btn donate-project",
                        attrs: {
                          to: {
                            name: "ProjectDetails",
                            params: { id: item.url }
                          }
                        }
                      },
                      [_vm._v("Donate Now")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=template&id=7e7032cc&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Hero.vue?vue&type=template&id=7e7032cc& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "section-hero section-shaped my-0" }, [
      _c("div", { staticClass: "shape shape-style-1 shape-primary" }, [
        _c("span", { staticClass: "span-150" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-50" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-50" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-75" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-100" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-75" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-50" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-100" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-50" }),
        _vm._v(" "),
        _c("span", { staticClass: "span-100" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container pt-0 shape-container d-flex" }, [
        _c(
          "div",
          { staticClass: "row align-items-center justify-content-between" },
          [
            _c("div", { staticClass: "col-12 col-lg-5" }, [
              _c("div", { staticClass: "py-1" }, [
                _c("h1", { staticClass: "bangla-font banner-word" }, [
                  _vm._v("\n\t\t\t\t\t\tমানুষ আমরা "),
                  _c("br"),
                  _vm._v(
                    "পাশে দাঁড়াব সবার বিপদে , হাসব মোরা সবাই এক সাথে।\n\t\t\t\t\t"
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-7 d-none d-lg-block banner-image-setion" },
              [
                _c("img", {
                  staticClass: "banner-img",
                  attrs: { src: "/static/common/img/banner5.png" }
                })
              ]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=template&id=450c1b94&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/Home.vue?vue&type=template&id=450c1b94&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("hero"),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "content-section--docs-near-me",
          attrs: {
            id: "docs-near-me",
            "data-qa-target": "section-docs-near-me"
          }
        },
        [
          _c("div", { staticClass: "content-section__section-container" }, [
            _c(
              "div",
              {
                staticClass: "section-container section-container--docs-near-me"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "section-container__provider-card-deck" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "visiblity-wrapper visiblity-wrapper--rendered"
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "provider-card-deck" },
                          _vm._l(_vm.top_doctors, function(doctor, index) {
                            return _c(
                              "li",
                              {
                                key: index,
                                staticClass: "provider-card-deck__provider-card"
                              },
                              [
                                _c("single-doctor", {
                                  attrs: { doctor: doctor }
                                })
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "section-container__view-all-link" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "view-all-link view-all-link--docs-near-me",
                        attrs: {
                          id: "docs-near-me-view-all-link",
                          to: "/doctors"
                        }
                      },
                      [
                        _c("span", { staticClass: "bangla-font" }, [
                          _vm._v("সকল ডাক্তার দেখুন ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass: "icon-mo_icon-2DQ-j icon-mo_md-1oiv-",
                            attrs: {
                              viewBox: "0 0 24 24",
                              width: "1em",
                              height: "1em",
                              "aria-hidden": "true",
                              "data-qa-target": "arrow-right-icon",
                              focusable: "false"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: { d: "M3.5,12.5 L21.5,12.5" }
                                }),
                                _vm._v(" "),
                                _c("polyline", {
                                  attrs: {
                                    points: "13.5 20.5 21.5 12.5 13.5 4.5"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container pt-100 pb-70" },
        [_vm._m(1), _vm._v(" "), _c("Carousel")],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "benefit-area three pt-100 pb-70" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.services, function(service, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-sm-6 col-lg-3" },
                [
                  _c(
                    "div",
                    { staticClass: "benefit-item" },
                    [
                      _c("img", {
                        staticClass: "flaticon-house",
                        attrs: { src: "/" + service.icon }
                      }),
                      _vm._v(" "),
                      _c("router-link", { attrs: { to: service.url } }, [
                        _c("h3", { staticClass: "bangla-font" }, [
                          _vm._v(_vm._s(service.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bangla-font" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\tইউক্রেন ও রাশিয়ার মধ্যে আসন্ন যুদ্ধের যে লক্ষণগুলো সম্পর্কে\n\t\t\t\t\t\t\tসতর্ক করা হয়েছিল তা এখন পুরোপুরি প্রস্তুত বলে মনে করা হচ্ছে।\n\t\t\t\t\t\t\tসীমান্তের কাছাকাছি ফিল্ড হাসপাতাল স্থাপন করা হয়েছে।\n\t\t\t\t\t\t"
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "section light-bg" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.national_emergency_numbers, function(item, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "col-lg-3 col-12 align-middle" },
                    [
                      _c("card", { staticClass: "border-1 call-center-box" }, [
                        _c("img", {
                          staticClass: "img-center img-fluid",
                          staticStyle: { width: "100px" },
                          attrs: { src: "/" + item.logo }
                        }),
                        _vm._v(" "),
                        _c(
                          "h3",
                          {
                            staticClass: "call-center-number text-center mt-1"
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(item.number) +
                                "\n\t\t\t\t\t\t\t\t\t"
                            ),
                            item.charge
                              ? _c(
                                  "span",
                                  {
                                    staticClass:
                                      "bangla-font call-center-badge danger"
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\tচার্জ প্রযোজ্য\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              : _c(
                                  "span",
                                  {
                                    staticClass:
                                      "bangla-font call-center-badge success"
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\tটোল ফ্রি\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "bangla-font text-center call-center-title mt-0"
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(item.name) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                }),
                0
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      {
        staticClass: "section-container__title bangla-font",
        attrs: { "data-qa-target": "section-docs-near-me-title" }
      },
      [
        _c(
          "span",
          {
            staticClass: "title__specialty",
            attrs: { "data-qa-target": "section-docs-near-me-specialty" }
          },
          [_vm._v("খুব সহজেই")]
        ),
        _vm._v("\n\t\t\t\t\tখুঁজুন\n\t\t\t\t\t"),
        _c(
          "span",
          {
            staticClass: "title__location",
            attrs: { "data-qa-target": "section-docs-near-me-location" }
          },
          [_vm._v("আপনার ডাক্তার কে")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", { staticClass: "sub-title bangla-font" }, [
        _vm._v("আমাদের চলমান প্রোজেক্ট সমূহ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", { staticClass: "sub-title bangla-font" }, [
        _vm._v("আমাদের অন্যান্য সেবা সমূহ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-5 section-title" }, [
      _c("h1", { staticClass: "bangla-font text-center sub-title" }, [
        _vm._v("\n\t\t\t\t\t\tসরকারি জরুরী কল সেন্টার\n\t\t\t\t\t")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./themes/human/components/Carousel.vue":
/*!**********************************************!*\
  !*** ./themes/human/components/Carousel.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_52c09100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=52c09100& */ "./themes/human/components/Carousel.vue?vue&type=template&id=52c09100&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./themes/human/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_52c09100___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_52c09100___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/components/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/components/Carousel.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./themes/human/components/Carousel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************!*\
  !*** ./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./themes/human/components/Carousel.vue?vue&type=template&id=52c09100&":
/*!*****************************************************************************!*\
  !*** ./themes/human/components/Carousel.vue?vue&type=template&id=52c09100& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_52c09100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=52c09100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Carousel.vue?vue&type=template&id=52c09100&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_52c09100___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_52c09100___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./themes/human/components/Hero.vue":
/*!******************************************!*\
  !*** ./themes/human/components/Hero.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero_vue_vue_type_template_id_7e7032cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero.vue?vue&type=template&id=7e7032cc& */ "./themes/human/components/Hero.vue?vue&type=template&id=7e7032cc&");
/* harmony import */ var _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.vue?vue&type=script&lang=js& */ "./themes/human/components/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero.vue?vue&type=style&index=0&lang=css& */ "./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hero_vue_vue_type_template_id_7e7032cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hero_vue_vue_type_template_id_7e7032cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/components/Hero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/components/Hero.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./themes/human/components/Hero.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./themes/human/components/Hero.vue?vue&type=template&id=7e7032cc&":
/*!*************************************************************************!*\
  !*** ./themes/human/components/Hero.vue?vue&type=template&id=7e7032cc& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_7e7032cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=template&id=7e7032cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Hero.vue?vue&type=template&id=7e7032cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_7e7032cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_7e7032cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./themes/human/views/pages/Home.vue":
/*!*******************************************!*\
  !*** ./themes/human/views/pages/Home.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_450c1b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=450c1b94&scoped=true& */ "./themes/human/views/pages/Home.vue?vue&type=template&id=450c1b94&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./themes/human/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css& */ "./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_450c1b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_450c1b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "450c1b94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/views/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/views/pages/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./themes/human/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=style&index=0&id=450c1b94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_450c1b94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./themes/human/views/pages/Home.vue?vue&type=template&id=450c1b94&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./themes/human/views/pages/Home.vue?vue&type=template&id=450c1b94&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_450c1b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=450c1b94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Home.vue?vue&type=template&id=450c1b94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_450c1b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_450c1b94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);