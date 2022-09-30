(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/VolunteerLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/VolunteerLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue */ "./themes/human/layout/AppHeader.vue");
/* harmony import */ var _AppFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue */ "./themes/human/layout/AppFooter.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VolunteerLayout",
  components: {
    AppHeader: _AppHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _AppFooter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {// isMenuActive: false,
      // isMobileMenuOpened: false,
      // isAuthenticationChecked: false,
      // system_logo: "",
      // NavMenuItems,
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
      document.body.classList.toggle("sidebar-enable");
    },
    checkAuthenticationAndPermissions: function checkAuthenticationAndPermissions() {
      var _this = this;

      store.dispatch("isAuthentic").then(function () {
        // if(store.getters.isLoggedIn){
        store.dispatch("userPermissions").then(function () {
          if (!store.getters.isPermitted(_this.$router.currentRoute.meta.module_permission_id)) {
            _this.$store.dispatch("logout").then(function () {
              return _this.$router.push({
                name: "login"
              });
            });
          } else {
            _this.isAuthenticationChecked = true;
          }
        }); // }
        // else{
        //     return this.$router.push({ name: "login" });
        // }
      });
    },
    getSystemLogo: function getSystemLogo() {
      var _this2 = this;

      this.loading = true;
      axios.post("/api/get-system-logo").then(function (response) {
        _this2.loading = false;
        var status = response.data.success;

        if (status) {
          _this2.system_logo = response.data.system.image;
        } else {
          _this2.flash("Something went wrong", "error");
        }
      }).catch(function (response) {
        _this2.loading = false;

        _this2.flash("Unable to fetch system logo", "error");
      });
    }
  },
  mounted: function mounted() {// this.checkAuthenticationAndPermissions();
    // this.getSystemLogo();
    // setInterval(this.checkAuthenticationAndPermissions, 1000 * 60 * 40);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/VolunteerLayout.vue?vue&type=template&id=21ddac78&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/layout/VolunteerLayout.vue?vue&type=template&id=21ddac78& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "site-contailer"
  }, [_c("app-header"), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("router-view", {
    key: _vm.$route.fullPath
  })], 1), _vm._v(" "), _c("app-footer")], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./themes/human/layout/VolunteerLayout.vue":
/*!*************************************************!*\
  !*** ./themes/human/layout/VolunteerLayout.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VolunteerLayout_vue_vue_type_template_id_21ddac78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VolunteerLayout.vue?vue&type=template&id=21ddac78& */ "./themes/human/layout/VolunteerLayout.vue?vue&type=template&id=21ddac78&");
/* harmony import */ var _VolunteerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VolunteerLayout.vue?vue&type=script&lang=js& */ "./themes/human/layout/VolunteerLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VolunteerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VolunteerLayout_vue_vue_type_template_id_21ddac78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VolunteerLayout_vue_vue_type_template_id_21ddac78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/layout/VolunteerLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/layout/VolunteerLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./themes/human/layout/VolunteerLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VolunteerLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/VolunteerLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/layout/VolunteerLayout.vue?vue&type=template&id=21ddac78&":
/*!********************************************************************************!*\
  !*** ./themes/human/layout/VolunteerLayout.vue?vue&type=template&id=21ddac78& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerLayout_vue_vue_type_template_id_21ddac78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./VolunteerLayout.vue?vue&type=template&id=21ddac78& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/layout/VolunteerLayout.vue?vue&type=template&id=21ddac78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerLayout_vue_vue_type_template_id_21ddac78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_VolunteerLayout_vue_vue_type_template_id_21ddac78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);