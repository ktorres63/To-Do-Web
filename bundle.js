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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-desktop-light.jpg */ \"./src/images/bg-desktop-light.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-desktop-dark.jpg */ \"./src/images/bg-desktop-dark.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-check.svg */ \"./src/images/icon-check.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --border-radius: 0.4rem;\n  --bg-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n\n  /* Primary */\n  --bright-blue: hsl(220, 98%, 61%);\n  --check-bg: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n\n  /* Light Theme */\n  --item-background: hsl(0, 0%, 98%);\n  --title: hsl(0, 0%, 98%);\n\n  --background: hsl(236, 33%, 92%);\n  --light-grayish-blue: hsl(233, 11%, 84%);\n  --text-primary: hsl(236, 8%, 36%);\n  --very-dark-grayish-blue: hsl(235, 19%, 35%);\n}\n\n.dark-mode {\n  --bg-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  --background: hsl(235, 21%, 11%);\n  --text-primary: hsl(0, 0%, 86%);\n  --item-background: hsl(235, 24%, 19%);\n  --light-grayish-blue: hsl(234, 39%, 85%);\n  --background-card: hsl(225, 45%, 24%);\n\n  --dark-very-dark-blue: hsl(235, 21%, 11%);\n  --dark-very-dark-desaturated-blue: hsl(235, 24%, 19%);\n  --dark-light-grayish-blue: hsl(234, 39%, 85%);\n  --dark-light-grayish-blue-hover: hsl(236, 33%, 92%);\n  --dark-very-dark-grayish-blue: hsl(233, 14%, 35%);\n  --dark-very-dark-grayish-blue-alt: hsl(237, 14%, 26%);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n}\na{\n  text-decoration: none;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 400;\n  color: var(--text-primary);\n  height: 100vh;\n  background-color: var(--background);\n}\n\nheader {\n  background-image: var(--bg-image);\n  display: flex;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 1.5rem;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nbutton#toggleTheme,\nbutton#menu-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\nh1 {\n  position: relative;\n  top: 5px;\n  letter-spacing: 0.8rem;\n  font-weight: 700;\n  color: var(--title);\n}\n.container {\n  display: flex;\n  flex-direction: row;\n}\naside {\n  width: 325px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--item-background);\n  height: 100vh;\n  transition: opacity 0.3s ease-in-out;\n}\n.hidden {\n  display: none;\n}\naside h2 {\n  margin-bottom: 1rem;\n  border-bottom: 1px solid var(--bright-blue);\n}\naside .aside-link {\n  padding: 5px;\n  cursor: pointer;\n}\naside .aside-link:hover {\n  background-color: var(--background);\n}\n#project-list .project-item{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\ndialog {\n  color:var(--text-primary);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: none;\n  border-radius: var(--border-radius);\n  padding: 20px;\n  background: var(--item-background);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.5);\n}\n\nform .dialog-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\ninput#project-name {\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.dialog-buttons button, .button-task{\n  padding: 8px 12px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.dialog-buttons button:first-child {\n  background-color: #f44336;\n  color: white;\n}\n\n.dialog-buttons button:last-child {\n  background-color: #4caf50;\n  color: white;\n}\n\n#task-form{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.task-buttons{\n  display: flex;\n  justify-content: space-between;\n}\nmain {\n  padding: 18px;\n  align-items: center;\n  flex: 1;\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n}\n\nsection.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n}\n\n.table-header,\n.table-body > div {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n  align-items: center;\n}\n\n.table-header {\n  font-weight: bold;\n}\n\n.table-body div {\n  background-color: var(--item-background);\n}\n\nspan.round {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid var(--light-grayish-blue);\n}\nbutton.delete-btn {\n  background-color: var(--item-background);\n  border: none;\n  cursor: pointer;\n}\n.header-actions {\n  display: flex;\n  justify-content: center;\n}\n.actions {\n  display: flex;\n  justify-content: center;\n}\n\n.task {\n  display: flex;\n  flex-direction: column;\n}\n.task-title {\n  font-weight: bold;\n}\n\nform.todo-input {\n  align-self: flex-start;\n  height: 3.5rem;\n  display: flex;\n  gap: 0.5rem;\n  background-color: var(--item-background);\n  padding: 0.8rem 1.3rem;\n  border-radius: var(--border-radius);\n  align-items: center;\n}\nform span.round {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 2px solid var(--light-grayish-blue);\n}\nform #newTodo {\n  border: none;\n  background-color: var(--item-background);\n  font-size: 18px;\n  flex: 1;\n  color: var(--text-primary);\n}\nsection.list-container {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 0.1rem;\n  background-color: var(--light-grayish-blue);\n  overflow: hidden;\n}\n\n\nsection.buttons {\n  display: flex;\n  height: 3.5rem;\n  gap: 1rem;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--item-background);\n  border-radius: var(--border-radius);\n}\nsection.buttons a {\n  color: var(--text-primary);\n  font-size: 18px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.task.completed span {\n  text-decoration: line-through;\n  color: gray;\n}\n\n.round.checked {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center no-repeat,\n    linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));\n}\n\n.buttons-footer a.active,\n.buttons a.active {\n  font-weight: bold;\n  color: hsl(192, 100%, 67%);\n}\n\n.button-task.green{\n  background-color: #4caf50;\n  color: white;\n}\n.button-task.red{\n  background-color: #f44336;\n  color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app-web/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app-web/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-app-web/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app-web/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/_lib/normalizeDates.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n\n\nfunction normalizeDates(context, ...dates) {\n  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(\n    null,\n    context || dates.find((date) => typeof date === \"object\"),\n  );\n  return dates.map(normalize);\n}\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/_lib/normalizeDates.js?");

