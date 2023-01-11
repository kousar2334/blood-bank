(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DoctorAddForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modal",
  components: {
    SlideYUpTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_2__["SlideYUpTransition"]
  },
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "",
      validator: function validator(value) {
        var acceptedValues = ["", "notice", "mini"];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Modal type (notice|mini|"") '
    },
    modalClasses: {
      type: [Object, String],
      description: "Modal dialog css classes"
    },
    modalContentClasses: {
      type: [Object, String],
      description: "Modal dialog content css classes"
    },
    gradient: {
      type: String,
      description: "Modal gradient type (danger, primary etc)"
    },
    headerClasses: {
      type: [Object, String],
      description: "Modal Header css classes"
    },
    bodyClasses: {
      type: [Object, String],
      description: "Modal Body css classes"
    },
    footerClasses: {
      type: [Object, String],
      description: "Modal Footer css classes"
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: "Modal transition duration"
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    }
  },
  watch: {
    show: function show(val) {
      var documentClasses = document.body.classList;

      if (val) {
        documentClasses.add("modal-open");
      } else {
        documentClasses.remove("modal-open");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/DoctorAddForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/DoctorAddForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.vue */ "./themes/human/components/Modal.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DoctorAddForm",
  components: {
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      name: "",
      en_name: "",
      department: "",
      qualification: "",
      position: "",
      specialist: "",
      working_place: "",
      mobile: "",
      bmdc_no: "",
      image: "",
      departments: [],
      chambers: [{
        chamber: "",
        address: "",
        visiting_time: "",
        mobiles: ""
      }],
      errors: [],
      notifination_header: "",
      notifination_message: "",
      notification_modal: false
    };
  },
  mounted: function mounted() {
    this.getDocotorDepartments();
  },
  methods: {
    /**
     * Get doctos divisions
     */
    getDocotorDepartments: function getDocotorDepartments() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/get-doctors-departments").then(function (response) {
        if (response.data.success) {
          _this.departments = response.data.departments;
        }
      }).catch(function (error) {});
    },

    /**
     * Get selected department
     */
    setDepartment: function setDepartment(event) {
      this.department = event.target.value;
    },

    /**
     * Get Doctor Image
     */
    getImage: function getImage(event) {
      this.image = event.target.files[0];
    },

    /**
     * Add new chamber
     */
    AddMoreChamber: function AddMoreChamber() {
      this.chambers.push({
        chamber: "",
        address: "",
        visiting_time: "",
        mobiles: ""
      });
    },

    /**
     * Remove chamber
     */
    removeChamber: function removeChamber(index) {
      this.chambers.splice(index, 1);
    },

    /**
     * Store new doctor information
     */
    storeNewDoctor: function storeNewDoctor() {
      var _this2 = this;

      this.errors = [];
      var form_data = new FormData();
      form_data.append("name", this.name);
      form_data.append("en_name", this.en_name);
      form_data.append("qualification", this.qualification);
      form_data.append("position", this.position);
      form_data.append("image", this.image);
      form_data.append("specialist", this.specialist);
      form_data.append("working_place", this.working_place);
      form_data.append("mobile", this.mobile);
      form_data.append("bmdc_no", this.bmdc_no);
      form_data.append("department", this.department);
      form_data.append("status", 0);
      form_data.append("end", "api");
      var chambers = JSON.stringify(this.chambers);
      form_data.append("chambers", chambers);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/store-new-doctor", form_data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        if (response.data.success) {
          _this2.notifination_header = "ধন্যবাদ";
          _this2.notifination_message = "আপনার নিবন্ধন সম্পূর্ণ হয়েছে , কর্তৃপক্ষ আপানার দেওয়া তথ্য যাচাই করে ওয়েব সাইটে প্রকাশ করবে।";
          _this2.name = "";
          _this2.mobile = "";
          _this2.image = "";
          _this2.en_name = "";
          _this2.qualification = "";
          _this2.position = "";
          _this2.department = "";
          _this2.specialist = "";
          _this2.working_place = "";
          _this2.bmdc_no = "";
          _this2.$refs.image.type = "text";
          _this2.$refs.image.type = "file";
          _this2.chambers = [{
            chamber: "",
            address: "",
            visiting_time: "",
            mobiles: ""
          }];
        } else {
          _this2.notifination_header = "দুঃখিত";
          _this2.notifination_message = "আপানর নিবন্ধন সম্পূর্ণ হয়নি , আবার চেষ্টা করুন ।";
        }

        _this2.notification_modal = true;
      }).catch(function (error) {
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
    title: "নতুন ডাক্তার"
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=template&id=5324bebd&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Modal.vue?vue&type=template&id=5324bebd& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("SlideYUpTransition", {
    attrs: {
      duration: _vm.animationDuration
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    staticClass: "modal fade",
    class: [{
      "show d-block": _vm.show
    }, {
      "d-none": !_vm.show
    }, {
      "modal-mini": _vm.type === "mini"
    }],
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": !_vm.show
    },
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-top",
    class: [{
      "modal-notice": _vm.type === "notice"
    }, _vm.modalClasses]
  }, [_c("div", {
    staticClass: "modal-content",
    class: [_vm.gradient ? "bg-gradient-".concat(_vm.gradient) : "", _vm.modalContentClasses]
  }, [_vm.$slots.header ? _c("div", {
    staticClass: "modal-header",
    class: [_vm.headerClasses]
  }, [_vm._t("header"), _vm._v(" "), _vm._t("close-button", function () {
    return [_vm.showClose ? _c("button", {
      staticClass: "close",
      attrs: {
        type: "button",
        "data-dismiss": "modal",
        "aria-label": "Close"
      },
      on: {
        click: _vm.closeModal
      }
    }, [_c("span", {
      attrs: {
        "aria-hidden": !_vm.show
      }
    }, [_vm._v("×")])]) : _vm._e()];
  })], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal-body",
    class: _vm.bodyClasses
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.$slots.footer ? _c("div", {
    staticClass: "modal-footer",
    class: _vm.footerClasses
  }, [_vm._t("footer")], 2) : _vm._e()])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/DoctorAddForm.vue?vue&type=template&id=611dab81&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/views/pages/DoctorAddForm.vue?vue&type=template&id=611dab81& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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

  return _c("section", {
    staticClass: "section section-shaped section-lg my-0"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("card", {
    staticClass: "border-0",
    attrs: {
      type: "secondary",
      "header-classes": "bg-white pb-5",
      "body-classes": "px-lg-5 py-lg-5"
    }
  }, [[_c("div", {
    staticClass: "btn-wrapper text-center mb-5"
  }, [_c("h3", {
    staticClass: "bangla-font"
  }, [_vm._v("নতুন ডাক্তার নিবন্ধন")])])], _vm._v(" "), [_c("form", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("বিভাগ "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
    staticClass: "form-control bangla-font",
    on: {
      change: function change($event) {
        return _vm.setDepartment($event);
      }
    }
  }, [_c("option", {
    domProps: {
      selected: _vm.department === ""
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tবিভাগ বাছাই করুন\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t"), _vm._l(_vm.departments, function (department, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: department.id
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(department.bn_name) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  })], 2), _vm._v(" "), _vm.errors.department ? _c("div", _vm._l(_vm.errors.department, function (departmentError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(departmentError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("ডাক্তারের নাম"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      type: "text",
      placeholder: "নাম লিখুন"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.name ? _c("div", _vm._l(_vm.errors.name, function (nameError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(nameError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("ডাক্তারের\n\t\t\t\t\t\t\t\t\t\t\tনাম(ইংরেজিতে)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.en_name,
      expression: "en_name"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      type: "text",
      placeholder: "নাম লিখুন ইংরেজিতে"
    },
    domProps: {
      value: _vm.en_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.en_name = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.en_name ? _c("div", _vm._l(_vm.errors.en_name, function (en_nameError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(en_nameError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("ডিগ্রী"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.qualification,
      expression: "qualification"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      rows: "3",
      placeholder: "ডিগ্রী লিখুন, যেমনঃ এমবিবিএস; এমপিএইচ "
    },
    domProps: {
      value: _vm.qualification
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.qualification = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.qualification ? _c("div", _vm._l(_vm.errors.qualification, function (qualificationError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(qualificationError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("পদবী")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.position,
      expression: "position"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      rows: "3",
      placeholder: "পদবী লিখুন, যেমনঃ সহকারী অধ্যাপক "
    },
    domProps: {
      value: _vm.position
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.position = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.position ? _c("div", _vm._l(_vm.errors.position, function (positionError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(positionError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("কর্মস্থল")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.working_place,
      expression: "working_place"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      rows: "3",
      placeholder: "কর্মস্থল, যেমনঃ  ঢাকা মেডিকেল কলেজ "
    },
    domProps: {
      value: _vm.working_place
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.working_place = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.working_place ? _c("div", _vm._l(_vm.errors.working_place, function (working_placeError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(working_placeError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("কোন বিষয়ে বিশেষজ্ঞ")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.specialist,
      expression: "specialist"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      rows: "3",
      placeholder: "কোন বিষয়ে বিশেষজ্ঞ, যেমনঃ মেডিসিন , বাতজর ও হৃদরোগ বিশেষজ্ঞ  "
    },
    domProps: {
      value: _vm.specialist
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.specialist = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.specialist ? _c("div", _vm._l(_vm.errors.specialist, function (specialistError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(specialistError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("বিএমডিসি রেজি. নং:"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bmdc_no,
      expression: "bmdc_no"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      type: "text",
      placeholder: "বিএমডিসি রেজি. নং লিখুন "
    },
    domProps: {
      value: _vm.bmdc_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.bmdc_no = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.bmdc_no ? _c("div", _vm._l(_vm.errors.bmdc_no, function (bmdc_noError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(bmdc_noError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("মোবাইল")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mobile,
      expression: "mobile"
    }],
    staticClass: "form-control bangla-font",
    attrs: {
      type: "text",
      placeholder: "মোবাইল নাম্বার দিন "
    },
    domProps: {
      value: _vm.mobile
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.mobile = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.mobile ? _c("div", _vm._l(_vm.errors.mobile, function (mobileError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(mobileError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "bangla-font mb-0 font-weight-bold"
  }, [_vm._v("ছবি")]), _vm._v(" "), _c("input", {
    ref: "image",
    staticClass: "form-control bangla-font",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.getImage($event);
      }
    }
  }), _vm._v(" "), _vm.errors.image ? _c("div", _vm._l(_vm.errors.image, function (imageError, index) {
    return _c("p", {
      key: index,
      staticClass: "text-danger bangla-font font-size-13 mb-0"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(imageError) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_vm._l(_vm.chambers, function (chamber, index) {
    return _c("div", {
      key: index,
      staticClass: "border-1 mt-3"
    }, [_c("label", {
      staticClass: "bangla-font mb-0 font-weight-bold"
    }, [_vm._v("চেম্বার")]), _vm._v(" "), index > 0 ? _c("label", {
      staticClass: "bangla-font mb-0 font-weight-bold float-right text-danger cursor-pointer",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.removeChamber(index);
        }
      }
    }, [_vm._v("এই চেম্বার টি মুছে ফেলুন\n\t\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: chamber.chamber,
        expression: "chamber.chamber"
      }],
      staticClass: "form-control bangla-font mb-2",
      attrs: {
        type: "text",
        placeholder: "চেম্বারের নাম "
      },
      domProps: {
        value: chamber.chamber
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(chamber, "chamber", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: chamber.address,
        expression: "chamber.address"
      }],
      staticClass: "form-control mb-2 bangla-font",
      attrs: {
        rows: "3",
        placeholder: "চেম্বারেরর ঠিকানা"
      },
      domProps: {
        value: chamber.address
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(chamber, "address", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: chamber.visiting_time,
        expression: "chamber.visiting_time"
      }],
      staticClass: "form-control mb-2 bangla-font",
      attrs: {
        rows: "3",
        placeholder: "রোগী দেখার সময়, যেমন প্রতি বুধ ও বৃহস্পতিবার সকাল ১০টা০২টা শুক্রবার বিকাল ৩টা-রাত "
      },
      domProps: {
        value: chamber.visiting_time
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(chamber, "visiting_time", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: chamber.mobiles,
        expression: "chamber.mobiles"
      }],
      staticClass: "form-control mb-2 bangla-font",
      attrs: {
        rows: "3",
        placeholder: "সিরিয়ালের জন্য মোবাইল নাম্বার"
      },
      domProps: {
        value: chamber.mobiles
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(chamber, "mobiles", $event.target.value);
        }
      }
    })]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-success bangla-font",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.AddMoreChamber.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tআরও চেম্বার যোগ করুন\n\t\t\t\t\t\t\t\t\t\t")])], 2), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("p", {
    staticClass: "bangla-font"
  }, [_c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" চিহ্নিত স্থান গুলো\n\t\t\t\t\t\t\t\t\t\t\tঅবশ্যই পূরণ করতে হবে।\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("base-button", {
    staticClass: "my-4 bangla-font",
    attrs: {
      type: "primary"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.storeNewDoctor();
      }
    }
  }, [_vm._v("জমা দিন")])], 1)])])])]], 2)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("modal", {
    attrs: {
      show: _vm.notification_modal,
      gradient: "danger",
      "modal-classes": "modal-danger modal-dialog-top"
    },
    on: {
      "update:show": function updateShow($event) {
        _vm.notification_modal = $event;
      }
    }
  }, [_c("div", {
    staticClass: "py-3 text-center"
  }, [_c("i", {
    staticClass: "ni ni-bell-55 ni-3x"
  }), _vm._v(" "), _c("h1", {
    staticClass: "mt-4 bangla-font"
  }, [_vm._v(_vm._s(_vm.notifination_header))]), _vm._v(" "), _c("p", {
    staticClass: "bangla-font"
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.notifination_message) + "\n\t\t\t\t\t\t")])]), _vm._v(" "), _c("template", {
    slot: "footer"
  }, [_c("base-button", {
    staticClass: "bangla-font",
    attrs: {
      type: "white"
    },
    on: {
      click: function click($event) {
        _vm.notification_modal = false;
      }
    }
  }, [_vm._v("কেটে\n\t\t\t\t\t\t\tদিন")])], 1)], 2)], 1)])])]);
};

var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal.show {\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css&");

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

/***/ "./themes/human/components/Modal.vue":
/*!*******************************************!*\
  !*** ./themes/human/components/Modal.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_5324bebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=5324bebd& */ "./themes/human/components/Modal.vue?vue&type=template&id=5324bebd&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./themes/human/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_5324bebd_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css& */ "./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_5324bebd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_5324bebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./themes/human/components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css&":
/*!****************************************************************************************!*\
  !*** ./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_5324bebd_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=style&index=0&id=5324bebd&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_5324bebd_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_5324bebd_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_5324bebd_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_5324bebd_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./themes/human/components/Modal.vue?vue&type=template&id=5324bebd&":
/*!**************************************************************************!*\
  !*** ./themes/human/components/Modal.vue?vue&type=template&id=5324bebd& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_5324bebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=5324bebd& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/components/Modal.vue?vue&type=template&id=5324bebd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_5324bebd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_5324bebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./themes/human/views/pages/DoctorAddForm.vue":
/*!****************************************************!*\
  !*** ./themes/human/views/pages/DoctorAddForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoctorAddForm_vue_vue_type_template_id_611dab81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoctorAddForm.vue?vue&type=template&id=611dab81& */ "./themes/human/views/pages/DoctorAddForm.vue?vue&type=template&id=611dab81&");
/* harmony import */ var _DoctorAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoctorAddForm.vue?vue&type=script&lang=js& */ "./themes/human/views/pages/DoctorAddForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DoctorAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoctorAddForm_vue_vue_type_template_id_611dab81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DoctorAddForm_vue_vue_type_template_id_611dab81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "themes/human/views/pages/DoctorAddForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./themes/human/views/pages/DoctorAddForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./themes/human/views/pages/DoctorAddForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoctorAddForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/DoctorAddForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorAddForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./themes/human/views/pages/DoctorAddForm.vue?vue&type=template&id=611dab81&":
/*!***********************************************************************************!*\
  !*** ./themes/human/views/pages/DoctorAddForm.vue?vue&type=template&id=611dab81& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorAddForm_vue_vue_type_template_id_611dab81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoctorAddForm.vue?vue&type=template&id=611dab81& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./themes/human/views/pages/DoctorAddForm.vue?vue&type=template&id=611dab81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorAddForm_vue_vue_type_template_id_611dab81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorAddForm_vue_vue_type_template_id_611dab81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);