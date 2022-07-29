"use strict";
(self["webpackChunktodoapp"] = self["webpackChunktodoapp"] || []).push([["hero"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "/* ---------\r\nside Panel\r\n------------ */\r\n@media screen and (min-width:0px) {\r\n  .categories-navigation{\r\n    position: fixed;\r\n    flex-direction: column;\r\n    inset: 0 20% 0 0;\r\n    z-index: 999;\r\n    padding: min(10rem, 8vh);\r\n    background-color: rgb(42, 157, 143, 0.9);\r\n    transform: translateX(-100%);\r\n    transition: 0.4s ease-in-out;\r\n    /*BLUR bg  */\r\n    backdrop-filter: blur(8px);\r\n    color: white;\r\n    max-height: 90vh;\r\n  }\r\n  .categories-navigation[data-visible=\"true\"]{\r\n    transform: translateX(0%);\r\n  }\r\n  .category:hover{\r\n    cursor: pointer;\r\n  }\r\n  /* categorieS TITLE */\r\n  .categories-title{\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 0.5rem;\r\n  }\r\n  .add-categories{\r\n    background-color: #e9c46a;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    border: 0;\r\n    z-index: 1000;\r\n    cursor: pointer;\r\n  }\r\n  /* SINGLE CATEGORY */\r\n  .category--title{\r\n    text-transform: capitalize;\r\n  }\r\n  .category > div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    align-items: center;\r\n  }\r\n  .delete-category{\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-color: #800020;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    border: 0;\r\n    cursor: pointer;\r\n\r\n  }\r\n  /* TOGGLE */\r\n  .mobile-toggle{\r\n    display: block;\r\n    /* Change Icon color */\r\n    background-color: #e9c46a;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    left: 1rem;\r\n    margin-top: 1rem;\r\n    border: 0;\r\n    z-index: 1000;\r\n    cursor: pointer;\r\n    \r\n    \r\n  }\r\n  .mobile-toggle[aria-expanded=\"true\"]{\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\r\n  }\r\n\r\n  /* -----------\r\n  POP UP\r\n  ---------------- */\r\n  .add-project-popUp{\r\n    display: none;\r\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\r\n    background-color: #e9c46a;\r\n    max-width: 18rem;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    padding-top: 2rem;\r\n    padding-inline: 2rem;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 50%;\r\n    z-index: 1005;\r\n    transform: translate(-50%, 20%);\r\n  }\r\n  .add-project-popUp > input, button{\r\n    border-radius: 10px;\r\n    border: none;\r\n  }\r\n  .add-project-popUp > input{\r\n    padding-inline: 1rem;\r\n  }\r\n  /* Buttons */\r\n  .btns-popUp{\r\n    margin-top: 1rem;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  .btns-popUp > *{\r\n    background: transparent;\r\n  }\r\n  .add-project-btn{\r\n    color: rgb(42, 157, 143, 0.9);\r\n  }\r\n  .cancel-project-btn{\r\n    color: rgba(48, 48, 48, 0.9);\r\n  }\r\n  /* Attribute swicth */\r\n  .add-project-popUp[project-pop-visible=\"true\"]{\r\n    display: block;\r\n  }\r\n}\r\n@media screen and (min-width: 900px) {\r\n  .categories-navigation{\r\n    transform: translateX(0%);\r\n    inset: 0 70% 0 0;\r\n    box-shadow: 11px 3px 5px -6px rgba(0,0,0,0.75);\r\n    \r\n  }\r\n  .mobile-toggle{\r\n    display: none;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  .categories-navigation{\r\n    inset: 0 75% 0 0;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  .categories-navigation{\r\n    inset: 0 80% 0 0;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;;cAEc;AACd;EACE;IACE,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;IACxB,wCAAwC;IACxC,4BAA4B;IAC5B,4BAA4B;IAC5B,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,eAAe;EACjB;EACA,qBAAqB;EACrB;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;EACb;EACA;IACE,yBAAyB;IACzB,4DAA0C;IAC1C,oDAAkC;IAClC,8BAA8B;IAC9B,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,SAAS;IACT,aAAa;IACb,eAAe;EACjB;EACA,oBAAoB;EACpB;IACE,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,4DAAiD;IACjD,oDAAyC;IACzC,8BAA8B;IAC9B,sBAAsB;IACtB,SAAS;IACT,eAAe;;EAEjB;EACA,WAAW;EACX;IACE,cAAc;IACd,sBAAsB;IACtB,yBAAyB;IACzB,4DAA6C;IAC7C,oDAAqC;IACrC,8BAA8B;IAC9B,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,eAAe;;;EAGjB;EACA;IACE,4DAA+C;IAC/C,oDAAuC;EACzC;;EAEA;;oBAEkB;EAClB;IACE,aAAa;IACb,gDAAgD;IAChD,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,+BAA+B;EACjC;EACA;IACE,mBAAmB;IACnB,YAAY;EACd;EACA;IACE,oBAAoB;EACtB;EACA,YAAY;EACZ;IACE,gBAAgB;IAChB,aAAa;IACb,6BAA6B;EAC/B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,4BAA4B;EAC9B;EACA,qBAAqB;EACrB;IACE,cAAc;EAChB;AACF;AACA;EACE;IACE,yBAAyB;IACzB,gBAAgB;IAChB,8CAA8C;;EAEhD;EACA;IACE,aAAa;EACf;;AAEF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF","sourcesContent":["/* ---------\r\nside Panel\r\n------------ */\r\n@media screen and (min-width:0px) {\r\n  .categories-navigation{\r\n    position: fixed;\r\n    flex-direction: column;\r\n    inset: 0 20% 0 0;\r\n    z-index: 999;\r\n    padding: min(10rem, 8vh);\r\n    background-color: rgb(42, 157, 143, 0.9);\r\n    transform: translateX(-100%);\r\n    transition: 0.4s ease-in-out;\r\n    /*BLUR bg  */\r\n    backdrop-filter: blur(8px);\r\n    color: white;\r\n    max-height: 90vh;\r\n  }\r\n  .categories-navigation[data-visible=\"true\"]{\r\n    transform: translateX(0%);\r\n  }\r\n  .category:hover{\r\n    cursor: pointer;\r\n  }\r\n  /* categorieS TITLE */\r\n  .categories-title{\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 0.5rem;\r\n  }\r\n  .add-categories{\r\n    background-color: #e9c46a;\r\n    -webkit-mask-image: url(../imgs/plus.svg) ;\r\n    mask-image: url(../imgs/plus.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    border: 0;\r\n    z-index: 1000;\r\n    cursor: pointer;\r\n  }\r\n  /* SINGLE CATEGORY */\r\n  .category--title{\r\n    text-transform: capitalize;\r\n  }\r\n  .category > div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    align-items: center;\r\n  }\r\n  .delete-category{\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-color: #800020;\r\n    -webkit-mask-image: url(../imgs/minusDelete.svg) ;\r\n    mask-image: url(../imgs/minusDelete.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    border: 0;\r\n    cursor: pointer;\r\n\r\n  }\r\n  /* TOGGLE */\r\n  .mobile-toggle{\r\n    display: block;\r\n    /* Change Icon color */\r\n    background-color: #e9c46a;\r\n    -webkit-mask-image: url(../imgs/hamMenu.svg) ;\r\n    mask-image: url(../imgs/hamMenu.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    left: 1rem;\r\n    margin-top: 1rem;\r\n    border: 0;\r\n    z-index: 1000;\r\n    cursor: pointer;\r\n    \r\n    \r\n  }\r\n  .mobile-toggle[aria-expanded=\"true\"]{\r\n    -webkit-mask-image: url(../imgs/closeMenu.svg) ;\r\n    mask-image: url(../imgs/closeMenu.svg) ;\r\n  }\r\n\r\n  /* -----------\r\n  POP UP\r\n  ---------------- */\r\n  .add-project-popUp{\r\n    display: none;\r\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\r\n    background-color: #e9c46a;\r\n    max-width: 18rem;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    padding-top: 2rem;\r\n    padding-inline: 2rem;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 50%;\r\n    z-index: 1005;\r\n    transform: translate(-50%, 20%);\r\n  }\r\n  .add-project-popUp > input, button{\r\n    border-radius: 10px;\r\n    border: none;\r\n  }\r\n  .add-project-popUp > input{\r\n    padding-inline: 1rem;\r\n  }\r\n  /* Buttons */\r\n  .btns-popUp{\r\n    margin-top: 1rem;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  .btns-popUp > *{\r\n    background: transparent;\r\n  }\r\n  .add-project-btn{\r\n    color: rgb(42, 157, 143, 0.9);\r\n  }\r\n  .cancel-project-btn{\r\n    color: rgba(48, 48, 48, 0.9);\r\n  }\r\n  /* Attribute swicth */\r\n  .add-project-popUp[project-pop-visible=\"true\"]{\r\n    display: block;\r\n  }\r\n}\r\n@media screen and (min-width: 900px) {\r\n  .categories-navigation{\r\n    transform: translateX(0%);\r\n    inset: 0 70% 0 0;\r\n    box-shadow: 11px 3px 5px -6px rgba(0,0,0,0.75);\r\n    \r\n  }\r\n  .mobile-toggle{\r\n    display: none;\r\n  }\r\n\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  .categories-navigation{\r\n    inset: 0 75% 0 0;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  .categories-navigation{\r\n    inset: 0 80% 0 0;\r\n  }\r\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/uncheck.svg */ "./src/imgs/uncheck.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/minusDelete.svg */ "./src/imgs/minusDelete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/check.svg */ "./src/imgs/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/arrowUp.svg */ "./src/imgs/arrowUp.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (min-width: 0px) {\r\n  .title{\r\n    margin-bottom: 1.5vh;\r\n    border-bottom: 1px solid white;\r\n  }\r\n  .todo-panel{\r\n    position: relative;\r\n    padding: 1em;\r\n    border-radius: 10px;\r\n    min-height: 45vh;\r\n    max-height: 60vh;\r\n    width: 35vh;\r\n    background-color: #258d81;\r\n    color: white;\r\n    overflow: auto;\r\n    \r\n  }\r\n/* Make tasks scrollable */\r\n  .tasks{\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n    margin-bottom: 3vh;\r\n  }\r\n\r\n  \r\n  \r\n  .task{\r\n    padding: .8vh;\r\n    grid-template-columns: 2vh 1fr 2vh;\r\n  }\r\n  .TaskItemCheckbox{\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: none;\r\n    color: #e9c46a;\r\n    background-color: #e9c46a;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    width: 2vh;\r\n    height: 2vh;\r\n    cursor: pointer;\r\n    \r\n  }\r\n  .TaskItemDelete{\r\n    background: transparent;\r\n    border: none;\r\n    text-align: center;\r\n    place-self: center;\r\n    width: 2vh;\r\n    height: 2vh;\r\n    /* Change Icon color */\r\n    background-color: #800020;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    cursor: pointer;\r\n  }\r\n  .task[aria-disabled=\"true\"] .TaskItemCheckbox {\r\n    /* Change Icon color */\r\n    background-color: #a0a0a0;\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;  \r\n      \r\n\r\n  }\r\n  .task[aria-disabled=\"true\"] .task-category {\r\n    display: none;\r\n  }\r\n  .task-title{\r\n    cursor: pointer;\r\n    z-index: 2;\r\n  }\r\n  .task[aria-disabled=\"true\"]{\r\n    color: rgb(104, 104, 104);\r\n    text-decoration: line-through;\r\n    \r\n  }\r\n  .task-category{\r\n    color: rgb(104, 104, 104);\r\n    text-transform: capitalize;\r\n    \r\n\r\n  }\r\n  \r\n  /* INPUT TASK FIELD */\r\n  .add-task-container{\r\n    position: absolute;\r\n    display: flex;\r\n    gap: .5vh;\r\n    border-radius: 10px;\r\n    align-items: center;\r\n    bottom: .3vh;\r\n    left: 3vh;\r\n    width: 30vh;\r\n    height: 5vh;\r\n    \r\n  }\r\n  #add-task-text{\r\n    width: 25vh;\r\n  }\r\n  .add-task-container > label{\r\n    display: block;\r\n    position: absolute;\r\n    top: .7em;\r\n    left: 2vh;\r\n    opacity: .4;\r\n    font-size: 12px;\r\n    color: black;\r\n  }\r\n  \r\n  .add-task-container > input{\r\n    padding-left: 1em;\r\n    outline: none;\r\n    border: none;\r\n    display:block;\r\n    line-height: 1.5em;\r\n    height: 2.2em;\r\n    font-size: .8em;\r\n    \r\n  }\r\n  #add-task-text {\r\n    border-radius: 10px;\r\n    \r\n  }\r\n  #add-task-text:focus + .add-task-label {\r\n    opacity: 0;\r\n  }\r\n  .add-task-btn{\r\n    background: transparent;\r\n    border: none;\r\n    width: 5vh;\r\n    height: 5vh;\r\n    color: #e9c46a;\r\n    /* Change Icon color */\r\n    background-color: rgb(216, 183, 99);\r\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\r\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n}\r\n@media screen and (min-width: 500px) {\r\n\r\n  .add-task-container{\r\n    bottom: .05em;\r\n    left: 3vh;\r\n  }\r\n  .add-task-container > label{\r\n    top: 1.6vh;\r\n    left: 2vh;\r\n  }\r\n  .add-task-btn{\r\n    width: 3vh;\r\n    height: 3vh;\r\n  }\r\n}\r\n@media screen and (min-width: 800px) {\r\n  .add-task-container > input{\r\n    height: 1.8em;\r\n    font-size: 1em;\r\n    \r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/todoPanel.css"],"names":[],"mappings":"AAAA;EACE;IACE,oBAAoB;IACpB,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,YAAY;IACZ,cAAc;;EAEhB;AACF,0BAA0B;EACxB;IACE,gBAAgB;IAChB,cAAc;IACd,kBAAkB;EACpB;;;;EAIA;IACE,aAAa;IACb,kCAAkC;EACpC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,4DAA6C;IAC7C,oDAAqC;IACrC,8BAA8B;IAC9B,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,eAAe;;EAEjB;EACA;IACE,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,yBAAyB;IACzB,4DAAiD;IACjD,oDAAyC;IACzC,8BAA8B;IAC9B,sBAAsB;IACtB,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,yBAAyB;IACzB,4DAA2C;IAC3C,oDAAmC;IACnC,8BAA8B;IAC9B,sBAAsB;;;EAGxB;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;IACf,UAAU;EACZ;EACA;IACE,yBAAyB;IACzB,6BAA6B;;EAE/B;EACA;IACE,yBAAyB;IACzB,0BAA0B;;;EAG5B;;EAEA,qBAAqB;EACrB;IACE,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,WAAW;IACX,WAAW;;EAEb;EACA;IACE,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,WAAW;IACX,eAAe;IACf,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,eAAe;;EAEjB;EACA;IACE,mBAAmB;;EAErB;EACA;IACE,UAAU;EACZ;EACA;IACE,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,mCAAmC;IACnC,4DAA6C;IAC7C,oDAAqC;IACrC,8BAA8B;IAC9B,sBAAsB;IACtB,eAAe;EACjB;;;;AAIF;AACA;;EAEE;IACE,aAAa;IACb,SAAS;EACX;EACA;IACE,UAAU;IACV,SAAS;EACX;EACA;IACE,UAAU;IACV,WAAW;EACb;AACF;AACA;EACE;IACE,aAAa;IACb,cAAc;;EAEhB;AACF","sourcesContent":["@media screen and (min-width: 0px) {\r\n  .title{\r\n    margin-bottom: 1.5vh;\r\n    border-bottom: 1px solid white;\r\n  }\r\n  .todo-panel{\r\n    position: relative;\r\n    padding: 1em;\r\n    border-radius: 10px;\r\n    min-height: 45vh;\r\n    max-height: 60vh;\r\n    width: 35vh;\r\n    background-color: #258d81;\r\n    color: white;\r\n    overflow: auto;\r\n    \r\n  }\r\n/* Make tasks scrollable */\r\n  .tasks{\r\n    max-height: 40vh;\r\n    overflow: auto;\r\n    margin-bottom: 3vh;\r\n  }\r\n\r\n  \r\n  \r\n  .task{\r\n    padding: .8vh;\r\n    grid-template-columns: 2vh 1fr 2vh;\r\n  }\r\n  .TaskItemCheckbox{\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: none;\r\n    color: #e9c46a;\r\n    background-color: #e9c46a;\r\n    -webkit-mask-image: url(../imgs/uncheck.svg) ;\r\n    mask-image: url(../imgs/uncheck.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    width: 2vh;\r\n    height: 2vh;\r\n    cursor: pointer;\r\n    \r\n  }\r\n  .TaskItemDelete{\r\n    background: transparent;\r\n    border: none;\r\n    text-align: center;\r\n    place-self: center;\r\n    width: 2vh;\r\n    height: 2vh;\r\n    /* Change Icon color */\r\n    background-color: #800020;\r\n    -webkit-mask-image: url(../imgs/minusDelete.svg) ;\r\n    mask-image: url(../imgs/minusDelete.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    cursor: pointer;\r\n  }\r\n  .task[aria-disabled=\"true\"] .TaskItemCheckbox {\r\n    /* Change Icon color */\r\n    background-color: #a0a0a0;\r\n    -webkit-mask-image: url(../imgs/check.svg) ;\r\n    mask-image: url(../imgs/check.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;  \r\n      \r\n\r\n  }\r\n  .task[aria-disabled=\"true\"] .task-category {\r\n    display: none;\r\n  }\r\n  .task-title{\r\n    cursor: pointer;\r\n    z-index: 2;\r\n  }\r\n  .task[aria-disabled=\"true\"]{\r\n    color: rgb(104, 104, 104);\r\n    text-decoration: line-through;\r\n    \r\n  }\r\n  .task-category{\r\n    color: rgb(104, 104, 104);\r\n    text-transform: capitalize;\r\n    \r\n\r\n  }\r\n  \r\n  /* INPUT TASK FIELD */\r\n  .add-task-container{\r\n    position: absolute;\r\n    display: flex;\r\n    gap: .5vh;\r\n    border-radius: 10px;\r\n    align-items: center;\r\n    bottom: .3vh;\r\n    left: 3vh;\r\n    width: 30vh;\r\n    height: 5vh;\r\n    \r\n  }\r\n  #add-task-text{\r\n    width: 25vh;\r\n  }\r\n  .add-task-container > label{\r\n    display: block;\r\n    position: absolute;\r\n    top: .7em;\r\n    left: 2vh;\r\n    opacity: .4;\r\n    font-size: 12px;\r\n    color: black;\r\n  }\r\n  \r\n  .add-task-container > input{\r\n    padding-left: 1em;\r\n    outline: none;\r\n    border: none;\r\n    display:block;\r\n    line-height: 1.5em;\r\n    height: 2.2em;\r\n    font-size: .8em;\r\n    \r\n  }\r\n  #add-task-text {\r\n    border-radius: 10px;\r\n    \r\n  }\r\n  #add-task-text:focus + .add-task-label {\r\n    opacity: 0;\r\n  }\r\n  .add-task-btn{\r\n    background: transparent;\r\n    border: none;\r\n    width: 5vh;\r\n    height: 5vh;\r\n    color: #e9c46a;\r\n    /* Change Icon color */\r\n    background-color: rgb(216, 183, 99);\r\n    -webkit-mask-image: url(../imgs/arrowUp.svg) ;\r\n    mask-image: url(../imgs/arrowUp.svg) ;\r\n    -webkit-mask-repeat: no-repeat;\r\n    mask-repeat: no-repeat;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n}\r\n@media screen and (min-width: 500px) {\r\n\r\n  .add-task-container{\r\n    bottom: .05em;\r\n    left: 3vh;\r\n  }\r\n  .add-task-container > label{\r\n    top: 1.6vh;\r\n    left: 2vh;\r\n  }\r\n  .add-task-btn{\r\n    width: 3vh;\r\n    height: 3vh;\r\n  }\r\n}\r\n@media screen and (min-width: 800px) {\r\n  .add-task-container > input{\r\n    height: 1.8em;\r\n    font-size: 1em;\r\n    \r\n  }\r\n}"],"sourceRoot":""}]);
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/todoPanel.css":
/*!**********************************!*\
  !*** ./src/styles/todoPanel.css ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./todoPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todoPanel.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todoPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todoPanel.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_todoPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



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
  
  static getSingleTask = (taskTitle) => {
    let tasks = this.getTasks();
    let task;
    tasks.forEach((singleTask) => {
      if(singleTask.title == taskTitle){

        task = singleTask
      };
    })
    return task;
  }

  static saveTask (tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  static addTaskToLS(task){
    let tasks = store.getTasks();
    tasks.push(task);
    this.saveTask(tasks);
  }
  // Add Date
  static addDate(taskTitle, date){
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].dueDate = date; 
    this.saveTask(tasks);
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
        this.saveTask(tasks)
      });
    }
  }
  // Change done state on LS
  static changeDoneState(e){
    if (e.target.classList.contains('TaskItemCheckbox')){
        // get title
        let title = e.target.nextElementSibling.firstElementChild.innerHTML;

        let tasks = store.getTasks();
      /*Get index by the task title pressed. 
      So that we change the state of only that task*/ 
        let taskIndex = tasks.findIndex((task) => task.title == title )
        if (tasks[taskIndex].done){
          tasks[taskIndex].done = false;
          console.log('chang', tasks[taskIndex].done)
        }else{
          tasks[taskIndex].done = true;
        }
        this.saveTask(tasks);
  
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
  
    this.saveTask(tasks);
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
 // save on changes 
  static SaveNotes(taskTitle, htmlValue) {
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].notes = htmlValue; 
    this.saveTask(tasks);
  }

}



/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StoreTask/store */ "./src/StoreTask/store.js");


class Task {
  constructor(title, category, dateCreated){
    this.title = title;
    this.category = category;
    this.done = false;
    this.dueDate = null;
    this.dateCreated = dateCreated;
    this.notes = undefined;
    // add date created, storing the date the task is created. 
  }
  // Add Task TO Panel
  static addTaskPanel (task) {
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    
    // Display task done or undone
    if (task.done) {
      taskDiv.setAttribute('aria-disabled', true)
    }else{
      taskDiv.setAttribute('aria-disabled', false)
    }
    taskDiv.innerHTML = `
    <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
    <div class="task-content">
      <p class="task-title">${task.title}</p>
      <p class="task-category">${task.category}</p>
    </div>
    <button class="TaskItemDelete"></button>
    `;
    
    taskPanel.appendChild(taskDiv);
    
  }
  

  // Take input
  static takeInputEvent (category) {
    // Funtion to take input on enter key pressed or click
    const takeInput = (category) => {
      const title = document.querySelector('#add-task-text').value;
      if(title.length > 0){
        // get Today's date 
        const date = new Date();
        let newTask = new Task(title, category, date);
        // add task to DOM
        Task.addTaskPanel(newTask);
        // Store task on Local storage
        _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.addTaskToLS(newTask);
      }else{
        alert("Please enter at least one character")
      }
      Task.clearInputField('#add-task-text');
    }
    const taskContainer = document.querySelector('.add-task-container');
    const addBtn = document.querySelector('.add-task-btn');
    // ENTER KEY
    taskContainer.addEventListener('keypress', (e) => {
      if(e.key === 'Enter'){
        takeInput(category)
      }
    })
    // mouseup unlike click does not interact with the enter key
    addBtn.addEventListener('mouseup', () =>{
      takeInput(category);
    })
    // mobile handler
    // addBtn.addEventListener('touchend', () =>{
    //   takeInput(category);
    // })
  }

