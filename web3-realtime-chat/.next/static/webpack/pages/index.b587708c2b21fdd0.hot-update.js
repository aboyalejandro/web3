"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timeago-react */ \"./node_modules/timeago-react/esm/timeago-react.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Message(param) {\n    var message = param.message;\n    _s();\n    var user = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)().user;\n    var isUserMessage = message.get('ethAddress') === user.get(\"ethAddress\");\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex items-end space-x-2 relative \".concat(isUserMessage && 'justify-end'),\n        __source: {\n            fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative h-8 w-8 \".concat(isUserMessage && 'order-last ml-2'),\n                __source: {\n                    fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    username: message.get('username'),\n                    __source: {\n                        fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex space-x-4 p-3 rounded-lg \".concat(isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-400'),\n                __source: {\n                    fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: message.get('message')\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(timeago_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"text-[10px]\",\n                dateTime: message.createdAt,\n                __source: {\n                    fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: \"absolute -bottom-5 text-xs \".concat(isUserMessage ? 'text-pink-300' : 'text-blue-400'),\n                __source: {\n                    fileName: \"/Users/alejandroaboy/web3-realtime-chat/components/Message.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: message.get(\"username\")\n            })\n        ]\n    }));\n}\n_s(Message, \"cGdIAM3taztukIbG4JUqj+vAPIk=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUNNOztTQUUxQkcsT0FBTyxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVhDLE9BQU8sR0FBUixLQUFTLENBQVJBLE9BQU87O0lBQ3JCLEdBQUssQ0FBRUMsSUFBSSxHQUFJTCx5REFBVSxHQUFsQkssSUFBSTtJQUVYLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFZLGlCQUFNRixJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFZO0lBRXpFLE1BQU0sdUVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQWtDLG9DQUVsRCxPQURHSCxhQUFhLElBQUksQ0FBYTs7Ozs7Ozs7aUZBRzdCRSxDQUFHO2dCQUFDQyxTQUFTLEVBQUcsQ0FBaUIsbUJBQ0ssT0FBbkNILGFBQWEsSUFBSSxDQUFpQjs7Ozs7OzsrRkFDakNMLCtDQUFNO29CQUFDUyxRQUFRLEVBQUVOLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQVU7Ozs7Ozs7OztpRkFHM0NDLENBQUc7Z0JBQ0FDLFNBQVMsRUFBRyxDQUE4QixnQ0FJckMsT0FIREgsYUFBYSxHQUNQLENBQTZCLCtCQUM3QixDQUE2Qjs7Ozs7OzsrRkFHbENLLENBQUM7Ozs7Ozs7OEJBQUVQLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQVM7OztpRkFHaENMLHFEQUFPO2dCQUNKTyxTQUFTLEVBQUcsQ0FBVztnQkFDdkJHLFFBQVEsRUFBRVIsT0FBTyxDQUFDUyxTQUFTOzs7Ozs7OztpRkFHOUJGLENBQUM7Z0JBQUNGLFNBQVMsRUFBRyxDQUEyQiw2QkFFekMsT0FER0gsYUFBYSxHQUFHLENBQWUsaUJBQUcsQ0FBZTs7Ozs7OzswQkFFaERGLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQVU7Ozs7QUFLdkMsQ0FBQztHQXRDUUosT0FBTzs7UUFDR0gscURBQVU7OztLQURwQkcsT0FBTztBQXdDaEIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzPzQ4OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VNb3JhbGlzfSBmcm9tICdyZWFjdC1tb3JhbGlzJ1xuaW1wb3J0IEF2YXRhciBmcm9tICcuL0F2YXRhcidcbmltcG9ydCBUaW1lQWdvIGZyb20gJ3RpbWVhZ28tcmVhY3QnXG5cbmZ1bmN0aW9uIE1lc3NhZ2Uoe21lc3NhZ2V9KSB7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlTW9yYWxpcygpO1xuXG4gICAgY29uc3QgaXNVc2VyTWVzc2FnZSA9IG1lc3NhZ2UuZ2V0KCdldGhBZGRyZXNzJykgPT09IHVzZXIuZ2V0KFwiZXRoQWRkcmVzc1wiKTsgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtZW5kIHNwYWNlLXgtMiByZWxhdGl2ZSAke1xuICAgICAgICAgICAgaXNVc2VyTWVzc2FnZSAmJiAnanVzdGlmeS1lbmQnXG4gICAgICAgIH1gfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBoLTggdy04ICR7XG4gICAgICAgICAgICAgICAgaXNVc2VyTWVzc2FnZSAmJiAnb3JkZXItbGFzdCBtbC0yJ31gfT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIHVzZXJuYW1lPXttZXNzYWdlLmdldCgndXNlcm5hbWUnKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBzcGFjZS14LTQgcC0zIHJvdW5kZWQtbGcgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNVc2VyTWVzc2FnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JvdW5kZWQtYnItbm9uZSBiZy1waW5rLTMwMCcgXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdyb3VuZGVkLWJsLW5vbmUgYmctYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLmdldCgnbWVzc2FnZScpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8VGltZUFnb1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzEwcHhdYH1cbiAgICAgICAgICAgICAgICBkYXRlVGltZT17bWVzc2FnZS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BhYnNvbHV0ZSAtYm90dG9tLTUgdGV4dC14cyAke1xuICAgICAgICAgICAgICAgIGlzVXNlck1lc3NhZ2UgPyAndGV4dC1waW5rLTMwMCcgOiAndGV4dC1ibHVlLTQwMCdcbiAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5nZXQoXCJ1c2VybmFtZVwiKX1cbiAgICAgICAgICAgIDwvcD4gICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVxuIl0sIm5hbWVzIjpbInVzZU1vcmFsaXMiLCJBdmF0YXIiLCJUaW1lQWdvIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VyIiwiaXNVc2VyTWVzc2FnZSIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsInVzZXJuYW1lIiwicCIsImRhdGVUaW1lIiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Message.js\n");

/***/ })

});