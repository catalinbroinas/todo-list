/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Body */
body {
    font-family: "Roboto", Arial, Verdana, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

ul,
li,
h1,
h6 {
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
}

* {
    box-sizing: border-box;
}

/* Layout */
.page-wrapper {
    max-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
}

.header {
    padding: 1.5rem 3rem;
    grid-column: span 2;
    background-color: #304FFE;
    font-size: 3rem;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
}

.sidebar {
    background-color: #ECEFF1;
    padding: 3rem;
}

.content {
    background-color: #FBFBFB;
}

.footer {
    padding: 1.25rem 0;
    background-color: #E8EAF6;
    text-align: center;
    grid-column: span 2;
}

/* Header */
.page-title {
    color: #FBFBFB;
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: bold;
}

.page-logo {
    font-size: inherit;
    color: #FBFBFB;
    margin: 0;
}

/* Sidebar */
.sidebar-task,
.sidebar-project,
.sidebar-project-items {
    display: flex;
    flex-flow: column wrap;
}

.sidebar-task {
    margin: 0 0 2rem;
}

.sidebar-title {
    font-size: 1.5rem;
    font-family: inherit;
    font-weight: bold;
    margin: 0 0 1rem;
}

.nav-item {
    font-size: 1rem;
    font-family: inherit;
    margin: 0 0 1rem;
    border: none;
    background-color: transparent;
    overflow: hidden;
    display: inline-block;
    text-align: left;
    cursor: pointer;
    padding: 0.5rem 4rem 0.5rem 2rem;
    transition: background 0.3s ease;
}

.nav-item:hover,
.nav-item:active,
.nav-item.active {
    background-color: #E0E0E0;
}

.sidebar-project {
    margin: 2rem 0 0;
}

.nav-icon {
    margin-right: 0.5rem;
}

.project-form {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.form-control {
    font-size: 1rem;
    font-family: inherit;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}

.group-btn {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
}

.add-btn,
.cancel-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    overflow: hidden;
    outline: none;
    border: 0;
    cursor: pointer;
    color: #FBFBFB;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    text-transform: capitalize;
    transition: background 0.3s ease, box-shadow 0.3s ease-in-out;
}

.add-btn {
    background-color: #00C853;
}

.add-btn:hover,
.add-btn:hover:active {
    background-color: #00E676;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);
}

.cancel-btn {
    background-color: #DD2C00;
}

.cancel-btn:hover,
.cancel-btn:active {
    background-color: #FF3D00;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);
}

.action-btn-icon {
    margin: 0 0.5rem 0 0;
}

.project-item {
    display: flex;
    flex-flow: row wrap;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    font-size: 1rem;
}

.project-item-body, 
.project-item-actions {
    display: inline-block;
}

.project-action-btn {
    display: inline-block;
    visibility: hidden;
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-right: 0.5rem;
    font-size: 1.25rem;
}

/* Content */
.content {
    display: flex;
    flex-flow: column wrap;
    align-items: start;
    padding: 3rem 6rem;
}

.content-title {
    font-size: 2rem;
    margin: 0 0 2rem;
}

.content-title::first-letter {
    text-transform: uppercase;
}

.add-task-btn {
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    background-color: #ECEFF1;
    padding: 0.75rem 6rem 0.75rem 1rem;
    border: none;
    outline: none;
    margin: 1rem 0;
    font-size: 1.25rem;
    text-align: left;
    transition: background 0.3s ease;
}

.add-task-btn:hover,
.add-task-btn:active {
    background-color: #E0E0E0;
}

.add-task-icon {
    margin-right: 1rem;
}

.insert-task-form {
    width: 90%;
    margin: 2rem auto;
    display: flex;
    flex-flow: column wrap;
    background-color: #ECEFF1;
    border-radius: 1rem;
    padding: 2rem 3rem;
    gap: 1.5rem;
}

.task-details,
.task-metadata {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 2rem;
}

.insert-task-form .form-control {
    flex-grow: 1;
}

.insert-task-form .group-btn {
    gap: 3rem;
}

/* Task */
.task-container {
    width: 100%;
    margin: 0;
}

.task {
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background-color: #ECEFF1;
    color: #332D2D;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    margin: 1rem 0;
    border-radius: 1rem;
}

.task.critical-priority {
    background-color: #FFEBEE;
}

.task.high-priority {
    background-color: #FFF3E0;
}

.task.medium-priority {
    background-color: #FFFDE7;
}

.task.low-priority {
    background-color: #E3F2FD;
}

.task.completed {
    background-color: #DCEDC8;
}

.task-status {
    margin-right: 2rem;
}

.task-status-checkbox {
    appearance: none; /* Hide the default look of the checkbox*/
    cursor: pointer;
    width: 1.5rem; 
    height: 1.5rem; 
    border: 2px solid #304FFE;
    border-radius: 0.5rem; 
    transition: border-color 0.3s ease; 
}

.task-status-checkbox:hover {
    background-color: white;
}

.task-status-checkbox:checked {
    background-color: #14A44D; 
    border-color: #14A44D;
}

.task-body {
    margin-right: auto;
}

.task-title,
.task-description {
    margin: 0;
    font-size: 1rem;
}

.task.completed .task-title,
.task.completed .task-description {
    text-decoration: line-through;
}

.task-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.task-description {
    font-weight: normal;
}

.task-action {
    display: flex;
    align-items: center;
}

.task-action-date,
.task-action-btn {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    overflow: hidden;
    transition: background 0.3s ease;
}

.task-action-date {
    font-size: 1rem;
    border-radius: 0.25rem;
}

.task-action-btn {
    display: inline-block;
    margin-left: 1rem;
    border-radius: 0.5rem;
}

.task.completed .task-action-date,
.task.completed .edit-btn {
    opacity: 0.5;
}

.task-action-date:hover,
.task-action-date:active,
.task-action-btn:hover,
.task-action-btn:active {
    background-color: white;
}

.task.completed .task-action-date:hover,
.task.completed .edit-btn:hover {
    background-color: transparent;
    cursor: default;
}

.task-icon {
    font-size: 1.5rem;
}

/* Modal */
.task-modal {
    width: min(800px, 98vw);
    background-color: #FBFBFB;
    border: none;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    padding: 1rem;
}

.task-modal .modal-header {
    display: flex;
    align-items: center;
}

.task-modal .close-btn {
    text-align: center;
    flex-grow: 0;
    margin-left: auto;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #9E9E9E;
    font-size: 1.5rem;
    transition: color 0.3s ease;
}

.task-modal .close-btn:hover,
.task-modal .close-btn:active {
    color: #262626;
}

.task-modal .modal-title {
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
    flex-grow: 1;
}

.task-modal .modal-title::first-letter {
    text-transform: uppercase;
}

::backdrop {
    background-color: #CFD8DC;
    opacity: 0.5;
}

/* Footer */
.footer-text {
    font-size: 1rem;
    font-weight: normal;
    color: #757575;
    font-family: inherit;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,4DAA4D;IAC5D,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;;;;IAII,SAAS;IACT,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,aAAa;IACb,iCAAiC;IACjC,+BAA+B;AACnC;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,SAAS;AACb;;AAEA,YAAY;AACZ;;;IAGI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;IAChB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;;;IAGI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,WAAW;IACX,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,wCAAwC;IACxC,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,eAAe;IACf,cAAc;IACd,uEAAuE;IACvE,0BAA0B;IAC1B,6DAA6D;AACjE;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,yBAAyB;IACzB,wEAAwE;AAC5E;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,yBAAyB;IACzB,wEAAwE;AAC5E;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kCAAkC;IAClC,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA,SAAS;AACT;IACI,WAAW;IACX,SAAS;AACb;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB,EAAE,yCAAyC;IAC3D,eAAe;IACf,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,qBAAqB;IACrB,kCAAkC;AACtC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,SAAS;IACT,eAAe;AACnB;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,uBAAuB;AAC3B;;AAEA;;IAEI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,UAAU;AACV;IACI,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,0CAA0C;IAC1C,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,cAAc;IACd,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA,WAAW;AACX;IACI,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,oBAAoB;AACxB","sourcesContent":["/* Body */\r\nbody {\r\n    font-family: \"Roboto\", Arial, Verdana, Helvetica, sans-serif;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul,\r\nli,\r\nh1,\r\nh6 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Layout */\r\n.page-wrapper {\r\n    max-width: 100vw;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-columns: auto 1fr;\r\n}\r\n\r\n.header {\r\n    padding: 1.5rem 3rem;\r\n    grid-column: span 2;\r\n    background-color: #304FFE;\r\n    font-size: 3rem;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 1rem;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #ECEFF1;\r\n    padding: 3rem;\r\n}\r\n\r\n.content {\r\n    background-color: #FBFBFB;\r\n}\r\n\r\n.footer {\r\n    padding: 1.25rem 0;\r\n    background-color: #E8EAF6;\r\n    text-align: center;\r\n    grid-column: span 2;\r\n}\r\n\r\n/* Header */\r\n.page-title {\r\n    color: #FBFBFB;\r\n    font-size: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-logo {\r\n    font-size: inherit;\r\n    color: #FBFBFB;\r\n    margin: 0;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar-task,\r\n.sidebar-project,\r\n.sidebar-project-items {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n}\r\n\r\n.sidebar-task {\r\n    margin: 0 0 2rem;\r\n}\r\n\r\n.sidebar-title {\r\n    font-size: 1.5rem;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    margin: 0 0 1rem;\r\n}\r\n\r\n.nav-item {\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    margin: 0 0 1rem;\r\n    border: none;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    padding: 0.5rem 4rem 0.5rem 2rem;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.nav-item:hover,\r\n.nav-item:active,\r\n.nav-item.active {\r\n    background-color: #E0E0E0;\r\n}\r\n\r\n.sidebar-project {\r\n    margin: 2rem 0 0;\r\n}\r\n\r\n.nav-icon {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.project-form {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    gap: 1rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.form-control {\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    color: #333;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 8px 12px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    transition: border-color 0.3s, box-shadow 0.3s;\r\n}\r\n\r\n.form-control:focus {\r\n    outline: none;\r\n    border-color: #007bff;\r\n    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\r\n}\r\n\r\n.group-btn {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.add-btn,\r\n.cancel-btn {\r\n    display: inline-block;\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1rem;\r\n    overflow: hidden;\r\n    outline: none;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: #FBFBFB;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n    text-transform: capitalize;\r\n    transition: background 0.3s ease, box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.add-btn {\r\n    background-color: #00C853;\r\n}\r\n\r\n.add-btn:hover,\r\n.add-btn:hover:active {\r\n    background-color: #00E676;\r\n    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.cancel-btn {\r\n    background-color: #DD2C00;\r\n}\r\n\r\n.cancel-btn:hover,\r\n.cancel-btn:active {\r\n    background-color: #FF3D00;\r\n    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.action-btn-icon {\r\n    margin: 0 0.5rem 0 0;\r\n}\r\n\r\n.project-item {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    padding: 0.5rem 0.5rem 0.5rem 1rem;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    font-size: 1rem;\r\n}\r\n\r\n.project-item-body, \r\n.project-item-actions {\r\n    display: inline-block;\r\n}\r\n\r\n.project-action-btn {\r\n    display: inline-block;\r\n    visibility: hidden;\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: transparent;\r\n    margin-right: 0.5rem;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n/* Content */\r\n.content {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: start;\r\n    padding: 3rem 6rem;\r\n}\r\n\r\n.content-title {\r\n    font-size: 2rem;\r\n    margin: 0 0 2rem;\r\n}\r\n\r\n.content-title::first-letter {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.add-task-btn {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    background-color: #ECEFF1;\r\n    padding: 0.75rem 6rem 0.75rem 1rem;\r\n    border: none;\r\n    outline: none;\r\n    margin: 1rem 0;\r\n    font-size: 1.25rem;\r\n    text-align: left;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.add-task-btn:hover,\r\n.add-task-btn:active {\r\n    background-color: #E0E0E0;\r\n}\r\n\r\n.add-task-icon {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.insert-task-form {\r\n    width: 90%;\r\n    margin: 2rem auto;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    background-color: #ECEFF1;\r\n    border-radius: 1rem;\r\n    padding: 2rem 3rem;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.task-details,\r\n.task-metadata {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: row wrap;\r\n    gap: 2rem;\r\n}\r\n\r\n.insert-task-form .form-control {\r\n    flex-grow: 1;\r\n}\r\n\r\n.insert-task-form .group-btn {\r\n    gap: 3rem;\r\n}\r\n\r\n/* Task */\r\n.task-container {\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.task {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    background-color: #ECEFF1;\r\n    color: #332D2D;\r\n    font-size: 1rem;\r\n    padding: 0.5rem 1.5rem;\r\n    margin: 1rem 0;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.task.critical-priority {\r\n    background-color: #FFEBEE;\r\n}\r\n\r\n.task.high-priority {\r\n    background-color: #FFF3E0;\r\n}\r\n\r\n.task.medium-priority {\r\n    background-color: #FFFDE7;\r\n}\r\n\r\n.task.low-priority {\r\n    background-color: #E3F2FD;\r\n}\r\n\r\n.task.completed {\r\n    background-color: #DCEDC8;\r\n}\r\n\r\n.task-status {\r\n    margin-right: 2rem;\r\n}\r\n\r\n.task-status-checkbox {\r\n    appearance: none; /* Hide the default look of the checkbox*/\r\n    cursor: pointer;\r\n    width: 1.5rem; \r\n    height: 1.5rem; \r\n    border: 2px solid #304FFE;\r\n    border-radius: 0.5rem; \r\n    transition: border-color 0.3s ease; \r\n}\r\n\r\n.task-status-checkbox:hover {\r\n    background-color: white;\r\n}\r\n\r\n.task-status-checkbox:checked {\r\n    background-color: #14A44D; \r\n    border-color: #14A44D;\r\n}\r\n\r\n.task-body {\r\n    margin-right: auto;\r\n}\r\n\r\n.task-title,\r\n.task-description {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.task.completed .task-title,\r\n.task.completed .task-description {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.task-title {\r\n    font-weight: bold;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.task-description {\r\n    font-weight: normal;\r\n}\r\n\r\n.task-action {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-action-date,\r\n.task-action-btn {\r\n    cursor: pointer;\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.task-action-date {\r\n    font-size: 1rem;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.task-action-btn {\r\n    display: inline-block;\r\n    margin-left: 1rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.task.completed .task-action-date,\r\n.task.completed .edit-btn {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task-action-date:hover,\r\n.task-action-date:active,\r\n.task-action-btn:hover,\r\n.task-action-btn:active {\r\n    background-color: white;\r\n}\r\n\r\n.task.completed .task-action-date:hover,\r\n.task.completed .edit-btn:hover {\r\n    background-color: transparent;\r\n    cursor: default;\r\n}\r\n\r\n.task-icon {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* Modal */\r\n.task-modal {\r\n    width: min(800px, 98vw);\r\n    background-color: #FBFBFB;\r\n    border: none;\r\n    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);\r\n    padding: 1rem;\r\n}\r\n\r\n.task-modal .modal-header {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-modal .close-btn {\r\n    text-align: center;\r\n    flex-grow: 0;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: transparent;\r\n    color: #9E9E9E;\r\n    font-size: 1.5rem;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.task-modal .close-btn:hover,\r\n.task-modal .close-btn:active {\r\n    color: #262626;\r\n}\r\n\r\n.task-modal .modal-title {\r\n    font-weight: normal;\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n    text-align: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.task-modal .modal-title::first-letter {\r\n    text-transform: uppercase;\r\n}\r\n\r\n::backdrop {\r\n    background-color: #CFD8DC;\r\n    opacity: 0.5;\r\n}\r\n\r\n/* Footer */\r\n.footer-text {\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n    color: #757575;\r\n    font-family: inherit;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/js/inbox.js":
/*!*************************!*\
  !*** ./src/js/inbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxDOM: () => (/* binding */ inboxDOM)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/js/project.js");



function inboxDOM() {
    const utilities = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.DOMHandler)();
    const projectDom = (0,_project__WEBPACK_IMPORTED_MODULE_1__.projectDOM)();

    const displayInbox = () => {
        const inboxButton = document.querySelector('#inbox-btn');
        utilities.setActiveSidebarButton('inbox-btn');
        projectDom.pageContent('Inbox');
        projectDom.setActiveProject({ target: inboxButton }); // Simulate an event to set the project active
    };

    return {
        displayInbox
    };
}



/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager),
/* harmony export */   projectDOM: () => (/* binding */ projectDOM)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameWeek.mjs");