/***/ }),

/***/ "./node_modules/date-fns/addDays.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/addDays.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDays: () => (/* binding */ addDays),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n\n/**\n * The {@link addDays} function options.\n */\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The date to be changed\n * @param amount - The amount of days to be added.\n * @param options - An object with options\n *\n * @returns The new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(date, amount, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, NaN);\n\n  // If 0 days, no-op to avoid changing times in the hour before end of DST\n  if (!amount) return _date;\n\n  _date.setDate(_date.getDate() + amount);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/addDays.js?");

/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from \"./constants/date-fns/constants\";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n/**\n * @constant\n * @name constructFromSymbol\n * @summary Symbol enabling Date extensions to inherit properties from the reference date.\n *\n * The symbol is used to enable the `constructFrom` function to construct a date\n * using a reference date and a value. It allows to transfer extra properties\n * from the reference date to the new date. It's useful for extensions like\n * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as\n * a constructor argument.\n */\nconst constructFromSymbol = Symbol.for(\"constructDateFrom\");\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/constants.js?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/date-fns/constants.js\");\n\n\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * Starting from v3.7.0, it allows to construct a date using `[Symbol.for(\"constructDateFrom\")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from \"./constructFrom/date-fns\";\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date>(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use constructor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   );\n * }\n */\nfunction constructFrom(date, value) {\n  if (typeof date === \"function\") return date(value);\n\n  if (date && typeof date === \"object\" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)\n    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);\n\n  if (date instanceof Date) return new date.constructor(value);\n\n  return new Date(value);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/constructFrom.js?");

/***/ }),

/***/ "./node_modules/date-fns/constructNow.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/constructNow.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructNow: () => (/* binding */ constructNow),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n\n\n/**\n * @name constructNow\n * @category Generic Helpers\n * @summary Constructs a new current date using the passed value constructor.\n * @pure false\n *\n * @description\n * The function constructs a new current date using the constructor from\n * the reference date. It helps to build generic functions that accept date\n * extensions and use the current date.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * @param date - The reference date to take constructor from\n *\n * @returns Current date initialized using the given date constructor\n *\n * @example\n * import { constructNow, isSameDay } from 'date-fns'\n *\n * function isToday<DateType extends Date>(\n *   date: DateArg<DateType>,\n * ): boolean {\n *   // If we were to use `new Date()` directly, the function would  behave\n *   // differently in different timezones and return false for the same date.\n *   return isSameDay(date, constructNow(date));\n * }\n */\nfunction constructNow(date) {\n  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/constructNow.js?");

/***/ }),

/***/ "./node_modules/date-fns/isSameDay.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isSameDay: () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ \"./node_modules/date-fns/_lib/normalizeDates.js\");\n/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ \"./node_modules/date-fns/startOfDay.js\");\n\n\n\n/**\n * The {@link isSameDay} function options.\n */\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param laterDate - The first date to check\n * @param earlierDate - The second date to check\n * @param options - An object with options\n *\n * @returns The dates are in the same day (and year and month)\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\nfunction isSameDay(laterDate, earlierDate, options) {\n  const [dateLeft_, dateRight_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(\n    options?.in,\n    laterDate,\n    earlierDate,\n  );\n  return +(0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateLeft_) === +(0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateRight_);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/isSameDay.js?");

/***/ }),

/***/ "./node_modules/date-fns/isToday.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isToday.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isToday: () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.js */ \"./node_modules/date-fns/constructNow.js\");\n/* harmony import */ var _isSameDay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.js */ \"./node_modules/date-fns/isSameDay.js\");\n\n\n\n\n/**\n * The {@link isToday} function options.\n */\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * @param date - The date to check\n * @param options - An object with options\n *\n * @returns The date is today\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday(date, options) {\n  return (0,_isSameDay_js__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(\n    (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, date),\n    (0,_constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(options?.in || date),\n  );\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/isToday.js?");

/***/ }),

/***/ "./node_modules/date-fns/isWithinInterval.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/isWithinInterval.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isWithinInterval: () => (/* binding */ isWithinInterval)\n/* harmony export */ });\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n/**\n * The {@link isWithinInterval} function options.\n */\n\n/**\n * @name isWithinInterval\n * @category Interval Helpers\n * @summary Is the given date within the interval?\n *\n * @description\n * Is the given date within the interval? (Including start and end.)\n *\n * @param date - The date to check\n * @param interval - The interval to check\n * @param options - An object with options\n *\n * @returns The date is within the interval\n *\n * @example\n * // For the date within the interval:\n * isWithinInterval(new Date(2014, 0, 3), {\n *   start: new Date(2014, 0, 1),\n *   end: new Date(2014, 0, 7)\n * })\n * // => true\n *\n * @example\n * // For the date outside of the interval:\n * isWithinInterval(new Date(2014, 0, 10), {\n *   start: new Date(2014, 0, 1),\n *   end: new Date(2014, 0, 7)\n * })\n * // => false\n *\n * @example\n * // For date equal to the interval start:\n * isWithinInterval(date, { start, end: date })\n * // => true\n *\n * @example\n * // For date equal to the interval end:\n * isWithinInterval(date, { start: date, end })\n * // => true\n */\nfunction isWithinInterval(date, interval, options) {\n  const time = +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  const [startTime, endTime] = [\n    +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.start, options?.in),\n    +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.end, options?.in),\n  ].sort((a, b) => a - b);\n\n  return time >= startTime && time <= endTime;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isWithinInterval);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/isWithinInterval.js?");

/***/ }),

/***/ "./node_modules/date-fns/parseISO.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/parseISO.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   parseISO: () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/date-fns/constants.js\");\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n\n\n/**\n * The {@link parseISO} function options.\n */\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param argument - The value to convert\n * @param options - An object with options\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\nfunction parseISO(argument, options) {\n  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in, NaN);\n\n  const additionalDigits = options?.additionalDigits ?? 2;\n  const dateStrings = splitDateString(argument);\n\n  let date;\n  if (dateStrings.date) {\n    const parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n\n  if (!date || isNaN(+date)) return invalidDate();\n\n  const timestamp = +date;\n  let time = 0;\n  let offset;\n\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n    if (isNaN(time)) return invalidDate();\n  }\n\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n    if (isNaN(offset)) return invalidDate();\n  } else {\n    const tmpDate = new Date(timestamp + time);\n    const result = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(0, options?.in);\n    result.setFullYear(\n      tmpDate.getUTCFullYear(),\n      tmpDate.getUTCMonth(),\n      tmpDate.getUTCDate(),\n    );\n    result.setHours(\n      tmpDate.getUTCHours(),\n      tmpDate.getUTCMinutes(),\n      tmpDate.getUTCSeconds(),\n      tmpDate.getUTCMilliseconds(),\n    );\n    return result;\n  }\n\n  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(timestamp + time + offset, options?.in);\n}\n\nconst patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/,\n};\n\nconst dateRegex =\n  /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nconst timeRegex =\n  /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nconst timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\n\nfunction splitDateString(dateString) {\n  const dateStrings = {};\n  const array = dateString.split(patterns.dateTimeDelimiter);\n  let timeString;\n\n  // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n  if (array.length > 2) {\n    return dateStrings;\n  }\n\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(\n        dateStrings.date.length,\n        dateString.length,\n      );\n    }\n  }\n\n  if (timeString) {\n    const token = patterns.timezone.exec(timeString);\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], \"\");\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n\n  return dateStrings;\n}\n\nfunction parseYear(dateString, additionalDigits) {\n  const regex = new RegExp(\n    \"^(?:(\\\\d{4}|[+-]\\\\d{\" +\n      (4 + additionalDigits) +\n      \"})|(\\\\d{2}|[+-]\\\\d{\" +\n      (2 + additionalDigits) +\n      \"})$)\",\n  );\n\n  const captures = dateString.match(regex);\n  // Invalid ISO-formatted year\n  if (!captures) return { year: NaN, restDateString: \"\" };\n\n  const year = captures[1] ? parseInt(captures[1]) : null;\n  const century = captures[2] ? parseInt(captures[2]) : null;\n\n  // either year or century is null, not both\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length),\n  };\n}\n\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n\n  const captures = dateString.match(dateRegex);\n  // Invalid ISO-formatted string\n  if (!captures) return new Date(NaN);\n\n  const isWeekDate = !!captures[4];\n  const dayOfYear = parseDateUnit(captures[1]);\n  const month = parseDateUnit(captures[2]) - 1;\n  const day = parseDateUnit(captures[3]);\n  const week = parseDateUnit(captures[4]);\n  const dayOfWeek = parseDateUnit(captures[5]) - 1;\n\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    const date = new Date(0);\n    if (\n      !validateDate(year, month, day) ||\n      !validateDayOfYearDate(year, dayOfYear)\n    ) {\n      return new Date(NaN);\n    }\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\n\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\n\nfunction parseTime(timeString) {\n  const captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  const hours = parseTimeUnit(captures[1]);\n  const minutes = parseTimeUnit(captures[2]);\n  const seconds = parseTimeUnit(captures[3]);\n\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n\n  return (\n    hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000\n  );\n}\n\nfunction parseTimeUnit(value) {\n  return (value && parseFloat(value.replace(\",\", \".\"))) || 0;\n}\n\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === \"Z\") return 0;\n\n  const captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n\n  const sign = captures[1] === \"+\" ? -1 : 1;\n  const hours = parseInt(captures[2]);\n  const minutes = (captures[3] && parseInt(captures[3])) || 0;\n\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n\n  return sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\n\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  const date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  const fourthOfJanuaryDay = date.getUTCDay() || 7;\n  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n}\n\n// Validation functions\n\n// February is null to handle the leap year (using ||)\nconst daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);\n}\n\nfunction validateDate(year, month, date) {\n  return (\n    month >= 0 &&\n    month <= 11 &&\n    date >= 1 &&\n    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))\n  );\n}\n\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\n\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\n\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n\n  return (\n    seconds >= 0 &&\n    seconds < 60 &&\n    minutes >= 0 &&\n    minutes < 60 &&\n    hours >= 0 &&\n    hours < 25\n  );\n}\n\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/parseISO.js?");

/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfDay: () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n/**\n * The {@link startOfDay} function options.\n */\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The original date\n * @param options - The options\n *\n * @returns The start of a day\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(date, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/startOfDay.js?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * Starting from v3.7.0, it clones a date using `[Symbol.for(\"constructDateFrom\")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument, context) {\n  // [TODO] Get rid of `toDate` or `constructFrom`?\n  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://todo-app-web/./node_modules/date-fns/toDate.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app-web/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app-web/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app-web/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app-web/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app-web/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app-web/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/bg-desktop-dark.jpg":
/*!****************************************!*\
  !*** ./src/images/bg-desktop-dark.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73e47dbb723ebc772ef0.jpg\";\n\n//# sourceURL=webpack://todo-app-web/./src/images/bg-desktop-dark.jpg?");

/***/ }),

/***/ "./src/images/bg-desktop-light.jpg":
/*!*****************************************!*\
  !*** ./src/images/bg-desktop-light.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3508d620efd5a52bb4ce.jpg\";\n\n//# sourceURL=webpack://todo-app-web/./src/images/bg-desktop-light.jpg?");

/***/ }),

/***/ "./src/images/icon-check.svg":
/*!***********************************!*\
  !*** ./src/images/icon-check.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8fb15d0278c8e312df5.svg\";\n\n//# sourceURL=webpack://todo-app-web/./src/images/icon-check.svg?");

/***/ }),

/***/ "./src/images/icon-cross.svg":
/*!***********************************!*\
  !*** ./src/images/icon-cross.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ee81d30b75cab19d6f7.svg\";\n\n//# sourceURL=webpack://todo-app-web/./src/images/icon-cross.svg?");

/***/ }),

/***/ "./src/images/icon-moon.svg":
/*!**********************************!*\
  !*** ./src/images/icon-moon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c03114b495d05f4380b.svg\";\n\n//# sourceURL=webpack://todo-app-web/./src/images/icon-moon.svg?");

/***/ }),

/***/ "./src/images/icon-sun.svg":
/*!*********************************!*\
  !*** ./src/images/icon-sun.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"910b1f9a23741afc341e.svg\";\n\n//# sourceURL=webpack://todo-app-web/./src/images/icon-sun.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/theme.js */ \"./src/modules/theme.js\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_storageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storageService */ \"./src/modules/storageService.js\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n\n\n\n\n\n\ndocument.getElementById(\"toggleTheme\").addEventListener(\"click\", _modules_theme_js__WEBPACK_IMPORTED_MODULE_1__.toggleTheme);\ndocument.getElementById(\"menu-btn\").addEventListener(\"click\", function () {\n  document.getElementById(\"aside-menu\").classList.toggle(\"hidden\");\n});\n\nconst storageService = new _modules_storageService__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst ui = new _modules_ui_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](storageService)\n\n//# sourceURL=webpack://todo-app-web/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\nclass Project{\n  constructor(name){\n    this.name = name;\n    this.todos = []\n  }\n  addTodo(todo){\n    this.todos.push(todo);\n  }\n  removeTodo(index){\n    this.todos.splice(index,1);\n  }\n}\n\n//# sourceURL=webpack://todo-app-web/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\nclass Storage{\n  static getProjects(){\n    return JSON.parse(localStorage.getItem(\"projects\")) || []\n  }\n  static saveProjects(projects){\n    localStorage.setItem(\"projects\", JSON.stringify(projects))\n  }\n  static saveTasks(projectIndex, tasks){\n    let projects = this.getProjects();\n    projects[projectIndex].todos = tasks;\n    this.saveProjects(projects);\n  }\n  static addProject(project){\n    const projects = this.getProjects();\n    projects.push(project)\n    this.saveProjects(projects)\n  }\n  static removeProject(index){\n    let projects = this.getProjects();\n    if(index >= 0 && index < projects.length){\n      projects.splice(index,1);\n      this.saveProjects(projects)\n    }\n  }\n  static addTaskToProject(projectIndex, task){\n    const projects = this.getProjects();\n    projects[projectIndex].todos.push(task);\n    this.saveProjects(projects);\n  }\n\n  static getTasksForProject(projectIndex){\n    const projects = this.getProjects();\n    return projects[projectIndex]?.todos || []\n  }\n  static removeTaskToProject(projectIndex, taskIndex){\n    const projects = this.getProjects();\n    projects[projectIndex].todos.splice(taskIndex,1);\n    this.saveProjects(projects)\n  }\n}\n\n//# sourceURL=webpack://todo-app-web/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/storageService.js":
/*!***************************************!*\
  !*** ./src/modules/storageService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StorageService)\n/* harmony export */ });\nclass StorageService {\n  constructor(storage){\n    this.storage = storage;\n  }\n  getProjects(){\n    return this.storage.getProjects();\n  }\n  saveProjects(projects){\n    this.storage.saveProjects(projects);\n  }\n  addProject(project){\n    this.storage.addProject(project);\n  }\n  removeProject(index){\n    this.storage.removeProject(index);\n  }\n  getTasksForProject(index){\n    return this.storage.getTasksForProject(index)\n  }\n  addTaskToProject(projectIndex, task){\n    this.storage.addTaskToProject(projectIndex, task);\n  }\n  removeTaskToProject(projectIndex, taskIndex){\n    this.storage.removeTaskToProject(projectIndex, taskIndex);\n  }\n  saveTasks(projectIndex, tasks){\n    this.storage.saveTasks(projectIndex, tasks);\n  }\n}\n\n\n//# sourceURL=webpack://todo-app-web/./src/modules/storageService.js?");

/***/ }),

/***/ "./src/modules/theme.js":
/*!******************************!*\
  !*** ./src/modules/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)\n/* harmony export */ });\n/* harmony import */ var _images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icon-sun.svg */ \"./src/images/icon-sun.svg\");\n/* harmony import */ var _images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon-moon.svg */ \"./src/images/icon-moon.svg\");\n\n\n\nconst body = document.body;\nconst icon = document.getElementById(\"darkModeIcon\");\nlocalStorage.setItem(\"dark-mode\", \"enabled\")\n\n// Check if dark mode was previously enabled\nif (localStorage.getItem(\"dark-mode\") == \"enabled\") {\n  body.classList.add(\"dark-mode\");\n  icon.src = _images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_0__;\n}\n\nfunction toggleTheme(){\n  body.classList.toggle(\"dark-mode\");\n\n  if (body.classList.contains(\"dark-mode\")) {\n    localStorage.setItem(\"dark-mode\", \"enabled\");\n    icon.src = _images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_0__;\n  } else {\n    localStorage.setItem(\"dark-mode\", \"disabled\");\n    icon.src = _images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_1__;\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-app-web/./src/modules/theme.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(\n    title,\n    description,\n    dueDate,\n    priority,\n  ) {\n    this.id = this.generateId(); \n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n  }\n  toggleComplete() {\n    console.log(\"Antes de cambiar el estado: \", this.completed);\n    this.completed = !this.completed; // Cambia el estado de completado\n    console.log(\"Después de cambiar el estado: \", this.completed);\n  }\n  generateId(){\n    return '_' + Math.random().toString(36).substr(2, 9);\n  }\n}\n\n\n//# sourceURL=webpack://todo-app-web/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/isToday.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/parseISO.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/startOfDay.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/addDays.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/isWithinInterval.js\");\n/* harmony import */ var _images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-cross.svg */ \"./src/images/icon-cross.svg\");\n\n\n\n\n\nclass UI {\n  constructor(storageService) {\n    this.storageService = storageService;\n    this.projectList = document.getElementById(\"project-list\");\n    this.linkSelected = document.getElementById(\"link-selected\");\n\n    this.projectDialog = document.getElementById(\"project-dialog\");\n    this.addProjectBtn = document.getElementById(\"add-project\");\n    this.projectCancelBtn = document.getElementById(\"cancel-btn\");\n    this.projectForm = document.getElementById(\"project-form\");\n    this.projectNameInput = document.getElementById(\"project-name\");\n    this.asideLinks = document.querySelectorAll(\".aside-link\");\n    this.taskTable = document.getElementById(\"table-body\");\n    this.taskDialog = document.getElementById(\"task-dialog\");\n    this.taskForm = document.getElementById(\"task-form\");\n    this.addTaskBtn = document.getElementById(\"add-task-btn\");\n    this.cancelTaskBtn = document.getElementById(\"cancel-task\");\n    this.deleteButtons = this.taskTable.querySelectorAll(\".delete-btn\");\n    this.selectedProjectIndex = null;\n\n    // Filters:\n    this.activeFilter = null;\n    this.todayFilter = document.getElementById(\"today\");\n    this.nextSevenFilter = document.getElementById(\"next7\");\n    this.allTaskFilter = document.getElementById(\"allTask\");\n    this.hightImportanceFilter = document.getElementById(\"importance-high\");\n    this.mediumImportanceFilter = document.getElementById(\"importance-medium\");\n    this.lowImportanceFilter = document.getElementById(\"importance-low\");\n\n    this.setupEventListener();\n    this.render();\n  }\n\n  setupEventListener() {\n    this.addProjectBtn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      this.projectDialog.showModal();\n    });\n    this.todayFilter.addEventListener(\"click\", () => {\n      this.filterTodayTasks();\n      console.log(\"press Today\");\n    });\n    this.nextSevenFilter.addEventListener(\"click\", () => {\n      this.filterSevenDays();\n      console.log(\"press Seven\");\n    });\n    this.allTaskFilter.addEventListener(\"click\", () => {\n      this.filterAllTasks();\n    });\n    this.hightImportanceFilter.addEventListener(\"click\", () => {\n      this.filterHigh();\n    });\n    this.mediumImportanceFilter.addEventListener(\"click\", () => {\n      this.filterMedium();\n    });\n    this.lowImportanceFilter.addEventListener(\"click\", () => {\n      this.filterLow();\n    });\n    this.projectCancelBtn.addEventListener(\"click\", () => {\n      this.projectDialog.close();\n    });\n\n    this.projectForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      this.addProject();\n    });\n\n    this.projectList.addEventListener(\"click\", (e) => {\n      let targetElement = e.target;\n\n      if (targetElement.tagName === \"IMG\") {\n        targetElement = targetElement.closest(\".delete-btn\");\n      }\n\n      if (targetElement && targetElement.classList.contains(\"delete-btn\")) {\n        const index = targetElement.parentElement.dataset.index;\n        this.removeProject(index);\n        return;\n      }\n\n      const projectItem = e.target.closest(\".project-item\");\n      if (projectItem) {\n        this.addTaskBtn.classList.remove(\"hidden\");\n        const index = projectItem.dataset.index;\n        this.displayProject(index);\n        console.log(\"slected a item\");\n      }\n    });\n\n    this.addTaskBtn.addEventListener(\"click\", () => {\n      if (this.selectedProjectIndex === null) {\n        alert(\"Select a project first\");\n        return;\n      }\n\n      this.taskDialog.showModal();\n    });\n    this.cancelTaskBtn.addEventListener(\"click\", () => {\n      this.taskDialog.close();\n    });\n    this.taskForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      this.addTask();\n    });\n\n    this.taskTable.addEventListener(\"click\", (e) => {\n      const round = e.target.closest(\".round\");\n      if (!round) return;\n\n      const taskRow = round.closest(\".row\");\n      if (!taskRow) return;\n\n      if (e.target.classList.contains(\"round\")) {\n        const taskId = e.target.dataset.id;\n        this.toggleTaskComplete(taskId);\n      }\n    });\n\n    this.taskTable.addEventListener(\"click\", (e) => {\n      const deleteBtn = e.target.closest(\".delete-btn\");\n      if (!deleteBtn) return;\n\n      const id = deleteBtn.dataset.id;\n      this.deleteTask(id);\n    });\n  }\n  getAllTasksFromAllProjects() {\n    const projects = this.storageService.getProjects();\n    return projects.flatMap((project) => project.todos);\n  }\n  deleteTask(taskId) {\n    const projects = this.storageService.getProjects();\n\n    for (let i = 0; i < projects.length; i++) {\n      const tasks = projects[i].todos;\n      const taskIndex = tasks.findIndex((task) => task.id === taskId);\n\n      if (taskIndex != -1) {\n        tasks.splice(taskIndex, 1);\n        this.storageService.saveProjects(projects);\n\n        if (this.selectedProjectIndex === null && this.activeFilter) {\n          const filteredTasks = this.activeFilter();\n          this.renderTasks(filteredTasks);\n        } else {\n          this.renderTasks();\n        }\n        return;\n      }\n    }\n  }\n  filterTodayTasks() {\n    this.linkSelected.innerHTML = `📅 Today`;\n    this.selectedProjectIndex = null;\n\n    this.activeFilter = () => {\n      return this.getAllTasksFromAllProjects().filter((task) =>\n        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.parseISO)(task.dueDate))\n      );\n    };\n    const todayTasks = this.activeFilter();\n    this.renderTasks(todayTasks);\n  }\n  filterSevenDays() {\n    this.linkSelected.innerHTML = `🗓️ Next 7 days`;\n    this.selectedProjectIndex = null;\n    this.activeFilter = () => {\n      const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfDay)(new Date());\n      const sevenDaysFromNow = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addDays)(today, 7);\n\n      return this.getAllTasksFromAllProjects().filter((task) => {\n        const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.parseISO)(task.dueDate);\n        return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isWithinInterval)(taskDate, {\n          start: today,\n          end: sevenDaysFromNow,\n        });\n      });\n    };\n    const nextSeven = this.activeFilter();\n    this.renderTasks(nextSeven);\n  }\n  filterAllTasks() {\n    this.linkSelected.innerHTML = `📁 All Task`;\n    this.selectedProjectIndex = null;\n    this.activeFilter = () => {\n      return this.getAllTasksFromAllProjects();\n    };\n    const AllTasks = this.activeFilter();\n    this.renderTasks(AllTasks);\n  }\n  filterHigh() {\n    this.linkSelected.innerHTML = `🔴 High Importance`;\n    this.selectedProjectIndex = null;\n    this.activeFilter = () => {\n      return this.getAllTasksFromAllProjects().filter((task) => {\n        return task.priority === \"🔴 High\";\n      });\n    };\n    const highPriority = this.activeFilter();\n    console.log(highPriority);\n    this.renderTasks(highPriority);\n  }\n  filterMedium(){\n    this.linkSelected.innerHTML = `🟡 Medium Importance`;\n    this.selectedProjectIndex = null;\n    this.activeFilter = () =>{\n      return this.getAllTasksFromAllProjects().filter((task) => {\n        return task.priority === \"🟡 Medium\"\n      })\n    }\n    const mediumPriority = this.activeFilter();\n    this.renderTasks(mediumPriority);\n  }\n  filterLow(){\n    this.linkSelected.innerHTML = `🟢 Low Importance`;\n    this.selectedProjectIndex = null;\n    this.activeFilter = () =>{\n      return this.getAllTasksFromAllProjects().filter((task) => {\n        return task.priority === \"🟢 Low\"\n      })\n    }\n    const lowPriority = this.activeFilter();\n    this.renderTasks(lowPriority);\n  }\n  toggleTaskComplete(taskId) {\n    const projects = this.storageService.getProjects();\n\n    for (let i = 0; i < projects.length; i++) {\n      const tasks = projects[i].todos;\n      const taskIndex = tasks.findIndex((task) => task.id === taskId);\n\n      if (taskIndex != -1) {\n        tasks[taskIndex].completed = !tasks[taskIndex].completed;\n        this.storageService.saveProjects(projects);\n\n        if (this.selectedProjectIndex === null && this.activeFilter) {\n          const filteredTasks = this.activeFilter();\n          this.renderTasks(filteredTasks);\n        } else {\n          this.renderTasks();\n        }\n        return;\n      }\n    }\n  }\n\n  addTask() {\n    const title = document.getElementById(\"task-title\").value.trim();\n    const description = document.getElementById(\"task-desc\").value.trim();\n    const dueDate = document.getElementById(\"task-date\").value;\n    const priority = document.getElementById(\"task-priority\").value;\n\n    if (!title || !dueDate) return;\n\n    const newTask = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\n    this.storageService.addTaskToProject(this.selectedProjectIndex, newTask);\n\n    this.renderTasks();\n    this.taskForm.reset();\n    this.taskDialog.close();\n  }\n  addProject() {\n    const projectName = this.projectNameInput.value.trim();\n    if (projectName === \"\") return;\n\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\n    this.storageService.addProject(newProject);\n\n    this.render();\n    this.projectNameInput.value = \"\";\n    this.projectDialog.close();\n  }\n  renderTasks(tasks = null) {\n    this.taskTable.innerHTML = \"\";\n\n    if (!tasks) {\n      if (this.selectedProjectIndex == null) return;\n      tasks = this.storageService.getTasksForProject(this.selectedProjectIndex);\n    }\n\n    tasks.forEach((task, index) => {\n      const row = document.createElement(\"div\");\n      row.classList.add(\"row\");\n      row.innerHTML = `\n        <span class=\"round ${task.completed ? \"checked\" : \"\"}\" data-id=\"${\n        task.id\n      }\"></span>\n        <div class=\"task ${task.completed ? \"completed\" : \"\"}\">\n          <span class=\"task-title\">${task.title}</span>\n          <span class=\"task-description\">${task.description}</span>\n        </div>\n        <span>${task.dueDate}</span>\n        <span>${task.priority}</span>\n        <span class=\"actions\">\n          <button class=\"delete-btn\" data-id=\"${task.id}\">\n            <img src=${_images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_2__} />\n          </button>\n        </span>\n      `;\n      this.taskTable.appendChild(row);\n    });\n    this.addTaskBtn.classList.toggle(\n      \"hidden\",\n      this.selectedProjectIndex === null\n    );\n  }\n\n  displayProject(index) {\n    this.selectedProjectIndex = index;\n    this.activeFilter = null;\n    const projects = this.storageService.getProjects();\n    const selectedProject = projects[index];\n\n    if (!selectedProject) return;\n\n    this.linkSelected.innerHTML = `📌 ${selectedProject.name}`;\n\n    this.renderTasks();\n  }\n\n  displaySelectedLink(element) {\n    const titleElement = element.querySelector(\"p\");\n    if (titleElement) {\n      this.linkSelected.innerHTML = titleElement.innerHTML;\n    }\n  }\n\n  render() {\n    this.projectList.replaceChildren();\n    const projects = this.storageService.getProjects();\n    projects.forEach((project, index) => {\n      const projectDiv = document.createElement(\"div\");\n      projectDiv.classList.add(\"aside-link\", \"project-item\");\n\n      projectDiv.dataset.index = index;\n      projectDiv.innerHTML = `\n      <p>📌 ${project.name}</p>\n      <button class=\"delete-btn\">\n       <img src=${_images_icon_cross_svg__WEBPACK_IMPORTED_MODULE_2__} />\n      </button>`;\n      this.projectList.appendChild(projectDiv);\n    });\n  }\n  removeProject(index) {\n    this.storageService.removeProject(index);\n    if (this.selectedProjectIndex == index) {\n      this.selectedProjectIndex = null;\n      this.linkSelected.innerHTML = \"📌 Select a project\";\n      this.taskTable.innerHTML = \"\";\n    }\n    this.render();\n  }\n}\n\n\n//# sourceURL=webpack://todo-app-web/./src/modules/ui.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app-web/./src/styles.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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