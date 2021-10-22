(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover-template.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover-template.js ***!
  \******************************************************************************************/
/*! exports provided: BVPopoverTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVPopoverTemplate", function() { return BVPopoverTemplate; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _tooltip_helpers_bv_tooltip_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tooltip/helpers/bv-tooltip-template */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js");



 // @vue/component

var BVPopoverTemplate = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__["NAME_POPOVER_TEMPLATE"],
  extends: _tooltip_helpers_bv_tooltip_template__WEBPACK_IMPORTED_MODULE_3__["BVTooltipTemplate"],
  computed: {
    templateType: function templateType() {
      return 'popover';
    }
  },
  methods: {
    renderTemplate: function renderTemplate(h) {
      var title = this.title,
          content = this.content; // Title and content could be a scoped slot function

      var $title = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(title) ? title({}) : title;
      var $content = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(content) ? content({}) : content; // Directive usage only

      var titleDomProps = this.html && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(title) ? {
        innerHTML: title
      } : {};
      var contentDomProps = this.html && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(content) ? {
        innerHTML: content
      } : {};
      return h('div', {
        staticClass: 'popover b-popover',
        class: this.templateClasses,
        attrs: this.templateAttributes,
        on: this.templateListeners
      }, [h('div', {
        staticClass: 'arrow',
        ref: 'arrow'
      }), Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isUndefinedOrNull"])($title) || $title === '' ?
      /* istanbul ignore next */
      h() : h('h3', {
        staticClass: 'popover-header',
        domProps: titleDomProps
      }, [$title]), Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isUndefinedOrNull"])($content) || $content === '' ?
      /* istanbul ignore next */
      h() : h('div', {
        staticClass: 'popover-body',
        domProps: contentDomProps
      }, [$content])]);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover.js ***!
  \*********************************************************************************/
/*! exports provided: BVPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVPopover", function() { return BVPopover; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tooltip/helpers/bv-tooltip */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js");
/* harmony import */ var _bv_popover_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bv-popover-template */ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover-template.js");
// Popover "Class" (Built as a renderless Vue instance)
// Inherits from BVTooltip
//
// Handles trigger events, etc.
// Instantiates template on demand



 // @vue/component

var BVPopover = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__["NAME_POPOVER_HELPER"],
  extends: _tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_2__["BVTooltip"],
  computed: {
    // Overwrites BVTooltip
    templateType: function templateType() {
      return 'popover';
    }
  },
  methods: {
    getTemplate: function getTemplate() {
      // Overwrites BVTooltip
      return _bv_popover_template__WEBPACK_IMPORTED_MODULE_3__["BVPopoverTemplate"];
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-popper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-popper.js ***!
  \********************************************************************************/
/*! exports provided: props, BVPopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVPopper", function() { return BVPopper; });
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _transition_bv_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../transition/bv-transition */ "./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js");
// Base on-demand component for tooltip / popover templates
//
// Currently:
//   Responsible for positioning and transitioning the template
//   Templates are only instantiated when shown, and destroyed when hidden
//









 // --- Constants ---

var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOPLEFT: 'top',
  TOPRIGHT: 'top',
  RIGHTTOP: 'right',
  RIGHTBOTTOM: 'right',
  BOTTOMLEFT: 'bottom',
  BOTTOMRIGHT: 'bottom',
  LEFTTOP: 'left',
  LEFTBOTTOM: 'left'
};
var OffsetMap = {
  AUTO: 0,
  TOPLEFT: -1,
  TOP: 0,
  TOPRIGHT: +1,
  RIGHTTOP: -1,
  RIGHT: 0,
  RIGHTBOTTOM: +1,
  BOTTOMLEFT: -1,
  BOTTOM: 0,
  BOTTOMRIGHT: +1,
  LEFTTOP: -1,
  LEFT: 0,
  LEFTBOTTOM: +1
}; // --- Props ---

var props = {
  // The minimum distance (in `px`) from the edge of the
  // tooltip/popover that the arrow can be positioned
  arrowPadding: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_4__["PROP_TYPE_NUMBER_STRING"], 6),
  // 'scrollParent', 'viewport', 'window', or `Element`
  boundary: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])([_constants_safe_types__WEBPACK_IMPORTED_MODULE_5__["HTMLElement"], _constants_props__WEBPACK_IMPORTED_MODULE_4__["PROP_TYPE_STRING"]], 'scrollParent'),
  // Tooltip/popover will try and stay away from
  // boundary edge by this many pixels
  boundaryPadding: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_4__["PROP_TYPE_NUMBER_STRING"], 5),
  fallbackPlacement: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_4__["PROP_TYPE_ARRAY_STRING"], 'flip'),
  offset: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_4__["PROP_TYPE_NUMBER_STRING"], 0),
  placement: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_4__["PROP_TYPE_STRING"], 'top'),
  // Element that the tooltip/popover is positioned relative to
  target: Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__["makeProp"])([_constants_safe_types__WEBPACK_IMPORTED_MODULE_5__["HTMLElement"], _constants_safe_types__WEBPACK_IMPORTED_MODULE_5__["SVGElement"]])
}; // --- Main component ---
// @vue/component

var BVPopper = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_1__["Vue"].extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__["NAME_POPPER"],
  props: props,
  data: function data() {
    return {
      // reactive props set by parent
      noFade: false,
      // State related data
      localShow: true,
      attachment: this.getAttachment(this.placement)
    };
  },
  computed: {
    /* istanbul ignore next */
    templateType: function templateType() {
      // Overridden by template component
      return 'unknown';
    },
    popperConfig: function popperConfig() {
      var _this = this;

      var placement = this.placement;
      return {
        placement: this.getAttachment(placement),
        modifiers: {
          offset: {
            offset: this.getOffset(placement)
          },
          flip: {
            behavior: this.fallbackPlacement
          },
          // `arrow.element` can also be a reference to an HTML Element
          // maybe we should make this a `$ref` in the templates?
          arrow: {
            element: '.arrow'
          },
          preventOverflow: {
            padding: this.boundaryPadding,
            boundariesElement: this.boundary
          }
        },
        onCreate: function onCreate(data) {
          // Handle flipping arrow classes
          if (data.originalPlacement !== data.placement) {
            /* istanbul ignore next: can't test in JSDOM */
            _this.popperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          // Handle flipping arrow classes
          _this.popperPlacementChange(data);
        }
      };
    }
  },
  created: function created() {
    var _this2 = this;

    // Note: We are created on-demand, and should be guaranteed that
    // DOM is rendered/ready by the time the created hook runs
    this.$_popper = null; // Ensure we show as we mount

    this.localShow = true; // Create popper instance before shown

    this.$on(_constants_events__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_SHOW"], function (el) {
      _this2.popperCreate(el);
    }); // Self destruct handler

    var handleDestroy = function handleDestroy() {
      _this2.$nextTick(function () {
        // In a `requestAF()` to release control back to application
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["requestAF"])(function () {
          _this2.$destroy();
        });
      });
    }; // Self destruct if parent destroyed


    this.$parent.$once(_constants_events__WEBPACK_IMPORTED_MODULE_3__["HOOK_EVENT_NAME_DESTROYED"], handleDestroy); // Self destruct after hidden

    this.$once(_constants_events__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_HIDDEN"], handleDestroy);
  },
  beforeMount: function beforeMount() {
    // Ensure that the attachment position is correct before mounting
    // as our propsData is added after `new Template({...})`
    this.attachment = this.getAttachment(this.placement);
  },
  updated: function updated() {
    // Update popper if needed
    // TODO: Should this be a watcher on `this.popperConfig` instead?
    this.updatePopper();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyPopper();
  },
  destroyed: function destroyed() {
    // Make sure template is removed from DOM
    var el = this.$el;
    el && el.parentNode && el.parentNode.removeChild(el);
  },
  methods: {
    // "Public" method to trigger hide template
    hide: function hide() {
      this.localShow = false;
    },
    // Private
    getAttachment: function getAttachment(placement) {
      return AttachmentMap[String(placement).toUpperCase()] || 'auto';
    },
    getOffset: function getOffset(placement) {
      if (!this.offset) {
        // Could set a ref for the arrow element
        var arrow = this.$refs.arrow || Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["select"])('.arrow', this.$el);
        var arrowOffset = Object(_utils_number__WEBPACK_IMPORTED_MODULE_7__["toFloat"])(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["getCS"])(arrow).width, 0) + Object(_utils_number__WEBPACK_IMPORTED_MODULE_7__["toFloat"])(this.arrowPadding, 0);

        switch (OffsetMap[String(placement).toUpperCase()] || 0) {
          /* istanbul ignore next: can't test in JSDOM */
          case +1:
            /* istanbul ignore next: can't test in JSDOM */
            return "+50%p - ".concat(arrowOffset, "px");

          /* istanbul ignore next: can't test in JSDOM */

          case -1:
            /* istanbul ignore next: can't test in JSDOM */
            return "-50%p + ".concat(arrowOffset, "px");

          default:
            return 0;
        }
      }
      /* istanbul ignore next */


      return this.offset;
    },
    popperCreate: function popperCreate(el) {
      this.destroyPopper(); // We use `el` rather than `this.$el` just in case the original
      // mountpoint root element type was changed by the template

      this.$_popper = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.target, el, this.popperConfig);
    },
    destroyPopper: function destroyPopper() {
      this.$_popper && this.$_popper.destroy();
      this.$_popper = null;
    },
    updatePopper: function updatePopper() {
      this.$_popper && this.$_popper.scheduleUpdate();
    },
    popperPlacementChange: function popperPlacementChange(data) {
      // Callback used by popper to adjust the arrow placement
      this.attachment = this.getAttachment(data.placement);
    },

    /* istanbul ignore next */
    renderTemplate: function renderTemplate(h) {
      // Will be overridden by templates
      return h('div');
    }
  },
  render: function render(h) {
    var _this3 = this;

    var noFade = this.noFade; // Note: 'show' and 'fade' classes are only appled during transition

    return h(_transition_bv_transition__WEBPACK_IMPORTED_MODULE_9__["BVTransition"], {
      // Transitions as soon as mounted
      props: {
        appear: true,
        noFade: noFade
      },
      on: {
        // Events used by parent component/instance
        beforeEnter: function beforeEnter(el) {
          return _this3.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_SHOW"], el);
        },
        afterEnter: function afterEnter(el) {
          return _this3.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_SHOWN"], el);
        },
        beforeLeave: function beforeLeave(el) {
          return _this3.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_HIDE"], el);
        },
        afterLeave: function afterLeave(el) {
          return _this3.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_3__["EVENT_NAME_HIDDEN"], el);
        }
      }
    }, [this.localShow ? this.renderTemplate(h) : h()]);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js ***!
  \******************************************************************************************/
