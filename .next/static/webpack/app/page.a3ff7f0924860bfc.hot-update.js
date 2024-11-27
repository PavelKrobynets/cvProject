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

/***/ "(app-pages-browser)/./src/app/components/favTools/Tools.tsx":
/*!***********************************************!*\
  !*** ./src/app/components/favTools/Tools.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tools)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _data_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/tools */ \"(app-pages-browser)/./src/app/data/tools.ts\");\n/* harmony import */ var _tools_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools.module.scss */ \"(app-pages-browser)/./src/app/components/favTools/tools.module.scss\");\n/* harmony import */ var _tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tools_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Tools() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tools),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h5, {\n                initial: {\n                    opacity: 0,\n                    y: 50\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0,\n                    transition: {\n                        duration: 1.2\n                    }\n                },\n                className: (_tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headline),\n                children: \"My favorite tools\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/favTools/Tools.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tools__list),\n                children: _data_tools__WEBPACK_IMPORTED_MODULE_1__.tools.map((tool, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {\n                        initial: {\n                            opacity: 0,\n                            y: 50 + index * index\n                        },\n                        whileInView: {\n                            opacity: 1,\n                            y: 0,\n                            transition: {\n                                duration: 1 + index * 0.1\n                            }\n                        },\n                        className: (_tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tools__item),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: tool.icon,\n                                alt: tool.title\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/favTools/Tools.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_tools_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tools__title),\n                                children: tool.title\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/favTools/Tools.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tool.title, true, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/favTools/Tools.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/favTools/Tools.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/favTools/Tools.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Tools;\nvar _c;\n$RefreshReg$(_c, \"Tools\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9mYXZUb29scy9Ub29scy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1QztBQUNFO0FBQ0E7QUFFMUIsU0FBU0c7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdILGlFQUFZOzswQkFDMUIsOERBQUNGLGlEQUFNQSxDQUFDTSxFQUFFO2dCQUNSQyxTQUFTO29CQUNQQyxTQUFTO29CQUNUQyxHQUFHO2dCQUNMO2dCQUNBQyxhQUFhO29CQUNYRixTQUFTO29CQUNUQyxHQUFHO29CQUNIRSxZQUFZO3dCQUFFQyxVQUFVO29CQUFJO2dCQUM5QjtnQkFDQVAsV0FBV0gsb0VBQWU7MEJBQzNCOzs7Ozs7MEJBR0QsOERBQUNZO2dCQUFHVCxXQUFXSCx1RUFBa0I7MEJBQzlCRCw4Q0FBS0EsQ0FBQ2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ2xCLGlEQUFNQSxDQUFDbUIsRUFBRTt3QkFDUlosU0FBUzs0QkFDUEMsU0FBUzs0QkFDVEMsR0FBRyxLQUFLUyxRQUFRQTt3QkFDbEI7d0JBQ0FSLGFBQWE7NEJBQ1hGLFNBQVM7NEJBQ1RDLEdBQUc7NEJBQ0hFLFlBQVk7Z0NBQUVDLFVBQVUsSUFBSU0sUUFBUTs0QkFBSTt3QkFDMUM7d0JBRUFiLFdBQVdILHVFQUFrQjs7MENBRTdCLDhEQUFDbUI7Z0NBQUlDLEtBQUtMLEtBQUtNLElBQUk7Z0NBQUVDLEtBQUtQLEtBQUtRLEtBQUs7Ozs7OzswQ0FDcEMsOERBQUNyQjtnQ0FBSUMsV0FBV0gsd0VBQW1COzBDQUFHZSxLQUFLUSxLQUFLOzs7Ozs7O3VCQUozQ1IsS0FBS1EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQVUzQjtLQXZDd0J0QiIsInNvdXJjZXMiOlsiL1VzZXJzL3BhdmVsa3JvYnluZXRzL0RvY3VtZW50cy9JVC90eXBlc2NyaXB0L2N2LXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2ZhdlRvb2xzL1Rvb2xzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gXCIuLi8uLi9kYXRhL3Rvb2xzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Rvb2xzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9vbHN9PlxuICAgICAgPG1vdGlvbi5oNVxuICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB5OiA1MCxcbiAgICAgICAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMS4yIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRsaW5lfVxuICAgICAgPlxuICAgICAgICBNeSBmYXZvcml0ZSB0b29sc1xuICAgICAgPC9tb3Rpb24uaDU+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudG9vbHNfX2xpc3R9PlxuICAgICAgICB7dG9vbHMubWFwKCh0b29sLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgeTogNTAgKyBpbmRleCAqIGluZGV4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgKyBpbmRleCAqIDAuMSB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17dG9vbC50aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvb2xzX19pdGVtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0b29sLmljb259IGFsdD17dG9vbC50aXRsZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9vbHNfX3RpdGxlfT57dG9vbC50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInRvb2xzIiwic3R5bGVzIiwiVG9vbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaGVhZGxpbmUiLCJ1bCIsInRvb2xzX19saXN0IiwibWFwIiwidG9vbCIsImluZGV4IiwibGkiLCJ0b29sc19faXRlbSIsImltZyIsInNyYyIsImljb24iLCJhbHQiLCJ0aXRsZSIsInRvb2xzX190aXRsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/favTools/Tools.tsx\n"));

/***/ })

});