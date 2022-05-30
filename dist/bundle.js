/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 705:
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

/***/ 476:
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

/***/ 890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"Nunito\"), url(https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTk3iazbXWjgevT5.woff) format(\"woff\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  font-family: Nunito, sans-serif;\n  background: #004980;\n}\n\n.box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 46px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 480px;\n  height: 459px;\n  background: #c2f5ff;\n  border-radius: 12px;\n}\n\n.box__title {\n  width: 208px;\n  color: #004980;\n  font-size: 40px;\n  line-height: 48px;\n  text-align: center;\n}\n\n.box__number {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 24px;\n}\n\n.box__button {\n  width: 246px;\n  height: 50px;\n  margin-top: 20px;\n  color: #fff;\n  font-size: 24px;\n  font-family: Nunito, sans-serif;\n  background: #7ac100;\n  border-width: inherit;\n  border-radius: 12px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.box__button:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\n.number {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 98px;\n  height: 98px;\n  background: #fff;\n  border-radius: 12px;\n}\n\n.number:hover {\n  background: #0080c1;\n}\n\n.number:hover span {\n  color: #fff;\n}\n\n.number__radio {\n  display: none;\n}\n\n.number__text {\n  color: #0080c1;\n  font-size: 64px;\n  line-height: 72px;\n}\n\n.number input:checked + span {\n  color: #fff;\n}\n\n.timer {\n  color: #fff;\n}\n\n.timer__unit {\n  padding-left: 50px;\n  font-size: 16px;\n  line-height: 32px;\n}\n\n.timer__time {\n  font-size: 64px;\n  line-height: 55px;\n}\n\n.card-field {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-column-gap: 10px;\n          column-gap: 10px;\n  row-gap: 4px;\n}\n\n.card {\n  position: relative;\n  width: 95px;\n  height: 138.5px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.face,\n.back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.toggle {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.toggle-again {\n  -webkit-transform: rotateY(360deg);\n          transform: rotateY(360deg);\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #004980;\n  opacity: 0.9;\n}\n\n.popup__content {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n.popup__box {\n  gap: 2px;\n  width: 350px;\n  height: 360px;\n  -webkit-transform: translate(0, -140%);\n          transform: translate(0, -140%);\n}\n\n.popup__box-up {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transition: all 0.8s ease-in-out;\n  transition: all 0.8s ease-in-out;\n}\n\n.popup__img {\n  width: 96px;\n  height: 96px;\n}\n\n.popup__title {\n  width: inherit;\n  font-size: 36px;\n  line-height: 34px;\n}\n\n.popup__title-time {\n  margin-top: 20px;\n  font-size: 20px;\n  line-height: 28px;\n}\n\n.popup__time {\n  font-size: 60px;\n  line-height: 70px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 379:
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

/***/ 569:
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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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

