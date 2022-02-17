(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["police"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Police.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero.vue */ "./resources/js/default/components/Hero.vue");
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Police.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero.vue */ "./resources/js/templateOne/components/Hero.vue");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Police.vue?vue&type=template&id=5a1cd914&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/Police.vue?vue&type=template&id=5a1cd914& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Police.vue?vue&type=template&id=483622cb&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/Police.vue?vue&type=template&id=483622cb& ***!
  \**********************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/default/views/pages/Police.vue":
/*!*****************************************************!*\
  !*** ./resources/js/default/views/pages/Police.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Police_vue_vue_type_template_id_5a1cd914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Police.vue?vue&type=template&id=5a1cd914& */ "./resources/js/default/views/pages/Police.vue?vue&type=template&id=5a1cd914&");
/* harmony import */ var _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Police.vue?vue&type=script&lang=js& */ "./resources/js/default/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Police_vue_vue_type_template_id_5a1cd914___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Police_vue_vue_type_template_id_5a1cd914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/views/pages/Police.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/views/pages/Police.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/default/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/views/pages/Police.vue?vue&type=template&id=5a1cd914&":
/*!************************************************************************************!*\
  !*** ./resources/js/default/views/pages/Police.vue?vue&type=template&id=5a1cd914& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_5a1cd914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=template&id=5a1cd914& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/Police.vue?vue&type=template&id=5a1cd914&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_5a1cd914___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_5a1cd914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/views/pages/Police.vue":
/*!*********************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Police.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Police_vue_vue_type_template_id_483622cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Police.vue?vue&type=template&id=483622cb& */ "./resources/js/templateOne/views/pages/Police.vue?vue&type=template&id=483622cb&");
/* harmony import */ var _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Police.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Police_vue_vue_type_template_id_483622cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Police_vue_vue_type_template_id_483622cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/views/pages/Police.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/views/pages/Police.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/views/pages/Police.vue?vue&type=template&id=483622cb&":
/*!****************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/Police.vue?vue&type=template&id=483622cb& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_483622cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=template&id=483622cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/Police.vue?vue&type=template&id=483622cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_483622cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_483622cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);