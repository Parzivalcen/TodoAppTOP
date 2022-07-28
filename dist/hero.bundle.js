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
___CSS_LOADER_EXPORT___.push([module.id, "/* ---------\nside Panel\n------------ */\n@media screen and (min-width:0px) {\n  .categories-navigation{\n    position: fixed;\n    flex-direction: column;\n    inset: 0 20% 0 0;\n    z-index: 999;\n    padding: min(10rem, 8vh);\n    background-color: rgb(42, 157, 143, 0.9);\n    transform: translateX(-100%);\n    transition: 0.4s ease-in-out;\n    /*BLUR bg  */\n    backdrop-filter: blur(8px);\n    color: white;\n    max-height: 90vh;\n  }\n  .categories-navigation[data-visible=\"true\"]{\n    transform: translateX(0%);\n  }\n  .category:hover{\n    cursor: pointer;\n  }\n  /* categorieS TITLE */\n  .categories-title{\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.5rem;\n  }\n  .add-categories{\n    background-color: #e9c46a;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n  }\n  /* SINGLE CATEGORY */\n  .category--title{\n    text-transform: capitalize;\n  }\n  .category > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n  }\n  .delete-category{\n    width: 1rem;\n    height: 1rem;\n    background-color: #800020;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    border: 0;\n    cursor: pointer;\n\n  }\n  /* TOGGLE */\n  .mobile-toggle{\n    display: block;\n    /* Change Icon color */\n    background-color: #e9c46a;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    position: absolute;\n    width: 2rem;\n    height: 2rem;\n    left: 1rem;\n    margin-top: 1rem;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n    \n    \n  }\n  .mobile-toggle[aria-expanded=\"true\"]{\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\n  }\n\n  /* -----------\n  POP UP\n  ---------------- */\n  .add-project-popUp{\n    display: none;\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\n    background-color: #e9c46a;\n    max-width: 18rem;\n    text-align: center;\n    border-radius: 10px;\n    padding-top: 2rem;\n    padding-inline: 2rem;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1005;\n    transform: translate(-50%, 20%);\n  }\n  .add-project-popUp > input, button{\n    border-radius: 10px;\n    border: none;\n  }\n  .add-project-popUp > input{\n    padding-inline: 1rem;\n  }\n  /* Buttons */\n  .btns-popUp{\n    margin-top: 1rem;\n    display: flex;\n    justify-content: space-around;\n  }\n  .btns-popUp > *{\n    background: transparent;\n  }\n  .add-project-btn{\n    color: rgb(42, 157, 143, 0.9);\n  }\n  .cancel-project-btn{\n    color: rgba(48, 48, 48, 0.9);\n  }\n  /* Attribute swicth */\n  .add-project-popUp[project-pop-visible=\"true\"]{\n    display: block;\n  }\n}\n@media screen and (min-width: 900px) {\n  .categories-navigation{\n    transform: translateX(0%);\n    inset: 0 70% 0 0;\n    box-shadow: 11px 3px 5px -6px rgba(0,0,0,0.75);\n    \n  }\n  .mobile-toggle{\n    display: none;\n  }\n\n}\n@media screen and (min-width: 1200px) {\n  .categories-navigation{\n    inset: 0 75% 0 0;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .categories-navigation{\n    inset: 0 80% 0 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;;cAEc;AACd;EACE;IACE,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;IACxB,wCAAwC;IACxC,4BAA4B;IAC5B,4BAA4B;IAC5B,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,eAAe;EACjB;EACA,qBAAqB;EACrB;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;EACb;EACA;IACE,yBAAyB;IACzB,4DAA0C;IAC1C,oDAAkC;IAClC,8BAA8B;IAC9B,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,SAAS;IACT,aAAa;IACb,eAAe;EACjB;EACA,oBAAoB;EACpB;IACE,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,4DAAiD;IACjD,oDAAyC;IACzC,8BAA8B;IAC9B,sBAAsB;IACtB,SAAS;IACT,eAAe;;EAEjB;EACA,WAAW;EACX;IACE,cAAc;IACd,sBAAsB;IACtB,yBAAyB;IACzB,4DAA6C;IAC7C,oDAAqC;IACrC,8BAA8B;IAC9B,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,eAAe;;;EAGjB;EACA;IACE,4DAA+C;IAC/C,oDAAuC;EACzC;;EAEA;;oBAEkB;EAClB;IACE,aAAa;IACb,gDAAgD;IAChD,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,+BAA+B;EACjC;EACA;IACE,mBAAmB;IACnB,YAAY;EACd;EACA;IACE,oBAAoB;EACtB;EACA,YAAY;EACZ;IACE,gBAAgB;IAChB,aAAa;IACb,6BAA6B;EAC/B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,4BAA4B;EAC9B;EACA,qBAAqB;EACrB;IACE,cAAc;EAChB;AACF;AACA;EACE;IACE,yBAAyB;IACzB,gBAAgB;IAChB,8CAA8C;;EAEhD;EACA;IACE,aAAa;EACf;;AAEF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF","sourcesContent":["/* ---------\nside Panel\n------------ */\n@media screen and (min-width:0px) {\n  .categories-navigation{\n    position: fixed;\n    flex-direction: column;\n    inset: 0 20% 0 0;\n    z-index: 999;\n    padding: min(10rem, 8vh);\n    background-color: rgb(42, 157, 143, 0.9);\n    transform: translateX(-100%);\n    transition: 0.4s ease-in-out;\n    /*BLUR bg  */\n    backdrop-filter: blur(8px);\n    color: white;\n    max-height: 90vh;\n  }\n  .categories-navigation[data-visible=\"true\"]{\n    transform: translateX(0%);\n  }\n  .category:hover{\n    cursor: pointer;\n  }\n  /* categorieS TITLE */\n  .categories-title{\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.5rem;\n  }\n  .add-categories{\n    background-color: #e9c46a;\n    -webkit-mask-image: url(../imgs/plus.svg) ;\n    mask-image: url(../imgs/plus.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    width: 1.5rem;\n    height: 1.5rem;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n  }\n  /* SINGLE CATEGORY */\n  .category--title{\n    text-transform: capitalize;\n  }\n  .category > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n  }\n  .delete-category{\n    width: 1rem;\n    height: 1rem;\n    background-color: #800020;\n    -webkit-mask-image: url(../imgs/minusDelete.svg) ;\n    mask-image: url(../imgs/minusDelete.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    border: 0;\n    cursor: pointer;\n\n  }\n  /* TOGGLE */\n  .mobile-toggle{\n    display: block;\n    /* Change Icon color */\n    background-color: #e9c46a;\n    -webkit-mask-image: url(../imgs/hamMenu.svg) ;\n    mask-image: url(../imgs/hamMenu.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    position: absolute;\n    width: 2rem;\n    height: 2rem;\n    left: 1rem;\n    margin-top: 1rem;\n    border: 0;\n    z-index: 1000;\n    cursor: pointer;\n    \n    \n  }\n  .mobile-toggle[aria-expanded=\"true\"]{\n    -webkit-mask-image: url(../imgs/closeMenu.svg) ;\n    mask-image: url(../imgs/closeMenu.svg) ;\n  }\n\n  /* -----------\n  POP UP\n  ---------------- */\n  .add-project-popUp{\n    display: none;\n    box-shadow: -1px 0px 5px 6px rgba(0, 0, 0, 0.36);\n    background-color: #e9c46a;\n    max-width: 18rem;\n    text-align: center;\n    border-radius: 10px;\n    padding-top: 2rem;\n    padding-inline: 2rem;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1005;\n    transform: translate(-50%, 20%);\n  }\n  .add-project-popUp > input, button{\n    border-radius: 10px;\n    border: none;\n  }\n  .add-project-popUp > input{\n    padding-inline: 1rem;\n  }\n  /* Buttons */\n  .btns-popUp{\n    margin-top: 1rem;\n    display: flex;\n    justify-content: space-around;\n  }\n  .btns-popUp > *{\n    background: transparent;\n  }\n  .add-project-btn{\n    color: rgb(42, 157, 143, 0.9);\n  }\n  .cancel-project-btn{\n    color: rgba(48, 48, 48, 0.9);\n  }\n  /* Attribute swicth */\n  .add-project-popUp[project-pop-visible=\"true\"]{\n    display: block;\n  }\n}\n@media screen and (min-width: 900px) {\n  .categories-navigation{\n    transform: translateX(0%);\n    inset: 0 70% 0 0;\n    box-shadow: 11px 3px 5px -6px rgba(0,0,0,0.75);\n    \n  }\n  .mobile-toggle{\n    display: none;\n  }\n\n}\n@media screen and (min-width: 1200px) {\n  .categories-navigation{\n    inset: 0 75% 0 0;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .categories-navigation{\n    inset: 0 80% 0 0;\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (min-width: 0px) {\n  .title{\n    margin-bottom: 1.5vh;\n    border-bottom: 1px solid white;\n  }\n  .todo-panel{\n    position: relative;\n    padding: 1em;\n    border-radius: 10px;\n    min-height: 45vh;\n    max-height: 60vh;\n    width: 35vh;\n    background-color: #258d81;\n    color: white;\n    overflow: auto;\n    \n  }\n/* Make tasks scrollable */\n  .tasks{\n    max-height: 40vh;\n    overflow: auto;\n  }\n\n  \n  \n  .task{\n    padding: .8vh;\n    grid-template-columns: 2vh 1fr 2vh;\n  }\n  .TaskItemCheckbox{\n    place-self: center;\n    border-radius: 50%;\n    border: none;\n    color: #e9c46a;\n    background-color: #e9c46a;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    width: 2vh;\n    height: 2vh;\n    cursor: pointer;\n    \n  }\n  .TaskItemDelete{\n    background: transparent;\n    border: none;\n    text-align: center;\n    place-self: center;\n    width: 2vh;\n    height: 2vh;\n    /* Change Icon color */\n    background-color: #800020;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    cursor: pointer;\n  }\n  .task[aria-disabled=\"true\"] .TaskItemCheckbox {\n    /* Change Icon color */\n    background-color: #a0a0a0;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;  \n      \n\n  }\n  .task[aria-disabled=\"true\"] .task-category {\n    display: none;\n  }\n  .task-title{\n    cursor: pointer;\n    z-index: 2;\n  }\n  .task[aria-disabled=\"true\"]{\n    color: rgb(104, 104, 104);\n    text-decoration: line-through;\n    \n  }\n  .task-category{\n    color: rgb(104, 104, 104);\n    text-transform: capitalize;\n    \n\n  }\n  \n  /* INPUT TASK FIELD */\n  .add-task-container{\n    position: sticky;\n    display: flex;\n    gap: .5vh;\n    border-radius: 10px;\n    align-items: center;\n    bottom: .1vh;\n    left: .5vh;\n    width: 30vh;\n    height: 5vh;\n\n    \n  }\n  #add-task-text{\n    width: 25vh;\n  }\n  .add-task-container > label{\n    display: block;\n    position: absolute;\n    top: .8em;\n    left: 2vh;\n    opacity: .4;\n    font-size: 12px;\n    color: black;\n  }\n  \n  .add-task-container > input{\n    padding-left: 1em;\n    outline: none;\n    border: none;\n    display:block;\n    line-height: 1.5em;\n    font-size: 14pt;\n    \n  }\n  #add-task-text {\n    border-radius: 10px;\n    \n  }\n  #add-task-text:focus + .add-task-label {\n    opacity: 0;\n  }\n  .add-task-btn{\n    background: transparent;\n    border: none;\n    width: 5vh;\n    height: 5vh;\n    color: #e9c46a;\n    /* Change Icon color */\n    background-color: rgb(216, 183, 99);\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    cursor: pointer;\n  }\n\n\n\n}\n@media screen and (min-width: 500px) {\n\n  .add-task-container{\n    bottom: .05em;\n    left: 2.8vh;\n  }\n  .add-task-container > label{\n    top: 1.6vh;\n    left: 2vh;\n  }\n  .add-task-btn{\n    width: 3vh;\n    height: 3vh;\n  }\n}\n@media screen and (min-width: 800px) {\n\n}", "",{"version":3,"sources":["webpack://./src/styles/todoPanel.css"],"names":[],"mappings":"AAAA;EACE;IACE,oBAAoB;IACpB,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,YAAY;IACZ,cAAc;;EAEhB;AACF,0BAA0B;EACxB;IACE,gBAAgB;IAChB,cAAc;EAChB;;;;EAIA;IACE,aAAa;IACb,kCAAkC;EACpC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,4DAA6C;IAC7C,oDAAqC;IACrC,8BAA8B;IAC9B,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,eAAe;;EAEjB;EACA;IACE,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,yBAAyB;IACzB,4DAAiD;IACjD,oDAAyC;IACzC,8BAA8B;IAC9B,sBAAsB;IACtB,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,yBAAyB;IACzB,4DAA2C;IAC3C,oDAAmC;IACnC,8BAA8B;IAC9B,sBAAsB;;;EAGxB;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;IACf,UAAU;EACZ;EACA;IACE,yBAAyB;IACzB,6BAA6B;;EAE/B;EACA;IACE,yBAAyB;IACzB,0BAA0B;;;EAG5B;;EAEA,qBAAqB;EACrB;IACE,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,WAAW;IACX,WAAW;;;EAGb;EACA;IACE,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,WAAW;IACX,eAAe;IACf,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;;EAEjB;EACA;IACE,mBAAmB;;EAErB;EACA;IACE,UAAU;EACZ;EACA;IACE,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,mCAAmC;IACnC,4DAA6C;IAC7C,oDAAqC;IACrC,8BAA8B;IAC9B,sBAAsB;IACtB,eAAe;EACjB;;;;AAIF;AACA;;EAEE;IACE,aAAa;IACb,WAAW;EACb;EACA;IACE,UAAU;IACV,SAAS;EACX;EACA;IACE,UAAU;IACV,WAAW;EACb;AACF;AACA;;AAEA","sourcesContent":["@media screen and (min-width: 0px) {\n  .title{\n    margin-bottom: 1.5vh;\n    border-bottom: 1px solid white;\n  }\n  .todo-panel{\n    position: relative;\n    padding: 1em;\n    border-radius: 10px;\n    min-height: 45vh;\n    max-height: 60vh;\n    width: 35vh;\n    background-color: #258d81;\n    color: white;\n    overflow: auto;\n    \n  }\n/* Make tasks scrollable */\n  .tasks{\n    max-height: 40vh;\n    overflow: auto;\n  }\n\n  \n  \n  .task{\n    padding: .8vh;\n    grid-template-columns: 2vh 1fr 2vh;\n  }\n  .TaskItemCheckbox{\n    place-self: center;\n    border-radius: 50%;\n    border: none;\n    color: #e9c46a;\n    background-color: #e9c46a;\n    -webkit-mask-image: url(../imgs/uncheck.svg) ;\n    mask-image: url(../imgs/uncheck.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    width: 2vh;\n    height: 2vh;\n    cursor: pointer;\n    \n  }\n  .TaskItemDelete{\n    background: transparent;\n    border: none;\n    text-align: center;\n    place-self: center;\n    width: 2vh;\n    height: 2vh;\n    /* Change Icon color */\n    background-color: #800020;\n    -webkit-mask-image: url(../imgs/minusDelete.svg) ;\n    mask-image: url(../imgs/minusDelete.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    cursor: pointer;\n  }\n  .task[aria-disabled=\"true\"] .TaskItemCheckbox {\n    /* Change Icon color */\n    background-color: #a0a0a0;\n    -webkit-mask-image: url(../imgs/check.svg) ;\n    mask-image: url(../imgs/check.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;  \n      \n\n  }\n  .task[aria-disabled=\"true\"] .task-category {\n    display: none;\n  }\n  .task-title{\n    cursor: pointer;\n    z-index: 2;\n  }\n  .task[aria-disabled=\"true\"]{\n    color: rgb(104, 104, 104);\n    text-decoration: line-through;\n    \n  }\n  .task-category{\n    color: rgb(104, 104, 104);\n    text-transform: capitalize;\n    \n\n  }\n  \n  /* INPUT TASK FIELD */\n  .add-task-container{\n    position: sticky;\n    display: flex;\n    gap: .5vh;\n    border-radius: 10px;\n    align-items: center;\n    bottom: .1vh;\n    left: .5vh;\n    width: 30vh;\n    height: 5vh;\n\n    \n  }\n  #add-task-text{\n    width: 25vh;\n  }\n  .add-task-container > label{\n    display: block;\n    position: absolute;\n    top: .8em;\n    left: 2vh;\n    opacity: .4;\n    font-size: 12px;\n    color: black;\n  }\n  \n  .add-task-container > input{\n    padding-left: 1em;\n    outline: none;\n    border: none;\n    display:block;\n    line-height: 1.5em;\n    font-size: 14pt;\n    \n  }\n  #add-task-text {\n    border-radius: 10px;\n    \n  }\n  #add-task-text:focus + .add-task-label {\n    opacity: 0;\n  }\n  .add-task-btn{\n    background: transparent;\n    border: none;\n    width: 5vh;\n    height: 5vh;\n    color: #e9c46a;\n    /* Change Icon color */\n    background-color: rgb(216, 183, 99);\n    -webkit-mask-image: url(../imgs/arrowUp.svg) ;\n    mask-image: url(../imgs/arrowUp.svg) ;\n    -webkit-mask-repeat: no-repeat;\n    mask-repeat: no-repeat;\n    cursor: pointer;\n  }\n\n\n\n}\n@media screen and (min-width: 500px) {\n\n  .add-task-container{\n    bottom: .05em;\n    left: 2.8vh;\n  }\n  .add-task-container > label{\n    top: 1.6vh;\n    left: 2vh;\n  }\n  .add-task-btn{\n    width: 3vh;\n    height: 3vh;\n  }\n}\n@media screen and (min-width: 800px) {\n\n}"],"sourceRoot":""}]);
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
    console.log('index', taskIndex);
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
    this.notes = 'add notes here';
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
    addBtn.addEventListener('touchend', () =>{
      takeInput(category);
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsaUVBQW1CO0FBQzNCLFFBQVEsc0RBQW1CO0FBQzNCO0FBQ0E7QUFDQSxNQUFNLDBEQUFvQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixpRUFBbUI7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBaUI7QUFDdkIsTUFBTSx5REFBbUI7QUFDekIsS0FBSztBQUNMLE1BQU0sb0VBQThCO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLHlEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0VBQXNCO0FBQzVCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL3RvZG9QYW5lbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvc3R5bGVzL2hvbWUuY3NzPzRiNTEiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvdG9kb1BhbmVsLmNzcz9hNDJmIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9TdG9yZVRhc2svc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9tb2R1bGVzL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9tb2R1bGVzL2FkZFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9tb2R1bGVzL3NpZGVCYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL21pbnVzRGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvaGFtTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL2Nsb3NlTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAtLS0tLS0tLS1cXG5zaWRlIFBhbmVsXFxuLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowcHgpIHtcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaW5zZXQ6IDAgMjAlIDAgMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBwYWRkaW5nOiBtaW4oMTByZW0sIDh2aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTU3LCAxNDMsIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIC8qQkxVUiBiZyAgKi9cXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gIH1cXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxuICAuY2F0ZWdvcnk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC8qIGNhdGVnb3JpZVMgVElUTEUgKi9cXG4gIC5jYXRlZ29yaWVzLXRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgfVxcbiAgLmFkZC1jYXRlZ29yaWVze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAvKiBTSU5HTEUgQ0FURUdPUlkgKi9cXG4gIC5jYXRlZ29yeS0tdGl0bGV7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgfVxcbiAgLmNhdGVnb3J5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmRlbGV0ZS1jYXRlZ29yeXtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB9XFxuICAvKiBUT0dHTEUgKi9cXG4gIC5tb2JpbGUtdG9nZ2xle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgfVxcbiAgLm1vYmlsZS10b2dnbGVbYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCJde1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIDtcXG4gIH1cXG5cXG4gIC8qIC0tLS0tLS0tLS0tXFxuICBQT1AgVVBcXG4gIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC5hZGQtcHJvamVjdC1wb3BVcHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggNXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB6LWluZGV4OiAxMDA1O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyMCUpO1xcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwID4gaW5wdXQsIGJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LXBvcFVwID4gaW5wdXR7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgfVxcbiAgLyogQnV0dG9ucyAqL1xcbiAgLmJ0bnMtcG9wVXB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbiAgLmJ0bnMtcG9wVXAgPiAqe1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1idG57XFxuICAgIGNvbG9yOiByZ2IoNDIsIDE1NywgMTQzLCAwLjkpO1xcbiAgfVxcbiAgLmNhbmNlbC1wcm9qZWN0LWJ0bntcXG4gICAgY29sb3I6IHJnYmEoNDgsIDQ4LCA0OCwgMC45KTtcXG4gIH1cXG4gIC8qIEF0dHJpYnV0ZSBzd2ljdGggKi9cXG4gIC5hZGQtcHJvamVjdC1wb3BVcFtwcm9qZWN0LXBvcC12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgaW5zZXQ6IDAgNzAlIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMTFweCAzcHggNXB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgXFxuICB9XFxuICAubW9iaWxlLXRvZ2dsZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9ue1xcbiAgICBpbnNldDogMCA3NSUgMCAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxuICAgIGluc2V0OiAwIDgwJSAwIDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O2NBRWM7QUFDZDtFQUNFO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLDREQUEwQztJQUMxQyxvREFBa0M7SUFDbEMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztJQUNkLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBLG9CQUFvQjtFQUNwQjtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDREQUFpRDtJQUNqRCxvREFBeUM7SUFDekMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTs7RUFFakI7RUFDQSxXQUFXO0VBQ1g7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBNkM7SUFDN0Msb0RBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7OztFQUdqQjtFQUNBO0lBQ0UsNERBQStDO0lBQy9DLG9EQUF1QztFQUN6Qzs7RUFFQTs7b0JBRWtCO0VBQ2xCO0lBQ0UsYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQSxZQUFZO0VBQ1o7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBLHFCQUFxQjtFQUNyQjtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDhDQUE4Qzs7RUFFaEQ7RUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS1cXG5zaWRlIFBhbmVsXFxuLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowcHgpIHtcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaW5zZXQ6IDAgMjAlIDAgMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBwYWRkaW5nOiBtaW4oMTByZW0sIDh2aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTU3LCAxNDMsIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIC8qQkxVUiBiZyAgKi9cXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gIH1cXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxuICAuY2F0ZWdvcnk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC8qIGNhdGVnb3JpZVMgVElUTEUgKi9cXG4gIC5jYXRlZ29yaWVzLXRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgfVxcbiAgLmFkZC1jYXRlZ29yaWVze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9pbWdzL3BsdXMuc3ZnKSA7XFxuICAgIG1hc2staW1hZ2U6IHVybCguLi9pbWdzL3BsdXMuc3ZnKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLyogU0lOR0xFIENBVEVHT1JZICovXFxuICAuY2F0ZWdvcnktLXRpdGxle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIH1cXG4gIC5jYXRlZ29yeSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5kZWxldGUtY2F0ZWdvcnl7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvbWludXNEZWxldGUuc3ZnKSA7XFxuICAgIG1hc2staW1hZ2U6IHVybCguLi9pbWdzL21pbnVzRGVsZXRlLnN2ZykgO1xcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgfVxcbiAgLyogVE9HR0xFICovXFxuICAubW9iaWxlLXRvZ2dsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC8qIENoYW5nZSBJY29uIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvaGFtTWVudS5zdmcpIDtcXG4gICAgbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvaGFtTWVudS5zdmcpIDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgXFxuICB9XFxuICAubW9iaWxlLXRvZ2dsZVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl17XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvY2xvc2VNZW51LnN2ZykgO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9jbG9zZU1lbnUuc3ZnKSA7XFxuICB9XFxuXFxuICAvKiAtLS0tLS0tLS0tLVxcbiAgUE9QIFVQXFxuICAtLS0tLS0tLS0tLS0tLS0tICovXFxuICAuYWRkLXByb2plY3QtcG9wVXB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgei1pbmRleDogMTAwNTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1wb3BVcCA+IGlucHV0LCBidXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1wb3BVcCA+IGlucHV0e1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIH1cXG4gIC8qIEJ1dHRvbnMgKi9cXG4gIC5idG5zLXBvcFVwe1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG4gIC5idG5zLXBvcFVwID4gKntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAuYWRkLXByb2plY3QtYnRue1xcbiAgICBjb2xvcjogcmdiKDQyLCAxNTcsIDE0MywgMC45KTtcXG4gIH1cXG4gIC5jYW5jZWwtcHJvamVjdC1idG57XFxuICAgIGNvbG9yOiByZ2JhKDQ4LCA0OCwgNDgsIDAuOSk7XFxuICB9XFxuICAvKiBBdHRyaWJ1dGUgc3dpY3RoICovXFxuICAuYWRkLXByb2plY3QtcG9wVXBbcHJvamVjdC1wb3AtdmlzaWJsZT1cXFwidHJ1ZVxcXCJde1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIC5jYXRlZ29yaWVzLW5hdmlnYXRpb257XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIGluc2V0OiAwIDcwJSAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDExcHggM3B4IDVweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIFxcbiAgfVxcbiAgLm1vYmlsZS10b2dnbGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmNhdGVnb3JpZXMtbmF2aWdhdGlvbntcXG4gICAgaW5zZXQ6IDAgNzUlIDAgMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuICAuY2F0ZWdvcmllcy1uYXZpZ2F0aW9ue1xcbiAgICBpbnNldDogMCA4MCUgMCAwO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvdW5jaGVjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL21pbnVzRGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvY2hlY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9hcnJvd1VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgLnRvZG8tcGFuZWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0NXZoO1xcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xcbiAgICB3aWR0aDogMzV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1OGQ4MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgXFxuICB9XFxuLyogTWFrZSB0YXNrcyBzY3JvbGxhYmxlICovXFxuICAudGFza3N7XFxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcblxcbiAgXFxuICBcXG4gIC50YXNre1xcbiAgICBwYWRkaW5nOiAuOHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJ2aCAxZnIgMnZoO1xcbiAgfVxcbiAgLlRhc2tJdGVtQ2hlY2tib3h7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTljNDZhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gIH1cXG4gIC5UYXNrSXRlbURlbGV0ZXtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAydmg7XFxuICAgIGhlaWdodDogMnZoO1xcbiAgICAvKiBDaGFuZ2UgSWNvbiBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLlRhc2tJdGVtQ2hlY2tib3gge1xcbiAgICAvKiBDaGFuZ2UgSWNvbiBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0OyAgXFxuICAgICAgXFxuXFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl0gLnRhc2stY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnRhc2stdGl0bGV7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG4gIC50YXNrW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiXXtcXG4gICAgY29sb3I6IHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIFxcbiAgfVxcbiAgLnRhc2stY2F0ZWdvcnl7XFxuICAgIGNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBcXG5cXG4gIH1cXG4gIFxcbiAgLyogSU5QVVQgVEFTSyBGSUVMRCAqL1xcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAuNXZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3R0b206IC4xdmg7XFxuICAgIGxlZnQ6IC41dmg7XFxuICAgIHdpZHRoOiAzMHZoO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG5cXG4gICAgXFxuICB9XFxuICAjYWRkLXRhc2stdGV4dHtcXG4gICAgd2lkdGg6IDI1dmg7XFxuICB9XFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLjhlbTtcXG4gICAgbGVmdDogMnZoO1xcbiAgICBvcGFjaXR5OiAuNDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1jb250YWluZXIgPiBpbnB1dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICBmb250LXNpemU6IDE0cHQ7XFxuICAgIFxcbiAgfVxcbiAgI2FkZC10YXNrLXRleHQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBcXG4gIH1cXG4gICNhZGQtdGFzay10ZXh0OmZvY3VzICsgLmFkZC10YXNrLWxhYmVsIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIC5hZGQtdGFzay1idG57XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA1dmg7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBjb2xvcjogI2U5YzQ2YTtcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTgzLCA5OSk7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSA7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgO1xcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG5cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG5cXG4gIC5hZGQtdGFzay1jb250YWluZXJ7XFxuICAgIGJvdHRvbTogLjA1ZW07XFxuICAgIGxlZnQ6IDIuOHZoO1xcbiAgfVxcbiAgLmFkZC10YXNrLWNvbnRhaW5lciA+IGxhYmVse1xcbiAgICB0b3A6IDEuNnZoO1xcbiAgICBsZWZ0OiAydmg7XFxuICB9XFxuICAuYWRkLXRhc2stYnRue1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90b2RvUGFuZWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7O0VBRWhCO0FBQ0YsMEJBQTBCO0VBQ3hCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7Ozs7RUFJQTtJQUNFLGFBQWE7SUFDYixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNERBQTZDO0lBQzdDLG9EQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTs7RUFFakI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQWlEO0lBQ2pELG9EQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTJDO0lBQzNDLG9EQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsc0JBQXNCOzs7RUFHeEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2Qjs7RUFFL0I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QiwwQkFBMEI7OztFQUc1Qjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7OztFQUdiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTs7RUFFakI7RUFDQTtJQUNFLG1CQUFtQjs7RUFFckI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLDREQUE2QztJQUM3QyxvREFBcUM7SUFDckMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOzs7O0FBSUY7QUFDQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRjtBQUNBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgLnRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgLnRvZG8tcGFuZWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0NXZoO1xcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xcbiAgICB3aWR0aDogMzV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1OGQ4MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgXFxuICB9XFxuLyogTWFrZSB0YXNrcyBzY3JvbGxhYmxlICovXFxuICAudGFza3N7XFxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcblxcbiAgXFxuICBcXG4gIC50YXNre1xcbiAgICBwYWRkaW5nOiAuOHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJ2aCAxZnIgMnZoO1xcbiAgfVxcbiAgLlRhc2tJdGVtQ2hlY2tib3h7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZTljNDZhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljNDZhO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9pbWdzL3VuY2hlY2suc3ZnKSA7XFxuICAgIG1hc2staW1hZ2U6IHVybCguLi9pbWdzL3VuY2hlY2suc3ZnKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAydmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxuICB9XFxuICAuVGFza0l0ZW1EZWxldGV7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDJ2aDtcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9taW51c0RlbGV0ZS5zdmcpIDtcXG4gICAgbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvbWludXNEZWxldGUuc3ZnKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIC5UYXNrSXRlbUNoZWNrYm94IHtcXG4gICAgLyogQ2hhbmdlIEljb24gY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vaW1ncy9jaGVjay5zdmcpIDtcXG4gICAgbWFzay1pbWFnZTogdXJsKC4uL2ltZ3MvY2hlY2suc3ZnKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxcbiAgICAgIFxcblxcbiAgfVxcbiAgLnRhc2tbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCJdIC50YXNrLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC50YXNrLXRpdGxle1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuICAudGFza1thcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIl17XFxuICAgIGNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBcXG4gIH1cXG4gIC50YXNrLWNhdGVnb3J5e1xcbiAgICBjb2xvcjogcmdiKDEwNCwgMTA0LCAxMDQpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgXFxuXFxuICB9XFxuICBcXG4gIC8qIElOUFVUIFRBU0sgRklFTEQgKi9cXG4gIC5hZGQtdGFzay1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjV2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm90dG9tOiAuMXZoO1xcbiAgICBsZWZ0OiAuNXZoO1xcbiAgICB3aWR0aDogMzB2aDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuXFxuICAgIFxcbiAgfVxcbiAgI2FkZC10YXNrLXRleHR7XFxuICAgIHdpZHRoOiAyNXZoO1xcbiAgfVxcbiAgLmFkZC10YXNrLWNvbnRhaW5lciA+IGxhYmVse1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC44ZW07XFxuICAgIGxlZnQ6IDJ2aDtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gaW5wdXR7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgZm9udC1zaXplOiAxNHB0O1xcbiAgICBcXG4gIH1cXG4gICNhZGQtdGFzay10ZXh0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgXFxuICB9XFxuICAjYWRkLXRhc2stdGV4dDpmb2N1cyArIC5hZGQtdGFzay1sYWJlbCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAuYWRkLXRhc2stYnRue1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNXZoO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgY29sb3I6ICNlOWM0NmE7XFxuICAgIC8qIENoYW5nZSBJY29uIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE4MywgOTkpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi9pbWdzL2Fycm93VXAuc3ZnKSA7XFxuICAgIG1hc2staW1hZ2U6IHVybCguLi9pbWdzL2Fycm93VXAuc3ZnKSA7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcblxcblxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcblxcbiAgLmFkZC10YXNrLWNvbnRhaW5lcntcXG4gICAgYm90dG9tOiAuMDVlbTtcXG4gICAgbGVmdDogMi44dmg7XFxuICB9XFxuICAuYWRkLXRhc2stY29udGFpbmVyID4gbGFiZWx7XFxuICAgIHRvcDogMS42dmg7XFxuICAgIGxlZnQ6IDJ2aDtcXG4gIH1cXG4gIC5hZGQtdGFzay1idG57XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9QYW5lbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb1BhbmVsLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb1BhbmVsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLy1DcmVhdGUgVGFzayBBcnJheSB3aXRoIHRoZSB0YXNrIHRhZ3MtLy9cbmNsYXNzIHN0b3JlIHtcbiAgLy9UQVNLUy8vXG4gIHN0YXRpYyBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpe1xuICAgICAgdGFza3MgPSBbXTtcbiAgICB9ZWxzZXtcbiAgICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuICBcbiAgc3RhdGljIGdldFNpbmdsZVRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xuICAgIGxldCB0YXNrO1xuICAgIHRhc2tzLmZvckVhY2goKHNpbmdsZVRhc2spID0+IHtcbiAgICAgIGlmKHNpbmdsZVRhc2sudGl0bGUgPT0gdGFza1RpdGxlKXtcblxuICAgICAgICB0YXNrID0gc2luZ2xlVGFza1xuICAgICAgfTtcbiAgICB9KVxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgc3RhdGljIHNhdmVUYXNrICh0YXNrcyl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICB9XG5cbiAgc3RhdGljIGFkZFRhc2tUb0xTKHRhc2spe1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcbiAgfVxuICAvLyBBZGQgRGF0ZVxuICBzdGF0aWMgYWRkRGF0ZSh0YXNrVGl0bGUsIGRhdGUpe1xuICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcbiAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRhc2tUaXRsZSk7XG4gICAgdGFza3NbdGFza0luZGV4XS5kdWVEYXRlID0gZGF0ZTsgXG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XG4gIH1cbiAgLy8gcmVtb3ZlIFRhc2tcbiAgc3RhdGljIExTcmVtb3ZlVGFzayhlKXtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xuICAgICAgLy8gZ2V0IHRpdGxlXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZih0YXNrLnRpdGxlID09IHRpdGxlKXtcbiAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hhbmdlIGRvbmUgc3RhdGUgb24gTFNcbiAgc3RhdGljIGNoYW5nZURvbmVTdGF0ZShlKXtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbUNoZWNrYm94Jykpe1xuICAgICAgICAvLyBnZXQgdGl0bGVcbiAgICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcblxuICAgICAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgICAgLypHZXQgaW5kZXggYnkgdGhlIHRhc2sgdGl0bGUgcHJlc3NlZC4gXG4gICAgICBTbyB0aGF0IHdlIGNoYW5nZSB0aGUgc3RhdGUgb2Ygb25seSB0aGF0IHRhc2sqLyBcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXG4gICAgICAgIGlmICh0YXNrc1t0YXNrSW5kZXhdLmRvbmUpe1xuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZycsIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcbiAgXG4gICAgICAgIH07XG4gIH1cblxuXG4gIC8vQ0FURUdPUklFUyAgXG4gIHN0YXRpYyBzdG9yZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbiAgfVxuICAvLyBHZXQgY2F0ZWdvcmllc1xuICBzdGF0aWMgZ2V0Q2F0ZWdvcmllcygpe1xuICAgIGxldCBjYXRlZ29yaWVzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykgPT09IG51bGwpe1xuICAgICAgY2F0ZWdvcmllcyA9IFtdO1xuICAgIH1lbHNle1xuICAgICAgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSlcbiAgICB9XG4gICAgcmV0dXJuIGNhdGVnb3JpZXM7XG4gIH1cblxuICAvLyBEZWxldGUgVGFzayBpZiB0YXNrIGNhdGVnb3J5ID09IGNhdGVnb3J5XG4gIHN0YXRpYyBkZWxldGVUYXNrc0Zyb21DYXRlZ29yeSh0YXNrcywgY2F0ZWdvcnkpe1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWcgIT09IGNhdGVnb3J5KVxuICBcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcbiAgfVxuXG4gIHN0YXRpYyBMU2RlbGV0ZUNhdGVnb3J5KGUpe1xuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xuICAgIGxldCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCk9PntcbiAgICAgIGlmKGNhdGVnb3J5ID09ICB0aXRsZSl7XG4gICAgICAgIGNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuICAgICAgc3RvcmUuZGVsZXRlVGFza3NGcm9tQ2F0ZWdvcnkodGFza3MsIHRpdGxlKTtcbiAgICB9KVxuICB9XG4gLy8gc2F2ZSBvbiBjaGFuZ2VzIFxuICBzdGF0aWMgU2F2ZU5vdGVzKHRhc2tUaXRsZSwgaHRtbFZhbHVlKSB7XG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xuICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGFza1RpdGxlKTtcbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCB0YXNrSW5kZXgpO1xuICAgIHRhc2tzW3Rhc2tJbmRleF0ubm90ZXMgPSBodG1sVmFsdWU7IFxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgc3RvcmUgfTsiLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZVRhc2svc3RvcmVcIjtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjYXRlZ29yeSwgZGF0ZUNyZWF0ZWQpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgdGhpcy5kdWVEYXRlID0gbnVsbDtcbiAgICB0aGlzLmRhdGVDcmVhdGVkID0gZGF0ZUNyZWF0ZWQ7XG4gICAgdGhpcy5ub3RlcyA9ICdhZGQgbm90ZXMgaGVyZSc7XG4gICAgLy8gYWRkIGRhdGUgY3JlYXRlZCwgc3RvcmluZyB0aGUgZGF0ZSB0aGUgdGFzayBpcyBjcmVhdGVkLiBcbiAgfVxuICAvLyBBZGQgVGFzayBUTyBQYW5lbFxuICBzdGF0aWMgYWRkVGFza1BhbmVsICh0YXNrKSB7XG4gICAgY29uc3QgdGFza1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnZ3JpZCcpO1xuICAgIFxuICAgIC8vIERpc3BsYXkgdGFzayBkb25lIG9yIHVuZG9uZVxuICAgIGlmICh0YXNrLmRvbmUpIHtcbiAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSlcbiAgICB9ZWxzZXtcbiAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpXG4gICAgfVxuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gdHlwZT1cInJhZGlvXCIgcm9sZT1cImNoZWNrYm94XCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIiBjbGFzcz1cIlRhc2tJdGVtQ2hlY2tib3hcIj48L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250ZW50XCI+XG4gICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLWNhdGVnb3J5XCI+JHt0YXNrLmNhdGVnb3J5fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiVGFza0l0ZW1EZWxldGVcIj48L2J1dHRvbj5cbiAgICBgO1xuICAgIFxuICAgIHRhc2tQYW5lbC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICBcbiAgfVxuICBcblxuICAvLyBUYWtlIGlucHV0XG4gIHN0YXRpYyB0YWtlSW5wdXRFdmVudCAoY2F0ZWdvcnkpIHtcbiAgICAvLyBGdW50aW9uIHRvIHRha2UgaW5wdXQgb24gZW50ZXIga2V5IHByZXNzZWQgb3IgY2xpY2tcbiAgICBjb25zdCB0YWtlSW5wdXQgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRleHQnKS52YWx1ZTtcbiAgICAgIGlmKHRpdGxlLmxlbmd0aCA+IDApe1xuICAgICAgICAvLyBnZXQgVG9kYXkncyBkYXRlIFxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgY2F0ZWdvcnksIGRhdGUpO1xuICAgICAgICAvLyBhZGQgdGFzayB0byBET01cbiAgICAgICAgVGFzay5hZGRUYXNrUGFuZWwobmV3VGFzayk7XG4gICAgICAgIC8vIFN0b3JlIHRhc2sgb24gTG9jYWwgc3RvcmFnZVxuICAgICAgICBzdG9yZS5hZGRUYXNrVG9MUyhuZXdUYXNrKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyXCIpXG4gICAgICB9XG4gICAgICBUYXNrLmNsZWFySW5wdXRGaWVsZCgnI2FkZC10YXNrLXRleHQnKTtcbiAgICB9XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jb250YWluZXInKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgLy8gRU5URVIgS0VZXG4gICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIHRha2VJbnB1dChjYXRlZ29yeSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIG1vdXNldXAgdW5saWtlIGNsaWNrIGRvZXMgbm90IGludGVyYWN0IHdpdGggdGhlIGVudGVyIGtleVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT57XG4gICAgICB0YWtlSW5wdXQoY2F0ZWdvcnkpO1xuICAgIH0pXG4gICAgLy8gbW9iaWxlIGhhbmRsZXJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PntcbiAgICAgIHRha2VJbnB1dChjYXRlZ29yeSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIENsZWFyIElucHV0IGZpZWxkc1xuICBzdGF0aWMgY2xlYXJJbnB1dEZpZWxkKGVsZW1lbnQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLnZhbHVlID0gJyc7XG4gIH1cbiAgXG4gIC8vIENoYW5nZSB0YXNrIGRvbmVzIHN0YXR1cyBvbiBzY3JlZW5cbiAgc3RhdGljIHRhc2tEb25lKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbUNoZWNrYm94Jykpe1xuICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgY29uc3QgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgICAgLypHZXQgaW5kZXggYnkgdGhlIHRhc2sgdGl0bGUgcHJlc3NlZC4gXG4gICAgICBTbyB0aGF0IHdlIGNoYW5nZSB0aGUgc3RhdGUgb2Ygb25seSB0aGF0IHRhc2sqLyBcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGl0bGUgKVxuICAgICAgaWYgKHRhc2tzW3Rhc2tJbmRleF0uZG9uZSl7XG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgfSBcbiAgICB9XG4gIH1cblxuICAvLyBEZWxldGUgVGFza1xuICBzdGF0aWMgZGVsZXRlVGFzayhlKXtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbURlbGV0ZScpKXtcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzcGxheSB0YXNrc1xuICBzdGF0aWMgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgVGFzay5hZGRUYXNrUGFuZWwodGFzaylcbiAgICAgIFxuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgZGlzcGxheVRhc2tzQ2F0ZWdvcmljYWxseSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBpZih0YXNrLmNhdGVnb3J5ID09IGNhdGVnb3J5KSB7XG4gICAgICAgIFRhc2suYWRkVGFza1BhbmVsKHRhc2spO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG59XG5cbmV4cG9ydHtUYXNrfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy90b2RvUGFuZWwuY3NzJ1xuY29uc3QgdG9kb1BhbmVsID0gKGZvbGRlcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcGFuZWwnKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIDxoMT4ke2ZvbGRlcn08L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrc1wiPlxuICAgICAgPCEtLSB0YXNrIDEgLS0+XG4gICAgICBcblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXRhc2stdGV4dFwiIG5hbWU9XCJhZGQtdGFzay10ZXh0XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJhZGQtdGFzay1sYWJlbFwiIGZvcj1cImFkZC10YXNrLXRleHRcIj5BZGQgbmV3IHRhc2s8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10YXNrLWJ0biBidG5cIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYFxuICBcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCBkZWZhdWx0IHRvZG9QYW5lbDsiLCJcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJ1xuaW1wb3J0IHRvZG9QYW5lbCBmcm9tICcuL2FkZFRvRG8nO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi9zaWRlQmFyJztcblxuY2xhc3MgaG9tZSB7XG4gIHN0YXRpYyBoZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1oZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgY2xhc3M9XCJtb2JpbGUtdG9nZ2xlXCIgYXJpYS1jb250cm9scz1cImNhdGVnb3JpZXMtbmF2aWdhdGlvblwiPjwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlLXBhbmVsXCI+IFxuICAgIDx1bCBpZD1cImNhdGVnb3JpZXMtbmF2aWdhdGlvblwiIGNsYXNzPVwiY2F0ZWdvcmllcy1uYXZpZ2F0aW9uIGZsZXhcIiBkYXRhLXZpc2libGU9XCJmYWxzZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy10aXRsZVwiPlxuICAgICAgICAgIDxoMj5DYXRlZ29yaWVzPC9oMj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFkZC1jYXRlZ29yaWVzXCIgaWQ9XCJhZGQtY2F0ZWdvcmllc1wiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8bGkgY2xhc3M9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LS10aXRsZVwiPkFsbCBUYXNrczwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS0tdGl0bGVcIj5Xb3JrPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuICBcbiAgc3RhdGljIGhlcm8oKSB7XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2NvbnRhaW5lci1oZXJvJyk7XG4gICAgaGVyby5hcHBlbmRDaGlsZCh0b2RvUGFuZWwoJ0FsbCBUYXNrcycpKTtcbiAgICAvLyBEZXNjIFBhbmVsLCBKdXN0IGZvciBzdHlsaW5nXG5cbiAgICAvLyBEaXNwbGF5IGNhdGVnb3JpZXMgb24gc2lkZSBwYW5lbC5cbiAgICBzaWRlQmFyLmRpc3BsYXlDYXRlZ29yaWVzKClcbiAgICByZXR1cm4gaGVybztcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckhlcm8gKCkge1xuICAgIGNvbnN0IHRvZG9QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXBhbmVsJyk7XG4gICAgdG9kb1BhbmVsLnRleHRDb250ZW50ID0gJyc7XG4gIH1cbiAgc3RhdGljIGNsZWFyRGVzY1BhbmVsKCl7XG4gICAgY29uc3QgZGVzY1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjUGFuZWwnKTtcbiAgICBkZXNjUGFuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvLyB3cmFwIGFsbCBlbGVtZW50cyB3aGVuIHBvcHVwIGlzIGNsaWNrZWQsIHNvIHRoZSBwb3AgdXAgaXNudCB3cmFwcGVkLiBcbiAgc3RhdGljIGJsdXJFbGVtZW50cygpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5jbGFzc0xpc3QuYWRkKCdibHVyLWRvY3VtZW50Jyk7XG4gICAgLy8gY29uc29sZS5sb2cobWFpbik7XG4gIH1cbiAgc3RhdGljIGRlQmx1ckVsZW1lbnRzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXItZG9jdW1lbnQnKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQge2hvbWV9IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmVUYXNrL3N0b3JlXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCAnLi4vc3R5bGVzL3RvZG9QYW5lbC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaWRlQmFyIHtcbiAgLy8gVG9nZ2xlXG4gIHN0YXRpYyB0b2dnbGUgKCkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtdG9nZ2xlJyk7XG4gICAgY29uc3QgY2F0ZWdvcmllc05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzLW5hdmlnYXRpb24nKTtcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB2aXNpYmlsaXR5ID0gY2F0ZWdvcmllc05hdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScpO1xuICAgICAgaWYgKHZpc2liaWxpdHkgPT09ICAnZmFsc2UnKVxuICAgICAge1xuICAgICAgICAvLyBFeHBhbmQgbmF2XG4gICAgICAgIGNhdGVnb3JpZXNOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCB0cnVlKTtcbiAgICAgICAgLy8gY2hhbmdlIEhhbS1CdG4gd2hlbiBhcmlhIGlzIGV4cGFuYWRlZFxuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9ZWxzZVxuICAgICAge1xuICAgICAgICBjYXRlZ29yaWVzTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgZmFsc2UpO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBQT1AgVVAgLy9cbiAgLypcbiAgV2hlbiBJY29uKCspIHRvIGFkZCBjYXRlZ29yeSBpcyBwcmVzc2VkXG4gICAgc2hvdyB0aGUgY2F0ZWdvcnkgUE9QVVAgcGFuZWxcbiAgKi8gXG4gIHN0YXRpYyBDYXRlZ29yeVBvcFVwUGFuZWwgKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1wb3BVcCcpO1xuICAgIGFkZFByb2plY3RQb3BVcC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtcG9wLXZpc2libGUnLCBmYWxzZSk7XG4gICAgXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgb24gdGhlIGhlYWRlciBJIHRoaW5rLiBJIG1lYW4gb24gdGhlIG1haW4gYnkgZGVmYXVsdFxuICAgIGFkZFByb2plY3RQb3BVcC5pbm5lckhUTUwgPSBgXG4gICAgPGxhYmVsIGZvcj1cImFkZC1wcm9qZWN0LXRleHRcIj5Qcm9qZWN0IG5hbWU8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXByb2plY3QtdGV4dFwiIG5hbWU9XCJhZGQtcHJvamVjdC10ZXh0XCI+XG4gICAgPGRpdiBjbGFzcz1cImJ0bnMtcG9wVXBcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtcHJvamVjdC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtcHJvamVjdC1idG5cIj5BZGQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgcmV0dXJuIGFkZFByb2plY3RQb3BVcDtcbiAgfVxuICBzdGF0aWMgc2hvd0FkZENhdGVnb3J5UGFuZWwoZSkge1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3BVcCcpO1xuICAgIGlmKGUudGFyZ2V0LmlkID09ICdhZGQtY2F0ZWdvcmllcycpe1xuICAgICAgaG9tZS5ibHVyRWxlbWVudHMoKTtcblxuICAgICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIHRydWUpO1xuICAgICAgXG4gICAgICBzaWRlQmFyLmNhbmNlbFBvcFVwQnRuKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FuY2VsIEJUTiBvbiBQT1BVUCAodGhpcyBidG4gYWxzbyBtYWtlcyB0aGUgcG9wVVAgZGlzYXBwZWFyLilcbiAgc3RhdGljIGNhbmNlbFBvcFVwQnRuICgpe1xuICAgIGNvbnN0IGFkZFByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3BVcCcpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtcHJvamVjdC1idG4nKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0UG9wVXAuc2V0QXR0cmlidXRlKCdwcm9qZWN0LXBvcC12aXNpYmxlJywgZmFsc2UpO1xuICAgICAgaG9tZS5kZUJsdXJFbGVtZW50cygpO1xuICAgIH0pXG4gIH1cblxuICAvL0FkZCBDYXRlZ29yeSB3aGVuIHBvcCBVcCA8PGFkZD4+IGJ0biBpcyBwcmVzc2VkXG4gIHN0YXRpYyBhZGROZXdDYXRlZ29yeUJ0biAoKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wVXAnKTtcbiAgICBjb25zdCB0YWtlSW5wdXQgPSAoKSA9PntcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC10ZXh0JykudmFsdWU7XG4gICAgICB0aXRsZSA9IHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIFxuICAgICAgaWYodGl0bGUubGVuZ3RoIDwgMSl7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgc2lkZUJhci5hZGRDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIC8vIExvY2FsIFN0b3JhZ2VcbiAgICAgICAgc3RvcmUuc3RvcmVDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIGhvbWUuZGVCbHVyRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgVGFzay5jbGVhcklucHV0RmllbGQoJyNhZGQtcHJvamVjdC10ZXh0Jyk7XG4gICAgICAvLyBIaWRlIEJUTlxuICAgICAgYWRkUHJvamVjdFBvcFVwLnNldEF0dHJpYnV0ZSgncHJvamVjdC1wb3AtdmlzaWJsZScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRDYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG4gICAgYWRkUHJvamVjdFBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpPT57XG4gICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIHRha2VJbnB1dCgpXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBtb3VzZXVwIHVubGlrZSBjbGljayBkb2VzIG5vdCBpbnRlcmFjdCB3aXRoIHRoZSBlbnRlciBrZXlcbiAgICBhZGRDYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT57XG4gICAgICB0YWtlSW5wdXQoKTtcbiAgICB9KVxuICAgIC8vIG1vYmlsZSBoYW5kbGVyXG4gICAgYWRkQ2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCk9PntcbiAgICAgIHRha2VJbnB1dCgpO1xuICAgIH0pXG4gIH1cblxuICAvLyBBZGQgQ2F0ZWdvcnkgLy9cbiAgc3RhdGljIGFkZENhdGVnb3J5IChjYXRlZ29yeSkge1xuICAgIGNvbnN0IGZvcm1hdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yaWVzLW5hdmlnYXRpb24nKTtcbiAgICAvLyBDcmVhdGUgY2F0ZWdvcnkgdGl0bGUgUGFyYWdyYXBoIGVsZW1lbnQuIFxuICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBgPHAgY2xhc3M9XCJjYXRlZ29yeS0tdGl0bGVcIj4ke2NhdGVnb3J5fTwvcD5gO1xuICAgIGZvcm1hdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG5cbiAgICBmb3JtYXRUaXRsZS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdj5cbiAgICAgICR7Y2F0ZWdvcnlUaXRsZX1cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtY2F0ZWdvcnlcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuICAgIC8vIGFkZCB0byBkb20gbGlzdFxuICAgIGNhdGVnb3JpZXNMaXN0LmFwcGVuZENoaWxkKGZvcm1hdFRpdGxlKTtcbiAgfVxuXG4gIC8vIERpc3BsYXkgQ2F0ZWdvcmllc1xuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMgKCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICBzaWRlQmFyLmFkZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gU3dpdGNoIGJldHR3ZWVuIGNhdGVnb3JpZXMgLy9cbiAgLy8gQ3JlYXRlIG5ldyB0b2RvIFBhbmVsIHdoZW4gYSBDYXRlZ29yeSBpcyBwcmVzc2VkLiBcbiAgc3RhdGljIGNhdGVnb3J5UHJlc3NlZChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2F0ZWdvcnktLXRpdGxlJykpe1xuICAgICAgc2lkZUJhci5uZXdUb0RvUGFuZWwoZS50YXJnZXQuaW5uZXJIVE1MKVxuICAgIH1cbiAgfVxuICAvLyBOZXcgdG9kbyBQYW5lbFxuICBzdGF0aWMgbmV3VG9Eb1BhbmVsKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdG9kb1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcGFuZWwnKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMtbmF2aWdhdGlvbicpO1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtdG9nZ2xlJyk7XG4gICAgLy8gRGVsZXRlIHByZXZpb3VzIHBhbmVsXG4gICAgaG9tZS5jbGVhckhlcm8oKTtcbiAgICAvLyBIaWRlIHNpZGUgcGFuZWxcbiAgICBjYXRlZ29yaWVzTmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgZmFsc2UpO1xuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgLy8gTmV3IHRvZG8gcGFuZWxcbiAgICB0b2RvUGFuZWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxoMT4ke2NhdGVnb3J5fTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG4gICAgPCEtLSB0YXNrIDEgLS0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXRhc2stdGV4dFwiIG5hbWU9XCJhZGQtdGFzay10ZXh0XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJhZGQtdGFzay1sYWJlbFwiIGZvcj1cImFkZC10YXNrLXRleHRcIj5BZGQgbmV3IHRhc2s8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10YXNrLWJ0biBidG5cIj5BZGQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgaWYgKGNhdGVnb3J5ID09ICdBbGwgVGFza3MnKXtcbiAgICAgIFRhc2suZGlzcGxheVRhc2tzKCk7XG4gICAgICBUYXNrLnRha2VJbnB1dEV2ZW50KCdnZW5lcmFsJylcbiAgICB9ZWxzZXtcbiAgICAgIFRhc2suZGlzcGxheVRhc2tzQ2F0ZWdvcmljYWxseShjYXRlZ29yeSk7XG4gICAgfVxuICAgIFxuICAgIFRhc2sudGFrZUlucHV0RXZlbnQoY2F0ZWdvcnkpXG4gIH1cbiAgICBcbiAgLy8gRGVsZXRlIGNhdGVnb3JpZXMuIFxuICBzdGF0aWMgZGVsZXRlQ2F0ZWdvcnkoZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0blByZXNzZWQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1jYXRlZ29yeScpO1xuICAgIGlmKGRlbGV0ZUJ0blByZXNzZWQpe1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgc3RvcmUuTFNkZWxldGVDYXRlZ29yeShlKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=