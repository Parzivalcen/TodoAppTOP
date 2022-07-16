/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/plus.svg */ "./src/imgs/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/minusDelete.svg */ "./src/imgs/minusDelete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/hamMenu.svg */ "./src/imgs/hamMenu.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/closeMenu.svg */ "./src/imgs/closeMenu.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ---------\nside Panel\n------------ */\n@media screen and (min-width:0px) {\n  .categories-navigation{\n    position: fixed;\n    flex-direction: column;\n    inset: 0 20% 0 0;\n    z-index: 999;\n    padding: min(10rem, 8vh);\n    background-color: rgb(42, 157, 143, 0.9);\n    transform: translateX(-100%);\n    transition: 0.4s ease-in-out;\n    /*BLUR bg  */\n    backdrop-filter: blur(8px);\n  }\n  .categories-navigation[data-visible=\"true\"]{\n    transform: translateX(0%);\n  }\n  /* categorieS TITLE */\n  .categories-title{\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.5rem;\n  }\n  .add-categories{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 1.5rem;\n    height: 1.5rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n  }\n  /* SINGLE CATEGORY */\n  .category > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .delete-category{\n    \n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    width: 1rem;\n    height: 1rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0;\n    cursor: pointer;\n\n  }\n  /* TOGGLE */\n  .mobile-toggle{\n    display: block;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    position: absolute;\n    width: 2rem;\n    height: 2rem;\n    left: 1rem;\n    margin-top: 1rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n    \n    \n  }\n  .mobile-toggle[aria-expanded=\"true\"]{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");  \n  }\n  .add-project-popUp[project-pop-visible=\"false\"]{\n    display: none;\n  }\n  .add-project-popUp[project-pop-visible=\"true\"]{\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\n    background-color: #e9c46a;\n    max-width: 18rem;\n    text-align: center;\n    border-radius: 10px;\n    padding: 2rem;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1001;\n    transform: translate(-50%, 20%);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;;cAEc;AACd;EACE;IACE,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;IACxB,wCAAwC;IACxC,4BAA4B;IAC5B,4BAA4B;IAC5B,YAAY;IACZ,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA,qBAAqB;EACrB;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;EACb;EACA;IACE,yDAAuC;IACvC,aAAa;IACb,cAAc;IACd,6BAA6B;IAC7B,4BAA4B;IAC5B,SAAS;IACT,aAAa;IACb,eAAe;EACjB;EACA,oBAAoB;EACpB;IACE,aAAa;IACb,8BAA8B;EAChC;EACA;;IAEE,yDAA8C;IAC9C,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,4BAA4B;IAC5B,SAAS;IACT,eAAe;;EAEjB;EACA,WAAW;EACX;IACE,cAAc;IACd,yDAA0C;IAC1C,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,6BAA6B;IAC7B,4BAA4B;IAC5B,SAAS;IACT,aAAa;IACb,eAAe;;;EAGjB;EACA;IACE,yDAA4C;EAC9C;EACA;IACE,aAAa;EACf;EACA;IACE,gDAAgD;IAChD,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,+BAA+B;EACjC;AACF","sourcesContent":["/* ---------\nside Panel\n------------ */\n@media screen and (min-width:0px) {\n  .categories-navigation{\n    position: fixed;\n    flex-direction: column;\n    inset: 0 20% 0 0;\n    z-index: 999;\n    padding: min(10rem, 8vh);\n    background-color: rgb(42, 157, 143, 0.9);\n    transform: translateX(-100%);\n    transition: 0.4s ease-in-out;\n    /*BLUR bg  */\n    backdrop-filter: blur(8px);\n  }\n  .categories-navigation[data-visible=\"true\"]{\n    transform: translateX(0%);\n  }\n  /* categorieS TITLE */\n  .categories-title{\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.5rem;\n  }\n  .add-categories{\n    background-image: url(../imgs/plus.svg);\n    width: 1.5rem;\n    height: 1.5rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n  }\n  /* SINGLE CATEGORY */\n  .category > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .delete-category{\n    \n    background-image: url(../imgs/minusDelete.svg);\n    width: 1rem;\n    height: 1rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0;\n    cursor: pointer;\n\n  }\n  /* TOGGLE */\n  .mobile-toggle{\n    display: block;\n    background-image: url(../imgs/hamMenu.svg);\n    position: absolute;\n    width: 2rem;\n    height: 2rem;\n    left: 1rem;\n    margin-top: 1rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n    \n    \n  }\n  .mobile-toggle[aria-expanded=\"true\"]{\n    background-image: url(../imgs/closeMenu.svg);  \n  }\n  .add-project-popUp[project-pop-visible=\"false\"]{\n    display: none;\n  }\n  .add-project-popUp[project-pop-visible=\"true\"]{\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\n    background-color: #e9c46a;\n    max-width: 18rem;\n    text-align: center;\n    border-radius: 10px;\n    padding: 2rem;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1001;\n    transform: translate(-50%, 20%);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/todoPanel.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/todoPanel.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/arrowUp.svg */ "./src/imgs/arrowUp.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (min-width: 0px) {\n  .title{\n    border-bottom: 1px solid white;\n  }\n  .todo-panel{\n    border-radius: 10px;\n    height: 30vh;\n    background-color: black;\n    color: white;\n  }\n  .task{\n    padding: 2vh;\n    grid-template-columns: 2vh 1fr 2vh;\n  }\n  .TaskItemCheckbox{\n    place-self: center;\n    border-radius: 50%;\n    width: 2vh;\n    height: 2vh;\n  }\n  .TaskItemDelete{\n    text-align: center;\n    place-self: center;\n    font-size: 1.5vh;\n    width: 2vh;\n    height: 2vh;\n  }\n  .task[aria-disabled=\"true\"] .TaskItemCheckbox {\n    background-color: blue;\n  }\n  .task[aria-disabled=\"true\"] .task-tag {\n    display: none;\n  }\n  \n  .task[aria-disabled=\"true\"]{\n    color: gray;\n    text-decoration: line-through;\n    \n  }\n  .task-tag{\n    color: grey;\n  }\n  \n  /* INPUT TASK FIELD */\n  .add-task-container{\n    position: relative;\n    display: flex;\n    padding: 1em;\n    align-items: center;\n  }\n  .add-task-container > label{\n    display: block;\n    position: absolute;\n    top: 1.8em;\n    left: 2em;\n    opacity: .4;\n    font-size: 12px;\n    color: black;\n  }\n  \n  .add-task-container > input{\n    /* position: relative; */\n    padding-left: 1em;\n    flex-grow: 2;\n    outline: none;\n    border: none;\n    display:block;\n    line-height: 1.5em;\n    font-size: 14pt;\n    \n  }\n  #add-task-text {\n    border-radius: 10px;\n  }\n  #add-task-text:focus + .add-task-label {\n    opacity: 0;\n  }\n  .add-task-btn{\n    position: absolute;\n    right: 1em;\n    background: transparent;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 2em;\n    height: 2em;\n  }\n\n\n\n}", "",{"version":3,"sources":["webpack://./src/styles/todoPanel.css"],"names":[],"mappings":"AAAA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,YAAY;EACd;EACA;IACE,YAAY;IACZ,kCAAkC;EACpC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,WAAW;EACb;EACA;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,6BAA6B;;EAE/B;EACA;IACE,WAAW;EACb;;EAEA,qBAAqB;EACrB;IACE,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,WAAW;IACX,eAAe;IACf,YAAY;EACd;;EAEA;IACE,wBAAwB;IACxB,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;;EAEjB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,YAAY;IACZ,yDAA0C;IAC1C,UAAU;IACV,WAAW;EACb;;;;AAIF","sourcesContent":["@media screen and (min-width: 0px) {\n  .title{\n    border-bottom: 1px solid white;\n  }\n  .todo-panel{\n    border-radius: 10px;\n    height: 30vh;\n    background-color: black;\n    color: white;\n  }\n  .task{\n    padding: 2vh;\n    grid-template-columns: 2vh 1fr 2vh;\n  }\n  .TaskItemCheckbox{\n    place-self: center;\n    border-radius: 50%;\n    width: 2vh;\n    height: 2vh;\n  }\n  .TaskItemDelete{\n    text-align: center;\n    place-self: center;\n    font-size: 1.5vh;\n    width: 2vh;\n    height: 2vh;\n  }\n  .task[aria-disabled=\"true\"] .TaskItemCheckbox {\n    background-color: blue;\n  }\n  .task[aria-disabled=\"true\"] .task-tag {\n    display: none;\n  }\n  \n  .task[aria-disabled=\"true\"]{\n    color: gray;\n    text-decoration: line-through;\n    \n  }\n  .task-tag{\n    color: grey;\n  }\n  \n  /* INPUT TASK FIELD */\n  .add-task-container{\n    position: relative;\n    display: flex;\n    padding: 1em;\n    align-items: center;\n  }\n  .add-task-container > label{\n    display: block;\n    position: absolute;\n    top: 1.8em;\n    left: 2em;\n    opacity: .4;\n    font-size: 12px;\n    color: black;\n  }\n  \n  .add-task-container > input{\n    /* position: relative; */\n    padding-left: 1em;\n    flex-grow: 2;\n    outline: none;\n    border: none;\n    display:block;\n    line-height: 1.5em;\n    font-size: 14pt;\n    \n  }\n  #add-task-text {\n    border-radius: 10px;\n  }\n  #add-task-text:focus + .add-task-label {\n    opacity: 0;\n  }\n  .add-task-btn{\n    position: absolute;\n    right: 1em;\n    background: transparent;\n    border: none;\n    background-image: url(../imgs/arrowUp.svg);\n    width: 2em;\n    height: 2em;\n  }\n\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/todoPanel.css":
/*!**********************************!*\
  !*** ./src/styles/todoPanel.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todoPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todoPanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/StoreTask/store.js":
/*!********************************!*\
  !*** ./src/StoreTask/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _UI_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/addTask */ "./src/UI/addTask.js");


//-Create Task Array with the task tags-//
class store {
  //TASKS//
  static getTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addTaskToLS(task){
    let tasks = store.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // remove Task
  static LSremoveTask(e){
    if(e.target.classList.contains('TaskItemDelete')){
      // get title
      let title = e.target.previousElementSibling.firstElementChild.innerHTML;
      let tasks = store.getTasks();
      tasks.forEach((task, index) => {
        if(task.title == title){
          tasks.splice(index, 1);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
      });
    }
  }
  // Change done state on LS
  static changeDoneState(e){
    if (e.target.classList.contains('TaskItemCheckbox')){
        // get title
        let title = e.target.nextElementSibling.firstElementChild.innerHTML;
        console.log('chang', title)
        let tasks = store.getTasks();
        let taskIndex = tasks.findIndex((task) => task.title == title )
        if (tasks[taskIndex].done == 'undone'){
          tasks[taskIndex].done = 'done';
          console.log('chang', tasks[taskIndex].done)
        }else{
          tasks[taskIndex].done = 'undone';
        }
          localStorage.setItem('tasks', JSON.stringify(tasks))
  
        };
  }


  //CATEGORIES  
  static storeCategory(category) {
    let categories = store.getCategories();
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
  }
  // Get categories
  static getCategories(){
    let categories;
    if(localStorage.getItem('categories') === null){
      categories = [];
    }else{
      categories = JSON.parse(localStorage.getItem('categories'))
    }
    return categories;
  }

  // Delete Task if task category == category
  static deleteTasksFromCategory(tasks, category){
    tasks = tasks.filter(task => task.tag !== category)
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static LSdeleteCategory(e){
    let title = e.target.previousElementSibling.innerHTML;
    let categories = store.getCategories();
    let tasks = store.getTasks();
    categories.map((category, index)=>{
      if(category ==  title){
        categories.splice(index, 1);
      }
      localStorage.setItem('categories', JSON.stringify(categories));
      store.deleteTasksFromCategory(tasks, title);
    })
  }

}



/***/ }),

/***/ "./src/UI/addTask.js":
/*!***************************!*\
  !*** ./src/UI/addTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StoreTask/store */ "./src/StoreTask/store.js");


class Task {
  constructor(title, tag){
    this.title = title;
    this.tag = tag;
    this.done = 'undone';
    // add properties like done 
  }
  // Add Task TO Panel
  static addTaskPanel (task) {
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    
    // Display task done or undone
    if (task.done == 'undone') {
      taskDiv.setAttribute('aria-disabled', false)
    }else{
      taskDiv.setAttribute('aria-disabled', true)
    }
    taskDiv.innerHTML = `
    <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
    <div class="task-content">
    <p class="task-title">${task.title}</p>
    <p class="task-tag">${task.tag}</p>
    </div>
    <button class="TaskItemDelete">X</button>
    `;
    
    taskPanel.appendChild(taskDiv);
  }
  
  // Take input
  static takeInput (tag) {
    const addBtn = document.querySelector('.add-task-btn');
    addBtn.addEventListener('click', () => {
      const title = document.querySelector('#add-task-text').value;
      let newTask = new Task(title, tag);
      // add task to DOM
      Task.addTaskPanel(newTask);
      // Store task on Local storage
      _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.addTaskToLS(newTask);
    })
  }
  
  //Task Done
  static taskDone(e) {
    if (e.target.classList.contains('TaskItemCheckbox')){
      const task = e.target.parentElement;
    
      let title = e.target.nextElementSibling.firstElementChild.innerHTML;
      const tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
      let taskIndex = tasks.findIndex((task) => task.title == title )
      if (tasks[taskIndex].done == 'undone'){
        task.setAttribute('aria-disabled', true);
        
      }else{
        task.setAttribute('aria-disabled', false);
      } 
    }
  }

  // Delete Task
  static deleteTask(e){
    if (e.target.classList.contains('TaskItemDelete')){
      e.target.parentElement.remove();
    }
  }

  // Display tasks
  static displayTasks = () => {
    let tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
    tasks.forEach((task) => {
      Task.addTaskPanel(task)
      
    });
  }
  
  static displayTasksCategorically = (category) => {
    let tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
    tasks.map((task) => {
      if(task.tag == category) {
        Task.addTaskPanel(task);
      }
    })
  }
  
}



/***/ }),

/***/ "./src/UI/addToDo.js":
/*!***************************!*\
  !*** ./src/UI/addToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_todoPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/todoPanel.css */ "./src/styles/todoPanel.css");

const todoPanel = (folder) => {
  const container = document.createElement('div');
  container.classList.add('todo-panel');
  container.innerHTML = `
    <div class="title">
      <h1>${folder}</h1>
    </div>
    <div class="tasks">
      <!-- task 1 -->
      

    </div>
    <div class="add-task-container">
      <input type="text" id="add-task-text" name="add-task-text">
      <label class="add-task-label" for="add-task-text">Add new task</label>
      <button class="add-task-btn btn"></button>
    </div>
  `
  
  return container;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoPanel);

/***/ }),

