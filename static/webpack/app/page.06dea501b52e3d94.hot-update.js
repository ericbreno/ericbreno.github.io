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

/***/ "(app-client)/./src/components/Word.js":
/*!********************************!*\
  !*** ./src/components/Word.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Word; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleConstants */ \"(app-client)/./src/components/styleConstants.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Icons */ \"(app-client)/./src/Icons.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  \",\n        \"\\n  gap: \",\n        \";\\n\\n  user-select: none;\\n  color: black;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: rotateY(270deg);\\n  }\\n  100% {\\n    transform: rotateY(360deg);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  width: 1.5em;\\n  height: 1.875em;\\n  \",\n        \";\\n  \",\n        \";\\n  font-weight: 500;\\n  position: relative;\\n  padding-bottom: 0.2em;\\n  padding-inline: \",\n        \";\\n\\n  background-color: #0C49A5;\\n  \",\n        \"\\n\\n  animation-name: \",\n        \";\\n  animation-timing-function: ease-in-out;\\n  animation-duration: \",\n        \";\\n  animation-delay: \",\n        \";\\n\\n  .icon-container {\\n    position: absolute;\\n    height: 19px;\\n    right: calc(50% - 7px);\\n    top: 0;\\n    filter: invert(1);\\n\\n    img {\\n      display: block;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), _styleConstants__WEBPACK_IMPORTED_MODULE_3__.flexRow, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp2);\n_c = Container;\nconst colorsMap = {\n    correct: \"#8ABF17\",\n    misplaced: \"#FFA208\",\n    wrong: \"var(--dark-bg)\"\n};\nconst iconsMap = {\n    correct: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.CorrectIcon, {}, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, undefined),\n    misplaced: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.MisplacedIcon, {}, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 22,\n        columnNumber: 14\n    }, undefined),\n    wrong: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.WrongIcon, {}, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined)\n};\nconst flipLetter = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_templateObject1());\nconst Letter = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), _styleConstants__WEBPACK_IMPORTED_MODULE_3__.fs3, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.rounded, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp1, (param)=>{\n    let { status  } = param;\n    return \"background-color: \".concat(colorsMap[status], \";\");\n}, flipLetter, (param)=>{\n    let { submitted  } = param;\n    return submitted ? \".5s\" : \"0s\";\n}, (param)=>{\n    let { delay  } = param;\n    return \"\".concat(delay * .175, \"s\");\n});\n_c1 = Letter;\nfunction mapGuess(wordObj, guess, submitted) {\n    const word = wordObj.cleanWord;\n    const remainingLetters = word.split(\"\");\n    guess.split(\"\").forEach((l, i)=>word[i] === l && remainingLetters.splice(i, 1));\n    return Array(word.length).fill(\"\").map((_, index)=>{\n        const letter = guess[index] || \"\";\n        if (!submitted) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letter, {\n            children: letter\n        }, index, false, {\n            fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n            lineNumber: 76,\n            columnNumber: 29\n        }, this);\n        const correct = word[index] === letter;\n        const misplaced = !correct && remainingLetters.includes(letter);\n        if (misplaced) remainingLetters.splice(remainingLetters.indexOf(letter), 1);\n        const status = correct ? \"correct\" : misplaced ? \"misplaced\" : \"wrong\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letter, {\n            delay: index,\n            status: status,\n            submitted: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"icon-container\",\n                    children: iconsMap[status]\n                }, void 0, false, {\n                    fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this),\n                correct ? wordObj.word[index] : letter\n            ]\n        }, index + letter, true, {\n            fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, this);\n    });\n}\nfunction Word(param) {\n    let { wordObj , guess , submitted  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: mapGuess(wordObj, guess, submitted)\n    }, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 92,\n        columnNumber: 11\n    }, this);\n}\n_c2 = Word;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Letter\");\n$RefreshReg$(_c2, \"Word\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvV29yZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2U7QUFDOEI7QUFDcEI7QUFFaEUsTUFBTWMsWUFBWVosNkRBQVUsb0JBQ3hCRyxvREFBT0EsRUFDRkssZ0RBQUdBO0tBRk5JO0FBUU4sTUFBTUUsWUFBWTtJQUNoQkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLE9BQU87QUFDVDtBQUVBLE1BQU1DLFdBQVc7SUFDZkgsdUJBQVMsOERBQUNOLCtDQUFXQTs7Ozs7SUFDckJPLHlCQUFXLDhEQUFDTixpREFBYUE7Ozs7O0lBQ3pCTyxxQkFBTyw4REFBQ04sNkNBQVNBOzs7OztBQUNuQjtBQUVBLE1BQU1RLGFBQWFsQiw0REFBU0E7QUFTNUIsTUFBTW1CLFNBQVNwQiw2REFBVSxxQkFNckJLLGdEQUFHQSxFQUNIQyxvREFBT0EsRUFJU0MsZ0RBQUdBLEVBR25CLFNBQWdCO1FBQWYsRUFBRWMsT0FBTSxFQUFFO1dBQUsscUJBQXVDLE9BQWxCUCxTQUFTLENBQUNPLE9BQU8sRUFBQztBQUFDLEdBRXhDRixZQUVJLFNBQW1CRztRQUFsQixFQUFFQSxVQUFTLEVBQUU7V0FBS0EsWUFBWSxRQUFRLElBQUk7QUFBRCxHQUM3QyxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFO1dBQUssR0FBZ0IsT0FBYkEsUUFBUSxNQUFLO0FBQUM7TUFuQi9DSDtBQWtDTixTQUFTSSxTQUFTQyxPQUFPLEVBQUVDLEtBQUssRUFBRUosU0FBUyxFQUFFO0lBQzNDLE1BQU1LLE9BQU9GLFFBQVFHLFNBQVM7SUFDOUIsTUFBTUMsbUJBQW1CRixLQUFLRyxLQUFLLENBQUM7SUFDcENKLE1BQU1JLEtBQUssQ0FBQyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTU4sSUFBSSxDQUFDTSxFQUFFLEtBQUtELEtBQUtILGlCQUFpQkssTUFBTSxDQUFDRCxHQUFHO0lBRTlFLE9BQU9FLE1BQU1SLEtBQUtTLE1BQU0sRUFBRUMsSUFBSSxDQUFDLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxRQUFVO1FBQ25ELE1BQU1DLFNBQVNmLEtBQUssQ0FBQ2MsTUFBTSxJQUFJO1FBQy9CLElBQUksQ0FBQ2xCLFdBQVcscUJBQVEsOERBQUNGO3NCQUFvQnFCO1dBQVJEOzs7OztRQUVyQyxNQUFNekIsVUFBVVksSUFBSSxDQUFDYSxNQUFNLEtBQUtDO1FBQ2hDLE1BQU16QixZQUFZLENBQUNELFdBQVdjLGlCQUFpQmEsUUFBUSxDQUFDRDtRQUN4RCxJQUFJekIsV0FBV2EsaUJBQWlCSyxNQUFNLENBQUNMLGlCQUFpQmMsT0FBTyxDQUFDRixTQUFTO1FBRXpFLE1BQU1wQixTQUFTTixVQUFVLFlBQVlDLFlBQVksY0FBYyxPQUFPO1FBRXRFLHFCQUFRLDhEQUFDSTtZQUE0QkcsT0FBT2lCO1lBQU9uQixRQUFRQTtZQUFRQyxTQUFTOzs4QkFDMUUsOERBQUNUO29CQUFJK0IsV0FBVTs4QkFBa0IxQixRQUFRLENBQUNHLE9BQU87Ozs7OztnQkFDaEROLFVBQVVVLFFBQVFFLElBQUksQ0FBQ2EsTUFBTSxHQUFHQyxNQUFNOztXQUZwQkQsUUFBUUM7Ozs7O0lBSS9CO0FBQ0Y7QUFFZSxTQUFTSSxLQUFLLEtBQTZCLEVBQUU7UUFBL0IsRUFBRXBCLFFBQU8sRUFBRUMsTUFBSyxFQUFFSixVQUFTLEVBQUUsR0FBN0I7SUFDM0IscUJBQVEsOERBQUNWO2tCQUNOWSxTQUFTQyxTQUFTQyxPQUFPSjs7Ozs7O0FBRTlCLENBQUM7TUFKdUJ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Xb3JkLmpzP2UwOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGZsZXhDZW50ZXIsIGZsZXhSb3csIGZzMiwgZnMzLCByb3VuZGVkLCBzcDEsIHNwMiB9IGZyb20gJy4vc3R5bGVDb25zdGFudHMnO1xuaW1wb3J0IHsgQ29ycmVjdEljb24sIE1pc3BsYWNlZEljb24sIFdyb25nSWNvbiB9IGZyb20gJ0AvSWNvbnMnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke2ZsZXhSb3d9XG4gIGdhcDogJHtzcDJ9O1xuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG5gO1xuXG5jb25zdCBjb2xvcnNNYXAgPSB7XG4gIGNvcnJlY3Q6ICcjOEFCRjE3JyxcbiAgbWlzcGxhY2VkOiAnI0ZGQTIwOCcsXG4gIHdyb25nOiAndmFyKC0tZGFyay1iZyknXG59O1xuXG5jb25zdCBpY29uc01hcCA9IHtcbiAgY29ycmVjdDogPENvcnJlY3RJY29uIC8+LFxuICBtaXNwbGFjZWQ6IDxNaXNwbGFjZWRJY29uIC8+LFxuICB3cm9uZzogPFdyb25nSWNvbiAvPlxufTtcblxuY29uc3QgZmxpcExldHRlciA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBMZXR0ZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS44NzVlbTtcbiAgJHtmczN9O1xuICAke3JvdW5kZWR9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcbiAgcGFkZGluZy1pbmxpbmU6ICR7c3AxfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEM0OUE1O1xuICAkeyh7IHN0YXR1cyB9KSA9PiBgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnNNYXBbc3RhdHVzXX07YH1cblxuICBhbmltYXRpb24tbmFtZTogJHtmbGlwTGV0dGVyfTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogJHsoeyBzdWJtaXR0ZWQgfSkgPT4gc3VibWl0dGVkID8gJy41cycgOiAnMHMnfTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkeyh7IGRlbGF5IH0pID0+IGAke2RlbGF5ICogLjE3NX1zYH07XG5cbiAgLmljb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDdweCk7XG4gICAgdG9wOiAwO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuXG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gbWFwR3Vlc3Mod29yZE9iaiwgZ3Vlc3MsIHN1Ym1pdHRlZCkge1xuICBjb25zdCB3b3JkID0gd29yZE9iai5jbGVhbldvcmQ7XG4gIGNvbnN0IHJlbWFpbmluZ0xldHRlcnMgPSB3b3JkLnNwbGl0KCcnKTtcbiAgZ3Vlc3Muc3BsaXQoJycpLmZvckVhY2goKGwsIGkpID0+IHdvcmRbaV0gPT09IGwgJiYgcmVtYWluaW5nTGV0dGVycy5zcGxpY2UoaSwgMSkpO1xuXG4gIHJldHVybiBBcnJheSh3b3JkLmxlbmd0aCkuZmlsbCgnJykubWFwKChfLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxldHRlciA9IGd1ZXNzW2luZGV4XSB8fCAnJztcbiAgICBpZiAoIXN1Ym1pdHRlZCkgcmV0dXJuICg8TGV0dGVyIGtleT17aW5kZXh9PntsZXR0ZXJ9PC9MZXR0ZXI+KVxuXG4gICAgY29uc3QgY29ycmVjdCA9IHdvcmRbaW5kZXhdID09PSBsZXR0ZXI7XG4gICAgY29uc3QgbWlzcGxhY2VkID0gIWNvcnJlY3QgJiYgcmVtYWluaW5nTGV0dGVycy5pbmNsdWRlcyhsZXR0ZXIpO1xuICAgIGlmIChtaXNwbGFjZWQpIHJlbWFpbmluZ0xldHRlcnMuc3BsaWNlKHJlbWFpbmluZ0xldHRlcnMuaW5kZXhPZihsZXR0ZXIpLCAxKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGNvcnJlY3QgPyAnY29ycmVjdCcgOiBtaXNwbGFjZWQgPyAnbWlzcGxhY2VkJyA6ICd3cm9uZyc7XG5cbiAgICByZXR1cm4gKDxMZXR0ZXIga2V5PXtpbmRleCArIGxldHRlcn0gZGVsYXk9e2luZGV4fSBzdGF0dXM9e3N0YXR1c30gc3VibWl0dGVkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPntpY29uc01hcFtzdGF0dXNdfTwvZGl2PlxuICAgICAge2NvcnJlY3QgPyB3b3JkT2JqLndvcmRbaW5kZXhdIDogbGV0dGVyfVxuICAgIDwvTGV0dGVyPik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JkKHsgd29yZE9iaiwgZ3Vlc3MsIHN1Ym1pdHRlZCB9KSB7XG4gIHJldHVybiAoPENvbnRhaW5lcj5cbiAgICB7bWFwR3Vlc3Mod29yZE9iaiwgZ3Vlc3MsIHN1Ym1pdHRlZCl9XG4gIDwvQ29udGFpbmVyPik7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiZmxleENlbnRlciIsImZsZXhSb3ciLCJmczIiLCJmczMiLCJyb3VuZGVkIiwic3AxIiwic3AyIiwiQ29ycmVjdEljb24iLCJNaXNwbGFjZWRJY29uIiwiV3JvbmdJY29uIiwiQ29udGFpbmVyIiwiZGl2IiwiY29sb3JzTWFwIiwiY29ycmVjdCIsIm1pc3BsYWNlZCIsIndyb25nIiwiaWNvbnNNYXAiLCJmbGlwTGV0dGVyIiwiTGV0dGVyIiwic3RhdHVzIiwic3VibWl0dGVkIiwiZGVsYXkiLCJtYXBHdWVzcyIsIndvcmRPYmoiLCJndWVzcyIsIndvcmQiLCJjbGVhbldvcmQiLCJyZW1haW5pbmdMZXR0ZXJzIiwic3BsaXQiLCJmb3JFYWNoIiwibCIsImkiLCJzcGxpY2UiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJtYXAiLCJfIiwiaW5kZXgiLCJsZXR0ZXIiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJjbGFzc05hbWUiLCJXb3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Word.js\n"));

/***/ })

});