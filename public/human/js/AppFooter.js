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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
          _c("div", { staticClass: "footer-item" }, [
            _c("div", { staticClass: "footer-logo" }, [
              _c("a", { attrs: { href: "/" } }, [
                _c("h2", { staticClass: "text-white bangla-font" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\t" +
                      _vm._s(_vm.info.site_name) +
                      "\n\t\t\t\t\t\t\t"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat\n\t\t\t\t\t\t\tvero, magni est placeat neque, repellat maxime a dolore\n\t\t\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "copyright-area" }, [
        _c("p", { staticClass: "bangla-font" }, [
          _vm._v(
            "\n\t\t\t\t©" +
              _vm._s(_vm.year) +
              " " +
              _vm._s(_vm.info.site_name) +
              ". Developed By\n\t\t\t\t"
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
    return _c("ul", { staticClass: "pl-0" }, [
      _c("li", [
        _c("a", { attrs: { href: "#", target: "_blank" } }, [
          _c("i", { staticClass: "fa fa-facebook-square" })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#", target: "_blank" } }, [
          _c("i", { staticClass: "fa fa-twitter-square" })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "#", target: "_blank" } }, [
          _c("i", { staticClass: "fa fa-instagram" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
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
                { staticClass: "bangla-font", attrs: { href: "events.html" } },
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 col-lg-4" }, [
      _c("div", { staticClass: "footer-item" }, [
        _c("div", { staticClass: "footer-contact" }, [
          _c("h3", [_vm._v("Contact info")]),
          _vm._v(" "),
          _c("div", { staticClass: "contact-inner" }, [
            _c("ul", { staticClass: "pl-0" }, [
              _c("li", { staticClass: "pl-0" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("6B, Helvetica street, Jordan")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "pl-0" }, [
                _c("a", { attrs: { href: "tel:+123456789" } }, [
                  _vm._v("+123-456-789")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "contact-inner" }, [
            _c("ul", { staticClass: "pl-0" }, [
              _c("li", { staticClass: "pl-0" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("6A, New street, Spain")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "pl-0" }, [
                _c("a", { attrs: { href: "tel:+548658956" } }, [
                  _vm._v("+548-658-956")
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

/***/ "./themes/human/layout/AppFooter.vue":
/*!*******************************************!*\
  !*** ./themes/human/layout/AppFooter.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_0d368d40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=0d368d40& */ "./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./themes/human/layout/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_0d368d40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_0d368d40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&":
/*!**************************************************************************!*\
  !*** ./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_0d368d40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=0d368d40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/AppFooter.vue?vue&type=template&id=0d368d40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_0d368d40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_0d368d40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);