/***/ 589:
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css
var style = __webpack_require__(890);
;// CONCATENATED MODULE: ./src/styles/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const styles_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/main_page.ts
function startGame() {
    function renderMainScreen() {
        var formField = document.createElement('form');
        formField.classList.add('box');
        formField.action = '#';
        document.body.append(formField);
        var title = document.createElement('h1');
        title.classList.add('box__title');
        title.textContent = 'Выбери сложность';
        formField.append(title);
        var levels = document.createElement('div');
        levels.classList.add('box__number');
        formField.append(levels);
        var labelOne = document.createElement('label');
        labelOne.classList.add('number');
        levels.append(labelOne);
        var inputOne = document.createElement('input');
        inputOne.classList.add('number__radio');
        inputOne.type = 'radio';
        inputOne.value = '1';
        labelOne.append(inputOne);
        var spanOne = document.createElement('span');
        spanOne.classList.add('number__text');
        spanOne.textContent = '1';
        labelOne.append(spanOne);
        var labelTwo = document.createElement('label');
        labelTwo.classList.add('number');
        levels.append(labelTwo);
        var inputTwo = document.createElement('input');
        inputTwo.classList.add('number__radio');
        inputTwo.type = 'radio';
        inputTwo.value = '2';
        labelTwo.append(inputTwo);
        var spanTwo = document.createElement('span');
        spanTwo.classList.add('number__text');
        spanTwo.textContent = '2';
        labelTwo.append(spanTwo);
        var labelThree = document.createElement('label');
        labelThree.classList.add('number');
        levels.append(labelThree);
        var inputThree = document.createElement('input');
        inputThree.classList.add('number__radio');
        inputThree.type = 'radio';
        inputThree.value = '3';
        labelThree.append(inputThree);
        var spanThree = document.createElement('span');
        spanThree.classList.add('number__text');
        spanThree.textContent = '3';
        labelThree.append(spanThree);
        var button = document.createElement('button');
        button.textContent = 'Старт';
        button.classList.add('box__button');
        formField.append(button);
        var radioAll = document.querySelectorAll('.number__radio');
        radioAll.forEach(function (radio) {
            radio.addEventListener('click', function () {
                if (radio.checked) {
                    var parent_1 = radio.parentElement;
                    parent_1.style.background = '#0080C1';
                }
            });
        });
        formField.addEventListener('submit', function (event) {
            event.preventDefault();
            radioAll.forEach(function (radio) {
                if (radio.checked && radio.value === '1') {
                    window.application.renderScreen('level-1');
                }
                else if (radio.checked && radio.value === '2') {
                    window.application.renderScreen('level-2');
                }
                else if (radio.checked && radio.value === '3') {
                    window.application.renderScreen('level-3');
                }
            });
        });
    }
    ;
    window.application.screens['main-page'] = renderMainScreen;
}

;// CONCATENATED MODULE: ./src/generate.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cardData = [
    { imgSrc: './src/img/6-Clubs.png', name: '6-Clubs' },
    { imgSrc: './src/img/6-Diamonds.png', name: '6-Diamonds' },
    { imgSrc: './src/img/6-Hearts.png', name: '6-Hearts' },
    { imgSrc: './src/img/6-Spades.png', name: '6-Spades' },
    { imgSrc: './src/img/7-Clubs.png', name: '7-Clubs' },
    { imgSrc: './src/img/7-Diamonds.png', name: '7-Diamonds' },
    { imgSrc: './src/img/7-Hearts.png', name: '7-Hearts' },
    { imgSrc: './src/img/7-Spades.png', name: '7-Spades' },
    { imgSrc: './src/img/8-Clubs.png', name: '8-Clubs' },
    { imgSrc: './src/img/8-Diamonds.png', name: '8-Diamonds' },
    { imgSrc: './src/img/8-Hearts.png', name: '8-Hearts' },
    { imgSrc: './src/img/8-Spades.png', name: '8-Spades' },
    { imgSrc: './src/img/9-Clubs.png', name: '9-Clubs' },
    { imgSrc: './src/img/9-Diamonds.png', name: '9-Diamonds' },
    { imgSrc: './src/img/9-Hearts.png', name: '9-Hearts' },
    { imgSrc: './src/img/9-Spades.png', name: '9-Spades' },
    { imgSrc: './src/img/10-Clubs.png', name: '10-Clubs' },
    { imgSrc: './src/img/10-Diamonds.png', name: '10-Diamonds' },
    { imgSrc: './src/img/10-Hearts.png', name: '10-Hearts' },
    { imgSrc: './src/img/10-Spades.png', name: '10-Spades' },
    { imgSrc: './src/img/Ace-Clubs.png', name: 'Ace-Clubs' },
    { imgSrc: './src/img/Ace-Diamonds.png', name: 'Ace-Diamonds' },
    { imgSrc: './src/img/Ace-Hearts.png', name: 'Ace-Hearts' },
    { imgSrc: './src/img/Ace-Spades.png', name: 'Ace-Spades' },
    { imgSrc: './src/img/Jack-Clubs.png', name: 'Jack-Clubs' },
    { imgSrc: './src/img/Jack-Diamonds.png', name: 'Jack-Diamonds' },
    { imgSrc: './src/img/Jack-Hearts.png', name: 'Jack-Hearts' },
    { imgSrc: './src/img/Jack-Spades.png', name: 'Jack-Spades' },
    { imgSrc: './src/img/King-Clubs.png', name: 'King-Clubs' },
    { imgSrc: './src/img/King-Diamonds.png', name: 'King-Diamonds' },
    { imgSrc: './src/img/King-Hearts.png', name: 'King-Hearts' },
    { imgSrc: './src/img/King-Spades.png', name: 'King-Spades' },
    { imgSrc: './src/img/Queen-Clubs.png', name: 'Queen-Clubs' },
    { imgSrc: './src/img/Queen-Diamonds.png', name: 'Queen-Diamonds' },
    { imgSrc: './src/img/Queen-Hearts.png', name: 'Queen-Hearts' },
    { imgSrc: './src/img/Queen-Spades.png', name: 'Queen-Spades' },
];
var getRandomElements = function (sourceArray, neededElements) {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
        var index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray.splice(index, 1)[0]);
    }
    return __spreadArray(__spreadArray([], result, true), result, true);
};
var shuffle = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
};

;// CONCATENATED MODULE: ./src/popup.ts
function renderPopup(src, message) {
    setTimeout(function () {
        var popup = document.createElement('div');
        var popupContent = document.createElement('div');
        var popupBox = document.createElement('div');
        document.body.append(popup);
        popup.classList.add('popup');
        document.body.append(popupContent);
        popupContent.classList.add('popup__content');
        popupContent.append(popupBox);
        popupBox.classList.add('box');
        popupBox.classList.add('popup__box');
        setTimeout(function () {
            popupBox.classList.add('popup__box-up');
        }, 200);
        var popupImg = document.createElement('img');
        popupImg.src = src;
        popupImg.classList.add('popup__img');
        popupBox.append(popupImg);
        var title = document.createElement('h1');
        title.classList.add('box__title');
        title.classList.add('popup__title');
        title.textContent = message;
        popupBox.append(title);
        var titleTime = document.createElement('p');
        titleTime.classList.add('popup__title-time');
        titleTime.textContent = 'Затраченное время:';
        popupBox.append(titleTime);
        var time = document.createElement('span');
        time.classList.add('popup__time');
        time.textContent = window.application.time;
        popupBox.append(time);
        var button = document.createElement('button');
        button.textContent = 'Играть снова';
        button.classList.add('box__button');
        popupBox.append(button);
        button.onclick = function () {
            window.application.renderScreen('main-page');
        };
    }, 300);
}
;

;// CONCATENATED MODULE: ./src/level_1.ts


function startLevelOne() {
    function renderLevelOneScreen() {
        document.body.style.cssText = 'flex-direction: column; gap: 45px;';
        var topField = document.createElement('div');
        topField.classList.add('top-field');
        topField.style.cssText = 'display: flex; align-items: center; gap: 50px;';
        var timer = document.createElement('div');
        timer.classList.add('timer');
        var timerMin = document.createElement('span');
        timerMin.textContent = 'min';
        timerMin.classList.add('timer__unit');
        var timerSek = document.createElement('span');
        timerSek.textContent = 'sec';
        timerSek.classList.add('timer__unit');
        var time = document.createElement('p');
        time.classList.add('timer__time');
        timer.append(timerMin);
        timer.append(timerSek);
        timer.append(time);
        var sec = 0;
        var min = 0;
        var indTime;
        function tick() {
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
            }
        }
        function addTime() {
            tick();
            time.textContent =
                (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
            timerTime();
        }
        function timerTime() {
            indTime = window.setTimeout(addTime, 1000);
        }
        addTime();
        var button = document.createElement('button');
        button.textContent = 'Начать заново';
        button.classList.add('box__button');
        button.onclick = function () {
            window.application.renderScreen('main-page');
        };
        topField.append(timer);
        topField.append(button);
        var cardField = document.createElement('div');
        cardField.classList.add('card-field');
        cardField.style.cssText = 'width: 350px;';
        var randomData = getRandomElements(cardData, 3);
        shuffle(randomData);
        randomData.forEach(function (item) {
            var card = document.createElement('div');
            var face = document.createElement('div');
            var back = document.createElement('div');
            var faceImg = document.createElement('img');
            var backImg = document.createElement('img');
            card.classList.add('card');
            face.classList.add('face');
            back.classList.add('back');
            faceImg.classList.add('face-img');
            backImg.classList.add('back-img');
            faceImg.src = item.imgSrc;
            backImg.src = 'src/img/card.png';
            cardField.append(card);
            card.append(face);
            card.append(back);
            face.append(faceImg);
            back.append(backImg);
            setTimeout(function () {
                face.classList.add('toggle');
                back.classList.add('toggle-again');
            }, 5000);
            window.application.playerMoves = 6;
            card.addEventListener('click', function () {
                window.application.playerMoves--;
                face.classList.remove('toggle');
                back.classList.remove('toggle-again');
                window.application.cards.push(item.name);
                if (window.application.cards.length === 2) {
                    if (window.application.cards[0] !== window.application.cards[1]) {
                        clearTimeout(indTime);
                        window.application.time = time.textContent;
                        setTimeout(function () {
                            renderPopup('src/img/lose.png', 'Вы проиграли!');
                        }, 1000);
                    }
                    else if (window.application.playerMoves === 0) {
                        clearTimeout(indTime);
                        window.application.time = time.textContent;
                        setTimeout(function () {
                            renderPopup('src/img/win.png', 'Вы выиграли!');
                        }, 1000);
                    }
                    ;
                    window.application.cards.length = 0;
                }
                ;
            });
        });
        document.body.append(topField);
        document.body.append(cardField);
    }
    window.application.screens['level-1'] = renderLevelOneScreen;
}

;// CONCATENATED MODULE: ./src/level_2.ts


function startLevelTwo() {
    function renderLevelTwoScreen() {
        document.body.style.cssText = 'flex-direction: column; gap: 35px;';
        var topField = document.createElement('div');
        topField.classList.add('top-field');
        topField.style.cssText = 'display: flex; align-items: center; gap: 50px;';
        var timer = document.createElement('div');
        timer.classList.add('timer');
        var timerMin = document.createElement('span');
        timerMin.textContent = 'min';
        timerMin.classList.add('timer__unit');
        var timerSek = document.createElement('span');
        timerSek.textContent = 'sec';
        timerSek.classList.add('timer__unit');
        var time = document.createElement('p');
        time.classList.add('timer__time');
        timer.append(timerMin);
        timer.append(timerSek);
        timer.append(time);
        var sec = 0;
        var min = 0;
        var indTime;
        function tick() {
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
            }
        }
        function addTime() {
            tick();
            time.textContent =
                (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
            timerTime();
        }
        function timerTime() {
            indTime = window.setTimeout(addTime, 1000);
        }
        addTime();
        var button = document.createElement('button');
        button.textContent = 'Начать заново';
        button.classList.add('box__button');
        button.onclick = function () {
            window.application.renderScreen('main-page');
        };
        topField.append(timer);
        topField.append(button);
        var cardField = document.createElement('div');
        cardField.classList.add('card-field');
        cardField.style.cssText = 'width: 440px;';
        var randomData = getRandomElements(cardData, 6);
        shuffle(randomData);
        randomData.forEach(function (item) {
            var card = document.createElement('div');
            var face = document.createElement('div');
            var back = document.createElement('div');
            var faceImg = document.createElement('img');
            var backImg = document.createElement('img');
            card.classList.add('card');
            face.classList.add('face');
            back.classList.add('back');
            faceImg.classList.add('face-img');
            backImg.classList.add('back-img');
            faceImg.src = item.imgSrc;
            backImg.src = 'src/img/card.png';
            cardField.append(card);
            card.append(face);
            card.append(back);
            face.append(faceImg);
            back.append(backImg);
            setTimeout(function () {
                face.classList.add('toggle');
                back.classList.add('toggle-again');
            }, 5000);
            window.application.playerMoves = 12;
            card.addEventListener('click', function () {
                window.application.playerMoves--;
                face.classList.remove('toggle');
                back.classList.remove('toggle-again');
                window.application.cards.push(item.name);
                if (window.application.cards.length === 2) {
                    if (window.application.cards[0] !== window.application.cards[1]) {
                        clearTimeout(indTime);
                        window.application.time = time.textContent;
                        setTimeout(function () {
                            renderPopup('src/img/lose.png', 'Вы проиграли!');
                        }, 1000);
                    }
                    else if (window.application.playerMoves === 0) {
                        clearTimeout(indTime);
                        window.application.time = time.textContent;
                        setTimeout(function () {
                            renderPopup('src/img/win.png', 'Вы выиграли!');
                        }, 1000);
                    }
                    ;
                    window.application.cards.length = 0;
                }
                ;
            });
        });
        document.body.append(topField);
        document.body.append(cardField);
    }
    window.application.screens['level-2'] = renderLevelTwoScreen;
}

;// CONCATENATED MODULE: ./src/level_3.ts


function startLevelThree() {
    function renderLevelThreeScreen() {
        document.body.style.cssText = 'flex-direction: column; gap: 35px;';
        var topField = document.createElement('div');
        topField.classList.add('top-field');
        topField.style.cssText = 'display: flex; align-items: center; gap: 170px;';
        var timer = document.createElement('div');
        timer.classList.add('timer');
        var timerMin = document.createElement('span');
        timerMin.textContent = 'min';
        timerMin.classList.add('timer__unit');
        var timerSek = document.createElement('span');
        timerSek.textContent = 'sec';
        timerSek.classList.add('timer__unit');
        var time = document.createElement('p');
        time.classList.add('timer__time');
        timer.append(timerMin);
        timer.append(timerSek);
        timer.append(time);
        var sec = 0;
        var min = 0;
        var indTime;
        function tick() {
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
            }
        }
        function addTime() {
            tick();
            time.textContent =
                (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
            timerTime();
        }
        function timerTime() {
            indTime = window.setTimeout(addTime, 1000);
        }
        addTime();
        var button = document.createElement('button');
        button.textContent = 'Начать заново';
        button.classList.add('box__button');
        button.onclick = function () {
            window.application.renderScreen('main-page');
        };
        topField.append(timer);
        topField.append(button);
        var cardField = document.createElement('div');
        cardField.classList.add('card-field');
        cardField.style.cssText = 'width: 624px;';
        var randomData = getRandomElements(cardData, 9);
        shuffle(randomData);
        randomData.forEach(function (item) {
            var card = document.createElement('div');
            var face = document.createElement('div');
            var back = document.createElement('div');
            var faceImg = document.createElement('img');
            var backImg = document.createElement('img');
            card.classList.add('card');
            face.classList.add('face');
            back.classList.add('back');
            faceImg.classList.add('face-img');
            backImg.classList.add('back-img');
            faceImg.src = item.imgSrc;
            backImg.src = 'src/img/card.png';
            cardField.append(card);
            card.append(face);
            card.append(back);
            face.append(faceImg);
            back.append(backImg);
            setTimeout(function () {
                face.classList.add('toggle');
                back.classList.add('toggle-again');
            }, 5000);
            window.application.playerMoves = 18;
            card.addEventListener('click', function () {
                window.application.playerMoves--;
                face.classList.remove('toggle');
                back.classList.remove('toggle-again');
                window.application.cards.push(item.name);
                if (window.application.cards.length === 2) {
                    if (window.application.cards[0] !== window.application.cards[1]) {
                        clearTimeout(indTime);
                        window.application.time = time.textContent;
                        setTimeout(function () {
                            renderPopup('src/img/lose.png', 'Вы проиграли!');
                        }, 1000);
                    }
                    else if (window.application.playerMoves === 0) {
                        clearTimeout(indTime);
                        window.application.time = time.textContent;
                        setTimeout(function () {
                            renderPopup('src/img/win.png', 'Вы выиграли!');
                        }, 1000);
                    }
                    ;
                    window.application.cards.length = 0;
                }
                ;
            });
        });
        document.body.append(topField);
        document.body.append(cardField);
    }
    window.application.screens['level-3'] = renderLevelThreeScreen;
}

;// CONCATENATED MODULE: ./src/index.js





window.application = {
  screens: {},
  renderScreen: function (screenName) {
    document.body.textContent = '';
    this.screens[`${screenName}`]();
  },
  cards: []
};
startGame();
startLevelOne();
startLevelTwo();
startLevelThree();
document.addEventListener('DOMContentLoaded', () => {
  window.application.renderScreen('main-page');
});
})();

/******/ })()
;