(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["police"],{

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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Police.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero.vue */ "./themes/human/components/Hero.vue");
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
  return _c("section", { staticClass: "section-hero section-shaped my-0" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container pt-0 shape-container d-flex" }, [
      _c(
        "div",
        { staticClass: "row align-items-center justify-content-between" },
        [
          _c("div", { staticClass: "col-12 col-lg-5" }, [
            _c("div", { staticClass: "py-1" }, [
              _c(
                "h1",
                { class: "bangla-font banner-word " + _vm.$i18n.locale },
                [
                  _vm._v(
                    "\n\t\t\t\t\t\t" + _vm._s(_vm.$t("we_are_human")) + " "
                  ),
                  _c("br"),
                  _vm._v(
                    _vm._s(
                      _vm.$t(
                        "we_will_stand_by_everyones_danger_we_will_laugh_together"
                      )
                    ) + "\n\t\t\t\t\t"
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-7 d-none d-lg-block banner-image-setion" },
      [
        _c("img", {
          staticClass: "banner-img",
          attrs: { src: "/static/common/img/banner5.png" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Police.vue?vue&type=template&id=cc4fbdda&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/Police.vue?vue&type=template&id=cc4fbdda& ***!
  \**********************************************************************************************************************************************************************************************************/
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

/***/ "./themes/human/views/pages/Police.vue":
/*!*********************************************!*\
  !*** ./themes/human/views/pages/Police.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Police_vue_vue_type_template_id_cc4fbdda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Police.vue?vue&type=template&id=cc4fbdda& */ "./themes/human/views/pages/Police.vue?vue&type=template&id=cc4fbdda&");
/* harmony import */ var _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Police.vue?vue&type=script&lang=js& */ "./themes/human/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Police_vue_vue_type_template_id_cc4fbdda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Police_vue_vue_type_template_id_cc4fbdda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/views/pages/Police.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/views/pages/Police.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./themes/human/views/pages/Police.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Police.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/views/pages/Police.vue?vue&type=template&id=cc4fbdda&":
/*!****************************************************************************!*\
  !*** ./themes/human/views/pages/Police.vue?vue&type=template&id=cc4fbdda& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_cc4fbdda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Police.vue?vue&type=template&id=cc4fbdda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/Police.vue?vue&type=template&id=cc4fbdda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_cc4fbdda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Police_vue_vue_type_template_id_cc4fbdda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);