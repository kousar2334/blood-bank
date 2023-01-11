(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AppFooter"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app-footer",
  data: function data() {
    return {
      year: new Date().getFullYear(),
      social_accounts: "",
      info: ""
    };
  },
  mounted: function mounted() {
    this.getFooterContent();
  },
  methods: {
    /**
     *Get footer contnet
     */
    getFooterContent: function getFooterContent() {
      var _this = this;

      console.log("footer content");
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/get-footer-content").then(function (response) {
        if (response.data.success) {
          _this.social_accounts = response.data.social_accounts;
          _this.info = response.data.info;
        }
      }).catch(function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("footer", [_c("div", {
    staticClass: "footer-wrapper section-bg2",
    attrs: {
      "data-background": "http://blood-bank.local/uploads/profile_image/doctor/09302022174935d.png"
    }
  }, [_c("div", {
    staticClass: "footer-area footer-padding"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "col-xl-3 col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "single-footer-caption mb-50"
  }, [_c("div", {
    staticClass: "single-footer-caption mb-30"
  }, [_c("div", {
    staticClass: "footer-tittle"
  }, [_c("div", {
    staticClass: "footer-logo mb-20"
  }, [_c("a", {
    attrs: {
      href: "index.html"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/img/logo/logo2_footer.png",
      alt: ""
    }
  }), _vm._v("DDDDD")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-3 col-md-4 col-sm-5"
  }, [_c("div", {
    staticClass: "single-footer-caption mb-50"
  }, [_c("div", {
    staticClass: "footer-tittle"
  }, [_c("h4", [_vm._v("Contact Info")]), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("p", [_vm._v("Address :Your address goes here, your demo address.")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Phone : +8880 44338899")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Email : info@colorlib.com")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-3 col-md-4 col-sm-5"
  }, [_c("div", {
    staticClass: "single-footer-caption mb-50"
  }, [_c("div", {
    staticClass: "footer-tittle"
  }, [_c("h4", [_vm._v("Important Link")]), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v(" View Project")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Contact Us")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Testimonial")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Proparties")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Support")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-3 col-md-4 col-sm-5"
  }, [_c("div", {
    staticClass: "single-footer-caption mb-50"
  }, [_c("div", {
    staticClass: "footer-tittle"
  }, [_c("h4", [_vm._v("Newsletter")]), _vm._v(" "), _c("div", {
    staticClass: "footer-pera footer-pera2"
  }, [_c("p", [_vm._v("Heaven fruitful doesn't over lesser in days. Appear creeping.")])]), _vm._v(" "), _c("div", {
    staticClass: "footer-form"
  }, [_c("div", {
    attrs: {
      id: "mc_embed_signup"
    }
  }, [_c("form", {
    staticClass: "subscribe_form relative mail_part",
    attrs: {
      target: "_blank",
      action: "https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01",
      method: "get"
    }
  }, [_c("input", {
    staticClass: "placeholder hide-on-focus",
    attrs: {
      type: "email",
      name: "email",
      id: "newsletter-form-email",
      placeholder: "Email Address",
      onfocus: "this.placeholder = ''",
      onblur: "this.placeholder = ' Email Address '"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-icon"
  }, [_c("button", {
    staticClass: "email_icon newsletter-submit button-contactForm",
    attrs: {
      type: "submit",
      name: "submit",
      id: "newsletter-submit"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/img/gallery/form.png",
      alt: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-10 info"
  })])])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "footer-bottom-area"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "footer-border"
  }, [_c("div", {
    staticClass: "row d-flex justify-content-between align-items-center"
  }, [_c("div", {
    staticClass: "col-xl-10 col-lg-9"
  }, [_c("div", {
    staticClass: "footer-copy-right"
  }, [_c("p", [_vm._v("\n\t\t\t\t\t\t\t\t\tCopyright © All rights reserved | This template is made with "), _c("i", {
    staticClass: "fa fa-heart",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" by "), _c("a", {
    attrs: {
      href: "https://colorlib.com",
      target: "_blank"
    }
  }, [_vm._v("Colorlib")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2 col-lg-3"
  }, [_c("div", {
    staticClass: "footer-social f-right"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "fab fa-twitter"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "https://www.facebook.com/sai4ull"
    }
  }, [_c("i", {
    staticClass: "fab fa-facebook-f"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "fas fa-globe"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "fab fa-behance"
  })])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.footer-area .footer-tittle h4[data-v-0d368d40] {\n\tcolor: #ffffff;\n\tfont-size: 20px;\n\tmargin-bottom: 29px;\n\tfont-weight: 400;\n\ttext-transform: capitalize;\n}\n.footer-area .footer-tittle ul li p[data-v-0d368d40] {\n\tcolor: #868c98;\n\tfont-weight: 300;\n}\np[data-v-0d368d40] {\n\tfont-family: \"Muli\", sans-serif;\n\tcolor: #10285d;\n\tfont-size: 16px;\n\tline-height: 30px;\n\tmargin-bottom: 15px;\n\tfont-weight: normal;\n}\n\n/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */\n.footer-padding[data-v-0d368d40] {\n\tpadding-top: 160px;\n\tpadding-bottom: 120px;\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\n\t/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */\n.footer-padding[data-v-0d368d40] {\n\t\tpadding-top: 100px;\n\t\tpadding-bottom: 70px;\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n\n\t/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */\n.footer-padding[data-v-0d368d40] {\n\t\tpadding-top: 80px;\n\t\tpadding-bottom: 70px;\n}\n}\n@media (max-width: 575px) {\n\n\t/* line 893, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */\n.footer-padding[data-v-0d368d40] {\n\t\tpadding-top: 80px;\n\t\tpadding-bottom: 0px;\n}\n}\n\n/* line 963, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_common.scss */\n.section-bg2[data-v-0d368d40] {\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n}\n\n/* line 11, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle ul li[data-v-0d368d40] {\n\tcolor: #868c98;\n\tmargin-bottom: 16px;\n}\n\n/* line 14, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle ul li a[data-v-0d368d40] {\n\tcolor: #868c98;\n\tfont-weight: 300;\n}\n\n/* line 17, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle ul li a[data-v-0d368d40]:hover {\n\tcolor: #09cc7f;\n\tpadding-left: 5px;\n}\n\n/* line 23, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle ul li p[data-v-0d368d40] {\n\tcolor: #868c98;\n\tfont-weight: 300;\n}\n\n/* line 32, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-pera p[data-v-0d368d40] {\n\tcolor: #868c98;\n\tpadding-right: 52px;\n\tfont-size: 16px;\n\tmargin-bottom: 50px;\n\tline-height: 1.8;\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\n\t/* line 32, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-pera p[data-v-0d368d40] {\n\t\tpadding-right: 0px;\n}\n}\n\n/* line 45, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-pera.footer-pera2 p[data-v-0d368d40] {\n\tpadding: 0;\n}\n\n/* line 51, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle-bottom span[data-v-0d368d40] {\n\tdisplay: inline-block;\n\tcolor: #fff;\n\tfont-weight: 600;\n\tfont-size: 24px;\n\tmargin-right: 11px;\n}\n@media (max-width: 575px) {\n\n\t/* line 51, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle-bottom span[data-v-0d368d40] {\n\t\tfont-size: 20px;\n}\n}\n\n/* line 62, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-tittle-bottom p[data-v-0d368d40] {\n\tdisplay: inline-block;\n\tcolor: #fff;\n}\n\n/* line 67, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-form[data-v-0d368d40] {\n\tmargin-top: 40px;\n}\n\n/* line 69, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-form form[data-v-0d368d40] {\n\tposition: relative;\n}\n\n/* line 71, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-form form input[data-v-0d368d40] {\n\twidth: 100%;\n\theight: 43px;\n\tpadding: 10px 20px;\n\tborder: 1px solid #fff;\n\tborder-radius: 5px;\n}\n\n/* line 79, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .footer-form form .form-icon button[data-v-0d368d40] {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbackground: none;\n\tborder: 0;\n\tcursor: pointer;\n\tpadding: 13px 22px;\n\tbackground: #09cc7f;\n\tline-height: 1;\n\tborder-radius: 0 3px 3px 0;\n}\n\n/* line 94, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-area .info.error[data-v-0d368d40] {\n\tcolor: #09cc7f;\n}\n\n/* line 102, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-border[data-v-0d368d40] {\n\tborder-top: 1px solid #2d3544;\n\tpadding: 33px 0px 20px;\n}\n\n/* line 107, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-copy-right p[data-v-0d368d40] {\n\tcolor: #888888;\n\tfont-weight: 300;\n\tfont-size: 16px;\n\tline-height: 2;\n\tmargin-bottom: 12px;\n}\n@media (max-width: 575px) {\n\n\t/* line 107, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-copy-right p[data-v-0d368d40] {\n\t\tmargin-bottom: 20px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\n\t/* line 107, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-copy-right p[data-v-0d368d40] {\n\t\tmargin-bottom: 20px;\n}\n}\n\n/* line 119, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-copy-right p i[data-v-0d368d40] {\n\tcolor: #09cc7f;\n}\n\n/* line 122, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-copy-right p a[data-v-0d368d40] {\n\tcolor: #09cc7f;\n}\n\n/* line 125, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-copy-right p a[data-v-0d368d40]:hover {\n\tcolor: #fff;\n}\n@media (max-width: 575px) {\n\n\t/* line 132, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-social[data-v-0d368d40] {\n\t\tfloat: left;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\n\t/* line 132, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-social[data-v-0d368d40] {\n\t\tfloat: left;\n}\n}\n\n/* line 140, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-social>a[data-v-0d368d40] {\n\tcolor: #7b8693;\n\tfont-size: 14px;\n\tpadding-left: 25px;\n}\n\n/* line 144, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-social>a>i[data-v-0d368d40] {\n\ttransition: 0.4s;\n\ttransform: rotateY(0deg);\n\t-webkit-transform: rotateY(0deg);\n\t-moz-transform: rotateY(0deg);\n\t-ms-transform: rotateY(0deg);\n\t-o-transform: rotateY(0deg);\n}\n\n/* line 153, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-social>a:hover i[data-v-0d368d40] {\n\ttransform: rotateY(180deg);\n\t-webkit-transform: rotateY(180deg);\n\t-moz-transform: rotateY(180deg);\n\t-ms-transform: rotateY(180deg);\n\t-o-transform: rotateY(180deg);\n}\n\n/* line 160, C:/Users/HP/Desktop/jun-2020/277.Charity _Non-profit/assets/scss/_footer.scss */\n.footer-bottom-area .footer-social>a[data-v-0d368d40]:hover {\n\tcolor: #09cc7f;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css&");

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

/***/ "./themes/human/layout/AppFooter.vue":
/*!*******************************************!*\
  !*** ./themes/human/layout/AppFooter.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_0d368d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=0d368d40&scoped=true& */ "./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&scoped=true&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./themes/human/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppFooter_vue_vue_type_style_index_0_id_0d368d40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css& */ "./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_0d368d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_0d368d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d368d40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/layout/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./themes/human/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_0d368d40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=style&index=0&id=0d368d40&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_0d368d40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_0d368d40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_0d368d40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_0d368d40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_0d368d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=0d368d40&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_0d368d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_0d368d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);