  // Clear Input fields
  static clearInputField(element) {
    document.querySelector(element).value = '';
  }
  
  // Change task dones status on screen
  static taskDone(e) {
    if (e.target.classList.contains('TaskItemCheckbox')){
      const task = e.target.parentElement;
    
      let title = e.target.nextElementSibling.firstElementChild.innerHTML;
      const tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
      /*Get index by the task title pressed. 
      So that we change the state of only that task*/ 
      let taskIndex = tasks.findIndex((task) => task.title == title )
      if (tasks[taskIndex].done){
        task.setAttribute('aria-disabled', false);
        
      }else{
        task.setAttribute('aria-disabled', true);
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
      if(task.category == category) {
        Task.addTaskPanel(task);
      }
    })
  }
  
}



/***/ }),

/***/ "./src/modules/addToDo.js":
/*!********************************!*\
  !*** ./src/modules/addToDo.js ***!
  \********************************/
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

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _addToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToDo */ "./src/modules/addToDo.js");
/* harmony import */ var _sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideBar */ "./src/modules/sideBar.js");





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
            <p class="category--title">All Tasks</p>
            
          </div> 
        </li>
        <li class="category">
          <div>
            <p class="category--title">Work</p>
            
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
    hero.appendChild((0,_addToDo__WEBPACK_IMPORTED_MODULE_1__["default"])('All Tasks'));
    // Desc Panel, Just for styling

    // Display categories on side panel.
    _sideBar__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories()
    return hero;
  }

  static clearHero () {
    const todoPanel = document.querySelector('.todo-panel');
    todoPanel.textContent = '';
  }
  static clearDescPanel(){
    const descPanel = document.querySelector('.taskDescPanel');
    descPanel.remove();
  }

  // wrap all elements when popup is clicked, so the pop up isnt wrapped. 
  static blurElements(){
    document.querySelector('main').classList.add('blur-document');
    // console.log(main);
  }
  static deBlurElements(){
    document.querySelector('main').classList.remove('blur-document');
  }
}






/***/ }),

/***/ "./src/modules/sideBar.js":
/*!********************************!*\
  !*** ./src/modules/sideBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sideBar)
/* harmony export */ });
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StoreTask/store */ "./src/StoreTask/store.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/modules/addTask.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
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
    <div class="btns-popUp">
      <button class="cancel-project-btn">Cancel</button>
      <button class="add-project-btn">Add</button>
    </div>
    `
    return addProjectPopUp;
  }
  static showAddCategoryPanel(e) {
    const addProjectPopUp = document.querySelector('.add-project-popUp');
    if(e.target.id == 'add-categories'){
      _home__WEBPACK_IMPORTED_MODULE_2__.home.blurElements();

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
      _home__WEBPACK_IMPORTED_MODULE_2__.home.deBlurElements();
    })
  }

  //Add Category when pop Up <<add>> btn is pressed
  static addNewCategoryBtn () {

    const addProjectPopUp = document.querySelector('.add-project-popUp');
    const takeInput = () =>{
      let title = document.querySelector('#add-project-text').value;
      title = title.toLowerCase();
  
      if(title.length < 1){
        alert('Please enter at least one character')
      }else{
        sideBar.addCategory(title);
        // Local Storage
        _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.storeCategory(title);
        _home__WEBPACK_IMPORTED_MODULE_2__.home.deBlurElements();
      }
      
      _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.clearInputField('#add-project-text');
      // Hide BTN
      addProjectPopUp.setAttribute('project-pop-visible', false);
    }

    const addCatBtn = document.querySelector('.add-project-btn');
    addProjectPopUp.addEventListener('keypress', (e)=>{
      if(e.key === 'Enter'){
        takeInput()
      }
    })
    // mouseup unlike click does not interact with the enter key
    addCatBtn.addEventListener('mouseup', ()=>{
      takeInput();
    })
    // mobile handler
    addCatBtn.addEventListener('touchend', ()=>{
      takeInput();
    })
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
    if (category == 'All Tasks'){
      _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.displayTasks();
      _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.takeInputEvent('general')
    }else{
      _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.displayTasksCategorically(category);
    }
    
    _addTask__WEBPACK_IMPORTED_MODULE_1__.Task.takeInputEvent(category)
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

/***/ "./src/imgs/check.svg":
/*!****************************!*\
  !*** ./src/imgs/check.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34132d14dfa6bc3dfab4.svg";

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

/***/ }),

/***/ "./src/imgs/uncheck.svg":
/*!******************************!*\
  !*** ./src/imgs/uncheck.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9d42bb4d9163d6e719c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUkseURBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvRUFBc0I7QUFDNUI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvdG9kb1BhbmVsLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/NGI1MSIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlcy90b2RvUGFuZWwuY3NzP2E0MmYiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL1N0b3JlVGFzay9zdG9yZS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL21vZHVsZXMvYWRkVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL21vZHVsZXMvc2lkZUJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvbWludXNEZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9oYW1NZW51LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvY2xvc2VNZW51LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIC0tLS0tLS0tLVxcclxcbnNpZGUgUGFuZWxcXHJcXG4tLS0tLS0tLS0tLS0gKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBweCkge1xcclxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBpbnNldDogMCAyMCUgMCAwO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIHBhZGRpbmc6IG1pbigxMHJlbSwgOHZoKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNTcsIDE0MywgMC45KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLypCTFVSIGJnICAqL1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcclxcbiAgfVxcclxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbltkYXRhLXZpc2libGU9XFxcInRydWVcXFwiXXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gIH1cXHJcXG4gIC5jYXRlZ29yeTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLyogY2F0ZWdvcmllUyBUSVRMRSAqL1xcclxcbiAgLmNhdGVnb3JpZXMtdGl0bGV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAuYWRkLWNhdGVnb3JpZXN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSA7XFxyXFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgO1xcclxcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC8qIFNJTkdMRSBDQVRFR09SWSAqL1xcclxcbiAgLmNhdGVnb3J5LS10aXRsZXtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB9XFxyXFxuICAuY2F0ZWdvcnkgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuZGVsZXRlLWNhdGVnb3J5e1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xcclxcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgO1xcclxcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC8qIFRPR0dMRSAqL1xcclxcbiAgLm1vYmlsZS10b2dnbGV7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAvKiBDaGFuZ2UgSWNvbiBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcclxcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgO1xcclxcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGxlZnQ6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAubW9iaWxlLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl17XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSA7XFxyXFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS1cXHJcXG4gIFBPUCBVUFxcclxcbiAgLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwe1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAtMXB4IDBweCA1cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxyXFxuICAgIG1heC13aWR0aDogMThyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAycmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XFxyXFxuICB9XFxyXFxuICAuYWRkLXByb2plY3QtcG9wVXAgPiBpbnB1dCwgYnV0dG9ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuYWRkLXByb2plY3QtcG9wVXAgPiBpbnB1dHtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICB9XFxyXFxuICAvKiBCdXR0b25zICovXFxyXFxuICAuYnRucy1wb3BVcHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB9XFxyXFxuICAuYnRucy1wb3BVcCA+ICp7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcbiAgLmFkZC1wcm9qZWN0LWJ0bntcXHJcXG4gICAgY29sb3I6IHJnYig0MiwgMTU3LCAxNDMsIDAuOSk7XFxyXFxuICB9XFxyXFxuICAuY2FuY2VsLXByb2plY3QtYnRue1xcclxcbiAgICBjb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjkpO1xcclxcbiAgfVxcclxcbiAgLyogQXR0cmlidXRlIHN3aWN0aCAqL1xcclxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwW3Byb2plY3QtcG9wLXZpc2libGU9XFxcInRydWVcXFwiXXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9ue1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICBpbnNldDogMCA3MCUgMCAwO1xcclxcbiAgICBib3gtc2hhZG93OiAxMXB4IDNweCA1cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5tb2JpbGUtdG9nZ2xle1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxyXFxuICAgIGluc2V0OiAwIDc1JSAwIDA7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xcclxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXHJcXG4gICAgaW5zZXQ6IDAgODAlIDAgMDtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Y0FFYztBQUNkO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHdDQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0EscUJBQXFCO0VBQ3JCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsNERBQTBDO0lBQzFDLG9EQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0Esb0JBQW9CO0VBQ3BCO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsNERBQWlEO0lBQ2pELG9EQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlOztFQUVqQjtFQUNBLFdBQVc7RUFDWDtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE2QztJQUM3QyxvREFBcUM7SUFDckMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTs7O0VBR2pCO0VBQ0E7SUFDRSw0REFBK0M7SUFDL0Msb0RBQXVDO0VBQ3pDOztFQUVBOztvQkFFa0I7RUFDbEI7SUFDRSxhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBLFlBQVk7RUFDWjtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0EscUJBQXFCO0VBQ3JCO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsOENBQThDOztFQUVoRDtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLVxcclxcbnNpZGUgUGFuZWxcXHJcXG4tLS0tLS0tLS0tLS0gKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBweCkge1xcclxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBpbnNldDogMCAyMCUgMCAwO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIHBhZGRpbmc6IG1pbigxMHJlbSwgOHZoKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNTcsIDE0MywgMC45KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLypCTFVSIGJnICAqL1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcclxcbiAgfVxcclxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbltkYXRhLXZpc2libGU9XFxcInRydWVcXFwiXXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gIH1cXHJcXG4gIC5jYXRlZ29yeTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLyogY2F0ZWdvcmllUyBUSVRMRSAqL1xcclxcbiAgLmNhdGVnb3JpZXMtdGl0bGV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAuYWRkLWNhdGVnb3JpZXN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvcGx1cy5zdmcpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvcGx1cy5zdmcpIDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICAvKiBTSU5HTEUgQ0FURUdPUlkgKi9cXHJcXG4gIC5jYXRlZ29yeS0tdGl0bGV7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgfVxcclxcbiAgLmNhdGVnb3J5ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLmRlbGV0ZS1jYXRlZ29yeXtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9taW51c0RlbGV0ZS5zdmcpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvbWludXNEZWxldGUuc3ZnKSA7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAvKiBUT0dHTEUgKi9cXHJcXG4gIC5tb2JpbGUtdG9nZ2xle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9oYW1NZW51LnN2ZykgO1xcclxcbiAgICBtYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9oYW1NZW51LnN2ZykgO1xcclxcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgbGVmdDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5tb2JpbGUtdG9nZ2xlW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXXtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9jbG9zZU1lbnUuc3ZnKSA7XFxyXFxuICAgIG1hc2staW1hZ2U6IHVybCguLi9pbWdzL2Nsb3NlTWVudS5zdmcpIDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIC0tLS0tLS0tLS0tXFxyXFxuICBQT1AgVVBcXHJcXG4gIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gIC5hZGQtcHJvamVjdC1wb3BVcHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcclxcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB6LWluZGV4OiAxMDA1O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyMCUpO1xcclxcbiAgfVxcclxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwID4gaW5wdXQsIGJ1dHRvbntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwID4gaW5wdXR7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgLyogQnV0dG9ucyAqL1xcclxcbiAgLmJ0bnMtcG9wVXB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgfVxcclxcbiAgLmJ0bnMtcG9wVXAgPiAqe1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIC5hZGQtcHJvamVjdC1idG57XFxyXFxuICAgIGNvbG9yOiByZ2IoNDIsIDE1NywgMTQzLCAwLjkpO1xcclxcbiAgfVxcclxcbiAgLmNhbmNlbC1wcm9qZWN0LWJ0bntcXHJcXG4gICAgY29sb3I6IHJnYmEoNDgsIDQ4LCA0OCwgMC45KTtcXHJcXG4gIH1cXHJcXG4gIC8qIEF0dHJpYnV0ZSBzd2ljdGggKi9cXHJcXG4gIC5hZGQtcHJvamVjdC1wb3BVcFtwcm9qZWN0LXBvcC12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gICAgaW5zZXQ6IDAgNzAlIDAgMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMTFweCAzcHggNXB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAubW9iaWxlLXRvZ2dsZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9ue1xcclxcbiAgICBpbnNldDogMCA3NSUgMCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxyXFxuICAgIGluc2V0OiAwIDgwJSAwIDA7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy91bmNoZWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvbWludXNEZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9jaGVjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL2Fycm93VXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XFxyXFxuICAudGl0bGV7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXZoO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICB9XFxyXFxuICAudG9kby1wYW5lbHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQ1dmg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XFxyXFxuICAgIHdpZHRoOiAzNXZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4ZDgxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4vKiBNYWtlIHRhc2tzIHNjcm9sbGFibGUgKi9cXHJcXG4gIC50YXNrc3tcXHJcXG4gICAgbWF4LWhlaWdodDogNDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAudGFza3tcXHJcXG4gICAgcGFkZGluZzogLjh2aDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydmggMWZyIDJ2aDtcXHJcXG4gIH1cXHJcXG4gIC5UYXNrSXRlbUNoZWNrYm94e1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogI2U5YzQ2YTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSA7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgd2lkdGg6IDJ2aDtcXHJcXG4gICAgaGVpZ2h0OiAydmg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuVGFza0l0ZW1EZWxldGV7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMnZoO1xcclxcbiAgICBoZWlnaHQ6IDJ2aDtcXHJcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSA7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIC5UYXNrSXRlbUNoZWNrYm94IHtcXHJcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSA7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxcclxcbiAgICAgIFxcclxcblxcclxcbiAgfVxcclxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIC50YXNrLWNhdGVnb3J5IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC50YXNrLXRpdGxle1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICB9XFxyXFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl17XFxyXFxuICAgIGNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC50YXNrLWNhdGVnb3J5e1xcclxcbiAgICBjb2xvcjogcmdiKDEwNCwgMTA0LCAxMDQpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIElOUFVUIFRBU0sgRklFTEQgKi9cXHJcXG4gIC5hZGQtdGFzay1jb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAuNXZoO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3R0b206IC4zdmg7XFxyXFxuICAgIGxlZnQ6IDN2aDtcXHJcXG4gICAgd2lkdGg6IDMwdmg7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gICNhZGQtdGFzay10ZXh0e1xcclxcbiAgICB3aWR0aDogMjV2aDtcXHJcXG4gIH1cXHJcXG4gIC5hZGQtdGFzay1jb250YWluZXIgPiBsYWJlbHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAuN2VtO1xcclxcbiAgICBsZWZ0OiAydmg7XFxyXFxuICAgIG9wYWNpdHk6IC40O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lciA+IGlucHV0e1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICAgIGhlaWdodDogMi4yZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhlbTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAjYWRkLXRhc2stdGV4dCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgI2FkZC10YXNrLXRleHQ6Zm9jdXMgKyAuYWRkLXRhc2stbGFiZWwge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgLmFkZC10YXNrLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDV2aDtcXHJcXG4gICAgaGVpZ2h0OiA1dmg7XFxyXFxuICAgIGNvbG9yOiAjZTljNDZhO1xcclxcbiAgICAvKiBDaGFuZ2UgSWNvbiBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxODMsIDk5KTtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSA7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcclxcblxcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXHJcXG4gICAgYm90dG9tOiAuMDVlbTtcXHJcXG4gICAgbGVmdDogM3ZoO1xcclxcbiAgfVxcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lciA+IGxhYmVse1xcclxcbiAgICB0b3A6IDEuNnZoO1xcclxcbiAgICBsZWZ0OiAydmg7XFxyXFxuICB9XFxyXFxuICAuYWRkLXRhc2stYnRue1xcclxcbiAgICB3aWR0aDogM3ZoO1xcclxcbiAgICBoZWlnaHQ6IDN2aDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5hZGQtdGFzay1jb250YWluZXIgPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYzs7RUFFaEI7QUFDRiwwQkFBMEI7RUFDeEI7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7OztFQUlBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw0REFBNkM7SUFDN0Msb0RBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlOztFQUVqQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBaUQ7SUFDakQsb0RBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBMkM7SUFDM0Msb0RBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixzQkFBc0I7OztFQUd4QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCOztFQUUvQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLDBCQUEwQjs7O0VBRzVCOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlOztFQUVqQjtFQUNBO0lBQ0UsbUJBQW1COztFQUVyQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsNERBQTZDO0lBQzdDLG9EQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7Ozs7QUFJRjtBQUNBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjOztFQUVoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcclxcbiAgLnRpdGxle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgfVxcclxcbiAgLnRvZG8tcGFuZWx7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0NXZoO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xcclxcbiAgICB3aWR0aDogMzV2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1OGQ4MTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuLyogTWFrZSB0YXNrcyBzY3JvbGxhYmxlICovXFxyXFxuICAudGFza3N7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLnRhc2t7XFxyXFxuICAgIHBhZGRpbmc6IC44dmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnZoIDFmciAydmg7XFxyXFxuICB9XFxyXFxuICAuVGFza0l0ZW1DaGVja2JveHtcXHJcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlOWM0NmE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxyXFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvdW5jaGVjay5zdmcpIDtcXHJcXG4gICAgbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvdW5jaGVjay5zdmcpIDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB3aWR0aDogMnZoO1xcclxcbiAgICBoZWlnaHQ6IDJ2aDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5UYXNrSXRlbURlbGV0ZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAydmg7XFxyXFxuICAgIGhlaWdodDogMnZoO1xcclxcbiAgICAvKiBDaGFuZ2UgSWNvbiBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xcclxcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9pbWdzL21pbnVzRGVsZXRlLnN2ZykgO1xcclxcbiAgICBtYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9taW51c0RlbGV0ZS5zdmcpIDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLlRhc2tJdGVtQ2hlY2tib3gge1xcclxcbiAgICAvKiBDaGFuZ2UgSWNvbiBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xcclxcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9pbWdzL2NoZWNrLnN2ZykgO1xcclxcbiAgICBtYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9jaGVjay5zdmcpIDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0OyAgXFxyXFxuICAgICAgXFxyXFxuXFxyXFxuICB9XFxyXFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLnRhc2stY2F0ZWdvcnkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnRhc2stdGl0bGV7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gIH1cXHJcXG4gIC50YXNrW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiXXtcXHJcXG4gICAgY29sb3I6IHJnYigxMDQsIDEwNCwgMTA0KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLnRhc2stY2F0ZWdvcnl7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogSU5QVVQgVEFTSyBGSUVMRCAqL1xcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IC41dmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvdHRvbTogLjN2aDtcXHJcXG4gICAgbGVmdDogM3ZoO1xcclxcbiAgICB3aWR0aDogMzB2aDtcXHJcXG4gICAgaGVpZ2h0OiA1dmg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgI2FkZC10YXNrLXRleHR7XFxyXFxuICAgIHdpZHRoOiAyNXZoO1xcclxcbiAgfVxcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lciA+IGxhYmVse1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC43ZW07XFxyXFxuICAgIGxlZnQ6IDJ2aDtcXHJcXG4gICAgb3BhY2l0eTogLjQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gaW5wdXR7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAuOGVtO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gICNhZGQtdGFzay10ZXh0IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAjYWRkLXRhc2stdGV4dDpmb2N1cyArIC5hZGQtdGFzay1sYWJlbCB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAuYWRkLXRhc2stYnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbiAgICBoZWlnaHQ6IDV2aDtcXHJcXG4gICAgY29sb3I6ICNlOWM0NmE7XFxyXFxuICAgIC8qIENoYW5nZSBJY29uIGNvbG9yICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE4MywgOTkpO1xcclxcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9pbWdzL2Fycm93VXAuc3ZnKSA7XFxyXFxuICAgIG1hc2staW1hZ2U6IHVybCguLi9pbWdzL2Fycm93VXAuc3ZnKSA7XFxyXFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcclxcblxcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXHJcXG4gICAgYm90dG9tOiAuMDVlbTtcXHJcXG4gICAgbGVmdDogM3ZoO1xcclxcbiAgfVxcclxcbiAgLmFkZC10YXNrLWNvbnRhaW5lciA+IGxhYmVse1xcclxcbiAgICB0b3A6IDEuNnZoO1xcclxcbiAgICBsZWZ0OiAydmg7XFxyXFxuICB9XFxyXFxuICAuYWRkLXRhc2stYnRue1xcclxcbiAgICB3aWR0aDogM3ZoO1xcclxcbiAgICBoZWlnaHQ6IDN2aDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5hZGQtdGFzay1jb250YWluZXIgPiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9QYW5lbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb1BhbmVsLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb1BhbmVsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLy1DcmVhdGUgVGFzayBBcnJheSB3aXRoIHRoZSB0YXNrIHRhZ3MtLy9cclxuY2xhc3Mgc3RvcmUge1xyXG4gIC8vVEFTS1MvL1xyXG4gIHN0YXRpYyBnZXRUYXNrcyA9ICgpID0+IHtcclxuICAgIGxldCB0YXNrcztcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKXtcclxuICAgICAgdGFza3MgPSBbXTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZ2V0U2luZ2xlVGFzayA9ICh0YXNrVGl0bGUpID0+IHtcclxuICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcclxuICAgIGxldCB0YXNrO1xyXG4gICAgdGFza3MuZm9yRWFjaCgoc2luZ2xlVGFzaykgPT4ge1xyXG4gICAgICBpZihzaW5nbGVUYXNrLnRpdGxlID09IHRhc2tUaXRsZSl7XHJcblxyXG4gICAgICAgIHRhc2sgPSBzaW5nbGVUYXNrXHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2F2ZVRhc2sgKHRhc2tzKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrVG9MUyh0YXNrKXtcclxuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XHJcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XHJcbiAgfVxyXG4gIC8vIEFkZCBEYXRlXHJcbiAgc3RhdGljIGFkZERhdGUodGFza1RpdGxlLCBkYXRlKXtcclxuICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcclxuICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGFza1RpdGxlKTtcclxuICAgIHRhc2tzW3Rhc2tJbmRleF0uZHVlRGF0ZSA9IGRhdGU7IFxyXG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XHJcbiAgfVxyXG4gIC8vIHJlbW92ZSBUYXNrXHJcbiAgc3RhdGljIExTcmVtb3ZlVGFzayhlKXtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1EZWxldGUnKSl7XHJcbiAgICAgIC8vIGdldCB0aXRsZVxyXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcclxuICAgICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcclxuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZih0YXNrLnRpdGxlID09IHRpdGxlKXtcclxuICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBDaGFuZ2UgZG9uZSBzdGF0ZSBvbiBMU1xyXG4gIHN0YXRpYyBjaGFuZ2VEb25lU3RhdGUoZSl7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbUNoZWNrYm94Jykpe1xyXG4gICAgICAgIC8vIGdldCB0aXRsZVxyXG4gICAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XHJcbiAgICAgIC8qR2V0IGluZGV4IGJ5IHRoZSB0YXNrIHRpdGxlIHByZXNzZWQuIFxyXG4gICAgICBTbyB0aGF0IHdlIGNoYW5nZSB0aGUgc3RhdGUgb2Ygb25seSB0aGF0IHRhc2sqLyBcclxuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRpdGxlIClcclxuICAgICAgICBpZiAodGFza3NbdGFza0luZGV4XS5kb25lKXtcclxuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nJywgdGFza3NbdGFza0luZGV4XS5kb25lKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XHJcbiAgXHJcbiAgICAgICAgfTtcclxuICB9XHJcblxyXG5cclxuICAvL0NBVEVHT1JJRVMgIFxyXG4gIHN0YXRpYyBzdG9yZUNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcclxuICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcclxuICB9XHJcbiAgLy8gR2V0IGNhdGVnb3JpZXNcclxuICBzdGF0aWMgZ2V0Q2F0ZWdvcmllcygpe1xyXG4gICAgbGV0IGNhdGVnb3JpZXM7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpID09PSBudWxsKXtcclxuICAgICAgY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICB9XHJcblxyXG4gIC8vIERlbGV0ZSBUYXNrIGlmIHRhc2sgY2F0ZWdvcnkgPT0gY2F0ZWdvcnlcclxuICBzdGF0aWMgZGVsZXRlVGFza3NGcm9tQ2F0ZWdvcnkodGFza3MsIGNhdGVnb3J5KXtcclxuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWcgIT09IGNhdGVnb3J5KVxyXG4gIFxyXG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgTFNkZWxldGVDYXRlZ29yeShlKXtcclxuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xyXG4gICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCk9PntcclxuICAgICAgaWYoY2F0ZWdvcnkgPT0gIHRpdGxlKXtcclxuICAgICAgICBjYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XHJcbiAgICAgIHN0b3JlLmRlbGV0ZVRhc2tzRnJvbUNhdGVnb3J5KHRhc2tzLCB0aXRsZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuIC8vIHNhdmUgb24gY2hhbmdlcyBcclxuICBzdGF0aWMgU2F2ZU5vdGVzKHRhc2tUaXRsZSwgaHRtbFZhbHVlKSB7XHJcbiAgICBsZXQgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XHJcbiAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRhc2tUaXRsZSk7XHJcbiAgICB0YXNrc1t0YXNrSW5kZXhdLm5vdGVzID0gaHRtbFZhbHVlOyBcclxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHN0b3JlIH07IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVUYXNrL3N0b3JlXCI7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgY2F0ZWdvcnksIGRhdGVDcmVhdGVkKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gbnVsbDtcclxuICAgIHRoaXMuZGF0ZUNyZWF0ZWQgPSBkYXRlQ3JlYXRlZDtcclxuICAgIHRoaXMubm90ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyBhZGQgZGF0ZSBjcmVhdGVkLCBzdG9yaW5nIHRoZSBkYXRlIHRoZSB0YXNrIGlzIGNyZWF0ZWQuIFxyXG4gIH1cclxuICAvLyBBZGQgVGFzayBUTyBQYW5lbFxyXG4gIHN0YXRpYyBhZGRUYXNrUGFuZWwgKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycsICdncmlkJyk7XHJcbiAgICBcclxuICAgIC8vIERpc3BsYXkgdGFzayBkb25lIG9yIHVuZG9uZVxyXG4gICAgaWYgKHRhc2suZG9uZSkge1xyXG4gICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgIH1cclxuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwicmFkaW9cIiByb2xlPVwiY2hlY2tib3hcIiBhcmlhLWNoZWNrZWQ9XCJmYWxzZVwiIGNsYXNzPVwiVGFza0l0ZW1DaGVja2JveFwiPjwvYnV0dG9uPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxyXG4gICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInRhc2stY2F0ZWdvcnlcIj4ke3Rhc2suY2F0ZWdvcnl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiVGFza0l0ZW1EZWxldGVcIj48L2J1dHRvbj5cclxuICAgIGA7XHJcbiAgICBcclxuICAgIHRhc2tQYW5lbC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLy8gVGFrZSBpbnB1dFxyXG4gIHN0YXRpYyB0YWtlSW5wdXRFdmVudCAoY2F0ZWdvcnkpIHtcclxuICAgIC8vIEZ1bnRpb24gdG8gdGFrZSBpbnB1dCBvbiBlbnRlciBrZXkgcHJlc3NlZCBvciBjbGlja1xyXG4gICAgY29uc3QgdGFrZUlucHV0ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRleHQnKS52YWx1ZTtcclxuICAgICAgaWYodGl0bGUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgLy8gZ2V0IFRvZGF5J3MgZGF0ZSBcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBjYXRlZ29yeSwgZGF0ZSk7XHJcbiAgICAgICAgLy8gYWRkIHRhc2sgdG8gRE9NXHJcbiAgICAgICAgVGFzay5hZGRUYXNrUGFuZWwobmV3VGFzayk7XHJcbiAgICAgICAgLy8gU3RvcmUgdGFzayBvbiBMb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgc3RvcmUuYWRkVGFza1RvTFMobmV3VGFzayk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXJcIilcclxuICAgICAgfVxyXG4gICAgICBUYXNrLmNsZWFySW5wdXRGaWVsZCgnI2FkZC10YXNrLXRleHQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XHJcbiAgICAvLyBFTlRFUiBLRVlcclxuICAgIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgdGFrZUlucHV0KGNhdGVnb3J5KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gbW91c2V1cCB1bmxpa2UgY2xpY2sgZG9lcyBub3QgaW50ZXJhY3Qgd2l0aCB0aGUgZW50ZXIga2V5XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+e1xyXG4gICAgICB0YWtlSW5wdXQoY2F0ZWdvcnkpO1xyXG4gICAgfSlcclxuICAgIC8vIG1vYmlsZSBoYW5kbGVyXHJcbiAgICAvLyBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PntcclxuICAgIC8vICAgdGFrZUlucHV0KGNhdGVnb3J5KTtcclxuICAgIC8vIH0pXHJcbiAgfVxyXG5cclxuICAvLyBDbGVhciBJbnB1dCBmaWVsZHNcclxuICBzdGF0aWMgY2xlYXJJbnB1dEZpZWxkKGVsZW1lbnQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkudmFsdWUgPSAnJztcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2hhbmdlIHRhc2sgZG9uZXMgc3RhdHVzIG9uIHNjcmVlblxyXG4gIHN0YXRpYyB0YXNrRG9uZShlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbUNoZWNrYm94Jykpe1xyXG4gICAgICBjb25zdCB0YXNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIFxyXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xyXG4gICAgICBjb25zdCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XHJcbiAgICAgIC8qR2V0IGluZGV4IGJ5IHRoZSB0YXNrIHRpdGxlIHByZXNzZWQuIFxyXG4gICAgICBTbyB0aGF0IHdlIGNoYW5nZSB0aGUgc3RhdGUgb2Ygb25seSB0aGF0IHRhc2sqLyBcclxuICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXHJcbiAgICAgIGlmICh0YXNrc1t0YXNrSW5kZXhdLmRvbmUpe1xyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRGVsZXRlIFRhc2tcclxuICBzdGF0aWMgZGVsZXRlVGFzayhlKXtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xyXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRGlzcGxheSB0YXNrc1xyXG4gIHN0YXRpYyBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBUYXNrLmFkZFRhc2tQYW5lbCh0YXNrKVxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZGlzcGxheVRhc2tzQ2F0ZWdvcmljYWxseSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcclxuICAgIHRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLmNhdGVnb3J5ID09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgVGFzay5hZGRUYXNrUGFuZWwodGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnR7VGFza307IiwiaW1wb3J0ICcuLi9zdHlsZXMvdG9kb1BhbmVsLmNzcydcclxuY29uc3QgdG9kb1BhbmVsID0gKGZvbGRlcikgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLXBhbmVsJyk7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICA8aDE+JHtmb2xkZXJ9PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XHJcbiAgICAgIDwhLS0gdGFzayAxIC0tPlxyXG4gICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1jb250YWluZXJcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtdGFzay10ZXh0XCIgbmFtZT1cImFkZC10YXNrLXRleHRcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkLXRhc2stbGFiZWxcIiBmb3I9XCJhZGQtdGFzay10ZXh0XCI+QWRkIG5ldyB0YXNrPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10YXNrLWJ0biBidG5cIj48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxuICBcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9QYW5lbDsiLCJcclxuaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnXHJcbmltcG9ydCB0b2RvUGFuZWwgZnJvbSAnLi9hZGRUb0RvJztcclxuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi9zaWRlQmFyJztcclxuXHJcbmNsYXNzIGhvbWUge1xyXG4gIHN0YXRpYyBoZWFkZXIoKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGJ1dHRvbiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBjbGFzcz1cIm1vYmlsZS10b2dnbGVcIiBhcmlhLWNvbnRyb2xzPVwiY2F0ZWdvcmllcy1uYXZpZ2F0aW9uXCI+PC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2lkZS1wYW5lbFwiPiBcclxuICAgIDx1bCBpZD1cImNhdGVnb3JpZXMtbmF2aWdhdGlvblwiIGNsYXNzPVwiY2F0ZWdvcmllcy1uYXZpZ2F0aW9uIGZsZXhcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+Q2F0ZWdvcmllczwvaDI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFkZC1jYXRlZ29yaWVzXCIgaWQ9XCJhZGQtY2F0ZWdvcmllc1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnktLXRpdGxlXCI+QWxsIFRhc2tzPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LS10aXRsZVwiPldvcms8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBoZXJvKCkge1xyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnY29udGFpbmVyLWhlcm8nKTtcclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQodG9kb1BhbmVsKCdBbGwgVGFza3MnKSk7XHJcbiAgICAvLyBEZXNjIFBhbmVsLCBKdXN0IGZvciBzdHlsaW5nXHJcblxyXG4gICAgLy8gRGlzcGxheSBjYXRlZ29yaWVzIG9uIHNpZGUgcGFuZWwuXHJcbiAgICBzaWRlQmFyLmRpc3BsYXlDYXRlZ29yaWVzKClcclxuICAgIHJldHVybiBoZXJvO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsZWFySGVybyAoKSB7XHJcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wYW5lbCcpO1xyXG4gICAgdG9kb1BhbmVsLnRleHRDb250ZW50ID0gJyc7XHJcbiAgfVxyXG4gIHN0YXRpYyBjbGVhckRlc2NQYW5lbCgpe1xyXG4gICAgY29uc3QgZGVzY1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjUGFuZWwnKTtcclxuICAgIGRlc2NQYW5lbC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIC8vIHdyYXAgYWxsIGVsZW1lbnRzIHdoZW4gcG9wdXAgaXMgY2xpY2tlZCwgc28gdGhlIHBvcCB1cCBpc250IHdyYXBwZWQuIFxyXG4gIHN0YXRpYyBibHVyRWxlbWVudHMoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5jbGFzc0xpc3QuYWRkKCdibHVyLWRvY3VtZW50Jyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYWluKTtcclxuICB9XHJcbiAgc3RhdGljIGRlQmx1ckVsZW1lbnRzKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuY2xhc3NMaXN0LnJlbW92ZSgnYmx1ci1kb2N1bWVudCcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtob21lfSIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlVGFzay9zdG9yZVwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vYWRkVGFza1wiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy90b2RvUGFuZWwuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNpZGVCYXIge1xyXG4gIC8vIFRvZ2dsZVxyXG4gIHN0YXRpYyB0b2dnbGUgKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS10b2dnbGUnKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcy1uYXZpZ2F0aW9uJyk7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBjYXRlZ29yaWVzTmF2LmdldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJyk7XHJcbiAgICAgIGlmICh2aXNpYmlsaXR5ID09PSAgJ2ZhbHNlJylcclxuICAgICAge1xyXG4gICAgICAgIC8vIEV4cGFuZCBuYXZcclxuICAgICAgICBjYXRlZ29yaWVzTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgdHJ1ZSk7XHJcbiAgICAgICAgLy8gY2hhbmdlIEhhbS1CdG4gd2hlbiBhcmlhIGlzIGV4cGFuYWRlZFxyXG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuICAgICAgfWVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNhdGVnb3JpZXNOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCBmYWxzZSk7XHJcbiAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIFBPUCBVUCAvL1xyXG4gIC8qXHJcbiAgV2hlbiBJY29uKCspIHRvIGFkZCBjYXRlZ29yeSBpcyBwcmVzc2VkXHJcbiAgICBzaG93IHRoZSBjYXRlZ29yeSBQT1BVUCBwYW5lbFxyXG4gICovIFxyXG4gIHN0YXRpYyBDYXRlZ29yeVBvcFVwUGFuZWwgKCkge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRQcm9qZWN0UG9wVXAuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtcG9wVXAnKTtcclxuICAgIGFkZFByb2plY3RQb3BVcC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtcG9wLXZpc2libGUnLCBmYWxzZSk7XHJcbiAgICBcclxuICAgIC8vIFRoaXMgc2hvdWxkIGJlIG9uIHRoZSBoZWFkZXIgSSB0aGluay4gSSBtZWFuIG9uIHRoZSBtYWluIGJ5IGRlZmF1bHRcclxuICAgIGFkZFByb2plY3RQb3BVcC5pbm5lckhUTUwgPSBgXHJcbiAgICA8bGFiZWwgZm9yPVwiYWRkLXByb2plY3QtdGV4dFwiPlByb2plY3QgbmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZC1wcm9qZWN0LXRleHRcIiBuYW1lPVwiYWRkLXByb2plY3QtdGV4dFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bnMtcG9wVXBcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0LWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXByb2plY3QtYnRuXCI+QWRkPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIHJldHVybiBhZGRQcm9qZWN0UG9wVXA7XHJcbiAgfVxyXG4gIHN0YXRpYyBzaG93QWRkQ2F0ZWdvcnlQYW5lbChlKSB7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wVXAnKTtcclxuICAgIGlmKGUudGFyZ2V0LmlkID09ICdhZGQtY2F0ZWdvcmllcycpe1xyXG4gICAgICBob21lLmJsdXJFbGVtZW50cygpO1xyXG5cclxuICAgICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgc2lkZUJhci5jYW5jZWxQb3BVcEJ0bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY2FuY2VsIEJUTiBvbiBQT1BVUCAodGhpcyBidG4gYWxzbyBtYWtlcyB0aGUgcG9wVVAgZGlzYXBwZWFyLilcclxuICBzdGF0aWMgY2FuY2VsUG9wVXBCdG4gKCl7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wVXAnKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtcHJvamVjdC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIGZhbHNlKTtcclxuICAgICAgaG9tZS5kZUJsdXJFbGVtZW50cygpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vQWRkIENhdGVnb3J5IHdoZW4gcG9wIFVwIDw8YWRkPj4gYnRuIGlzIHByZXNzZWRcclxuICBzdGF0aWMgYWRkTmV3Q2F0ZWdvcnlCdG4gKCkge1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3BVcCcpO1xyXG4gICAgY29uc3QgdGFrZUlucHV0ID0gKCkgPT57XHJcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC10ZXh0JykudmFsdWU7XHJcbiAgICAgIHRpdGxlID0gdGl0bGUudG9Mb3dlckNhc2UoKTtcclxuICBcclxuICAgICAgaWYodGl0bGUubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJylcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc2lkZUJhci5hZGRDYXRlZ29yeSh0aXRsZSk7XHJcbiAgICAgICAgLy8gTG9jYWwgU3RvcmFnZVxyXG4gICAgICAgIHN0b3JlLnN0b3JlQ2F0ZWdvcnkodGl0bGUpO1xyXG4gICAgICAgIGhvbWUuZGVCbHVyRWxlbWVudHMoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgVGFzay5jbGVhcklucHV0RmllbGQoJyNhZGQtcHJvamVjdC10ZXh0Jyk7XHJcbiAgICAgIC8vIEhpZGUgQlROXHJcbiAgICAgIGFkZFByb2plY3RQb3BVcC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtcG9wLXZpc2libGUnLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xyXG4gICAgYWRkUHJvamVjdFBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpPT57XHJcbiAgICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICB0YWtlSW5wdXQoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gbW91c2V1cCB1bmxpa2UgY2xpY2sgZG9lcyBub3QgaW50ZXJhY3Qgd2l0aCB0aGUgZW50ZXIga2V5XHJcbiAgICBhZGRDYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT57XHJcbiAgICAgIHRha2VJbnB1dCgpO1xyXG4gICAgfSlcclxuICAgIC8vIG1vYmlsZSBoYW5kbGVyXHJcbiAgICBhZGRDYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKT0+e1xyXG4gICAgICB0YWtlSW5wdXQoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgQ2F0ZWdvcnkgLy9cclxuICBzdGF0aWMgYWRkQ2F0ZWdvcnkgKGNhdGVnb3J5KSB7XHJcbiAgICBjb25zdCBmb3JtYXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yaWVzLW5hdmlnYXRpb24nKTtcclxuICAgIC8vIENyZWF0ZSBjYXRlZ29yeSB0aXRsZSBQYXJhZ3JhcGggZWxlbWVudC4gXHJcbiAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gYDxwIGNsYXNzPVwiY2F0ZWdvcnktLXRpdGxlXCI+JHtjYXRlZ29yeX08L3A+YDtcclxuICAgIGZvcm1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XHJcblxyXG4gICAgZm9ybWF0VGl0bGUuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgICAgJHtjYXRlZ29yeVRpdGxlfVxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWNhdGVnb3J5XCI+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgLy8gYWRkIHRvIGRvbSBsaXN0XHJcbiAgICBjYXRlZ29yaWVzTGlzdC5hcHBlbmRDaGlsZChmb3JtYXRUaXRsZSk7XHJcbiAgfVxyXG5cclxuICAvLyBEaXNwbGF5IENhdGVnb3JpZXNcclxuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMgKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcclxuICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBzaWRlQmFyLmFkZENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBTd2l0Y2ggYmV0dHdlZW4gY2F0ZWdvcmllcyAvL1xyXG4gIC8vIENyZWF0ZSBuZXcgdG9kbyBQYW5lbCB3aGVuIGEgQ2F0ZWdvcnkgaXMgcHJlc3NlZC4gXHJcbiAgc3RhdGljIGNhdGVnb3J5UHJlc3NlZChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRlZ29yeS0tdGl0bGUnKSl7XHJcbiAgICAgIHNpZGVCYXIubmV3VG9Eb1BhbmVsKGUudGFyZ2V0LmlubmVySFRNTClcclxuICAgIH1cclxuICB9XHJcbiAgLy8gTmV3IHRvZG8gUGFuZWxcclxuICBzdGF0aWMgbmV3VG9Eb1BhbmVsKGNhdGVnb3J5KSB7XHJcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wYW5lbCcpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllc05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzLW5hdmlnYXRpb24nKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtdG9nZ2xlJyk7XHJcbiAgICAvLyBEZWxldGUgcHJldmlvdXMgcGFuZWxcclxuICAgIGhvbWUuY2xlYXJIZXJvKCk7XHJcbiAgICAvLyBIaWRlIHNpZGUgcGFuZWxcclxuICAgIGNhdGVnb3JpZXNOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCBmYWxzZSk7XHJcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG4gICAgLy8gTmV3IHRvZG8gcGFuZWxcclxuICAgIHRvZG9QYW5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgIDxoMT4ke2NhdGVnb3J5fTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrc1wiPlxyXG4gICAgPCEtLSB0YXNrIDEgLS0+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1jb250YWluZXJcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtdGFzay10ZXh0XCIgbmFtZT1cImFkZC10YXNrLXRleHRcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkLXRhc2stbGFiZWxcIiBmb3I9XCJhZGQtdGFzay10ZXh0XCI+QWRkIG5ldyB0YXNrPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10YXNrLWJ0biBidG5cIj5BZGQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgaWYgKGNhdGVnb3J5ID09ICdBbGwgVGFza3MnKXtcclxuICAgICAgVGFzay5kaXNwbGF5VGFza3MoKTtcclxuICAgICAgVGFzay50YWtlSW5wdXRFdmVudCgnZ2VuZXJhbCcpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgVGFzay5kaXNwbGF5VGFza3NDYXRlZ29yaWNhbGx5KGNhdGVnb3J5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgVGFzay50YWtlSW5wdXRFdmVudChjYXRlZ29yeSlcclxuICB9XHJcbiAgICBcclxuICAvLyBEZWxldGUgY2F0ZWdvcmllcy4gXHJcbiAgc3RhdGljIGRlbGV0ZUNhdGVnb3J5KGUpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0blByZXNzZWQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1jYXRlZ29yeScpO1xyXG4gICAgaWYoZGVsZXRlQnRuUHJlc3NlZCl7XHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgc3RvcmUuTFNkZWxldGVDYXRlZ29yeShlKTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=