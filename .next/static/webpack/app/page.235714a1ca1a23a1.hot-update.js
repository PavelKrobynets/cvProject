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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCard.module.scss */ \"(app-pages-browser)/./src/app/components/projectCard/projectCard.module.scss\");\n/* harmony import */ var _projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ProjectCard(param) {\n    let { img, tags, title, caption } = param;\n    _s();\n    const [modal, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleImageClick = ()=>{\n        setModalOpen(true);\n    };\n    const handleCloseModal = ()=>{\n        setModalOpen(false);\n    };\n    const modalWindow = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalOverlay),\n        onClick: handleCloseModal,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalImg),\n                src: img,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n                onClick: (e)=>e.stopPropagation(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalTitle),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalCaption),\n                        children: caption\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalTags),\n                        children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalTag),\n                                children: tag\n                            }, index, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalButton),\n                        onClick: handleCloseModal,\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n                onClick: handleImageClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: img,\n                        alt: title\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description),\n                        children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tag),\n                                children: tag\n                            }, tag, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            modal && modalWindow\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/projectCard/ProjectCard.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectCard, \"j+V7aqrIYXYTby7rZrgIViQhtIM=\");\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0Q2FyZC9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDYztBQVNoQyxTQUFTRSxZQUFZLEtBQW9DO1FBQXBDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBUyxHQUFwQzs7SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLG1CQUFtQjtRQUN2QkQsYUFBYTtJQUNmO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3ZCRixhQUFhO0lBQ2Y7SUFFQSxNQUFNRyw0QkFDSiw4REFBQ0M7UUFBSUMsV0FBV1osOEVBQW1CO1FBQUVjLFNBQVNMOzswQkFDNUMsOERBQUNQO2dCQUFJVSxXQUFXWiwwRUFBZTtnQkFBRWdCLEtBQUtkO2dCQUFLZSxLQUFLYjs7Ozs7OzBCQUNoRCw4REFBQ087Z0JBQUlDLFdBQVdaLDhFQUFtQjtnQkFBRWMsU0FBUyxDQUFDSyxJQUFNQSxFQUFFQyxlQUFlOztrQ0FDcEUsOERBQUNDO3dCQUFHVCxXQUFXWiw0RUFBaUI7a0NBQUdJOzs7Ozs7a0NBQ25DLDhEQUFDbUI7d0JBQUVYLFdBQVdaLDhFQUFtQjtrQ0FBR0s7Ozs7OztrQ0FDcEMsOERBQUNNO3dCQUFJQyxXQUFXWiwyRUFBZ0I7a0NBQzdCRyxLQUFLdUIsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNkLDhEQUFDQztnQ0FBaUJqQixXQUFXWiwwRUFBZTswQ0FDekMyQjsrQkFEUUM7Ozs7Ozs7Ozs7a0NBS2YsOERBQUNHO3dCQUFPbkIsV0FBV1osNkVBQWtCO3dCQUFFYyxTQUFTTDtrQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU94RSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDc0I7Z0JBQU9yQixXQUFXWixzRUFBVztnQkFBRWMsU0FBU047O2tDQUN2Qyw4REFBQ047d0JBQUljLEtBQUtkO3dCQUFLZSxLQUFLYjs7Ozs7O2tDQUNwQiw4REFBQytCO3dCQUFXdkIsV0FBV1osNkVBQWtCO2tDQUN0Q0csS0FBS3VCLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ0U7Z0NBQWVqQixXQUFXWixxRUFBVTswQ0FDbEMyQjsrQkFEUUE7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPaEJyQixTQUFTSTs7Ozs7OztBQUdoQjtHQS9Dd0JUO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvcGF2ZWxrcm9ieW5ldHMvRG9jdW1lbnRzL0lUL3R5cGVzY3JpcHQvY3YtcHJvamVjdC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdENhcmQvUHJvamVjdENhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvamVjdENhcmQubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW1nOiBzdHJpbmc7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICB0aXRsZTogc3RyaW5nO1xuICBjYXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDYXJkKHsgaW1nLCB0YWdzLCB0aXRsZSwgY2FwdGlvbiB9OiBQcm9wcykge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsV2luZG93ID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxPdmVybGF5fSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbWd9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRlbnR9IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9Pnt0aXRsZX08L2g1PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENhcHRpb259PntjYXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRhZ3N9PlxuICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUYWd9PlxuICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgQ2xvc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9PlxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgIDxzcGFuIGtleT17dGFnfSBjbGFzc05hbWU9e3N0eWxlcy50YWd9PlxuICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICA8L2ZpZ3VyZT5cblxuICAgICAge21vZGFsICYmIG1vZGFsV2luZG93fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiUHJvamVjdENhcmQiLCJpbWciLCJ0YWdzIiwidGl0bGUiLCJjYXB0aW9uIiwibW9kYWwiLCJzZXRNb2RhbE9wZW4iLCJoYW5kbGVJbWFnZUNsaWNrIiwiaGFuZGxlQ2xvc2VNb2RhbCIsIm1vZGFsV2luZG93IiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kYWxPdmVybGF5Iiwib25DbGljayIsIm1vZGFsSW1nIiwic3JjIiwiYWx0IiwibW9kYWxDb250ZW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImg1IiwibW9kYWxUaXRsZSIsInAiLCJtb2RhbENhcHRpb24iLCJtb2RhbFRhZ3MiLCJtYXAiLCJ0YWciLCJpbmRleCIsInNwYW4iLCJtb2RhbFRhZyIsImJ1dHRvbiIsIm1vZGFsQnV0dG9uIiwiZmlndXJlIiwiY2FyZCIsImZpZ2NhcHRpb24iLCJkZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/projectCard/ProjectCard.tsx\n"));

/***/ })

});