/***/ "./src/UI/home.js":
/*!************************!*\
  !*** ./src/UI/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _addToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToDo */ "./src/UI/addToDo.js");
/* harmony import */ var _sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideBar */ "./src/UI/sideBar.js");



class home {
  static header(){
    const header = document.createElement('header');
    header.classList.add('primary-header');
    header.innerHTML = `
    <button aria-expanded="false" class="mobile-toggle" aria-controls="categories-navigation"></button>
    <div class="side-panel"> 
    <ul id="categories-navigation" class="categories-navigation flex" data-visible="false">
        <div class="categories-title">
          <h2>Categories</h2>
          <span class="add-categories" id="add-categories"></span>
        </div>    
        <li class="category">
          <div>
            <p class="category--title">Daily</p>
            
          </div> 
        </li>
        <li class="category">
          <div>
            <p class="category--title">work</p>
            
          </div> 
        </li>
      </ul>
    </div>
    `
    return header;
  }
  
  static hero() {
    const hero = document.createElement('div');
    hero.classList.add('container', 'container-hero');
    hero.appendChild((0,_addToDo__WEBPACK_IMPORTED_MODULE_1__["default"])('Daily Tasks'));
    // Display categories on side panel.
    _sideBar__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories()
    return hero;
  }

  static clearHero () {
    const todoPanel = document.querySelector('.todo-panel');
    todoPanel.textContent = '';
  }
}






