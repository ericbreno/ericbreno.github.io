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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Word; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-client)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-client)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styleConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleConstants */ \"(app-client)/./src/components/styleConstants.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Icons */ \"(app-client)/./src/Icons.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  \",\n        \"\\n  gap: \",\n        \";\\n\\n  user-select: none;\\n  color: black;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: rotateY(270deg);\\n  }\\n  100% {\\n    transform: rotateY(360deg);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  width: 1.5em;\\n  height: 1.75em;\\n  \",\n        \";\\n  \",\n        \";\\n  font-weight: 500;\\n  position: relative;\\n  padding-bottom: 0.2em;\\n  padding-top: \",\n        \";\\n  padding-inline: \",\n        \";\\n\\n  background-color: #0C49A5;\\n  \",\n        \"\\n\\n  animation-name: \",\n        \";\\n  animation-timing-function: ease-in-out;\\n  animation-duration: \",\n        \";\\n  animation-delay: \",\n        \";\\n\\n  .icon-container {\\n    position: absolute;\\n    right: calc(50% - 7px);\\n    top: -0.125em;\\n    filter: invert(1);\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), _styleConstants__WEBPACK_IMPORTED_MODULE_3__.flexRow, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp2);\n_c = Container;\nconst colorsMap = {\n    correct: \"#8ABF17\",\n    misplaced: \"#FFA208\",\n    wrong: \"var(--dark-bg)\"\n};\nconst iconsMap = {\n    correct: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.CorrectIcon, {}, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, undefined),\n    misplaced: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.MisplacedIcon, {}, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 22,\n        columnNumber: 14\n    }, undefined),\n    wrong: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.WrongIcon, {}, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined)\n};\nconst flipLetter = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_templateObject1());\nconst Letter = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), _styleConstants__WEBPACK_IMPORTED_MODULE_3__.fs3, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.rounded, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp1, _styleConstants__WEBPACK_IMPORTED_MODULE_3__.sp1, (param)=>{\n    let { status  } = param;\n    return \"background-color: \".concat(colorsMap[status], \";\");\n}, flipLetter, (param)=>{\n    let { submitted  } = param;\n    return submitted ? \".5s\" : \"0s\";\n}, (param)=>{\n    let { delay  } = param;\n    return \"\".concat(delay * .175, \"s\");\n});\n_c1 = Letter;\nfunction mapGuess(wordObj, guess, submitted) {\n    const word = wordObj.cleanWord;\n    const remainingLetters = word.split(\"\");\n    guess.split(\"\").forEach((l, i)=>word[i] === l && remainingLetters.splice(i, 1));\n    return Array(word.length).fill(\"\").map((_, index)=>{\n        const letter = guess[index] || \"\";\n        if (!submitted) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letter, {\n            children: letter\n        }, index, false, {\n            fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n            lineNumber: 72,\n            columnNumber: 29\n        }, this);\n        const correct = word[index] === letter;\n        const misplaced = !correct && remainingLetters.includes(letter);\n        if (misplaced) remainingLetters.splice(remainingLetters.indexOf(letter), 1);\n        const status = correct ? \"correct\" : misplaced ? \"misplaced\" : \"wrong\";\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letter, {\n            delay: index,\n            status: status,\n            submitted: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"icon-container\",\n                    children: iconsMap[status]\n                }, void 0, false, {\n                    fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, this),\n                correct ? wordObj.word[index] : letter\n            ]\n        }, index + letter, true, {\n            fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, this);\n    });\n}\nfunction Word(param) {\n    let { wordObj , guess , submitted  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: mapGuess(wordObj, guess, submitted)\n    }, void 0, false, {\n        fileName: \"/home/eric/workspace/others/palavriado/src/components/Word.js\",\n        lineNumber: 88,\n        columnNumber: 11\n    }, this);\n}\n_c2 = Word;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Letter\");\n$RefreshReg$(_c2, \"Word\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvV29yZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNlO0FBQzhCO0FBQ3BCO0FBRWhFLE1BQU1jLFlBQVlaLDZEQUFVLG9CQUN4Qkcsb0RBQU9BLEVBQ0ZLLGdEQUFHQTtLQUZOSTtBQVFOLE1BQU1FLFlBQVk7SUFDaEJDLFNBQVM7SUFDVEMsV0FBVztJQUNYQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNQyxXQUFXO0lBQ2ZILHVCQUFTLDhEQUFDTiwrQ0FBV0E7Ozs7O0lBQ3JCTyx5QkFBVyw4REFBQ04saURBQWFBOzs7OztJQUN6Qk8scUJBQU8sOERBQUNOLDZDQUFTQTs7Ozs7QUFDbkI7QUFFQSxNQUFNUSxhQUFhbEIsNERBQVNBO0FBUzVCLE1BQU1tQixTQUFTcEIsNkRBQVUscUJBTXJCSyxnREFBR0EsRUFDSEMsb0RBQU9BLEVBSU1DLGdEQUFHQSxFQUNBQSxnREFBR0EsRUFHbkIsU0FBZ0I7UUFBZixFQUFFYyxPQUFNLEVBQUU7V0FBSyxxQkFBdUMsT0FBbEJQLFNBQVMsQ0FBQ08sT0FBTyxFQUFDO0FBQUMsR0FFeENGLFlBRUksU0FBbUJHO1FBQWxCLEVBQUVBLFVBQVMsRUFBRTtXQUFLQSxZQUFZLFFBQVEsSUFBSTtBQUFELEdBQzdDLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7V0FBSyxHQUFnQixPQUFiQSxRQUFRLE1BQUs7QUFBQztNQXBCL0NIO0FBOEJOLFNBQVNJLFNBQVNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFSixTQUFTLEVBQUU7SUFDM0MsTUFBTUssT0FBT0YsUUFBUUcsU0FBUztJQUM5QixNQUFNQyxtQkFBbUJGLEtBQUtHLEtBQUssQ0FBQztJQUNwQ0osTUFBTUksS0FBSyxDQUFDLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNTixJQUFJLENBQUNNLEVBQUUsS0FBS0QsS0FBS0gsaUJBQWlCSyxNQUFNLENBQUNELEdBQUc7SUFFOUUsT0FBT0UsTUFBTVIsS0FBS1MsTUFBTSxFQUFFQyxJQUFJLENBQUMsSUFBSUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLFFBQVU7UUFDbkQsTUFBTUMsU0FBU2YsS0FBSyxDQUFDYyxNQUFNLElBQUk7UUFDL0IsSUFBSSxDQUFDbEIsV0FBVyxxQkFBUSw4REFBQ0Y7c0JBQW9CcUI7V0FBUkQ7Ozs7O1FBRXJDLE1BQU16QixVQUFVWSxJQUFJLENBQUNhLE1BQU0sS0FBS0M7UUFDaEMsTUFBTXpCLFlBQVksQ0FBQ0QsV0FBV2MsaUJBQWlCYSxRQUFRLENBQUNEO1FBQ3hELElBQUl6QixXQUFXYSxpQkFBaUJLLE1BQU0sQ0FBQ0wsaUJBQWlCYyxPQUFPLENBQUNGLFNBQVM7UUFFekUsTUFBTXBCLFNBQVNOLFVBQVUsWUFBWUMsWUFBWSxjQUFjLE9BQU87UUFFdEUscUJBQVEsOERBQUNJO1lBQTRCRyxPQUFPaUI7WUFBT25CLFFBQVFBO1lBQVFDLFNBQVM7OzhCQUMxRSw4REFBQ1Q7b0JBQUkrQixXQUFVOzhCQUFrQjFCLFFBQVEsQ0FBQ0csT0FBTzs7Ozs7O2dCQUNoRE4sVUFBVVUsUUFBUUUsSUFBSSxDQUFDYSxNQUFNLEdBQUdDLE1BQU07O1dBRnBCRCxRQUFRQzs7Ozs7SUFJL0I7QUFDRjtBQUVlLFNBQVNJLEtBQUssS0FBNkIsRUFBRTtRQUEvQixFQUFFcEIsUUFBTyxFQUFFQyxNQUFLLEVBQUVKLFVBQVMsRUFBRSxHQUE3QjtJQUMzQixxQkFBUSw4REFBQ1Y7a0JBQ05ZLFNBQVNDLFNBQVNDLE9BQU9KOzs7Ozs7QUFFOUIsQ0FBQztNQUp1QnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmQuanM/ZTA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZmxleENlbnRlciwgZmxleFJvdywgZnMyLCBmczMsIHJvdW5kZWQsIHNwMSwgc3AyIH0gZnJvbSAnLi9zdHlsZUNvbnN0YW50cyc7XG5pbXBvcnQgeyBDb3JyZWN0SWNvbiwgTWlzcGxhY2VkSWNvbiwgV3JvbmdJY29uIH0gZnJvbSAnQC9JY29ucyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICR7ZmxleFJvd31cbiAgZ2FwOiAke3NwMn07XG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbmA7XG5cbmNvbnN0IGNvbG9yc01hcCA9IHtcbiAgY29ycmVjdDogJyM4QUJGMTcnLFxuICBtaXNwbGFjZWQ6ICcjRkZBMjA4JyxcbiAgd3Jvbmc6ICd2YXIoLS1kYXJrLWJnKSdcbn07XG5cbmNvbnN0IGljb25zTWFwID0ge1xuICBjb3JyZWN0OiA8Q29ycmVjdEljb24gLz4sXG4gIG1pc3BsYWNlZDogPE1pc3BsYWNlZEljb24gLz4sXG4gIHdyb25nOiA8V3JvbmdJY29uIC8+XG59O1xuXG5jb25zdCBmbGlwTGV0dGVyID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbmA7XG5cbmNvbnN0IExldHRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjc1ZW07XG4gICR7ZnMzfTtcbiAgJHtyb3VuZGVkfTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XG4gIHBhZGRpbmctdG9wOiAke3NwMX07XG4gIHBhZGRpbmctaW5saW5lOiAke3NwMX07XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDNDlBNTtcbiAgJHsoeyBzdGF0dXMgfSkgPT4gYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzTWFwW3N0YXR1c119O2B9XG5cbiAgYW5pbWF0aW9uLW5hbWU6ICR7ZmxpcExldHRlcn07XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246ICR7KHsgc3VibWl0dGVkIH0pID0+IHN1Ym1pdHRlZCA/ICcuNXMnIDogJzBzJ307XG4gIGFuaW1hdGlvbi1kZWxheTogJHsoeyBkZWxheSB9KSA9PiBgJHtkZWxheSAqIC4xNzV9c2B9O1xuXG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDdweCk7XG4gICAgdG9wOiAtMC4xMjVlbTtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gbWFwR3Vlc3Mod29yZE9iaiwgZ3Vlc3MsIHN1Ym1pdHRlZCkge1xuICBjb25zdCB3b3JkID0gd29yZE9iai5jbGVhbldvcmQ7XG4gIGNvbnN0IHJlbWFpbmluZ0xldHRlcnMgPSB3b3JkLnNwbGl0KCcnKTtcbiAgZ3Vlc3Muc3BsaXQoJycpLmZvckVhY2goKGwsIGkpID0+IHdvcmRbaV0gPT09IGwgJiYgcmVtYWluaW5nTGV0dGVycy5zcGxpY2UoaSwgMSkpO1xuXG4gIHJldHVybiBBcnJheSh3b3JkLmxlbmd0aCkuZmlsbCgnJykubWFwKChfLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxldHRlciA9IGd1ZXNzW2luZGV4XSB8fCAnJztcbiAgICBpZiAoIXN1Ym1pdHRlZCkgcmV0dXJuICg8TGV0dGVyIGtleT17aW5kZXh9PntsZXR0ZXJ9PC9MZXR0ZXI+KVxuXG4gICAgY29uc3QgY29ycmVjdCA9IHdvcmRbaW5kZXhdID09PSBsZXR0ZXI7XG4gICAgY29uc3QgbWlzcGxhY2VkID0gIWNvcnJlY3QgJiYgcmVtYWluaW5nTGV0dGVycy5pbmNsdWRlcyhsZXR0ZXIpO1xuICAgIGlmIChtaXNwbGFjZWQpIHJlbWFpbmluZ0xldHRlcnMuc3BsaWNlKHJlbWFpbmluZ0xldHRlcnMuaW5kZXhPZihsZXR0ZXIpLCAxKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGNvcnJlY3QgPyAnY29ycmVjdCcgOiBtaXNwbGFjZWQgPyAnbWlzcGxhY2VkJyA6ICd3cm9uZyc7XG5cbiAgICByZXR1cm4gKDxMZXR0ZXIga2V5PXtpbmRleCArIGxldHRlcn0gZGVsYXk9e2luZGV4fSBzdGF0dXM9e3N0YXR1c30gc3VibWl0dGVkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPntpY29uc01hcFtzdGF0dXNdfTwvZGl2PlxuICAgICAge2NvcnJlY3QgPyB3b3JkT2JqLndvcmRbaW5kZXhdIDogbGV0dGVyfVxuICAgIDwvTGV0dGVyPik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JkKHsgd29yZE9iaiwgZ3Vlc3MsIHN1Ym1pdHRlZCB9KSB7XG4gIHJldHVybiAoPENvbnRhaW5lcj5cbiAgICB7bWFwR3Vlc3Mod29yZE9iaiwgZ3Vlc3MsIHN1Ym1pdHRlZCl9XG4gIDwvQ29udGFpbmVyPik7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiZmxleENlbnRlciIsImZsZXhSb3ciLCJmczIiLCJmczMiLCJyb3VuZGVkIiwic3AxIiwic3AyIiwiQ29ycmVjdEljb24iLCJNaXNwbGFjZWRJY29uIiwiV3JvbmdJY29uIiwiQ29udGFpbmVyIiwiZGl2IiwiY29sb3JzTWFwIiwiY29ycmVjdCIsIm1pc3BsYWNlZCIsIndyb25nIiwiaWNvbnNNYXAiLCJmbGlwTGV0dGVyIiwiTGV0dGVyIiwic3RhdHVzIiwic3VibWl0dGVkIiwiZGVsYXkiLCJtYXBHdWVzcyIsIndvcmRPYmoiLCJndWVzcyIsIndvcmQiLCJjbGVhbldvcmQiLCJyZW1haW5pbmdMZXR0ZXJzIiwic3BsaXQiLCJmb3JFYWNoIiwibCIsImkiLCJzcGxpY2UiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJtYXAiLCJfIiwiaW5kZXgiLCJsZXR0ZXIiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJjbGFzc05hbWUiLCJXb3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Word.js\n"));

/***/ })

});