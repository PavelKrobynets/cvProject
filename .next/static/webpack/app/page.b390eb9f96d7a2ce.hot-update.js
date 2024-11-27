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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _list_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.module.scss */ \"(app-pages-browser)/./src/app/components/list/list.module.scss\");\n/* harmony import */ var _list_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction List(param) {\n    let { headline, list } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h4, {\n                initial: {\n                    opacity: 0,\n                    y: 50\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0,\n                    transition: {\n                        duration: 1.2\n                    }\n                },\n                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().headline),\n                children: headline\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().listItems),\n                children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {\n                        className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().listItem),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().year),\n                                children: item.year\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_list_module_scss__WEBPACK_IMPORTED_MODULE_1___default().description),\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.title, true, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/list/List.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9saXN0L0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUVDO0FBT3pCLFNBQVNFLEtBQUssS0FBeUI7UUFBekIsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQVMsR0FBekI7SUFDM0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdMLCtEQUFXOzswQkFDekIsOERBQUNELGlEQUFNQSxDQUFDTyxFQUFFO2dCQUNSQyxTQUFTO29CQUNQQyxTQUFTO29CQUNUQyxHQUFHO2dCQUNMO2dCQUNBQyxhQUFhO29CQUNYRixTQUFTO29CQUNUQyxHQUFHO29CQUNIRSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO2dCQUM5QjtnQkFDQVAsV0FBV0wsbUVBQWU7MEJBRXpCRTs7Ozs7OzBCQUVILDhEQUFDVztnQkFBR1IsV0FBV0wsb0VBQWdCOzBCQUM1QkcsS0FBS1ksR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDakIsaURBQU1BLENBQUNrQixFQUFFO3dCQUFDWixXQUFXTCxtRUFBZTs7MENBQ25DLDhEQUFDSTtnQ0FBSUMsV0FBV0wsK0RBQVc7MENBQUdnQixLQUFLRyxJQUFJOzs7Ozs7MENBQ3ZDLDhEQUFDZjtnQ0FBSUMsV0FBV0wsZ0VBQVk7MENBQUdnQixLQUFLSSxLQUFLOzs7Ozs7MENBQ3pDLDhEQUFDaEI7Z0NBQUlDLFdBQVdMLHNFQUFrQjswQ0FBR2dCLEtBQUtLLFdBQVc7Ozs7Ozs7dUJBSFhMLEtBQUtJLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEU7S0E1QndCbkIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGtyb2J5bmV0cy9Eb2N1bWVudHMvSVQvdHlwZXNjcmlwdC9jdi1wcm9qZWN0L3NyYy9hcHAvY29tcG9uZW50cy9saXN0L0xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xpc3QubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaGVhZGxpbmU6IHN0cmluZztcbiAgbGlzdDogTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGhlYWRsaW5lLCBsaXN0IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgIDxtb3Rpb24uaDRcbiAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgeTogNTAsXG4gICAgICAgIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEuMiB9LFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkbGluZX1cbiAgICAgID5cbiAgICAgICAge2hlYWRsaW5lfVxuICAgICAgPC9tb3Rpb24uaDQ+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW1zfT5cbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5saSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMueWVhcn0+e2l0ZW0ueWVhcn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJMaXN0IiwiaGVhZGxpbmUiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInVsIiwibGlzdEl0ZW1zIiwibWFwIiwiaXRlbSIsImxpIiwibGlzdEl0ZW0iLCJ5ZWFyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/list/List.tsx\n"));

/***/ })

});