"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/main/Main.tsx":
/*!******************************************!*\
  !*** ./src/app/components/main/Main.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/app/components/main/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/smoothScroll */ \"(app-pages-browser)/./src/app/utils/smoothScroll.ts\");\n/* harmony import */ var _main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.module.scss */ \"(app-pages-browser)/./src/app/components/main/main.module.scss\");\n/* harmony import */ var _main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Main.useEffect\": ()=>{\n            const handleWheel = {\n                \"Main.useEffect.handleWheel\": (event)=>{\n                    event.preventDefault();\n                    (0,_utils_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.smoothScroll)(event.deltaY);\n                }\n            }[\"Main.useEffect.handleWheel\"];\n            window.addEventListener(\"wheel\", handleWheel, {\n                passive: false\n            });\n            return ({\n                \"Main.useEffect\": ()=>{\n                    window.removeEventListener(\"wheel\", handleWheel);\n                }\n            })[\"Main.useEffect\"];\n        }\n    }[\"Main.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Home, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.About, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Portfolio, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Education, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Contacts, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL01haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFOEU7QUFDNUM7QUFDc0I7QUFDaEI7QUFFekIsU0FBU1M7O0lBQ3RCSCxnREFBU0E7MEJBQUM7WUFDUixNQUFNSTs4Q0FBYyxDQUFDQztvQkFDbkJBLE1BQU1DLGNBQWM7b0JBQ3BCTCxpRUFBWUEsQ0FBQ0ksTUFBTUUsTUFBTTtnQkFDM0I7O1lBRUFDLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNMLGFBQWE7Z0JBQUVNLFNBQVM7WUFBTTtZQUUvRDtrQ0FBTztvQkFDTEYsT0FBT0csbUJBQW1CLENBQUMsU0FBU1A7Z0JBQ3RDOztRQUNGO3lCQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV1gsK0RBQVc7OzBCQUN6Qiw4REFBQ1IsMENBQU1BOzs7OzswQkFDUCw4REFBQ0Msd0NBQUlBOzs7OzswQkFDTCw4REFBQ0UseUNBQUtBOzs7OzswQkFDTiw4REFBQ0QsNkNBQVNBOzs7OzswQkFDViw4REFBQ0UsNkNBQVNBOzs7OzswQkFDViw4REFBQ0MsNENBQVFBOzs7Ozs7Ozs7OztBQUdmO0dBdkJ3Qkk7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGtyb2J5bmV0cy9Eb2N1bWVudHMvSVQvdHlwZXNjcmlwdC9jdi1wcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9tYWluL01haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBIZWFkZXIsIEhvbWUsIFBvcnRmb2xpbywgQWJvdXQsIEVkdWNhdGlvbiwgQ29udGFjdHMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzbW9vdGhTY3JvbGwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvc21vb3RoU2Nyb2xsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21haW4ubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVXaGVlbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNtb290aFNjcm9sbChldmVudC5kZWx0YVkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlV2hlZWwpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEhvbWUgLz5cbiAgICAgIDxBYm91dCAvPlxuICAgICAgPFBvcnRmb2xpbyAvPlxuICAgICAgPEVkdWNhdGlvbiAvPlxuICAgICAgPENvbnRhY3RzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiSG9tZSIsIlBvcnRmb2xpbyIsIkFib3V0IiwiRWR1Y2F0aW9uIiwiQ29udGFjdHMiLCJ1c2VFZmZlY3QiLCJzbW9vdGhTY3JvbGwiLCJzdHlsZXMiLCJNYWluIiwiaGFuZGxlV2hlZWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/main/Main.tsx\n"));

/***/ })

});