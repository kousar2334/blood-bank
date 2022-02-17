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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
exports.push([module.i, "\n.call-center-box[data-v-7d94cab7] {\n\tmin-height: 300px;\n}\n@media (min-width: 75rem) {\n.section-container--docs-near-me[data-v-7d94cab7] {\n\t\tgrid-template-columns: 18.5rem 1fr;\n\t\tgrid-template-rows: 2fr 1fr;\n\t\tgap: 1rem;\n}\n}\n.section-container--docs-near-me[data-v-7d94cab7] {\n\tdisplay: grid;\n}\n@media (min-width: 75rem) {\n.section-container[data-v-7d94cab7] {\n\t\tpadding-top: 6rem;\n\t\tpadding-bottom: 7rem;\n}\n}\n@media (min-width: 48rem) {\n.section-container[data-v-7d94cab7] {\n\t\tpadding-top: 4rem;\n\t\tpadding-bottom: 5rem;\n}\n}\n.section-container--docs-near-me[data-v-7d94cab7] {\n\tdisplay: grid;\n}\n.content-section--docs-near-me[data-v-7d94cab7] {\n\tbackground-color: #f7f7f7;\n}\n.section-container[data-v-7d94cab7] {\n\tmax-width: 75rem;\n\tmargin: 0 auto;\n\tpadding: 2rem 1rem;\n}\n.section-container--docs-near-me[data-v-7d94cab7] {\n\tdisplay: grid;\n}\n.section-container[data-v-7d94cab7] {\n\tmax-width: 75rem;\n\tmargin: 0 auto;\n\tpadding: 2rem 1rem;\n}\nh2[data-v-7d94cab7],\nh3[data-v-7d94cab7],\nh4[data-v-7d94cab7],\nh5[data-v-7d94cab7],\nh6[data-v-7d94cab7] {\n\tmargin-top: 0;\n\tmargin-bottom: 0.75rem;\n\tcolor: #4a4a4d;\n\tfont-weight: 700;\n\tline-height: 1.25;\n}\n*[data-v-7d94cab7],[data-v-7d94cab7]:after,[data-v-7d94cab7]:before {\n\tbox-sizing: border-box;\n}\nuser agent stylesheet h2[data-v-7d94cab7] {\n\tdisplay: block;\n\tfont-size: 1.5em;\n\tmargin-block-start: 0.83em;\n\tmargin-block-end: 0.83em;\n\tmargin-inline-start: 0px;\n\tmargin-inline-end: 0px;\n\tfont-weight: bold;\n}\n.section-container--docs-near-me .title__specialty[data-v-7d94cab7] {\n\ttext-transform: capitalize;\n}\n.section-container__provider-card-deck[data-v-7d94cab7] {\n\tmax-width: 100vw;\n\toverflow-x: auto;\n\tmargin: 0 -1rem;\n\tpadding: 0 1rem;\n}\n.provider-card-deck[data-v-7d94cab7] {\n\tmargin: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tmin-width: 48rem;\n\tgrid-gap: 1rem;\n\tpadding: 0.25rem 1rem 0.5rem 0;\n}\n*[data-v-7d94cab7],[data-v-7d94cab7]:after,[data-v-7d94cab7]:before {\n\tbox-sizing: border-box;\n}\nli[data-v-7d94cab7] {\n\tdisplay: list-item;\n\ttext-align: -webkit-match-parent;\n}\n.provider-card-deck[data-v-7d94cab7] {\n\tmargin: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tmin-width: 48rem;\n\tgrid-gap: 1rem;\n\tpadding: 0.25rem 1rem 0.5rem 0;\n}\n.provider-card[data-v-7d94cab7] {\n\tdisplay: grid;\n\theight: 100%;\n\tborder-radius: 0.25rem;\n\tbackground-color: #fff;\n\tbox-shadow: 0 1px 3px rgb(0 0 0 / 40%);\n\tcolor: #626366;\n\ttransition: box-shadow 0.25s;\n\tposition: relative;\n\trow-gap: 1rem;\n\tpadding: 1rem;\n\tgrid-template-columns: 1fr 90px;\n\tgrid-template-rows: auto 1fr auto;\n\toverflow: hidden;\n\tfont-size: 0.75rem;\n}\n.provider-card__provider-details[data-v-7d94cab7] {\n\tdisplay: grid;\n\trow-gap: 0.5rem;\n}\n.provider-details__provider-name-link[data-v-7d94cab7] {\n\tmargin-bottom: 0;\n\tfont-size: 21px;\n}\n.provider-img[data-v-7d94cab7] {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 90px;\n\theight: auto;\n}\n.provider-image-mo_lg-1OYOU[data-v-7d94cab7] {\n\twidth: 96px;\n\theight: 128px;\n}\n.provider-image-mo_root-2YrD_[data-v-7d94cab7] {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n}\n.provider-card__provider-img[data-v-7d94cab7] {\n\tgrid-column: 2;\n}\n.provider-card__provider-strengths[data-v-7d94cab7] {\n\tgrid-column: 1 / span 2;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tfont-size: 0.875rem;\n}\n.provider-strengths[data-v-7d94cab7] {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\trow-gap: 0.25em;\n}\na[data-v-7d94cab7],\nbutton[data-v-7d94cab7] {\n\tcolor: #0202ea;\n\tfont-weight: 500;\n\ttext-decoration: none;\n}\n.provider-strengths__strength-item[data-v-7d94cab7] {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\t-moz-column-gap: 0.5em;\n\tcolumn-gap: 0.5em;\n\tline-height: 1.25;\n}\n@media (min-width: 75rem) {\n.section-container--docs-near-me .section-container__view-all-link[data-v-7d94cab7] {\n\t\tmargin-top: 0;\n}\n}\n@media (min-width: 75rem) {\n.section-container--docs-near-me .section-container__provider-card-deck[data-v-7d94cab7] {\n\t\tgrid-column: 2;\n\t\tgrid-row: 1 / span 2;\n}\n}\n.section-container--docs-near-me .section-container__view-all-link[data-v-7d94cab7] {\n\tmargin-top: 1rem;\n}\n.section-container__view-all-link[data-v-7d94cab7] {\n\tposition: relative;\n}\n.provider-card__view-profile-btn[data-v-7d94cab7] {\n\tgrid-column: 1 / span 2;\n}\n.view-profile-btn[data-v-7d94cab7] {\n\twidth: 100%;\n}\n.button[data-v-7d94cab7] {\n\tdisplay: inline-block;\n\tborder-radius: 4rem;\n\tpadding: 0.45rem 1.25rem 0.65rem;\n\tcolor: #fff;\n\tfont-size: 0.875rem;\n\tfont-weight: 700;\n\tline-height: 1.25;\n\ttransition: box-shadow 0.25s, background-color 0.25s;\n\ttext-align: center;\n\tvertical-align: middle;\n\tbackground: #d83d40;\n\tborder: 1px solid #d83d40;\n}\n.sr-only[data-v-7d94cab7] {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tmargin: -1px;\n\tpadding: 0;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\tborder: 0;\n}\n", ""]);

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
exports.push([module.i, "\n.call-center-box[data-v-1fef2b4c] {\n\tmin-height: 300px;\n}\n@media (min-width: 75rem) {\n.section-container--docs-near-me[data-v-1fef2b4c] {\n\t\tgrid-template-columns: 18.5rem 1fr;\n\t\tgrid-template-rows: 2fr 1fr;\n\t\tgap: 1rem;\n}\n}\n.section-container--docs-near-me[data-v-1fef2b4c] {\n\tdisplay: grid;\n}\n@media (min-width: 75rem) {\n.section-container[data-v-1fef2b4c] {\n\t\tpadding-top: 6rem;\n\t\tpadding-bottom: 7rem;\n}\n}\n@media (min-width: 48rem) {\n.section-container[data-v-1fef2b4c] {\n\t\tpadding-top: 4rem;\n\t\tpadding-bottom: 5rem;\n}\n}\n.section-container--docs-near-me[data-v-1fef2b4c] {\n\tdisplay: grid;\n}\n.content-section--docs-near-me[data-v-1fef2b4c] {\n\tbackground-color: #f7f7f7;\n}\n.section-container[data-v-1fef2b4c] {\n\tmax-width: 75rem;\n\tmargin: 0 auto;\n\tpadding: 2rem 1rem;\n}\n.section-container--docs-near-me[data-v-1fef2b4c] {\n\tdisplay: grid;\n}\n.section-container[data-v-1fef2b4c] {\n\tmax-width: 75rem;\n\tmargin: 0 auto;\n\tpadding: 2rem 1rem;\n}\nh2[data-v-1fef2b4c],\nh3[data-v-1fef2b4c],\nh4[data-v-1fef2b4c],\nh5[data-v-1fef2b4c],\nh6[data-v-1fef2b4c] {\n\tmargin-top: 0;\n\tmargin-bottom: 0.75rem;\n\tcolor: #4a4a4d;\n\tfont-weight: 700;\n\tline-height: 1.25;\n}\n*[data-v-1fef2b4c],[data-v-1fef2b4c]:after,[data-v-1fef2b4c]:before {\n\tbox-sizing: border-box;\n}\nuser agent stylesheet h2[data-v-1fef2b4c] {\n\tdisplay: block;\n\tfont-size: 1.5em;\n\tmargin-block-start: 0.83em;\n\tmargin-block-end: 0.83em;\n\tmargin-inline-start: 0px;\n\tmargin-inline-end: 0px;\n\tfont-weight: bold;\n}\n.section-container--docs-near-me .title__specialty[data-v-1fef2b4c] {\n\ttext-transform: capitalize;\n}\n.section-container__provider-card-deck[data-v-1fef2b4c] {\n\tmax-width: 100vw;\n\toverflow-x: auto;\n\tmargin: 0 -1rem;\n\tpadding: 0 1rem;\n}\n.provider-card-deck[data-v-1fef2b4c] {\n\tmargin: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tmin-width: 48rem;\n\tgrid-gap: 1rem;\n\tpadding: 0.25rem 1rem 0.5rem 0;\n}\n*[data-v-1fef2b4c],[data-v-1fef2b4c]:after,[data-v-1fef2b4c]:before {\n\tbox-sizing: border-box;\n}\nli[data-v-1fef2b4c] {\n\tdisplay: list-item;\n\ttext-align: -webkit-match-parent;\n}\n.provider-card-deck[data-v-1fef2b4c] {\n\tmargin: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tmin-width: 48rem;\n\tgrid-gap: 1rem;\n\tpadding: 0.25rem 1rem 0.5rem 0;\n}\n.provider-card[data-v-1fef2b4c] {\n\tdisplay: grid;\n\theight: 100%;\n\tborder-radius: 0.25rem;\n\tbackground-color: #fff;\n\tbox-shadow: 0 1px 3px rgb(0 0 0 / 40%);\n\tcolor: #626366;\n\ttransition: box-shadow 0.25s;\n\tposition: relative;\n\trow-gap: 1rem;\n\tpadding: 1rem;\n\tgrid-template-columns: 1fr 90px;\n\tgrid-template-rows: auto 1fr auto;\n\toverflow: hidden;\n\tfont-size: 0.75rem;\n}\n.provider-card__provider-details[data-v-1fef2b4c] {\n\tdisplay: grid;\n\trow-gap: 0.5rem;\n}\n.provider-details__provider-name-link[data-v-1fef2b4c] {\n\tmargin-bottom: 0;\n\tfont-size: 21px;\n}\n.provider-img[data-v-1fef2b4c] {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 90px;\n\theight: auto;\n}\n.provider-image-mo_lg-1OYOU[data-v-1fef2b4c] {\n\twidth: 96px;\n\theight: 128px;\n}\n.provider-image-mo_root-2YrD_[data-v-1fef2b4c] {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n}\n.provider-card__provider-img[data-v-1fef2b4c] {\n\tgrid-column: 2;\n}\n.provider-card__provider-strengths[data-v-1fef2b4c] {\n\tgrid-column: 1 / span 2;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tfont-size: 0.875rem;\n}\n.provider-strengths[data-v-1fef2b4c] {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: grid;\n\trow-gap: 0.25em;\n}\na[data-v-1fef2b4c],\nbutton[data-v-1fef2b4c] {\n\tcolor: #0202ea;\n\tfont-weight: 500;\n\ttext-decoration: none;\n}\n.provider-strengths__strength-item[data-v-1fef2b4c] {\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\t-moz-column-gap: 0.5em;\n\tcolumn-gap: 0.5em;\n\tline-height: 1.25;\n}\n@media (min-width: 75rem) {\n.section-container--docs-near-me .section-container__view-all-link[data-v-1fef2b4c] {\n\t\tmargin-top: 0;\n}\n}\n@media (min-width: 75rem) {\n.section-container--docs-near-me .section-container__provider-card-deck[data-v-1fef2b4c] {\n\t\tgrid-column: 2;\n\t\tgrid-row: 1 / span 2;\n}\n}\n.section-container--docs-near-me .section-container__view-all-link[data-v-1fef2b4c] {\n\tmargin-top: 1rem;\n}\n.section-container__view-all-link[data-v-1fef2b4c] {\n\tposition: relative;\n}\n.provider-card__view-profile-btn[data-v-1fef2b4c] {\n\tgrid-column: 1 / span 2;\n}\n.view-profile-btn[data-v-1fef2b4c] {\n\twidth: 100%;\n}\n.button[data-v-1fef2b4c] {\n\tdisplay: inline-block;\n\tborder-radius: 4rem;\n\tpadding: 0.45rem 1.25rem 0.65rem;\n\tcolor: #fff;\n\tfont-size: 0.875rem;\n\tfont-weight: 700;\n\tline-height: 1.25;\n\ttransition: box-shadow 0.25s, background-color 0.25s;\n\ttext-align: center;\n\tvertical-align: middle;\n\tbackground: #d83d40;\n\tborder: 1px solid #d83d40;\n}\n.sr-only[data-v-1fef2b4c] {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tmargin: -1px;\n\tpadding: 0;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\tborder: 0;\n}\n", ""]);

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
                        _c("ul", { staticClass: "provider-card-deck" }, [
                          _c(
                            "li",
                            {
                              staticClass: "provider-card-deck__provider-card"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "provider-card provider-card--22RJ2",
                                  attrs: {
                                    id: "provider-card-22RJ2",
                                    "data-qa-target": "provider-card-1"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-details"
                                    },
                                    [
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-specialty bangla-font"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\tএমবিবিএস; এমপিএইচ; ইওসি (অব্স এন্ড গাইনি)\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-rating"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-rating star-rating--inline",
                                              attrs: {
                                                "data-qa-target":
                                                  "provider-rating"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "star-rating__rating-stars"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "rating-stars",
                                                      attrs: {
                                                        "data-qa-target":
                                                          "rating-stars",
                                                        viewBox: "0 0 130 24",
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__background-stars",
                                                        attrs: {
                                                          fill:
                                                            "url(#svg-star-bg)",
                                                          width: "100%",
                                                          height: "100%"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__rating-stars",
                                                        attrs: {
                                                          "data-qa-target":
                                                            "rating-stars--5-stars",
                                                          fill:
                                                            "url(#svg-star-overlay)",
                                                          width: "99%",
                                                          height: "100%"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [
                                                  _vm._v(
                                                    "Rated 5 out of 5 stars"
                                                  )
                                                ]
                                              ),
                                              _vm._m(2)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _vm._m(5)
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "provider-card-deck__provider-card"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "provider-card provider-card--3BXNV",
                                  attrs: {
                                    id: "provider-card-3BXNV",
                                    "data-qa-target": "provider-card-2"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-details"
                                    },
                                    [
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-specialty"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\tFamily Medicine\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-rating"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-rating star-rating--inline",
                                              attrs: {
                                                "data-qa-target":
                                                  "provider-rating"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "star-rating__rating-stars"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "rating-stars",
                                                      attrs: {
                                                        "data-qa-target":
                                                          "rating-stars",
                                                        viewBox: "0 0 130 24",
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__background-stars",
                                                        attrs: {
                                                          fill:
                                                            "url(#svg-star-bg)",
                                                          width: "100%",
                                                          height: "100%"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__rating-stars",
                                                        attrs: {
                                                          "data-qa-target":
                                                            "rating-stars--3-stars",
                                                          fill:
                                                            "url(#svg-star-overlay)",
                                                          width: "59%",
                                                          height: "100%"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [
                                                  _vm._v(
                                                    "Rated 3 out of 5 stars"
                                                  )
                                                ]
                                              ),
                                              _vm._m(7)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(8),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-strengths"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "provider-strengths",
                                          attrs: {
                                            "data-qa-target":
                                              "provider-strenghts"
                                          }
                                        },
                                        [
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--1"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon--TelehealthIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "telehealth-icon",
                                                    focusable: "false"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        fill: "currentColor"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M13.5 16h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM13.5 20h-10c-.827 0-1.5-.673-1.5-1.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H3v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M20.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M18.5 18a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tOffers Telehealth\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(9)
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "provider-card-deck__provider-card"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "provider-card provider-card--G92LC",
                                  attrs: {
                                    id: "provider-card-G92LC",
                                    "data-qa-target": "provider-card-3"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-details"
                                    },
                                    [
                                      _vm._m(10),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-specialty"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\tFamily Medicine\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-rating"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-rating star-rating--inline",
                                              attrs: {
                                                "data-qa-target":
                                                  "provider-rating"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "star-rating__rating-stars"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "rating-stars",
                                                      attrs: {
                                                        "data-qa-target":
                                                          "rating-stars",
                                                        viewBox: "0 0 130 24",
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__background-stars",
                                                        attrs: {
                                                          fill:
                                                            "url(#svg-star-bg)",
                                                          width: "100%",
                                                          height: "100%"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__rating-stars",
                                                        attrs: {
                                                          "data-qa-target":
                                                            "rating-stars--5-stars",
                                                          fill:
                                                            "url(#svg-star-overlay)",
                                                          width: "99%",
                                                          height: "100%"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [
                                                  _vm._v(
                                                    "Rated 5 out of 5 stars"
                                                  )
                                                ]
                                              ),
                                              _vm._m(11)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-strengths"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "provider-strengths",
                                          attrs: {
                                            "data-qa-target":
                                              "provider-strenghts"
                                          }
                                        },
                                        [
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--1"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon--TelehealthIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "telehealth-icon",
                                                    focusable: "false"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        fill: "currentColor"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M13.5 16h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM13.5 20h-10c-.827 0-1.5-.673-1.5-1.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H3v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M20.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M18.5 18a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tOffers Telehealth\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--2"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon--CalendarIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "calendar-icon",
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
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M8.5 11.5h1m2 0h1m2 0h1m2 0h1m-1 2h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m0-14v3m11-3v3"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M3 8.5h18.5"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        attrs: {
                                                          height: "15",
                                                          width: "19",
                                                          rx: "1",
                                                          x: "2.5",
                                                          y: "5.5"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tEasy scheduling\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--3"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon strength-item__icon--HeartIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "heart-icon",
                                                    focusable: "false"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      fill: "currentColor",
                                                      d:
                                                        "M11.9 20h-.2a34 34 0 0 1-4.3-3.2 16.7 16.7 0 0 1-3-3.5C3.4 11.8 3 10.3 3 9c0-.9.2-1.7.7-2.4A5 5 0 0 1 7.9 4c.5 0 1 0 1.4.3a5.3 5.3 0 0 1 2.6 2c.3-.6.7-1 1.2-1.3A4.9 4.9 0 0 1 16 4c.9 0 1.7.2 2.4.7a5 5 0 0 1 2.5 4.2c0 1.5-.5 3-1.4 4.4-.8 1.2-1.7 2.4-3 3.5a25.8 25.8 0 0 1-4.2 3.1l-.3.1zm-4-15.1c-.7 0-1.4.2-2 .5a4 4 0 0 0-2 3.5c0 1.3.4 2.7 1.3 4.1.7 1 1.6 2.1 2.8 3.2a24.8 24.8 0 0 0 3.9 3 22.3 22.3 0 0 0 6.7-6.2 7.7 7.7 0 0 0 1.3-4 4 4 0 0 0-2-3.6c-.6-.3-1.3-.5-2-.5-.5 0-1 .1-1.6.4-.4.2-.9.5-1.2 1-.4.3-.6.7-.8 1.1l-.1.3h-.6l-.2-.3c-.1-.4-.3-.8-.7-1.2l-1.3-1L8 5z"
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tEmploys friendly staff\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(13)
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "section-container__view-all-link" }, [
                  _c(
                    "a",
                    {
                      staticClass: "view-all-link view-all-link--docs-near-me",
                      attrs: {
                        id: "docs-near-me-view-all-link",
                        "data-qa-target": "docs-near-me-view-all-link",
                        href:
                          "/usearch?what=family%20medicine&pageNum=1&sort.provider=bestmatch",
                        target: "_self"
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
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _vm._m(14),
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
    return _c("h3", { staticClass: "provider-details__provider-name-link" }, [
      _c(
        "a",
        {
          staticClass: "provider-name-link bangla-font",
          attrs: { href: "/physician/dr-arkady-sheinin-22rj2", target: "_self" }
        },
        [_vm._v("ডাঃ শফিকুর রহমান পাটওয়ারী")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "star-rating__reviews" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v(", with")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-img" }, [
      _c("img", {
        staticClass:
          "\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-img\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_root-2YrD_\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_lg-1OYOU\n\t\t\t\t\t\t\t\t\t\t\t",
        attrs: {
          alt: "Dr. Sheinin",
          itemprop: "image",
          src:
            "//photos.healthgrades.com/img/silhouettes/silhouette-male_w90h120_v1.jpg",
          gender: "M"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-strengths" }, [
      _c(
        "ul",
        {
          staticClass: "provider-strengths",
          attrs: { "data-qa-target": "provider-strenghts" }
        },
        [
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--1" }
            },
            [
              _vm._v(
                "\n\t\t\t\t\t\t\t\t\t\t\t\tমেডিসিন , বাতজর ও হৃদরোগ বিশেষজ্ঞ\n\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--2" }
            },
            [
              _vm._v(
                "\n\t\t\t\t\t\t\t\t\t\t\t\tসিসিডি (বারডেম)\n\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--3" }
            },
            [
              _vm._v(
                "\n\t\t\t\t\t\t\t\t\t\t\t\tএক্স কনসালটেন্ট(উখিয়া হেল্থ কমপ্লেক্স, কক্সবাজার)\n\t\t\t\t\t\t\t\t\t\t\t\tআজিমপুর মেটারনিটি হাসপাতাল\n\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--3" }
            },
            [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tঢাকা\n\t\t\t\t\t\t\t\t\t\t\t")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__view-profile-btn" }, [
      _c(
        "a",
        {
          staticClass: "view-profile-btn button bangla-font",
          attrs: { href: "/physician/dr-arkady-sheinin-22rj2", target: "_self" }
        },
        [
          _vm._v("বিস্তারিত দেখুন"),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tof Dr. Sheinin")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "provider-details__provider-name-link" }, [
      _c(
        "a",
        {
          staticClass: "provider-name-link",
          attrs: { href: "/physician/dr-olga-tseyko-3bxnv", target: "_self" }
        },
        [_vm._v("Dr. Olga Tseyko, MD")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "star-rating__reviews" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v(", with")]),
      _vm._v(" 9 ratings")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-img" }, [
      _c("img", {
        staticClass:
          "\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-img\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_root-2YrD_\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_lg-1OYOU\n\t\t\t\t\t\t\t\t\t\t\t",
        attrs: {
          alt: "Dr. Tseyko",
          itemprop: "image",
          src:
            "//photos.healthgrades.com/img/silhouettes/silhouette-female_w90h120_v1.jpg",
          gender: "F"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__view-profile-btn" }, [
      _c(
        "a",
        {
          staticClass: "view-profile-btn button",
          attrs: { href: "/physician/dr-olga-tseyko-3bxnv", target: "_self" }
        },
        [
          _vm._v("View Profile"),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tof Dr. Tseyko")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "provider-details__provider-name-link" }, [
      _c(
        "a",
        {
          staticClass: "provider-name-link",
          attrs: { href: "/physician/dr-devon-white-g92lc", target: "_self" }
        },
        [_vm._v("Dr. Devon White, DO")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "star-rating__reviews" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v(", with")]),
      _vm._v(" 5 ratings")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-img" }, [
      _c("img", {
        staticClass:
          "\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-img\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_root-2YrD_\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_lg-1OYOU\n\t\t\t\t\t\t\t\t\t\t\t",
        attrs: {
          alt: "Dr. White",
          itemprop: "image",
          src:
            "//photos.healthgrades.com/img/silhouettes/silhouette-female_w90h120_v1.jpg",
          gender: "F"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__view-profile-btn" }, [
      _c(
        "a",
        {
          staticClass: "view-profile-btn button",
          attrs: { href: "/physician/dr-devon-white-g92lc", target: "_self" }
        },
        [
          _vm._v("View Profile"),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tof Dr. White")
          ])
        ]
      )
    ])
  },
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
                        _c("ul", { staticClass: "provider-card-deck" }, [
                          _c(
                            "li",
                            {
                              staticClass: "provider-card-deck__provider-card"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "provider-card provider-card--22RJ2",
                                  attrs: {
                                    id: "provider-card-22RJ2",
                                    "data-qa-target": "provider-card-1"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-details"
                                    },
                                    [
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-specialty bangla-font"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\tএমবিবিএস; এমপিএইচ; ইওসি (অব্স এন্ড গাইনি)\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-rating"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-rating star-rating--inline",
                                              attrs: {
                                                "data-qa-target":
                                                  "provider-rating"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "star-rating__rating-stars"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "rating-stars",
                                                      attrs: {
                                                        "data-qa-target":
                                                          "rating-stars",
                                                        viewBox: "0 0 130 24",
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__background-stars",
                                                        attrs: {
                                                          fill:
                                                            "url(#svg-star-bg)",
                                                          width: "100%",
                                                          height: "100%"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__rating-stars",
                                                        attrs: {
                                                          "data-qa-target":
                                                            "rating-stars--5-stars",
                                                          fill:
                                                            "url(#svg-star-overlay)",
                                                          width: "99%",
                                                          height: "100%"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [
                                                  _vm._v(
                                                    "Rated 5 out of 5 stars"
                                                  )
                                                ]
                                              ),
                                              _vm._m(2)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _vm._m(5)
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "provider-card-deck__provider-card"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "provider-card provider-card--3BXNV",
                                  attrs: {
                                    id: "provider-card-3BXNV",
                                    "data-qa-target": "provider-card-2"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-details"
                                    },
                                    [
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-specialty"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\tFamily Medicine\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-rating"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-rating star-rating--inline",
                                              attrs: {
                                                "data-qa-target":
                                                  "provider-rating"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "star-rating__rating-stars"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "rating-stars",
                                                      attrs: {
                                                        "data-qa-target":
                                                          "rating-stars",
                                                        viewBox: "0 0 130 24",
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__background-stars",
                                                        attrs: {
                                                          fill:
                                                            "url(#svg-star-bg)",
                                                          width: "100%",
                                                          height: "100%"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__rating-stars",
                                                        attrs: {
                                                          "data-qa-target":
                                                            "rating-stars--3-stars",
                                                          fill:
                                                            "url(#svg-star-overlay)",
                                                          width: "59%",
                                                          height: "100%"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [
                                                  _vm._v(
                                                    "Rated 3 out of 5 stars"
                                                  )
                                                ]
                                              ),
                                              _vm._m(7)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(8),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-strengths"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "provider-strengths",
                                          attrs: {
                                            "data-qa-target":
                                              "provider-strenghts"
                                          }
                                        },
                                        [
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--1"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon--TelehealthIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "telehealth-icon",
                                                    focusable: "false"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        fill: "currentColor"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M13.5 16h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM13.5 20h-10c-.827 0-1.5-.673-1.5-1.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H3v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M20.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M18.5 18a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tOffers Telehealth\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(9)
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "provider-card-deck__provider-card"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "provider-card provider-card--G92LC",
                                  attrs: {
                                    id: "provider-card-G92LC",
                                    "data-qa-target": "provider-card-3"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-details"
                                    },
                                    [
                                      _vm._m(10),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-specialty"
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\tFamily Medicine\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "provider-details__provider-rating"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "star-rating star-rating--inline",
                                              attrs: {
                                                "data-qa-target":
                                                  "provider-rating"
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "star-rating__rating-stars"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "rating-stars",
                                                      attrs: {
                                                        "data-qa-target":
                                                          "rating-stars",
                                                        viewBox: "0 0 130 24",
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__background-stars",
                                                        attrs: {
                                                          fill:
                                                            "url(#svg-star-bg)",
                                                          width: "100%",
                                                          height: "100%"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        staticClass:
                                                          "rating-stars__rating-stars",
                                                        attrs: {
                                                          "data-qa-target":
                                                            "rating-stars--5-stars",
                                                          fill:
                                                            "url(#svg-star-overlay)",
                                                          width: "99%",
                                                          height: "100%"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [
                                                  _vm._v(
                                                    "Rated 5 out of 5 stars"
                                                  )
                                                ]
                                              ),
                                              _vm._m(11)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "provider-card__provider-strengths"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        {
                                          staticClass: "provider-strengths",
                                          attrs: {
                                            "data-qa-target":
                                              "provider-strenghts"
                                          }
                                        },
                                        [
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--1"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon--TelehealthIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "telehealth-icon",
                                                    focusable: "false"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        fill: "currentColor"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M13.5 16h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 010 1zM13.5 20h-10c-.827 0-1.5-.673-1.5-1.5v-1a.5.5 0 01.5-.5h11a.5.5 0 010 1H3v.5a.5.5 0 00.5.5h10a.5.5 0 010 1z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M20.5 20h-4c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h4c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-4-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M18.5 18a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5z"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tOffers Telehealth\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--2"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon--CalendarIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "calendar-icon",
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
                                                        "stroke-linecap":
                                                          "round"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M8.5 11.5h1m2 0h1m2 0h1m2 0h1m-1 2h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m-4-4h1m-1 2h1m-1 2h1m0-14v3m11-3v3"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M3 8.5h18.5"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("rect", {
                                                        attrs: {
                                                          height: "15",
                                                          width: "19",
                                                          rx: "1",
                                                          x: "2.5",
                                                          y: "5.5"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tEasy scheduling\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "provider-strengths__strength-item",
                                              attrs: {
                                                "data-qa-target":
                                                  "strength-item--3"
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstrength-item__icon strength-item__icon--HeartIcon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ticon-mo_icon-2DQ-j icon-mo_inheritSize-2lfPj\n\t\t\t\t\t\t\t\t\t\t\t\t\t",
                                                  attrs: {
                                                    viewBox: "0 0 24 24",
                                                    width: "1em",
                                                    height: "1em",
                                                    "aria-hidden": "true",
                                                    "data-qa-target":
                                                      "heart-icon",
                                                    focusable: "false"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      fill: "currentColor",
                                                      d:
                                                        "M11.9 20h-.2a34 34 0 0 1-4.3-3.2 16.7 16.7 0 0 1-3-3.5C3.4 11.8 3 10.3 3 9c0-.9.2-1.7.7-2.4A5 5 0 0 1 7.9 4c.5 0 1 0 1.4.3a5.3 5.3 0 0 1 2.6 2c.3-.6.7-1 1.2-1.3A4.9 4.9 0 0 1 16 4c.9 0 1.7.2 2.4.7a5 5 0 0 1 2.5 4.2c0 1.5-.5 3-1.4 4.4-.8 1.2-1.7 2.4-3 3.5a25.8 25.8 0 0 1-4.2 3.1l-.3.1zm-4-15.1c-.7 0-1.4.2-2 .5a4 4 0 0 0-2 3.5c0 1.3.4 2.7 1.3 4.1.7 1 1.6 2.1 2.8 3.2a24.8 24.8 0 0 0 3.9 3 22.3 22.3 0 0 0 6.7-6.2 7.7 7.7 0 0 0 1.3-4 4 4 0 0 0-2-3.6c-.6-.3-1.3-.5-2-.5-.5 0-1 .1-1.6.4-.4.2-.9.5-1.2 1-.4.3-.6.7-.8 1.1l-.1.3h-.6l-.2-.3c-.1-.4-.3-.8-.7-1.2l-1.3-1L8 5z"
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tEmploys friendly staff\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(13)
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "section-container__view-all-link" }, [
                  _c(
                    "a",
                    {
                      staticClass: "view-all-link view-all-link--docs-near-me",
                      attrs: {
                        id: "docs-near-me-view-all-link",
                        "data-qa-target": "docs-near-me-view-all-link",
                        href:
                          "/usearch?what=family%20medicine&pageNum=1&sort.provider=bestmatch",
                        target: "_self"
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
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _vm._m(14),
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
    return _c("h3", { staticClass: "provider-details__provider-name-link" }, [
      _c(
        "a",
        {
          staticClass: "provider-name-link bangla-font",
          attrs: { href: "/physician/dr-arkady-sheinin-22rj2", target: "_self" }
        },
        [_vm._v("ডাঃ শফিকুর রহমান পাটওয়ারী")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "star-rating__reviews" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v(", with")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-img" }, [
      _c("img", {
        staticClass:
          "\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-img\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_root-2YrD_\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_lg-1OYOU\n\t\t\t\t\t\t\t\t\t\t\t",
        attrs: {
          alt: "Dr. Sheinin",
          itemprop: "image",
          src:
            "//photos.healthgrades.com/img/silhouettes/silhouette-male_w90h120_v1.jpg",
          gender: "M"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-strengths" }, [
      _c(
        "ul",
        {
          staticClass: "provider-strengths",
          attrs: { "data-qa-target": "provider-strenghts" }
        },
        [
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--1" }
            },
            [
              _vm._v(
                "\n\t\t\t\t\t\t\t\t\t\t\t\tমেডিসিন , বাতজর ও হৃদরোগ বিশেষজ্ঞ\n\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--2" }
            },
            [
              _vm._v(
                "\n\t\t\t\t\t\t\t\t\t\t\t\tসিসিডি (বারডেম)\n\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--3" }
            },
            [
              _vm._v(
                "\n\t\t\t\t\t\t\t\t\t\t\t\tএক্স কনসালটেন্ট(উখিয়া হেল্থ কমপ্লেক্স, কক্সবাজার)\n\t\t\t\t\t\t\t\t\t\t\t\tআজিমপুর মেটারনিটি হাসপাতাল\n\t\t\t\t\t\t\t\t\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "provider-strengths__strength-item bangla-font",
              attrs: { "data-qa-target": "strength-item--3" }
            },
            [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tঢাকা\n\t\t\t\t\t\t\t\t\t\t\t")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__view-profile-btn" }, [
      _c(
        "a",
        {
          staticClass: "view-profile-btn button bangla-font",
          attrs: { href: "/physician/dr-arkady-sheinin-22rj2", target: "_self" }
        },
        [
          _vm._v("বিস্তারিত দেখুন"),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tof Dr. Sheinin")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "provider-details__provider-name-link" }, [
      _c(
        "a",
        {
          staticClass: "provider-name-link",
          attrs: { href: "/physician/dr-olga-tseyko-3bxnv", target: "_self" }
        },
        [_vm._v("Dr. Olga Tseyko, MD")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "star-rating__reviews" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v(", with")]),
      _vm._v(" 9 ratings")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-img" }, [
      _c("img", {
        staticClass:
          "\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-img\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_root-2YrD_\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_lg-1OYOU\n\t\t\t\t\t\t\t\t\t\t\t",
        attrs: {
          alt: "Dr. Tseyko",
          itemprop: "image",
          src:
            "//photos.healthgrades.com/img/silhouettes/silhouette-female_w90h120_v1.jpg",
          gender: "F"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__view-profile-btn" }, [
      _c(
        "a",
        {
          staticClass: "view-profile-btn button",
          attrs: { href: "/physician/dr-olga-tseyko-3bxnv", target: "_self" }
        },
        [
          _vm._v("View Profile"),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tof Dr. Tseyko")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "provider-details__provider-name-link" }, [
      _c(
        "a",
        {
          staticClass: "provider-name-link",
          attrs: { href: "/physician/dr-devon-white-g92lc", target: "_self" }
        },
        [_vm._v("Dr. Devon White, DO")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "star-rating__reviews" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v(", with")]),
      _vm._v(" 5 ratings")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__provider-img" }, [
      _c("img", {
        staticClass:
          "\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-img\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_root-2YrD_\n\t\t\t\t\t\t\t\t\t\t\t\tprovider-image-mo_lg-1OYOU\n\t\t\t\t\t\t\t\t\t\t\t",
        attrs: {
          alt: "Dr. White",
          itemprop: "image",
          src:
            "//photos.healthgrades.com/img/silhouettes/silhouette-female_w90h120_v1.jpg",
          gender: "F"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "provider-card__view-profile-btn" }, [
      _c(
        "a",
        {
          staticClass: "view-profile-btn button",
          attrs: { href: "/physician/dr-devon-white-g92lc", target: "_self" }
        },
        [
          _vm._v("View Profile"),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tof Dr. White")
          ])
        ]
      )
    ])
  },
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