function ProjectManager() {
    const storage = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.WebStorage)();

    const getProjectsStorageKey = () => 'projects';
    const getDefaultProjectName = () => 'Inbox';

    const validateTitle = (currentValue) => currentValue.length > 2 && currentValue.length < 21;
    const validateText = (currentValue) => currentValue.length > 2 && currentValue.length < 101;
    const validateIndex = (currentValue) => Number.isInteger(currentValue) && currentValue >= 0;

    const createProject = (projectName) => {
        return {
            name: projectName,
            tasks: []
        };
    };

    const addProject = (project) => {
        // Checks if localStorage is available and accessible
        if (!storage.storageAvailable('localStorage')) {
            console.error('localStorage is not available.');
            return false;
        }

        // Get projects array
        const existProjects = getProjects();

        // Verify if exist projects array
        if (existProjects) {
            // Search if the project already exists in the array
            const result = existProjects.find(item => item.name.toLocaleLowerCase() === project.name.toLocaleLowerCase());

            if (validateTitle(project.name) && !result) {
                existProjects.push(project);
                saveProjects(existProjects);
            } else {
                console.error('The project already exist or his name was very short.');
                return false;
            }
        } else {
            // Create a new array with the first project and save it in `localStorage`
            localStorage.setItem(getProjectsStorageKey(), JSON.stringify([project]));
        }

        return true;
    };

    const createTask = ({
        title,
        description,
        dueDate,
        priority,
        completed
    }) => {
        return {
            title,
            description,
            dueDate,
            priority,
            completed: false
        };
    };

    const addTask = (task, projectName) => {
        // Checks if localStorage is available and accessible
        if (!storage.storageAvailable('localStorage')) {
            console.error('localStorage is not available.');
            return false;
        }

        // Check that the data entered is correct
        const taskDate = new Date(task.dueDate);
        if (!validateTitle(task.title) || !validateText(task.description) || isNaN(taskDate.getTime())) {
            console.error('The data entered is incorrect.');
            return false;
        }

        const existingProjects = getProjects();
        const defaultProjectName = getDefaultProjectName();
        const existingTasks = getTasks(projectName);

        // Create inbox project and add task
        if (!existingProjects) {
            const defaultProject = createProject(defaultProjectName);
            addProject(defaultProject);
            console.log('The first project is successful added!');
            addTask(task, projectName);
            location.reload();
        }

        // Verify if the tasks array is not empty
        if (existingTasks) {
            // Search if the task already exists in the array
            const result = existingTasks.find(item => item.title.toLocaleLowerCase() === task.title.toLocaleLowerCase());
            if (result) {
                console.error('This task already exists!');
                return false;
            }
        }

        // Verify if project`s name is 'Inbox'
        if (projectName.toLowerCase() === defaultProjectName.toLowerCase()) {
            // Search 'Inbox' project
            const inboxProjectIndex = existingProjects.findIndex(project => project.name.toLowerCase() === defaultProjectName.toLowerCase());

            if (inboxProjectIndex !== -1) {
                // Add task to 'Inbox'
                existingProjects[inboxProjectIndex].tasks.push(task);
            } else {
                // Create 'Inbox' project and add task to'Inbox'
                const inboxProject = createProject(defaultProjectName);
                if (addProject(inboxProject)) {
                    existingProjects.push(inboxProject);
                    existingProjects[existingProjects.length - 1].tasks.push(task);
                    // Update content after first task added
                    if (!existingTasks) {
                        location.reload();
                    }
                } else {
                    console.error('The task has not been added.');
                    return false;
                }
            }
        } else {
            // Search `projectName` in projects array
            const projectIndex = existingProjects.findIndex(project => project.name.toLowerCase() === projectName.toLowerCase());

            if (projectIndex !== -1) {
                // Add task to `projectName`
                existingProjects[projectIndex].tasks.push(task);
                // Update content after first task added
                if (!existingTasks) {
                    location.reload();
                }
            } else {
                console.error('The project was not found!');
                return false;
            }
        }

        // Update projects array
        saveProjects(existingProjects);
        return true;
    };

    const getProjects = () => {
        if (localStorage.getItem(getProjectsStorageKey())) {
            return JSON.parse(localStorage.getItem(getProjectsStorageKey()));
        } else {
            return false;
        }
    };

    const getTasks = (projectName) => {
        // Project array is empty
        const existingProjects = getProjects();
        if (!existingProjects) {
            return false;
        }

        // Check if the project exists
        const project = existingProjects.find(project => project.name.toLocaleLowerCase() === projectName.toLocaleLowerCase());
        if (project) {
            return project.tasks;
        } else {
            return false;
        }
    };

    const removeProject = (index) => {
        const existProjects = getProjects();

        if (validateIndex(index)) {
            existProjects.splice(index, 1);
        } else {
            console.error('The project was not removed.');
            return false;
        }

        // Update project array
        saveProjects(existProjects);
        return true;
    };

    const removeTask = (projectIndex, taskIndex) => {
        const existingProjects = getProjects();

        if (validateIndex(projectIndex) && validateIndex(taskIndex)) {
            existingProjects[projectIndex].tasks.splice(taskIndex, 1);
        } else {
            console.error('The task was not removed.');
            return false;
        }

        // Update project array
        saveProjects(existProjects);
        return true;
    };

    const editProject = (index, setValue) => {
        const existProjects = getProjects();

        if (validateIndex(index) && validateTitle(setValue)) {
            existProjects[index].name = setValue;
        } else {
            console.error('The project was not edited.');
            return false;
        }

        // Update project array
        saveProjects(existProjects);
        return true;
    };

    const editTask = (projectIndex, taskIndex, {
        title,
        description,
        dueDate,
        priority
    }) => {
        // Verify project index and task index
        if (!validateIndex(projectIndex) || !validateIndex(taskIndex)) {
            console.error('Index not correct!');
            return false;
        }

        // Validate task dates
        if (!validateTitle(title) || !validateText(description) || isNaN(new Date(dueDate).getTime())) {
            console.error('Invalid task data!');
            return false;
        }

        // Get projects and tasks
        const existingProjects = getProjects();
        const projectName = existingProjects[projectIndex].name;
        const existingTasks = getTasks(projectName);

        // Check if another task with the same title already exists in the array
        const result = existingTasks.find(item => item.title.toLowerCase() === title.toLowerCase());
        if (result && result !== existingTasks[taskIndex]) {
            console.error('Another task with the same title already exists!');
            return false;
        }

        // Update task
        existingTasks[taskIndex] = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        };

        // Update projects array
        existingProjects[projectIndex].tasks = existingTasks;
        saveProjects(existingProjects);
        return true;
    }

    const toggleTaskCompletion = (projectIndex, taskIndex) => {
        // Verify project index and task index
        if (!validateIndex(projectIndex) || !validateIndex(taskIndex)) {
            console.error('Index not correct!');
            return false;
        }

        // Get projects and tasks
        const existingProjects = getProjects();
        const projectName = existingProjects[projectIndex].name;
        const existingTasks = getTasks(projectName);

        // Toggle task status
        existingTasks[taskIndex].completed = !existingTasks[taskIndex].completed;

        // Update projects array
        existingProjects[projectIndex].tasks = existingTasks;
        saveProjects(existingProjects);
        return true;
    };

    const changeTaskDate = (projectIndex, taskIndex, setDueDate) => {
        // Verify project index and task index
        if (!validateIndex(projectIndex) || !validateIndex(taskIndex)) {
            console.error('Index not correct!');
            return false;
        }

        // Get projects and tasks
        const existingProjects = getProjects();
        const projectName = existingProjects[projectIndex].name;
        const existingTasks = getTasks(projectName);

        if (isNaN(new Date(setDueDate).getTime())) {
            console.error('Due date is not valid');
            return false;
        }

        // Update dueDate task
        existingTasks[taskIndex].dueDate = setDueDate;

        // Update projects array
        existingProjects[projectIndex].tasks = existingTasks;
        saveProjects(existingProjects);
        return true;
    };

    const saveProjects = (projects) => {
        localStorage.setItem(getProjectsStorageKey(), JSON.stringify(projects));
    }

    return {
        createProject,
        addProject,
        getProjects,
        removeProject,
        editProject,
        createTask,
        addTask,
        getDefaultProjectName,
        getTasks,
        removeTask,
        editTask,
        toggleTaskCompletion,
        changeTaskDate
    };
}

