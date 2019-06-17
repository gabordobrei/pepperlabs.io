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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/pages/404.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/pages/404.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".logo {\n  position: relative;\n  z-index: 3; }\n\n.notfound {\n  height: 100vh;\n  margin-top: -61px;\n  overflow: hidden;\n  position: relative; }\n  @media only screen and (min-width: 1921px) {\n    .notfound {\n      border-top-right-radius: 9px; } }\n  .notfound__content {\n    margin-top: 61px;\n    padding: 17px; }\n  .notfound__illustration {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    height: 110%;\n    display: inline-block;\n    margin-bottom: -10%;\n    background-image: linear-gradient(to bottom, #64A1C4, #FFA585 50%, #FFB37C 100%);\n    -webkit-transform: translateX(7%);\n            transform: translateX(7%); }\n    @media only screen and (max-width: 800px) {\n      .notfound__illustration {\n        display: none; } }\n\n.title {\n  padding: 0;\n  font-weight: bold;\n  font-family: 'Roboto Slab', serif;\n  color: #EC3A3A;\n  font-size: 11em;\n  margin: 0 0 11px;\n  position: relative;\n  line-height: .7;\n  z-index: 2; }\n\n.subtitle {\n  padding: 0;\n  font-weight: bold;\n  font-family: 'Roboto Slab', serif;\n  color: #2B2B2B;\n  font-size: 4em;\n  margin: 0 0 11px;\n  position: relative;\n  z-index: 2; }\n", "",{"version":3,"sources":["/Users/bencesomogyi/Sites/pepperlabs-landing/src/pages/404.scss","/Users/bencesomogyi/Sites/pepperlabs-landing/src/style/variables.scss"],"names":[],"mappings":"AAEA;EACE,mBAAkB;EAClB,WAAU,EACX;;AAED;EAEE,cAAa;EACb,kBAFiB;EAGjB,iBAAgB;EAChB,mBAAkB,EA2BnB;EAzBC;IAPF;MAQI,6BAA4B,EAwB/B,EAAA;EArBC;IACE,iBAXe;IAYf,cAAa,EACd;EAED;IACE,mBAAkB;IAClB,iBAAgB;IAChB,OAAM;IACN,SAAQ;IACR,UAAS;IACT,aAAY;IACZ,sBAAqB;IACrB,oBAAmB;IACnB,iFAAgF;IAChF,kCAAyB;YAAzB,0BAAyB,EAK1B;IAHC;MAZF;QAaI,cAAa,EAEhB,EAAA;;AAGH;EACE,WAAU;EACV,kBAAiB;EACjB,kCAAiC;EACjC,eC3CW;ED4CX,gBAAe;EACf,iBAAgB;EAChB,mBAAkB;EAClB,gBAAe;EACf,WAAU,EACX;;AAED;EACE,WAAU;EACV,kBAAiB;EACjB,kCAAiC;EACjC,eCzDY;ED0DZ,eAAc;EACd,iBAAgB;EAChB,mBAAkB;EAClB,WAAU,EACX","file":"404.scss","sourcesContent":["@import '../style/variables.scss';\n\n.logo {\n  position: relative;\n  z-index: 3;\n}\n\n.notfound {\n  $navbarSize: 61px;\n  height: 100vh;\n  margin-top: -$navbarSize;\n  overflow: hidden;\n  position: relative;\n\n  @media only screen and (min-width: $maxWidth) {\n    border-top-right-radius: 9px;\n  }\n\n  &__content {\n    margin-top: $navbarSize;\n    padding: 17px;\n  }\n\n  &__illustration {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    height: 110%;\n    display: inline-block;\n    margin-bottom: -10%;\n    background-image: linear-gradient(to bottom, #64A1C4, #FFA585 50%, #FFB37C 100%);\n    transform: translateX(7%);\n\n    @media #{$mobile} {\n      display: none;\n    }\n  }\n}\n\n.title {\n  padding: 0;\n  font-weight: bold;\n  font-family: 'Roboto Slab', serif;\n  color: $red;\n  font-size: 11em;\n  margin: 0 0 11px;\n  position: relative;\n  line-height: .7;\n  z-index: 2;\n}\n\n.subtitle {\n  padding: 0;\n  font-weight: bold;\n  font-family: 'Roboto Slab', serif;\n  color: $gray;\n  font-size: 4em;\n  margin: 0 0 11px;\n  position: relative;\n  z-index: 2;\n}\n","$gray: #2B2B2B;\n$maxWidth: 1921px;\n$red: #EC3A3A;\n\n$mobile: \"only screen and (max-width : 800px)\";\n$tallMobile: \"only screen and (max-width : 823px)\";\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/style/common.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/style/common.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:300,700|Roboto:300,400,700);", ""]);

// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif; }\n  @media only screen and (min-width: 1921px) {\n    body {\n      background-color: #f5f5f5; } }\n\n.site-wrapper {\n  max-width: 1921px;\n  margin: 0 auto; }\n  @media only screen and (min-width: 1921px) {\n    .site-wrapper {\n      background-color: #fff;\n      border-top-left-radius: 9px;\n      border-top-right-radius: 9px;\n      overflow: hidden;\n      margin: 39px auto 0 auto;\n      box-shadow: 0 0 137px rgba(0, 0, 0, 0.3); } }\n\n.button {\n  text-transform: uppercase;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\n  .button--white {\n    border: 3px solid #fff;\n    padding: 5px 17px;\n    color: #fff; }\n    .button--white:hover {\n      color: #2B2B2B;\n      background-color: #fff; }\n\n.logo {\n  padding: 21px 0 0 21px; }\n  .logo__image {\n    vertical-align: middle; }\n  .logo__text {\n    cursor: default;\n    display: inline-block;\n    vertical-align: middle;\n    color: #000;\n    font-family: 'Roboto Slab', serif;\n    padding-left: 11px;\n    font-size: 1.2em; }\n    .logo__text--bw {\n      color: #fff; }\n", "",{"version":3,"sources":["/Users/bencesomogyi/Sites/pepperlabs-landing/src/style/common.scss","/Users/bencesomogyi/Sites/pepperlabs-landing/src/style/variables.scss"],"names":[],"mappings":"AAGA;EACE,UAAS;EACT,kCAAiC,EAKlC;EAHC;IAJF;MAKI,0BAAyB,EAE5B,EAAA;;AAED;EACE,kBCZe;EDaf,eAAc,EAUf;EARC;IAJF;MAKI,uBAAsB;MACtB,4BAA2B;MAC3B,6BAA4B;MAC5B,iBAAgB;MAChB,yBAAwB;MACxB,yCAAuC,EAE1C,EAAA;;AAED;EACE,0BAAyB;EACzB,sBAAqB;EACrB,sBAAqB;EACrB,iBAAgB,EAYjB;EAVC;IACE,uBAAsB;IACtB,kBAAiB;IACjB,YAAW,EAMZ;IATA;MAMG,eCtCQ;MDuCR,uBAAsB,EACvB;;AAIL;EACE,uBAAsB,EAmBvB;EAjBC;IACE,uBAAsB,EACvB;EAED;IACE,gBAAe;IACf,sBAAqB;IACrB,uBAAsB;IACtB,YAAW;IACX,kCAAiC;IACjC,mBAAkB;IAClB,iBAAgB,EAKjB;IAHC;MACE,YAAW,EACZ","file":"common.scss","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,700|Roboto:300,400,700');\n@import './variables.scss';\n\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n\n  @media only screen and (min-width: $maxWidth) {\n    background-color: #f5f5f5;\n  }\n}\n\n.site-wrapper {\n  max-width: $maxWidth;\n  margin: 0 auto;\n\n  @media only screen and (min-width: $maxWidth) {\n    background-color: #fff;\n    border-top-left-radius: 9px;\n    border-top-right-radius: 9px;\n    overflow: hidden;\n    margin: 39px auto 0 auto;\n    box-shadow: 0 0 137px rgba(0, 0, 0, .3);\n  }\n}\n\n.button {\n  text-transform: uppercase;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400;\n\n  &--white {\n    border: 3px solid #fff;\n    padding: 5px 17px;\n    color: #fff;\n\n    &:hover {\n      color: $gray;\n      background-color: #fff;\n    }\n  }\n}\n\n.logo {\n  padding: 21px 0 0 21px;\n\n  &__image {\n    vertical-align: middle;\n  }\n\n  &__text {\n    cursor: default;\n    display: inline-block;\n    vertical-align: middle;\n    color: #000;\n    font-family: 'Roboto Slab', serif;\n    padding-left: 11px;\n    font-size: 1.2em;\n\n    &--bw {\n      color: #fff;\n    }\n  }\n}\n\n","$gray: #2B2B2B;\n$maxWidth: 1921px;\n$red: #EC3A3A;\n\n$mobile: \"only screen and (max-width : 800px)\";\n$tallMobile: \"only screen and (max-width : 823px)\";\n"],"sourceRoot":""}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/pages/404.scss":
/*!****************************!*\
  !*** ./src/pages/404.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./404.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/pages/404.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/style/common.scss":
/*!*******************************!*\
  !*** ./src/style/common.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./common.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/style/common.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/style/common.scss ./src/pages/404.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/style/common.scss */"./src/style/common.scss");
module.exports = __webpack_require__(/*! ./src/pages/404.scss */"./src/pages/404.scss");


/***/ })

/******/ });
//# sourceMappingURL=404.a5e133e1eefa943faf21.js.map