/*! exports provided: props, BVTooltipTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVTooltipTemplate", function() { return BVTooltipTemplate; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_scoped_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/scoped-style */ "./node_modules/bootstrap-vue/esm/mixins/scoped-style.js");
/* harmony import */ var _bv_popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bv-popper */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-popper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // --- Props ---

var props = {
  // Used only by the directive versions
  html: Object(_utils_props__WEBPACK_IMPORTED_MODULE_5__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_3__["PROP_TYPE_BOOLEAN"], false),
  // Other non-reactive (while open) props are pulled in from BVPopper
  id: Object(_utils_props__WEBPACK_IMPORTED_MODULE_5__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_3__["PROP_TYPE_STRING"])
}; // --- Main component ---
// @vue/component

var BVTooltipTemplate = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__["NAME_TOOLTIP_TEMPLATE"],
  extends: _bv_popper__WEBPACK_IMPORTED_MODULE_7__["BVPopper"],
  mixins: [_mixins_scoped_style__WEBPACK_IMPORTED_MODULE_6__["scopedStyleMixin"]],
  props: props,
  data: function data() {
    // We use data, rather than props to ensure reactivity
    // Parent component will directly set this data
    return {
      title: '',
      content: '',
      variant: null,
      customClass: null,
      interactive: true
    };
  },
  computed: {
    templateType: function templateType() {
      return 'tooltip';
    },
    templateClasses: function templateClasses() {
      var _ref;

      var variant = this.variant,
          attachment = this.attachment,
          templateType = this.templateType;
      return [(_ref = {
        // Disables pointer events to hide the tooltip when the user
        // hovers over its content
        noninteractive: !this.interactive
      }, _defineProperty(_ref, "b-".concat(templateType, "-").concat(variant), variant), _defineProperty(_ref, "bs-".concat(templateType, "-").concat(attachment), attachment), _ref), this.customClass];
    },
    templateAttributes: function templateAttributes() {
      var id = this.id;
      return _objectSpread(_objectSpread({}, this.$parent.$parent.$attrs), {}, {
        id: id,
        role: 'tooltip',
        tabindex: '-1'
      }, this.scopedStyleAttrs);
    },
    templateListeners: function templateListeners() {
      var _this = this;

      // Used for hover/focus trigger listeners
      return {
        mouseenter:
        /* istanbul ignore next */
        function mouseenter(event) {
          _this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_MOUSEENTER"], event);
        },
        mouseleave:
        /* istanbul ignore next */
        function mouseleave(event) {
          _this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_MOUSELEAVE"], event);
        },
        focusin:
        /* istanbul ignore next */
        function focusin(event) {
          _this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_FOCUSIN"], event);
        },
        focusout:
        /* istanbul ignore next */
        function focusout(event) {
          _this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_FOCUSOUT"], event);
        }
      };
    }
  },
  methods: {
    renderTemplate: function renderTemplate(h) {
      var title = this.title; // Title can be a scoped slot function

      var $title = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(title) ? title({}) : title; // Directive versions only

      var domProps = this.html && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(title) ? {
        innerHTML: title
      } : {};
      return h('div', {
        staticClass: 'tooltip b-tooltip',
        class: this.templateClasses,
        attrs: this.templateAttributes,
        on: this.templateListeners
      }, [h('div', {
        staticClass: 'arrow',
        ref: 'arrow'
      }), h('div', {
        staticClass: 'tooltip-inner',
        domProps: domProps
      }, [$title])]);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js ***!
  \*********************************************************************************/
/*! exports provided: BVTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVTooltip", function() { return BVTooltip; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/math */ "./node_modules/bootstrap-vue/esm/utils/math.js");
/* harmony import */ var _utils_noop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/noop */ "./node_modules/bootstrap-vue/esm/utils/noop.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/warn */ "./node_modules/bootstrap-vue/esm/utils/warn.js");
/* harmony import */ var _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/bv-event.class */ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js");
/* harmony import */ var _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js");
/* harmony import */ var _bv_tooltip_template__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bv-tooltip-template */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Tooltip "Class" (Built as a renderless Vue instance)
//
// Handles trigger events, etc.
// Instantiates template on demand

















 // --- Constants ---
// Modal container selector for appending tooltip/popover

var MODAL_SELECTOR = '.modal-content'; // Modal `$root` hidden event

var ROOT_EVENT_NAME_MODAL_HIDDEN = Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["getRootEventName"])(_constants_components__WEBPACK_IMPORTED_MODULE_1__["NAME_MODAL"], _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_HIDDEN"]); // Sidebar container selector for appending tooltip/popover

var SIDEBAR_SELECTOR = '.b-sidebar'; // For finding the container to append to

var CONTAINER_SELECTOR = [MODAL_SELECTOR, SIDEBAR_SELECTOR].join(', '); // For dropdown sniffing

var DROPDOWN_CLASS = 'dropdown';
var DROPDOWN_OPEN_SELECTOR = '.dropdown-menu.show'; // Data attribute to temporary store the `title` attribute's value

var DATA_TITLE_ATTR = 'data-original-title'; // Data specific to popper and template
// We don't use props, as we need reactivity (we can't pass reactive props)

var templateData = {
  // Text string or Scoped slot function
  title: '',
  // Text string or Scoped slot function
  content: '',
  // String
  variant: null,
  // String, Array, Object
  customClass: null,
  // String or array of Strings (overwritten by BVPopper)
  triggers: '',
  // String (overwritten by BVPopper)
  placement: 'auto',
  // String or array of strings
  fallbackPlacement: 'flip',
  // Element or Component reference (or function that returns element) of
  // the element that will have the trigger events bound, and is also
  // default element for positioning
  target: null,
  // HTML ID, Element or Component reference
  container: null,
  // 'body'
  // Boolean
  noFade: false,
  // 'scrollParent', 'viewport', 'window', Element, or Component reference
  boundary: 'scrollParent',
  // Tooltip/popover will try and stay away from
  // boundary edge by this many pixels (Number)
  boundaryPadding: 5,
  // Arrow offset (Number)
  offset: 0,
  // Hover/focus delay (Number or Object)
  delay: 0,
  // Arrow of Tooltip/popover will try and stay away from
  // the edge of tooltip/popover edge by this many pixels
  arrowPadding: 6,
  // Interactive state (Boolean)
  interactive: true,
  // Disabled state (Boolean)
  disabled: false,
  // ID to use for tooltip/popover
  id: null,
  // Flag used by directives only, for HTML content
  html: false
}; // --- Main component ---
// @vue/component

var BVTooltip = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__["NAME_TOOLTIP_HELPER"],
  mixins: [_mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_16__["listenOnRootMixin"]],
  data: function data() {
    return _objectSpread(_objectSpread({}, templateData), {}, {
      // State management data
      activeTrigger: {
        // manual: false,
        hover: false,
        click: false,
        focus: false
      },
      localShow: false
    });
  },
  computed: {
    templateType: function templateType() {
      // Overwritten by BVPopover
      return 'tooltip';
    },
    computedId: function computedId() {
      return this.id || "__bv_".concat(this.templateType, "_").concat(this[_vue__WEBPACK_IMPORTED_MODULE_0__["COMPONENT_UID_KEY"]], "__");
    },
    computedDelay: function computedDelay() {
      // Normalizes delay into object form
      var delay = {
        show: 0,
        hide: 0
      };

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isPlainObject"])(this.delay)) {
        delay.show = Object(_utils_math__WEBPACK_IMPORTED_MODULE_10__["mathMax"])(Object(_utils_number__WEBPACK_IMPORTED_MODULE_12__["toInteger"])(this.delay.show, 0), 0);
        delay.hide = Object(_utils_math__WEBPACK_IMPORTED_MODULE_10__["mathMax"])(Object(_utils_number__WEBPACK_IMPORTED_MODULE_12__["toInteger"])(this.delay.hide, 0), 0);
      } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isNumber"])(this.delay) || Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isString"])(this.delay)) {
        delay.show = delay.hide = Object(_utils_math__WEBPACK_IMPORTED_MODULE_10__["mathMax"])(Object(_utils_number__WEBPACK_IMPORTED_MODULE_12__["toInteger"])(this.delay, 0), 0);
      }

      return delay;
    },
    computedTriggers: function computedTriggers() {
      // Returns the triggers in sorted array form
      // TODO: Switch this to object form for easier lookup
      return Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["concat"])(this.triggers).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__["identity"]).join(' ').trim().toLowerCase().split(/\s+/).sort();
    },
    isWithActiveTrigger: function isWithActiveTrigger() {
      for (var trigger in this.activeTrigger) {
        if (this.activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    },
    computedTemplateData: function computedTemplateData() {
      var title = this.title,
          content = this.content,
          variant = this.variant,
          customClass = this.customClass,
          noFade = this.noFade,
          interactive = this.interactive;
      return {
        title: title,
        content: content,
        variant: variant,
        customClass: customClass,
        noFade: noFade,
        interactive: interactive
      };
    }
  },
  watch: {
    computedTriggers: function computedTriggers(newTriggers, oldTriggers) {
      var _this = this;

      // Triggers have changed, so re-register them

      /* istanbul ignore next */
      if (!Object(_utils_loose_equal__WEBPACK_IMPORTED_MODULE_9__["looseEqual"])(newTriggers, oldTriggers)) {
        this.$nextTick(function () {
          // Disable trigger listeners
          _this.unListen(); // Clear any active triggers that are no longer in the list of triggers


          oldTriggers.forEach(function (trigger) {
            if (!Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(newTriggers, trigger)) {
              if (_this.activeTrigger[trigger]) {
                _this.activeTrigger[trigger] = false;
              }
            }
          }); // Re-enable the trigger listeners

          _this.listen();
        });
      }
    },
    computedTemplateData: function computedTemplateData() {
      // If any of the while open reactive "props" change,
      // ensure that the template updates accordingly
      this.handleTemplateUpdate();
    },
    title: function title(newValue, oldValue) {
      // Make sure to hide the tooltip when the title is set empty
      if (newValue !== oldValue && !newValue) {
        this.hide();
      }
    },
    disabled: function disabled(newValue) {
      if (newValue) {
        this.disable();
      } else {
        this.enable();
      }
    }
  },
  created: function created() {
    var _this2 = this;

    // Create non-reactive properties
    this.$_tip = null;
    this.$_hoverTimeout = null;
    this.$_hoverState = '';
    this.$_visibleInterval = null;
    this.$_enabled = !this.disabled;
    this.$_noop = _utils_noop__WEBPACK_IMPORTED_MODULE_11__["noop"].bind(this); // Destroy ourselves when the parent is destroyed

    if (this.$parent) {
      this.$parent.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__["HOOK_EVENT_NAME_BEFORE_DESTROY"], function () {
        _this2.$nextTick(function () {
          // In a `requestAF()` to release control back to application
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["requestAF"])(function () {
            _this2.$destroy();
          });
        });
      });
    }

    this.$nextTick(function () {
      var target = _this2.getTarget();

      if (target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(document.body, target)) {
        // Copy the parent's scoped style attribute
        _this2.scopeId = Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_6__["getScopeId"])(_this2.$parent); // Set up all trigger handlers and listeners

        _this2.listen();
      } else {
        /* istanbul ignore next */
        Object(_utils_warn__WEBPACK_IMPORTED_MODULE_14__["warn"])(Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isString"])(_this2.target) ? "Unable to find target element by ID \"#".concat(_this2.target, "\" in document.") : 'The provided target is no valid HTML element.', _this2.templateType);
      }
    });
  },

  /* istanbul ignore next */
  updated: function updated() {
    // Usually called when the slots/data changes
    this.$nextTick(this.handleTemplateUpdate);
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    // In a keepalive that has been deactivated, so hide
    // the tooltip/popover if it is showing
    this.forceHide();
  },
  beforeDestroy: function beforeDestroy() {
    // Remove all handler/listeners
    this.unListen();
    this.setWhileOpenListeners(false); // Clear any timeouts/intervals

    this.clearHoverTimeout();
    this.clearVisibilityInterval(); // Destroy the template

    this.destroyTemplate(); // Remove any other private properties created during create

    this.$_noop = null;
  },
  methods: {
    // --- Methods for creating and destroying the template ---
    getTemplate: function getTemplate() {
      // Overridden by BVPopover
      return _bv_tooltip_template__WEBPACK_IMPORTED_MODULE_17__["BVTooltipTemplate"];
    },
    updateData: function updateData() {
      var _this3 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Method for updating popper/template data
      // We only update data if it exists, and has not changed
      var titleUpdated = false;
      Object(_utils_object__WEBPACK_IMPORTED_MODULE_13__["keys"])(templateData).forEach(function (prop) {
        if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(data[prop]) && _this3[prop] !== data[prop]) {
          _this3[prop] = data[prop];

          if (prop === 'title') {
            titleUpdated = true;
          }
        }
      }); // If the title has updated, we may need to handle the `title`
      // attribute on the trigger target
      // We only do this while the template is open

      if (titleUpdated && this.localShow) {
        this.fixTitle();
      }
    },
    createTemplateAndShow: function createTemplateAndShow() {
      // Creates the template instance and show it
      var container = this.getContainer();
      var Template = this.getTemplate();
      var $tip = this.$_tip = new Template({
        parent: this,
        // The following is not reactive to changes in the props data
        propsData: {
          // These values cannot be changed while template is showing
          id: this.computedId,
          html: this.html,
          placement: this.placement,
          fallbackPlacement: this.fallbackPlacement,
          target: this.getPlacementTarget(),
          boundary: this.getBoundary(),
          // Ensure the following are integers
          offset: Object(_utils_number__WEBPACK_IMPORTED_MODULE_12__["toInteger"])(this.offset, 0),
          arrowPadding: Object(_utils_number__WEBPACK_IMPORTED_MODULE_12__["toInteger"])(this.arrowPadding, 0),
          boundaryPadding: Object(_utils_number__WEBPACK_IMPORTED_MODULE_12__["toInteger"])(this.boundaryPadding, 0)
        }
      }); // We set the initial reactive data (values that can be changed while open)

      this.handleTemplateUpdate(); // Template transition phase events (handled once only)
      // When the template has mounted, but not visibly shown yet

      $tip.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOW"], this.onTemplateShow); // When the template has completed showing

      $tip.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOWN"], this.onTemplateShown); // When the template has started to hide

      $tip.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_HIDE"], this.onTemplateHide); // When the template has completed hiding

      $tip.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_HIDDEN"], this.onTemplateHidden); // When the template gets destroyed for any reason

      $tip.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__["HOOK_EVENT_NAME_DESTROYED"], this.destroyTemplate); // Convenience events from template
      // To save us from manually adding/removing DOM
      // listeners to tip element when it is open

      $tip.$on(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_FOCUSIN"], this.handleEvent);
      $tip.$on(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_FOCUSOUT"], this.handleEvent);
      $tip.$on(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_MOUSEENTER"], this.handleEvent);
      $tip.$on(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_MOUSELEAVE"], this.handleEvent); // Mount (which triggers the `show`)

      $tip.$mount(container.appendChild(document.createElement('div'))); // Template will automatically remove its markup from DOM when hidden
    },
    hideTemplate: function hideTemplate() {
      // Trigger the template to start hiding
      // The template will emit the `hide` event after this and
      // then emit the `hidden` event once it is fully hidden
      // The `hook:destroyed` will also be called (safety measure)
      this.$_tip && this.$_tip.hide(); // Clear out any stragging active triggers

      this.clearActiveTriggers(); // Reset the hover state

      this.$_hoverState = '';
    },
    // Destroy the template instance and reset state
    destroyTemplate: function destroyTemplate() {
      this.setWhileOpenListeners(false);
      this.clearHoverTimeout();
      this.$_hoverState = '';
      this.clearActiveTriggers();
      this.localPlacementTarget = null;

      try {
        this.$_tip.$destroy();
      } catch (_unused) {}

      this.$_tip = null;
      this.removeAriaDescribedby();
      this.restoreTitle();
      this.localShow = false;
    },
    getTemplateElement: function getTemplateElement() {
      return this.$_tip ? this.$_tip.$el : null;
    },
    handleTemplateUpdate: function handleTemplateUpdate() {
      var _this4 = this;

      // Update our template title/content "props"
      // So that the template updates accordingly
      var $tip = this.$_tip;

      if ($tip) {
        var props = ['title', 'content', 'variant', 'customClass', 'noFade', 'interactive']; // Only update the values if they have changed

        props.forEach(function (prop) {
          if ($tip[prop] !== _this4[prop]) {
            $tip[prop] = _this4[prop];
          }
        });
      }
    },
    // --- Show/Hide handlers ---
    // Show the tooltip
    show: function show() {
      var target = this.getTarget();

      if (!target || !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(document.body, target) || !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["isVisible"])(target) || this.dropdownOpen() || (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isUndefinedOrNull"])(this.title) || this.title === '') && (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isUndefinedOrNull"])(this.content) || this.content === '')) {
        // If trigger element isn't in the DOM or is not visible, or
        // is on an open dropdown toggle, or has no content, then
        // we exit without showing
        return;
      } // If tip already exists, exit early


      if (this.$_tip || this.localShow) {
        /* istanbul ignore next */
        return;
      } // In the process of showing


      this.localShow = true; // Create a cancelable BvEvent

      var showEvt = this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOW"], {
        cancelable: true
      });
      this.emitEvent(showEvt); // Don't show if event cancelled

      /* istanbul ignore if */

      if (showEvt.defaultPrevented) {
        // Destroy the template (if for some reason it was created)
        this.destroyTemplate();
        return;
      } // Fix the title attribute on target


      this.fixTitle(); // Set aria-describedby on target

      this.addAriaDescribedby(); // Create and show the tooltip

      this.createTemplateAndShow();
    },
    hide: function hide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Hide the tooltip
      var tip = this.getTemplateElement();
      /* istanbul ignore if */

      if (!tip || !this.localShow) {
        this.restoreTitle();
        return;
      } // Emit cancelable BvEvent 'hide'
      // We disable cancelling if `force` is true


      var hideEvt = this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_HIDE"], {
        cancelable: !force
      });
      this.emitEvent(hideEvt);
      /* istanbul ignore if: ignore for now */

      if (hideEvt.defaultPrevented) {
        // Don't hide if event cancelled
        return;
      } // Tell the template to hide


      this.hideTemplate();
    },
    forceHide: function forceHide() {
      // Forcefully hides/destroys the template, regardless of any active triggers
      var tip = this.getTemplateElement();

      if (!tip || !this.localShow) {
        /* istanbul ignore next */
        return;
      } // Disable while open listeners/watchers
      // This is also done in the template `hide` event handler


      this.setWhileOpenListeners(false); // Clear any hover enter/leave event

      this.clearHoverTimeout();
      this.$_hoverState = '';
      this.clearActiveTriggers(); // Disable the fade animation on the template

      if (this.$_tip) {
        this.$_tip.noFade = true;
      } // Hide the tip (with force = true)


      this.hide(true);
    },
    enable: function enable() {
      this.$_enabled = true; // Create a non-cancelable BvEvent

      this.emitEvent(this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_ENABLED"]));
    },
    disable: function disable() {
      this.$_enabled = false; // Create a non-cancelable BvEvent

      this.emitEvent(this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_DISABLED"]));
    },
    // --- Handlers for template events ---
    // When template is inserted into DOM, but not yet shown
    onTemplateShow: function onTemplateShow() {
      // Enable while open listeners/watchers
      this.setWhileOpenListeners(true);
    },
    // When template show transition completes
    onTemplateShown: function onTemplateShown() {
      var prevHoverState = this.$_hoverState;
      this.$_hoverState = '';
      /* istanbul ignore next: occasional Node 10 coverage error */

      if (prevHoverState === 'out') {
        this.leave(null);
      } // Emit a non-cancelable BvEvent 'shown'


      this.emitEvent(this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOWN"]));
    },
    // When template is starting to hide
    onTemplateHide: function onTemplateHide() {
      // Disable while open listeners/watchers
      this.setWhileOpenListeners(false);
    },
    // When template has completed closing (just before it self destructs)
    onTemplateHidden: function onTemplateHidden() {
      // Destroy the template
      this.destroyTemplate(); // Emit a non-cancelable BvEvent 'shown'

      this.emitEvent(this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_HIDDEN"]));
    },
    // --- Helper methods ---
    getTarget: function getTarget() {
      var target = this.target;

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isString"])(target)) {
        target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getById"])(target.replace(/^#/, ''));
      } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(target)) {
        target = target();
      } else if (target) {
        target = target.$el || target;
      }

      return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["isElement"])(target) ? target : null;
    },
    getPlacementTarget: function getPlacementTarget() {
      // This is the target that the tooltip will be placed on, which may not
      // necessarily be the same element that has the trigger event listeners
      // For now, this is the same as target
      // TODO:
      //   Add in child selector support
      //   Add in visibility checks for this element
      //   Fallback to target if not found
      return this.getTarget();
    },
    getTargetId: function getTargetId() {
      // Returns the ID of the trigger element
      var target = this.getTarget();
      return target && target.id ? target.id : null;
    },
    getContainer: function getContainer() {
      // Handle case where container may be a component ref
      var container = this.container ? this.container.$el || this.container : false;
      var body = document.body;
      var target = this.getTarget(); // If we are in a modal, we append to the modal, If we
      // are in a sidebar, we append to the sidebar, else append
      // to body, unless a container is specified
      // TODO:
      //   Template should periodically check to see if it is in dom
      //   And if not, self destruct (if container got v-if'ed out of DOM)
      //   Or this could possibly be part of the visibility check

      return container === false ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["closest"])(CONTAINER_SELECTOR, target) || body :
      /*istanbul ignore next */
      Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_8__["isString"])(container) ?
      /*istanbul ignore next */
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getById"])(container.replace(/^#/, '')) || body :
      /*istanbul ignore next */
      body;
    },
    getBoundary: function getBoundary() {
      return this.boundary ? this.boundary.$el || this.boundary : 'scrollParent';
    },
    isInModal: function isInModal() {
      var target = this.getTarget();
      return target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["closest"])(MODAL_SELECTOR, target);
    },
    isDropdown: function isDropdown() {
      // Returns true if trigger is a dropdown
      var target = this.getTarget();
      return target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["hasClass"])(target, DROPDOWN_CLASS);
    },
    dropdownOpen: function dropdownOpen() {
      // Returns true if trigger is a dropdown and the dropdown menu is open
      var target = this.getTarget();
      return this.isDropdown() && target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["select"])(DROPDOWN_OPEN_SELECTOR, target);
    },
    clearHoverTimeout: function clearHoverTimeout() {
      clearTimeout(this.$_hoverTimeout);
      this.$_hoverTimeout = null;
    },
    clearVisibilityInterval: function clearVisibilityInterval() {
      clearInterval(this.$_visibleInterval);
      this.$_visibleInterval = null;
    },
    clearActiveTriggers: function clearActiveTriggers() {
      for (var trigger in this.activeTrigger) {
        this.activeTrigger[trigger] = false;
      }
    },
    addAriaDescribedby: function addAriaDescribedby() {
      // Add aria-describedby on trigger element, without removing any other IDs
      var target = this.getTarget();
      var desc = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getAttr"])(target, 'aria-describedby') || '';
      desc = desc.split(/\s+/).concat(this.computedId).join(' ').trim(); // Update/add aria-described by

      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setAttr"])(target, 'aria-describedby', desc);
    },
    removeAriaDescribedby: function removeAriaDescribedby() {
      var _this5 = this;

      // Remove aria-describedby on trigger element, without removing any other IDs
      var target = this.getTarget();
      var desc = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getAttr"])(target, 'aria-describedby') || '';
      desc = desc.split(/\s+/).filter(function (d) {
        return d !== _this5.computedId;
      }).join(' ').trim(); // Update or remove aria-describedby

      if (desc) {
        /* istanbul ignore next */
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setAttr"])(target, 'aria-describedby', desc);
      } else {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["removeAttr"])(target, 'aria-describedby');
      }
    },
    fixTitle: function fixTitle() {
      // If the target has a `title` attribute,
      // remove it and store it on a data attribute
      var target = this.getTarget();

      if (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["hasAttr"])(target, 'title')) {
        // Get `title` attribute value and remove it from target
        var title = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getAttr"])(target, 'title');
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setAttr"])(target, 'title', ''); // Only set the data attribute when the value is truthy

        if (title) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setAttr"])(target, DATA_TITLE_ATTR, title);
        }
      }
    },
    restoreTitle: function restoreTitle() {
      // If the target had a `title` attribute,
      // restore it and remove the data attribute
      var target = this.getTarget();

      if (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["hasAttr"])(target, DATA_TITLE_ATTR)) {
        // Get data attribute value and remove it from target
        var title = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getAttr"])(target, DATA_TITLE_ATTR);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["removeAttr"])(target, DATA_TITLE_ATTR); // Only restore the `title` attribute when the value is truthy

        if (title) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setAttr"])(target, 'title', title);
        }
      }
    },
    // --- BvEvent helpers ---
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Defaults to a non-cancellable event
      return new _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_15__["BvEvent"](type, _objectSpread({
        cancelable: false,
        target: this.getTarget(),
        relatedTarget: this.getTemplateElement() || null,
        componentId: this.computedId,
        vueTarget: this
      }, options));
    },
    emitEvent: function emitEvent(bvEvent) {
      var type = bvEvent.type;
      this.emitOnRoot(Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["getRootEventName"])(this.templateType, type), bvEvent);
      this.$emit(type, bvEvent);
    },
    // --- Event handler setup methods ---
    listen: function listen() {
      var _this6 = this;

      // Enable trigger event handlers
      var el = this.getTarget();

      if (!el) {
        /* istanbul ignore next */
        return;
      } // Listen for global show/hide events


      this.setRootListener(true); // Set up our listeners on the target trigger element

      this.computedTriggers.forEach(function (trigger) {
        if (trigger === 'click') {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOn"])(el, 'click', _this6.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
        } else if (trigger === 'focus') {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOn"])(el, 'focusin', _this6.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOn"])(el, 'focusout', _this6.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
        } else if (trigger === 'blur') {
          // Used to close $tip when element looses focus

          /* istanbul ignore next */
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOn"])(el, 'focusout', _this6.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
        } else if (trigger === 'hover') {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOn"])(el, 'mouseenter', _this6.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOn"])(el, 'mouseleave', _this6.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
        }
      }, this);
    },

    /* istanbul ignore next */
    unListen: function unListen() {
      var _this7 = this;

      // Remove trigger event handlers
      var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave'];
      var target = this.getTarget(); // Stop listening for global show/hide/enable/disable events

      this.setRootListener(false); // Clear out any active target listeners

      events.forEach(function (event) {
        target && Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOff"])(target, event, _this7.handleEvent, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_OPTIONS_NO_CAPTURE"]);
      }, this);
    },
    setRootListener: function setRootListener(on) {
      // Listen for global `bv::{hide|show}::{tooltip|popover}` hide request event
      var $root = this.$root;

      if ($root) {
        var method = on ? '$on' : '$off';
        var type = this.templateType;
        $root[method](Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["getRootActionEventName"])(type, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_HIDE"]), this.doHide);
        $root[method](Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["getRootActionEventName"])(type, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOW"]), this.doShow);
        $root[method](Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["getRootActionEventName"])(type, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_DISABLE"]), this.doDisable);
        $root[method](Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["getRootActionEventName"])(type, _constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_ENABLE"]), this.doEnable);
      }
    },
    setWhileOpenListeners: function setWhileOpenListeners(on) {
      // Events that are only registered when the template is showing
      // Modal close events
      this.setModalListener(on); // Dropdown open events (if we are attached to a dropdown)

      this.setDropdownListener(on); // Periodic $element visibility check
      // For handling when tip target is in <keepalive>, tabs, carousel, etc

      this.visibleCheck(on); // On-touch start listeners

      this.setOnTouchStartListener(on);
    },
    // Handler for periodic visibility check
    visibleCheck: function visibleCheck(on) {
      var _this8 = this;

      this.clearVisibilityInterval();
      var target = this.getTarget();
      var tip = this.getTemplateElement();

      if (on) {
        this.$_visibleInterval = setInterval(function () {
          if (tip && _this8.localShow && (!target.parentNode || !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["isVisible"])(target))) {
            // Target element is no longer visible or not in DOM, so force-hide the tooltip
            _this8.forceHide();
          }
        }, 100);
      }
    },
    setModalListener: function setModalListener(on) {
      // Handle case where tooltip/target is in a modal
      if (this.isInModal()) {
        // We can listen for modal hidden events on `$root`
        this.$root[on ? '$on' : '$off'](ROOT_EVENT_NAME_MODAL_HIDDEN, this.forceHide);
      }
    },

    /* istanbul ignore next: JSDOM doesn't support `ontouchstart` */
    setOnTouchStartListener: function setOnTouchStartListener(on) {
      var _this9 = this;

      // If this is a touch-enabled device we add extra empty
      // `mouseover` listeners to the body's immediate children
      // Only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["from"])(document.body.children).forEach(function (el) {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_5__["eventOnOff"])(on, el, 'mouseover', _this9.$_noop);
        });
      }
    },
    setDropdownListener: function setDropdownListener(on) {
      var target = this.getTarget();

      if (!target || !this.$root || !this.isDropdown) {
        return;
      } // We can listen for dropdown shown events on its instance
      // TODO:
      //   We could grab the ID from the dropdown, and listen for
      //   $root events for that particular dropdown id
      //   Dropdown shown and hidden events will need to emit
      //   Note: Dropdown auto-ID happens in a `$nextTick()` after mount
      //         So the ID lookup would need to be done in a `$nextTick()`


      if (target.__vue__) {
        target.__vue__[on ? '$on' : '$off'](_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOWN"], this.forceHide);
      }
    },
    // --- Event handlers ---
    handleEvent: function handleEvent(event) {
      // General trigger event handler
      // target is the trigger element
      var target = this.getTarget();

      if (!target || Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["isDisabled"])(target) || !this.$_enabled || this.dropdownOpen()) {
        // If disabled or not enabled, or if a dropdown that is open, don't do anything
        // If tip is shown before element gets disabled, then tip will not
        // close until no longer disabled or forcefully closed
        return;
      }

      var type = event.type;
      var triggers = this.computedTriggers;

      if (type === 'click' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(triggers, 'click')) {
        this.click(event);
      } else if (type === 'mouseenter' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(triggers, 'hover')) {
        // `mouseenter` is a non-bubbling event
        this.enter(event);
      } else if (type === 'focusin' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(triggers, 'focus')) {
        // `focusin` is a bubbling event
        // `event` includes `relatedTarget` (element losing focus)
        this.enter(event);
      } else if (type === 'focusout' && (Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(triggers, 'focus') || Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(triggers, 'blur')) || type === 'mouseleave' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(triggers, 'hover')) {
        // `focusout` is a bubbling event
        // `mouseleave` is a non-bubbling event
        // `tip` is the template (will be null if not open)
        var tip = this.getTemplateElement(); // `eventTarget` is the element which is losing focus/hover and

        var eventTarget = event.target; // `relatedTarget` is the element gaining focus/hover

        var relatedTarget = event.relatedTarget;
        /* istanbul ignore next */

        if ( // From tip to target
        tip && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(tip, eventTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(target, relatedTarget) || // From target to tip
        tip && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(target, eventTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(tip, relatedTarget) || // Within tip
        tip && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(tip, eventTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(tip, relatedTarget) || // Within target
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(target, eventTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["contains"])(target, relatedTarget)) {
          // If focus/hover moves within `tip` and `target`, don't trigger a leave
          return;
        } // Otherwise trigger a leave


        this.leave(event);
      }
    },
    doHide: function doHide(id) {
      // Programmatically hide tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Close all tooltips or popovers, or this specific tip (with ID)
        this.forceHide();
      }
    },
    doShow: function doShow(id) {
      // Programmatically show tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Open all tooltips or popovers, or this specific tip (with ID)
        this.show();
      }
    },

    /*istanbul ignore next: ignore for now */
    doDisable: function doDisable(id)
    /*istanbul ignore next: ignore for now */
    {
      // Programmatically disable tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Disable all tooltips or popovers (no ID), or this specific tip (with ID)
        this.disable();
      }
    },

    /*istanbul ignore next: ignore for now */
    doEnable: function doEnable(id)
    /*istanbul ignore next: ignore for now */
    {
      // Programmatically enable tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Enable all tooltips or popovers (no ID), or this specific tip (with ID)
        this.enable();
      }
    },
    click: function click(event) {
      if (!this.$_enabled || this.dropdownOpen()) {
        /* istanbul ignore next */
        return;
      } // Get around a WebKit bug where `click` does not trigger focus events
      // On most browsers, `click` triggers a `focusin`/`focus` event first
      // Needed so that trigger 'click blur' works on iOS
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/5099
      // We use `currentTarget` rather than `target` to trigger on the
      // element, not the inner content


      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["attemptFocus"])(event.currentTarget);
      this.activeTrigger.click = !this.activeTrigger.click;

      if (this.isWithActiveTrigger) {
        this.enter(null);
      } else {
        /* istanbul ignore next */
        this.leave(null);
      }
    },

    /* istanbul ignore next */
    toggle: function toggle() {
      // Manual toggle handler
      if (!this.$_enabled || this.dropdownOpen()) {
        /* istanbul ignore next */
        return;
      } // Should we register as an active trigger?
      // this.activeTrigger.manual = !this.activeTrigger.manual


      if (this.localShow) {
        this.leave(null);
      } else {
        this.enter(null);
      }
    },
    enter: function enter() {
      var _this10 = this;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Opening trigger handler
      // Note: Click events are sent with event === null
      if (event) {
        this.activeTrigger[event.type === 'focusin' ? 'focus' : 'hover'] = true;
      }
      /* istanbul ignore next */


      if (this.localShow || this.$_hoverState === 'in') {
        this.$_hoverState = 'in';
        return;
      }

      this.clearHoverTimeout();
      this.$_hoverState = 'in';

      if (!this.computedDelay.show) {
        this.show();
      } else {
        // Hide any title attribute while enter delay is active
        this.fixTitle();
        this.$_hoverTimeout = setTimeout(function () {
          /* istanbul ignore else */
          if (_this10.$_hoverState === 'in') {
            _this10.show();
          } else if (!_this10.localShow) {
            _this10.restoreTitle();
          }
        }, this.computedDelay.show);
      }
    },
    leave: function leave() {
      var _this11 = this;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Closing trigger handler
      // Note: Click events are sent with event === null
      if (event) {
        this.activeTrigger[event.type === 'focusout' ? 'focus' : 'hover'] = false;
        /* istanbul ignore next */

        if (event.type === 'focusout' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(this.computedTriggers, 'blur')) {
          // Special case for `blur`: we clear out the other triggers
          this.activeTrigger.click = false;
          this.activeTrigger.hover = false;
        }
      }
      /* istanbul ignore next: ignore for now */


      if (this.isWithActiveTrigger) {
        return;
      }

      this.clearHoverTimeout();
      this.$_hoverState = 'out';

      if (!this.computedDelay.hide) {
        this.hide();
      } else {
        this.$_hoverTimeout = setTimeout(function () {
          if (_this11.$_hoverState === 'out') {
            _this11.hide();
          }
        }, this.computedDelay.hide);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js ***!
  \*******************************************************************************/
/*! exports provided: props, BVTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVTransition", function() { return BVTransition; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generic Bootstrap v4 fade (no-fade) transition component
//
// Assumes that `show` class is not required when
// the transition has finished the enter transition
// (show and fade classes are only applied during transition)




 // --- Constants ---

var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = _objectSpread(_objectSpread({}, NO_FADE_PROPS), {}, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // --- Props ---


var props = {
  // Has no effect if `trans-props` provided
  appear: Object(_utils_props__WEBPACK_IMPORTED_MODULE_4__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_2__["PROP_TYPE_BOOLEAN"], false),
  // Can be overridden by user supplied `trans-props`
  mode: Object(_utils_props__WEBPACK_IMPORTED_MODULE_4__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_2__["PROP_TYPE_STRING"]),
  // Only applicable to the built in transition
  // Has no effect if `trans-props` provided
  noFade: Object(_utils_props__WEBPACK_IMPORTED_MODULE_4__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_2__["PROP_TYPE_BOOLEAN"], false),
  // For user supplied transitions (if needed)
  transProps: Object(_utils_props__WEBPACK_IMPORTED_MODULE_4__["makeProp"])(_constants_props__WEBPACK_IMPORTED_MODULE_2__["PROP_TYPE_OBJECT"])
}; // --- Main component ---
// @vue/component

var BVTransition = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__["NAME_TRANSITION"],
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = _objectSpread(_objectSpread({}, transProps), {}, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = _objectSpread(_objectSpread({
      mode: props.mode
    }, transProps), {}, {
      // We always need `css` true
      css: true
    });
    return h('transition', // Any transition event listeners will get merged here
    Object(_vue__WEBPACK_IMPORTED_MODULE_0__["mergeData"])(data, {
      props: transProps
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/directives/popover/popover.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/directives/popover/popover.js ***!
  \**********************************************************************/
/*! exports provided: VBPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBPopover", function() { return VBPopover; });
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _components_popover_helpers_bv_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/popover/helpers/bv-popover */ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // Key which we use to store tooltip object on element

var BV_POPOVER = '__BV_Popover__'; // Default trigger

var DefaultTrigger = 'click'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true,
  manual: true
}; // Directive modifier test regular expressions. Pre-compile for performance

var htmlRE = /^html$/i;
var noFadeRE = /^nofade$/i;
var placementRE = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i;
var boundaryRE = /^(window|viewport|scrollParent)$/i;
var delayRE = /^d\d+$/i;
var delayShowRE = /^ds\d+$/i;
var delayHideRE = /^dh\d+$/i;
var offsetRE = /^o-?\d+$/i;
var variantRE = /^v-.+$/i;
var spacesRE = /\s+/; // Build a Popover config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

var parseBindings = function parseBindings(bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  // We start out with a basic config
  var config = {
    title: undefined,
    content: undefined,
    trigger: '',
    // Default set below if needed
    placement: 'right',
    fallbackPlacement: 'flip',
    container: false,
    // Default of body
    animation: true,
    offset: 0,
    disabled: false,
    id: null,
    html: false,
    delay: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_POPOVER"], 'delay', 50),
    boundary: String(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_POPOVER"], 'boundary', 'scrollParent')),
    boundaryPadding: Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_POPOVER"], 'boundaryPadding', 5), 0),
    variant: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_POPOVER"], 'variant'),
    customClass: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_POPOVER"], 'customClass')
  }; // Process `bindings.value`

  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isString"])(bindings.value) || Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(bindings.value)) {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(bindings.value)) {
    // Content generator function
    config.content = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(bindings.value)) {
    // Value is config object, so merge
    config = _objectSpread(_objectSpread({}, config), bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // If title is not provided, try title attribute


  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(config.title)) {
    // Try attribute
    var data = vnode.data || {};
    config.title = data.attrs && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefinedOrNull"])(data.attrs.title) ? data.attrs.title : undefined;
  } // Normalize delay


  if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(config.delay)) {
    config.delay = {
      show: Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(config.delay, 0),
      hide: Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(config.delay, 0)
    };
  } // Process modifiers


  Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(bindings.modifiers).forEach(function (mod) {
    if (htmlRE.test(mod)) {
      // Title/content allows HTML
      config.html = true;
    } else if (noFadeRE.test(mod)) {
      // No animation
      config.animation = false;
    } else if (placementRE.test(mod)) {
      // Placement of popover
      config.placement = mod;
    } else if (boundaryRE.test(mod)) {
      // Boundary of popover
      mod = mod === 'scrollparent' ? 'scrollParent' : mod;
      config.boundary = mod;
    } else if (delayRE.test(mod)) {
      // Delay value
      var delay = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(1), 0);
      config.delay.show = delay;
      config.delay.hide = delay;
    } else if (delayShowRE.test(mod)) {
      // Delay show value
      config.delay.show = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(2), 0);
    } else if (delayHideRE.test(mod)) {
      // Delay hide value
      config.delay.hide = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(2), 0);
    } else if (offsetRE.test(mod)) {
      // Offset value, negative allowed
      config.offset = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(1), 0);
    } else if (variantRE.test(mod)) {
      // Variant
      config.variant = mod.slice(2) || null;
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["concat"])(config.trigger || '').filter(_utils_identity__WEBPACK_IMPORTED_MODULE_6__["identity"]).join(' ').trim().toLowerCase().split(spacesRE).forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(bindings.modifiers).forEach(function (mod) {
    mod = mod.toLowerCase();

    if (validTriggers[mod]) {
      // If modifier is a valid trigger
      selectedTriggers[mod] = true;
    }
  }); // Sanitize triggers

  config.trigger = Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Use default trigger
    config.trigger = DefaultTrigger;
  }

  return config;
}; // Add or update Popover on our element


var applyPopover = function applyPopover(el, bindings, vnode) {
  if (!_constants_env__WEBPACK_IMPORTED_MODULE_1__["IS_BROWSER"]) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings(bindings, vnode);

  if (!el[BV_POPOVER]) {
    var $parent = vnode.context;
    el[BV_POPOVER] = new _components_popover_helpers_bv_popover__WEBPACK_IMPORTED_MODULE_11__["BVPopover"]({
      parent: $parent,
      // Add the parent's scoped style attribute data
      _scopeId: Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_5__["getScopeId"])($parent, undefined)
    });
    el[BV_POPOVER].__bv_prev_data__ = {};
    el[BV_POPOVER].$on(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOW"], function ()
    /* istanbul ignore next: for now */
    {
      // Before showing the popover, we update the title
      // and content if they are functions
      var data = {};

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(config.title)) {
        data.title = config.title(el);
      }

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(config.content)) {
        data.content = config.content(el);
      }

      if (Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(data).length > 0) {
        el[BV_POPOVER].updateData(data);
      }
    });
  }

  var data = {
    title: config.title,
    content: config.content,
    triggers: config.trigger,
    placement: config.placement,
    fallbackPlacement: config.fallbackPlacement,
    variant: config.variant,
    customClass: config.customClass,
    container: config.container,
    boundary: config.boundary,
    delay: config.delay,
    offset: config.offset,
    noFade: !config.animation,
    id: config.id,
    disabled: config.disabled,
    html: config.html
  };
  var oldData = el[BV_POPOVER].__bv_prev_data__;
  el[BV_POPOVER].__bv_prev_data__ = data;

  if (!Object(_utils_loose_equal__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(data, oldData)) {
    // We only update the instance if data has changed
    var newData = {
      target: el
    };
    Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(data).forEach(function (prop) {
      // We only pass data properties that have changed
      if (data[prop] !== oldData[prop]) {
        // If title/content is a function, we execute it here
        newData[prop] = (prop === 'title' || prop === 'content') && Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(data[prop]) ?
        /* istanbul ignore next */
        data[prop](el) : data[prop];
      }
    });
    el[BV_POPOVER].updateData(newData);
  }
}; // Remove Popover from our element


