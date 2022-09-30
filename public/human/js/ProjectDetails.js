(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectDetails"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/projectDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProjectDetails",
  data: function data() {
    return {
      project_details: {}
    };
  },
  mounted: function mounted() {
    this.getProjectDetails();
  },
  methods: {
    getProjectDetails: function getProjectDetails() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/project-details", {
        id: this.$route.params.id
      }).then(function (response) {
        if (response.data.success) {
          _this.project_details = response.data.data;
        }
      }).catch(function (error) {});
    }
  },
  metaInfo: {
    title: "Project Details"
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=template&id=84f31384&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/projectDetails.vue?vue&type=template&id=84f31384&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);


var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col col-md-4 col-xs-12 wow fadeInRightSlow",
    style: {
      background: "url(/".concat(_vm.project_details.image, ")")
    }
  }, [_c("div", {
    staticClass: "right-col",
    staticStyle: {}
  }, [_c("div", {
    staticClass: "video"
  }, [_c("img", {
    staticClass: "img img-responsive",
    staticStyle: {
      "min-height": "412px"
    },
    attrs: {
      src: "https://www.bidyanondo.org/site-assets/images/blank.png",
      alt: ""
    }
  }), _vm._v(" "), _c("a", {
    staticClass: "video-btn",
    attrs: {
      href: "".concat(_vm.project_details.video_link),
      "data-type": "iframe"
    }
  }, [_c("i", {
    staticClass: "fa fa-play"
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-8 col-xs-12"
  }, [_c("h5", [_vm._v("How To Donate")]), _vm._v(" "), _c("div", [_vm._v("\n                " + _vm._s(_vm.project_details.donation_instruction) + "\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-4 px-0"
  }, [_c("ul", {
    staticClass: "list-group list-group-flush"
  }, [_c("li", {
    staticClass: "list-group-item px-0"
  }, [_vm._v(_vm._s(_vm.project_details.locations))]), _vm._v(" "), _c("li", {
    staticClass: "list-group-item px-0"
  }, [_vm._v(_vm._s(_vm.project_details.purpose))]), _vm._v(" "), _c("li", {
    staticClass: "list-group-item px-0"
  }, [_vm._v("Donation Target " + _vm._s(_vm.project_details.donation_target) + " TK")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-8"
  }, [_c("div", {
    staticClass: "about-event"
  }, [_c("h2", [_vm._v(_vm._s(_vm.project_details.name))]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("pre", {
    staticClass: "p-style"
  }, [_vm._v(_vm._s(_vm.project_details.description))])])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#donate .video[data-v-84f31384] {\n    box-shadow: 0 -2px 6px 1px rgb(0 0 0 / 23%);\n}\n.p-style[data-v-84f31384] {\n    line-height: 1.8em;\n    border: none;\n    padding: 1px;\n    background: inherit;\n    font-family: default;\n    font-family: montserrat, sans-serif;\n    font-size: 15px;\n    -webkit-font-smoothing: antialiased;\n    color: #828791;\n    word-break: keep-all;\n    text-align: justify !important;\n    display: block;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0;\n            margin-inline-start: 0;\n    -webkit-margin-end: 0;\n            margin-inline-end: 0;\n}\npre[data-v-84f31384] {\n    white-space: pre-wrap;\n    white-space: -moz-pre-wrap;\n    white-space: -o-pre-wrap;\n    word-wrap: break-word;\n}\npre[data-v-84f31384] {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css&");

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

/***/ "./themes/human/views/pages/projectDetails.vue":
/*!*****************************************************!*\
  !*** ./themes/human/views/pages/projectDetails.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectDetails_vue_vue_type_template_id_84f31384_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDetails.vue?vue&type=template&id=84f31384&scoped=true& */ "./themes/human/views/pages/projectDetails.vue?vue&type=template&id=84f31384&scoped=true&");
/* harmony import */ var _projectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDetails.vue?vue&type=script&lang=js& */ "./themes/human/views/pages/projectDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _projectDetails_vue_vue_type_style_index_0_id_84f31384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css& */ "./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _projectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _projectDetails_vue_vue_type_template_id_84f31384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _projectDetails_vue_vue_type_template_id_84f31384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "84f31384",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/views/pages/projectDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/views/pages/projectDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./themes/human/views/pages/projectDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./projectDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_style_index_0_id_84f31384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=style&index=0&id=84f31384&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_style_index_0_id_84f31384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_style_index_0_id_84f31384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_style_index_0_id_84f31384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_style_index_0_id_84f31384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./themes/human/views/pages/projectDetails.vue?vue&type=template&id=84f31384&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./themes/human/views/pages/projectDetails.vue?vue&type=template&id=84f31384&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_template_id_84f31384_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./projectDetails.vue?vue&type=template&id=84f31384&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/projectDetails.vue?vue&type=template&id=84f31384&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_template_id_84f31384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDetails_vue_vue_type_template_id_84f31384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);