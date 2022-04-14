/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cambay&family=Krona+One&family=Montserrat:wght@300;900&family=Poppins:wght@100;400&family=Prompt:wght@300;500&family=Quicksand:wght@300&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.fa-star {\\n  font-size: 15px;\\n  color: orange;\\n}\\n\\n.star-rating {\\n  width: 100px;\\n  position: relative;\\n}\\n\\n.inner-star-rating {\\n  display: flex;\\n  position: absolute;\\n  flex-wrap: nowrap;\\n  overflow: hidden;\\n  top: 0;\\n}\\n\\n.outer-star-rating {\\n  display: flex;\\n  flex-wrap: nowrap;\\n}\\n\\n.popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  color: rgb(212, 212, 212);\\n  z-index: -1;\\n  margin: 50px 10%;\\n  height: 600px;\\n  display: flex;\\n  align-items: center;\\n  backdrop-filter: blur(1rem);\\n  background-color: rgba(44, 43, 44, 0.521);\\n  overflow: hidden;\\n  font-family: 'Quicksand', sans-serif;\\n}\\n\\n.popup-card {\\n  overflow-y: hidden;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: start;\\n  gap: 10px;\\n  position: relative;\\n  padding: 20px;\\n  height: 95%;\\n  width: 100%;\\n}\\n\\n.popup-card::-webkit-scrollbar {\\n  width: 6px;\\n}\\n\\n.popup-card::-webkit-scrollbar-track {\\n  background-color: rgba(177, 177, 177, 0.76);\\n  border-radius: 5px;\\n}\\n\\n.popup-card::-webkit-scrollbar-thumb {\\n  background-color: rgba(99, 99, 99, 0.733);\\n  border-radius: 5px;\\n  -webkit-border-radius: 5px;\\n  -moz-border-radius: 5px;\\n  -ms-border-radius: 5px;\\n  -o-border-radius: 5px;\\n}\\n\\n.popup-card:hover {\\n  overflow-y: auto;\\n}\\n\\n.fa-xmark {\\n  position: fixed;\\n  font-size: 30px;\\n  right: 40px;\\n}\\n\\n.img-box {\\n  top: 0;\\n  left: 0;\\n  position: fixed;\\n  width: 40%;\\n}\\n\\n.img-box img {\\n  max-width: 100%;\\n  max-height: 600px;\\n  margin: 0 auto;\\n}\\n\\n.text-box {\\n  font-size: 17px;\\n  margin-left: 40%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  padding: 0 40px;\\n  width: 60%;\\n}\\n\\n.text-box > p {\\n  margin-bottom: 30px;\\n  margin-top: 20px;\\n}\\n\\n.genres {\\n  display: inline-flex;\\n  gap: 10px;\\n}\\n\\n.movie-details {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n\\n.flex-grp {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.flex-grp > div {\\n  display: flex;\\n  align-items: center;\\n  gap: 3px;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.cover {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(14, 12, 12, 0.445);\\n  backdrop-filter: blur(1rem);\\n  filter: blur(8px);\\n  min-height: 300vh;\\n  width: 100%;\\n  display: none;\\n  z-index: 20;\\n}\\n\\n.d-block {\\n  display: block;\\n}\\n\\n.comments {\\n  display: flex;\\n  gap: 20px;\\n  flex-direction: column;\\n  width: 100%;\\n  margin-top: 20px;\\n}\\n\\n.comments form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  gap: 20px;\\n  width: 70%;\\n  margin-top: 30px;\\n}\\n\\n.comments form > input {\\n  width: 60%;\\n  padding: 5px 10px;\\n  outline: none;\\n  border: none;\\n  font-size: 1em;\\n}\\n\\n.comments form > textarea {\\n  color: rgb(206, 197, 197);\\n  width: 100%;\\n  height: 100px;\\n  outline: none;\\n  padding: 10px 10px;\\n  border: none;\\n  font-size: 1em;\\n}\\n\\n.comments form > button {\\n  padding: 10px 20px;\\n  border: none;\\n  color: rgb(206, 197, 197);\\n  background-color: rgb(39, 6, 39);\\n  cursor: pointer;\\n}\\n\\n.comments form > button:hover {\\n  background-color: rgb(53, 18, 53);\\n  box-shadow: 3px 4px 10px rgb(24, 23, 23);\\n  color: #fff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-templet/./src/popup.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/cover.jpg */ \"./src/imgs/cover.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cambay&family=Krona+One&family=Montserrat:wght@300;900&family=Poppins:wght@100;400&family=Prompt:wght@300;500&family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  transition: 0.5s ease;\\r\\n  -webkit-transition: 0.5s ease;\\r\\n  -moz-transition: 0.5s ease;\\r\\n  -ms-transition: 0.5s ease;\\r\\n  -o-transition: 0.5s ease;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: #fff;\\r\\n  background-image: linear-gradient(#00000073, #000), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-attachment: fixed;\\r\\n  background-position: center;\\r\\n  background-size: cover;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  padding-top: 8rem;\\r\\n  display: flex;\\r\\n  width: 85%;\\r\\n  margin: 0 auto;\\r\\n  padding-bottom: 8rem;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  width: 100%;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.title h1 {\\r\\n  font-size: 65px;\\r\\n}\\r\\n\\r\\n.title h5 {\\r\\n  font-size: 30px;\\r\\n  color: #ffac31;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.none {\\r\\n  width: 0;\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.block {\\r\\n  width: 100%;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  color: rgb(172, 172, 172);\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  flex-wrap: wrap;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  overflow: hidden;\\r\\n  text-align: start;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  background: rgba(39, 39, 39, 0.274);\\r\\n  backdrop-filter: blur(2rem);\\r\\n  width: 23%;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.card p {\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  border-bottom-right-radius: 60px;\\r\\n}\\r\\n\\r\\n.home_cards {\\r\\n  flex-wrap: wrap;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.home_cards .card {\\r\\n  overflow: hidden;\\r\\n  text-align: start;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  background: rgba(39, 39, 39, 0.274);\\r\\n  backdrop-filter: blur(2rem);\\r\\n  width: 19%;\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.home_cards p {\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.movi-title {\\r\\n  margin-bottom: 10px;\\r\\n  margin-left: 5px;\\r\\n  color: rgb(224, 224, 224);\\r\\n}\\r\\n\\r\\n.reservation-btn,\\r\\n.comment-btn {\\r\\n  border: none;\\r\\n  padding: 3px 6px;\\r\\n  margin-left: 7px;\\r\\n  margin-bottom: 10px;\\r\\n  width: 40%;\\r\\n  background-color: #ff9f31;\\r\\n  border-radius: 10px;\\r\\n  -webkit-border-radius: 10px;\\r\\n  -moz-border-radius: 10px;\\r\\n  -ms-border-radius: 10px;\\r\\n  -o-border-radius: 10px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  background-image: linear-gradient(180deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.034));\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 20px 5%;\\r\\n  position: fixed;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\nheader input {\\r\\n  width: 23%;\\r\\n  padding: 10px 30px;\\r\\n  font-size: 0.9em;\\r\\n  border: none;\\r\\n  border-radius: 20px;\\r\\n  outline: none;\\r\\n  background-color: rgba(255, 255, 255, 0.801);\\r\\n}\\r\\n\\r\\n.page-navigation {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.page-navigation li > a {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n  padding: 3px 10px;\\r\\n}\\r\\n\\r\\n.page-navigation li > a:hover {\\r\\n  background-color: rgb(54, 27, 126);\\r\\n  border-radius: 20px;\\r\\n  -webkit-border-radius: 20px;\\r\\n  -moz-border-radius: 20px;\\r\\n  -ms-border-radius: 20px;\\r\\n  -o-border-radius: 20px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  height: 5rem;\\r\\n  justify-content: space-around;\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n  align-items: center;\\r\\n  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(0, 0, 0));\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n.socials-holder {\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.socials {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  margin-left: 4rem;\\r\\n}\\r\\n\\r\\n.socials li {\\r\\n  font-size: 1.1em;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  width: 35px;\\r\\n}\\r\\n\\r\\n.socials li:hover {\\r\\n  color: rgb(52, 26, 122);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-templet/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-templet/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-templet/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-templet/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popup.css */ \"./node_modules/css-loader/dist/cjs.js!./src/popup.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-templet/./src/popup.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-templet/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-templet/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-templet/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-templet/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-templet/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-templet/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-templet/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.css */ \"./src/popup.css\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_get_show_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/get-show.js */ \"./src/modules/get-show.js\");\n\n\n\n\n\nconst displayItem = (results) => {\n  const card = document.querySelector('.cards');\n  card.innerHTML = '';\n  const like = false;\n  results.forEach((item) => {\n    const scoreLi = document.createElement('div');\n    scoreLi.className = 'card';\n    scoreLi.innerHTML = `<img src=\"${item.image.medium}\">\n                         <p class=\"movi-title\">${item.name}</p>\n                         <div>\n                         <button type=\"submit\" class=\"comment-btn\">Comment</button>\n                         ${like ? '<i class=\"fa-solid fa-heart\"></i>' : '<i class=\"fa-regular fa-heart\"></i>'}\n                         </div>`;\n    card.appendChild(scoreLi);\n  });\n};\n\nconst backgroundBlur = () => {\n  const popup = document.querySelector('.popup');\n  const cover = document.querySelector('.cover');\n  const body = document.querySelector('body');\n  cover.classList.add('d-block');\n  body.style.overflow = 'hidden';\n  const closeBtn = document.querySelector('.fa-xmark');\n  closeBtn.addEventListener('click', () => {\n    popup.classList.add('d-none');\n    cover.classList.remove('d-block');\n    body.style.overflowY = 'scroll';\n  });\n};\n\nconst displayPopUp = async (id) => {\n  const popup = document.querySelector('.popup');\n  await (0,_modules_get_show_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id).then((data) => {\n    popup.innerHTML = '';\n    popup.classList.remove('d-none');\n    popup.style.width = '80%';\n    popup.style.zIndex = '200';\n    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_2__.renderPopUp)((0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_2__.temp)(data));\n    backgroundBlur();\n  });\n};\n\nconst searchShow = async (query) => {\n  const BASE_URL = `https://api.tvmaze.com/search/shows?q=${query}`;\n  await fetch(BASE_URL)\n    .then((respose) => respose.json())\n    .then((jsonData) => {\n      const results = jsonData.map((item) => item.show);\n      displayItem(results);\n      const commentBtn = document.querySelectorAll('.comment-btn');\n      commentBtn.forEach((comment) => {\n        comment.addEventListener('click', (e) => {\n          const NAME = e.target.parentElement.parentElement.childNodes[2].textContent;\n          results.map((item) => {\n            if (NAME === item.name) {\n              displayPopUp(item.id);\n            }\n            return '';\n          });\n        });\n      });\n    })\n    .catch(() => {\n      displayItem([]);\n    });\n};\n\nconst acceil = document.querySelector('.title');\nconst searchArea = document.querySelector('.Search');\nlet setTimeoutTOken = 0;\nwindow.onload = () => {\n  clearTimeout(setTimeoutTOken);\n  searchArea.onkeyup = () => {\n    if (searchArea.value.trim().legth === 0) {\n      return;\n    }\n\n    if (searchArea.value !== '') {\n      acceil.classList.add('none');\n      acceil.classList.remove('block');\n    } else {\n      acceil.classList.add('block');\n      acceil.classList.remove('none');\n    }\n    setTimeoutTOken = setTimeout(() => {\n      searchShow(searchArea.value);\n    }, 250);\n  };\n};\n\nconst displayhomeItem = (result) => {\n  const card = document.querySelector('.home_cards');\n  const like = false;\n  card.innerHTML = '';\n  result.forEach((item) => {\n    const scoreLi = document.createElement('div');\n    scoreLi.className = 'card';\n    scoreLi.innerHTML = `<img src=\"${item.image.medium}\">\n                         <p class=\"movi-title\">${item.name}</p>\n                         <div>\n                         <button type=\"submit\" class=\"comment-btn\">Comment</button>\n                         ${like ? '<i class=\"fa-solid fa-heart\"></i>' : '<i class=\"fa-regular fa-heart\"></i>'}\n                         </div>`;\n    card.appendChild(scoreLi);\n  });\n};\n\nconst BASE_URL = 'https://api.tvmaze.com/search/shows?q=blac';\nfetch(BASE_URL)\n  .then((respose) => respose.json())\n  .then((jsonData) => {\n    const result = jsonData.map((item) => item.show);\n    displayhomeItem(result);\n    const commentBtn = document.querySelectorAll('.comment-btn');\n    commentBtn.forEach((comment) => {\n      comment.addEventListener('click', (e) => {\n        const NAME = e.target.parentElement.parentElement.childNodes[2].textContent;\n        result.map((item) => {\n          if (NAME === item.name) {\n            displayPopUp(item.id);\n          }\n          return '';\n        });\n      });\n    });\n  });\n\n//# sourceURL=webpack://webpack-templet/./src/index.js?");

/***/ }),

/***/ "./src/modules/get-show.js":
/*!*********************************!*\
  !*** ./src/modules/get-show.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst BASE_URL = 'https://api.tvmaze.com';\nconst getShow = async (id) => {\n  const show = await fetch(`${BASE_URL}/shows/${id}`).then((resp) => resp.json());\n  return show;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShow);\n\n\n//# sourceURL=webpack://webpack-templet/./src/modules/get-show.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPopUp\": () => (/* binding */ renderPopUp),\n/* harmony export */   \"temp\": () => (/* binding */ temp)\n/* harmony export */ });\nconst temp = ({\n  genres, image, language, summary, name, rating, status,\n}) => {\n  const card = `\n      <div class=\"popup-card\">\n        <i class=\"fa-solid fa-xmark\"></i>\n        <div class=\"img-box\">\n          <img src=\"${image.original}\" alt=\"\" />\n        </div>\n        <div class=\"text-box\">\n          <h2>${name}</h2>\n          ${summary}\n          <div class=\"movie-details\">\n            <div class=\"flex-grp\">\n              <div>\n                <h4>Genres :</h4>\n                <ul class=\"genres\">\n                  ${genres.map((genre) => `\n                  <li>${genre}</li>\n                  `).join('')}\n                </ul>\n              </div>\n              <div>\n                <h4>Rating :</h4>\n                <div class=\"star-rating\">\n                  <div class=\"outer-star-rating\">\n                    <i class=\"fa-regular fa-star\"></i>\n                    <i class=\"fa-regular fa-star\"></i>\n                    <i class=\"fa-regular fa-star\"></i>\n                    <i class=\"fa-regular fa-star\"></i>\n                    <i class=\"fa-regular fa-star\"></i>\n                  </div>\n                  <div\n                    class=\"inner-star-rating\"\n                    style=\"width:${rating.average * 10}%\"\n                  >\n                    <i class=\"fa-solid fa-star\"></i>\n                    <i class=\"fa-solid fa-star\"></i>\n                    <i class=\"fa-solid fa-star\"></i>\n                    <i class=\"fa-solid fa-star\"></i>\n                    <i class=\"fa-solid fa-star\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"flex-grp\">\n              <div>\n                <h4>Language :</h4>\n                <p>${language}</p>\n              </div>\n              <div>\n                <h4>Status :</h4>\n                <p>${status}</p>\n              </div>\n            </div>\n          </div>\n          <section class=\"comments\">\n            <div class=\"show-comments\">\n              <h3>Comments</h3>\n              <ul class=\"comments-holder\"></ul>\n            </div>\n            <div class=\"add-comment\">\n              <h3>Add new comment</h3>\n              <form>\n                <input type=\"text\" placeholder=\"Your name\" />\n                <textarea placeholder=\"Your insight\"></textarea>\n                <button type=\"submit\">Comment</button>\n              </form>\n            </div>\n          </section>\n        </div>\n      </div>\n  `;\n\n  return card;\n};\n\n// const id = 'jvrwtpOKv3EF9dzf4scl';\n\nfunction renderPopUp(func) {\n  const popup = document.querySelector('.popup');\n  popup.insertAdjacentHTML('beforeend', func);\n}\n\n\n\n\n//# sourceURL=webpack://webpack-templet/./src/modules/popup.js?");

/***/ }),

/***/ "./src/imgs/cover.jpg":
/*!****************************!*\
  !*** ./src/imgs/cover.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92e6623237d493a2be8b.jpg\";\n\n//# sourceURL=webpack://webpack-templet/./src/imgs/cover.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;