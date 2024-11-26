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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MessageCircleMore_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MessageCircleMore!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-circle-more.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.scss */ \"(app-pages-browser)/./src/app/components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            const sections = document.querySelectorAll(\"section\");\n            const observer = new IntersectionObserver({\n                \"Header.useEffect\": (entries)=>{\n                    entries.forEach({\n                        \"Header.useEffect\": (entry)=>{\n                            if (entry.isIntersecting) {\n                                setActiveSection(entry.target.id);\n                            }\n                        }\n                    }[\"Header.useEffect\"]);\n                }\n            }[\"Header.useEffect\"], {\n                threshold: 0.7\n            });\n            sections.forEach({\n                \"Header.useEffect\": (section)=>{\n                    observer.observe(section);\n                }\n            }[\"Header.useEffect\"]);\n            return ({\n                \"Header.useEffect\": ()=>{\n                    sections.forEach({\n                        \"Header.useEffect\": (section)=>{\n                            observer.unobserve(section);\n                        }\n                    }[\"Header.useEffect\"]);\n                }\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.header, {\n        initial: {\n            opacity: 0,\n            y: -50\n        },\n        animate: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 1.2\n            }\n        },\n        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"home\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#home\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"about\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#about\",\n                                children: \"About Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"portfolio\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#portfolio\",\n                                children: \"Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"education\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#education\",\n                                children: \"Education\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection === \"contacts\" ? (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"#contacts\",\n                                children: \"Contacts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn),\n                href: \"mailto:krobynetspavel@gmail.com\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: [\n                        \"Let's talk \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageCircleMore_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 22\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelkrobynets/Documents/IT/typescript/cv-project/src/app/components/header/Header.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"pAvB9cpw8vw8pU4S6BnzkRSUZo8=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNLO0FBQ3BCO0FBQ1U7QUFDRztBQUUzQixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQVM7SUFFM0RDLGdEQUFTQTs0QkFBQztZQUNSLE1BQU1RLFdBQVdDLFNBQVNDLGdCQUFnQixDQUFjO1lBRXhELE1BQU1DLFdBQVcsSUFBSUM7b0NBQ25CLENBQUNDO29CQUNDQSxRQUFRQyxPQUFPOzRDQUFDLENBQUNDOzRCQUNmLElBQUlBLE1BQU1DLGNBQWMsRUFBRTtnQ0FDeEJULGlCQUFpQlEsTUFBTUUsTUFBTSxDQUFDQyxFQUFFOzRCQUNsQzt3QkFDRjs7Z0JBQ0Y7bUNBQ0E7Z0JBQ0VDLFdBQVc7WUFDYjtZQUdGWCxTQUFTTSxPQUFPO29DQUFDLENBQUNNO29CQUNoQlQsU0FBU1UsT0FBTyxDQUFDRDtnQkFDbkI7O1lBRUE7b0NBQU87b0JBQ0xaLFNBQVNNLE9BQU87NENBQUMsQ0FBQ007NEJBQ2hCVCxTQUFTVyxTQUFTLENBQUNGO3dCQUNyQjs7Z0JBQ0Y7O1FBQ0Y7MkJBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDakIsaURBQU1BLENBQUNvQixNQUFNO1FBQ1pDLFNBQVM7WUFDUEMsU0FBUztZQUNUQyxHQUFHLENBQUM7UUFDTjtRQUNBQyxTQUFTO1lBQ1BGLFNBQVM7WUFDVEMsR0FBRztZQUNIRSxZQUFZO2dCQUFFQyxVQUFVO1lBQUk7UUFDOUI7UUFDQUMsV0FBVzFCLG1FQUFhOzswQkFFeEIsOERBQUMyQjswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR0gsV0FBV3hCLGtCQUFrQixTQUFTRixtRUFBYSxHQUFHO3NDQUN4RCw0RUFBQ0YsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBUTs7Ozs7Ozs7Ozs7c0NBRXJCLDhEQUFDRjs0QkFBR0gsV0FBV3hCLGtCQUFrQixVQUFVRixtRUFBYSxHQUFHO3NDQUN6RCw0RUFBQ0YsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7c0NBRXRCLDhEQUFDRjs0QkFBR0gsV0FBV3hCLGtCQUFrQixjQUFjRixtRUFBYSxHQUFHO3NDQUM3RCw0RUFBQ0YsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBYTs7Ozs7Ozs7Ozs7c0NBRTFCLDhEQUFDRjs0QkFBR0gsV0FBV3hCLGtCQUFrQixjQUFjRixtRUFBYSxHQUFHO3NDQUM3RCw0RUFBQ0YsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBYTs7Ozs7Ozs7Ozs7c0NBRTFCLDhEQUFDRjs0QkFBR0gsV0FBV3hCLGtCQUFrQixhQUFhRixtRUFBYSxHQUFHO3NDQUM1RCw0RUFBQ0YsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLN0IsOERBQUNqQyxpREFBSUE7Z0JBQUM0QixXQUFXMUIsZ0VBQVU7Z0JBQUUrQixNQUFLOzBCQUNoQyw0RUFBQ0U7O3dCQUFPO3NDQUNLLDhEQUFDcEMsNkZBQWlCQTs0QkFBQzZCLFdBQVcxQixpRUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUQ7R0F0RXdCQztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3BhdmVsa3JvYnluZXRzL0RvY3VtZW50cy9JVC90eXBlc2NyaXB0L2N2LXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZU1vcmUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9oZWFkZXIubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiaG9tZVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJzZWN0aW9uXCIpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKGVudHJ5LnRhcmdldC5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRocmVzaG9sZDogMC43LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHNlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5oZWFkZXJcbiAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogLTUwLFxuICAgICAgfX1cbiAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMS4yIH0sXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfVxuICAgID5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVTZWN0aW9uID09PSBcImhvbWVcIiA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVTZWN0aW9uID09PSBcImFib3V0XCIgPyBzdHlsZXMuYWN0aXZlIDogXCJcIn0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0XCI+QWJvdXQgTWU8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVTZWN0aW9uID09PSBcInBvcnRmb2xpb1wiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNwb3J0Zm9saW9cIj5Qb3J0Zm9saW88L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVTZWN0aW9uID09PSBcImVkdWNhdGlvblwiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNlZHVjYXRpb25cIj5FZHVjYXRpb248L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVTZWN0aW9uID09PSBcImNvbnRhY3RzXCIgPyBzdHlsZXMuYWN0aXZlIDogXCJcIn0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI2NvbnRhY3RzXCI+Q29udGFjdHM8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5idG59IGhyZWY9XCJtYWlsdG86a3JvYnluZXRzcGF2ZWxAZ21haWwuY29tXCI+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgTGV0J3MgdGFsayA8TWVzc2FnZUNpcmNsZU1vcmUgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0xpbms+XG4gICAgPC9tb3Rpb24uaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVzc2FnZUNpcmNsZU1vcmUiLCJMaW5rIiwibW90aW9uIiwic3R5bGVzIiwiSGVhZGVyIiwiYWN0aXZlU2VjdGlvbiIsInNldEFjdGl2ZVNlY3Rpb24iLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJpZCIsInRocmVzaG9sZCIsInNlY3Rpb24iLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiaGVhZGVyIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibGkiLCJhY3RpdmUiLCJocmVmIiwiYnRuIiwiYnV0dG9uIiwiaWNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/header/Header.tsx\n"));

/***/ })

});