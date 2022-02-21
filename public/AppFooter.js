(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AppFooter"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/layout/AppFooter.vue?vue&type=template&id=45bf3c63&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/layout/AppFooter.vue?vue&type=template&id=45bf3c63& ***!
  \****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/layout/AppFooter.vue?vue&type=template&id=2fccc610&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/layout/AppFooter.vue?vue&type=template&id=2fccc610& ***!
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
  return _c("footer", { staticClass: "footer-area pt-100" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "copyright-area" }, [
        _c("p", { staticClass: "bangla-font" }, [
          _vm._v(
            "\n\t\t\t\t©" +
              _vm._s(_vm.year) +
              " " +
              _vm._s(_vm.info.site_name) +
              ". Designed By\n\t\t\t\t"
          ),
          _c(
            "a",
            { attrs: { href: "https://hibootstrap.com/", target: "_blank" } },
            [_vm._v("Kousar Rahman")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
        _c("div", { staticClass: "footer-item" }, [
          _c("div", { staticClass: "footer-logo" }, [
            _c("a", { staticClass: "logo", attrs: { href: "index.html" } }, [
              _c("img", {
                attrs: {
                  src: "/uploads/general/02182022073801logo.png",
                  alt: "Logo"
                }
              })
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat\n\t\t\t\t\t\t\tvero, magni est placeat neque, repellat maxime a dolore\n\t\t\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "pl-0" }, [
              _c("li", [
                _c("a", { attrs: { href: "#", target: "_blank" } }, [
                  _c("i", { staticClass: "icofont-facebook" })
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#", target: "_blank" } }, [
                  _c("i", { staticClass: "icofont-twitter" })
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#", target: "_blank" } }, [
                  _c("i", { staticClass: "icofont-youtube-play" })
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#", target: "_blank" } }, [
                  _c("i", { staticClass: "icofont-instagram" })
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
        _c("div", { staticClass: "footer-item" }, [
          _c("div", { staticClass: "footer-links" }, [
            _c("h3", { staticClass: "bangla-font" }, [_vm._v("লিঙ্ক সমূহ")]),
            _vm._v(" "),
            _c("ul", { staticClass: "pl-0" }, [
              _c("li", [
                _c(
                  "a",
                  { staticClass: "bangla-font", attrs: { href: "about.html" } },
                  [_vm._v("নতুন ডাক্তার ")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  { staticClass: "bangla-font", attrs: { href: "blog.html" } },
                  [_vm._v("নতুন হাসপাতাল ")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "bangla-font",
                    attrs: { href: "events.html" }
                  },
                  [_vm._v(" নতুন রক্তদাতা ")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "bangla-font",
                    attrs: { href: "donation.html" }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t\t\tআমাদের সম্পর্কে\n\t\t\t\t\t\t\t\t"
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
        _c("div", { staticClass: "footer-item" }, [
          _c("div", { staticClass: "footer-contact" }, [
            _c("h3", [_vm._v("Contact info")]),
            _vm._v(" "),
            _c("div", { staticClass: "contact-inner" }, [
              _c("ul", { staticClass: "pl-0" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("6B, Helvetica street, Jordan")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "icofont-ui-call" }),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "tel:+123456789" } }, [
                    _vm._v("+123-456-789")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "contact-inner" }, [
              _c("ul", [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("6A, New street, Spain")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "tel:+548658956" } }, [
                    _vm._v("+548-658-956")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/default/layout/AppFooter.vue":
/*!***************************************************!*\
  !*** ./resources/js/default/layout/AppFooter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_45bf3c63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=45bf3c63& */ "./resources/js/default/layout/AppFooter.vue?vue&type=template&id=45bf3c63&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/default/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_45bf3c63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_45bf3c63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/layout/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/default/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/layout/AppFooter.vue?vue&type=template&id=45bf3c63&":
/*!**********************************************************************************!*\
  !*** ./resources/js/default/layout/AppFooter.vue?vue&type=template&id=45bf3c63& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_45bf3c63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=45bf3c63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/layout/AppFooter.vue?vue&type=template&id=45bf3c63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_45bf3c63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_45bf3c63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/layout/AppFooter.vue":
/*!*******************************************************!*\
  !*** ./resources/js/templateOne/layout/AppFooter.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_2fccc610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=2fccc610& */ "./resources/js/templateOne/layout/AppFooter.vue?vue&type=template&id=2fccc610&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_2fccc610___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_2fccc610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/layout/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/layout/AppFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/templateOne/layout/AppFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/layout/AppFooter.vue?vue&type=template&id=2fccc610&":
/*!**************************************************************************************!*\
  !*** ./resources/js/templateOne/layout/AppFooter.vue?vue&type=template&id=2fccc610& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_2fccc610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=2fccc610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/layout/AppFooter.vue?vue&type=template&id=2fccc610&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_2fccc610___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_2fccc610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);