function projectDOM() {
    const projectManager = ProjectManager();
    const utilities = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.DOMHandler)();
    let projectIndex = null;
    let taskIndex = null;

    const getProjectIndex = () => projectIndex;

    const setProjectIndex = (value) => {
        projectIndex = value;
    };

    const getTaskIndex = () => taskIndex;

    const setTaskIndex = (value) => {
        taskIndex = value;
    };

    const getCurrentProjectIndex = (element) => {
        const navItem = element.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const projects = projectManager.getProjects();

        if (projects) {
            return projects.findIndex(item => item.name === itemName);
        }

        return false;
    };

    const getCurrentTaskIndex = (element) => {
        // Get task title
        const taskItem = element.closest('.task');
        const taskTitle = taskItem.querySelector('.task-title');
        const itemTitle = taskTitle.textContent.trim();

        // Get project name
        const taskContainer = taskItem.closest('.task-container');
        const projectName = taskContainer.id.split('-')[0];

        // Get tasks from `projectName'
        const tasks = projectManager.getTasks(projectName);

        if (tasks) {
            return tasks.findIndex(task => task.title === itemTitle);
        }

        return false;
    };

    const setActiveProject = (event) => {
        const button = event.target;
        const index = getCurrentProjectIndex(button);

        if (Number.isInteger(index) && index >= 0) {
            setProjectIndex(index);
            return true;
        }

        return false;
    };

    const createProjectForm = (action, value = '') => {
        action = action.toLowerCase();
        const actionValidate = ['add', 'edit'];

        if (!actionValidate.includes(action)) {
            return false;
        }

        const form = utilities.createDOMElement({
            elementTag: 'form',
            elementClass: ['project-form']
        });
        const groupButtons = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['group-btn']
        });

        const iconType = action === 'add' ? 'mdi-send' : 'mdi-pencil';

        const input = utilities.createInputElement({
            inputType: 'text',
            inputId: 'set-name-project',
            inputClass: ['form-control'],
            inputName: 'name-project',
            inputPlaceholder: 'Name',
            inputValue: value
        });

        const sendButton = utilities.createButton({
            name: action,
            buttonClass: ['add-btn'],
            iconClass: ['mdi', iconType, 'action-btn-icon'],
            clickHandler: () => handleSendProjectButton(action, form)
        });
        const cancelButton = utilities.createButton({
            name: 'Cancel',
            buttonClass: ['cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: () => handleCancelProjectButton(form)
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        form.appendChild(input);
        form.appendChild(groupButtons);
        groupButtons.appendChild(sendButton);
        groupButtons.appendChild(cancelButton);

        return form;
    };

    const createNavItem = (name) => {
        const newItem = utilities.createDOMElement({
            elementTag: 'a',
            elementId: `${name.toLowerCase()}-btn`,
            elementClass: ['nav-item', 'project-item'],
            elementAtrType: 'role',
            elementAtrValue: 'button',
            clickHandler: () => {
                setActiveProject(event);
                utilities.setActiveSidebarButton(`${name.toLowerCase()}-btn`);
                pageContent(name);
            }
        });

        const navItemBody = utilities.createDOMElement({
            elementTag: 'div',
            electron: ['project-item-body']
        });
        const navItemActions = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['project-item-actions']
        });
        const newItemIcon = utilities.createDOMElement({
            elementTag: 'i',
            elementClass: ['mdi', 'mdi-format-list-bulleted', 'nav-icon']
        });

        const deleteButton = utilities.createButton({
            title: 'Delete item',
            buttonClass: ['project-action-btn', 'delete-btn'],
            iconClass: ['mdi', 'mdi-delete'],
            clickHandler: handleDeleteProjectButton
        });

        const editButton = utilities.createButton({
            title: 'Edit item',
            buttonClass: ['project-action-btn', 'edit-btn'],
            iconClass: ['mdi', 'mdi-pencil'],
            clickHandler: handleEditProjectButton
        });

        newItem.addEventListener('mouseover', () => {
            deleteButton.style.visibility = 'visible';
            editButton.style.visibility = 'visible';
        });

        newItem.addEventListener('mouseout', () => {
            deleteButton.style.visibility = 'hidden';
            editButton.style.visibility = 'hidden';
        });

        newItem.appendChild(navItemBody);
        newItem.appendChild(navItemActions);
        navItemBody.appendChild(newItemIcon);
        navItemBody.insertAdjacentText('beforeend', `${name}`);
        navItemActions.appendChild(deleteButton);
        navItemActions.appendChild(editButton);

        return newItem;
    };

    const createTaskForm = () => {
        const projects = projectManager.getProjects();
        const projectName = document.querySelector('.content-title').textContent;

        const form = utilities.createDOMElement({
            elementTag: 'form',
            elementClass: ['insert-task-form']
        });
        const taskDetails = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-details']
        });
        const taskMetadata = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-metadata']
        });
        const taskActions = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['group-btn']
        });

        const taskTitleInput = utilities.createInputElement({
            inputType: 'text',
            inputId: 'task-title',
            inputClass: ['form-control'],
            inputPlaceholder: 'Title',
            inputFocus: true
        });
        const taskDescInput = utilities.createInputElement({
            inputType: 'text',
            inputId: 'task-description',
            inputClass: ['form-control'],
            inputPlaceholder: 'Description'
        });
        const taskDateInput = utilities.createInputElement({
            inputType: 'date',
            inputId: 'task-date',
            inputClass: ['form-control'],
        });

        const taskPriority = utilities.createSelectElement({
            selectName: 'task-priority',
            selectId: 'task-priority',
            selectClass: ['form-control']
        });
        const taskProject = utilities.createSelectElement({
            selectName: 'task-project',
            selectId: 'task-project',
            selectClass: ['form-control']
        });

        const optionPriority = utilities.createOptionElement({
            optionValue: '',
            optionText: 'Choose the priority',
            optionDisabled: true
        });
        const optionPriorityCritical = utilities.createOptionElement({
            optionValue: 'critical',
            optionText: 'Critical'
        });
        const optionPriorityHigh = utilities.createOptionElement({
            optionValue: 'high',
            optionText: 'High'
        });
        const optionPriorityMedium = utilities.createOptionElement({
            optionValue: 'medium',
            optionText: 'Medium'
        });
        const optionPriorityLow = utilities.createOptionElement({
            optionValue: 'low',
            optionText: 'Low'
        });

        const optionProject = utilities.createOptionElement({
            optionValue: '',
            optionText: 'Include in',
            optionDisabled: true
        });
        const optionProjectInbox = utilities.createOptionElement({
            optionValue: 'inbox',
            optionText: 'Inbox'
        });
        taskProject.appendChild(optionProject);
        taskProject.appendChild(optionProjectInbox);

        if (projects) {
            projects.forEach((project) => {
                if (project.name.toLowerCase() !== 'inbox') {
                    const option = utilities.createOptionElement({
                        optionValue: project.name.toLowerCase(),
                        optionText: project.name
                    });
                    if (project.name.toLowerCase() === projectName.toLowerCase()) {
                        option.setAttribute('selected', 'selected');
                    }
                    taskProject.appendChild(option);
                }
            });
        }

        const sendButton = utilities.createButton({
            name: 'Add',
            buttonClass: ['add-btn'],
            iconClass: ['mdi', 'mdi-send', 'action-btn-icon'],
            clickHandler: () => handleSendTaskButton(event)
        });
        const cancelButton = utilities.createButton({
            name: 'Cancel',
            buttonClass: ['cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: () => handleCancelTaskButton(event)
        });

        form.appendChild(taskDetails);
        form.appendChild(taskMetadata);
        form.appendChild(taskActions);
        taskDetails.appendChild(taskTitleInput);
        taskDetails.appendChild(taskDescInput);
        taskMetadata.appendChild(taskDateInput);
        taskMetadata.appendChild(taskPriority);
        taskMetadata.appendChild(taskProject);
        taskActions.appendChild(sendButton);
        taskActions.appendChild(cancelButton);
        taskPriority.appendChild(optionPriority);
        taskPriority.appendChild(optionPriorityCritical);
        taskPriority.appendChild(optionPriorityHigh);
        taskPriority.appendChild(optionPriorityMedium);
        taskPriority.appendChild(optionPriorityLow);

        return form;
    };

    const createTaskModal = (modalId, modalTitle) => {
        const dialog = utilities.createDOMElement({
            elementTag: 'dialog',
            elementId: modalId,
            elementClass: ['task-modal']
        });
        const header = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['modal-header']
        });
        const title = utilities.addTitle(modalTitle);
        title.classList.add('modal-title');
        const form = createTaskForm();

        const closeButton = utilities.createButton({
            buttonClass: ['close-btn'],
            iconClass: ['mdi', 'mdi-close'],
            clickHandler: () => closeModal(modalId)
        });

        dialog.appendChild(header);
        dialog.appendChild(form);
        header.appendChild(title);
        header.appendChild(closeButton);

        if (modalId === 'edit-task-modal') {
            const buttonGroup = dialog.querySelector('.group-btn');
            const addButton = dialog.querySelector('.add-btn');
            const cancelButton = dialog.querySelector('.cancel-btn');
            utilities.removeElement(addButton);
            const sendButton = utilities.createButton({
                name: 'Edit',
                buttonClass: ['add-btn'],
                iconClass: ['mdi', 'mdi-pencil', 'action-btn-icon'],
                clickHandler: () => handleSendTaskButton(event)
            });
            buttonGroup.insertBefore(sendButton, cancelButton);
        }

        return dialog;
    };

    const openModal = (modalId) => {
        const dialog = document.querySelector(`#${modalId}`);
        
        if (dialog && !dialog.open) {
            dialog.showModal();
            dialog.addEventListener('keydown', (event) => {
                closeModalOnEsc(modalId, event);
            });
        }
    };

    const closeModal = (modalId) => {
        const dialog = document.querySelector(`#${modalId}`);

        if (dialog && dialog.open) {
            dialog.close();
            utilities.removeElement(dialog);
            dialog.removeEventListener('keydown', (event) => {
                closeModalOnEsc(modalId, event);
            });
        }
    };

    const closeModalOnEsc = (modalId, event) => {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    };

    const createAndOpenModal = (setId, setTitle) => {
        if (!document.querySelector(`${setId}`)) {
            const modal = createTaskModal(setId, setTitle);
            document.body.appendChild(modal);
        }

        openModal(setId);
    };

    const createTaskItem = ({ titleText, description, dueDate, priority, completed }) => {
        let priorityClass = '';
        switch (priority) {
            case 'critical':
                priorityClass = 'critical-priority';
                break;
            case 'high':
                priorityClass = 'high-priority';
                break;
            case 'medium':
                priorityClass = 'medium-priority';
                break;
            case 'low':
                priorityClass = 'low-priority';
                break;
        }

        const task = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task', priorityClass]
        });
        const taskStatus = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-status']
        });
        const taskBody = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-body']
        });
        const taskAction = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-action']
        });

        const taskStatusCheckbox = utilities.createInputElement({
            inputType: 'checkbox',
            inputClass: ['task-status-checkbox']
        });

        const taskTitle = utilities.createDOMElement({
            elementTag: 'p',
            elementClass: ['task-title'],
            elementText: titleText
        });
        const taskDesc = utilities.createDOMElement({
            elementTag: 'p',
            elementClass: ['task-description'],
            elementText: description ? description : ''
        });

        const taskDueDate = utilities.createInputElement({
            inputType: 'date',
            inputClass: ['task-action-date'],
            inputValue: dueDate ? dueDate : '',
            inputTitle: 'Set the due date'
        });

        const editButton = utilities.createButton({
            title: 'Edit Task',
            buttonClass: ['task-action-btn', 'edit-btn'],
            iconClass: ['mdi', 'mdi-pencil', 'task-icon'],
            clickHandler: () => handleEditTaskButton(event)
        });
        const deleteButton = utilities.createButton({
            title: 'Delete Task',
            buttonClass: ['task-action-btn', 'remove-btn'],
            iconClass: ['mdi', 'mdi-delete', 'task-icon'],
            clickHandler: () => handleDeleteTaskButton(event)
        });

        taskDueDate.addEventListener('change', () => handleTaskDate(event));

        taskStatusCheckbox.checked = completed;

        if (completed) {
            task.classList.add('completed');
            taskDueDate.setAttribute('disabled', 'disabled');
            taskDueDate.removeAttribute('title');
            editButton.setAttribute('disabled', 'disabled');
            editButton.removeEventListener('click', handleEditTaskButton);
            editButton.removeAttribute('title');
        }

        taskStatusCheckbox.addEventListener('click', () => handleTaskStatus(event));

        task.appendChild(taskStatus);
        task.appendChild(taskBody);
        task.appendChild(taskAction);
        taskStatus.appendChild(taskStatusCheckbox);
        taskBody.appendChild(taskTitle);
        taskBody.appendChild(taskDesc);
        taskAction.appendChild(taskDueDate);
        taskAction.appendChild(editButton);
        taskAction.appendChild(deleteButton);

        return task;
    };

    const displayTasks = (projectName) => {
        const taskItems = projectManager.getTasks(projectName);

        const taskContainer = utilities.createDOMElement({
            elementTag: 'div',
            elementId: `${projectName.toLocaleLowerCase()}-task`,
            elementClass: ['task-container']
        });

        if (taskItems.length) {
            taskItems.forEach(task => {
                taskContainer.appendChild(createTaskItem({
                    titleText: task.title,
                    description: task.description,
                    dueDate: task.dueDate,
                    priority: task.priority,
                    completed: task.completed
                }));
            });
        } else {
            return false;
        }

        return taskContainer;
    };

    const sidebarContent = () => {
        const sideBar = document.querySelector('#sidebar-project-items');
        const projects = projectManager.getProjects();
        const defaultProjectName = projectManager.getDefaultProjectName();

        utilities.clearPageContent(sideBar);

        if (projects.length) {
            projects.forEach(item => {
                if (item.name.toLowerCase() !== defaultProjectName.toLocaleLowerCase()) {
                    sideBar.appendChild(createNavItem(item.name));
                }
            });
        }
    };

    const pageContent = (projectName) => {
        const content = document.querySelector('#content');
        const pageTitle = utilities.addTitle(projectName);
        const tasks = displayTasks(projectName);

        const addTaskButton = utilities.createButton({
            name: 'Add Task',
            buttonClass: ['add-task-btn'],
            iconClass: ['mdi', 'mdi-plus', 'add-task-icon'],
            clickHandler: () => createAndOpenModal('add-task-modal', 'Add new task')
        });

        utilities.clearPageContent(content);

        content.appendChild(pageTitle);
        if (tasks) {
            content.appendChild(tasks);
        }
        content.appendChild(addTaskButton);
    };

    const displayAll = () => {
        const content = document.querySelector('#content');
        const existingTask = content.querySelectorAll('.task-container');
        const projects = projectManager.getProjects();

        // Clear page content
        if (existingTask) {
            existingTask.forEach(element => {
                utilities.removeElement(element);
            });
        }

        // Display all tasks
        if (projects) {
            projects.forEach(item => {
                const tasks = displayTasks(item.name);
                if (tasks) {
                    content.appendChild(tasks);
                }
            });
        }
    };

    const displayTasksByDate = (byDate) => {
        if (byDate !== 'today' && byDate !== 'week') {
            console.error('Invalid argument!');
            return false;
        }

        const content = document.querySelector('#content');
        const existingTask = content.querySelectorAll('.task-container');
        const projects = projectManager.getProjects();
        const today = new Date();

        // Clear page content
        if (existingTask) {
            existingTask.forEach(element => {
                utilities.removeElement(element);
            });
        }

        // Display tasks by date
        if (projects) {
            projects.forEach((item) => {
                const taskItems = projectManager.getTasks(item.name);
                const taskContainer = utilities.createDOMElement({
                    elementTag: 'div',
                    elementId: `${item.name.toLocaleLowerCase()}-task`,
                    elementClass: ['task-container']
                });
                if (taskItems.length) {
                    taskItems.forEach(task => {
                        const taskDate = new Date(task.dueDate);
                        const condition = byDate === 'today' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isSameDay)(taskDate, today) : (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameWeek)(taskDate, today);
                        if (condition) {
                            taskContainer.appendChild(createTaskItem({
                                titleText: task.title,
                                description: task.description,
                                dueDate: task.dueDate,
                                priority: task.priority,
                                completed: task.completed
                            }));
                        }
                    });
                    content.appendChild(taskContainer);
                }
            });
        }

        return true;
    };

    const handleSendTaskButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');
        const projects = projectManager.getProjects();
        const pageTitle = document.querySelector('.content-title').textContent.toLowerCase();

        // Set values by input form
        const taskTitle = document.querySelector('#task-title').value.trim();
        const taskDesc = document.querySelector('#task-description').value.trim();
        const taskDate = document.querySelector('#task-date').value.trim();

        const priorityElement = document.querySelector('#task-priority');
        const prioritySelected = priorityElement.options[priorityElement.selectedIndex];
        const taskPriority = prioritySelected.value;

        const projectElement = document.querySelector('#task-project');
        const projectSelected = projectElement.options[projectElement.selectedIndex];
        const taskProject = projectSelected.value;

        if (modal.id === 'add-task-modal') {
            const task = projectManager.createTask({
                title: taskTitle,
                description: taskDesc,
                dueDate: taskDate,
                priority: taskPriority
            });
            projectManager.addTask(task, taskProject);
            const indexOfProject = projects.findIndex(project => project.name.toLowerCase() === taskProject.toLowerCase());
            setProjectIndex(indexOfProject);
            utilities.setActiveSidebarButton(`${taskProject.toLowerCase()}-btn`);
        } else if (modal.id === 'edit-task-modal') {
            projectManager.editTask(getProjectIndex(), getTaskIndex(), {
                title: taskTitle,
                description: taskDesc,
                dueDate: taskDate,
                priority: taskPriority
            });
        }

        // Close modal and update page content
        closeModal(modal.id);
        if (projects.some(item => item.name.toLowerCase() === pageTitle)) {
            pageContent(taskProject);
        } else {
            switch (pageTitle) {
                case 'today':
                    displayTasksByDate('today');
                    break;
                case 'this week':
                    displayTasksByDate('week');
                    break;
                default:
                    displayAll();
            }
        }
    };

    const handleCancelTaskButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');

        closeModal(modal.id);
    };

    const handleSendProjectButton = (action, form) => {
        const projectName = document.querySelector('#set-name-project').value.trim();

        if (action === 'add') {
            const project = projectManager.createProject(projectName);
            projectManager.addProject(project);
            setTimeout(() => {
                utilities.removeElement(form);
                sidebarContent();
            }, 500);
        } else if (action === 'edit') {
            const index = getProjectIndex();
            projectManager.editProject(index, projectName);
            setTimeout(() => {
                utilities.removeElement(form);
                sidebarContent();
            }, 500);
        }
    };

    const handleCancelProjectButton = (form) => {
        setTimeout(() => utilities.removeElement(form), 500);
    };

    const handleDeleteProjectButton = (event) => {
        const button = event.target;
        const navItem = button.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const index = projectManager.getProjects().findIndex(item => item.name === itemName);

        projectManager.removeProject(index);
        sidebarContent();
    };

    const handleEditProjectButton = (event) => {
        const sidebarProject = document.querySelector('#sidebar-project');
        const button = event.target;
        const navItem = button.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const projectForm = createProjectForm('edit', itemName);

        // Get current index of te project
        const index = getCurrentProjectIndex(button);

        if (!sidebarProject.querySelector('#set-name-project')) {
            // Add editing form to DOM and focus to input
            navItem.after(projectForm);
            document.querySelector('#set-name-project').focus();
            // Set index of the project
            setProjectIndex(index);
        }
    };

    const handleDeleteTaskButton = (event) => {
        const button = event.target.closest('.remove-btn');
        const projects = projectManager.getProjects();
        const pageTitle = document.querySelector('.content-title').textContent.toLowerCase();

        // Get current index of the task
        const indexOfTask = getCurrentTaskIndex(button);

        // Each `task` has the name of the project in the id
        const taskContainer = button.closest('.task-container');
        const projectName = taskContainer.id.split('-')[0];
        const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

        // Remove task and update page content
        projectManager.removeTask(indexOfProject, indexOfTask);
        if (projects.some(item => item.name.toLowerCase() === pageTitle)) {
            pageContent(projectName);
        } else {
            switch (pageTitle) {
                case 'today':
                    displayTasksByDate('today');
                    break;
                case 'this week':
                    displayTasksByDate('week');
                    break;
                default:
                    displayAll();
            }
        }
    };

    const handleEditTaskButton = (event) => {
        const button = event.target.closest('.edit-btn');
        const projects = projectManager.getProjects(); // Get all projects

        // Get current index of the task
        const indexOfTask = getCurrentTaskIndex(button);

        // Each `task` has the name of the project in the id
        const taskContainer = button.closest('.task-container');
        const projectName = taskContainer.id.split('-')[0];
        const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

        // Set project index and task index
        setProjectIndex(indexOfProject);
        setTaskIndex(indexOfTask);

        // Display modal with form
        createAndOpenModal('edit-task-modal', 'Edit Task');

        // Get input
        const inputTitle = document.querySelector('#task-title');
        const inputDesc = document.querySelector('#task-description');
        const inputDate = document.querySelector('#task-date');

        // Get select
        const priorityElement = document.querySelector('#task-priority');
        const projectElement = document.querySelector('#task-project');

        // Get Values from tasks array
        const taskTitle = projects[indexOfProject].tasks[indexOfTask].title;
        const taskDesc = projects[indexOfProject].tasks[indexOfTask].description;
        const taskDate = projects[indexOfProject].tasks[indexOfTask].dueDate;
        const taskPriority = projects[indexOfProject].tasks[indexOfTask].priority;
        const taskProject = projectName;

        // Disabled project select
        projectElement.setAttribute('disabled', 'disabled');

        // Set value to input
        inputTitle.value = taskTitle;
        inputDesc.value = taskDesc;
        inputDate.value = taskDate;

        // Set value to select
        for (let i = 0; i < priorityElement.options.length; i++) {
            if (priorityElement.options[i].value === taskPriority) {
                priorityElement.selectedIndex = i;
                break;
            }
        }
        for (let i = 0; i < projectElement.options.length; i++) {
            if (projectElement.options[i].value === taskProject) {
                projectElement.selectedIndex = i;
                break;
            }
        }
    }

    const handleTaskStatus = (event) => {
        const projects = projectManager.getProjects();

        // Verify if the clicked element is a checkbox input
        if (event.target.type === 'checkbox') {
            const checkbox = event.target;

            // Get project index, task index and project name
            const indexOfTask = getCurrentTaskIndex(checkbox);
            // Each `task` has the name of the project in the id
            const taskContainer = checkbox.closest('.task-container');
            const projectName = taskContainer.id.split('-')[0];
            const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

            // Verify that the checkbox is assigned to a task
            if (indexOfTask !== -1) {
                // Toggle task status and update page content
                projectManager.toggleTaskCompletion(indexOfProject, indexOfTask);
                // Update page content
                const pageTitle = document.querySelector('.content-title').textContent.toLowerCase();
                if (projects.some(item => item.name.toLowerCase() === pageTitle)) {
                    pageContent(projectName);
                } else {
                    switch (pageTitle) {
                        case 'today':
                            displayTasksByDate('today');
                            break;
                        case 'this week':
                            displayTasksByDate('week');
                            break;
                        default:
                            displayAll();
                    }
                }
            }
        }
    };

    const handleTaskDate = (event) => {
        const projects = projectManager.getProjects();

        if (event.target.type === 'date') {
            const taskDate = event.target;

            // Get project index, task index and project name
            const indexOfTask = getCurrentTaskIndex(taskDate);
            // Each `task` has the name of the project in the id
            const taskContainer = taskDate.closest('.task-container');
            const projectName = taskContainer.id.split('-')[0];
            const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

            // Verify that the date is assigned to a task
            if (indexOfTask !== -1) {
                const taskDueDate = taskDate.value.trim();

                // Toggle task status
                projectManager.changeTaskDate(indexOfProject, indexOfTask, taskDueDate);

                // Update page content
                const pageTitle = document.querySelector('.content-title').textContent.toLowerCase();
                if (projects.some(item => item.name.toLowerCase() === pageTitle)) {
                    pageContent(projectName);
                } else {
                    switch (pageTitle) {
                        case 'today':
                            displayTasksByDate('today');
                            break;
                        case 'this week':
                            displayTasksByDate('week');
                            break;
                        default:
                            displayAll();
                    }
                }
            }
        }
    };

    return {
        createProjectForm,
        sidebarContent,
        createTaskModal,
        openModal,
        displayTasks,
        pageContent,
        setActiveProject,
        displayAll,
        displayTasksByDate
    };
}



