webpackJsonp([1],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(28);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4602d282_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(8);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(36)
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProfileSwitcher_vue__ = __webpack_require__(38);
//
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
  components: {
    ProfileSwitcher: __WEBPACK_IMPORTED_MODULE_0__ProfileSwitcher_vue__["a" /* default */],
  },
  props: [],
  data() {
    return {
    }
  },
  methods: {
  }
});


/***/ }),

/***/ 29:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function() {
    this.bg = document.documentElement.className;
    console.log(this.bg);
  },
  name: 'profile-switcher',
  props: [],
  data() {
    return {
      bg: '',
      open: false,
      profiles: [
        { 
          name: 'Standard',
          active: true,
        },
        { 
          name: 'Nebenjob',
          active: false
        },
        { 
          name: 'Zuhause',
          active: false,
        }
      ]
    }
  },
  methods: {
    toggleDropdown(state) {
      if(state) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
    toggleActive(profile) {
      for(let i = 0; i < this.profiles.length; i++) {
        if(this.profiles[i].active) {
          this.profiles[i].active = false;
        }
      }
      profile.active = true;
    },
    functionHandler(state, profile) {
      this.toggleDropdown(state);
      this.toggleActive(profile);
    }
  }
});


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_ProfileSwitcher_vue__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eef0bc52_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProfileSwitcher_vue__ = __webpack_require__(41);
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
var __vue_scopeId__ = "data-v-eef0bc52"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_ProfileSwitcher_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eef0bc52_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProfileSwitcher_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eef0bc52_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProfileSwitcher_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\main\\ProfileSwitcher.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eef0bc52", Component.options)
  } else {
    hotAPI.reload("data-v-eef0bc52", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("7ed44c25", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-eef0bc52\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProfileSwitcher.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-eef0bc52\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProfileSwitcher.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.tiles[data-v-eef0bc52] {\n  margin-left: -.2rem;\n  margin-right: -.2rem;\n  font-size: 1.4rem;\n  color: var(--lightgrey);\n}\n.tiles__tile[data-v-eef0bc52] {\n  font-weight: 400;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-shrink: 1;\n  width: 100%;\n  text-align: center;\n  background: var(--white-50);\n  margin: 0 .1rem;\n  text-transform: uppercase;\n  padding: 2rem 1.3rem;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  line-height: 1.3;\n  transition: background .15s ease-in-out, color .15s ease-in-out;\n}\n.tiles__tile--active[data-v-eef0bc52], .dropdown__tile--active[data-v-eef0bc52], .dropdown__tile[data-v-eef0bc52]:active {\n  background: var(--lightgrey);\n  color: var(--grey);\n}\n.tiles__tile--dropdown[data-v-eef0bc52] {\n  width: calc(25% - .2rem);\n  min-width: calc(25% - .2rem);\n  font-size: 1.8rem;\n  position: relative;\n}\n.tiles__dropdown[data-v-eef0bc52] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  font-size: 1.4rem;\n  width: calc(200% + .2rem);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity .15s ease-in-out, visibility .15s .15s;\n  clip: rect(0, auto, auto, 0);\n}\n.tiles__dropdown--visible[data-v-eef0bc52] {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity .15s ease-in-out, visibility;\n}\n.dropdown__tile[data-v-eef0bc52] {\n  color: var(--lightgrey);\n  text-align: right;\n  font-weight: 400;\n  background: var(--white-50);\n  margin: .2rem 0 0 0;\n  text-transform: uppercase;\n  padding: .2rem 1.3rem 0 1.3rem;\n  line-height: 3;\n  transition: background .15s ease-in-out, color .15s ease-in-out;\n}\n.dropdown__tile[data-v-eef0bc52]:before {\n  font-size: 2.4rem;\n  line-height: 1.75;\n  float: left;\n}\n.dropdown-clicker[data-v-eef0bc52] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tiles l_flex l_flex--horizontal" },
    [
      _vm._l(_vm.profiles, function(profile) {
        return _c(
          "span",
          {
            staticClass: "tiles__tile",
            class: { "tiles__tile--active": profile.active },
            on: {
              click: function($event) {
                _vm.functionHandler(true, profile)
              }
            }
          },
          [_vm._v("\n    " + _vm._s(profile.name) + "\n  ")]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tiles__tile tiles__tile--dropdown",
          class: [
            { "tiles__tile--active": _vm.open },
            _vm.open ? "u_icon--up" : "u_icon--down"
          ]
        },
        [
          _c("div", {
            staticClass: "dropdown-clicker",
            on: {
              click: function($event) {
                _vm.toggleDropdown(_vm.open)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tiles__dropdown l_flex",
              class: [{ "tiles__dropdown--visible": _vm.open }, _vm.bg]
            },
            [
              _c("span", { staticClass: "dropdown__tile" }, [
                _vm._v("Profil 4")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "dropdown__tile u_icon--edit" }, [
                _vm._v("Bearbeiten")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "dropdown__tile u_icon--add" }, [
                _vm._v("Neu")
              ])
            ]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eef0bc52", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "l_wrapper--small" },
    [_c("h1", [_vm._v("homescreen")]), _vm._v(" "), _c("profile-switcher")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4602d282", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});