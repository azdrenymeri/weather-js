/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/style.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/style.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./../images/clouds.jpg */ \"./src/images/clouds.jpg\"));\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\nhtml,\\nbody {\\n  height: 100%;\\n  margin: 0;\\n  padding: 0; }\\n\\n.background-image {\\n  width: 100%;\\n  height: 100%;\\n  max-height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  background-size: 100% 100%;\\n  background-repeat: no-repeat;\\n  position: absolute;\\n  -moz-transition: opacity 3s ease-in-out;\\n  transition: opacity 3s ease-in-out;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \"); }\\n\\n/* Search Bar properties */\\n.search-container {\\n  width: 490px;\\n  display: block;\\n  margin: 0 auto;\\n  position: absolute;\\n  top: 10%;\\n  right: 30%;\\n  left: 30%;\\n  opacity: 0.8; }\\n\\ninput#search-bar {\\n  margin: 0 auto;\\n  width: 100%;\\n  height: 45px;\\n  padding: 0 20px;\\n  font-size: 1rem;\\n  border: 1px solid #d0cfce;\\n  outline: none;\\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\\n  input#search-bar:focus {\\n    border: 1px solid #008abf;\\n    transition: 0.35s ease;\\n    color: #008abf; }\\n    input#search-bar:focus::-webkit-input-placeholder {\\n      transition: opacity 0.45s ease;\\n      opacity: 0; }\\n    input#search-bar:focus::-moz-placeholder {\\n      transition: opacity 0.45s ease;\\n      opacity: 0; }\\n    input#search-bar:focus:-ms-placeholder {\\n      transition: opacity 0.45s ease;\\n      opacity: 0; }\\n\\n.search-icon {\\n  position: relative;\\n  float: right;\\n  width: 75px;\\n  height: 75px;\\n  top: -31px;\\n  right: -30px; }\\n\\n.submit-btn {\\n  background-color: transparent;\\n  height: 0;\\n  width: 0;\\n  border: none;\\n  outline: none; }\\n\\n/* END searchbar properties */\\n/* Weather container properites */\\n.card {\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  transition: 0.3s;\\n  display: inline;\\n  position: absolute;\\n  top: 30%;\\n  margin: 0 auto;\\n  left: 40%;\\n  background-color: white;\\n  opacity: 0.8;\\n  padding: 10px; }\\n\\n.hidden {\\n  display: none; }\\n\\n.card-container {\\n  display: inline; }\\n\\n.card-header > h1 {\\n  margin: 0;\\n  padding: 0;\\n  display: inline-block; }\\n\\n.card-header > div {\\n  display: inline-block;\\n  font-style: italic; }\\n\\n.card-body > img {\\n  height: 90px;\\n  width: 90px;\\n  display: inline-block; }\\n\\n.card-body > div {\\n  font-size: 4.2em;\\n  display: inline-flex;\\n  margin-left: 10px; }\\n\\n.card-footer > .right-footer {\\n  display: inline-block; }\\n\\n.card-footer > .left-footer {\\n  display: inline-block; }\\n\\n.left-footer {\\n  padding: 5px; }\\n\\n.right-footer {\\n  padding: 5px;\\n  margin-left: 8px; }\\n\\n#humidity,\\n#humidity-val,\\n#wind-speed,\\n#wind-speed-val,\\n#max-temp,\\n#max-temp-val,\\n#min-temp,\\n#min-temp-val {\\n  display: inline-block; }\\n\\n#title {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  width: 135px; }\\n\\n.humidity {\\n  padding: 5px; }\\n\\n.wind-speed {\\n  padding: 0 5px 5px 5px; }\\n\\n.max-temperature {\\n  padding: 5px; }\\n\\n.min-temperature {\\n  padding: 0 5px 5px 5px; }\\n\\n/* C/F toggle switch  */\\n.onoffswitch {\\n  position: relative;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none; }\\n\\n.onoffswitch-checkbox {\\n  display: none; }\\n\\n.onoffswitch-label {\\n  width: 48px;\\n  position: relative;\\n  left: 40px;\\n  overflow: hidden;\\n  cursor: pointer;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n  float: right; }\\n\\n.onoffswitch-inner {\\n  display: block;\\n  width: 200%;\\n  margin-left: -100%;\\n  transition: margin 0.3s ease-in 0s; }\\n\\n.onoffswitch-inner:before,\\n.onoffswitch-inner:after {\\n  display: block;\\n  float: left;\\n  width: 50%;\\n  height: 42px;\\n  padding: 0;\\n  line-height: 42px;\\n  font-size: 19px;\\n  color: white;\\n  font-family: Trebuchet, Arial, sans-serif;\\n  font-weight: bold;\\n  box-sizing: border-box; }\\n\\n.onoffswitch-inner:before {\\n  content: \\\"°C\\\";\\n  padding-left: 10px;\\n  background-color: #7C8385;\\n  color: #FFFFFF; }\\n\\n.onoffswitch-inner:after {\\n  content: \\\"°F\\\";\\n  padding-right: 16px;\\n  background-color: #71BCED;\\n  color: #FCFCFC;\\n  text-align: right; }\\n\\n.onoffswitch-switch {\\n  display: block;\\n  width: 29px;\\n  margin: 6.5px;\\n  background: #ffffff;\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  right: 57px;\\n  border: 2px solid;\\n  border-radius: 11px;\\n  transition: all 0.3s ease-in 0s; }\\n\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\\n  margin-left: 0; }\\n\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\\n  right: 0px; }\\n\\n/* End C/F Toggle switch */\\n/* Lading Modal */\\n#loader {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  z-index: 1;\\n  width: 150px;\\n  height: 150px;\\n  margin: -75px 0 0 -75px;\\n  border: 16px solid #f3f3f3;\\n  border-radius: 50%;\\n  border-top: 16px solid #3498db;\\n  width: 120px;\\n  height: 120px;\\n  -webkit-animation: spin 2s linear infinite;\\n  animation: spin 2s linear infinite;\\n  display: none; }\\n\\n@-webkit-keyframes spin {\\n  0% {\\n    -webkit-transform: rotate(0deg); }\\n  100% {\\n    -webkit-transform: rotate(360deg); } }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n/* Add animation to \\\"page content\\\" */\\n.animate-bottom {\\n  position: relative;\\n  -webkit-animation-name: animatebottom;\\n  -webkit-animation-duration: 1s;\\n  animation-name: animatebottom;\\n  animation-duration: 1s; }\\n\\n@-webkit-keyframes animatebottom {\\n  from {\\n    bottom: -100px;\\n    opacity: 0; }\\n  to {\\n    bottom: 0px;\\n    opacity: 1; } }\\n\\n@keyframes animatebottom {\\n  from {\\n    bottom: -100px;\\n    opacity: 0; }\\n  to {\\n    bottom: 0;\\n    opacity: 1; } }\\n\\n/*  END of loading modal */\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/clouds.jpg":
/*!*******************************!*\
  !*** ./src/images/clouds.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/34ebe320c0dcab77ef056b80f8c19f4e-clouds.jpg\";\n\n//# sourceURL=webpack:///./src/images/clouds.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ \"./src/modules/DOM.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pageLoader */ \"./src/pageLoader.js\");\n/* harmony import */ var _weather_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-container */ \"./src/modules/weather-container.js\");\n/* harmony import */ var _open_weather_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open-weather-api */ \"./src/modules/open-weather-api.js\");\n/* harmony import */ var _flickr_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flickr-api */ \"./src/modules/flickr-api.js\");\n\n\n\n\n\nObject(_pageLoader__WEBPACK_IMPORTED_MODULE_0__[\"loadDOM\"])();\n\n\ndocument.getElementById('search-form').addEventListener('submit',(event)=>{\n  event.preventDefault();\n\n  const searchBar = document.getElementById('search-bar');\n\n   Object(_open_weather_api__WEBPACK_IMPORTED_MODULE_2__[\"searchWeatherByCity\"])(searchBar.value.trim()).then(json => {\n\n     if(json.cod === '404'){\n       alert(json.message);\n       searchBar.value = '';\n     }else{\n       toggleLoadingModal();\n\n       Object(_weather_container__WEBPACK_IMPORTED_MODULE_1__[\"showWeatherCard\"])();\n\n       let dataObj = {\n           title: json.name,\n           description: json.weather[0].main,\n           icon: json.weather[0].icon,\n           temperature: Math.round(json.main.temp) + \"°C\",\n           humidity: json.main.humidity + \"%\",\n           windSpeed: json.wind.speed,\n           minTemp: Math.round(json.main.temp_min) + \"°C\",\n           maxTemp: Math.round(json.main.temp_max) + \"°C\"\n       }\n\n       Object(_weather_container__WEBPACK_IMPORTED_MODULE_1__[\"setData\"])(dataObj);\n\n       Object(_flickr_api__WEBPACK_IMPORTED_MODULE_3__[\"getCityPhoto\"])(searchBar.value.trim()).then(json => {\n         const index =  Math.round(Math.random() * (json.photos.photo.length - 0) + 0);\n         const selectedPhoto = json.photos.photo[index];\n        setBackground(selectedPhoto);\n        toggleLoadingModal();\n       })\n     }\n\n   });\n\n\n});\n\n\ndocument.getElementById('myonoffswitch').addEventListener('change',(event) => {\n    if(event.target.checked){\n      Object(_weather_container__WEBPACK_IMPORTED_MODULE_1__[\"convertToCelcius\"])();\n    }else{\n      Object(_weather_container__WEBPACK_IMPORTED_MODULE_1__[\"convertToFahrenheit\"])();\n    }\n});\n\n\nconst toggleLoadingModal = () => {\n\n  const main = document.getElementById('main');\n  const loader = document.getElementById('loader');\n  const searchBar = document.getElementsByClassName('search-container')[0];\n  const weatherCard = document.getElementsByClassName('card')[0];\n\n  if(main.style.display === 'none' && loader.style.display === 'block'){\n      main.style.display = 'block';\n      searchBar.style.display = 'block';\n      weatherCard.style.display = 'inline';\n      loader.style.display = 'none';\n  }else{\n    main.style.display = 'none';\n    searchBar.style.display = 'none';\n    weatherCard.style.display = 'none';\n    loader.style.display = 'block';\n  }\n}\n\nconst setBackground = (json) => {\n  const main = document.getElementsByClassName('background-image')[0];\n  main.style.backgroundImage = 'url(https://farm'+json.farm+'.staticflickr.com/'+json.server+'/'+json.id+'_'+json.secret+'_b.jpg)';\n}\n\n\n//# sourceURL=webpack:///./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/flickr-api.js":
