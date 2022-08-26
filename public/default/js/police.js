(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["police"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/components/Hero.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/components/Hero.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        fade: true
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/Police.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero.vue */ "./themes/default/components/Hero.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Police",
  components: {
    Hero: _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: "পুলিশ স্টেশন ",
      emptyMessage: "দুঃখিত !... কোন পুলিশ স্টেশন খুঁজে পাওয়া যায় নি ।",
      fields: [{
        key: "name",
        label: "অফিস / পুলিশ স্টেশনের নাম "
      }, {
        key: "mobile",
        label: "যোগাযোগের নাম্বার"
      }],
      police_stations: [],
      items: [{
        no: "০১",
        name: "পুলিশ সুপারের কার্যালয়, বগুড়া",
        mobiles: "০১৭১৩-৩৭৪০৫৮"
      }, {
        no: "০২ ",
        name: "শান্তাহার রেলওয়ে পুলিশ স্টেশন",
        mobiles: "নাই"
      }, {
        no: "০৩",
        name: "সদর থানা , বগুড়া",
        mobiles: "০৫১-৭৮২৬৬"
      }, {
        no: "০৪",
        name: "নারুলী পুলিশ ফাঁড়ি",
        mobiles: "নাই"
      }, {
        no: "০৫",
        name: "রেলওয়ে পুলিশ ফাঁড়ী, বগুড়া",
        mobiles: "০১৭৩৩-৩৯০২০৫"
      }, {
        no: "০৬",
        name: "ধুনট পুলিশ স্টেশন",
        mobiles: "নাই"
      }, {
        no: "০৭",
        name: "সারিয়াকান্দি পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৬৫"
      }, {
        no: "০৮",
        name: "কাহালু পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৬৮"
      }, {
        no: "০৯",
        name: "নন্দীগ্রাম ফায়ার স্টেশন",
        mobiles: "০১৩০৪-১৭১৭৩৬"
      }, {
        no: "১০",
        name: "শিবগঞ্জ ফায়ার স্টেশন",
        mobiles: "০১৭৪৭-৪১৫৮৭২"
      }, {
        no: "১১",
        name: "দুপচাঁচিয়া পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৬৭"
      }, {
        no: "১২",
        name: "শাহজানপুর পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৭২"
      }, {
        no: "১৩",
        name: "আদমদিঘী পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৬৬"
      }, {
        no: "১৪",
        name: "গাবতলি মডেল পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৬৪"
      }, {
        no: "১৫",
        name: "সোনাতলা পুলিশ স্টেশন",
        mobiles: "নাই"
      }, {
        no: "১৬",
        name: "শেরপুর  পুলিশ স্টেশন",
        mobiles: "নাই"
      }, {
        no: "১৭",
        name: "শিবগঞ্জ পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৬২"
      }, {
        no: "১৮",
        name: "নন্দিগ্রাম পুলিশ স্টেশন",
        mobiles: "০১৭১৩-৩৭৪০৭১"
      }, {
        no: "১৯",
        name: "ফুলবাড়ী পুলিশ ফাঁড়ী",
        mobiles: "০১৩২০-১২৬৬০৮"
      }, {
        no: "২০",
        name: "সাত মাথা ট্রাফিক পুলিশ বক্স",
        mobiles: "নাই"
      }]
    };
  },
  mounted: function mounted() {
    this.getPoliceStations();
  },
  methods: {
    /**
     * Get police stations
     */
    getPoliceStations: function getPoliceStations() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/get-police-station-list").then(function (response) {
        console.log(response.data);

        if (response.data.success) {
          _this.police_stations = response.data.police_stations;
        }
      })["catch"](function (error) {});
    },
    bangla_number: function bangla_number(input) {
      return input;
    }
  },
  metaInfo: {
    title: "পুলিশ স্টেশন"
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/components/Hero.vue?vue&type=template&id=034d516e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/components/Hero.vue?vue&type=template&id=034d516e& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section-hero section-shaped my-0" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container shape-container d-flex" }, [
      _c("div", { staticClass: "col px-0 mt-lg-5" }, [
        _c(
          "div",
          {
            staticClass:
              "\n\t\t\t\t\trow\n\t\t\t\t\tjustify-content-center\n\t\t\t\t\talign-items-center\n\t\t\t\t\tmb-4 mb-md-0 mb-lg-0\n\t\t\t\t\tmt-0 mt-lg-5 mt-md-5\n\t\t\t\t"
          },
          [
            _c(
              "div",
              {
                staticClass: "col-lg-12 text-center pt-0 pt-lg-5 pt-md-5 pb-5"
              },
              [
                _c(
                  "VueSlickCarousel",
                  _vm._b(
                    { attrs: { arrows: false, dots: false } },
                    "VueSlickCarousel",
                    _vm.settings,
                    false
                  ),
                  [
                    _c("div", [
                      _c("h1", { staticClass: "bangla-font text-white" }, [
                        _vm._v("দুটি সন্তানের বেশী নয়")
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "bangla-font text-white" }, [
                        _vm._v("একটি হলে ভাল হয়")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h1", { staticClass: "bangla-font text-white" }, [
                        _vm._v("ঘুষ দান ও গ্রহণ")
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "bangla-font text-white" }, [
                        _vm._v("দুই টাই সমান অপরাধ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h1", { staticClass: "bangla-font text-white" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tএখানে আপনার ডাক্তার খুঁজুন\n\t\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "bangla-font text-white btn btn-success"
                        },
                        [_vm._v("খুঁজুন")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", { staticClass: "bangla-font text-white" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tরাজধানীর খিলক্ষেতে সড়ক বিভাজক টপকে মাইক্রোবাসকে ধাক্কা দেওয়া\n\t\t\t\t\t\t\t\tবাসটি চালক চালাচ্ছিলেন না। তিনি ঘুমাচ্ছিলেন। বাস ছিল তাঁর\n\t\t\t\t\t\t\t\tসহকারীর হাতে। চালকের বরাত দিয়ে ওই বাসের (এনা পরিবহন) মালিক ও\n\t\t\t\t\t\t\t\tবাংলাদেশ সড়ক পরিবহন মালিক সমিতির মহাসচিব খন্দকার এনায়েত উল্যাহ\n\t\t\t\t\t\t\t\tপ্রথম আলোকে এ কথা বলেছেন। এ ঘটনায় মঙ্গলবার সন্ধ্যার পর র‌্যাব\n\t\t\t\t\t\t\t\tমহাখালীতে গিয়ে বাসচালক মিজানুর রহমানকে ধরে নিয়ে গেছে বলেও\n\t\t\t\t\t\t\t\tখন্দকার এনায়েত উল্যাহ জানিয়েছেন।\n\t\t\t\t\t\t\t"
                        )
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "shape shape-style-1 shape-primary" }, [
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
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/Police.vue?vue&type=template&id=847a5482&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/views/pages/Police.vue?vue&type=template&id=847a5482& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "section section-lg pt-0" }, [
        _c("div", { staticClass: "container p-0" }, [
          _c("div", { staticClass: "col-12 page-header pb-2 pt-2" }, [
            _c("h2", { staticClass: "bangla-font text-center mb-2 mt-2" }, [
              _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t\t")
            ])
          ]),
          _vm._v(" "),
          _vm.police_stations.length > 0
            ? _c(
                "div",
                { staticClass: "col-lg-12 p-3" },
                [
                  _c("b-table", {
                    staticClass: "bangla-font",
                    attrs: {
                      bordered: "",
                      items: _vm.police_stations,
                      fields: _vm.fields
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "cell(no)",
                          fn: function(data) {
                            return [
                              _vm._v(
                                "\n\t\t\t\t\t\t" +
                                  _vm._s(_vm.bangla_number(data.index + 1)) +
                                  "\n\t\t\t\t\t"
                              )
                            ]
                          }
                        },
                        {
                          key: "cell(mobile)",
                          fn: function(data) {
                            return [
                              _vm._v(
                                "\n\t\t\t\t\t\t" + _vm._s(data.item.phone)
                              ),
                              data.item.mobile_1 && data.item.phone
                                ? _c("span", [_vm._v(", ")])
                                : _vm._e(),
                              _vm._v(_vm._s(data.item.mobile_1)),
                              data.item.mobile_2 && data.item.mobile_1
                                ? _c("span", [_vm._v(", ")])
                                : _vm._e(),
                              _vm._v(
                                _vm._s(data.item.mobile_2) + "\n\t\t\t\t\t"
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      488819907
                    )
                  })
                ],
                1
              )
            : _c("div", { staticClass: "col-lg-12 p-3" }, [
                _c(
                  "p",
                  { staticClass: "bangla-font text-danger text-center" },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(_vm.emptyMessage) + "\n\t\t\t\t"
                    )
                  ]
                )
              ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./themes/default/components/Hero.vue":
/*!********************************************!*\
  !*** ./themes/default/components/Hero.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero_vue_vue_type_template_id_034d516e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero.vue?vue&type=template&id=034d516e& */ "./themes/default/components/Hero.vue?vue&type=template&id=034d516e&");
/* harmony import */ var _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.vue?vue&type=script&lang=js& */ "./themes/default/components/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hero_vue_vue_type_template_id_034d516e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hero_vue_vue_type_template_id_034d516e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/default/components/Hero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/default/components/Hero.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./themes/default/components/Hero.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/components/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/default/components/Hero.vue?vue&type=template&id=034d516e&":
/*!***************************************************************************!*\
  !*** ./themes/default/components/Hero.vue?vue&type=template&id=034d516e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_034d516e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=template&id=034d516e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/components/Hero.vue?vue&type=template&id=034d516e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_034d516e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_034d516e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./themes/default/views/pages/Police.vue":
/*!***********************************************!*\
  !*** ./themes/default/views/pages/Police.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Police_vue_vue_type_template_id_847a5482___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Police.vue?vue&type=template&id=847a5482& */ "./themes/default/views/pages/Police.vue?vue&type=template&id=847a5482&");
/* harmony import */ var _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Police.vue?vue&type=script&lang=js& */ "./themes/default/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Police_vue_vue_type_template_id_847a5482___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Police_vue_vue_type_template_id_847a5482___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/default/views/pages/Police.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/default/views/pages/Police.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./themes/default/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/default/views/pages/Police.vue?vue&type=template&id=847a5482&":
/*!******************************************************************************!*\
  !*** ./themes/default/views/pages/Police.vue?vue&type=template&id=847a5482& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_847a5482___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=template&id=847a5482& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/Police.vue?vue&type=template&id=847a5482&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_847a5482___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_847a5482___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);