/***/ }),

/***/ "./src/UI/sideBar.js":
/*!***************************!*\
  !*** ./src/UI/sideBar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sideBar)
/* harmony export */ });
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StoreTask/store */ "./src/StoreTask/store.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/UI/addTask.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/UI/home.js");
/* harmony import */ var _styles_todoPanel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/todoPanel.css */ "./src/styles/todoPanel.css");





class sideBar {
  // Toggle
  static toggle () {
    const toggle = document.querySelector('.mobile-toggle');
    const categoriesNav = document.querySelector('.categories-navigation');
    toggle.addEventListener('click', () => {
      const visibility = categoriesNav.getAttribute('data-visible');
      if (visibility ===  'false')
      {
        // Expand nav
        categoriesNav.setAttribute('data-visible', true);
        // change Ham-Btn when aria is expanaded
        toggle.setAttribute('aria-expanded', true);
      }else
      {
        categoriesNav.setAttribute('data-visible', false);
        toggle.setAttribute('aria-expanded', false);
      }
    })
  }

  // POP UP //
  /*
  When Icon(+) to add category is pressed
    show the category POPUP panel
  */ 
  static CategoryPopUpPanel () {
    const addProjectPopUp = document.createElement('div');
    addProjectPopUp.classList.add('add-project-popUp');
    addProjectPopUp.setAttribute('project-pop-visible', false);
    
    // This should be on the header I think. I mean on the main by default
    addProjectPopUp.innerHTML = `
    <label for="add-project-text">Project name</label>
    <input type="text" id="add-project-text" name="add-project-text">
    <button class="add-project-btn">Add</button>
    <button class="cancel-project-btn">Cancel</button>
    `
    return addProjectPopUp;
  }
  static showAddCategoryPanel(e) {
    const addProjectPopUp = document.querySelector('.add-project-popUp');
    if(e.target.id == 'add-categories'){

      addProjectPopUp.setAttribute('project-pop-visible', true);
      
      sideBar.cancelPopUpBtn();
    }
  }

  // cancel BTN on POPUP (this btn also makes the popUP disappear.)
  static cancelPopUpBtn (){
    const addProjectPopUp = document.querySelector('.add-project-popUp');
    const cancelBtn = document.querySelector('.cancel-project-btn');
    cancelBtn.addEventListener('click', () => {
      addProjectPopUp.setAttribute('project-pop-visible', false);
    })
  }

  //Add Category POPUP Btn
  static addNewCategoryBtn (e) {
    if(e.target.classList.contains('add-project-btn')){
      const addProjectPopUp = document.querySelector('.add-project-popUp');
      const title = document.querySelector('#add-project-text').value;
      
      sideBar.addCategory(title);
      // Local Storage
      _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.storeCategory(title);
  
  
      // Hide BTN
      addProjectPopUp.setAttribute('project-pop-visible', false);
    }
  }

  // Add Category //
  static addCategory (category) {
    const formatTitle = document.createElement('li');
    const categoriesList = document.querySelector('#categories-navigation');
    // Create category title Paragraph element. 
    const categoryTitle = `<p class="category--title">${category}</p>`;
    formatTitle.classList.add('category');

    formatTitle.innerHTML = `
    <div>
      ${categoryTitle}
      <button class="delete-category"></button>
    </div>`;
    // add to dom list
    categoriesList.appendChild(formatTitle);
  }

  // Display Categories
  static displayCategories () {
    const categories = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getCategories();
    categories.map((category) => {
      sideBar.addCategory(category);
    })
  }

  // Switch bettween categories //
  // Create new todo Panel when a Category is pressed. 
  static categoryPressed(e) {
    if (e.target.classList.contains('category--title')){
      sideBar.newToDoPanel(e.target.innerHTML)
    }
  }
  // New todo Panel
  static newToDoPanel(category) {
    const todoPanel = document.querySelector('.todo-panel');
    const categoriesNav = document.querySelector('.categories-navigation');
    const toggle = document.querySelector('.mobile-toggle');
    // Delete previous panel
    _home__WEBPACK_IMPORTED_MODULE_2__.home.clearHero();
    // Hide side panel
    categoriesNav.setAttribute('data-visible', false);
    toggle.setAttribute('aria-expanded', false);
    // New todo panel
    todoPanel.innerHTML = `
    <div class="title">
    <h1>${category}</h1>
    </div>
    <div class="tasks">
    <!-- task 1 -->

      </div>
    <div class="add-task-container">
      <input type="text" id="add-task-text" name="add-task-text">
      <label class="add-task-label" for="add-task-text">Add new task</label>
      <button class="add-task-btn btn">Add</button>
    </div>
    `
    if (category == 'Daily'){
      _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.displayTasks();
    }else{
      _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.displayTasksCategorically(category);
    }
    
    _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.takeInput(category)
  }
    
  // Delete categories. 
  static deleteCategory(e) {
    const deleteBtnPressed = e.target.classList.contains('delete-category');
    if(deleteBtnPressed){
      e.target.parentElement.parentElement.remove();
      _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.LSdeleteCategory(e);
    }
  }
}

/***/ }),

/***/ "./src/imgs/arrowUp.svg":
/*!******************************!*\
  !*** ./src/imgs/arrowUp.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd513233d599b3cefb96.svg";

/***/ }),

/***/ "./src/imgs/closeMenu.svg":
/*!********************************!*\
  !*** ./src/imgs/closeMenu.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a6dcf09223357a4829d.svg";

/***/ }),

/***/ "./src/imgs/hamMenu.svg":
/*!******************************!*\
  !*** ./src/imgs/hamMenu.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af11555927ec5fef641b.svg";

/***/ }),

/***/ "./src/imgs/minusDelete.svg":
/*!**********************************!*\
  !*** ./src/imgs/minusDelete.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd4f814d80e2e23ecb48.svg";

/***/ }),

/***/ "./src/imgs/plus.svg":
/*!***************************!*\
  !*** ./src/imgs/plus.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11a0880f45bca649f6a4.svg";

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
/******/ 			"hero": 0
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/UI/home.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL2hvbWUuY3NzPzRiNTEiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvdG9kb1BhbmVsLmNzcz9hNDJmIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9TdG9yZVRhc2svc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9VSS9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvVUkvYWRkVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL1VJL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9VSS9zaWRlQmFyLmpzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9taW51c0RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL2hhbU1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9jbG9zZU1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogLS0tLS0tLS0tXFxuc2lkZSBQYW5lbFxcbi0tLS0tLS0tLS0tLSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MHB4KSB7XFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9ue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGluc2V0OiAwIDIwJSAwIDA7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgcGFkZGluZzogbWluKDEwcmVtLCA4dmgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE1NywgMTQzLCAwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAvKkJMVVIgYmcgICovXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgfVxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbltkYXRhLXZpc2libGU9XFxcInRydWVcXFwiXXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG4gIC8qIGNhdGVnb3JpZVMgVElUTEUgKi9cXG4gIC5jYXRlZ29yaWVzLXRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgfVxcbiAgLmFkZC1jYXRlZ29yaWVze1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLyogU0lOR0xFIENBVEVHT1JZICovXFxuICAuY2F0ZWdvcnkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuICAuZGVsZXRlLWNhdGVnb3J5e1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgfVxcbiAgLyogVE9HR0xFICovXFxuICAubW9iaWxlLXRvZ2dsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgXFxuICB9XFxuICAubW9iaWxlLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl17XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7ICBcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1wb3BVcFtwcm9qZWN0LXBvcC12aXNpYmxlPVxcXCJmYWxzZVxcXCJde1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwW3Byb2plY3QtcG9wLXZpc2libGU9XFxcInRydWVcXFwiXXtcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgei1pbmRleDogMTAwMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Y0FFYztBQUNkO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHdDQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseURBQXVDO0lBQ3ZDLGFBQWE7SUFDYixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQSxvQkFBb0I7RUFDcEI7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDO0VBQ0E7O0lBRUUseURBQThDO0lBQzlDLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsZUFBZTs7RUFFakI7RUFDQSxXQUFXO0VBQ1g7SUFDRSxjQUFjO0lBQ2QseURBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7OztFQUdqQjtFQUNBO0lBQ0UseURBQTRDO0VBQzlDO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS1cXG5zaWRlIFBhbmVsXFxuLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowcHgpIHtcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaW5zZXQ6IDAgMjAlIDAgMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBwYWRkaW5nOiBtaW4oMTByZW0sIDh2aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTU3LCAxNDMsIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIC8qQkxVUiBiZyAgKi9cXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB9XFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT1cXFwidHJ1ZVxcXCJde1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbiAgLyogY2F0ZWdvcmllUyBUSVRMRSAqL1xcbiAgLmNhdGVnb3JpZXMtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICB9XFxuICAuYWRkLWNhdGVnb3JpZXN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWdzL3BsdXMuc3ZnKTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC8qIFNJTkdMRSBDQVRFR09SWSAqL1xcbiAgLmNhdGVnb3J5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbiAgLmRlbGV0ZS1jYXRlZ29yeXtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWdzL21pbnVzRGVsZXRlLnN2Zyk7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIH1cXG4gIC8qIFRPR0dMRSAqL1xcbiAgLm1vYmlsZS10b2dnbGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1ncy9oYW1NZW51LnN2Zyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgXFxuICB9XFxuICAubW9iaWxlLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl17XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWdzL2Nsb3NlTWVudS5zdmcpOyAgXFxuICB9XFxuICAuYWRkLXByb2plY3QtcG9wVXBbcHJvamVjdC1wb3AtdmlzaWJsZT1cXFwiZmFsc2VcXFwiXXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1wb3BVcFtwcm9qZWN0LXBvcC12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHotaW5kZXg6IDEwMDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9hcnJvd1VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxle1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuICAudG9kby1wYW5lbHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLnRhc2t7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydmggMWZyIDJ2aDtcXG4gIH1cXG4gIC5UYXNrSXRlbUNoZWNrYm94e1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAydmg7XFxuICB9XFxuICAuVGFza0l0ZW1EZWxldGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXZoO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gIH1cXG4gIC50YXNrW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiXSAuVGFza0l0ZW1DaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLnRhc2stdGFnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJde1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIFxcbiAgfVxcbiAgLnRhc2stdGFne1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG4gIFxcbiAgLyogSU5QVVQgVEFTSyBGSUVMRCAqL1xcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS44ZW07XFxuICAgIGxlZnQ6IDJlbTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gaW5wdXR7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRwdDtcXG4gICAgXFxuICB9XFxuICAjYWRkLXRhc2stdGV4dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICAjYWRkLXRhc2stdGV4dDpmb2N1cyArIC5hZGQtdGFzay1sYWJlbCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAuYWRkLXRhc2stYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgfVxcblxcblxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLDZCQUE2Qjs7RUFFL0I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlOztFQUVqQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5REFBMEM7SUFDMUMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7OztBQUlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxle1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuICAudG9kby1wYW5lbHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLnRhc2t7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydmggMWZyIDJ2aDtcXG4gIH1cXG4gIC5UYXNrSXRlbUNoZWNrYm94e1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAydmg7XFxuICB9XFxuICAuVGFza0l0ZW1EZWxldGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXZoO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gIH1cXG4gIC50YXNrW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiXSAuVGFza0l0ZW1DaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLnRhc2stdGFnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJde1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIFxcbiAgfVxcbiAgLnRhc2stdGFne1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG4gIFxcbiAgLyogSU5QVVQgVEFTSyBGSUVMRCAqL1xcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS44ZW07XFxuICAgIGxlZnQ6IDJlbTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gaW5wdXR7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRwdDtcXG4gICAgXFxuICB9XFxuICAjYWRkLXRhc2stdGV4dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICAjYWRkLXRhc2stdGV4dDpmb2N1cyArIC5hZGQtdGFzay1sYWJlbCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAuYWRkLXRhc2stYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWdzL2Fycm93VXAuc3ZnKTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICB9XFxuXFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb1BhbmVsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb1BhbmVsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL1VJL2FkZFRhc2tcIjtcblxuLy8tQ3JlYXRlIFRhc2sgQXJyYXkgd2l0aCB0aGUgdGFzayB0YWdzLS8vXG5jbGFzcyBzdG9yZSB7XG4gIC8vVEFTS1MvL1xuICBzdGF0aWMgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKXtcbiAgICAgIHRhc2tzID0gW107XG4gICAgfWVsc2V7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFza1RvTFModGFzayl7XG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cbiAgLy8gcmVtb3ZlIFRhc2tcbiAgc3RhdGljIExTcmVtb3ZlVGFzayhlKXtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xuICAgICAgLy8gZ2V0IHRpdGxlXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZih0YXNrLnRpdGxlID09IHRpdGxlKXtcbiAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyBDaGFuZ2UgZG9uZSBzdGF0ZSBvbiBMU1xuICBzdGF0aWMgY2hhbmdlRG9uZVN0YXRlKGUpe1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtQ2hlY2tib3gnKSl7XG4gICAgICAgIC8vIGdldCB0aXRsZVxuICAgICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICBjb25zb2xlLmxvZygnY2hhbmcnLCB0aXRsZSlcbiAgICAgICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXG4gICAgICAgIGlmICh0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPT0gJ3VuZG9uZScpe1xuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9ICdkb25lJztcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmcnLCB0YXNrc1t0YXNrSW5kZXhdLmRvbmUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9ICd1bmRvbmUnO1xuICAgICAgICB9XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICBcbiAgICAgICAgfTtcbiAgfVxuXG5cbiAgLy9DQVRFR09SSUVTICBcbiAgc3RhdGljIHN0b3JlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcbiAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuICB9XG4gIC8vIEdldCBjYXRlZ29yaWVzXG4gIHN0YXRpYyBnZXRDYXRlZ29yaWVzKCl7XG4gICAgbGV0IGNhdGVnb3JpZXM7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSA9PT0gbnVsbCl7XG4gICAgICBjYXRlZ29yaWVzID0gW107XG4gICAgfWVsc2V7XG4gICAgICBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKVxuICAgIH1cbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfVxuXG4gIC8vIERlbGV0ZSBUYXNrIGlmIHRhc2sgY2F0ZWdvcnkgPT0gY2F0ZWdvcnlcbiAgc3RhdGljIGRlbGV0ZVRhc2tzRnJvbUNhdGVnb3J5KHRhc2tzLCBjYXRlZ29yeSl7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZyAhPT0gY2F0ZWdvcnkpXG4gIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cblxuICBzdGF0aWMgTFNkZWxldGVDYXRlZ29yeShlKXtcbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpPT57XG4gICAgICBpZihjYXRlZ29yeSA9PSAgdGl0bGUpe1xuICAgICAgICBjYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbiAgICAgIHN0b3JlLmRlbGV0ZVRhc2tzRnJvbUNhdGVnb3J5KHRhc2tzLCB0aXRsZSk7XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCB7IHN0b3JlIH07IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVUYXNrL3N0b3JlXCI7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGFnKXtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy5kb25lID0gJ3VuZG9uZSc7XG4gICAgLy8gYWRkIHByb3BlcnRpZXMgbGlrZSBkb25lIFxuICB9XG4gIC8vIEFkZCBUYXNrIFRPIFBhbmVsXG4gIHN0YXRpYyBhZGRUYXNrUGFuZWwgKHRhc2spIHtcbiAgICBjb25zdCB0YXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycsICdncmlkJyk7XG4gICAgXG4gICAgLy8gRGlzcGxheSB0YXNrIGRvbmUgb3IgdW5kb25lXG4gICAgaWYgKHRhc2suZG9uZSA9PSAndW5kb25lJykge1xuICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSlcbiAgICB9ZWxzZXtcbiAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSlcbiAgICB9XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiB0eXBlPVwicmFkaW9cIiByb2xlPVwiY2hlY2tib3hcIiBhcmlhLWNoZWNrZWQ9XCJmYWxzZVwiIGNsYXNzPVwiVGFza0l0ZW1DaGVja2JveFwiPjwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cbiAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgIDxwIGNsYXNzPVwidGFzay10YWdcIj4ke3Rhc2sudGFnfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiVGFza0l0ZW1EZWxldGVcIj5YPC9idXR0b24+XG4gICAgYDtcbiAgICBcbiAgICB0YXNrUGFuZWwuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gIH1cbiAgXG4gIC8vIFRha2UgaW5wdXRcbiAgc3RhdGljIHRha2VJbnB1dCAodGFnKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRleHQnKS52YWx1ZTtcbiAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIHRhZyk7XG4gICAgICAvLyBhZGQgdGFzayB0byBET01cbiAgICAgIFRhc2suYWRkVGFza1BhbmVsKG5ld1Rhc2spO1xuICAgICAgLy8gU3RvcmUgdGFzayBvbiBMb2NhbCBzdG9yYWdlXG4gICAgICBzdG9yZS5hZGRUYXNrVG9MUyhuZXdUYXNrKTtcbiAgICB9KVxuICB9XG4gIFxuICAvL1Rhc2sgRG9uZVxuICBzdGF0aWMgdGFza0RvbmUoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtQ2hlY2tib3gnKSl7XG4gICAgICBjb25zdCB0YXNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBcbiAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XG4gICAgICBjb25zdCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRpdGxlIClcbiAgICAgIGlmICh0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPT0gJ3VuZG9uZScpe1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgIH0gXG4gICAgfVxuICB9XG5cbiAgLy8gRGVsZXRlIFRhc2tcbiAgc3RhdGljIGRlbGV0ZVRhc2soZSl7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1EZWxldGUnKSl7XG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERpc3BsYXkgdGFza3NcbiAgc3RhdGljIGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIFRhc2suYWRkVGFza1BhbmVsKHRhc2spXG4gICAgICBcbiAgICB9KTtcbiAgfVxuICBcbiAgc3RhdGljIGRpc3BsYXlUYXNrc0NhdGVnb3JpY2FsbHkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgIHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgaWYodGFzay50YWcgPT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgVGFzay5hZGRUYXNrUGFuZWwodGFzayk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBcbn1cblxuZXhwb3J0e1Rhc2t9OyIsImltcG9ydCAnLi4vc3R5bGVzL3RvZG9QYW5lbC5jc3MnXG5jb25zdCB0b2RvUGFuZWwgPSAoZm9sZGVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1wYW5lbCcpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPGgxPiR7Zm9sZGVyfTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG4gICAgICA8IS0tIHRhc2sgMSAtLT5cbiAgICAgIFxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtdGFzay10ZXh0XCIgbmFtZT1cImFkZC10YXNrLXRleHRcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImFkZC10YXNrLWxhYmVsXCIgZm9yPVwiYWRkLXRhc2stdGV4dFwiPkFkZCBuZXcgdGFzazwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRhc2stYnRuIGJ0blwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgXG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgdG9kb1BhbmVsOyIsImltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJ1xuaW1wb3J0IHRvZG9QYW5lbCBmcm9tICcuL2FkZFRvRG8nO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi9zaWRlQmFyJztcbmNsYXNzIGhvbWUge1xuICBzdGF0aWMgaGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGNsYXNzPVwibW9iaWxlLXRvZ2dsZVwiIGFyaWEtY29udHJvbHM9XCJjYXRlZ29yaWVzLW5hdmlnYXRpb25cIj48L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZS1wYW5lbFwiPiBcbiAgICA8dWwgaWQ9XCJjYXRlZ29yaWVzLW5hdmlnYXRpb25cIiBjbGFzcz1cImNhdGVnb3JpZXMtbmF2aWdhdGlvbiBmbGV4XCIgZGF0YS12aXNpYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3JpZXMtdGl0bGVcIj5cbiAgICAgICAgICA8aDI+Q2F0ZWdvcmllczwvaDI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGQtY2F0ZWdvcmllc1wiIGlkPVwiYWRkLWNhdGVnb3JpZXNcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPGxpIGNsYXNzPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS0tdGl0bGVcIj5EYWlseTwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS0tdGl0bGVcIj53b3JrPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuICBcbiAgc3RhdGljIGhlcm8oKSB7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2NvbnRhaW5lci1oZXJvJyk7XG4gICAgaGVyby5hcHBlbmRDaGlsZCh0b2RvUGFuZWwoJ0RhaWx5IFRhc2tzJykpO1xuICAgIC8vIERpc3BsYXkgY2F0ZWdvcmllcyBvbiBzaWRlIHBhbmVsLlxuICAgIHNpZGVCYXIuZGlzcGxheUNhdGVnb3JpZXMoKVxuICAgIHJldHVybiBoZXJvO1xuICB9XG5cbiAgc3RhdGljIGNsZWFySGVybyAoKSB7XG4gICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcGFuZWwnKTtcbiAgICB0b2RvUGFuZWwudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG5cblxuXG5leHBvcnQge2hvbWV9IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVUYXNrL3N0b3JlXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCAnLi4vc3R5bGVzL3RvZG9QYW5lbC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaWRlQmFyIHtcbiAgLy8gVG9nZ2xlXG4gIHN0YXRpYyB0b2dnbGUgKCkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtdG9nZ2xlJyk7XG4gICAgY29uc3QgY2F0ZWdvcmllc05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzLW5hdmlnYXRpb24nKTtcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB2aXNpYmlsaXR5ID0gY2F0ZWdvcmllc05hdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScpO1xuICAgICAgaWYgKHZpc2liaWxpdHkgPT09ICAnZmFsc2UnKVxuICAgICAge1xuICAgICAgICAvLyBFeHBhbmQgbmF2XG4gICAgICAgIGNhdGVnb3JpZXNOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCB0cnVlKTtcbiAgICAgICAgLy8gY2hhbmdlIEhhbS1CdG4gd2hlbiBhcmlhIGlzIGV4cGFuYWRlZFxuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9ZWxzZVxuICAgICAge1xuICAgICAgICBjYXRlZ29yaWVzTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgZmFsc2UpO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBQT1AgVVAgLy9cbiAgLypcbiAgV2hlbiBJY29uKCspIHRvIGFkZCBjYXRlZ29yeSBpcyBwcmVzc2VkXG4gICAgc2hvdyB0aGUgY2F0ZWdvcnkgUE9QVVAgcGFuZWxcbiAgKi8gXG4gIHN0YXRpYyBDYXRlZ29yeVBvcFVwUGFuZWwgKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1wb3BVcCcpO1xuICAgIGFkZFByb2plY3RQb3BVcC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtcG9wLXZpc2libGUnLCBmYWxzZSk7XG4gICAgXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgb24gdGhlIGhlYWRlciBJIHRoaW5rLiBJIG1lYW4gb24gdGhlIG1haW4gYnkgZGVmYXVsdFxuICAgIGFkZFByb2plY3RQb3BVcC5pbm5lckhUTUwgPSBgXG4gICAgPGxhYmVsIGZvcj1cImFkZC1wcm9qZWN0LXRleHRcIj5Qcm9qZWN0IG5hbWU8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXByb2plY3QtdGV4dFwiIG5hbWU9XCJhZGQtcHJvamVjdC10ZXh0XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0LWJ0blwiPkFkZDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtcHJvamVjdC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICBgXG4gICAgcmV0dXJuIGFkZFByb2plY3RQb3BVcDtcbiAgfVxuICBzdGF0aWMgc2hvd0FkZENhdGVnb3J5UGFuZWwoZSkge1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3BVcCcpO1xuICAgIGlmKGUudGFyZ2V0LmlkID09ICdhZGQtY2F0ZWdvcmllcycpe1xuXG4gICAgICBhZGRQcm9qZWN0UG9wVXAuc2V0QXR0cmlidXRlKCdwcm9qZWN0LXBvcC12aXNpYmxlJywgdHJ1ZSk7XG4gICAgICBcbiAgICAgIHNpZGVCYXIuY2FuY2VsUG9wVXBCdG4oKTtcbiAgICB9XG4gIH1cblxuICAvLyBjYW5jZWwgQlROIG9uIFBPUFVQICh0aGlzIGJ0biBhbHNvIG1ha2VzIHRoZSBwb3BVUCBkaXNhcHBlYXIuKVxuICBzdGF0aWMgY2FuY2VsUG9wVXBCdG4gKCl7XG4gICAgY29uc3QgYWRkUHJvamVjdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcFVwJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1wcm9qZWN0LWJ0bicpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFkZFByb2plY3RQb3BVcC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtcG9wLXZpc2libGUnLCBmYWxzZSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vQWRkIENhdGVnb3J5IFBPUFVQIEJ0blxuICBzdGF0aWMgYWRkTmV3Q2F0ZWdvcnlCdG4gKGUpIHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1wcm9qZWN0LWJ0bicpKXtcbiAgICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3BVcCcpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtdGV4dCcpLnZhbHVlO1xuICAgICAgXG4gICAgICBzaWRlQmFyLmFkZENhdGVnb3J5KHRpdGxlKTtcbiAgICAgIC8vIExvY2FsIFN0b3JhZ2VcbiAgICAgIHN0b3JlLnN0b3JlQ2F0ZWdvcnkodGl0bGUpO1xuICBcbiAgXG4gICAgICAvLyBIaWRlIEJUTlxuICAgICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgQ2F0ZWdvcnkgLy9cbiAgc3RhdGljIGFkZENhdGVnb3J5IChjYXRlZ29yeSkge1xuICAgIGNvbnN0IGZvcm1hdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yaWVzLW5hdmlnYXRpb24nKTtcbiAgICAvLyBDcmVhdGUgY2F0ZWdvcnkgdGl0bGUgUGFyYWdyYXBoIGVsZW1lbnQuIFxuICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBgPHAgY2xhc3M9XCJjYXRlZ29yeS0tdGl0bGVcIj4ke2NhdGVnb3J5fTwvcD5gO1xuICAgIGZvcm1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG5cbiAgICBmb3JtYXRUaXRsZS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdj5cbiAgICAgICR7Y2F0ZWdvcnlUaXRsZX1cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtY2F0ZWdvcnlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuICAgIC8vIGFkZCB0byBkb20gbGlzdFxuICAgIGNhdGVnb3JpZXNMaXN0LmFwcGVuZENoaWxkKGZvcm1hdFRpdGxlKTtcbiAgfVxuXG4gIC8vIERpc3BsYXkgQ2F0ZWdvcmllc1xuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMgKCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICBzaWRlQmFyLmFkZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gU3dpdGNoIGJldHR3ZWVuIGNhdGVnb3JpZXMgLy9cbiAgLy8gQ3JlYXRlIG5ldyB0b2RvIFBhbmVsIHdoZW4gYSBDYXRlZ29yeSBpcyBwcmVzc2VkLiBcbiAgc3RhdGljIGNhdGVnb3J5UHJlc3NlZChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2F0ZWdvcnktLXRpdGxlJykpe1xuICAgICAgc2lkZUJhci5uZXdUb0RvUGFuZWwoZS50YXJnZXQuaW5uZXJIVE1MKVxuICAgIH1cbiAgfVxuICAvLyBOZXcgdG9kbyBQYW5lbFxuICBzdGF0aWMgbmV3VG9Eb1BhbmVsKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcGFuZWwnKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMtbmF2aWdhdGlvbicpO1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtdG9nZ2xlJyk7XG4gICAgLy8gRGVsZXRlIHByZXZpb3VzIHBhbmVsXG4gICAgaG9tZS5jbGVhckhlcm8oKTtcbiAgICAvLyBIaWRlIHNpZGUgcGFuZWxcbiAgICBjYXRlZ29yaWVzTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgZmFsc2UpO1xuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgLy8gTmV3IHRvZG8gcGFuZWxcbiAgICB0b2RvUGFuZWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxoMT4ke2NhdGVnb3J5fTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG4gICAgPCEtLSB0YXNrIDEgLS0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXRhc2stdGV4dFwiIG5hbWU9XCJhZGQtdGFzay10ZXh0XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJhZGQtdGFzay1sYWJlbFwiIGZvcj1cImFkZC10YXNrLXRleHRcIj5BZGQgbmV3IHRhc2s8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10YXNrLWJ0biBidG5cIj5BZGQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgaWYgKGNhdGVnb3J5ID09ICdEYWlseScpe1xuICAgICAgVGFzay5kaXNwbGF5VGFza3MoKTtcbiAgICB9ZWxzZXtcbiAgICAgIFRhc2suZGlzcGxheVRhc2tzQ2F0ZWdvcmljYWxseShjYXRlZ29yeSk7XG4gICAgfVxuICAgIFxuICAgIFRhc2sudGFrZUlucHV0KGNhdGVnb3J5KVxuICB9XG4gICAgXG4gIC8vIERlbGV0ZSBjYXRlZ29yaWVzLiBcbiAgc3RhdGljIGRlbGV0ZUNhdGVnb3J5KGUpIHtcbiAgICBjb25zdCBkZWxldGVCdG5QcmVzc2VkID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtY2F0ZWdvcnknKTtcbiAgICBpZihkZWxldGVCdG5QcmVzc2VkKXtcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHN0b3JlLkxTZGVsZXRlQ2F0ZWdvcnkoZSk7XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJoZXJvXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL1VJL2hvbWUuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=