/*!***********************************!*\
  !*** ./src/modules/flickr-api.js ***!
  \***********************************/
/*! exports provided: getCityPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCityPhoto\", function() { return getCityPhoto; });\n\nconst getCityPhoto = async (cityName) => {\n  const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+\n                  \"629ddda2e258ef29a3f1b1d2545bbf78\"+'&tags=Skyline&text='+cityName.replace(' ','+')\n                  +'&sort=relevance&accuracy=11&content_type=1machine_tag_mode=OR&format=json&nojsoncallback=1';\n  const response = await fetch(url);\n  return await response.json();\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/flickr-api.js?");

/***/ }),

/***/ "./src/modules/open-weather-api.js":
/*!*****************************************!*\
  !*** ./src/modules/open-weather-api.js ***!
  \*****************************************/
/*! exports provided: searchWeatherByCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchWeatherByCity\", function() { return searchWeatherByCity; });\n/* harmony import */ var _flickr_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flickr-api */ \"./src/modules/flickr-api.js\");\n\n\n\nconst searchWeatherByCity = async (cityName) => {\n  const url =\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\n    cityName +\n    \"&appid=\" +\n    \"b2c7b3deb8732cf9b04f84cbc84ffbfd\" +\n    \"&units=metric\";\n\n  const response = await fetch(url);\n   return await response.json();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/open-weather-api.js?");