var removePopover = function removePopover(el) {
  if (el[BV_POPOVER]) {
    el[BV_POPOVER].$destroy();
    el[BV_POPOVER] = null;
  }

  delete el[BV_POPOVER];
}; // Export our directive


var VBPopover = {
  bind: function bind(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  // We use `componentUpdated` here instead of `update`, as the former
  // waits until the containing component and children have finished updating
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    // Performed in a `$nextTick()` to prevent endless render/update loops
    vnode.context.$nextTick(function () {
      applyPopover(el, bindings, vnode);
    });
  },
  unbind: function unbind(el) {
    removePopover(el);
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/directives/tooltip/tooltip.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/directives/tooltip/tooltip.js ***!
  \**********************************************************************/
/*! exports provided: VBTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBTooltip", function() { return VBTooltip; });
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _components_tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/tooltip/helpers/bv-tooltip */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // Key which we use to store tooltip object on element

var BV_TOOLTIP = '__BV_Tooltip__'; // Default trigger

var DefaultTrigger = 'hover focus'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true,
  manual: true
}; // Directive modifier test regular expressions. Pre-compile for performance

var htmlRE = /^html$/i;
var noninteractiveRE = /^noninteractive$/i;
var noFadeRE = /^nofade$/i;
var placementRE = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i;
var boundaryRE = /^(window|viewport|scrollParent)$/i;
var delayRE = /^d\d+$/i;
var delayShowRE = /^ds\d+$/i;
var delayHideRE = /^dh\d+$/i;
var offsetRE = /^o-?\d+$/i;
var variantRE = /^v-.+$/i;
var spacesRE = /\s+/; // Build a Tooltip config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

var parseBindings = function parseBindings(bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  // We start out with a basic config
  var config = {
    title: undefined,
    trigger: '',
    // Default set below if needed
    placement: 'top',
    fallbackPlacement: 'flip',
    container: false,
    // Default of body
    animation: true,
    offset: 0,
    id: null,
    html: false,
    interactive: true,
    disabled: false,
    delay: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_TOOLTIP"], 'delay', 50),
    boundary: String(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_TOOLTIP"], 'boundary', 'scrollParent')),
    boundaryPadding: Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_TOOLTIP"], 'boundaryPadding', 5), 0),
    variant: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_TOOLTIP"], 'variant'),
    customClass: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(_constants_components__WEBPACK_IMPORTED_MODULE_0__["NAME_TOOLTIP"], 'customClass')
  }; // Process `bindings.value`

  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isString"])(bindings.value) || Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(bindings.value)) {
    // Value is tooltip content (HTML optionally supported)
    config.title = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(bindings.value)) {
    // Title generator function
    config.title = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(bindings.value)) {
    // Value is config object, so merge
    config = _objectSpread(_objectSpread({}, config), bindings.value);
  } // If title is not provided, try title attribute


  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(config.title)) {
    // Try attribute
    var data = vnode.data || {};
    config.title = data.attrs && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefinedOrNull"])(data.attrs.title) ? data.attrs.title : undefined;
  } // Normalize delay


  if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(config.delay)) {
    config.delay = {
      show: Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(config.delay, 0),
      hide: Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(config.delay, 0)
    };
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(bindings.modifiers).forEach(function (mod) {
    if (htmlRE.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (noninteractiveRE.test(mod)) {
      // Noninteractive
      config.interactive = false;
    } else if (noFadeRE.test(mod)) {
      // No animation
      config.animation = false;
    } else if (placementRE.test(mod)) {
      // Placement of tooltip
      config.placement = mod;
    } else if (boundaryRE.test(mod)) {
      // Boundary of tooltip
      mod = mod === 'scrollparent' ? 'scrollParent' : mod;
      config.boundary = mod;
    } else if (delayRE.test(mod)) {
      // Delay value
      var delay = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(1), 0);
      config.delay.show = delay;
      config.delay.hide = delay;
    } else if (delayShowRE.test(mod)) {
      // Delay show value
      config.delay.show = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(2), 0);
    } else if (delayHideRE.test(mod)) {
      // Delay hide value
      config.delay.hide = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(2), 0);
    } else if (offsetRE.test(mod)) {
      // Offset value, negative allowed
      config.offset = Object(_utils_number__WEBPACK_IMPORTED_MODULE_9__["toInteger"])(mod.slice(1), 0);
    } else if (variantRE.test(mod)) {
      // Variant
      config.variant = mod.slice(2) || null;
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["concat"])(config.trigger || '').filter(_utils_identity__WEBPACK_IMPORTED_MODULE_6__["identity"]).join(' ').trim().toLowerCase().split(spacesRE).forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(bindings.modifiers).forEach(function (mod) {
    mod = mod.toLowerCase();

    if (validTriggers[mod]) {
      // If modifier is a valid trigger
      selectedTriggers[mod] = true;
    }
  }); // Sanitize triggers

  config.trigger = Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Use default trigger
    config.trigger = DefaultTrigger;
  } // Return the config


  return config;
}; // Add/update Tooltip on our element


