"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_customers_Bills_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customers/Bills.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customers/Bills.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './ShowBill'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_convertToLocaleDateTimeString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/convertToLocaleDateTimeString */ "./resources/js/utils/convertToLocaleDateTimeString.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CreateBill: CreateBill,
    EditBill: EditBill,
    ShowBill: Object(function webpackMissingModule() { var e = new Error("Cannot find module './ShowBill'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      heading: "Bills",
      apiUrl: "/api/customers/bills",
      fields: [{
        key: "row_no",
        label: "#"
      }, {
        key: "month",
        sortable: true
      }, {
        key: "year",
        sortable: true
      }, {
        key: "amount",
        sortable: true,
        formatter: function formatter(value) {
          return value + "/- tk";
        }
      }, {
        key: "status",
        sortable: true
      }, {
        key: "created_at",
        formatter: function formatter(value) {
          return (0,_utils_convertToLocaleDateTimeString__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
        },
        sortable: true
      }, "actions"],
      successMessage: "",
      isStoring: false,
      id: 0,
      isUpdating: false
    };
  },
  computed: _objectSpread({}, mapGetters("customerLogin", ["customer"])),
  methods: {
    store: function store() {
      var _this = this;

      this.isStoring = true;
      this.$refs.createBill.submit().then(function (data) {
        _this.successMessage = data.message;
        _this.isStoring = false;

        _this.$bvModal.hide("create-bill-modal");

        _this.$refs.billsTable.refresh();
      })["catch"](function (data) {
        _this.isStoring = false;
        console.error(data.message);
      });
    },
    show: function show(id) {
      this.id = id;
      this.$bvModal.show("show-bill-modal");
    },
    edit: function edit(id) {
      this.id = id;
      this.$bvModal.show("edit-bill-modal");
    },
    update: function update() {
      var _this2 = this;

      this.isUpdating = true;
      this.$refs.editBill.submit().then(function (data) {
        _this2.successMessage = data.message;
        _this2.isUpdating = false;

        _this2.$bvModal.hide("edit-bill-modal");

        _this2.$refs.billsTable.refresh();
      })["catch"](function (data) {
        _this2.isUpdating = false;
        console.error(data.message);
      });
    }
  },
  created: function created() {
    this.apiUrl = "/api/customers/bills";
  }
});

/***/ }),

/***/ "./resources/js/utils/convertToLocaleDateTimeString.js":
/*!*************************************************************!*\
  !*** ./resources/js/utils/convertToLocaleDateTimeString.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (value) {
    var date = new Date(value);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  return 'N/A';
}

/***/ }),

/***/ "./resources/js/components/customers/Bills.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/customers/Bills.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bills_vue_vue_type_template_id_ff905312___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bills.vue?vue&type=template&id=ff905312& */ "./resources/js/components/customers/Bills.vue?vue&type=template&id=ff905312&");
/* harmony import */ var _Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bills.vue?vue&type=script&lang=js& */ "./resources/js/components/customers/Bills.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bills_vue_vue_type_template_id_ff905312___WEBPACK_IMPORTED_MODULE_0__.render,
  _Bills_vue_vue_type_template_id_ff905312___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customers/Bills.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/customers/Bills.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/customers/Bills.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bills.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customers/Bills.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customers/Bills.vue?vue&type=template&id=ff905312&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/customers/Bills.vue?vue&type=template&id=ff905312& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_template_id_ff905312___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_template_id_ff905312___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bills_vue_vue_type_template_id_ff905312___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bills.vue?vue&type=template&id=ff905312& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customers/Bills.vue?vue&type=template&id=ff905312&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customers/Bills.vue?vue&type=template&id=ff905312&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customers/Bills.vue?vue&type=template&id=ff905312& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("user-dashboard", [
    _c(
      "div",
      [
        _c("page-title", {
          attrs: { heading: _vm.heading, noCreateNew: "true" },
        }),
        _vm._v(" "),
        _c(
          "b-alert",
          {
            attrs: {
              show: _vm.successMessage !== "",
              variant: "success",
              dismissible: "",
            },
          },
          [_vm._v("\n      " + _vm._s(_vm.successMessage) + "\n    ")]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { staticClass: "main-card mb-4" },
          [
            _c("datatable", {
              ref: "billsTable",
              attrs: { "api-url": _vm.apiUrl, fields: _vm.fields },
              scopedSlots: _vm._u([
                {
                  key: "cell(actions)",
                  fn: function (row) {
                    return [
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-2 mb-2",
                          attrs: { variant: "info", size: "sm" },
                          on: {
                            click: function ($event) {
                              return _vm.show(row.item.id)
                            },
                          },
                        },
                        [_vm._v("\n            Details\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-2 mb-2",
                          attrs: { variant: "danger", size: "sm" },
                          on: {
                            click: function ($event) {
                              return _vm.edit(row.item.id)
                            },
                          },
                        },
                        [_vm._v("\n            Change Status\n          ")]
                      ),
                    ]
                  },
                },
              ]),
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            attrs: { id: "show-bill-modal", title: "Bill Details", size: "lg" },
            scopedSlots: _vm._u([
              {
                key: "modal-footer",
                fn: function () {
                  return [
                    _c("div", { staticClass: "w-100" }, [
                      _c(
                        "div",
                        { staticClass: "float-right" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "mr-2",
                              attrs: { variant: "danger" },
                              on: {
                                click: function ($event) {
                                  return _vm.$bvModal.hide("show-bill-modal")
                                },
                              },
                            },
                            [_vm._v("\n              Cancel\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "success" },
                              on: {
                                click: function ($event) {
                                  return _vm.$bvModal.hide("show-bill-modal")
                                },
                              },
                            },
                            [_vm._v("\n              Ok\n            ")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]
                },
                proxy: true,
              },
            ]),
          },
          [_c("show-bill", { ref: "showBill", attrs: { id: _vm.id } })],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);