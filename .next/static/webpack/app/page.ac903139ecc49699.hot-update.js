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

/***/ "(app-pages-browser)/./src/app/components/header/Header.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/header/Header.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MessageCircleMore_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MessageCircleMore!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-circle-more.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.scss */ \"(app-pages-browser)/./src/app/components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            const sections = document.querySelectorAll(\"section\");\n            const observer = new IntersectionObserver({\n                \"Header.useEffect\": (entries)=>{\n                    entries.forEach({\n                        \"Header.useEffect\": (entry)=>{\n                            if (entry.isIntersecting) {\n                                setActiveSection(entry.target.id);\n                            }\n                        }\n                    }[\"Header.useEffect\"]);\n                }\n            }[\"Header.useEffect\"], {\n                threshold: 0.7\n            });\n            sections.forEach({\n                \"Header.useEffect\": (section)=>{\n                    observer.observe(section);\n                }\n            }[\"Header.useEffect\"]);\n            return ({\n                \"Header.useEffect\": ()=>{\n                    sections.forEach({\n                        \"Header.useEffect\": (section)=>{\n                            observer.unobserve(section);\n                        }\n                    }[\"Header.useEffect\"]);\n                }\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"home\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#home\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"portfolio\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#portfolio\",\n                                children: \"Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"about\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#about\",\n                                children: \"About Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"education\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#education\",\n                                children: \"Education\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"contacts\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#contacts\",\n                                children: \"Contacts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn),\n                href: \"mailto:krobynetspavel@gmail.com\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: [\n                        \"Let's talk \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageCircleMore_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 22\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"pAvB9cpw8vw8pU4S6BnzkRSUZo8=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0s7QUFDcEI7QUFFYTtBQUUzQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQVM7SUFFM0RDLGdEQUFTQTs0QkFBQztZQUNSLE1BQU1PLFdBQVdDLFNBQVNDLGdCQUFnQixDQUFjO1lBRXhELE1BQU1DLFdBQVcsSUFBSUM7b0NBQ25CLENBQUNDO29CQUNDQSxRQUFRQyxPQUFPOzRDQUFDLENBQUNDOzRCQUNmLElBQUlBLE1BQU1DLGNBQWMsRUFBRTtnQ0FDeEJULGlCQUFpQlEsTUFBTUUsTUFBTSxDQUFDQyxFQUFFOzRCQUNsQzt3QkFDRjs7Z0JBQ0Y7bUNBQ0E7Z0JBQ0VDLFdBQVc7WUFDYjtZQUdGWCxTQUFTTSxPQUFPO29DQUFDLENBQUNNO29CQUNoQlQsU0FBU1UsT0FBTyxDQUFDRDtnQkFDbkI7O1lBRUE7b0NBQU87b0JBQ0xaLFNBQVNNLE9BQU87NENBQUMsQ0FBQ007NEJBQ2hCVCxTQUFTVyxTQUFTLENBQUNGO3dCQUNyQjs7Z0JBQ0Y7O1FBQ0Y7MkJBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRztRQUFPQyxXQUFXcEIsbUVBQWE7OzBCQUM5Qiw4REFBQ3FCOzBCQUNDLDRFQUFDQzs7c0NBQ0MsOERBQUNDOzRCQUFHSCxXQUFXbEIsa0JBQWtCLFNBQVNGLG1FQUFhLEdBQUc7c0NBQ3hELDRFQUFDRCxpREFBSUE7Z0NBQUMwQixNQUFLOzBDQUFROzs7Ozs7Ozs7OztzQ0FFckIsOERBQUNGOzRCQUFHSCxXQUFXbEIsa0JBQWtCLGNBQWNGLG1FQUFhLEdBQUc7c0NBQzdELDRFQUFDRCxpREFBSUE7Z0NBQUMwQixNQUFLOzBDQUFhOzs7Ozs7Ozs7OztzQ0FFMUIsOERBQUNGOzRCQUFHSCxXQUFXbEIsa0JBQWtCLFVBQVVGLG1FQUFhLEdBQUc7c0NBQ3pELDRFQUFDRCxpREFBSUE7Z0NBQUMwQixNQUFLOzBDQUFTOzs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNGOzRCQUFHSCxXQUFXbEIsa0JBQWtCLGNBQWNGLG1FQUFhLEdBQUc7c0NBQzdELDRFQUFDRCxpREFBSUE7Z0NBQUMwQixNQUFLOzBDQUFhOzs7Ozs7Ozs7OztzQ0FFMUIsOERBQUNGOzRCQUFHSCxXQUFXbEIsa0JBQWtCLGFBQWFGLG1FQUFhLEdBQUc7c0NBQzVELDRFQUFDRCxpREFBSUE7Z0NBQUMwQixNQUFLOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUs3Qiw4REFBQzFCLGlEQUFJQTtnQkFBQ3FCLFdBQVdwQixnRUFBVTtnQkFBRXlCLE1BQUs7MEJBQ2hDLDRFQUFDRTs7d0JBQU87c0NBQ0ssOERBQUM3Qiw2RkFBaUJBOzRCQUFDc0IsV0FBV3BCLGlFQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RDtHQTNEd0JDO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvcGF2ZWxrcm9ieW5ldHMvRG9jdW1lbnRzL0lUL3R5cGVzY3JpcHQvY3YtcHJvamVjdC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZXNzYWdlQ2lyY2xlTW9yZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJob21lXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oZW50cnkudGFyZ2V0LmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGhyZXNob2xkOiAwLjcsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoc2VjdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlU2VjdGlvbiA9PT0gXCJob21lXCIgPyBzdHlsZXMuYWN0aXZlIDogXCJcIn0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlU2VjdGlvbiA9PT0gXCJwb3J0Zm9saW9cIiA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlU2VjdGlvbiA9PT0gXCJhYm91dFwiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNhYm91dFwiPkFib3V0IE1lPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlU2VjdGlvbiA9PT0gXCJlZHVjYXRpb25cIiA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjZWR1Y2F0aW9uXCI+RWR1Y2F0aW9uPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlU2VjdGlvbiA9PT0gXCJjb250YWN0c1wiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNjb250YWN0c1wiPkNvbnRhY3RzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cblxuICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBocmVmPVwibWFpbHRvOmtyb2J5bmV0c3BhdmVsQGdtYWlsLmNvbVwiPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIExldCdzIHRhbGsgPE1lc3NhZ2VDaXJjbGVNb3JlIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVzc2FnZUNpcmNsZU1vcmUiLCJMaW5rIiwic3R5bGVzIiwiSGVhZGVyIiwiYWN0aXZlU2VjdGlvbiIsInNldEFjdGl2ZVNlY3Rpb24iLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJpZCIsInRocmVzaG9sZCIsInNlY3Rpb24iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJsaSIsImFjdGl2ZSIsImhyZWYiLCJidG4iLCJidXR0b24iLCJpY29uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/header/Header.tsx\n"));

/***/ })

});