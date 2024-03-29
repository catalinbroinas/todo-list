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
.sidebar-project {
    display: flex;
    flex-flow: column wrap;
}

.sidebar-task {
    margin: 0 0 2rem;
}

.sidebar-title,
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

.new-project-form {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
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

/* Content */
.content {
    display: flex;
    flex-flow: column wrap;
    align-items: start;
    padding: 3rem 6rem;
}

.content-title {
    font-size: 2rem;
    font-family: inherit;
    margin: 0 0 2rem;
}

.add-task-btn {
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    background-color: #ECEFF1;
    padding: 0.75rem 6rem 0.75rem 1rem;
    border: none;
    outline: none;
    margin: 0 0 1rem;
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

/* Task */
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
    background-color: #304FFE; 
    border-color: #304FFE;
}

.task-body {
    margin-right: auto;
}

.task-title,
.task-description {
    margin: 0;
    font-size: 1rem;
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

.task-action-date:hover,
.task-action-date:active,
.task-action-btn:hover,
.task-action-btn:active {
    background-color: white;
}

.task-icon {
    font-size: 1.5rem;
}

/* Footer */
.footer-text {
    font-size: 1rem;
    font-weight: normal;
    color: #757575;
    font-family: inherit;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Body */\r\nbody {\r\n    font-family: \"Roboto\", Arial, Verdana, Helvetica, sans-serif;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul,\r\nli,\r\nh1,\r\nh6 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Layout */\r\n.page-wrapper {\r\n    max-width: 100vw;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-columns: auto 1fr;\r\n}\r\n\r\n.header {\r\n    padding: 1.5rem 3rem;\r\n    grid-column: span 2;\r\n    background-color: #304FFE;\r\n    font-size: 3rem;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 1rem;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #ECEFF1;\r\n    padding: 3rem;\r\n}\r\n\r\n.content {\r\n    background-color: #FBFBFB;\r\n}\r\n\r\n.footer {\r\n    padding: 1.25rem 0;\r\n    background-color: #E8EAF6;\r\n    text-align: center;\r\n    grid-column: span 2;\r\n}\r\n\r\n/* Header */\r\n.page-title {\r\n    color: #FBFBFB;\r\n    font-size: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n}\r\n\r\n.page-logo {\r\n    font-size: inherit;\r\n    color: #FBFBFB;\r\n    margin: 0;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar-task,\r\n.sidebar-project {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n}\r\n\r\n.sidebar-task {\r\n    margin: 0 0 2rem;\r\n}\r\n\r\n.sidebar-title,\r\n.sidebar-title {\r\n    font-size: 1.5rem;\r\n    font-family: inherit;\r\n    font-weight: bold;\r\n    margin: 0 0 1rem;\r\n}\r\n\r\n.nav-item {\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    margin: 0 0 1rem;\r\n    border: none;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    padding: 0.5rem 4rem 0.5rem 2rem;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.nav-item:hover,\r\n.nav-item:active,\r\n.nav-item.active {\r\n    background-color: #E0E0E0;\r\n}\r\n\r\n.sidebar-project {\r\n    margin: 2rem 0 0;\r\n}\r\n\r\n.nav-icon {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.new-project-form {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    gap: 1rem;\r\n}\r\n\r\n.form-control {\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    color: #333;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 8px 12px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    transition: border-color 0.3s, box-shadow 0.3s;\r\n}\r\n\r\n.form-control:focus {\r\n    outline: none;\r\n    border-color: #007bff;\r\n    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\r\n}\r\n\r\n.group-btn {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.add-btn,\r\n.cancel-btn {\r\n    display: inline-block;\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1rem;\r\n    overflow: hidden;\r\n    outline: none;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: #FBFBFB;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\r\n    transition: background 0.3s ease, box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.add-btn {\r\n    background-color: #00C853;\r\n}\r\n\r\n.add-btn:hover,\r\n.add-btn:hover:active {\r\n    background-color: #00E676;\r\n    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.cancel-btn {\r\n    background-color: #DD2C00;\r\n}\r\n\r\n.cancel-btn:hover,\r\n.cancel-btn:active {\r\n    background-color: #FF3D00;\r\n    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.action-btn-icon {\r\n    margin: 0 0.5rem 0 0;\r\n}\r\n\r\n/* Content */\r\n.content {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: start;\r\n    padding: 3rem 6rem;\r\n}\r\n\r\n.content-title {\r\n    font-size: 2rem;\r\n    font-family: inherit;\r\n    margin: 0 0 2rem;\r\n}\r\n\r\n.add-task-btn {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    background-color: #ECEFF1;\r\n    padding: 0.75rem 6rem 0.75rem 1rem;\r\n    border: none;\r\n    outline: none;\r\n    margin: 0 0 1rem;\r\n    font-size: 1.25rem;\r\n    text-align: left;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.add-task-btn:hover,\r\n.add-task-btn:active {\r\n    background-color: #E0E0E0;\r\n}\r\n\r\n.add-task-icon {\r\n    margin-right: 1rem;\r\n}\r\n\r\n/* Task */\r\n.task {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    background-color: #ECEFF1;\r\n    color: #332D2D;\r\n    font-size: 1rem;\r\n    padding: 0.5rem 1.5rem;\r\n    margin: 1rem 0;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.task-status {\r\n    margin-right: 2rem;\r\n}\r\n\r\n.task-status-checkbox {\r\n    appearance: none; /* Hide the default look of the checkbox*/\r\n    cursor: pointer;\r\n    width: 1.5rem; \r\n    height: 1.5rem; \r\n    border: 2px solid #304FFE;\r\n    border-radius: 0.5rem; \r\n    transition: border-color 0.3s ease; \r\n}\r\n\r\n.task-status-checkbox:hover {\r\n    background-color: white;\r\n}\r\n\r\n.task-status-checkbox:checked {\r\n    background-color: #304FFE; \r\n    border-color: #304FFE;\r\n}\r\n\r\n.task-body {\r\n    margin-right: auto;\r\n}\r\n\r\n.task-title,\r\n.task-description {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.task-title {\r\n    font-weight: bold;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.task-description {\r\n    font-weight: normal;\r\n}\r\n\r\n.task-action {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-action-date,\r\n.task-action-btn {\r\n    cursor: pointer;\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n    transition: background 0.3s ease;\r\n}\r\n\r\n.task-action-date {\r\n    font-size: 1rem;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.task-action-btn {\r\n    display: inline-block;\r\n    margin-left: 1rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.task-action-date:hover,\r\n.task-action-date:active,\r\n.task-action-btn:hover,\r\n.task-action-btn:active {\r\n    background-color: white;\r\n}\r\n\r\n.task-icon {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* Footer */\r\n.footer-text {\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n    color: #757575;\r\n    font-family: inherit;\r\n}"],"sourceRoot":""}]);
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
function inboxDOM() {
    const addTask = () => {
        const addTaskButton = document.createElement('button');
        const addTaskIcon = document.createElement('i');

        addTaskButton.setAttribute('type', 'button');
        addTaskButton.classList.add('add-task-btn');
        addTaskIcon.classList.add('mdi', 'mdi-plus', 'add-task-icon');

        addTaskButton.appendChild(addTaskIcon);
        addTaskButton.insertAdjacentText('beforeend', 'Add Task');

        return addTaskButton;
    };

    return {
        addTask
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
/* harmony export */   projectDOM: () => (/* binding */ projectDOM)
/* harmony export */ });
function projectDOM() {
    const createNewProjectForm = () => {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const groupButtons = document.createElement('div');
        const addButton = document.createElement('button');
        const addButtonIcon = document.createElement('i');
        const cancelButton = document.createElement('button');
        const cancelButtonIcon = document.createElement('i');

        form.classList.add('new-project-form');
        input.classList.add('form-control');
        groupButtons.classList.add('group-btn');
        addButton.classList.add('add-btn');
        addButtonIcon.classList.add('mdi', 'mdi-send', 'action-btn-icon');
        cancelButton.classList.add('cancel-btn');
        cancelButtonIcon.classList.add('mdi', 'mdi-cancel', 'action-btn-icon');

        input.setAttribute('type', 'text');
        input.setAttribute('id', 'set-name-project');
        input.setAttribute('name', 'name-project');
        input.setAttribute('placeholder', 'Name');
        addButton.setAttribute('type', 'button');
        cancelButton.setAttribute('type', 'button');

        addButton.addEventListener('click', (event) => {
            event.preventDefault();
            setTimeout(() => {
                addNewProject(input.value);
                closeNewProjectForm(form);
            }, 500);
        });

        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            setTimeout(() => closeNewProjectForm(form), 500);
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        form.appendChild(input);
        form.appendChild(groupButtons);
        groupButtons.appendChild(addButton);
        addButton.appendChild(addButtonIcon);
        addButton.insertAdjacentText('beforeend', 'Add');
        groupButtons.appendChild(cancelButton);
        cancelButton.appendChild(cancelButtonIcon);
        cancelButton.insertAdjacentText('beforeend', 'Cancel');

        return form;
    };
    
    const addNewProject = (name) => {
        const sidebarProject = document.querySelector('#sidebar-project');
        const newItems = document.createElement('button');
        const newItemsIcon = document.createElement('i');

        newItems.classList.add('nav-item');
        newItemsIcon.classList.add('mdi', 'mdi-laptop', 'nav-icon');

        newItems.setAttribute('type', 'button');
        newItems.setAttribute('id', `${name.toLowerCase()}-btn`);

        newItems.appendChild(newItemsIcon);
        newItems.insertAdjacentText('beforeend', `${name}`);
        sidebarProject.appendChild(newItems);
    };

    const closeNewProjectForm = (element) => {
        if (element) {
            element.remove();
        }
    };

    return {
        createNewProjectForm
    };
}



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




function UI() {
    const pageContent = document.querySelector('#content');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

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

    const clearPageContent = () => {
        if (pageContent.hasChildNodes()) {
            while (pageContent.firstChild) {
                pageContent.removeChild(pageContent.firstChild);
            }
        }
    };

    const addTitle = (setTitle) => {
        const title = document.createElement('h3');
        title.classList.add('content-title');
        title.textContent = setTitle;

        return title;
    };

    const displayInbox = () => {
        const inbox = (0,_inbox__WEBPACK_IMPORTED_MODULE_1__.inboxDOM)();
        const inboxAddTask = inbox.addTask();

        setActiveSidebarButton('inbox-btn');
        clearPageContent();

        pageContent.appendChild(addTitle('Inbox'));
        pageContent.appendChild(inboxAddTask);
    };

    const displayToday = () => {
        setActiveSidebarButton('today-btn');
        clearPageContent();

        pageContent.appendChild(addTitle('Today'));
    };

    const displayWeek = () => {
        setActiveSidebarButton('week-btn');
        clearPageContent();

        pageContent.appendChild(addTitle('This Week'));
    };

    const displayNewProjectForm = () => {
        const project =  (0,_project__WEBPACK_IMPORTED_MODULE_2__.projectDOM)();
        const newProjectForm = project.createNewProjectForm();
        const sidebarProject = document.querySelector('#sidebar-project');
        
        sidebarProject.appendChild(newProjectForm);
    };

    const addEvents = () => {
        inboxButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayInbox();
            }, 500);
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
        displayInbox,
        addEvents
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    // ui.displayInbox();
    ui.addEvents();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map