(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddHospital"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/AddHospital.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/AddHospital.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.vue */ "./resources/js/default/components/Modal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HospitalForm",
  components: {
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      notification_modal: false,
      notifination_header: "",
      notifination_message: "",
      categories: [],
      name: "",
      bn_name: "",
      cat_id: "",
      address: "",
      description: "",
      phone: "",
      mobile_1: "",
      mobile_2: ""
    }, Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "phone", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "image", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "email", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "status", 0), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "web", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "fb_link", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "errors", []), _ref;
  },
  mounted: function mounted() {
    this.getAllCetegories();
  },
  methods: {
    /**
     * Get all categories
     */
    getAllCetegories: function getAllCetegories() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/get-all-hospital-categories").then(function (response) {
        if (response.data.success) {
          _this.categories = response.data.categories;
        }
      })["catch"](function (error) {});
    },

    /**
     * Get selected category
     */
    setCategory: function setCategory(event) {
      this.cat_id = event.target.value;
    },

    /**
     * Get hospital image
     */
    getImage: function getImage(event) {
      this.image = event.target.files[0];
    },

    /**
     * Store new hospital
     */
    createNewHospital: function createNewHospital() {
      var _this2 = this;

      this.errors = [];
      var form_data = new FormData();
      form_data.append("name", this.name);
      form_data.append("bn_name", this.bn_name);
      form_data.append("description", this.description);
      form_data.append("phone", this.phone);
      form_data.append("mobile_1", this.mobile_1);
      form_data.append("mobile_2", this.mobile_2);
      form_data.append("image", this.image);
      form_data.append("address", this.address);
      form_data.append("email", this.email);
      form_data.append("web", this.web);
      form_data.append("fb_link", this.fb_link);
      form_data.append("status", this.status);
      form_data.append("cat_id", this.cat_id);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/store-new-hospital", form_data).then(function (response) {
        if (response.data.success) {
          _this2.notifination_header = "ধন্যবাদ";
          _this2.notifination_message = "আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
          _this2.name = "";
          _this2.bn_name = "";
          _this2.description = "";
          _this2.name = "";
          _this2.phone = "";
          _this2.image = "";
          _this2.mobile_1 = "";
          _this2.mobile_2 = "";
          _this2.email = "";
          _this2.address = "";
          _this2.web = "";
          _this2.web = "";
          _this2.fb_link = "";
          _this2.cat_id = "";
          _this2.$refs.image.type = "text";
          _this2.$refs.image.type = "file";
        } else {
          _this2.notifination_header = "দুঃখিত";
          _this2.notifination_message = "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
        }

        _this2.notification_modal = true;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors;
        } else {
          _this2.notifination_header = "দুঃখিত";
          _this2.notifination_message = "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
          _this2.notification_modal = true;
        }
      });
    }
  },
  metaInfo: {
    title: "হাসপাতাল ও ক্লিনিক নিবন্ধন"
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.vue */ "./resources/js/templateOne/components/Modal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HospitalForm",
  components: {
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      notification_modal: false,
      notifination_header: "",
      notifination_message: "",
      categories: [],
      name: "",
      bn_name: "",
      cat_id: "",
      address: "",
      description: "",
      phone: "",
      mobile_1: "",
      mobile_2: ""
    }, Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "phone", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "image", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "email", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "status", 0), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "web", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "fb_link", ""), Object(_mnt_e632d026_5858_4e33_8e62_2946578fcfb1_htdocs_personal_bogura_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "errors", []), _ref;
  },
  mounted: function mounted() {
    this.getAllCetegories();
  },
  methods: {
    /**
     * Get all categories
     */
    getAllCetegories: function getAllCetegories() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/get-all-hospital-categories").then(function (response) {
        if (response.data.success) {
          _this.categories = response.data.categories;
        }
      })["catch"](function (error) {});
    },

    /**
     * Get selected category
     */
    setCategory: function setCategory(event) {
      this.cat_id = event.target.value;
    },

    /**
     * Get hospital image
     */
    getImage: function getImage(event) {
      this.image = event.target.files[0];
    },

    /**
     * Store new hospital
     */
    createNewHospital: function createNewHospital() {
      var _this2 = this;

      this.errors = [];
      var form_data = new FormData();
      form_data.append("name", this.name);
      form_data.append("bn_name", this.bn_name);
      form_data.append("description", this.description);
      form_data.append("phone", this.phone);
      form_data.append("mobile_1", this.mobile_1);
      form_data.append("mobile_2", this.mobile_2);
      form_data.append("image", this.image);
      form_data.append("address", this.address);
      form_data.append("email", this.email);
      form_data.append("web", this.web);
      form_data.append("fb_link", this.fb_link);
      form_data.append("status", this.status);
      form_data.append("cat_id", this.cat_id);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/store-new-hospital", form_data).then(function (response) {
        if (response.data.success) {
          _this2.notifination_header = "ধন্যবাদ";
          _this2.notifination_message = "আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
          _this2.name = "";
          _this2.bn_name = "";
          _this2.description = "";
          _this2.name = "";
          _this2.phone = "";
          _this2.image = "";
          _this2.mobile_1 = "";
          _this2.mobile_2 = "";
          _this2.email = "";
          _this2.address = "";
          _this2.web = "";
          _this2.web = "";
          _this2.fb_link = "";
          _this2.cat_id = "";
          _this2.$refs.image.type = "text";
          _this2.$refs.image.type = "file";
        } else {
          _this2.notifination_header = "দুঃখিত";
          _this2.notifination_message = "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
        }

        _this2.notification_modal = true;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors;
        } else {
          _this2.notifination_header = "দুঃখিত";
          _this2.notifination_message = "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
          _this2.notification_modal = true;
        }
      });
    }
  },
  metaInfo: {
    title: "হাসপাতাল ও ক্লিনিক নিবন্ধন"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/AddHospital.vue?vue&type=template&id=b164b75a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/AddHospital.vue?vue&type=template&id=b164b75a& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            { staticClass: "col-lg-8" },
            [
              _c(
                "card",
                {
                  staticClass: "border-0",
                  attrs: {
                    type: "secondary",
                    shadow: "",
                    "header-classes": "bg-white pb-5",
                    "body-classes": "px-lg-5 py-lg-5"
                  }
                },
                [
                  [
                    _c("div", { staticClass: "btn-wrapper text-center mb-5" }, [
                      _c("h3", { staticClass: "bangla-font" }, [
                        _vm._v("হাসপাতাল ও ক্লিনিক নিবন্ধন")
                      ])
                    ])
                  ],
                  _vm._v(" "),
                  [
                    _c("form", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("ক্যাটেগরি"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                staticClass: "form-control bangla-font",
                                on: {
                                  change: function($event) {
                                    return _vm.setCategory($event)
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { domProps: { selected: _vm.cat_id === "" } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tক্যাটেগরি বাছাই করুন\n\t\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.categories, function(cat, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: cat.id } },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(cat.bn_name) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.cat_id
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.cat_id, function(
                                    cat_idError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(cat_idError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("হাসপাতাল / ক্লিনিকের নাম"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.bn_name,
                                  expression: "bn_name"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: { type: "text", placeholder: "নাম লিখুন" },
                              domProps: { value: _vm.bn_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.bn_name = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.bn_name
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.bn_name, function(
                                    bn_name,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(bn_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v(
                                  "হাসপাতাল / ক্লিনিকের নাম (ইংরেজিতে)\n\t\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.name,
                                  expression: "name"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: { type: "text", placeholder: "নাম লিখুন" },
                              domProps: { value: _vm.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.name = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.name
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.name, function(
                                    nameError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(nameError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("মোবাইল"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.mobile_1,
                                  expression: "mobile_1"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder: "মোবাইল নাম্বার দিন "
                              },
                              domProps: { value: _vm.mobile_1 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.mobile_1 = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.mobile_1
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.mobile_1, function(
                                    mobileError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(mobileError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("বিকল্প মোবাইল")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.mobile_2,
                                  expression: "mobile_2"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "বিকল্প মোবাইল নাম্বার দিন, যদি থাকে "
                              },
                              domProps: { value: _vm.mobile_2 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.mobile_2 = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.mobile_2
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.mobile_2, function(
                                    mobile_2Error,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(mobile_2Error) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("টেলিফোন নাম্বার")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.phone,
                                  expression: "phone"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder: "টেলিফোন নাম্বার , যদি থাকে "
                              },
                              domProps: { value: _vm.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.phone = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.phone
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.phone, function(
                                    phoneError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(phoneError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ইমেইল")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.email,
                                  expression: "email"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "email",
                                placeholder: "ইমেইল দিন , যদি থাকে "
                              },
                              domProps: { value: _vm.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.email
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.email, function(
                                    emailError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(emailError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v(
                                  "হাসপাতাল / ক্লিনিকের বর্ণনা\n\t\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.description,
                                  expression: "description"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                rows: "4",
                                placeholder:
                                  "হাসপাতাল / ক্লিনিকের বর্ণনা লিখুন "
                              },
                              domProps: { value: _vm.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.description = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.description
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.description, function(
                                    descriptionerror,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(descriptionerror) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("ঠিকানা"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.address,
                                  expression: "address"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                rows: "3",
                                placeholder:
                                  "হাসপাতাল / ক্লিনিকের বর্তমান ঠিকানা লিখুন "
                              },
                              domProps: { value: _vm.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.address = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.address
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.address, function(
                                    addressError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(addressError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ওয়েব সাইটের লিঙ্ক")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.web,
                                  expression: "web"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "ওয়েব সাইটের লিঙ্ক দিন  , যদি থাকে "
                              },
                              domProps: { value: _vm.web },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.web = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.web
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.web, function(
                                    webError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(webError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ফেইসবুক পেজের লিঙ্ক")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fb_link,
                                  expression: "fb_link"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "ফেইসবুক পেজের লিঙ্ক দিন , যদি থাকে "
                              },
                              domProps: { value: _vm.fb_link },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.fb_link = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.fb_link
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.fb_link, function(
                                    fb_linkError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(fb_linkError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ছবি")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              ref: "image",
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "file",
                                placeholder:
                                  "বিকল্প মোবাইল নাম্বার দিন যদি থাকে "
                              },
                              on: {
                                change: function($event) {
                                  return _vm.getImage($event)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.image
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.image, function(
                                    imageError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(imageError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("p", { staticClass: "bangla-font" }, [
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v("*")
                              ]),
                              _vm._v(
                                " চিহ্নিত স্থান গুলো\n\t\t\t\t\t\t\t\t\t\t\tঅবশ্যই পূরণ করতে হবে।\n\t\t\t\t\t\t\t\t\t\t"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "base-button",
                                {
                                  staticClass: "my-4 bangla-font",
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.createNewHospital.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [_vm._v("জমা দিন")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  ]
                ],
                2
              )
            ],
            1
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
                    show: _vm.notification_modal,
                    gradient: "danger",
                    "modal-classes": "modal-danger modal-dialog-top"
                  },
                  on: {
                    "update:show": function($event) {
                      _vm.notification_modal = $event
                    }
                  }
                },
                [
                  _c("div", { staticClass: "py-3 text-center" }, [
                    _c("i", { staticClass: "ni ni-bell-55 ni-3x" }),
                    _vm._v(" "),
                    _c("h1", { staticClass: "mt-4 bangla-font" }, [
                      _vm._v(_vm._s(_vm.notifination_header))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "bangla-font" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t" +
                          _vm._s(_vm.notifination_message) +
                          "\n\t\t\t\t\t\t"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "footer" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "bangla-font",
                          attrs: { type: "white" },
                          on: {
                            click: function($event) {
                              _vm.notification_modal = false
                            }
                          }
                        },
                        [_vm._v("কেটে দিন")]
                      )
                    ],
                    1
                  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=template&id=7296621e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=template&id=7296621e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            { staticClass: "col-lg-8" },
            [
              _c(
                "card",
                {
                  staticClass: "border-0",
                  attrs: {
                    type: "secondary",
                    shadow: "",
                    "header-classes": "bg-white pb-5",
                    "body-classes": "px-lg-5 py-lg-5"
                  }
                },
                [
                  [
                    _c("div", { staticClass: "btn-wrapper text-center mb-5" }, [
                      _c("h3", { staticClass: "bangla-font" }, [
                        _vm._v("হাসপাতাল ও ক্লিনিক নিবন্ধন")
                      ])
                    ])
                  ],
                  _vm._v(" "),
                  [
                    _c("form", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("ক্যাটেগরি"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                staticClass: "form-control bangla-font",
                                on: {
                                  change: function($event) {
                                    return _vm.setCategory($event)
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { domProps: { selected: _vm.cat_id === "" } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tক্যাটেগরি বাছাই করুন\n\t\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.categories, function(cat, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: cat.id } },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(cat.bn_name) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.cat_id
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.cat_id, function(
                                    cat_idError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(cat_idError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("হাসপাতাল / ক্লিনিকের নাম"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.bn_name,
                                  expression: "bn_name"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: { type: "text", placeholder: "নাম লিখুন" },
                              domProps: { value: _vm.bn_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.bn_name = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.bn_name
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.bn_name, function(
                                    bn_name,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(bn_name) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v(
                                  "হাসপাতাল / ক্লিনিকের নাম (ইংরেজিতে)\n\t\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.name,
                                  expression: "name"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: { type: "text", placeholder: "নাম লিখুন" },
                              domProps: { value: _vm.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.name = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.name
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.name, function(
                                    nameError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(nameError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("মোবাইল"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.mobile_1,
                                  expression: "mobile_1"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder: "মোবাইল নাম্বার দিন "
                              },
                              domProps: { value: _vm.mobile_1 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.mobile_1 = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.mobile_1
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.mobile_1, function(
                                    mobileError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(mobileError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("বিকল্প মোবাইল")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.mobile_2,
                                  expression: "mobile_2"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "বিকল্প মোবাইল নাম্বার দিন, যদি থাকে "
                              },
                              domProps: { value: _vm.mobile_2 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.mobile_2 = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.mobile_2
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.mobile_2, function(
                                    mobile_2Error,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(mobile_2Error) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("টেলিফোন নাম্বার")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.phone,
                                  expression: "phone"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder: "টেলিফোন নাম্বার , যদি থাকে "
                              },
                              domProps: { value: _vm.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.phone = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.phone
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.phone, function(
                                    phoneError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(phoneError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ইমেইল")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.email,
                                  expression: "email"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "email",
                                placeholder: "ইমেইল দিন , যদি থাকে "
                              },
                              domProps: { value: _vm.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.email
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.email, function(
                                    emailError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(emailError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v(
                                  "হাসপাতাল / ক্লিনিকের বর্ণনা\n\t\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.description,
                                  expression: "description"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                rows: "4",
                                placeholder:
                                  "হাসপাতাল / ক্লিনিকের বর্ণনা লিখুন "
                              },
                              domProps: { value: _vm.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.description = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.description
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.description, function(
                                    descriptionerror,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(descriptionerror) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [
                                _vm._v("ঠিকানা"),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.address,
                                  expression: "address"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                rows: "3",
                                placeholder:
                                  "হাসপাতাল / ক্লিনিকের বর্তমান ঠিকানা লিখুন "
                              },
                              domProps: { value: _vm.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.address = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.address
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.address, function(
                                    addressError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(addressError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ওয়েব সাইটের লিঙ্ক")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.web,
                                  expression: "web"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "ওয়েব সাইটের লিঙ্ক দিন  , যদি থাকে "
                              },
                              domProps: { value: _vm.web },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.web = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.web
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.web, function(
                                    webError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(webError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ফেইসবুক পেজের লিঙ্ক")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fb_link,
                                  expression: "fb_link"
                                }
                              ],
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "ফেইসবুক পেজের লিঙ্ক দিন , যদি থাকে "
                              },
                              domProps: { value: _vm.fb_link },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.fb_link = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.fb_link
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.fb_link, function(
                                    fb_linkError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(fb_linkError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "bangla-font mb-0 font-weight-bold"
                              },
                              [_vm._v("ছবি")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              ref: "image",
                              staticClass: "form-control bangla-font",
                              attrs: {
                                type: "file",
                                placeholder:
                                  "বিকল্প মোবাইল নাম্বার দিন যদি থাকে "
                              },
                              on: {
                                change: function($event) {
                                  return _vm.getImage($event)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.image
                              ? _c(
                                  "div",
                                  _vm._l(_vm.errors.image, function(
                                    imageError,
                                    index
                                  ) {
                                    return _c(
                                      "p",
                                      {
                                        key: index,
                                        staticClass:
                                          "text-danger bangla-font font-size-13 mb-0 mb-0"
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(imageError) +
                                            "\n\t\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("p", { staticClass: "bangla-font" }, [
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v("*")
                              ]),
                              _vm._v(
                                " চিহ্নিত স্থান গুলো\n\t\t\t\t\t\t\t\t\t\t\tঅবশ্যই পূরণ করতে হবে।\n\t\t\t\t\t\t\t\t\t\t"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "base-button",
                                {
                                  staticClass: "my-4 bangla-font",
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.createNewHospital.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [_vm._v("জমা দিন")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  ]
                ],
                2
              )
            ],
            1
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
                    show: _vm.notification_modal,
                    gradient: "danger",
                    "modal-classes": "modal-danger modal-dialog-top"
                  },
                  on: {
                    "update:show": function($event) {
                      _vm.notification_modal = $event
                    }
                  }
                },
                [
                  _c("div", { staticClass: "py-3 text-center" }, [
                    _c("i", { staticClass: "ni ni-bell-55 ni-3x" }),
                    _vm._v(" "),
                    _c("h1", { staticClass: "mt-4 bangla-font" }, [
                      _vm._v(_vm._s(_vm.notifination_header))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "bangla-font" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t" +
                          _vm._s(_vm.notifination_message) +
                          "\n\t\t\t\t\t\t"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "footer" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "bangla-font",
                          attrs: { type: "white" },
                          on: {
                            click: function($event) {
                              _vm.notification_modal = false
                            }
                          }
                        },
                        [_vm._v("কেটে দিন")]
                      )
                    ],
                    1
                  )
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

/***/ "./resources/js/default/views/pages/AddHospital.vue":
/*!**********************************************************!*\
  !*** ./resources/js/default/views/pages/AddHospital.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddHospital_vue_vue_type_template_id_b164b75a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddHospital.vue?vue&type=template&id=b164b75a& */ "./resources/js/default/views/pages/AddHospital.vue?vue&type=template&id=b164b75a&");
/* harmony import */ var _AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddHospital.vue?vue&type=script&lang=js& */ "./resources/js/default/views/pages/AddHospital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddHospital_vue_vue_type_template_id_b164b75a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddHospital_vue_vue_type_template_id_b164b75a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/views/pages/AddHospital.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/views/pages/AddHospital.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/default/views/pages/AddHospital.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddHospital.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/AddHospital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/views/pages/AddHospital.vue?vue&type=template&id=b164b75a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/default/views/pages/AddHospital.vue?vue&type=template&id=b164b75a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_template_id_b164b75a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddHospital.vue?vue&type=template&id=b164b75a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/AddHospital.vue?vue&type=template&id=b164b75a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_template_id_b164b75a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_template_id_b164b75a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/views/pages/AddHospital.vue":
/*!**************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/AddHospital.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddHospital_vue_vue_type_template_id_7296621e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddHospital.vue?vue&type=template&id=7296621e& */ "./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=template&id=7296621e&");
/* harmony import */ var _AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddHospital.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddHospital_vue_vue_type_template_id_7296621e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddHospital_vue_vue_type_template_id_7296621e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/views/pages/AddHospital.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddHospital.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=template&id=7296621e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=template&id=7296621e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_template_id_7296621e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddHospital.vue?vue&type=template&id=7296621e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/AddHospital.vue?vue&type=template&id=7296621e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_template_id_7296621e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHospital_vue_vue_type_template_id_7296621e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);