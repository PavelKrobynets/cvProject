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

/***/ "(app-pages-browser)/./src/app/components/list/List.tsx":
/*!******************************************!*\
  !*** ./src/app/components/list/List.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _list_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.module.scss */ \"(app-pages-browser)/./src/app/components/list/list.module.scss\");\n/* harmony import */ var _list_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction List(param) {\n    let { headline, list } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h4, {\n                initial: {\n                    opacity: 0,\n                    y: 50\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0,\n                    transition: {\n                        duration: 1.2\n                    }\n                },\n                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().headline),\n                children: headline\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().listItems),\n                children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                        initial: {\n                            opacity: 0,\n                            y: 50\n                        },\n                        whileInView: {\n                            opacity: 1,\n                            y: 0,\n                            transition: {\n                                duration: 1.2\n                            }\n                        },\n                        className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().listItem),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().year),\n                                children: item.year\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().description),\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.title, true, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9saXN0L0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUVDO0FBT3pCLFNBQVNFLEtBQUssS0FBeUI7UUFBekIsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQVMsR0FBekI7SUFDM0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdMLCtEQUFXOzswQkFDekIsOERBQUNELGlEQUFNQSxDQUFDTyxFQUFFO2dCQUNSQyxTQUFTO29CQUNQQyxTQUFTO29CQUNUQyxHQUFHO2dCQUNMO2dCQUNBQyxhQUFhO29CQUNYRixTQUFTO29CQUNUQyxHQUFHO29CQUNIRSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO2dCQUM5QjtnQkFDQVAsV0FBV0wsbUVBQWU7MEJBRXpCRTs7Ozs7OzBCQUVILDhEQUFDVztnQkFBR1IsV0FBV0wsb0VBQWdCOzBCQUM1QkcsS0FBS1ksR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDakIsaURBQU1BLENBQUNrQixFQUFFO3dCQUNSVixTQUFTOzRCQUNQQyxTQUFTOzRCQUNUQyxHQUFHO3dCQUNMO3dCQUNBQyxhQUFhOzRCQUNYRixTQUFTOzRCQUNUQyxHQUFHOzRCQUNIRSxZQUFZO2dDQUFFQyxVQUFVOzRCQUFJO3dCQUM5Qjt3QkFDQVAsV0FBV0wsbUVBQWU7OzBDQUcxQiw4REFBQ0k7Z0NBQUlDLFdBQVdMLCtEQUFXOzBDQUFHZ0IsS0FBS0csSUFBSTs7Ozs7OzBDQUN2Qyw4REFBQ2Y7Z0NBQUlDLFdBQVdMLGdFQUFZOzBDQUFHZ0IsS0FBS0ksS0FBSzs7Ozs7OzBDQUN6Qyw4REFBQ2hCO2dDQUFJQyxXQUFXTCxzRUFBa0I7MENBQUdnQixLQUFLSyxXQUFXOzs7Ozs7O3VCQUpoREwsS0FBS0ksS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQVUzQjtLQXhDd0JuQiIsInNvdXJjZXMiOlsiL1VzZXJzL3BhdmVsa3JvYnluZXRzL0RvY3VtZW50cy9JVC90eXBlc2NyaXB0L2N2LXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2xpc3QvTGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGlzdC5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBoZWFkbGluZTogc3RyaW5nO1xuICBsaXN0OiBMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaGVhZGxpbmUsIGxpc3QgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgPG1vdGlvbi5oNFxuICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB5OiA1MCxcbiAgICAgICAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMS4yIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRsaW5lfVxuICAgICAgPlxuICAgICAgICB7aGVhZGxpbmV9XG4gICAgICA8L21vdGlvbi5oND5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbXN9PlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHk6IDUwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEuMiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfVxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMueWVhcn0+e2l0ZW0ueWVhcn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJMaXN0IiwiaGVhZGxpbmUiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInVsIiwibGlzdEl0ZW1zIiwibWFwIiwiaXRlbSIsImxpIiwibGlzdEl0ZW0iLCJ5ZWFyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/list/List.tsx\n"));

/***/ })

});