/***/ }),

/***/ "./src/modules/search-bar.js":
/*!***********************************!*\
  !*** ./src/modules/search-bar.js ***!
  \***********************************/
/*! exports provided: searchContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchContainer\", function() { return searchContainer; });\n\nconst searchContainer = document.createElement('form');\n  searchContainer.classList.add('search-container');\n  searchContainer.setAttribute('id','search-form')\nsearchContainer.innerHTML = `\n  <input type=\"text\" id=\"search-bar\" placeholder=\"Press enter to search\">\n  <button class=\"search-icon submit-btn\" type=\"submit\">\n  <a href=\"#\"><img id=\"search-ic\" class=\"search-icon\" src=\"http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png\"></a>\n  </button>\n`\n\n\n\n\n//# sourceURL=webpack:///./src/modules/search-bar.js?");

/***/ }),

/***/ "./src/modules/temperature-utils.js":
/*!******************************************!*\
  !*** ./src/modules/temperature-utils.js ***!
  \******************************************/
/*! exports provided: convertToCelciusUtil, convertToFahrenheitUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToCelciusUtil\", function() { return convertToCelciusUtil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToFahrenheitUtil\", function() { return convertToFahrenheitUtil; });\nconst convertToCelciusUtil = f =>  {return Math.round((f-32)/1.8);}\nconst convertToFahrenheitUtil = c =>  {return Math.round((c*1.8)+32);}\n\n\n\n//# sourceURL=webpack:///./src/modules/temperature-utils.js?");

/***/ }),

/***/ "./src/modules/weather-container.js":
/*!******************************************!*\
  !*** ./src/modules/weather-container.js ***!
  \******************************************/
