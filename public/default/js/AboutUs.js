(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AboutUs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/AboutUs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/views/pages/AboutUs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Modal.vue */ "./themes/default/components/Modal.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AboutUs",
  components: {
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      about_us: ""
    };
  },
  mounted: function mounted() {
    this.getAboutUsContent();
  },
  methods: {
    //Get site about us
    getAboutUsContent: function getAboutUsContent() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/get-site-about-us").then(function (response) {
        if (response.data.success) {
          _this.about_us = response.data.about_us;
        }
      })["catch"](function (error) {});
    }
  },
  metaInfo: {
    title: "আমাদের সম্পর্কে"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/AboutUs.vue?vue&type=template&id=3f0bcf8c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/views/pages/AboutUs.vue?vue&type=template&id=3f0bcf8c& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "section section-shaped section-lg my-0" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container pt-lg-md" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [
              _c(
                "card",
                {
                  staticClass: "border-0",
                  attrs: {
                    type: "secondary",
                    shadow: "",
                    "header-classes": "bg-white pb-5",
                    "body-classes": "px-lg-5 py-lg-8"
                  }
                },
                [
                  [
                    _c("div", { staticClass: "btn-wrapper text-center mb-5" }, [
                      _c("h3", { staticClass: "bangla-font" }, [
                        _vm._v("আমাদের সম্পর্কে")
                      ])
                    ])
                  ],
                  _vm._v(" "),
                  [
                    _c("div", {
                      staticClass: "bangla-font",
                      domProps: { innerHTML: _vm._s(_vm.about_us) }
                    })
                  ]
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "shape shape-style-1 bg-gradient-default" },
      [
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./themes/default/views/pages/AboutUs.vue":
/*!************************************************!*\
  !*** ./themes/default/views/pages/AboutUs.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_3f0bcf8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=3f0bcf8c& */ "./themes/default/views/pages/AboutUs.vue?vue&type=template&id=3f0bcf8c&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./themes/default/views/pages/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_3f0bcf8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_3f0bcf8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/default/views/pages/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/default/views/pages/AboutUs.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./themes/default/views/pages/AboutUs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/default/views/pages/AboutUs.vue?vue&type=template&id=3f0bcf8c&":
/*!*******************************************************************************!*\
  !*** ./themes/default/views/pages/AboutUs.vue?vue&type=template&id=3f0bcf8c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_3f0bcf8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=3f0bcf8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/views/pages/AboutUs.vue?vue&type=template&id=3f0bcf8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_3f0bcf8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_3f0bcf8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);