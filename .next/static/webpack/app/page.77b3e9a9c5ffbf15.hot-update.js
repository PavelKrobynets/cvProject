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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/app/components/main/index.ts\");\n/* harmony import */ var _main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.module.scss */ \"(app-pages-browser)/./src/app/components/main/main.module.scss\");\n/* harmony import */ var _main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Main() {\n    const smoothScroll = (event)=>{\n        event.preventDefault();\n        const scrollDelta = event.deltaY;\n        const scrollStep = 50; // adjust this value to control the scroll speed\n        const targetPosition = window.scrollY + scrollDelta * scrollStep;\n        const animateScroll = ()=>{\n            const currentPosition = window.scrollY;\n            if (Math.abs(currentPosition - targetPosition) > 1) {\n                window.scrollTo(0, currentPosition + (targetPosition - currentPosition) * 0.5);\n                requestAnimationFrame(animateScroll);\n            }\n        };\n        animateScroll();\n    };\n    document.addEventListener(\"wheel\", smoothScroll);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Home, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.About, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Portfolio, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Education, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_1__.Contacts, {}, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/main/Main.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL01haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM4RTtBQUN0QztBQUV6QixTQUFTTztJQUN0QixNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLGNBQWNGLE1BQU1HLE1BQU07UUFDaEMsTUFBTUMsYUFBYSxJQUFJLGdEQUFnRDtRQUN2RSxNQUFNQyxpQkFBaUJDLE9BQU9DLE9BQU8sR0FBR0wsY0FBY0U7UUFFdEQsTUFBTUksZ0JBQWdCO1lBQ3BCLE1BQU1DLGtCQUFrQkgsT0FBT0MsT0FBTztZQUN0QyxJQUFJRyxLQUFLQyxHQUFHLENBQUNGLGtCQUFrQkosa0JBQWtCLEdBQUc7Z0JBQ2xEQyxPQUFPTSxRQUFRLENBQ2IsR0FDQUgsa0JBQWtCLENBQUNKLGlCQUFpQkksZUFBYyxJQUFLO2dCQUV6REksc0JBQXNCTDtZQUN4QjtRQUNGO1FBRUFBO0lBQ0Y7SUFFQU0sU0FBU0MsZ0JBQWdCLENBQUMsU0FBU2hCO0lBRW5DLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBV3BCLCtEQUFXOzswQkFDekIsOERBQUNOLDBDQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLHdDQUFJQTs7Ozs7MEJBQ0wsOERBQUNFLHlDQUFLQTs7Ozs7MEJBQ04sOERBQUNELDZDQUFTQTs7Ozs7MEJBQ1YsOERBQUNFLDZDQUFTQTs7Ozs7MEJBQ1YsOERBQUNDLDRDQUFRQTs7Ozs7Ozs7Ozs7QUFHZjtLQWpDd0JFIiwic291cmNlcyI6WyIvVXNlcnMvcGF2ZWxrcm9ieW5ldHMvRG9jdW1lbnRzL0lUL3R5cGVzY3JpcHQvY3YtcHJvamVjdC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9NYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEhlYWRlciwgSG9tZSwgUG9ydGZvbGlvLCBBYm91dCwgRWR1Y2F0aW9uLCBDb250YWN0cyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21haW4ubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3Qgc21vb3RoU2Nyb2xsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IGV2ZW50LmRlbHRhWTtcbiAgICBjb25zdCBzY3JvbGxTdGVwID0gNTA7IC8vIGFkanVzdCB0aGlzIHZhbHVlIHRvIGNvbnRyb2wgdGhlIHNjcm9sbCBzcGVlZFxuICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyBzY3JvbGxEZWx0YSAqIHNjcm9sbFN0ZXA7XG5cbiAgICBjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBpZiAoTWF0aC5hYnMoY3VycmVudFBvc2l0aW9uIC0gdGFyZ2V0UG9zaXRpb24pID4gMSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oXG4gICAgICAgICAgMCxcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24gKyAodGFyZ2V0UG9zaXRpb24gLSBjdXJyZW50UG9zaXRpb24pICogMC41XG4gICAgICAgICk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYW5pbWF0ZVNjcm9sbCgpO1xuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBzbW9vdGhTY3JvbGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxIb21lIC8+XG4gICAgICA8QWJvdXQgLz5cbiAgICAgIDxQb3J0Zm9saW8gLz5cbiAgICAgIDxFZHVjYXRpb24gLz5cbiAgICAgIDxDb250YWN0cyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkhvbWUiLCJQb3J0Zm9saW8iLCJBYm91dCIsIkVkdWNhdGlvbiIsIkNvbnRhY3RzIiwic3R5bGVzIiwiTWFpbiIsInNtb290aFNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxEZWx0YSIsImRlbHRhWSIsInNjcm9sbFN0ZXAiLCJ0YXJnZXRQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJhbmltYXRlU2Nyb2xsIiwiY3VycmVudFBvc2l0aW9uIiwiTWF0aCIsImFicyIsInNjcm9sbFRvIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/main/Main.tsx\n"));

/***/ })

});