/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMHandler: () => (/* binding */ DOMHandler),
/* harmony export */   WebStorage: () => (/* binding */ WebStorage)
/* harmony export */ });
function DOMHandler() {
    const clearPageContent = (container) => {
        if (container.hasChildNodes()) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    };

    const setActiveSidebarButton = (getActiveButton) => {
        const navItems = document.querySelectorAll('.nav-item');
        const setActiveItem = document.querySelector(`#${getActiveButton}`);


        navItems.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });

        if (setActiveItem) {
            setActiveItem.classList.add('active');
        }
    };

    const addTitle = (setTitle) => {
        const title = document.createElement('h3');
        title.classList.add('content-title');
        title.textContent = setTitle;

        return title;
    };

    const createButton = ({ name, title, buttonClass, iconClass, clickHandler }) => {
        const button = document.createElement('button');
        const buttonIcon = document.createElement('i');

        button.setAttribute('type', 'button');

        if (title) {
            button.setAttribute('title', title);
        }
        if (buttonClass) {
            buttonClass.forEach(className => button.classList.add(className));
        }
        if (iconClass) {
            iconClass.forEach(className => buttonIcon.classList.add(className));
        }
        if (clickHandler) {
            button.addEventListener('click', clickHandler);
        }

        button.appendChild(buttonIcon);
        if (name) {
            button.insertAdjacentText('beforeend', name);
        }

        return button;
    };

    const createInputElement = ({
        inputType, inputId, inputClass, inputName, inputPlaceholder, inputValue, inputFocus, inputTitle
    }) => {
        const input = document.createElement('input');

        input.setAttribute('type', inputType);

        if (inputId) {
            input.setAttribute('id', inputId);
        }
        if (inputClass) {
            inputClass.forEach(className => input.classList.add(className));
        }

        if (inputName) {
            input.setAttribute('name', inputName);
        }

        if (inputPlaceholder) {
            input.setAttribute('placeholder', inputPlaceholder);
        }

        if (inputValue) {
            input.setAttribute('value', inputValue);
        }

        if (inputFocus) {
            input.setAttribute('autofocus', 'autofocus');
        }
        if (inputTitle) {
            input.setAttribute('title', inputTitle);
        }

        return input;
    };

    const createSelectElement = ({ selectName, selectId, selectClass }) => {
        const select = document.createElement('select');

        select.setAttribute('name', selectName);
        select.setAttribute('id', selectId);

        if (selectClass) {
            selectClass.forEach(className => select.classList.add(className));
        }

        return select;
    };

    const createOptionElement = ({ optionValue, optionText, optionDisabled = false }) => {
        const option = document.createElement('option');

        option.setAttribute('value', optionValue);
        option.textContent = optionText;

        if (optionDisabled) {
            option.setAttribute('disabled', 'disabled');
        }

        return option;
    };

    const createDOMElement = ({
        elementTag,
        elementClass,
        elementId,
        elementText,
        elementAtrType,
        elementAtrValue,
        clickHandler
    }) => {
        const element = document.createElement(elementTag);
        if (elementId) {
            element.setAttribute('id', elementId);
        }
        if (elementClass) {
            elementClass.forEach(className => element.classList.add(className));
        }
        if (elementText) {
            element.textContent = elementText;
        }
        if (elementAtrType) {
            element.setAttribute(elementAtrType, elementAtrValue);
        }
        if (clickHandler) {
            element.addEventListener('click', clickHandler);
        }
        return element;
    };

    const removeElement = (element) => {
        if (element) {
            element.remove();
        }
    };

    return {
        clearPageContent,
        setActiveSidebarButton,
        addTitle,
        createButton,
        createInputElement,
        createSelectElement,
        createOptionElement,
        removeElement,
        createDOMElement
    };
}

