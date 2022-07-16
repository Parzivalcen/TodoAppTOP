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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* FONT FAMILY */\n/*\n=============== \nGlobal Styles/ Reset\n===============\n*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4 p,\nfigure,\npicture {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\na,\nli {\n  text-decoration: none;\n  list-style: none;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow-x: hidden;\n}\n\n/* imgs easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  \n}\n\n\n/* remove animation for people who turned them off */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01sms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* =========\nutility clases \n=========== */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n  gap: var(--gap, 1rem);\n}\n\n.grid {\n  display: grid;\n  gap: var(--gap, 1rem);\n}\n\n.d-block {\n  display: block;\n}\n\n/* header */\n.logo {\n  margin: clamp(1.5rem, 5vw, 2rem);\n}\n\n.primary-header {\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768px) {\n  .flex {\n    flex-wrap: wrap;\n  }\n}\n\n/* SPACING .flow */\n/* Seclect all the elements of a divider except the first Child */\n/* It is use to make the top and botton line heights and borders the same */\n/* Where is a way to group things, is lower on specificy so we dont overwrite things*/\n.flow>*:where(:not(:first-child)) {\n  margin-top: var(--flow-space, 1rem);\n  /* outline: 1px solid red; */\n}\n\n.container {\n  padding-inline: 0rem;\n  margin-inline: auto;\n  max-width: 1200px;\n}\n\n/* for the visually impaired -Hide Contten- */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n/* -------------\nTODO \n-------------- */\n.container-hero{\n  background-color: #264653;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;;;;CAIC;;AAED;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,SAAS;AACX;;AAEA;;;;;EAKE,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iCAAiC;;EAEjC,2CAA2C;EAC3C,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,sCAAsC;AACtC;;;;EAIE,aAAa;EACb,wBAAwB;EACxB,gBAAgB;;AAElB;;;AAGA,oDAAoD;AACpD;;EAEE;;;IAGE,6CAA6C;IAC7C,qCAAqC;IACrC,+CAA+C;IAC/C,uCAAuC;IACvC,uCAAuC;IACvC,gCAAgC;EAClC;AACF;;AAEA;;aAEa;AACb;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA,WAAW;AACX;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA,kBAAkB;AAClB,iEAAiE;AACjE,2EAA2E;AAC3E,qFAAqF;AACrF;EACE,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA,6CAA6C;AAC7C;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;;gBAEgB;AAChB;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB","sourcesContent":["/* FONT FAMILY */\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap\");\n/*\n=============== \nGlobal Styles/ Reset\n===============\n*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4 p,\nfigure,\npicture {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\na,\nli {\n  text-decoration: none;\n  list-style: none;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow-x: hidden;\n}\n\n/* imgs easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  \n}\n\n\n/* remove animation for people who turned them off */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01sms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* =========\nutility clases \n=========== */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n  gap: var(--gap, 1rem);\n}\n\n.grid {\n  display: grid;\n  gap: var(--gap, 1rem);\n}\n\n.d-block {\n  display: block;\n}\n\n/* header */\n.logo {\n  margin: clamp(1.5rem, 5vw, 2rem);\n}\n\n.primary-header {\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768px) {\n  .flex {\n    flex-wrap: wrap;\n  }\n}\n\n/* SPACING .flow */\n/* Seclect all the elements of a divider except the first Child */\n/* It is use to make the top and botton line heights and borders the same */\n/* Where is a way to group things, is lower on specificy so we dont overwrite things*/\n.flow>*:where(:not(:first-child)) {\n  margin-top: var(--flow-space, 1rem);\n  /* outline: 1px solid red; */\n}\n\n.container {\n  padding-inline: 0rem;\n  margin-inline: auto;\n  max-width: 1200px;\n}\n\n/* for the visually impaired -Hide Contten- */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n/* -------------\nTODO \n-------------- */\n.container-hero{\n  background-color: #264653;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"index": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/addTask */ "./src/UI/addTask.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_todoPanel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/todoPanel.css */ "./src/styles/todoPanel.css");
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StoreTask/store */ "./src/StoreTask/store.js");
/* harmony import */ var _UI_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/home */ "./src/UI/home.js");
/* harmony import */ var _UI_sideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/sideBar */ "./src/UI/sideBar.js");







const body = document.body;
const main = document.createElement('main');
// Append header and side panel 
body.appendChild(_UI_home__WEBPACK_IMPORTED_MODULE_4__.home.header());
// Add new Project/Category
body.appendChild(_UI_sideBar__WEBPACK_IMPORTED_MODULE_5__["default"].CategoryPopUpPanel());
// Toggle to show side panel 
_UI_sideBar__WEBPACK_IMPORTED_MODULE_5__["default"].toggle();

body.appendChild(main);

main.appendChild(_UI_home__WEBPACK_IMPORTED_MODULE_4__.home.hero());

document.addEventListener('DOMContentLoaded', _UI_addTask__WEBPACK_IMPORTED_MODULE_0__.Task.displayTasks());

/*Take the input user input 
  from the text box, this file is located on ./UI/addTask.js*/  
_UI_addTask__WEBPACK_IMPORTED_MODULE_0__.Task.takeInput('daily');
// delete
document.addEventListener('click', (e) => {
  _UI_addTask__WEBPACK_IMPORTED_MODULE_0__.Task.deleteTask(e);
  _UI_addTask__WEBPACK_IMPORTED_MODULE_0__.Task.taskDone(e);
  _StoreTask_store__WEBPACK_IMPORTED_MODULE_3__.store.LSremoveTask(e);
  _StoreTask_store__WEBPACK_IMPORTED_MODULE_3__.store.changeDoneState(e);
  _UI_sideBar__WEBPACK_IMPORTED_MODULE_5__["default"].categoryPressed(e);
  _UI_sideBar__WEBPACK_IMPORTED_MODULE_5__["default"].showAddCategoryPanel(e);
  _UI_sideBar__WEBPACK_IMPORTED_MODULE_5__["default"].addNewCategoryBtn(e);
  _UI_sideBar__WEBPACK_IMPORTED_MODULE_5__["default"].deleteCategory(e);
})
// task done

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixFQUFFLGdFQUFrQjtBQUNwQixFQUFFLG1FQUFxQjtBQUN2QixFQUFFLG1FQUF1QjtBQUN6QixFQUFFLHdFQUE0QjtBQUM5QixFQUFFLHFFQUF5QjtBQUMzQixFQUFFLGtFQUFzQjtBQUN4QixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL2hvbWUuY3NzPzRiNTEiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3M/YTQyZiIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvU3RvcmVUYXNrL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvVUkvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL1VJL2FkZFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9VSS9ob21lLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvVUkvc2lkZUJhci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL21pbnVzRGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvaGFtTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL2Nsb3NlTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAtLS0tLS0tLS1cXG5zaWRlIFBhbmVsXFxuLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowcHgpIHtcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaW5zZXQ6IDAgMjAlIDAgMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBwYWRkaW5nOiBtaW4oMTByZW0sIDh2aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTU3LCAxNDMsIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIC8qQkxVUiBiZyAgKi9cXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB9XFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT1cXFwidHJ1ZVxcXCJde1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbiAgLyogY2F0ZWdvcmllUyBUSVRMRSAqL1xcbiAgLmNhdGVnb3JpZXMtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICB9XFxuICAuYWRkLWNhdGVnb3JpZXN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAvKiBTSU5HTEUgQ0FURUdPUlkgKi9cXG4gIC5jYXRlZ29yeSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG4gIC5kZWxldGUtY2F0ZWdvcnl7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB9XFxuICAvKiBUT0dHTEUgKi9cXG4gIC5tb2JpbGUtdG9nZ2xle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbiAgICBcXG4gIH1cXG4gIC5tb2JpbGUtdG9nZ2xlW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTsgIFxcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwW3Byb2plY3QtcG9wLXZpc2libGU9XFxcImZhbHNlXFxcIl17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuYWRkLXByb2plY3QtcG9wVXBbcHJvamVjdC1wb3AtdmlzaWJsZT1cXFwidHJ1ZVxcXCJde1xcbiAgICBib3gtc2hhZG93OiAtMXB4IDBweCA1cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxuICAgIG1heC13aWR0aDogMThyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB6LWluZGV4OiAxMDAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyMCUpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztjQUVjO0FBQ2Q7RUFDRTtJQUNFLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0NBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0EscUJBQXFCO0VBQ3JCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5REFBdUM7SUFDdkMsYUFBYTtJQUNiLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBLG9CQUFvQjtFQUNwQjtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7RUFDQTs7SUFFRSx5REFBOEM7SUFDOUMsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxlQUFlOztFQUVqQjtFQUNBLFdBQVc7RUFDWDtJQUNFLGNBQWM7SUFDZCx5REFBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTs7O0VBR2pCO0VBQ0E7SUFDRSx5REFBNEM7RUFDOUM7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLVxcbnNpZGUgUGFuZWxcXG4tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBweCkge1xcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBpbnNldDogMCAyMCUgMCAwO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHBhZGRpbmc6IG1pbigxMHJlbSwgOHZoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNTcsIDE0MywgMC45KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXG4gICAgLypCTFVSIGJnICAqL1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIH1cXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxuICAvKiBjYXRlZ29yaWVTIFRJVExFICovXFxuICAuY2F0ZWdvcmllcy10aXRsZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gIH1cXG4gIC5hZGQtY2F0ZWdvcmllc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZ3MvcGx1cy5zdmcpO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLyogU0lOR0xFIENBVEVHT1JZICovXFxuICAuY2F0ZWdvcnkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuICAuZGVsZXRlLWNhdGVnb3J5e1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZ3MvbWludXNEZWxldGUuc3ZnKTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgfVxcbiAgLyogVE9HR0xFICovXFxuICAubW9iaWxlLXRvZ2dsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWdzL2hhbU1lbnUuc3ZnKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbiAgICBcXG4gIH1cXG4gIC5tb2JpbGUtdG9nZ2xlW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZ3MvY2xvc2VNZW51LnN2Zyk7ICBcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1wb3BVcFtwcm9qZWN0LXBvcC12aXNpYmxlPVxcXCJmYWxzZVxcXCJde1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwW3Byb2plY3QtcG9wLXZpc2libGU9XFxcInRydWVcXFwiXXtcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgei1pbmRleDogMTAwMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzUwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRk9OVCBGQU1JTFkgKi9cXG4vKlxcbj09PT09PT09PT09PT09PSBcXG5HbG9iYWwgU3R5bGVzLyBSZXNldFxcbj09PT09PT09PT09PT09PVxcbiovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQgcCxcXG5maWd1cmUsXFxucGljdHVyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYSxcXG5saSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogLXdlYmtpdC1taW4tY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogaW1ncyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGZvcm0gZWxlbWVudHMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBcXG59XFxuXFxuXFxuLyogcmVtb3ZlIGFuaW1hdGlvbiBmb3IgcGVvcGxlIHdobyB0dXJuZWQgdGhlbSBvZmYgKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxc21zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiA9PT09PT09PT1cXG51dGlsaXR5IGNsYXNlcyBcXG49PT09PT09PT09PSAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG4ubG9nbyB7XFxuICBtYXJnaW46IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZmxleCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLyogU1BBQ0lORyAuZmxvdyAqL1xcbi8qIFNlY2xlY3QgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGRpdmlkZXIgZXhjZXB0IHRoZSBmaXJzdCBDaGlsZCAqL1xcbi8qIEl0IGlzIHVzZSB0byBtYWtlIHRoZSB0b3AgYW5kIGJvdHRvbiBsaW5lIGhlaWdodHMgYW5kIGJvcmRlcnMgdGhlIHNhbWUgKi9cXG4vKiBXaGVyZSBpcyBhIHdheSB0byBncm91cCB0aGluZ3MsIGlzIGxvd2VyIG9uIHNwZWNpZmljeSBzbyB3ZSBkb250IG92ZXJ3cml0ZSB0aGluZ3MqL1xcbi5mbG93Pio6d2hlcmUoOm5vdCg6Zmlyc3QtY2hpbGQpKSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1mbG93LXNwYWNlLCAxcmVtKTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IDByZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi8qIGZvciB0aGUgdmlzdWFsbHkgaW1wYWlyZWQgLUhpZGUgQ29udHRlbi0gKi9cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLyogYWRkZWQgbGluZSAqL1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tXFxuVE9ETyBcXG4tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXItaGVyb3tcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQ2NTM7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFFaEI7Ozs7Q0FJQzs7QUFFRDs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7RUFPRSxTQUFTO0FBQ1g7O0FBRUE7Ozs7O0VBS0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQ0FBaUM7O0VBRWpDLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBLDZCQUE2QjtBQUM3Qjs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSxzQ0FBc0M7QUFDdEM7Ozs7RUFJRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGdCQUFnQjs7QUFFbEI7OztBQUdBLG9EQUFvRDtBQUNwRDs7RUFFRTs7O0lBR0UsNkNBQTZDO0lBQzdDLHFDQUFxQztJQUNyQywrQ0FBK0M7SUFDL0MsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTs7YUFFYTtBQUNiO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEIsaUVBQWlFO0FBQ2pFLDJFQUEyRTtBQUMzRSxxRkFBcUY7QUFDckY7RUFDRSxtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBOztnQkFFZ0I7QUFDaEI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRk9OVCBGQU1JTFkgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NTAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4vKlxcbj09PT09PT09PT09PT09PSBcXG5HbG9iYWwgU3R5bGVzLyBSZXNldFxcbj09PT09PT09PT09PT09PVxcbiovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQgcCxcXG5maWd1cmUsXFxucGljdHVyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYSxcXG5saSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogLXdlYmtpdC1taW4tY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogaW1ncyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGZvcm0gZWxlbWVudHMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBcXG59XFxuXFxuXFxuLyogcmVtb3ZlIGFuaW1hdGlvbiBmb3IgcGVvcGxlIHdobyB0dXJuZWQgdGhlbSBvZmYgKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxc21zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiA9PT09PT09PT1cXG51dGlsaXR5IGNsYXNlcyBcXG49PT09PT09PT09PSAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IHZhcigtLWdhcCwgMXJlbSk7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG4ubG9nbyB7XFxuICBtYXJnaW46IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZmxleCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLyogU1BBQ0lORyAuZmxvdyAqL1xcbi8qIFNlY2xlY3QgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGRpdmlkZXIgZXhjZXB0IHRoZSBmaXJzdCBDaGlsZCAqL1xcbi8qIEl0IGlzIHVzZSB0byBtYWtlIHRoZSB0b3AgYW5kIGJvdHRvbiBsaW5lIGhlaWdodHMgYW5kIGJvcmRlcnMgdGhlIHNhbWUgKi9cXG4vKiBXaGVyZSBpcyBhIHdheSB0byBncm91cCB0aGluZ3MsIGlzIGxvd2VyIG9uIHNwZWNpZmljeSBzbyB3ZSBkb250IG92ZXJ3cml0ZSB0aGluZ3MqL1xcbi5mbG93Pio6d2hlcmUoOm5vdCg6Zmlyc3QtY2hpbGQpKSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1mbG93LXNwYWNlLCAxcmVtKTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IDByZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi8qIGZvciB0aGUgdmlzdWFsbHkgaW1wYWlyZWQgLUhpZGUgQ29udHRlbi0gKi9cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLyogYWRkZWQgbGluZSAqL1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tXFxuVE9ETyBcXG4tLS0tLS0tLS0tLS0tLSAqL1xcbi5jb250YWluZXItaGVyb3tcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQ2NTM7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9hcnJvd1VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxle1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuICAudG9kby1wYW5lbHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLnRhc2t7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydmggMWZyIDJ2aDtcXG4gIH1cXG4gIC5UYXNrSXRlbUNoZWNrYm94e1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAydmg7XFxuICB9XFxuICAuVGFza0l0ZW1EZWxldGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXZoO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gIH1cXG4gIC50YXNrW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiXSAuVGFza0l0ZW1DaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLnRhc2stdGFnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJde1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIFxcbiAgfVxcbiAgLnRhc2stdGFne1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG4gIFxcbiAgLyogSU5QVVQgVEFTSyBGSUVMRCAqL1xcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS44ZW07XFxuICAgIGxlZnQ6IDJlbTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gaW5wdXR7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRwdDtcXG4gICAgXFxuICB9XFxuICAjYWRkLXRhc2stdGV4dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICAjYWRkLXRhc2stdGV4dDpmb2N1cyArIC5hZGQtdGFzay1sYWJlbCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAuYWRkLXRhc2stYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgfVxcblxcblxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLDZCQUE2Qjs7RUFFL0I7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlOztFQUVqQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5REFBMEM7SUFDMUMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7OztBQUlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxle1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuICAudG9kby1wYW5lbHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgLnRhc2t7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAydmggMWZyIDJ2aDtcXG4gIH1cXG4gIC5UYXNrSXRlbUNoZWNrYm94e1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAydmg7XFxuICB9XFxuICAuVGFza0l0ZW1EZWxldGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXZoO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gIH1cXG4gIC50YXNrW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiXSAuVGFza0l0ZW1DaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLnRhc2stdGFnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJde1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIFxcbiAgfVxcbiAgLnRhc2stdGFne1xcbiAgICBjb2xvcjogZ3JleTtcXG4gIH1cXG4gIFxcbiAgLyogSU5QVVQgVEFTSyBGSUVMRCAqL1xcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS44ZW07XFxuICAgIGxlZnQ6IDJlbTtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gaW5wdXR7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRwdDtcXG4gICAgXFxuICB9XFxuICAjYWRkLXRhc2stdGV4dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICAjYWRkLXRhc2stdGV4dDpmb2N1cyArIC5hZGQtdGFzay1sYWJlbCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAuYWRkLXRhc2stYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWdzL2Fycm93VXAuc3ZnKTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICB9XFxuXFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvUGFuZWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvUGFuZWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vVUkvYWRkVGFza1wiO1xuXG4vLy1DcmVhdGUgVGFzayBBcnJheSB3aXRoIHRoZSB0YXNrIHRhZ3MtLy9cbmNsYXNzIHN0b3JlIHtcbiAgLy9UQVNLUy8vXG4gIHN0YXRpYyBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpe1xuICAgICAgdGFza3MgPSBbXTtcbiAgICB9ZWxzZXtcbiAgICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrVG9MUyh0YXNrKXtcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxuICAvLyByZW1vdmUgVGFza1xuICBzdGF0aWMgTFNyZW1vdmVUYXNrKGUpe1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1EZWxldGUnKSl7XG4gICAgICAvLyBnZXQgdGl0bGVcbiAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKHRhc2sudGl0bGUgPT0gdGl0bGUpe1xuICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIENoYW5nZSBkb25lIHN0YXRlIG9uIExTXG4gIHN0YXRpYyBjaGFuZ2VEb25lU3RhdGUoZSl7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcbiAgICAgICAgLy8gZ2V0IHRpdGxlXG4gICAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZycsIHRpdGxlKVxuICAgICAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRpdGxlIClcbiAgICAgICAgaWYgKHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9PSAndW5kb25lJyl7XG4gICAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gJ2RvbmUnO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZycsIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gJ3VuZG9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXG4gIFxuICAgICAgICB9O1xuICB9XG5cblxuICAvL0NBVEVHT1JJRVMgIFxuICBzdGF0aWMgc3RvcmVDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIGxldCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4gIH1cbiAgLy8gR2V0IGNhdGVnb3JpZXNcbiAgc3RhdGljIGdldENhdGVnb3JpZXMoKXtcbiAgICBsZXQgY2F0ZWdvcmllcztcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpID09PSBudWxsKXtcbiAgICAgIGNhdGVnb3JpZXMgPSBbXTtcbiAgICB9ZWxzZXtcbiAgICAgIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykpXG4gICAgfVxuICAgIHJldHVybiBjYXRlZ29yaWVzO1xuICB9XG5cbiAgLy8gRGVsZXRlIFRhc2sgaWYgdGFzayBjYXRlZ29yeSA9PSBjYXRlZ29yeVxuICBzdGF0aWMgZGVsZXRlVGFza3NGcm9tQ2F0ZWdvcnkodGFza3MsIGNhdGVnb3J5KXtcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFnICE9PSBjYXRlZ29yeSlcbiAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxuXG4gIHN0YXRpYyBMU2RlbGV0ZUNhdGVnb3J5KGUpe1xuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xuICAgIGxldCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCk9PntcbiAgICAgIGlmKGNhdGVnb3J5ID09ICB0aXRsZSl7XG4gICAgICAgIGNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuICAgICAgc3RvcmUuZGVsZXRlVGFza3NGcm9tQ2F0ZWdvcnkodGFza3MsIHRpdGxlKTtcbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IHsgc3RvcmUgfTsiLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZVRhc2svc3RvcmVcIjtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YWcpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmRvbmUgPSAndW5kb25lJztcbiAgICAvLyBhZGQgcHJvcGVydGllcyBsaWtlIGRvbmUgXG4gIH1cbiAgLy8gQWRkIFRhc2sgVE8gUGFuZWxcbiAgc3RhdGljIGFkZFRhc2tQYW5lbCAodGFzaykge1xuICAgIGNvbnN0IHRhc2tQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2dyaWQnKTtcbiAgICBcbiAgICAvLyBEaXNwbGF5IHRhc2sgZG9uZSBvciB1bmRvbmVcbiAgICBpZiAodGFzay5kb25lID09ICd1bmRvbmUnKSB7XG4gICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKVxuICAgIH1lbHNle1xuICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKVxuICAgIH1cbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIHR5cGU9XCJyYWRpb1wiIHJvbGU9XCJjaGVja2JveFwiIGFyaWEtY2hlY2tlZD1cImZhbHNlXCIgY2xhc3M9XCJUYXNrSXRlbUNoZWNrYm94XCI+PC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxuICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ0YXNrLXRhZ1wiPiR7dGFzay50YWd9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJUYXNrSXRlbURlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICBgO1xuICAgIFxuICAgIHRhc2tQYW5lbC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfVxuICBcbiAgLy8gVGFrZSBpbnB1dFxuICBzdGF0aWMgdGFrZUlucHV0ICh0YWcpIHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stdGV4dCcpLnZhbHVlO1xuICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgdGFnKTtcbiAgICAgIC8vIGFkZCB0YXNrIHRvIERPTVxuICAgICAgVGFzay5hZGRUYXNrUGFuZWwobmV3VGFzayk7XG4gICAgICAvLyBTdG9yZSB0YXNrIG9uIExvY2FsIHN0b3JhZ2VcbiAgICAgIHN0b3JlLmFkZFRhc2tUb0xTKG5ld1Rhc2spO1xuICAgIH0pXG4gIH1cbiAgXG4gIC8vVGFzayBEb25lXG4gIHN0YXRpYyB0YXNrRG9uZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcbiAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIFxuICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGl0bGUgKVxuICAgICAgaWYgKHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9PSAndW5kb25lJyl7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgfWVsc2V7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICAgICAgfSBcbiAgICB9XG4gIH1cblxuICAvLyBEZWxldGUgVGFza1xuICBzdGF0aWMgZGVsZXRlVGFzayhlKXtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbURlbGV0ZScpKXtcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzcGxheSB0YXNrc1xuICBzdGF0aWMgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgVGFzay5hZGRUYXNrUGFuZWwodGFzaylcbiAgICAgIFxuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgZGlzcGxheVRhc2tzQ2F0ZWdvcmljYWxseSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBpZih0YXNrLnRhZyA9PSBjYXRlZ29yeSkge1xuICAgICAgICBUYXNrLmFkZFRhc2tQYW5lbCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIFxufVxuXG5leHBvcnR7VGFza307IiwiaW1wb3J0ICcuLi9zdHlsZXMvdG9kb1BhbmVsLmNzcydcbmNvbnN0IHRvZG9QYW5lbCA9IChmb2xkZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLXBhbmVsJyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICA8aDE+JHtmb2xkZXJ9PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFza3NcIj5cbiAgICAgIDwhLS0gdGFzayAxIC0tPlxuICAgICAgXG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZC10YXNrLXRleHRcIiBuYW1lPVwiYWRkLXRhc2stdGV4dFwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiYWRkLXRhc2stbGFiZWxcIiBmb3I9XCJhZGQtdGFzay10ZXh0XCI+QWRkIG5ldyB0YXNrPC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGFzay1idG4gYnRuXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGBcbiAgXG4gIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgZGVmYXVsdCB0b2RvUGFuZWw7IiwiaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnXG5pbXBvcnQgdG9kb1BhbmVsIGZyb20gJy4vYWRkVG9Ebyc7XG5pbXBvcnQgc2lkZUJhciBmcm9tICcuL3NpZGVCYXInO1xuY2xhc3MgaG9tZSB7XG4gIHN0YXRpYyBoZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1oZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgY2xhc3M9XCJtb2JpbGUtdG9nZ2xlXCIgYXJpYS1jb250cm9scz1cImNhdGVnb3JpZXMtbmF2aWdhdGlvblwiPjwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlLXBhbmVsXCI+IFxuICAgIDx1bCBpZD1cImNhdGVnb3JpZXMtbmF2aWdhdGlvblwiIGNsYXNzPVwiY2F0ZWdvcmllcy1uYXZpZ2F0aW9uIGZsZXhcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy10aXRsZVwiPlxuICAgICAgICAgIDxoMj5DYXRlZ29yaWVzPC9oMj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFkZC1jYXRlZ29yaWVzXCIgaWQ9XCJhZGQtY2F0ZWdvcmllc1wiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8bGkgY2xhc3M9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LS10aXRsZVwiPkRhaWx5PC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LS10aXRsZVwiPndvcms8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9XG4gIFxuICBzdGF0aWMgaGVybygpIHtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnY29udGFpbmVyLWhlcm8nKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKHRvZG9QYW5lbCgnRGFpbHkgVGFza3MnKSk7XG4gICAgLy8gRGlzcGxheSBjYXRlZ29yaWVzIG9uIHNpZGUgcGFuZWwuXG4gICAgc2lkZUJhci5kaXNwbGF5Q2F0ZWdvcmllcygpXG4gICAgcmV0dXJuIGhlcm87XG4gIH1cblxuICBzdGF0aWMgY2xlYXJIZXJvICgpIHtcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wYW5lbCcpO1xuICAgIHRvZG9QYW5lbC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG59XG5cblxuXG5cbmV4cG9ydCB7aG9tZX0iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZVRhc2svc3RvcmVcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9hZGRUYXNrXCI7XG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvdG9kb1BhbmVsLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNpZGVCYXIge1xuICAvLyBUb2dnbGVcbiAgc3RhdGljIHRvZ2dsZSAoKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS10b2dnbGUnKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMtbmF2aWdhdGlvbicpO1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBjYXRlZ29yaWVzTmF2LmdldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJyk7XG4gICAgICBpZiAodmlzaWJpbGl0eSA9PT0gICdmYWxzZScpXG4gICAgICB7XG4gICAgICAgIC8vIEV4cGFuZCBuYXZcbiAgICAgICAgY2F0ZWdvcmllc05hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsIHRydWUpO1xuICAgICAgICAvLyBjaGFuZ2UgSGFtLUJ0biB3aGVuIGFyaWEgaXMgZXhwYW5hZGVkXG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1lbHNlXG4gICAgICB7XG4gICAgICAgIGNhdGVnb3JpZXNOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCBmYWxzZSk7XG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIFBPUCBVUCAvL1xuICAvKlxuICBXaGVuIEljb24oKykgdG8gYWRkIGNhdGVnb3J5IGlzIHByZXNzZWRcbiAgICBzaG93IHRoZSBjYXRlZ29yeSBQT1BVUCBwYW5lbFxuICAqLyBcbiAgc3RhdGljIENhdGVnb3J5UG9wVXBQYW5lbCAoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkUHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LXBvcFVwJyk7XG4gICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIGZhbHNlKTtcbiAgICBcbiAgICAvLyBUaGlzIHNob3VsZCBiZSBvbiB0aGUgaGVhZGVyIEkgdGhpbmsuIEkgbWVhbiBvbiB0aGUgbWFpbiBieSBkZWZhdWx0XG4gICAgYWRkUHJvamVjdFBvcFVwLmlubmVySFRNTCA9IGBcbiAgICA8bGFiZWwgZm9yPVwiYWRkLXByb2plY3QtdGV4dFwiPlByb2plY3QgbmFtZTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtcHJvamVjdC10ZXh0XCIgbmFtZT1cImFkZC1wcm9qZWN0LXRleHRcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXByb2plY3QtYnRuXCI+QWRkPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0LWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIGBcbiAgICByZXR1cm4gYWRkUHJvamVjdFBvcFVwO1xuICB9XG4gIHN0YXRpYyBzaG93QWRkQ2F0ZWdvcnlQYW5lbChlKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcFVwJyk7XG4gICAgaWYoZS50YXJnZXQuaWQgPT0gJ2FkZC1jYXRlZ29yaWVzJyl7XG5cbiAgICAgIGFkZFByb2plY3RQb3BVcC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtcG9wLXZpc2libGUnLCB0cnVlKTtcbiAgICAgIFxuICAgICAgc2lkZUJhci5jYW5jZWxQb3BVcEJ0bigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbmNlbCBCVE4gb24gUE9QVVAgKHRoaXMgYnRuIGFsc28gbWFrZXMgdGhlIHBvcFVQIGRpc2FwcGVhci4pXG4gIHN0YXRpYyBjYW5jZWxQb3BVcEJ0biAoKXtcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wVXAnKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QtYnRuJyk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIGZhbHNlKTtcbiAgICB9KVxuICB9XG5cbiAgLy9BZGQgQ2F0ZWdvcnkgUE9QVVAgQnRuXG4gIHN0YXRpYyBhZGROZXdDYXRlZ29yeUJ0biAoZSkge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLXByb2plY3QtYnRuJykpe1xuICAgICAgY29uc3QgYWRkUHJvamVjdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcFVwJyk7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC10ZXh0JykudmFsdWU7XG4gICAgICBcbiAgICAgIHNpZGVCYXIuYWRkQ2F0ZWdvcnkodGl0bGUpO1xuICAgICAgLy8gTG9jYWwgU3RvcmFnZVxuICAgICAgc3RvcmUuc3RvcmVDYXRlZ29yeSh0aXRsZSk7XG4gIFxuICBcbiAgICAgIC8vIEhpZGUgQlROXG4gICAgICBhZGRQcm9qZWN0UG9wVXAuc2V0QXR0cmlidXRlKCdwcm9qZWN0LXBvcC12aXNpYmxlJywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBDYXRlZ29yeSAvL1xuICBzdGF0aWMgYWRkQ2F0ZWdvcnkgKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgZm9ybWF0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3JpZXMtbmF2aWdhdGlvbicpO1xuICAgIC8vIENyZWF0ZSBjYXRlZ29yeSB0aXRsZSBQYXJhZ3JhcGggZWxlbWVudC4gXG4gICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGA8cCBjbGFzcz1cImNhdGVnb3J5LS10aXRsZVwiPiR7Y2F0ZWdvcnl9PC9wPmA7XG4gICAgZm9ybWF0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcblxuICAgIGZvcm1hdFRpdGxlLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2PlxuICAgICAgJHtjYXRlZ29yeVRpdGxlfVxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1jYXRlZ29yeVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PmA7XG4gICAgLy8gYWRkIHRvIGRvbSBsaXN0XG4gICAgY2F0ZWdvcmllc0xpc3QuYXBwZW5kQ2hpbGQoZm9ybWF0VGl0bGUpO1xuICB9XG5cbiAgLy8gRGlzcGxheSBDYXRlZ29yaWVzXG4gIHN0YXRpYyBkaXNwbGF5Q2F0ZWdvcmllcyAoKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcbiAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHNpZGVCYXIuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIH0pXG4gIH1cblxuICAvLyBTd2l0Y2ggYmV0dHdlZW4gY2F0ZWdvcmllcyAvL1xuICAvLyBDcmVhdGUgbmV3IHRvZG8gUGFuZWwgd2hlbiBhIENhdGVnb3J5IGlzIHByZXNzZWQuIFxuICBzdGF0aWMgY2F0ZWdvcnlQcmVzc2VkKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRlZ29yeS0tdGl0bGUnKSl7XG4gICAgICBzaWRlQmFyLm5ld1RvRG9QYW5lbChlLnRhcmdldC5pbm5lckhUTUwpXG4gICAgfVxuICB9XG4gIC8vIE5ldyB0b2RvIFBhbmVsXG4gIHN0YXRpYyBuZXdUb0RvUGFuZWwoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB0b2RvUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wYW5lbCcpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcy1uYXZpZ2F0aW9uJyk7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS10b2dnbGUnKTtcbiAgICAvLyBEZWxldGUgcHJldmlvdXMgcGFuZWxcbiAgICBob21lLmNsZWFySGVybygpO1xuICAgIC8vIEhpZGUgc2lkZSBwYW5lbFxuICAgIGNhdGVnb3JpZXNOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCBmYWxzZSk7XG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAvLyBOZXcgdG9kbyBwYW5lbFxuICAgIHRvZG9QYW5lbC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgPGgxPiR7Y2F0ZWdvcnl9PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFza3NcIj5cbiAgICA8IS0tIHRhc2sgMSAtLT5cblxuICAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtdGFzay10ZXh0XCIgbmFtZT1cImFkZC10YXNrLXRleHRcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImFkZC10YXNrLWxhYmVsXCIgZm9yPVwiYWRkLXRhc2stdGV4dFwiPkFkZCBuZXcgdGFzazwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRhc2stYnRuIGJ0blwiPkFkZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBpZiAoY2F0ZWdvcnkgPT0gJ0RhaWx5Jyl7XG4gICAgICBUYXNrLmRpc3BsYXlUYXNrcygpO1xuICAgIH1lbHNle1xuICAgICAgVGFzay5kaXNwbGF5VGFza3NDYXRlZ29yaWNhbGx5KGNhdGVnb3J5KTtcbiAgICB9XG4gICAgXG4gICAgVGFzay50YWtlSW5wdXQoY2F0ZWdvcnkpXG4gIH1cbiAgICBcbiAgLy8gRGVsZXRlIGNhdGVnb3JpZXMuIFxuICBzdGF0aWMgZGVsZXRlQ2F0ZWdvcnkoZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0blByZXNzZWQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1jYXRlZ29yeScpO1xuICAgIGlmKGRlbGV0ZUJ0blByZXNzZWQpe1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgc3RvcmUuTFNkZWxldGVDYXRlZ29yeShlKTtcbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9VSS9hZGRUYXNrXCI7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy90b2RvUGFuZWwuY3NzJztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vU3RvcmVUYXNrL3N0b3JlXCI7XG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vVUkvaG9tZVwiO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSBcIi4vVUkvc2lkZUJhclwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4vLyBBcHBlbmQgaGVhZGVyIGFuZCBzaWRlIHBhbmVsIFxuYm9keS5hcHBlbmRDaGlsZChob21lLmhlYWRlcigpKTtcbi8vIEFkZCBuZXcgUHJvamVjdC9DYXRlZ29yeVxuYm9keS5hcHBlbmRDaGlsZChzaWRlQmFyLkNhdGVnb3J5UG9wVXBQYW5lbCgpKTtcbi8vIFRvZ2dsZSB0byBzaG93IHNpZGUgcGFuZWwgXG5zaWRlQmFyLnRvZ2dsZSgpO1xuXG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG5tYWluLmFwcGVuZENoaWxkKGhvbWUuaGVybygpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFRhc2suZGlzcGxheVRhc2tzKCkpO1xuXG4vKlRha2UgdGhlIGlucHV0IHVzZXIgaW5wdXQgXG4gIGZyb20gdGhlIHRleHQgYm94LCB0aGlzIGZpbGUgaXMgbG9jYXRlZCBvbiAuL1VJL2FkZFRhc2suanMqLyAgXG5UYXNrLnRha2VJbnB1dCgnZGFpbHknKTtcbi8vIGRlbGV0ZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBUYXNrLmRlbGV0ZVRhc2soZSk7XG4gIFRhc2sudGFza0RvbmUoZSk7XG4gIHN0b3JlLkxTcmVtb3ZlVGFzayhlKTtcbiAgc3RvcmUuY2hhbmdlRG9uZVN0YXRlKGUpO1xuICBzaWRlQmFyLmNhdGVnb3J5UHJlc3NlZChlKTtcbiAgc2lkZUJhci5zaG93QWRkQ2F0ZWdvcnlQYW5lbChlKTtcbiAgc2lkZUJhci5hZGROZXdDYXRlZ29yeUJ0bihlKTtcbiAgc2lkZUJhci5kZWxldGVDYXRlZ29yeShlKTtcbn0pXG4vLyB0YXNrIGRvbmVcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==