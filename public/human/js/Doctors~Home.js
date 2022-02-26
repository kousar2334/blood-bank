(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Doctors~Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/doctor/SingleDoctor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal.vue */ "./themes/human/components/Modal.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Modal: _Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "single-doctor",
  props: {
    doctor: {
      type: Object,
      "default": ""
    }
  },
  data: function data() {
    return {
      active: false,
      modal_show: false,
      chambers: []
    };
  },
  methods: {
    viewDetails: function viewDetails() {
      var _this = this;

      this.chambers = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/get-doctor-chambers", {
        id: this.doctor.id
      }).then(function (response) {
        if (response.data.success) {
          _this.chambers = response.data.chambers;
          _this.modal_show = true;
        }
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np {\n\tmargin-bottom: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDoctor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=template&id=67cb8072&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/doctor/SingleDoctor.vue?vue&type=template&id=67cb8072& ***!
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
    { staticClass: "provider-card", attrs: { id: "provider-card" } },
    [
      _c("div", { staticClass: "provider-card__provider-details" }, [
        _c("h3", { staticClass: "provider-details__provider-name-link" }, [
          _c(
            "a",
            {
              staticClass: "provider-name-link bangla-font",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.viewDetails()
                }
              }
            },
            [_vm._v("\n\t\t\t\t" + _vm._s(_vm.doctor.name) + "\n\t\t\t")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "provider-details__provider-specialty bangla-font mb-4"
          },
          [_vm._v("\n\t\t\t" + _vm._s(_vm.doctor.qualification) + "\n\t\t")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "provider-card__provider-img" }, [
        _vm.doctor.image
          ? _c("img", {
              staticClass: "provider-img provider-image",
              attrs: { src: "/" + _vm.doctor.image, alt: _vm.doctor.name }
            })
          : _c("img", {
              staticClass: "provider-img provider-image",
              attrs: {
                alt: _vm.doctor.name,
                src: "/static/img/theme/doctor-profile.png"
              }
            })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "provider-card__provider-strengths" }, [
        _c("ul", { staticClass: "provider-strengths" }, [
          _c(
            "li",
            {
              staticClass:
                "provider-strengths__strength-item bangla-font specialist"
            },
            [_vm._v("\n\t\t\t\t" + _vm._s(_vm.doctor.specialist) + "\n\t\t\t")]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "provider-strengths__strength-item bangla-font" },
            [_vm._v("\n\t\t\t\t" + _vm._s(_vm.doctor.position) + "\n\t\t\t")]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "provider-strengths__strength-item bangla-font" },
            [
              _vm._v(
                "\n\t\t\t\t" + _vm._s(_vm.doctor.working_place) + "\n\t\t\t"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "provider-strengths__strength-item bangla-font" },
            [_vm._v("\n\t\t\t\t" + _vm._s(_vm.doctor.mobile) + "\n\t\t\t")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "provider-card__view-profile-btn" }, [
        _c(
          "a",
          {
            staticClass: "view-profile-btn button bangla-font",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.viewDetails()
              }
            }
          },
          [_vm._v("বিস্তারিত দেখুন")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "modal",
              {
                attrs: {
                  show: _vm.modal_show,
                  "modal-classes": "modal-dialog-top"
                },
                on: {
                  "update:show": function($event) {
                    _vm.modal_show = $event
                  }
                }
              },
              [
                _c("h6", {
                  staticClass: "modal-title",
                  attrs: { slot: "header", id: "modal-title-default" },
                  slot: "header"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 text-center p-1" }, [
                  _vm.doctor.image
                    ? _c("img", {
                        staticClass: "mb-3 provider-image",
                        attrs: {
                          src: "/" + _vm.doctor.image,
                          alt: _vm.doctor.name
                        }
                      })
                    : _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: "/static/img/theme/doctor-profile.png",
                            expression: "'/static/img/theme/doctor-profile.png'"
                          }
                        ],
                        staticClass: "mb-3 provider-image"
                      }),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "bangla-font name font-weight-bold" },
                    [_vm._v(_vm._s(_vm.doctor.name))]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "bangla-font qualification" }, [
                    _vm._v(_vm._s(_vm.doctor.qualification))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "bangla-font specialist" }, [
                    _vm._v(_vm._s(_vm.doctor.specialist))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "bangla-font position" }, [
                    _vm._v(_vm._s(_vm.doctor.position))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "bangla-font working_place" }, [
                    _vm._v(_vm._s(_vm.doctor.working_place))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "bangla-font mobile" }, [
                    _vm._v(_vm._s(_vm.doctor.mobile))
                  ]),
                  _vm._v(" "),
                  _vm.chambers.length > 0
                    ? _c(
                        "div",
                        [
                          _c(
                            "p",
                            {
                              staticClass: "bangla-font success mb-0 bottom-0"
                            },
                            [_vm._v("চেম্বার")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.chambers, function(chamber, index) {
                            return _c(
                              "div",
                              { key: index, staticClass: "mb-3" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "bangla-font mobile font-weight-bold"
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t" +
                                        _vm._s(chamber.chamber) +
                                        "\n\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "bangla-font mobile" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(chamber.address) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ]),
                                _vm._v(" "),
                                chamber.visiting_time
                                  ? _c(
                                      "p",
                                      { staticClass: "bangla-font mobile" },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\tরোগী দেখার সময়ঃ " +
                                            _vm._s(chamber.visiting_time) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                chamber.mobiles
                                  ? _c(
                                      "p",
                                      { staticClass: "bangla-font mobile" },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\tসিরিয়ালের জন্যঃ " +
                                            _vm._s(chamber.mobiles) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ])
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./themes/human/components/doctor/SingleDoctor.vue":
/*!*********************************************************!*\
  !*** ./themes/human/components/doctor/SingleDoctor.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleDoctor_vue_vue_type_template_id_67cb8072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleDoctor.vue?vue&type=template&id=67cb8072& */ "./themes/human/components/doctor/SingleDoctor.vue?vue&type=template&id=67cb8072&");
/* harmony import */ var _SingleDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleDoctor.vue?vue&type=script&lang=js& */ "./themes/human/components/doctor/SingleDoctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleDoctor.vue?vue&type=style&index=0&lang=css& */ "./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleDoctor_vue_vue_type_template_id_67cb8072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleDoctor_vue_vue_type_template_id_67cb8072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/components/doctor/SingleDoctor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/components/doctor/SingleDoctor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./themes/human/components/doctor/SingleDoctor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDoctor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDoctor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./themes/human/components/doctor/SingleDoctor.vue?vue&type=template&id=67cb8072&":
/*!****************************************************************************************!*\
  !*** ./themes/human/components/doctor/SingleDoctor.vue?vue&type=template&id=67cb8072& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_template_id_67cb8072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDoctor.vue?vue&type=template&id=67cb8072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/doctor/SingleDoctor.vue?vue&type=template&id=67cb8072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_template_id_67cb8072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDoctor_vue_vue_type_template_id_67cb8072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);