"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmellow_project"] = self["webpackChunkmellow_project"] || []).push([["src_components_Layout_jsx"],{

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/logo/logo.png */ \"./src/assets/images/logo/logo.png\");\n\n\n\nvar Footer = function Footer() {\n  var _useViewport = (0,_hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    isMobile = _useViewport.isMobile;\n  return;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://mellow-project/./src/components/Footer.jsx?");

/***/ }),

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./src/components/Nav.jsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.jsx\");\n\n\n\n\nvar Layout = function Layout() {\n  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(),\n    pathname = _useLocation.pathname;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex flex-col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex flex-col w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n// const LayoutWrapper = styled.div`\n//   display: flex;\n//   flex-direction: column;\n// `;\n// const Content = styled.div`\n//   /* padding: ${props => (props.$pathname == '/' ? 'none' : '32px')}; */\n//   display: flex;\n//   flex-direction: column;\n//   width: 100%;\n//   /* height: 100vh; */\n//   /* margin: auto; */\n//   max-width: 'none'\n// `;\n\n// const Layout = () => {\n//   const { pathname } = useLocation();\n//   return (\n//     <LayoutWrapper>\n//       <Nav />\n//       <Content $pathname={pathname}>\n//         <Outlet />\n//       </Content>\n//       {/* <Footer /> */}\n//     </LayoutWrapper>\n//   );\n// };\n\n//# sourceURL=webpack://mellow-project/./src/components/Layout.jsx?");

/***/ }),

/***/ "./src/components/Nav.jsx":
/*!********************************!*\
  !*** ./src/components/Nav.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo/logo.png */ \"./src/assets/images/logo/logo.png\");\n/* harmony import */ var _constant_navList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/navList */ \"./src/constant/navList.jsx\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n\n\n\n\n\n\nvar Nav = function Nav() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Logo, {\n    size: 'l'\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\nvar Logo = function Logo(_ref) {\n  var size = _ref.size;\n  var sizeVariants = {\n    s: '100',\n    m: '150',\n    l: '200',\n    xl: '250',\n    xxl: '300'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n    className: \"flex flex-col items-center justify-between w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex justify-between w-full md:max-w-[1280px]  text-caption2-extra-bold text-gray300 my-3 px-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"flex gap-9\"\n  }, HEADER_LIST.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, item.label);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex gap-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaYoutube, {\n    size: \"20\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-full border-b-[1px] border-gray-100\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: _assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__,\n    alt: \"\\uBA5C\\uB85C\\uC6B0_\\uB85C\\uACE0\",\n    className: \"object-center\",\n    width: sizeVariants[size]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-full border-b-[1px] border-gray-100\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"sticky top-0 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"flex w-full justify-center gap-10 my-4 text-h7-bold text-gray600 px-5 \"\n  }, PORTFOLIO_MENU_LIST.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      className: \"\"\n    }, item.label);\n  })))));\n};\nvar PORTFOLIO_MENU_LIST = [{\n  label: 'ALL',\n  path: '/'\n}, {\n  label: 'BRAND MOVIE',\n  path: '/brand-movie'\n}, {\n  label: 'CHARACTER',\n  path: '/character'\n}, {\n  label: 'NEW MEDIA',\n  path: '/new-media'\n}, {\n  label: 'BRAND DESIGN',\n  path: '/brand-design'\n}];\nvar HEADER_LIST = [{\n  label: 'About',\n  path: '/about'\n}, {\n  label: 'Blog',\n  path: '/blog'\n}, {\n  label: 'PDF',\n  path: '/pdf'\n}, {\n  label: 'Contact',\n  path: '/contact'\n}];\n\n//# sourceURL=webpack://mellow-project/./src/components/Nav.jsx?");

/***/ }),

/***/ "./src/constant/navList.jsx":
/*!**********************************!*\
  !*** ./src/constant/navList.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar NAV_LIST = [{\n  label: 'ABOUT',\n  path: '/portfolio'\n}, {\n  label: 'HOME',\n  path: '/portfolio'\n}, {\n  label: 'PORTFOLIO',\n  path: '/portfolio'\n  // dropdown: [\n  //   { label: 'K망 개통방법', path: '/activation-method/KT' },\n  //   { label: 'L망 개통방법', path: '/activation-method/LG' },\n  // ],\n}, {\n  label: 'CONTACT',\n  path: '/portfolio'\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NAV_LIST);\n\n//# sourceURL=webpack://mellow-project/./src/constant/navList.jsx?");

/***/ }),

/***/ "./src/hooks/useViewPort.jsx":
/*!***********************************!*\
  !*** ./src/hooks/useViewPort.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nfunction useViewport() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),\n    _useState2 = _slicedToArray(_useState, 2),\n    width = _useState2[0],\n    setWidth = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),\n    _useState4 = _slicedToArray(_useState3, 2),\n    height = _useState4[0],\n    setHeight = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth <= 600 || window.outerWidth <= 600),\n    _useState6 = _slicedToArray(_useState5, 2),\n    isMobile = _useState6[0],\n    setIsMobile = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth <= 1024 || window.outerWidth <= 1024),\n    _useState8 = _slicedToArray(_useState7, 2),\n    isDesktop = _useState8[0],\n    setDesktop = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState10 = _slicedToArray(_useState9, 2),\n    isLoaded = _useState10[0],\n    setIsLoaded = _useState10[1];\n  var handleResize = function handleResize() {\n    setWidth(window.innerWidth);\n    setHeight(window.innerHeight);\n    setIsMobile(window.innerWidth <= 600 || window.outerWidth <= 600);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    handleResize();\n    setIsLoaded(true);\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  return {\n    width: width,\n    height: height,\n    isMobile: isMobile,\n    isLoaded: isLoaded\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewport);\n\n//# sourceURL=webpack://mellow-project/./src/hooks/useViewPort.jsx?");

/***/ }),

/***/ "./src/assets/images/logo/logo.png":
/*!*****************************************!*\
  !*** ./src/assets/images/logo/logo.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/e74ae5fe1ae7c962040c.png\";\n\n//# sourceURL=webpack://mellow-project/./src/assets/images/logo/logo.png?");

/***/ })

}]);