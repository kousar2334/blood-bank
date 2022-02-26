(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AppFooter"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/layout/AppFooter.vue?vue&type=template&id=1b5e7cec&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/default/layout/AppFooter.vue?vue&type=template&id=1b5e7cec& ***!
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
  return _c("footer", { staticClass: "footer has-cards" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row row-grid align-items-center my-md" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 text-lg-right btn-wrapper" }, [
          _vm.social_accounts.twitter_link
            ? _c(
                "a",
                {
                  staticClass:
                    "btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg",
                  attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: _vm.social_accounts.twitter_link,
                    "data-toggle": "tooltip",
                    "data-original-title": "Follow us"
                  }
                },
                [_c("i", { staticClass: "fa fa-twitter" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.social_accounts.fb_link
            ? _c(
                "a",
                {
                  staticClass:
                    "btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg",
                  attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: _vm.social_accounts.fb_link,
                    "data-toggle": "tooltip",
                    "data-original-title": "Like us"
                  }
                },
                [_c("i", { staticClass: "fa fa-facebook-square" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.social_accounts.youtube_link
            ? _c(
                "a",
                {
                  staticClass:
                    "btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round",
                  attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: _vm.social_accounts.youtube_link,
                    "data-toggle": "tooltip",
                    "data-original-title": "Follow us"
                  }
                },
                [_c("i", { staticClass: "fa fa-youtube" })]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row align-items-center justify-content-md-between" },
        [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "copyright" }, [
              _vm._v("\n\t\t\t\t\t© " + _vm._s(_vm.year) + "\n\t\t\t\t\t"),
              _c(
                "a",
                {
                  staticClass: "bangla-font",
                  attrs: { href: "/", target: "_blank", rel: "noopener" }
                },
                [_vm._v(_vm._s(_vm.info.site_name))]
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
    return _c("div", { staticClass: "col-lg-6" }, [
      _c(
        "h3",
        { staticClass: "text-primary font-weight-light mb-2 bangla-font" },
        [_vm._v("\n\t\t\t\t\tআমাদের সঙ্গে থাকার জন্য ধন্যবাদ\n\t\t\t\t")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("ul", { staticClass: "nav nav-footer justify-content-end" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                href: "https://www.facebook.com/kousarrahman",
                target: "_blank",
                rel: "noopener"
              }
            },
            [
              _vm._v("Developed By\n\t\t\t\t\t\t\t"),
              _c("strong", { staticClass: "deep-blue" }, [
                _vm._v("Kousar Rahman")
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./themes/default/layout/AppFooter.vue":
/*!*********************************************!*\
  !*** ./themes/default/layout/AppFooter.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_1b5e7cec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=1b5e7cec& */ "./themes/default/layout/AppFooter.vue?vue&type=template&id=1b5e7cec&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./themes/default/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_1b5e7cec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_1b5e7cec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/default/layout/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/default/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./themes/default/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/default/layout/AppFooter.vue?vue&type=template&id=1b5e7cec&":
/*!****************************************************************************!*\
  !*** ./themes/default/layout/AppFooter.vue?vue&type=template&id=1b5e7cec& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_1b5e7cec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=1b5e7cec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/default/layout/AppFooter.vue?vue&type=template&id=1b5e7cec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_1b5e7cec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_1b5e7cec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);