/*! exports provided: weatherContainer, setData, convertToCelcius, convertToFahrenheit, showWeatherCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherContainer\", function() { return weatherContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setData\", function() { return setData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToCelcius\", function() { return convertToCelcius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToFahrenheit\", function() { return convertToFahrenheit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showWeatherCard\", function() { return showWeatherCard; });\n/* harmony import */ var _temperature_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature-utils */ \"./src/modules/temperature-utils.js\");\n\n\nconst weatherContainer = document.createElement('div');\n  weatherContainer.classList.add('card','hidden');\n  weatherContainer.innerHTML = `\n    <div class=\"card-container\">\n      <div class=\"card-header\">\n        <h1 id=\"title\"></h1>\n        <div id=\"description\"></div>\n        <div class=\"onoffswitch\">\n    <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" checked>\n    <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n        <span class=\"onoffswitch-inner\"></span>\n    </label>\n</div>\n      </div>\n      <div class=\"card-body\">\n        <img id=\"weather-icon\" alt=\"ic\" src=\"#\"/>\n        <div id=\"temperature\">40°C</div>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"left-footer\">\n          <div class=\"humidity\">\n          <div id=\"humidity\">Humidity</div> <div id=\"humidity-val\">0</div>\n          </div>\n          <div class=\"wind-speed\">\n          <div id=\"wind-speed\">Wind speed</div> <div id=\"wind-speed-val\">0</div>\n          </div>\n        </div>\n        <div class=\"right-footer\">\n          <div class=\"max-temperature\">\n          <div id=\"max-temp\">Max temp.</div> <div id=\"max-temp-val\">0</div>\n          </div>\n          <div class=\"min-temperature\">\n          <div id=\"min-temp\">Min temp.</div> <div id=\"min-temp-val\">0</div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  `\n  const showWeatherCard = () => {\n     document.getElementsByClassName('card')[0].classList.remove('hidden');\n  }\n\n  const setData = (obj) => {\n      document.getElementById('title').innerText = obj.title;\n      document.getElementById('description').innerText = obj.description;\n      document.getElementById('weather-icon')\n      .setAttribute(\"src\",`http://openweathermap.org/img/wn/${obj.icon}@2x.png`);\n      document.getElementById('temperature').innerText = obj.temperature;\n      document.getElementById('humidity-val').innerText = obj.humidity;\n      document.getElementById('wind-speed-val').innerText = obj.windSpeed+\"(m/s)\";\n      document.getElementById('min-temp-val').innerText = obj.minTemp;\n      document.getElementById('max-temp-val').innerText = obj.maxTemp;\n  }\n\n  const convertToCelcius = () => {\n      let temperature = document.getElementById('temperature');\n      temperature.innerText = Object(_temperature_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToCelciusUtil\"])(temperature.innerText.split('°')[0])+'°C';\n\n      let minTemp = document.getElementById('min-temp-val');\n      minTemp.innerText = Object(_temperature_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToCelciusUtil\"])(minTemp.innerText.split('°')[0])+'°C';\n\n      let maxTemp = document.getElementById('max-temp-val');\n      maxTemp.innerText = Object(_temperature_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToCelciusUtil\"])(maxTemp.innerText.split('°')[0])+'°C';\n  }\n  const convertToFahrenheit = () => {\n    let temperature = document.getElementById('temperature');\n    temperature.innerText = Object(_temperature_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToFahrenheitUtil\"])(temperature.innerText.split('°')[0])+'°F';\n\n    let minTemp = document.getElementById('min-temp-val');\n    minTemp.innerText = Object(_temperature_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToFahrenheitUtil\"])(minTemp.innerText.split('°')[0])+'°F';\n\n    let maxTemp = document.getElementById('max-temp-val');\n    maxTemp.innerText = Object(_temperature_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToFahrenheitUtil\"])(maxTemp.innerText.split('°')[0])+'°F';\n\n  }\n\n  \n\n\n//# sourceURL=webpack:///./src/modules/weather-container.js?");

/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/*! exports provided: loadDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDOM\", function() { return loadDOM; });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_search_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search-bar */ \"./src/modules/search-bar.js\");\n/* harmony import */ var _modules_weather_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/weather-container */ \"./src/modules/weather-container.js\");\n/* harmony import */ var _modules_open_weather_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/open-weather-api */ \"./src/modules/open-weather-api.js\");\n\n\n\n\n\nconst loadDOM = () => {\n\n  const body = document.getElementsByTagName('body')[0];\n   body.appendChild(_modules_search_bar__WEBPACK_IMPORTED_MODULE_1__[\"searchContainer\"]);\n   body.appendChild(_modules_weather_container__WEBPACK_IMPORTED_MODULE_2__[\"weatherContainer\"]);\n   Object(_modules_open_weather_api__WEBPACK_IMPORTED_MODULE_3__[\"searchWeatherByCity\"])('Paris');\n}\n\n\n\n\n//# sourceURL=webpack:///./src/pageLoader.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });