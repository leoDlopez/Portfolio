"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: -0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: 'easeInOut'\n        },\n        style: {\n            position: 'relative'\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\components\\\\layouts\\\\article.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\components\\\\layouts\\\\article.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"title\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\components\\\\layouts\\\\article.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                title,\n                                \" - Takuya Matsuyama\"\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: title,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\components\\\\layouts\\\\article.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                            property: \"og:title\",\n                            content: title,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\components\\\\layouts\\\\article.js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    ]\n                }),\n                children,\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\components\\\\layouts\\\\article.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    },\n                    __self: _this\n                })\n            ]\n        })\n    });\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUNnQjs7QUFFNUMsR0FBSyxDQUFDRyxRQUFRLEdBQUcsQ0FBQztJQUNkQyxNQUFNLEVBQUUsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtJQUFDLENBQUM7SUFDbkNDLEtBQUssRUFBRSxDQUFDO1FBQUNILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0lBQUMsQ0FBQztJQUNqQ0UsSUFBSSxFQUFFLENBQUM7UUFBQ0osT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxHQUFHLENBQUM7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7SUFBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxHQUFLLENBQUNHLE1BQU0sR0FBRyxRQUFRO1FBQUxDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7a0JBQzdCLE1BQU0sd0RBQUxaLHlEQUFjO1FBQ1hjLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxPQUFPLEVBQUMsQ0FBTztRQUNmTixJQUFJLEVBQUMsQ0FBTTtRQUNYTixRQUFRLEVBQUVBLFFBQVE7UUFDbEJhLFVBQVUsRUFBRSxDQUFDO1lBQUNDLFFBQVEsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxDQUFXO1FBQUMsQ0FBQztRQUNoREMsS0FBSyxFQUFFLENBQUM7WUFBQ0MsUUFBUSxFQUFFLENBQVU7UUFBQyxDQUFDOzs7Ozs7Ozs7Z0JBRzFCUixLQUFLLDBFQUNEWCxrREFBSTs7Ozs7Ozs7OEZBQ0FXLENBQUs7Ozs7Ozs7O2dDQUFFQSxLQUFLO2dDQUFDLENBQW1COzs7NkZBQ2hDUyxDQUFJOzRCQUFDQyxJQUFJLEVBQUMsQ0FBZTs0QkFBQ0MsT0FBTyxFQUFFWCxLQUFLOzs7Ozs7Ozs2RkFDeENTLENBQUk7NEJBQUNHLFFBQVEsRUFBQyxDQUFVOzRCQUFDRCxPQUFPLEVBQUVYLEtBQUs7Ozs7Ozs7Ozs7Z0JBRy9DRCxRQUFRO3FGQUVSVCxxREFBYTs7Ozs7Ozs7Ozs7O0tBbkJwQlEsTUFBTTtBQXdCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcz9lZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gJy4uL2dyaWQtaXRlbSdcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IDIwIH0sXHJcbiAgICBlbnRlcjogeyBvcGFjaXR5OiAxLCB4OiAwLCB5OiAwIH0sXHJcbiAgICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IC0wLCB5OiAyMCB9XHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXHJcbiAgICA8bW90aW9uLmFydGljbGVcclxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICBhbmltYXRlPVwiZW50ZXJcIlxyXG4gICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40LCB0eXBlOiAnZWFzZUluT3V0JyB9fVxyXG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcbiAgICA+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9IC0gVGFrdXlhIE1hdHN1eWFtYTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIDxHcmlkSXRlbVN0eWxlIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICA8L21vdGlvbi5hcnRpY2xlPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkdyaWRJdGVtU3R5bGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n");

/***/ }),

/***/ "./pages/works.js":
/*!************************!*\
  !*** ./pages/works.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _public_images_sgtepetate_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/sgtepetate.png */ \"./public/images/sgtepetate.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar Works = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\pages\\\\works.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            maxW: \"container.xl\",\n            mt: 2,\n            __source: {\n                fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\pages\\\\works.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                    as: \"h3\",\n                    fontSize: 20,\n                    mb: 4,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\pages\\\\works.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Works\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n                    columns: [\n                        1,\n                        1,\n                        2\n                    ],\n                    gap: 6,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\pages\\\\works.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\pages\\\\works.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_grid_item__WEBPACK_IMPORTED_MODULE_2__.WorkGridItem, {\n                            id: \"sgtepetate\",\n                            title: \"SGTepetate\",\n                            thumbnail: _public_images_sgtepetate_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\lopez\\\\Documents\\\\GitHub\\\\Portfolio\\\\pages\\\\works.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"\n                        })\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = Works;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\nvar _c;\n$RefreshReg$(_c, \"Works\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBFO0FBQy9CO0FBQ1c7QUFDSjtBQUVJOztBQUV0RCxHQUFLLENBQUNRLEtBQUssR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUNqQixNQUFNLHNFQUNERixtRUFBTTs7Ozs7Ozt3RkFDRk4sdURBQVM7WUFBQ1MsSUFBSSxFQUFDLENBQWM7WUFBQ0MsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7O3FGQUMvQlQscURBQU87b0JBQUNVLEVBQUUsRUFBQyxDQUFJO29CQUFDQyxRQUFRLEVBQUUsRUFBRTtvQkFBRUMsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OEJBQUUsQ0FFdEM7O3FGQUVDWCx3REFBVTtvQkFBQ1ksT0FBTyxFQUFFLENBQUM7d0JBQUEsQ0FBQzt3QkFBRSxDQUFDO3dCQUFFLENBQUM7b0JBQUEsQ0FBQztvQkFBRUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7bUdBQ2pDWCwyREFBTzs7Ozs7Ozt1R0FDSEMsK0RBQVk7NEJBQUNXLEVBQUUsRUFBQyxDQUFZOzRCQUFDQyxLQUFLLEVBQUMsQ0FBWTs0QkFBQ0MsU0FBUyxFQUFFWCxxRUFBUTs7Ozs7OztzQ0FBRSxDQUt0RTs7Ozs7OztBQU14QixDQUFDO0tBckJLQyxLQUFLO0FBdUJYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dvcmtzLmpzP2UyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nLCBTaW1wbGVHcmlkLCBEaXZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvblwiO1xyXG5pbXBvcnQgeyBXb3JrR3JpZEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2dyaWQtaXRlbSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZSdcclxuXHJcbmltcG9ydCB0aHVtYlNndCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL3NndGVwZXRhdGUucG5nJ1xyXG5cclxuY29uc3QgV29ya3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIG10PXsyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBmb250U2l6ZT17MjB9IG1iPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICBXb3Jrc1xyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxLCAxLCAyXX0gZ2FwPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtHcmlkSXRlbSBpZD1cInNndGVwZXRhdGVcIiB0aXRsZT1cIlNHVGVwZXRhdGVcIiB0aHVtYm5haWw9e3RodW1iU2d0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3JrR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3MiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiSGVhZGluZyIsIlNpbXBsZUdyaWQiLCJEaXZpZGVyIiwiU2VjdGlvbiIsIldvcmtHcmlkSXRlbSIsIkxheW91dCIsInRodW1iU2d0IiwiV29ya3MiLCJtYXhXIiwibXQiLCJhcyIsImZvbnRTaXplIiwibWIiLCJjb2x1bW5zIiwiZ2FwIiwiaWQiLCJ0aXRsZSIsInRodW1ibmFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works.js\n");

/***/ })

});