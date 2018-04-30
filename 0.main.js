webpackJsonp([0,3],Array(19).concat([
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(23);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4602d282_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(25)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4602d282_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4602d282_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\main\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4602d282", Component.options)
  } else {
    hotAPI.reload("data-v-4602d282", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_MainWrapper_vue__ = __webpack_require__(30);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ffe7908c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainWrapper_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(39)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ffe7908c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_MainWrapper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ffe7908c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainWrapper_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ffe7908c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainWrapper_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\MainWrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ffe7908c", Component.options)
  } else {
    hotAPI.reload("data-v-ffe7908c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  beforeCreate: function() {
    document.documentElement.className = 'u_gradient-background--blue';
  },
  name: 'home',
  props: [],
  data() {
    return {
    }
  },
  methods: {
  }
});


/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("4dc70b25", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("homescreen")])])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4602d282", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_MainNav_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_Home_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_Logout_vue__ = __webpack_require__(45);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mainWrapper',
  components: {Logout: __WEBPACK_IMPORTED_MODULE_2__main_Logout_vue__["a" /* default */], MainNav: __WEBPACK_IMPORTED_MODULE_0__main_MainNav_vue__["a" /* default */], Home: __WEBPACK_IMPORTED_MODULE_1__main_Home_vue__["default"]},
  props: ['user'],
  data() {
    return {}
  },
  methods: {}
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function() {
    this.bg = document.documentElement.className;
    console.log(this.bg);
  },
  name: "mainNav",
  data() {
    return {
      open: false,
      bg: '',
    }
  },
  methods: {
    toggleDropdown(state) {
      if(state) {
        this.open = false;
      } else {
        this.open = true;
      }
    }
  }
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "logout",
  props: ['user'],
  methods: {
    logout() {
      EventBus.$emit('loggedOut');
    }
  }
});


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("687a3de5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ffe7908c\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MainWrapper.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ffe7908c\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MainWrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_MainNav_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4b8a052_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainNav_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(42)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c4b8a052"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_MainNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4b8a052_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainNav_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4b8a052_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainNav_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\main\\MainNav.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4b8a052", Component.options)
  } else {
    hotAPI.reload("data-v-c4b8a052", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("bc93fca0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c4b8a052\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MainNav.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c4b8a052\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MainNav.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.nav[data-v-c4b8a052] {\n  width: 100%;\n  color: var(--grey);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n.nav--dropdown[data-v-c4b8a052] {\n  position: absolute;\n  bottom: 100%;\n  justify-content: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity .15s ease-in-out, visibility .15s .15s;\n  clip: rect(0, auto, auto, 0);\n}\n.nav--visible[data-v-c4b8a052] {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity .15s ease-in-out, visibility;\n}\n.nav__item[data-v-c4b8a052] {\n  width: 25%;\n  display: block;\n  text-align: center;\n  transition: background .15s ease-in-out;\n  position: relative;\n}\n.nav__item[data-v-c4b8a052]:active, .nav__item--active[data-v-c4b8a052] {\n  background: var(--white-50);\n}\n.nav__item--dropdown[data-v-c4b8a052] {\n  display: block;\n  width: 100%;\n  background: var(--white-50);\n  margin-bottom: .2rem;\n  position: relative;\n}\n.nav__item--dropdown[data-v-c4b8a052]:active {\n  background: var(--white);\n}\n.nav__link[data-v-c4b8a052] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.nav__icon[data-v-c4b8a052] {\n  padding: 2rem 0 1rem 0;\n  width: auto;\n  height: 6.2rem;\n  flex-shrink: 0;\n  position: relative;\n  transition: opacity .15s ease-in-out;\n  opacity: 1;\n  flex-shrink: 0;\n}\n.nav__icon--hidden[data-v-c4b8a052] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.nav__text[data-v-c4b8a052] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  text-align: center;\n  padding-bottom: 2rem;\n}\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "nav l_flex l_flex--horizontal" }, [
    _c(
      "span",
      { staticClass: "nav__item" },
      [
        _c(
          "router-link",
          {
            staticClass: "nav__link",
            attrs: { to: "/" },
            nativeOn: {
              click: function($event) {
                _vm.toggleDropdown(true)
              }
            }
          },
          [
            _c("img", {
              staticClass: "nav__icon",
              attrs: { src: "assets/img/home.svg" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "nav__text" }, [_vm._v("Home")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "nav__item" },
      [
        _c(
          "router-link",
          {
            staticClass: "nav__link",
            attrs: { to: "#" },
            nativeOn: {
              click: function($event) {
                _vm.toggleDropdown(true)
              }
            }
          },
          [
            _c("img", {
              staticClass: "nav__icon",
              attrs: { src: "assets/img/dashboard.svg" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "nav__text" }, [_vm._v("Dashboard")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "nav__item" },
      [
        _c(
          "router-link",
          {
            staticClass: "nav__link",
            attrs: { to: "#" },
            nativeOn: {
              click: function($event) {
                _vm.toggleDropdown(true)
              }
            }
          },
          [
            _c("img", {
              staticClass: "nav__icon",
              attrs: { src: "assets/img/list.svg" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "nav__text" }, [_vm._v("Funktionen")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "nav__item", class: { "nav__item--active": _vm.open } },
      [
        _c(
          "div",
          {
            staticClass: "nav__link",
            on: {
              click: function($event) {
                _vm.toggleDropdown(_vm.open)
              }
            }
          },
          [
            _c("img", {
              staticClass: "nav__icon",
              class: [_vm.open ? "" : "nav__icon--hidden"],
              attrs: { src: "assets/img/close.svg" }
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "nav__icon",
              class: [_vm.open ? "nav__icon--hidden" : ""],
              attrs: { src: "assets/img/menu.svg" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "nav__text" }, [_vm._v("Settings")])
          ]
        ),
        _vm._v(" "),
        _c(
          "nav",
          {
            staticClass: "nav nav--dropdown l_flex",
            class: [{ "nav--visible": _vm.open }, _vm.bg]
          },
          [
            _c(
              "span",
              { staticClass: "nav__item nav__item--dropdown" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav__link", attrs: { to: "/" } },
                  [
                    _c("img", {
                      staticClass: "nav__icon",
                      attrs: { src: "assets/img/text.svg" }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "nav__text" }, [
                      _vm._v("Rechtliches")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "nav__item nav__item--dropdown" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav__link", attrs: { to: "/" } },
                  [
                    _c("img", {
                      staticClass: "nav__icon",
                      attrs: { src: "assets/img/info.svg" }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "nav__text" }, [_vm._v("Hilfe")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "nav__item nav__item--dropdown" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav__link", attrs: { to: "#" } },
                  [
                    _c("img", {
                      staticClass: "nav__icon",
                      attrs: { src: "assets/img/user.svg" }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "nav__text" }, [_vm._v("Account")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "nav__item nav__item--dropdown" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav__link", attrs: { to: "#" } },
                  [
                    _c("img", {
                      staticClass: "nav__icon",
                      attrs: { src: "assets/img/logout.svg" }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "nav__text" }, [_vm._v("Logout")])
                  ]
                )
              ],
              1
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c4b8a052", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_873da226_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(46)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_873da226_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_873da226_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\main\\Logout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-873da226", Component.options)
  } else {
    hotAPI.reload("data-v-873da226", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("05210b05", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Logout.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Logout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("button", { on: { click: _vm.logout } }, [_vm._v("Logout")])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-873da226", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "l_main l_main--scroll" },
    [
      _c("router-view", { attrs: { user: _vm.user } }),
      _vm._v(" "),
      _c("main-nav"),
      _vm._v(" "),
      _c("logout", { attrs: { user: _vm.user } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ffe7908c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })
]));