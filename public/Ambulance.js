(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Ambulance"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
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
  name: "AmbulanceHero",
  props: {
    categories: {
      type: Array,
      required: false
    }
  },
  methods: {
    setSelected: function setSelected(event) {
      this.$emit("selectItem", event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal.vue */ "./resources/js/components/Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "single-ambulance",
  props: {
    ambulance: {
      type: Object,
      "default": ""
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Ambulance.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Ambulance.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ambulance_AmbulanceHero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ambulance/AmbulanceHero.vue */ "./resources/js/components/ambulance/AmbulanceHero.vue");
/* harmony import */ var _components_ambulance_SingleAmbulance_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ambulance/SingleAmbulance.vue */ "./resources/js/components/ambulance/SingleAmbulance.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Ambulance",
  components: {
    AmbulanceHero: _components_ambulance_AmbulanceHero_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SingleAmbulance: _components_ambulance_SingleAmbulance_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      title: "সকল অ্যাম্বুলেন্স",
      categories: [],
      selectedDepartment: {},
      currentPage: 1,
      total: 0,
      perPage: 12,
      emptyMessage: "দুঃখিত !... কোন অ্যাম্বুলেন্স খুঁজে পাওয়া যায় নি ।",
      search_key: "",
      ambulances: [],
      cat_id: ""
    };
  },
  mounted: function mounted() {
    this.getAllCetegories();
    this.getAmbulanceList();
  },
  methods: {
    /**
     * Get all categories
     */
    getAllCetegories: function getAllCetegories() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/get-all-ambulance-categories").then(function (response) {
        if (response.data.success) {
          response.data.categories.unshift({
            id: "",
            bn_name: "সকল অ্যাম্বুলেন্স"
          });
          _this.categories = response.data.categories;
        }
      })["catch"](function (error) {});
    },

    /**
     * Get selected category
     */
    getSelectvalue: function getSelectvalue(category) {
      this.title = category.bn_name;
      this.cat_id = category;
      this.currentPage = 1;
      this.getAmbulanceList();
    },

    /**
     * Get ambulance
     */
    getAmbulanceList: function getAmbulanceList() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/get-ambulance-list", {
        perPage: this.perPage,
        page: this.currentPage,
        cat_id: this.cat_id.id
      }).then(function (response) {
        if (response.data.success) {
          _this2.ambulances = response.data.ambulances.data;
          _this2.total = response.data.ambulances.total;
        }
      })["catch"](function (error) {});
    },
    changePage: function changePage(page) {
      this.currentPage = page;
      this.getAmbulanceList();
    }
  },
  metaInfo: {
    title: "অ্যাম্বুলেন্স"
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np {\n\tmargin-bottom: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleAmbulance.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=template&id=51277268&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=template&id=51277268& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                staticClass:
                  "offset-lg-2 col-lg-8 text-center pt-0 pt-lg-5 pt-md-5 pb-5"
              },
              [
                _c("h1", { staticClass: "bangla-font text-white" }, [
                  _vm._v("অ্যাম্বুলেন্স খুঁজুন")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { id: "inputWrapper" } },
                  [
                    _c("v-select", {
                      key: _vm.categories.id,
                      staticClass: "bangla-font",
                      attrs: {
                        single: "",
                        options: _vm.categories,
                        label: "bn_name",
                        placeholder: "ক্যাটেগরি বাছাই করুন",
                        clearable: false
                      },
                      on: {
                        "update:options": function($event) {
                          _vm.categories = $event
                        },
                        input: function($event) {
                          return _vm.setSelected($event)
                        }
                      }
                    })
                  ],
                  1
                )
              ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=template&id=3e770934&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=template&id=3e770934& ***!
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
  return _c("div", { staticClass: "single-donor" }, [
    _c("div", { staticClass: "col-12 text-center p-1" }, [
      _vm.ambulance.image
        ? _c("img", {
            staticClass:
              "\n\t\t\t\trounded-circle\n\t\t\t\timg-center img-fluid\n\t\t\t\tshadow\n\t\t\t\tshadow-lg--hover\n\t\t\t\tmb-2\n\t\t\t\tlist-image\n\t\t\t",
            staticStyle: { width: "100px" },
            attrs: { src: "/" + _vm.ambulance.image, alt: _vm.ambulance.name }
          })
        : _c("img", {
            directives: [
              {
                name: "lazy",
                rawName: "v-lazy",
                value: "img/theme/ambulance.png",
                expression: "'img/theme/ambulance.png'"
              }
            ],
            staticClass:
              "\n\t\t\t\trounded-circle\n\t\t\t\timg-center img-fluid\n\t\t\t\tshadow\n\t\t\t\tshadow-lg--hover\n\t\t\t\tmb-2\n\t\t\t\tlist-image\n\t\t\t",
            staticStyle: { width: "100px" }
          }),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font name font-weight-bold" }, [
        _vm._v(_vm._s(_vm.ambulance.name))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font specialist" }, [
        _vm._v(_vm._s(_vm.ambulance.category))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font mobile" }, [
        _vm._v("\n\t\t\tমোবাইলঃ " + _vm._s(_vm.ambulance.mobile_1)),
        _vm.ambulance.mobile_2 ? _c("span", [_vm._v(",")]) : _vm._e(),
        _vm._v("\n\t\t\t" + _vm._s(_vm.ambulance.mobile_2) + "\n\t\t")
      ]),
      _vm._v(" "),
      _vm.ambulance.email
        ? _c("p", { staticClass: "bangla-font mobile" }, [
            _vm._v("\n\t\t\tইমেইলঃ " + _vm._s(_vm.ambulance.email) + "\n\t\t")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.ambulance.phone
        ? _c("p", { staticClass: "bangla-font mobile" }, [
            _vm._v("\n\t\t\tইমেইলঃ " + _vm._s(_vm.ambulance.phone) + "\n\t\t")
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Ambulance.vue?vue&type=template&id=66a6907c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Ambulance.vue?vue&type=template&id=66a6907c& ***!
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
    "div",
    [
      _c("ambulance-hero", {
        attrs: { categories: _vm.categories },
        on: {
          selectItem: function($event) {
            return _vm.getSelectvalue($event)
          }
        }
      }),
      _vm._v(" "),
      _c("section", { staticClass: "section section-lg pt-0" }, [
        _c("div", { staticClass: "p-3" }, [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("div", { staticClass: "col-12 page-header pb-4" }, [
                _c("h2", { staticClass: "bangla-font text-center mb-2 mt-2" }, [
                  _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t\t\t")
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.ambulances, function(ambulance, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-3 p-3" },
                  [_c("single-ambulance", { attrs: { ambulance: ambulance } })],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center mb-2 mt-4" },
            [
              _c("base-pagination", {
                attrs: {
                  total: _vm.total,
                  perPage: _vm.perPage,
                  value: _vm.currentPage,
                  align: "center",
                  "empty-message": _vm.emptyMessage
                },
                on: {
                  input: function($event) {
                    return _vm.changePage($event)
                  }
                }
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ambulance/AmbulanceHero.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ambulance/AmbulanceHero.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AmbulanceHero_vue_vue_type_template_id_51277268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmbulanceHero.vue?vue&type=template&id=51277268& */ "./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=template&id=51277268&");
/* harmony import */ var _AmbulanceHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmbulanceHero.vue?vue&type=script&lang=js& */ "./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AmbulanceHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AmbulanceHero_vue_vue_type_template_id_51277268___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AmbulanceHero_vue_vue_type_template_id_51277268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ambulance/AmbulanceHero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbulanceHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AmbulanceHero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbulanceHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=template&id=51277268&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=template&id=51277268& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbulanceHero_vue_vue_type_template_id_51277268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AmbulanceHero.vue?vue&type=template&id=51277268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/AmbulanceHero.vue?vue&type=template&id=51277268&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbulanceHero_vue_vue_type_template_id_51277268___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbulanceHero_vue_vue_type_template_id_51277268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ambulance/SingleAmbulance.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ambulance/SingleAmbulance.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleAmbulance_vue_vue_type_template_id_3e770934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleAmbulance.vue?vue&type=template&id=3e770934& */ "./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=template&id=3e770934&");
/* harmony import */ var _SingleAmbulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleAmbulance.vue?vue&type=script&lang=js& */ "./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleAmbulance.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleAmbulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleAmbulance_vue_vue_type_template_id_3e770934___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleAmbulance_vue_vue_type_template_id_3e770934___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ambulance/SingleAmbulance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleAmbulance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleAmbulance.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=template&id=3e770934&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=template&id=3e770934& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_template_id_3e770934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleAmbulance.vue?vue&type=template&id=3e770934& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ambulance/SingleAmbulance.vue?vue&type=template&id=3e770934&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_template_id_3e770934___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAmbulance_vue_vue_type_template_id_3e770934___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/Ambulance.vue":
/*!************************************************!*\
  !*** ./resources/js/views/pages/Ambulance.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ambulance_vue_vue_type_template_id_66a6907c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ambulance.vue?vue&type=template&id=66a6907c& */ "./resources/js/views/pages/Ambulance.vue?vue&type=template&id=66a6907c&");
/* harmony import */ var _Ambulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ambulance.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Ambulance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ambulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ambulance_vue_vue_type_template_id_66a6907c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ambulance_vue_vue_type_template_id_66a6907c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Ambulance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Ambulance.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/pages/Ambulance.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ambulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ambulance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Ambulance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ambulance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Ambulance.vue?vue&type=template&id=66a6907c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/Ambulance.vue?vue&type=template&id=66a6907c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ambulance_vue_vue_type_template_id_66a6907c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ambulance.vue?vue&type=template&id=66a6907c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Ambulance.vue?vue&type=template&id=66a6907c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ambulance_vue_vue_type_template_id_66a6907c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ambulance_vue_vue_type_template_id_66a6907c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);