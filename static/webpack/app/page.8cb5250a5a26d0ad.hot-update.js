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

/***/ "(app-client)/./src/components/MainPage.js":
/*!************************************!*\
  !*** ./src/components/MainPage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_GuessState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GuessState */ \"(app-client)/./src/components/GuessState.js\");\n/* harmony import */ var _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/styleConstants */ \"(app-client)/./src/components/styleConstants.js\");\n/* harmony import */ var _hooks_useGetWords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useGetWords */ \"(app-client)/./src/hooks/useGetWords.js\");\n/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useStorage */ \"(app-client)/./src/hooks/useStorage.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Icons */ \"(app-client)/./src/Icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: unset;\\n  position: relative;\\n  text-align: center;\\n  background-image: url('/mainLogo.svg');\\n  background-repeat: no-repeat;\\n  background-size: 100% 100%;\\n  width: 100%;\\n  height: max(15vh, 13vw);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  \",\n        \";\\n  gap: \",\n        \";\\n  margin-bottom: \",\n        \";\\n  font-size: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  \",\n        \";\\n  width: min(20em, 60vw);\\n  position: relative;\\n\\n  .configs-button {\\n    position: absolute;\\n    right: -50px;\\n    top: calc(50% - 6px);\\n  }\\n\\n  button {\\n    \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  gap: \",\n        \";\\n  \",\n        \";\\n  margin-bottom: \",\n        \";\\n  &, div {\\n    \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = Header;\nconst Subheader = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject1(), _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.flexCenter, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp4, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp3, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.fs5);\n_c1 = Subheader;\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2(), _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.flexColumnCenter, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.fs5);\n_c2 = HeaderContainer;\nconst LegendContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3(), _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp3, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.fs6, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp2, _components_styleConstants__WEBPACK_IMPORTED_MODULE_3__.flexCenter);\n_c3 = LegendContainer;\nfunction MainPage(param) {\n    let { openModal  } = param;\n    _s();\n    const words = (0,_hooks_useGetWords__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { write , readTodayState  } = (0,_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useReducer)((ac, it)=>{\n        const updated = {\n            ...ac,\n            ...it\n        };\n        write(updated);\n        return updated;\n    }, readTodayState());\n    const onUpdate = (fillState)=>{\n        const won = fillState.status === \"success\";\n        const afterWord = won || fillState.status === \"fail\";\n        if (!state.history[state.currentWord]) {\n            state.history.push(fillState);\n        } else {\n            state.history[state.currentWord] = fillState;\n        }\n        setState({\n            success: won ? state.success + 1 : state.success,\n            afterWord\n        });\n        if (afterWord) {\n            setTimeout(()=>openModal(\"Resultados\"), 1250);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {}, void 0, false, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Subheader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                variant: \"primary\",\n                                onClick: ()=>openModal(\"Como Jogar\"),\n                                children: \"Como jogar?\"\n                            }, void 0, false, {\n                                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                variant: \"primary\",\n                                onClick: ()=>openModal(\"Seus Resultados\"),\n                                children: \"Resultados\"\n                            }, void 0, false, {\n                                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                                lineNumber: 89,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                        lineNumber: 87,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"configs-button\",\n                        onClick: ()=>openModal(\"Sobre o Palavriado\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_6__.InfoIcon, {}, void 0, false, {\n                            fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                        lineNumber: 92,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                lineNumber: 85,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LegendContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_6__.CorrectIcon, {}, void 0, false, {\n                                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                                lineNumber: 98,\n                                columnNumber: 12\n                            }, this),\n                            \"\\xa0Acertasse\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                        lineNumber: 98,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_6__.WrongIcon, {}, void 0, false, {\n                                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                                lineNumber: 99,\n                                columnNumber: 12\n                            }, this),\n                            \"\\xa0Errasse\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_6__.MisplacedIcon, {}, void 0, false, {\n                                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                                lineNumber: 100,\n                                columnNumber: 12\n                            }, this),\n                            \"\\xa0Local errado\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_GuessState__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                wordObj: words[state.currentWord],\n                initialState: state.history[state.currentWord],\n                onUpdate: onUpdate\n            }, words[state.currentWord].word, false, {\n                fileName: \"/home/eric/workspace/others/palavriado/src/components/MainPage.js\",\n                lineNumber: 107,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainPage, \"naR/+5waQ3pHDmJPv665VPzmwPA=\", false, function() {\n    return [\n        _hooks_useGetWords__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c4 = MainPage;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Subheader\");\n$RefreshReg$(_c2, \"HeaderContainer\");\n$RefreshReg$(_c3, \"LegendContainer\");\n$RefreshReg$(_c4, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWFpblBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBRVU7QUFDNkQ7QUFDaEU7QUFDRjtBQUM4QjtBQUN2QztBQUVuQyxNQUFNa0IsU0FBU2xCLDZEQUFVO0tBQW5Ca0I7QUFXTixNQUFNRSxZQUFZcEIsNkRBQVUscUJBQ3hCRSxrRUFBVUEsRUFDTFEsMkRBQUdBLEVBQ09ELDJEQUFHQSxFQUNQSiwyREFBR0E7TUFKWmU7QUFPTixNQUFNQyxrQkFBa0JyQiw2REFBVSxxQkFDOUJHLHdFQUFnQkEsRUFXZEUsMkRBQUdBO01BWkhnQjtBQWdCTixNQUFNQyxrQkFBa0J0Qiw2REFBVSxxQkFDekJTLDJEQUFHQSxFQUNSSCwyREFBR0EsRUFDWUUsMkRBQUdBLEVBRWhCTixrRUFBVUE7TUFMVm9CO0FBU1MsU0FBU0MsU0FBUyxLQUFhLEVBQUU7UUFBZixFQUFFQyxVQUFTLEVBQUUsR0FBYjs7SUFDL0IsTUFBTUMsUUFBUWQsOERBQVdBO0lBQ3pCLE1BQU0sRUFBRWUsTUFBSyxFQUFFQyxlQUFjLEVBQUUsR0FBR2YsNkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR1osaURBQVVBLENBQUMsQ0FBQ2EsSUFBSUMsS0FBTztRQUMvQyxNQUFNQyxVQUFVO1lBQUUsR0FBR0YsRUFBRTtZQUFFLEdBQUdDLEVBQUU7UUFBQztRQUMvQkwsTUFBTU07UUFDTixPQUFPQTtJQUNULEdBQUdMO0lBRUgsTUFBTU0sV0FBVyxDQUFDQyxZQUFjO1FBQzlCLE1BQU1DLE1BQU1ELFVBQVVFLE1BQU0sS0FBSztRQUNqQyxNQUFNQyxZQUFZRixPQUFPRCxVQUFVRSxNQUFNLEtBQUs7UUFFOUMsSUFBSSxDQUFDUixNQUFNVSxPQUFPLENBQUNWLE1BQU1XLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDWCxNQUFNVSxPQUFPLENBQUNFLElBQUksQ0FBQ047UUFDckIsT0FBTztZQUNMTixNQUFNVSxPQUFPLENBQUNWLE1BQU1XLFdBQVcsQ0FBQyxHQUFHTDtRQUNyQyxDQUFDO1FBRURMLFNBQVM7WUFDUFksU0FBU04sTUFBTVAsTUFBTWEsT0FBTyxHQUFHLElBQUliLE1BQU1hLE9BQU87WUFDaERKO1FBQ0Y7UUFFQSxJQUFJQSxXQUFXO1lBQ2JLLFdBQVcsSUFBTWxCLFVBQVUsZUFBZTtRQUM1QyxDQUFDO0lBQ0g7SUFFQSxxQkFBUTs7MEJBQ04sOERBQUNIOztrQ0FDQyw4REFBQ0g7Ozs7O2tDQUNELDhEQUFDRTs7MENBQ0MsOERBQUN1QjtnQ0FBT0MsU0FBUTtnQ0FBVUMsU0FBUyxJQUFNckIsVUFBVTswQ0FBZTs7Ozs7OzBDQUNsRSw4REFBQ21CO2dDQUFPQyxTQUFRO2dDQUFVQyxTQUFTLElBQU1yQixVQUFVOzBDQUFvQjs7Ozs7Ozs7Ozs7O2tDQUd6RSw4REFBQ21CO3dCQUFPRyxXQUFVO3dCQUFpQkQsU0FBUyxJQUFNckIsVUFBVTtrQ0FDMUQsNEVBQUNWLDRDQUFRQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJYiw4REFBQ1E7O2tDQUNDLDhEQUFDSDs7MENBQUksOERBQUNOLCtDQUFXQTs7Ozs7NEJBQUc7Ozs7Ozs7a0NBQ3BCLDhEQUFDTTs7MENBQUksOERBQUNILDZDQUFTQTs7Ozs7NEJBQUc7Ozs7Ozs7a0NBQ2xCLDhEQUFDRzs7MENBQUksOERBQUNKLGlEQUFhQTs7Ozs7NEJBQUc7Ozs7Ozs7Ozs7Ozs7MEJBT3hCLDhEQUFDZCw4REFBVUE7Z0JBQ1Q4QyxTQUFTdEIsS0FBSyxDQUFDRyxNQUFNVyxXQUFXLENBQUM7Z0JBQ2pDUyxjQUFjcEIsTUFBTVUsT0FBTyxDQUFDVixNQUFNVyxXQUFXLENBQUM7Z0JBQzlDTixVQUFVQTtlQUhLUixLQUFLLENBQUNHLE1BQU1XLFdBQVcsQ0FBQyxDQUFDVSxJQUFJOzs7Ozs7O0FBS2xELENBQUM7R0F6RHVCMUI7O1FBQ1JaLDBEQUFXQTtRQUNTQyx5REFBVUE7OztNQUZ0QlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpblBhZ2UuanM/MDE2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBHdWVzc1N0YXRlIGZyb20gXCJAL2NvbXBvbmVudHMvR3Vlc3NTdGF0ZVwiO1xuaW1wb3J0IHsgZmxleENlbnRlciwgZmxleENvbHVtbkNlbnRlciwgZnMyLCBmczUsIGZzNiwgc3AxLCBzcDIsIHNwMywgc3A0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9zdHlsZUNvbnN0YW50c1wiO1xuaW1wb3J0IHVzZUdldFdvcmRzIGZyb20gJ0AvaG9va3MvdXNlR2V0V29yZHMnO1xuaW1wb3J0IHVzZVN0b3JhZ2UgZnJvbSBcIkAvaG9va3MvdXNlU3RvcmFnZVwiO1xuaW1wb3J0IHsgQ29ycmVjdEljb24sIEluZm9JY29uLCBNaXNwbGFjZWRJY29uLCBXcm9uZ0ljb24gfSBmcm9tICdAL0ljb25zJztcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiB1bnNldDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL21haW5Mb2dvLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4KDE1dmgsIDEzdncpO1xuYDtcblxuY29uc3QgU3ViaGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgJHtmbGV4Q2VudGVyfTtcbiAgZ2FwOiAke3NwNH07XG4gIG1hcmdpbi1ib3R0b206ICR7c3AzfTtcbiAgZm9udC1zaXplOiAke2ZzNX07XG5gO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke2ZsZXhDb2x1bW5DZW50ZXJ9O1xuICB3aWR0aDogbWluKDIwZW0sIDYwdncpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmNvbmZpZ3MtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC01MHB4O1xuICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICAke2ZzNX07XG4gIH1cbmA7XG5cbmNvbnN0IExlZ2VuZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGdhcDogJHtzcDN9O1xuICAke2ZzNn07XG4gIG1hcmdpbi1ib3R0b206ICR7c3AyfTtcbiAgJiwgZGl2IHtcbiAgICAke2ZsZXhDZW50ZXJ9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSh7IG9wZW5Nb2RhbCB9KSB7XG4gIGNvbnN0IHdvcmRzID0gdXNlR2V0V29yZHMoKTtcbiAgY29uc3QgeyB3cml0ZSwgcmVhZFRvZGF5U3RhdGUgfSA9IHVzZVN0b3JhZ2UoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWR1Y2VyKChhYywgaXQpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkID0geyAuLi5hYywgLi4uaXQgfTtcbiAgICB3cml0ZSh1cGRhdGVkKTtcbiAgICByZXR1cm4gdXBkYXRlZDtcbiAgfSwgcmVhZFRvZGF5U3RhdGUoKSk7XG5cbiAgY29uc3Qgb25VcGRhdGUgPSAoZmlsbFN0YXRlKSA9PiB7XG4gICAgY29uc3Qgd29uID0gZmlsbFN0YXRlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnO1xuICAgIGNvbnN0IGFmdGVyV29yZCA9IHdvbiB8fCBmaWxsU3RhdGUuc3RhdHVzID09PSAnZmFpbCc7XG5cbiAgICBpZiAoIXN0YXRlLmhpc3Rvcnlbc3RhdGUuY3VycmVudFdvcmRdKSB7XG4gICAgICBzdGF0ZS5oaXN0b3J5LnB1c2goZmlsbFN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5oaXN0b3J5W3N0YXRlLmN1cnJlbnRXb3JkXSA9IGZpbGxTdGF0ZTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSh7XG4gICAgICBzdWNjZXNzOiB3b24gPyBzdGF0ZS5zdWNjZXNzICsgMSA6IHN0YXRlLnN1Y2Nlc3MsXG4gICAgICBhZnRlcldvcmRcbiAgICB9KTtcblxuICAgIGlmIChhZnRlcldvcmQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3Blbk1vZGFsKCdSZXN1bHRhZG9zJyksIDEyNTApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKDw+XG4gICAgPEhlYWRlckNvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxTdWJoZWFkZXI+XG4gICAgICAgIDxidXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoJ0NvbW8gSm9nYXInKX0+Q29tbyBqb2dhcj88L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCgnU2V1cyBSZXN1bHRhZG9zJyl9PlJlc3VsdGFkb3M8L2J1dHRvbj5cbiAgICAgIDwvU3ViaGVhZGVyPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbmZpZ3MtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKCdTb2JyZSBvIFBhbGF2cmlhZG8nKX0+XG4gICAgICAgIDxJbmZvSWNvbiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9IZWFkZXJDb250YWluZXI+XG5cbiAgICA8TGVnZW5kQ29udGFpbmVyPlxuICAgICAgPGRpdj48Q29ycmVjdEljb24gLz4mbmJzcDtBY2VydGFzc2U8L2Rpdj5cbiAgICAgIDxkaXY+PFdyb25nSWNvbiAvPiZuYnNwO0VycmFzc2U8L2Rpdj5cbiAgICAgIDxkaXY+PE1pc3BsYWNlZEljb24gLz4mbmJzcDtMb2NhbCBlcnJhZG88L2Rpdj5cbiAgICA8L0xlZ2VuZENvbnRhaW5lcj5cblxuICAgIHsvKiB7c3RhdGUuYWZ0ZXJXb3JkICYmXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHsgYWZ0ZXJXb3JkOiBmYWxzZSwgY3VycmVudFdvcmQ6IHN0YXRlLmN1cnJlbnRXb3JkICsgMSB9KX0+UHLDs3hpbWEgUGFsYXZyYTwvYnV0dG9uPlxuICAgIH0gKi99XG5cbiAgICA8R3Vlc3NTdGF0ZSBrZXk9e3dvcmRzW3N0YXRlLmN1cnJlbnRXb3JkXS53b3JkfVxuICAgICAgd29yZE9iaj17d29yZHNbc3RhdGUuY3VycmVudFdvcmRdfVxuICAgICAgaW5pdGlhbFN0YXRlPXtzdGF0ZS5oaXN0b3J5W3N0YXRlLmN1cnJlbnRXb3JkXX1cbiAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX0gLz5cbiAgPC8+KTtcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiR3Vlc3NTdGF0ZSIsImZsZXhDZW50ZXIiLCJmbGV4Q29sdW1uQ2VudGVyIiwiZnMyIiwiZnM1IiwiZnM2Iiwic3AxIiwic3AyIiwic3AzIiwic3A0IiwidXNlR2V0V29yZHMiLCJ1c2VTdG9yYWdlIiwiQ29ycmVjdEljb24iLCJJbmZvSWNvbiIsIk1pc3BsYWNlZEljb24iLCJXcm9uZ0ljb24iLCJ1c2VSZWR1Y2VyIiwiSGVhZGVyIiwiZGl2IiwiU3ViaGVhZGVyIiwiSGVhZGVyQ29udGFpbmVyIiwiTGVnZW5kQ29udGFpbmVyIiwiTWFpblBhZ2UiLCJvcGVuTW9kYWwiLCJ3b3JkcyIsIndyaXRlIiwicmVhZFRvZGF5U3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiYWMiLCJpdCIsInVwZGF0ZWQiLCJvblVwZGF0ZSIsImZpbGxTdGF0ZSIsIndvbiIsInN0YXR1cyIsImFmdGVyV29yZCIsImhpc3RvcnkiLCJjdXJyZW50V29yZCIsInB1c2giLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwid29yZE9iaiIsImluaXRpYWxTdGF0ZSIsIndvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MainPage.js\n"));

/***/ })

});