webpackJsonp([2],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(28);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fcfedee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(6);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(32)
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fcfedee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fcfedee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fcfedee", Component.options)
  } else {
    hotAPI.reload("data-v-9fcfedee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  function email(email) {
      return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  return {
    email: email,
  }
})());

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_router_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_validate_js__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: 'login',
      props: ['user'],
      data() {
          return {
            loading: false,
            error: new Error(),
          }
      },
      methods: {
        login() {
          this.loading = true;

          if (!__WEBPACK_IMPORTED_MODULE_1__utils_validate_js__["a" /* default */].email(this.user.getUserName())) {
            this.error.code = 0;
            this.error.message = 'Keine Valide Email-Adresse';
            this.loading = false;
            return;
          }

          Apiomat.Datastore.configureWithCredentials(this.user);

          this.user.loadMe({
            onOk: result => {
              this.error = new Error();
              __WEBPACK_IMPORTED_MODULE_0__utils_router_js__["a" /* default */].push('/');
            },
            onError: error => {
              this.error = error;
              this.loading = false;
            }
          });

        }
      }
  });


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("2d3591a2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.logo {\n  width: 40%;\n  margin-bottom: 16vw;\n}\n.btn {\n  width: 65%;\n  margin-top: 16vw;\n  margin-bottom: 16vw;\n}\n.inp {\n  margin: 1rem 0;\n}\n.l_wrapper {\n  justify-content: flex-start;\n}\n.link {\n  font-size: 1.8rem;\n  line-height: 2;\n  transition: color .15s ease-in-out;\n}\n.link:active {\n  opacity: .5;\n}\n.content {\n  opacity: 1;\n  transition: opacity .15s ease-in-out, visibility .15s ease-in-out .15s;\n}\n.content--hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n.loader {\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .15s ease-in-out;\n}\n.loader--active {\n  visibility: visible;\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "l_main" }, [
    _c(
      "div",
      { staticClass: "loader", class: { "loader--active": _vm.loading } },
      [
        _c(
          "svg",
          { staticClass: "circular", attrs: { viewBox: "25 25 50 50" } },
          [
            _c("circle", {
              staticClass: "path",
              attrs: {
                cx: "50",
                cy: "50",
                r: "20",
                fill: "none",
                "stroke-width": "2",
                "stroke-miterlimit": "10"
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("main", { staticClass: "l_flex l_flex--center" }, [
      _c("div", { staticClass: "l_flex l_wrapper" }, [
        _c("img", {
          staticClass: "logo u_center",
          attrs: { src: "assets/img/logo.svg" }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "l_flex content",
            class: { "content--hidden": _vm.loading }
          },
          [
            _vm.error.message
              ? _c("div", [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.error.statusCode) +
                      ": " +
                      _vm._s(_vm.error.message) +
                      "\n        "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "l_flex",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.data.userName,
                      expression: "user.data.userName"
                    }
                  ],
                  staticClass: "inp inp--18",
                  attrs: {
                    type: "email",
                    placeholder: "E-Mail-Adresse",
                    required: ""
                  },
                  domProps: { value: _vm.user.data.userName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user.data, "userName", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.data.password,
                      expression: "user.data.password"
                    }
                  ],
                  staticClass: "inp inp--18",
                  attrs: {
                    type: "password",
                    placeholder: "Passwort",
                    required: ""
                  },
                  domProps: { value: _vm.user.data.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user.data, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn--18 u_center",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Login")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "link u_center", attrs: { to: "/signup" } },
              [_vm._v("Noch kein Account?")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9fcfedee", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});