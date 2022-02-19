(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/Carousel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
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
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      },
      items: [{
        title: "This is one",
        img: "img/theme/slider.jpg",
        titile_first: "titile First",
        title_middle: "Middle",
        description: "fgsgfuysd sjgfsduyf",
        url: "/qqwewqe"
      }, {
        title: "This is one",
        img: "img/theme/slider_2.png",
        titile_first: "titile First",
        title_middle: "Middle",
        description: "fgsgfuysd sjgfsduyf",
        url: "/qqwewqe"
      }, {
        title: "",
        img: "img/theme/slider_3.jpg",
        titile_first: "",
        title_middle: "",
        description: "",
        url: "/qqwewqe"
      }, {
        title: "This is one",
        img: "img/theme/slider.jpg",
        titile_first: "titile First",
        title_middle: "Middle",
        description: "fgsgfuysd sjgfsduyf",
        url: "/qqwewqe"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero */ "./resources/js/default/components/Hero.vue");
/* harmony import */ var _components_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Carousel.vue */ "./resources/js/default/components/Carousel.vue");
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
    Carousel: _components_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      services: [{
        name: "ডাক্তার",
        icon: "img/theme/doctor.jpg",
        url: "/doctors"
      }, {
        name: "হাসপাতাল",
        icon: "img/theme/hospital225x225.png",
        url: "/hospitals-clinics"
      }, {
        name: "ব্লাড ব্যাংক",
        icon: "img/theme/bloodbank225x225.png",
        url: "/blood-bank"
      }, {
        name: "অ্যাম্বুলেন্স",
        icon: "img/theme/ambulance225x225.png",
        url: "/all-ambulance"
      }, {
        name: "ফায়ার সার্ভিস",
        icon: "img/theme/firestattion225x225.jpg",
        url: "/fire-stations"
      }, {
        name: "পুলিশ",
        icon: "img/theme/police.png",
        url: "/police-stations"
      }],
      national_emergency_numbers: [{
        name: "জাতীয় জরুরী সেবা",
        number: 999,
        charge: false,
        logo: "img/govt_call_centers/nhd_logo2.png"
      }, {
        name: "দুর্নীতি দমন কমিশন",
        number: 106,
        charge: false,
        logo: "img/govt_call_centers/ic_call_acc.png"
      }, {
        name: "কৃষি কল সেন্টার",
        number: 16123,
        charge: true,
        logo: "img/govt_call_centers/ic_call_agriculture.png"
      }, {
        name: "স্বাস্থ্য বাতায়ন",
        number: 16263,
        charge: true,
        logo: "img/govt_call_centers/ic_call_health.png"
      }, {
        name: "বিটিসিএল",
        number: 16402,
        charge: true,
        logo: "img/govt_call_centers/ic_call_btcl.png"
      }, {
        name: "মহিলা সংস্থা / তথ্য আপা",
        number: 10922,
        charge: true,
        logo: "img/govt_call_centers/ic_call_national_female.png"
      }, {
        name: "দুর্যোগের আগাম বার্তা",
        number: 10941,
        charge: true,
        logo: "img/govt_call_centers/ic_call_durjog.png"
      }, {
        name: "চাইল্ড হেল্প লাইন",
        number: 1098,
        charge: false,
        logo: "img/govt_call_centers/ic_call_durjog.png"
      }, {
        name: "বাংলাদেশ ব্যাংক",
        number: 16236,
        charge: true,
        logo: "img/govt_call_centers/ic_call_bank.png"
      }, {
        name: "নারী ও শিশু নির্যাতন প্রতিরোধ সেল",
        number: 109,
        charge: false,
        logo: "img/govt_call_centers/ic_call_mohila_sisu.png"
      }, {
        name: "প্রবাসবন্ধু কল সেন্টার",
        number: "09654333333",
        charge: true,
        logo: "img/govt_call_centers/ic_call_jatio_help_desk.png"
      }, {
        name: "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        number: "01799090011",
        charge: true,
        logo: "img/govt_call_centers/ic_call_probasi_collan.png"
      }, {
        name: "জাতীয় পরিচয় পত্র",
        number: 105,
        charge: true,
        logo: "img/govt_call_centers/ic_call_vote.png"
      }, {
        name: "সরকারি আইন সেবা",
        number: 16430,
        charge: false,
        logo: "img/govt_call_centers/ic_call_sorkari_ayn_seba.png"
      }, {
        name: "ইউনিয়ন পরিষদ হেল্পলাইন",
        number: 16256,
        charge: true,
        logo: "img/govt_call_centers/ic_call_union_porishod.png"
      }, {
        name: "বিটিআরসি অভিযোগ কেন্দ্র",
        number: 100,
        charge: false,
        logo: "img/govt_call_centers/ic_call_btrc.png"
      }]
    };
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/Carousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
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
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }]
      },
      items: [{
        title: "This is one",
        img: "img/theme/slider.jpg",
        titile_first: "titile First",
        title_middle: "Middle",
        description: "fgsgfuysd sjgfsduyf",
        url: "/qqwewqe"
      }, {
        title: "This is one",
        img: "img/theme/slider_2.png",
        titile_first: "titile First",
        title_middle: "Middle",
        description: "fgsgfuysd sjgfsduyf",
        url: "/qqwewqe"
      }, {
        title: "",
        img: "img/theme/slider_3.jpg",
        titile_first: "",
        title_middle: "",
        description: "",
        url: "/qqwewqe"
      }, {
        title: "This is one",
        img: "img/theme/slider.jpg",
        titile_first: "titile First",
        title_middle: "Middle",
        description: "fgsgfuysd sjgfsduyf",
        url: "/qqwewqe"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero */ "./resources/js/templateOne/components/Hero.vue");
/* harmony import */ var _components_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Carousel.vue */ "./resources/js/templateOne/components/Carousel.vue");
/* harmony import */ var _components_doctor_SingleDoctor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/doctor/SingleDoctor.vue */ "./resources/js/templateOne/components/doctor/SingleDoctor.vue");
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
        icon: "img/theme/hospital_one.png",
        url: "/hospitals-clinics"
      }, {
        name: "অ্যাম্বুলেন্স",
        icon: "img/theme/ambulance225x225.png",
        url: "/all-ambulance"
      }, {
        name: "ফায়ার সার্ভিস",
        icon: "img/theme/fire_station_one.png",
        url: "/fire-stations"
      }, {
        name: "পুলিশ",
        icon: "img/theme/police_one.png",
        url: "/police-stations"
      }],
      national_emergency_numbers: [{
        name: "জাতীয় জরুরী সেবা",
        number: 999,
        charge: false,
        logo: "img/govt_call_centers/nhd_logo2.png"
      }, {
        name: "দুর্নীতি দমন কমিশন",
        number: 106,
        charge: false,
        logo: "img/govt_call_centers/ic_call_acc.png"
      }, {
        name: "কৃষি কল সেন্টার",
        number: 16123,
        charge: true,
        logo: "img/govt_call_centers/ic_call_agriculture.png"
      }, {
        name: "স্বাস্থ্য বাতায়ন",
        number: 16263,
        charge: true,
        logo: "img/govt_call_centers/ic_call_health.png"
      }, {
        name: "বিটিসিএল",
        number: 16402,
        charge: true,
        logo: "img/govt_call_centers/ic_call_btcl.png"
      }, {
        name: "মহিলা সংস্থা / তথ্য আপা",
        number: 10922,
        charge: true,
        logo: "img/govt_call_centers/ic_call_national_female.png"
      }, {
        name: "দুর্যোগের আগাম বার্তা",
        number: 10941,
        charge: true,
        logo: "img/govt_call_centers/ic_call_durjog.png"
      }, {
        name: "চাইল্ড হেল্প লাইন",
        number: 1098,
        charge: false,
        logo: "img/govt_call_centers/ic_call_durjog.png"
      }, {
        name: "বাংলাদেশ ব্যাংক",
        number: 16236,
        charge: true,
        logo: "img/govt_call_centers/ic_call_bank.png"
      }, {
        name: "নারী ও শিশু নির্যাতন প্রতিরোধ সেল",
        number: 109,
        charge: false,
        logo: "img/govt_call_centers/ic_call_mohila_sisu.png"
      }, {
        name: "প্রবাসবন্ধু কল সেন্টার",
        number: "09654333333",
        charge: true,
        logo: "img/govt_call_centers/ic_call_jatio_help_desk.png"
      }, {
        name: "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        number: "01799090011",
        charge: true,
        logo: "img/govt_call_centers/ic_call_probasi_collan.png"
      }, {
        name: "জাতীয় পরিচয় পত্র",
        number: 105,
        charge: true,
        logo: "img/govt_call_centers/ic_call_vote.png"
      }, {
        name: "সরকারি আইন সেবা",
        number: 16430,
        charge: false,
        logo: "img/govt_call_centers/ic_call_sorkari_ayn_seba.png"
      }, {
        name: "ইউনিয়ন পরিষদ হেল্পলাইন",
        number: 16256,
        charge: true,
        logo: "img/govt_call_centers/ic_call_union_porishod.png"
      }, {
        name: "বিটিআরসি অভিযোগ কেন্দ্র",
        number: 100,
        charge: false,
        logo: "img/govt_call_centers/ic_call_btrc.png"
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-banner-item {\n  background-size: cover;\n  background-position: center;\n  padding: 130px 60px 138px;\n  min-height: 350px;\n  max-height: 350px;\n}\n.product-banner-content > span {\n  font-size: 18px;\n  font-weight: 500;\n  color: #60b946;\n}\n.product-banner-content h2 {\n  font-size: 48px;\n  line-height: 1.125;\n  margin-bottom: 24px;\n}\n.product-banner-content h2 span {\n  color: #60b946;\n}\n.product-banner-content h2:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 85px;\n  background-color: #60b946;\n}\n.product-banner-content p {\n  font-size: 16px;\n  line-height: 1.625;\n  max-width: 262px;\n  margin-bottom: 32px;\n}\n.product-banner-content .btn {\n  padding: 12px 33px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.slick-dots:not(#_) {\n  bottom: 20px;\n  display: flex !important;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 1rem;\n  width: auto;\n  margin: 0 auto;\n  padding: 0.25rem;\n}\n.slick-dots:not(#_) button:before {\n  display: none;\n}\n.slick-dots:not(#_) .slick-active {\n  background-color: white;\n}\n.slick-dots:not(#_) li {\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: gray;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-banner-item {\n  background-size: cover;\n  background-position: center;\n  padding: 130px 60px 138px;\n  min-height: 350px;\n  max-height: 350px;\n}\n.product-banner-content > span {\n  font-size: 18px;\n  font-weight: 500;\n  color: #60b946;\n}\n.product-banner-content h2 {\n  font-size: 48px;\n  line-height: 1.125;\n  margin-bottom: 24px;\n}\n.product-banner-content h2 span {\n  color: #60b946;\n}\n.product-banner-content h2:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 85px;\n  background-color: #60b946;\n}\n.product-banner-content p {\n  font-size: 16px;\n  line-height: 1.625;\n  max-width: 262px;\n  margin-bottom: 32px;\n}\n.product-banner-content .btn {\n  padding: 12px 33px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.slick-dots:not(#_) {\n  bottom: 20px;\n  display: flex !important;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 1rem;\n  width: auto;\n  margin: 0 auto;\n  padding: 0.25rem;\n}\n.slick-dots:not(#_) button:before {\n  display: none;\n}\n.slick-dots:not(#_) .slick-active {\n  background-color: white;\n}\n.slick-dots:not(#_) li {\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: gray;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.call-center-box[data-v-7d94cab7] {\n\tmin-height: 300px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.call-center-box[data-v-1fef2b4c] {\n\tmin-height: 300px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=template&id=3cd56afd&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/Carousel.vue?vue&type=template&id=3cd56afd& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container p-0" },
    [
      _c(
        "VueSlickCarousel",
        _vm._b({}, "VueSlickCarousel", _vm.settings, false),
        _vm._l(_vm.items, function(item, index) {
          return _c("div", { key: index }, [
            _c(
              "div",
              {
                staticClass:
                  "product-banner-item d-flex align-items-center m-2",
                style: { backgroundImage: "url(" + ("/" + item.img) + ")" }
              },
              [
                _c("div", { staticClass: "product-banner-content" }, [
                  _c("span", [_vm._v(_vm._s(item.title))]),
                  _vm._v(" "),
                  item.titile_first
                    ? _c(
                        "h2",
                        {
                          staticClass: "text-uppercase position-relative pl-20"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" + _vm._s(item.titile_first) + " "
                          ),
                          _c("span", [_vm._v(_vm._s(item.title_middle))])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(item.description))]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "btn btn_fill radius-50",
                    attrs: { href: item.url }
                  })
                ])
              ]
            )
          ])
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=template&id=7d94cab7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/Home.vue?vue&type=template&id=7d94cab7&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _vm._l(_vm.services, function(service, index) {
                return [
                  _c(
                    "div",
                    {
                      key: index,
                      staticClass: "col-12 col-md-4 col-sm-6 col-lg-4 mb-4"
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: service.url } },
                        [
                          _c(
                            "card",
                            {
                              staticClass: "border-0 py-0",
                              attrs: { hover: "", shadow: "" }
                            },
                            [
                              _c("img", {
                                staticClass:
                                  "\n\t\t\t\t\t\t\t\t\t\trounded-circle\n\t\t\t\t\t\t\t\t\t\timg-center img-fluid\n\t\t\t\t\t\t\t\t\t\tshadow\n\t\t\t\t\t\t\t\t\t\tshadow-lg--hover\n\t\t\t\t\t\t\t\t\t\tservice-image\n\t\t\t\t\t\t\t\t\t",
                                attrs: { src: "/" + service.icon }
                              }),
                              _vm._v(" "),
                              _c(
                                "h2",
                                { staticClass: "bangla-font text-center mt-5" },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(service.name) +
                                      "\n\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12" }, [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.national_emergency_numbers, function(item, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "col-lg-3 col-6 align-middle" },
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
      ]),
      _vm._v(" "),
      _c("Carousel")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-5" }, [
      _c("h1", { staticClass: "bangla-font text-center" }, [
        _vm._v("সরকারি জরুরী কল সেন্টার")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=template&id=7022c648&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/Carousel.vue?vue&type=template&id=7022c648& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container p-0" },
    [
      _c(
        "VueSlickCarousel",
        _vm._b({}, "VueSlickCarousel", _vm.settings, false),
        _vm._l(_vm.items, function(item, index) {
          return _c("div", { key: index }, [
            _c(
              "div",
              {
                staticClass:
                  "product-banner-item d-flex align-items-center m-2",
                style: { backgroundImage: "url(" + ("/" + item.img) + ")" }
              },
              [
                _c("div", { staticClass: "product-banner-content" }, [
                  _c("span", [_vm._v(_vm._s(item.title))]),
                  _vm._v(" "),
                  item.titile_first
                    ? _c(
                        "h2",
                        {
                          staticClass: "text-uppercase position-relative pl-20"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" + _vm._s(item.titile_first) + " "
                          ),
                          _c("span", [_vm._v(_vm._s(item.title_middle))])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(item.description))]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "btn btn_fill radius-50",
                    attrs: { href: item.url }
                  })
                ])
              ]
            )
          ])
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=template&id=1fef2b4c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/Home.vue?vue&type=template&id=1fef2b4c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "benefit-area three pt-100 pb-70" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(1),
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
        _vm._v("আমাদের অন্যান্য সেবা সমূহ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/default/components/Carousel.vue":
/*!******************************************************!*\
  !*** ./resources/js/default/components/Carousel.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_3cd56afd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=3cd56afd& */ "./resources/js/default/components/Carousel.vue?vue&type=template&id=3cd56afd&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/default/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_3cd56afd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_3cd56afd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/components/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/components/Carousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/default/components/Carousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/default/components/Carousel.vue?vue&type=template&id=3cd56afd&":
/*!*************************************************************************************!*\
  !*** ./resources/js/default/components/Carousel.vue?vue&type=template&id=3cd56afd& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_3cd56afd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=3cd56afd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/Carousel.vue?vue&type=template&id=3cd56afd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_3cd56afd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_3cd56afd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/default/views/pages/Home.vue":
/*!***************************************************!*\
  !*** ./resources/js/default/views/pages/Home.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_7d94cab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=7d94cab7&scoped=true& */ "./resources/js/default/views/pages/Home.vue?vue&type=template&id=7d94cab7&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/default/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css& */ "./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_7d94cab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_7d94cab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d94cab7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/views/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/views/pages/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/default/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=style&index=0&id=7d94cab7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7d94cab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/default/views/pages/Home.vue?vue&type=template&id=7d94cab7&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/default/views/pages/Home.vue?vue&type=template&id=7d94cab7&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7d94cab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=7d94cab7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Home.vue?vue&type=template&id=7d94cab7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7d94cab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7d94cab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/components/Carousel.vue":
/*!**********************************************************!*\
  !*** ./resources/js/templateOne/components/Carousel.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_7022c648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=7022c648& */ "./resources/js/templateOne/components/Carousel.vue?vue&type=template&id=7022c648&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_7022c648___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_7022c648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/components/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/components/Carousel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/templateOne/components/Carousel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/templateOne/components/Carousel.vue?vue&type=template&id=7022c648&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/templateOne/components/Carousel.vue?vue&type=template&id=7022c648& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7022c648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=7022c648& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/Carousel.vue?vue&type=template&id=7022c648&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7022c648___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_7022c648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/views/pages/Home.vue":
/*!*******************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Home.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_1fef2b4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=1fef2b4c&scoped=true& */ "./resources/js/templateOne/views/pages/Home.vue?vue&type=template&id=1fef2b4c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css& */ "./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_1fef2b4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_1fef2b4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1fef2b4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/views/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/views/pages/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=style&index=0&id=1fef2b4c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1fef2b4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/templateOne/views/pages/Home.vue?vue&type=template&id=1fef2b4c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Home.vue?vue&type=template&id=1fef2b4c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1fef2b4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=1fef2b4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Home.vue?vue&type=template&id=1fef2b4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1fef2b4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1fef2b4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);