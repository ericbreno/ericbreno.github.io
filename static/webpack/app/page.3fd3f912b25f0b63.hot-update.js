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

/***/ "(app-client)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useStorage */ \"(app-client)/./src/hooks/useStorage.js\");\n/* harmony import */ var _components_styleConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/styleConstants */ \"(app-client)/./src/components/styleConstants.js\");\n/* harmony import */ var _components_MainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/MainPage */ \"(app-client)/./src/components/MainPage.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Modal */ \"(app-client)/./src/components/Modal.js\");\n/* harmony import */ var _components_Resultados__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Resultados */ \"(app-client)/./src/components/Resultados.js\");\n/* harmony import */ var _components_ComoJogar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ComoJogar */ \"(app-client)/./src/components/ComoJogar.js\");\n/* harmony import */ var _components_Infos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Infos */ \"(app-client)/./src/components/Infos.js\");\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Toast */ \"(app-client)/./src/components/Toast.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  \",\n        \"\\n  align-items: center;\\n  gap: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Body = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject(), _components_styleConstants__WEBPACK_IMPORTED_MODULE_4__.flexColumn, _components_styleConstants__WEBPACK_IMPORTED_MODULE_4__.sp3);\n_c = Body;\nconst modals = {\n    \"Seus Resultados\": {\n        component: _components_Resultados__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    \"Como Jogar\": {\n        component: _components_ComoJogar__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    \"Sobre o Palavriado\": {\n        component: _components_Infos__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }\n};\nconst isSSREnabled = ()=>\"object\" === \"undefined\";\nfunction Home() {\n    _s();\n    const { readTodayState  } = (0,_hooks_useStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [currentModal, setCurrentModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const today = readTodayState();\n        return today.history.length === 4 && today.afterWord ? \"Seus Resultados\" : null;\n    });\n    const modal = modals[currentModal];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Toast__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Body, {\n            children: [\n                !isSSREnabled() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    openModal: setCurrentModal\n                }, currentModal, false, {\n                    fileName: \"/home/eric/workspace/others/palavriado/src/app/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 27\n                }, this),\n                currentModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    title: currentModal,\n                    onClose: ()=>setCurrentModal(\"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(modal.component, {\n                        onClose: ()=>setCurrentModal(\"\")\n                    }, void 0, false, {\n                        fileName: \"/home/eric/workspace/others/palavriado/src/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/eric/workspace/others/palavriado/src/app/page.js\",\n                    lineNumber: 40,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/eric/workspace/others/palavriado/src/app/page.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/app/page.js\",\n        lineNumber: 36,\n        columnNumber: 11\n    }, this);\n}\n_s(Home, \"UV1Hkd0tg2GI0sHh4AIqxgHD2fU=\", false, function() {\n    return [\n        _hooks_useStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Body\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDTTtBQUNLO0FBQ2tCO0FBQ2pCO0FBQ047QUFDVTtBQUNGO0FBQ1I7QUFDTztBQUU5QyxNQUFNVyxPQUFPViw4REFBVSxvQkFDbkJFLGtFQUFVQSxFQUVMQywyREFBR0E7S0FITk87QUFNTixNQUFNRSxTQUFTO0lBQ2IsbUJBQW1CO1FBQUVDLFdBQVdQLDhEQUFVQTtJQUFDO0lBQzNDLGNBQWM7UUFBRU8sV0FBV04sNkRBQVNBO0lBQUM7SUFDckMsc0JBQXNCO1FBQUVNLFdBQVdMLHlEQUFLQTtJQUFDO0FBQzNDO0FBRUEsTUFBTU0sZUFBZSxJQUFNLGFBQWtCO0FBRTlCLFNBQVNDLE9BQU87O0lBQzdCLE1BQU0sRUFBRUMsZUFBYyxFQUFFLEdBQUdmLDZEQUFVQTtJQUNyQyxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFDLElBQU07UUFDckQsTUFBTW9CLFFBQVFIO1FBQ2QsT0FBT0csTUFBTUMsT0FBTyxDQUFDQyxNQUFNLEtBQUssS0FBS0YsTUFBTUcsU0FBUyxHQUFHLG9CQUFvQixJQUFJO0lBQ2pGO0lBQ0EsTUFBTUMsUUFBUVgsTUFBTSxDQUFDSyxhQUFhO0lBRWxDLHFCQUFRLDhEQUFDUiwwREFBWUE7a0JBQ25CLDRFQUFDQzs7Z0JBQ0UsQ0FBQ0ksZ0NBQWtCLDhEQUFDViw0REFBUUE7b0JBQW9Cb0IsV0FBV047bUJBQXpCRDs7Ozs7Z0JBRWxDQSw4QkFBZ0IsOERBQUNaLHlEQUFLQTtvQkFBQ29CLE9BQU9SO29CQUFjUyxTQUFTLElBQU1SLGdCQUFnQjs4QkFDMUUsNEVBQUNLLE1BQU1WLFNBQVM7d0JBQUNhLFNBQVMsSUFBTVIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhELENBQUM7R0FqQnVCSDs7UUFDS2QseURBQVVBOzs7TUFEZmMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB1c2VTdG9yYWdlIGZyb20gJ0AvaG9va3MvdXNlU3RvcmFnZSc7XG5pbXBvcnQgeyBmbGV4Q29sdW1uLCBzcDMgfSBmcm9tIFwiQC9jb21wb25lbnRzL3N0eWxlQ29uc3RhbnRzXCI7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9NYWluUGFnZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxcIjtcbmltcG9ydCBSZXN1bHRhZG9zIGZyb20gXCJAL2NvbXBvbmVudHMvUmVzdWx0YWRvc1wiO1xuaW1wb3J0IENvbW9Kb2dhciBmcm9tIFwiQC9jb21wb25lbnRzL0NvbW9Kb2dhclwiO1xuaW1wb3J0IEluZm9zIGZyb20gXCJAL2NvbXBvbmVudHMvSW5mb3NcIjtcbmltcG9ydCBUb2FzdFdyYXBwZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Ub2FzdFwiO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgJHtmbGV4Q29sdW1ufVxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6ICR7c3AzfTtcbmA7XG5cbmNvbnN0IG1vZGFscyA9IHtcbiAgJ1NldXMgUmVzdWx0YWRvcyc6IHsgY29tcG9uZW50OiBSZXN1bHRhZG9zIH0sXG4gICdDb21vIEpvZ2FyJzogeyBjb21wb25lbnQ6IENvbW9Kb2dhciB9LFxuICAnU29icmUgbyBQYWxhdnJpYWRvJzogeyBjb21wb25lbnQ6IEluZm9zIH1cbn07XG5cbmNvbnN0IGlzU1NSRW5hYmxlZCA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHJlYWRUb2RheVN0YXRlIH0gPSB1c2VTdG9yYWdlKCk7XG4gIGNvbnN0IFtjdXJyZW50TW9kYWwsIHNldEN1cnJlbnRNb2RhbF0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSByZWFkVG9kYXlTdGF0ZSgpO1xuICAgIHJldHVybiB0b2RheS5oaXN0b3J5Lmxlbmd0aCA9PT0gNCAmJiB0b2RheS5hZnRlcldvcmQgPyAnU2V1cyBSZXN1bHRhZG9zJyA6IG51bGxcbiAgfSk7XG4gIGNvbnN0IG1vZGFsID0gbW9kYWxzW2N1cnJlbnRNb2RhbF07XG5cbiAgcmV0dXJuICg8VG9hc3RXcmFwcGVyPlxuICAgIDxCb2R5PlxuICAgICAgeyFpc1NTUkVuYWJsZWQoKSAmJiA8TWFpblBhZ2Uga2V5PXtjdXJyZW50TW9kYWx9IG9wZW5Nb2RhbD17c2V0Q3VycmVudE1vZGFsfSAvPn1cblxuICAgICAge2N1cnJlbnRNb2RhbCAmJiA8TW9kYWwgdGl0bGU9e2N1cnJlbnRNb2RhbH0gb25DbG9zZT17KCkgPT4gc2V0Q3VycmVudE1vZGFsKCcnKX0+XG4gICAgICAgIDxtb2RhbC5jb21wb25lbnQgb25DbG9zZT17KCkgPT4gc2V0Q3VycmVudE1vZGFsKCcnKX0gLz5cbiAgICAgIDwvTW9kYWw+fVxuICAgIDwvQm9keT5cbiAgPC9Ub2FzdFdyYXBwZXI+KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsInVzZVN0b3JhZ2UiLCJmbGV4Q29sdW1uIiwic3AzIiwiTWFpblBhZ2UiLCJNb2RhbCIsIlJlc3VsdGFkb3MiLCJDb21vSm9nYXIiLCJJbmZvcyIsIlRvYXN0V3JhcHBlciIsIkJvZHkiLCJkaXYiLCJtb2RhbHMiLCJjb21wb25lbnQiLCJpc1NTUkVuYWJsZWQiLCJIb21lIiwicmVhZFRvZGF5U3RhdGUiLCJjdXJyZW50TW9kYWwiLCJzZXRDdXJyZW50TW9kYWwiLCJ0b2RheSIsImhpc3RvcnkiLCJsZW5ndGgiLCJhZnRlcldvcmQiLCJtb2RhbCIsIm9wZW5Nb2RhbCIsInRpdGxlIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});