var applyTooltip = function applyTooltip(el, bindings, vnode) {
  if (!_constants_env__WEBPACK_IMPORTED_MODULE_1__["IS_BROWSER"]) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings(bindings, vnode);

  if (!el[BV_TOOLTIP]) {
    var $parent = vnode.context;
    el[BV_TOOLTIP] = new _components_tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_11__["BVTooltip"]({
      parent: $parent,
      // Add the parent's scoped style attribute data
      _scopeId: Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_5__["getScopeId"])($parent, undefined)
    });
    el[BV_TOOLTIP].__bv_prev_data__ = {};
    el[BV_TOOLTIP].$on(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME_SHOW"], function ()
    /* istanbul ignore next: for now */
    {
      // Before showing the tooltip, we update the title if it is a function
      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(config.title)) {
        el[BV_TOOLTIP].updateData({
          title: config.title(el)
        });
      }
    });
  }

  var data = {
    title: config.title,
    triggers: config.trigger,
    placement: config.placement,
    fallbackPlacement: config.fallbackPlacement,
    variant: config.variant,
    customClass: config.customClass,
    container: config.container,
    boundary: config.boundary,
    delay: config.delay,
    offset: config.offset,
    noFade: !config.animation,
    id: config.id,
    interactive: config.interactive,
    disabled: config.disabled,
    html: config.html
  };
  var oldData = el[BV_TOOLTIP].__bv_prev_data__;
  el[BV_TOOLTIP].__bv_prev_data__ = data;

  if (!Object(_utils_loose_equal__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(data, oldData)) {
    // We only update the instance if data has changed
    var newData = {
      target: el
    };
    Object(_utils_object__WEBPACK_IMPORTED_MODULE_10__["keys"])(data).forEach(function (prop) {
      // We only pass data properties that have changed
      if (data[prop] !== oldData[prop]) {
        // if title is a function, we execute it here
        newData[prop] = prop === 'title' && Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(data[prop]) ? data[prop](el) : data[prop];
      }
    });
    el[BV_TOOLTIP].updateData(newData);
  }
}; // Remove Tooltip on our element


