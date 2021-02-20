module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "U3PU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return moviesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectedMovie; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XGOH");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
 // types

const moviesState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'movies',
  default: {
    loading: undefined,
    data: [],
    error: undefined
  }
});
const selectedMovie = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'current-movie',
  default: {
    loading: false,
    data: undefined,
    error: undefined
  }
});

/***/ }),

/***/ "XGOH":
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__("XGOH");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./state/atoms/movie/index.ts
var movie = __webpack_require__("U3PU");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./config/index.ts
const config = {
  BASE_URL: "https://wookie.codesubmit.io"
};
// CONCATENATED MODULE: ./service/movie.service.ts

 // types

const MovieService = {
  get: async searchTerm => {
    const response = await external_axios_default.a.get(`${config.BASE_URL}/movies?q=${searchTerm}`, {
      // an intercpetor should be used for larger applications
      headers: {
        'Authorization': 'Bearer Wookie2019'
      }
    });
    if (!response) throw Error("Cannot fetch Movies");
    return response.data.movies;
  }
};
// CONCATENATED MODULE: ./components/search-input/SearchInput.tsx





 // state atoms

 // service


function SearchInput() {
  const [value, setValue] = Object(external_react_["useState"])("");
  const [movies, setMovies] = Object(external_recoil_["useRecoilState"])(movie["a" /* moviesState */]); // debounce getMovies, to avoid calling the api on each input

  const getMoviesDebounced = Object(external_react_["useRef"])(Object(external_lodash_["debounce"])(getMovies, 1000)).current;

  async function getMovies(searchTerm) {
    setMovies({
      data: [],
      loading: true,
      error: undefined
    });
    const data = await MovieService.get(searchTerm);
    setMovies({
      data,
      loading: false,
      error: undefined
    });
  }

  Object(external_react_["useEffect"])(() => {
    setMovies({
      data: [],
      loading: true,
      error: undefined
    });
    getMoviesDebounced(value);
  }, [value]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "relative flex w-full flex-wrap items-stretch mb-3"
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    placeholder: "Search Movies",
    className: "px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10",
    value: value,
    onChange: e => {
      setValue(e.target.value);
    }
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
  }, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-user"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faSearch"]
  }))));
}
// CONCATENATED MODULE: ./components/header/Header.tsx
 // components


function Header({
  heading
}) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex lg:flex-row md:flex-col flex-col items-center justify-between mt-2 pl-5 pr-8 mb-3 w-full"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "justify-self-end"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "text-3xl"
  }, heading)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "justify-self-end lg:mt-2 md:mt-5 mt-5"
  }, /*#__PURE__*/external_react_default.a.createElement(SearchInput, null)));
}
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// CONCATENATED MODULE: ./pages/_app.tsx

 // components




function WookieApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/external_react_default.a.createElement(external_recoil_["RecoilRoot"], null, /*#__PURE__*/external_react_default.a.createElement(Header, {
    heading: "Wookies Movies"
  }), /*#__PURE__*/external_react_default.a.createElement(Component, pageProps));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (WookieApp);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });