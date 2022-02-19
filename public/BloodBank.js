(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BloodBank"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/BasePagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/BasePagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "base-pagination",
  props: {
    pageCount: {
      type: Number,
      "default": 0,
      description: "Pagination page count. This should be specified in combination with perPage"
    },
    perPage: {
      type: Number,
      "default": 10,
      description: "Pagination per page. Should be specified with total or pageCount"
    },
    total: {
      type: Number,
      "default": 0,
      description: "Can be specified instead of pageCount. The page count in this case will be total/perPage"
    },
    value: {
      type: Number,
      "default": 1,
      description: "Pagination value"
    },
    size: {
      type: String,
      "default": "",
      description: "Pagination size"
    },
    align: {
      type: String,
      "default": "",
      description: "Pagination alignment (e.g center|start|end)"
    },
    emptyMessage: {
      type: String,
      "default": "No Result Found",
      description: "Pagination alignment (e.g center|start|end)"
    }
  },
  computed: {
    totalPages: function totalPages() {
      if (this.pageCount > 0) return this.pageCount;

      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }

      return 1;
    },
    pagesToDisplay: function pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }

      return this.defaultPagesToDisplay;
    },
    minPage: function minPage() {
      if (this.value >= this.pagesToDisplay) {
        var pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        var newMaxPage = pagesToAdd + this.value;

        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }

        return this.value - pagesToAdd;
      } else {
        return 1;
      }
    },
    maxPage: function maxPage() {
      if (this.value >= this.pagesToDisplay) {
        var pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        var newMaxPage = pagesToAdd + this.value;

        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.pagesToDisplay;
      }
    }
  },
  data: function data() {
    return {
      defaultPagesToDisplay: 5
    };
  },
  methods: {
    range: function range(min, max) {
      var arr = [];

      for (var i = min; i <= max; i++) {
        arr.push(i);
      }

      return arr;
    },
    changePage: function changePage(item) {
      this.$emit("input", item);
    },
    nextPage: function nextPage() {
      if (this.value < this.totalPages) {
        this.$emit("input", this.value + 1);
      }
    },
    prevPage: function prevPage() {
      if (this.value > 1) {
        this.$emit("input", this.value - 1);
      }
    }
  },
  watch: {
    perPage: function perPage() {
      this.$emit("input", 1);
    },
    total: function total() {
      this.$emit("input", 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BloodBankHero",
  props: {
    bloodGroups: {
      type: Array,
      required: false
    }
  },
  data: function data() {
    return {
      selectedGroup: {}
    };
  },
  methods: {
    setSelected: function setSelected(event) {
      this.$emit("selectBloodGroup", event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal.vue */ "./resources/js/default/components/Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "single-donor",
  props: {
    donor: {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/BloodBank.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/BloodBank.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_bloodBank_BloodBankHero_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/bloodBank/BloodBankHero.vue */ "./resources/js/default/components/bloodBank/BloodBankHero.vue");
/* harmony import */ var _components_bloodBank_SingleDonor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/bloodBank/SingleDonor.vue */ "./resources/js/default/components/bloodBank/SingleDonor.vue");
/* harmony import */ var _components_BasePagination_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BasePagination.vue */ "./resources/js/default/components/BasePagination.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "BloodBank",
  components: {
    BloodbankHero: _components_bloodBank_BloodBankHero_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SingleDonor: _components_bloodBank_SingleDonor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BasePagination: _components_BasePagination_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      title: "সকল গ্রুপের রক্তদাতাদের তালিখা",
      emptyMessage: "দুঃখিত !... কোন রক্ত দাতা খুঁজে পাওয়া যায় নি ।",
      blood_groups: [],
      blood_donors: [],
      currentPage: 1,
      total: 0,
      perPage: 12,
      selected_group: "",
      isLoading: false,
      fullPage: true,
      docts: "docts"
    };
  },
  mounted: function mounted() {
    this.getAllBloodGroup();
    this.getDonorList();
  },
  methods: {
    /**
     * Get all blood groups
     */
    getAllBloodGroup: function getAllBloodGroup() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/get-all-blood-groups").then(function (response) {
        if (response.data.success) {
          response.data.blood_groups.unshift({
            name: "সকল গ্রুপের",
            id: ""
          });
          _this.blood_groups = response.data.blood_groups;
        }
      })["catch"](function (error) {});
    },

    /**
     * Get blood  group
     */
    getSelectedBloodGroup: function getSelectedBloodGroup(selectedGroup) {
      this.title = selectedGroup.name + " গ্রুপের রক্ত দাতাদের তালিখা";
      this.selected_group = selectedGroup.id;
      this.currentPage = 1;
      this.getDonorList();
    },

    /**
     * Get blood donors
     */
    getDonorList: function getDonorList() {
      var _this2 = this;

      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/get-blood-donor-list", {
        perPage: this.perPage,
        page: this.currentPage,
        blood_group: this.selected_group
      }).then(function (response) {
        if (response.data.success) {
          _this2.blood_donors = response.data.blood_donors.data;
          _this2.total = response.data.blood_donors.total;
          _this2.isLoading = false;
        } else {
          _this2.isLoading = false;
        }
      })["catch"](function (error) {
        _this2.isLoading = false;
      });
    },
    changePage: function changePage(page) {
      this.currentPage = page;
      this.getDonorList();
    }
  },
  metaInfo: {
    title: "ব্লাড ব্যাংক"
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/BasePagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/BasePagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "base-pagination",
  props: {
    pageCount: {
      type: Number,
      "default": 0,
      description: "Pagination page count. This should be specified in combination with perPage"
    },
    perPage: {
      type: Number,
      "default": 10,
      description: "Pagination per page. Should be specified with total or pageCount"
    },
    total: {
      type: Number,
      "default": 0,
      description: "Can be specified instead of pageCount. The page count in this case will be total/perPage"
    },
    value: {
      type: Number,
      "default": 1,
      description: "Pagination value"
    },
    size: {
      type: String,
      "default": "",
      description: "Pagination size"
    },
    align: {
      type: String,
      "default": "",
      description: "Pagination alignment (e.g center|start|end)"
    },
    emptyMessage: {
      type: String,
      "default": "No Result Found",
      description: "Pagination alignment (e.g center|start|end)"
    }
  },
  computed: {
    totalPages: function totalPages() {
      if (this.pageCount > 0) return this.pageCount;

      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }

      return 1;
    },
    pagesToDisplay: function pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }

      return this.defaultPagesToDisplay;
    },
    minPage: function minPage() {
      if (this.value >= this.pagesToDisplay) {
        var pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        var newMaxPage = pagesToAdd + this.value;

        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }

        return this.value - pagesToAdd;
      } else {
        return 1;
      }
    },
    maxPage: function maxPage() {
      if (this.value >= this.pagesToDisplay) {
        var pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        var newMaxPage = pagesToAdd + this.value;

        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.pagesToDisplay;
      }
    }
  },
  data: function data() {
    return {
      defaultPagesToDisplay: 5
    };
  },
  methods: {
    range: function range(min, max) {
      var arr = [];

      for (var i = min; i <= max; i++) {
        arr.push(i);
      }

      return arr;
    },
    changePage: function changePage(item) {
      this.$emit("input", item);
    },
    nextPage: function nextPage() {
      if (this.value < this.totalPages) {
        this.$emit("input", this.value + 1);
      }
    },
    prevPage: function prevPage() {
      if (this.value > 1) {
        this.$emit("input", this.value - 1);
      }
    }
  },
  watch: {
    perPage: function perPage() {
      this.$emit("input", 1);
    },
    total: function total() {
      this.$emit("input", 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BloodBankHero",
  props: {
    bloodGroups: {
      type: Array,
      required: false
    }
  },
  data: function data() {
    return {
      selectedGroup: {}
    };
  },
  methods: {
    setSelected: function setSelected(event) {
      this.$emit("selectBloodGroup", event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal.vue */ "./resources/js/templateOne/components/Modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "single-donor",
  props: {
    donor: {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_bloodBank_BloodBankHero_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/bloodBank/BloodBankHero.vue */ "./resources/js/templateOne/components/bloodBank/BloodBankHero.vue");
/* harmony import */ var _components_bloodBank_SingleDonor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/bloodBank/SingleDonor.vue */ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue");
/* harmony import */ var _components_BasePagination_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BasePagination.vue */ "./resources/js/templateOne/components/BasePagination.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "BloodBank",
  components: {
    BloodbankHero: _components_bloodBank_BloodBankHero_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SingleDonor: _components_bloodBank_SingleDonor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BasePagination: _components_BasePagination_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      title: "সকল গ্রুপের রক্তদাতাদের তালিখা",
      emptyMessage: "দুঃখিত !... কোন রক্ত দাতা খুঁজে পাওয়া যায় নি ।",
      blood_groups: [],
      blood_donors: [],
      currentPage: 1,
      total: 0,
      perPage: 12,
      selected_group: "",
      isLoading: false,
      fullPage: true,
      docts: "docts"
    };
  },
  mounted: function mounted() {
    this.getAllBloodGroup();
    this.getDonorList();
  },
  methods: {
    /**
     * Get all blood groups
     */
    getAllBloodGroup: function getAllBloodGroup() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/get-all-blood-groups").then(function (response) {
        if (response.data.success) {
          response.data.blood_groups.unshift({
            name: "সকল গ্রুপের",
            id: ""
          });
          _this.blood_groups = response.data.blood_groups;
        }
      })["catch"](function (error) {});
    },

    /**
     * Get blood  group
     */
    getSelectedBloodGroup: function getSelectedBloodGroup(selectedGroup) {
      this.title = selectedGroup.name + " গ্রুপের রক্ত দাতাদের তালিখা";
      this.selected_group = selectedGroup.id;
      this.currentPage = 1;
      this.getDonorList();
    },

    /**
     * Get blood donors
     */
    getDonorList: function getDonorList() {
      var _this2 = this;

      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/get-blood-donor-list", {
        perPage: this.perPage,
        page: this.currentPage,
        blood_group: this.selected_group
      }).then(function (response) {
        if (response.data.success) {
          _this2.blood_donors = response.data.blood_donors.data;
          _this2.total = response.data.blood_donors.total;
          _this2.isLoading = false;
        } else {
          _this2.isLoading = false;
        }
      })["catch"](function (error) {
        _this2.isLoading = false;
      });
    },
    changePage: function changePage(page) {
      this.currentPage = page;
      this.getDonorList();
    }
  },
  metaInfo: {
    title: "ব্লাড ব্যাংক"
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np {\n\tmargin-bottom: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np {\n\tmargin-bottom: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/BasePagination.vue?vue&type=template&id=83eae4b0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/BasePagination.vue?vue&type=template&id=83eae4b0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _vm.total > 0
    ? _c(
        "ul",
        {
          staticClass: "pagination",
          class: [
            _vm.size && "pagination-" + _vm.size,
            _vm.align && "justify-content-" + _vm.align
          ]
        },
        [
          _c(
            "li",
            {
              staticClass: "page-item prev-page",
              class: { disabled: _vm.value === 1 }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { "aria-label": "Previous" },
                  on: { click: _vm.prevPage }
                },
                [_vm._m(0)]
              )
            ]
          ),
          _vm._v(" "),
          _vm._l(_vm.range(_vm.minPage, _vm.maxPage), function(item) {
            return _c(
              "li",
              {
                key: item,
                staticClass: "page-item",
                class: { active: _vm.value === item }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    on: {
                      click: function($event) {
                        return _vm.changePage(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "page-item next-page",
              class: { disabled: _vm.value === _vm.totalPages }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { "aria-label": "Next" },
                  on: { click: _vm.nextPage }
                },
                [_vm._m(1)]
              )
            ]
          )
        ],
        2
      )
    : _c("div", [
        _c("p", { staticClass: "text-danger bangla-font" }, [
          _vm._v(_vm._s(_vm.emptyMessage))
        ])
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { "aria-hidden": "true" } }, [
      _c("i", {
        staticClass: "fa fa-angle-left",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { "aria-hidden": "true" } }, [
      _c("i", {
        staticClass: "fa fa-angle-right",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=template&id=766c6aea&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=template&id=766c6aea& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("রক্তের গ্রুপ বাছাই করুন")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { id: "inputWrapper" } },
                  [
                    _c("v-select", {
                      key: _vm.bloodGroups.id,
                      staticClass: "bangla-font",
                      attrs: {
                        single: "",
                        options: _vm.bloodGroups,
                        label: "name",
                        placeholder: "রক্তের গ্রুপ বাছাই করুন",
                        clearable: false
                      },
                      on: {
                        "update:options": function($event) {
                          _vm.bloodGroups = $event
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=template&id=23bceef8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=template&id=23bceef8& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _vm.donor.image
        ? _c("img", {
            staticClass:
              "\n\t\t\t\trounded-circle\n\t\t\t\timg-center img-fluid\n\t\t\t\tshadow\n\t\t\t\tshadow-lg--hover\n\t\t\t\tmb-2\n\t\t\t\tlist-image\n\t\t\t",
            staticStyle: { width: "100px" },
            attrs: { src: "/" + _vm.donor.image, alt: _vm.donor.name }
          })
        : _c("img", {
            directives: [
              {
                name: "lazy",
                rawName: "v-lazy",
                value: "img/theme/doctor.jpg",
                expression: "'img/theme/doctor.jpg'"
              }
            ],
            staticClass:
              "\n\t\t\t\trounded-circle\n\t\t\t\timg-center img-fluid\n\t\t\t\tshadow\n\t\t\t\tshadow-lg--hover\n\t\t\t\tmb-2\n\t\t\t\tlist-image\n\t\t\t",
            staticStyle: { width: "100px" }
          }),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font name font-weight-bold" }, [
        _vm._v(_vm._s(_vm.donor.name))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font specialist" }, [
        _vm._v(_vm._s(_vm.donor.blood_group))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font mobile" }, [
        _vm._v("\n\t\t\tমোবাইলঃ " + _vm._s(_vm.donor.mobile)),
        _vm.donor.mobile2 ? _c("span", [_vm._v(",")]) : _vm._e(),
        _vm._v("\n\t\t\t" + _vm._s(_vm.donor.mobile2) + "\n\t\t")
      ]),
      _vm._v(" "),
      _vm.donor.email
        ? _c("p", { staticClass: "bangla-font mobile" }, [
            _vm._v("\n\t\t\tইমেইলঃ " + _vm._s(_vm.donor.email) + "\n\t\t")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("p", { staticClass: "bangla-font working_place" }, [
        _vm._v(_vm._s(_vm.donor.address))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/BloodBank.vue?vue&type=template&id=1ea64fa4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/default/views/pages/BloodBank.vue?vue&type=template&id=1ea64fa4& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("BloodbankHero", {
        attrs: { "blood-groups": _vm.blood_groups },
        on: {
          selectBloodGroup: function($event) {
            return _vm.getSelectedBloodGroup($event)
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
              _vm._l(_vm.blood_donors, function(donor, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-3 p-3" },
                  [_c("single-donor", { attrs: { donor: donor } })],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          !_vm.isLoading
            ? _c(
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
            : _vm._e()
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/BasePagination.vue?vue&type=template&id=4bc9f69a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/BasePagination.vue?vue&type=template&id=4bc9f69a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm.total > 0
    ? _c(
        "ul",
        {
          staticClass: "pagination",
          class: [
            _vm.size && "pagination-" + _vm.size,
            _vm.align && "justify-content-" + _vm.align
          ]
        },
        [
          _c(
            "li",
            {
              staticClass: "page-item prev-page",
              class: { disabled: _vm.value === 1 }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { "aria-label": "Previous" },
                  on: { click: _vm.prevPage }
                },
                [_vm._m(0)]
              )
            ]
          ),
          _vm._v(" "),
          _vm._l(_vm.range(_vm.minPage, _vm.maxPage), function(item) {
            return _c(
              "li",
              {
                key: item,
                staticClass: "page-item",
                class: { active: _vm.value === item }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    on: {
                      click: function($event) {
                        return _vm.changePage(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "page-item next-page",
              class: { disabled: _vm.value === _vm.totalPages }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { "aria-label": "Next" },
                  on: { click: _vm.nextPage }
                },
                [_vm._m(1)]
              )
            ]
          )
        ],
        2
      )
    : _c("div", [
        _c("p", { staticClass: "text-danger bangla-font" }, [
          _vm._v(_vm._s(_vm.emptyMessage))
        ])
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { "aria-hidden": "true" } }, [
      _c("i", {
        staticClass: "fa fa-angle-left",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { "aria-hidden": "true" } }, [
      _c("i", {
        staticClass: "fa fa-angle-right",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=template&id=e1cc9f82&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=template&id=e1cc9f82& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("রক্তের গ্রুপ বাছাই করুন")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { id: "inputWrapper" } },
                  [
                    _c("v-select", {
                      key: _vm.bloodGroups.id,
                      staticClass: "bangla-font",
                      attrs: {
                        single: "",
                        options: _vm.bloodGroups,
                        label: "name",
                        placeholder: "রক্তের গ্রুপ বাছাই করুন",
                        clearable: false
                      },
                      on: {
                        "update:options": function($event) {
                          _vm.bloodGroups = $event
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=template&id=7835858d&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=template&id=7835858d& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
              attrs: { href: "#" }
            },
            [_vm._v("\n\t\t\t\t" + _vm._s(_vm.donor.name) + "\n\t\t\t")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "provider-details__provider-specialty bangla-font specialist"
          },
          [
            _vm._v(
              "\n\t\t\tরক্তের গ্রুপঃ " +
                _vm._s(_vm.donor.blood_group) +
                "\n\t\t"
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "provider-card__provider-img" }, [
        _vm.donor.image
          ? _c("img", {
              staticClass: "provider-img provider-image",
              attrs: { src: "/" + _vm.donor.image, alt: _vm.donor.name }
            })
          : _c("img", {
              staticClass: "provider-img provider-image",
              attrs: {
                alt: _vm.donor.name,
                src: "/img/theme/blood-donor-profile.png"
              }
            })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "provider-card__provider-strengths" }, [
        _c("ul", { staticClass: "provider-strengths" }, [
          _c(
            "li",
            { staticClass: "provider-strengths__strength-item bangla-font" },
            [
              _vm._v("\n\t\t\t\tমোবাইলঃ " + _vm._s(_vm.donor.mobile)),
              _vm.donor.mobile2 ? _c("span", [_vm._v(",")]) : _vm._e(),
              _vm._v("\n\t\t\t\t" + _vm._s(_vm.donor.mobile2) + "\n\t\t\t")
            ]
          ),
          _vm._v(" "),
          _vm.donor.email
            ? _c(
                "li",
                {
                  staticClass: "provider-strengths__strength-item bangla-font"
                },
                [
                  _vm._v(
                    "\n\t\t\t\tইমেইলঃ " + _vm._s(_vm.donor.email) + "\n\t\t\t"
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "provider-strengths__strength-item bangla-font" },
            [_vm._v("\n\t\t\t\t" + _vm._s(_vm.donor.address) + "\n\t\t\t")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=template&id=f3dee68e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=template&id=f3dee68e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("BloodbankHero", {
        attrs: { "blood-groups": _vm.blood_groups },
        on: {
          selectBloodGroup: function($event) {
            return _vm.getSelectedBloodGroup($event)
          }
        }
      }),
      _vm._v(" "),
      _c("section", { staticClass: "section section-lg pt-0" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("div", { staticClass: "col-12 page-header pb-4 pt-4" }, [
                _c("h2", { staticClass: "bangla-font text-center mb-2 mt-2" }, [
                  _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t\t\t")
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.blood_donors, function(donor, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-3 p-2" },
                  [_c("single-donor", { attrs: { donor: donor } })],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          !_vm.isLoading
            ? _c(
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
            : _vm._e()
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/default/components/BasePagination.vue":
/*!************************************************************!*\
  !*** ./resources/js/default/components/BasePagination.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasePagination_vue_vue_type_template_id_83eae4b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=template&id=83eae4b0& */ "./resources/js/default/components/BasePagination.vue?vue&type=template&id=83eae4b0&");
/* harmony import */ var _BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=script&lang=js& */ "./resources/js/default/components/BasePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasePagination_vue_vue_type_template_id_83eae4b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasePagination_vue_vue_type_template_id_83eae4b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/components/BasePagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/components/BasePagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/default/components/BasePagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasePagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/BasePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/components/BasePagination.vue?vue&type=template&id=83eae4b0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/default/components/BasePagination.vue?vue&type=template&id=83eae4b0& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_83eae4b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasePagination.vue?vue&type=template&id=83eae4b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/BasePagination.vue?vue&type=template&id=83eae4b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_83eae4b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_83eae4b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/default/components/bloodBank/BloodBankHero.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/BloodBankHero.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BloodBankHero_vue_vue_type_template_id_766c6aea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloodBankHero.vue?vue&type=template&id=766c6aea& */ "./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=template&id=766c6aea&");
/* harmony import */ var _BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodBankHero.vue?vue&type=script&lang=js& */ "./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BloodBankHero_vue_vue_type_template_id_766c6aea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BloodBankHero_vue_vue_type_template_id_766c6aea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/components/bloodBank/BloodBankHero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBankHero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=template&id=766c6aea&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=template&id=766c6aea& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_template_id_766c6aea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBankHero.vue?vue&type=template&id=766c6aea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/BloodBankHero.vue?vue&type=template&id=766c6aea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_template_id_766c6aea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_template_id_766c6aea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/default/components/bloodBank/SingleDonor.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/SingleDonor.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleDonor_vue_vue_type_template_id_23bceef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleDonor.vue?vue&type=template&id=23bceef8& */ "./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=template&id=23bceef8&");
/* harmony import */ var _SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleDonor.vue?vue&type=script&lang=js& */ "./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleDonor.vue?vue&type=style&index=0&lang=css& */ "./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleDonor_vue_vue_type_template_id_23bceef8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleDonor_vue_vue_type_template_id_23bceef8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/components/bloodBank/SingleDonor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=template&id=23bceef8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=template&id=23bceef8& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_template_id_23bceef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=template&id=23bceef8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/components/bloodBank/SingleDonor.vue?vue&type=template&id=23bceef8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_template_id_23bceef8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_template_id_23bceef8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/default/views/pages/BloodBank.vue":
/*!********************************************************!*\
  !*** ./resources/js/default/views/pages/BloodBank.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BloodBank_vue_vue_type_template_id_1ea64fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloodBank.vue?vue&type=template&id=1ea64fa4& */ "./resources/js/default/views/pages/BloodBank.vue?vue&type=template&id=1ea64fa4&");
/* harmony import */ var _BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodBank.vue?vue&type=script&lang=js& */ "./resources/js/default/views/pages/BloodBank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BloodBank_vue_vue_type_template_id_1ea64fa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BloodBank_vue_vue_type_template_id_1ea64fa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/default/views/pages/BloodBank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/default/views/pages/BloodBank.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/default/views/pages/BloodBank.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/BloodBank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/default/views/pages/BloodBank.vue?vue&type=template&id=1ea64fa4&":
/*!***************************************************************************************!*\
  !*** ./resources/js/default/views/pages/BloodBank.vue?vue&type=template&id=1ea64fa4& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_template_id_1ea64fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBank.vue?vue&type=template&id=1ea64fa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/default/views/pages/BloodBank.vue?vue&type=template&id=1ea64fa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_template_id_1ea64fa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_template_id_1ea64fa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/components/BasePagination.vue":
/*!****************************************************************!*\
  !*** ./resources/js/templateOne/components/BasePagination.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasePagination_vue_vue_type_template_id_4bc9f69a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=template&id=4bc9f69a& */ "./resources/js/templateOne/components/BasePagination.vue?vue&type=template&id=4bc9f69a&");
/* harmony import */ var _BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePagination.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/components/BasePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasePagination_vue_vue_type_template_id_4bc9f69a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasePagination_vue_vue_type_template_id_4bc9f69a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/components/BasePagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/components/BasePagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/templateOne/components/BasePagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasePagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/BasePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/components/BasePagination.vue?vue&type=template&id=4bc9f69a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/templateOne/components/BasePagination.vue?vue&type=template&id=4bc9f69a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_4bc9f69a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasePagination.vue?vue&type=template&id=4bc9f69a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/BasePagination.vue?vue&type=template&id=4bc9f69a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_4bc9f69a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasePagination_vue_vue_type_template_id_4bc9f69a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/BloodBankHero.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/BloodBankHero.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BloodBankHero_vue_vue_type_template_id_e1cc9f82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloodBankHero.vue?vue&type=template&id=e1cc9f82& */ "./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=template&id=e1cc9f82&");
/* harmony import */ var _BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodBankHero.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BloodBankHero_vue_vue_type_template_id_e1cc9f82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BloodBankHero_vue_vue_type_template_id_e1cc9f82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/components/bloodBank/BloodBankHero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBankHero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=template&id=e1cc9f82&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=template&id=e1cc9f82& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_template_id_e1cc9f82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBankHero.vue?vue&type=template&id=e1cc9f82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/BloodBankHero.vue?vue&type=template&id=e1cc9f82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_template_id_e1cc9f82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBankHero_vue_vue_type_template_id_e1cc9f82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/SingleDonor.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleDonor_vue_vue_type_template_id_7835858d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleDonor.vue?vue&type=template&id=7835858d& */ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=template&id=7835858d&");
/* harmony import */ var _SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleDonor.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleDonor.vue?vue&type=style&index=0&lang=css& */ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleDonor_vue_vue_type_template_id_7835858d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleDonor_vue_vue_type_template_id_7835858d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/components/bloodBank/SingleDonor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=template&id=7835858d&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=template&id=7835858d& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_template_id_7835858d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleDonor.vue?vue&type=template&id=7835858d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/components/bloodBank/SingleDonor.vue?vue&type=template&id=7835858d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_template_id_7835858d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleDonor_vue_vue_type_template_id_7835858d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/templateOne/views/pages/BloodBank.vue":
/*!************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/BloodBank.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BloodBank_vue_vue_type_template_id_f3dee68e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloodBank.vue?vue&type=template&id=f3dee68e& */ "./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=template&id=f3dee68e&");
/* harmony import */ var _BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodBank.vue?vue&type=script&lang=js& */ "./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BloodBank_vue_vue_type_template_id_f3dee68e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BloodBank_vue_vue_type_template_id_f3dee68e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/templateOne/views/pages/BloodBank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=template&id=f3dee68e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=template&id=f3dee68e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_template_id_f3dee68e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodBank.vue?vue&type=template&id=f3dee68e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templateOne/views/pages/BloodBank.vue?vue&type=template&id=f3dee68e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_template_id_f3dee68e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodBank_vue_vue_type_template_id_f3dee68e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);