var removeTooltip = function removeTooltip(el) {
  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].$destroy();
    el[BV_TOOLTIP] = null;
  }

  delete el[BV_TOOLTIP];
}; // Export our directive


var VBTooltip = {
  bind: function bind(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  // We use `componentUpdated` here instead of `update`, as the former
  // waits until the containing component and children have finished updating
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    // Performed in a `$nextTick()` to prevent render update loops
    vnode.context.$nextTick(function () {
      applyTooltip(el, bindings, vnode);
    });
  },
  unbind: function unbind(el) {
    removeTooltip(el);
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js ***!
  \*****************************************************************/
/*! exports provided: listenOnRootMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenOnRootMixin", function() { return listenOnRootMixin; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");

 // @vue/component

var listenOnRootMixin = _vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  methods: {
    /**
     * Safely register event listeners on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback
     *
     * When registering a `$root` listener, it also registers a listener on
     * the component's `beforeDestroy()` hook to automatically remove the
     * event listener from the `$root` instance
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on(_constants_events__WEBPACK_IMPORTED_MODULE_1__["HOOK_EVENT_NAME_BEFORE_DESTROY"], function () {
        _this.$root.$off(event, callback);
      });
    },

    /**
     * Safely register a `$once()` event listener on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      this.$root.$once(event, callback);
      this.$on(_constants_events__WEBPACK_IMPORTED_MODULE_1__["HOOK_EVENT_NAME_BEFORE_DESTROY"], function () {
        _this2.$root.$off(event, callback);
      });
    },

    /**
     * Convenience method for calling `vm.$emit()` on `vm.$root`
     *
     * @param {string} event
     * @param {*} args
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args));
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/scoped-style.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/scoped-style.js ***!
  \***************************************************************/
/*! exports provided: scopedStyleMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopedStyleMixin", function() { return scopedStyleMixin; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @vue/component

var scopedStyleMixin = _vue__WEBPACK_IMPORTED_MODULE_0__["Vue"].extend({
  computed: {
    scopedStyleAttrs: function scopedStyleAttrs() {
      var scopeId = Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_1__["getScopeId"])(this.$parent);
      return scopeId ? _defineProperty({}, scopeId, '') : {};
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/bv-event.class.js ***!
  \****************************************************************/
/*! exports provided: BvEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BvEvent", function() { return BvEvent; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    Object(_object__WEBPACK_IMPORTED_MODULE_0__["assign"])(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    Object(_object__WEBPACK_IMPORTED_MODULE_0__["defineProperties"])(this, {
      type: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      cancelable: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      nativeEvent: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      target: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      relatedTarget: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      vueTarget: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      componentId: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    Object(_object__WEBPACK_IMPORTED_MODULE_0__["defineProperty"])(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}();

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-scope-id.js ***!
  \**************************************************************/
/*! exports provided: getScopeId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScopeId", function() { return getScopeId; });
// This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
// The `_scopeId` options property is added by vue-loader when using scoped styles
// and will be `undefined` if no scoped styles are in use
var getScopeId = function getScopeId(vm) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return vm ? vm.$options._scopeId || defaultValue : defaultValue;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/loose-equal.js ***!
  \*************************************************************/
/*! exports provided: looseEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseEqual", function() { return looseEqual; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isDate"])(a);
  var bValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isDate"])(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isArray"])(a);
  bValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isArray"])(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isObject"])(a);
  bValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isObject"])(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object(_object__WEBPACK_IMPORTED_MODULE_0__["keys"])(a).length;
    var bKeysCount = Object(_object__WEBPACK_IMPORTED_MODULE_0__["keys"])(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = Object(_object__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(a, key);
      var bHasKey = Object(_object__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(b, key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);