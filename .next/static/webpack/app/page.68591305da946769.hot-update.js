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

/***/ "(app-pages-browser)/./src/app/components/projectCard/ProjectCard.tsx":
/*!********************************************************!*\
  !*** ./src/app/components/projectCard/ProjectCard.tsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCard.module.scss */ \"(app-pages-browser)/./src/app/components/projectCard/projectCard.module.scss\");\n/* harmony import */ var _projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ProjectCard(param) {\n    let { img, tags, title, caption } = param;\n    _s();\n    const [modal, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleImageClick = ()=>{\n        setModalOpen(true);\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n    };\n    const modalWindow = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalOverlay),\n        onClick: handleCloseModal,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalClose),\n                onClick: handleCloseModal,\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalImg),\n                src: img,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n                onClick: (e)=>e.stopPropagation(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalTitle),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalTags),\n                        children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalTag),\n                                children: tag\n                            }, index, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalCaption),\n                        children: caption\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n                onClick: handleImageClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: img,\n                        alt: title\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description),\n                        children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tag),\n                                children: tag\n                            }, tag, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            modal && modalWindow\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectCard, \"j+V7aqrIYXYTby7rZrgIViQhtIM=\");\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0Q2FyZC9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDYztBQVNoQyxTQUFTRSxZQUFZLEtBQW9DO1FBQXBDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBUyxHQUFwQzs7SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLG1CQUFtQjtRQUN2QkQsYUFBYTtJQUNmO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3ZCRixhQUFhO0lBQ2Y7SUFFQSxNQUFNRyw0QkFDSiw4REFBQ0M7UUFBSUMsV0FBV1osOEVBQW1CO1FBQUVjLFNBQVNMOzswQkFDNUMsOERBQUNFO2dCQUFJQyxXQUFXWiw0RUFBaUI7Z0JBQUVjLFNBQVNMOzBCQUFrQjs7Ozs7OzBCQUc5RCw4REFBQ1A7Z0JBQUlVLFdBQVdaLDBFQUFlO2dCQUFFaUIsS0FBS2Y7Z0JBQUtnQixLQUFLZDs7Ozs7OzBCQUNoRCw4REFBQ087Z0JBQUlDLFdBQVdaLDhFQUFtQjtnQkFBRWMsU0FBUyxDQUFDTSxJQUFNQSxFQUFFQyxlQUFlOztrQ0FDcEUsOERBQUNDO3dCQUFHVixXQUFXWiw0RUFBaUI7a0NBQUdJOzs7Ozs7a0NBQ25DLDhEQUFDTzt3QkFBSUMsV0FBV1osMkVBQWdCO2tDQUM3QkcsS0FBS3NCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ0M7Z0NBQWlCaEIsV0FBV1osMEVBQWU7MENBQ3pDMEI7K0JBRFFDOzs7Ozs7Ozs7O2tDQUtmLDhEQUFDRzt3QkFBRWxCLFdBQVdaLDhFQUFtQjtrQ0FBR0s7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUsxQyxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDcUI7Z0JBQU9wQixXQUFXWixzRUFBVztnQkFBRWMsU0FBU047O2tDQUN2Qyw4REFBQ047d0JBQUllLEtBQUtmO3dCQUFLZ0IsS0FBS2Q7Ozs7OztrQ0FDcEIsOERBQUM4Qjt3QkFBV3RCLFdBQVdaLDZFQUFrQjtrQ0FDdENHLEtBQUtzQixHQUFHLENBQUMsQ0FBQ0Msb0JBQ1QsOERBQUNFO2dDQUFlaEIsV0FBV1oscUVBQVU7MENBQ2xDMEI7K0JBRFFBOzs7Ozs7Ozs7Ozs7Ozs7O1lBT2hCcEIsU0FBU0k7Ozs7Ozs7QUFHaEI7R0EvQ3dCVDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3BhdmVsa3JvYnluZXRzL0RvY3VtZW50cy9JVC90eXBlc2NyaXB0L2N2LXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RDYXJkL1Byb2plY3RDYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Byb2plY3RDYXJkLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGltZzogc3RyaW5nO1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgY2FwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q2FyZCh7IGltZywgdGFncywgdGl0bGUsIGNhcHRpb24gfTogUHJvcHMpIHtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBtb2RhbFdpbmRvdyA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsT3ZlcmxheX0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ2xvc2V9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9PlxuICAgICAgICB4XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbWd9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRlbnR9IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9Pnt0aXRsZX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGFnc30+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRhZ30+XG4gICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENhcHRpb259PntjYXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17aGFuZGxlSW1hZ2VDbGlja30+XG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT17c3R5bGVzLnRhZ30+XG4gICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZmlndXJlPlxuXG4gICAgICB7bW9kYWwgJiYgbW9kYWxXaW5kb3d9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJQcm9qZWN0Q2FyZCIsImltZyIsInRhZ3MiLCJ0aXRsZSIsImNhcHRpb24iLCJtb2RhbCIsInNldE1vZGFsT3BlbiIsImhhbmRsZUltYWdlQ2xpY2siLCJoYW5kbGVDbG9zZU1vZGFsIiwibW9kYWxXaW5kb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RhbE92ZXJsYXkiLCJvbkNsaWNrIiwibW9kYWxDbG9zZSIsIm1vZGFsSW1nIiwic3JjIiwiYWx0IiwibW9kYWxDb250ZW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImg1IiwibW9kYWxUaXRsZSIsIm1vZGFsVGFncyIsIm1hcCIsInRhZyIsImluZGV4Iiwic3BhbiIsIm1vZGFsVGFnIiwicCIsIm1vZGFsQ2FwdGlvbiIsImZpZ3VyZSIsImNhcmQiLCJmaWdjYXB0aW9uIiwiZGVzY3JpcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/projectCard/ProjectCard.tsx\n"));

/***/ })

});