function WebStorage() {
    /**
      * Checks if localStorage or sessionStorage is available and accessible.
      * Based on the example from MDN web docs.
    */
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    return {
        storageAvailable
    };
}



/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ "./src/js/inbox.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/js/project.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility */ "./src/js/utility.js");





function UI() {
    const utilities = (0,_utility__WEBPACK_IMPORTED_MODULE_3__.DOMHandler)();
    const inbox = (0,_inbox__WEBPACK_IMPORTED_MODULE_1__.inboxDOM)();
    const projectDom = (0,_project__WEBPACK_IMPORTED_MODULE_2__.projectDOM)();
    const pageContent = document.querySelector('#content');
    const allButton = document.querySelector('#all-btn');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

    const displayAll = () => {
        utilities.setActiveSidebarButton('all-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('All tasks'));
        projectDom.displayAll();
    };

    const displayToday = () => {
        utilities.setActiveSidebarButton('today-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Today'));
        projectDom.displayTasksByDate('today');
    };

    const displayWeek = () => {
        utilities.setActiveSidebarButton('week-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('This Week'));
        projectDom.displayTasksByDate('week');
    };

    const displayNewProjectForm = () => {
        const project = (0,_project__WEBPACK_IMPORTED_MODULE_2__.projectDOM)();
        const newProjectForm = project.createProjectForm('add');
        const sidebarProject = document.querySelector('#sidebar-project');

        if (!sidebarProject.querySelector('#set-name-project')) {
            newProjectButton.after(newProjectForm);
            document.querySelector('#set-name-project').focus();
        }
    };

    const addEvents = () => {
        inboxButton.addEventListener('click', (event) => {
            setTimeout(() => {
                inbox.displayInbox();
            }, 500);
        });
        allButton.addEventListener('click', (event) => {
            setTimeout(displayAll, 500);
        });
        todayButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayToday();
            }, 500);
        });
        weekButton.addEventListener('click', () => {
            setTimeout(() => {
                displayWeek();
            }, 500);
        });
        newProjectButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayNewProjectForm();
            }, 300);
        });
    };

    return {
        addEvents
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_2__.projectDOM)();
    const inbox = (0,_inbox__WEBPACK_IMPORTED_MODULE_1__.inboxDOM)();
    ui.addEvents();
    project.sidebarContent();
    inbox.displayInbox();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map