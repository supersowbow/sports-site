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
/******/ 	__webpack_require__.p = "/home/superbow/Projects/sports-site/src/server/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../client/node_modules/font-awesome/css/font-awesome.min.css":
/*!********************************************************************!*\
  !*** ../client/node_modules/font-awesome/css/font-awesome.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/App.css":
/*!*****************************!*\
  !*** ../client/src/App.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/App.js":
/*!****************************!*\
  !*** ../client/src/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SidebarContainer_sidebarContainer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SidebarContainer/sidebarContainer.jsx */ "../client/src/components/SidebarContainer/sidebarContainer.jsx");
/* harmony import */ var _components_MainContainer_mainContainer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainContainer/mainContainer.jsx */ "../client/src/components/MainContainer/mainContainer.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "../client/src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseSidebar", function (e) {
      e.preventDefault(); // store viewport width in variable

      var viewWidth = window.innerWidth >= 900 ? true : false; // if viewport width is >= 900px, sidebar should not close

      if (viewWidth) {
        return;
      } else {
        // else (the screen is small), close sidebar
        // Adds a smooth transition to the Sidebar component while it's exiting
        document.getElementById("sidebar-container").style.width = "0px";
        document.getElementById("mainContainer").style.marginLeft = "0px";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleIncrement", function (e) {
      e.preventDefault();
      var kids = _this.state.numOfKids;
      _this.setState = {
        numOfKids: kids++
      };
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "App-Component",
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SidebarContainer_sidebarContainer_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        closeSidebar: this.handleCloseSidebar
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainContainer_mainContainer_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        incrementButton: this.handleIncrement
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "../client/src/components/About/about.css":
/*!************************************************!*\
  !*** ../client/src/components/About/about.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/About/about.jsx":
/*!************************************************!*\
  !*** ../client/src/components/About/about.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.css */ "../client/src/components/About/about.css");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;




var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-content-container",
    id: "about",
    ref: _this.aboutRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Every year in Metarie, New Orleans, a basketball camp is hosted to help local youth practice the basics of basketball."));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "../client/src/components/Articles/articles.css":
/*!******************************************************!*\
  !*** ../client/src/components/Articles/articles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Articles/articles.jsx":
/*!******************************************************!*\
  !*** ../client/src/components/Articles/articles.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _articles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.css */ "../client/src/components/Articles/articles.css");
/* harmony import */ var _articles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_articles_css__WEBPACK_IMPORTED_MODULE_1__);



var Articles = function Articles() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "articles-content-container",
    id: "articles"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Articles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Here is an article you can checkout:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "some article link..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

/***/ "../client/src/components/Footer/footer.css":
/*!**************************************************!*\
  !*** ../client/src/components/Footer/footer.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Footer/footer.jsx":
/*!**************************************************!*\
  !*** ../client/src/components/Footer/footer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "../client/src/components/Footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "links-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Links"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Testimonials"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Articles"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Connect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Facebook")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../client/src/components/Header/header.css":
/*!**************************************************!*\
  !*** ../client/src/components/Header/header.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Header/header.jsx":
/*!**************************************************!*\
  !*** ../client/src/components/Header/header.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ "../client/src/components/Header/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Header-Component",
    className: "header-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "burger-button",
    id: "burger",
    onClick: props.openSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-bars"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-title-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header-title-1"
  }, "Pat Gavin's"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "header-title-2"
  }, "Basketball Fundamentals Camp")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "../client/src/components/Home/home.css":
/*!**********************************************!*\
  !*** ../client/src/components/Home/home.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Home/home.jsx":
/*!**********************************************!*\
  !*** ../client/src/components/Home/home.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "../client/src/components/Home/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_1__);



var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-content-container",
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../img/homeLogo_480w.png */ "../client/src/img/homeLogo_480w.png"),
    className: "home-logo",
    alt: "Pat Gavin's Basketball Fundamentals Camp Logo"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "../client/src/components/MainContainer/mainContainer.css":
/*!****************************************************************!*\
  !*** ../client/src/components/MainContainer/mainContainer.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/MainContainer/mainContainer.jsx":
/*!****************************************************************!*\
  !*** ../client/src/components/MainContainer/mainContainer.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/header.jsx */ "../client/src/components/Header/header.jsx");
/* harmony import */ var _Home_home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home/home.jsx */ "../client/src/components/Home/home.jsx");
/* harmony import */ var _About_about_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../About/about.jsx */ "../client/src/components/About/about.jsx");
/* harmony import */ var _Testimonial_testimonial_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Testimonial/testimonial.jsx */ "../client/src/components/Testimonial/testimonial.jsx");
/* harmony import */ var _Signup_signup_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Signup/signup.jsx */ "../client/src/components/Signup/signup.jsx");
/* harmony import */ var _Articles_articles_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Articles/articles.jsx */ "../client/src/components/Articles/articles.jsx");
/* harmony import */ var _Footer_footer_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Footer/footer.jsx */ "../client/src/components/Footer/footer.jsx");
/* harmony import */ var _mainContainer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainContainer.css */ "../client/src/components/MainContainer/mainContainer.css");
/* harmony import */ var _mainContainer_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mainContainer_css__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var MainContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(MainContainer, _Component);

  function MainContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpenSidebar", function (e) {
      e.preventDefault(); // Adds a smooth transition to the Sidebar component while it's entering

      document.getElementById("sidebar-container").style.width = "250px";
      document.getElementById("mainContainer").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    });

    return _this;
  }

  _createClass(MainContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "mainContainer",
        className: "main-container toggle-closed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        openSidebar: this.handleOpenSidebar
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _Home_home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/about",
        component: _About_about_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/testimonial",
        component: _Testimonial_testimonial_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/signup",
        component: _Signup_signup_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/articles",
        component: _Articles_articles_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_footer_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ }),

/***/ "../client/src/components/Sidebar/sidebar.css":
/*!****************************************************!*\
  !*** ../client/src/components/Sidebar/sidebar.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Sidebar/sidebar.jsx":
/*!****************************************************!*\
  !*** ../client/src/components/Sidebar/sidebar.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "../client/node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.css */ "../client/src/components/Sidebar/sidebar.css");
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sidebar_css__WEBPACK_IMPORTED_MODULE_3__);





var Sidebar = function Sidebar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Sidebar-Component",
    className: "sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../img/sidebar_logo.png */ "../client/src/img/sidebar_logo.png"),
    alt: "Pat Gavin's Basketball Fundamentals Camp Logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "cross-button",
    className: "cross",
    onClick: props.closeSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-times"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hr"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-links-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "home-sidebar-item",
    onClick: props.closeSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "about-sidebar-item",
    onClick: props.closeSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "testimonial-sidebar-item",
    onClick: props.closeSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/testimonial"
  }, "Testimonial")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "signup-sidebar-item",
    onClick: props.closeSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/signup"
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "articles-sidebar-item",
    onClick: props.closeSidebar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/articles"
  }, "Articles"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "../client/src/components/SidebarContainer/sidebarContainer.css":
/*!**********************************************************************!*\
  !*** ../client/src/components/SidebarContainer/sidebarContainer.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/SidebarContainer/sidebarContainer.jsx":
/*!**********************************************************************!*\
  !*** ../client/src/components/SidebarContainer/sidebarContainer.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sidebar/sidebar.jsx */ "../client/src/components/Sidebar/sidebar.jsx");
/* harmony import */ var _sidebarContainer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarContainer.css */ "../client/src/components/SidebarContainer/sidebarContainer.css");
/* harmony import */ var _sidebarContainer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sidebarContainer_css__WEBPACK_IMPORTED_MODULE_2__);




var SidebarContainer = function SidebarContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar-container",
    className: "sidebar-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeSidebar: props.closeSidebar
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarContainer);

/***/ }),

/***/ "../client/src/components/Signup/child.css":
/*!*************************************************!*\
  !*** ../client/src/components/Signup/child.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Signup/child.jsx":
/*!*************************************************!*\
  !*** ../client/src/components/Signup/child.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _child_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child.css */ "../client/src/components/Signup/child.css");
/* harmony import */ var _child_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_child_css__WEBPACK_IMPORTED_MODULE_1__);



var Child = function Child(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "child-entry-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "note"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Add/ Remove a child.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-remove-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "increment"
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "decrement"
  }, "x")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "child-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "child_name",
    required: true,
    className: "child-name",
    type: "text",
    id: "child_name",
    onChange: props.handleChildChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "child_name",
    className: "child-label"
  }, "Child's Full Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "select-buttons-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "age",
    required: true,
    className: "ages",
    id: "age",
    value: props.ageValue,
    onChange: props.handleChildChange
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    disabled: true
  }, "Age"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "7"
  }, "7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "8"
  }, "8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "9"
  }, "9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "10"
  }, "10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "11"
  }, "11"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "12"
  }, "12")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "shirt-size",
    required: true,
    className: "shirt-sizes",
    id: "shirt_size",
    value: props.shirtValue,
    onChange: props.handleChildChange
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    disabled: true
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "small"
  }, "S"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "medium"
  }, "M"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "large"
  }, "L"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Child);

/***/ }),

/***/ "../client/src/components/Signup/signup.css":
/*!**************************************************!*\
  !*** ../client/src/components/Signup/signup.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Signup/signup.jsx":
/*!**************************************************!*\
  !*** ../client/src/components/Signup/signup.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _child_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child.jsx */ "../client/src/components/Signup/child.jsx");
/* harmony import */ var _signup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.css */ "../client/src/components/Signup/signup.css");
/* harmony import */ var _signup_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signup_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //import SubmissionModal from './submissionModal.jsx';



var SignupForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SignupForm, _Component);

  function SignupForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SignupForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SignupForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      form: {
        guard_name: "",
        guard_email: "",
        guard_phone: "",
        children: [{
          child_name: "",
          age: "",
          shirt_size: ""
        }]
      },
      selectValues: {
        ageValue: "ages",
        shirtValue: "shirts"
      },
      index: 0,
      nameCompleted: false,
      ageCompleted: false,
      shirtCompleted: false,
      submitted: false,
      childFields: 1 // Create list items depending on number within childFields' state

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createChildListArr", function () {
      var numOfChildren = _this.state.childFields;
      var childListArray = [];

      if (numOfChildren < 4) {
        for (var i = 0; i < numOfChildren; i++) {
          childListArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: i
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_child_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            handleChildChange: _this.handleChildFieldChange,
            ageValue: _this.state.ageValue,
            shirtValue: _this.state.shirtValue
          })));
        }

        console.log(childListArray);
        return childListArray;
      } else {
        console.log("too many chilren, chile");
      } // do {
      //     if (numOfChildren < 4) {
      //         // increment counter variable
      //         i++;
      //         // return li tags
      //         return(
      //             <li>
      //                 <Child handleChildChange={this.handleChildFieldChange}
      //                     ageValue={this.state.ageValue}
      //                     shirtValue={this.state.shirtValue} />
      //             </li>
      //         ); 
      //     } else {
      //         console.log("too many kids, chile...");
      //     }
      // } while (i < numOfChildren);

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateFormState", function (field, input) {
      // Store form data in a variable
      var FormData = _objectSpread({}, _this.state.form); // Update the the form field's state


      FormData[field] = input;

      _this.setState({
        form: FormData
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGuard_Name_Change", function (e) {
      var g_name = "guard_name";
      var user_input = e.target.value;

      _this.updateFormState(g_name, user_input);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGuard_Email_Change", function (e) {
      var g_email = "guard_email";
      var user_input = e.target.value;

      _this.updateFormState(g_email, user_input);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGuard_Phone_Change", function (e) {
      var g_phone = "guard_phone";
      var user_input = e.target.value;

      _this.updateFormState(g_phone, user_input);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChildFieldChange", function (e) {
      // Assign children array, user input, 
      // selected html tag, and index in variables
      var ChildrenArray = _toConsumableArray(_this.state.form.children);

      var user_input = e.target.value;
      var id = e.target.id;
      var i = _this.state.index; // loop thru array

      ChildrenArray.forEach(function () {
        // check to see which field is being updated
        switch (id) {
          case "child_name":
            // update the correct value in object
            ChildrenArray[i].child_name = user_input; // update the field's state

            _this.setState({
              children: ChildrenArray,
              nameCompleted: true
            });

            break;

          case "age":
            // update the correct value in object
            ChildrenArray[i].age = user_input; // update the field's state

            _this.setState({
              children: ChildrenArray,
              ageCompleted: true
            });

            break;

          case "shirt_size":
            // update the correct value in object
            ChildrenArray[i].shirt_size = user_input; // update the field's state

            _this.setState({
              children: ChildrenArray,
              shirtCompleted: true
            });

            break;

          default:
            break;
        }
      });
      var nameCompleted = _this.state.nameCompleted;
      var ageCompleted = _this.state.ageCompleted;
      var shirtCompleted = _this.state.shirtCompleted;

      if (nameCompleted && ageCompleted && shirtCompleted) {
        // if all the fields are complete, increment the index
        _this.setState({
          index: i++,
          nameCompleted: false,
          ageCompleted: false,
          shirtCompleted: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFormSubmit", function (e) {
      e.preventDefault();

      var FormData = _objectSpread({}, _this.state.form);

      var FormBody = JSON.stringify(FormData); // POST request to http://localhost:8080/form via fetch

      var url = '/form';
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: FormBody
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log(response.status); // Remove in Production

          throw new Error('Something went wrong on api server!');
        }
      }).then(function (data) {
        data = JSON.stringify(data);
        console.log("Data from the server:  ".concat(data));
      }) // Error handler 
      .catch(function (err) {
        console.log(err);
      });
    });

    return _this;
  }

  _createClass(SignupForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-container",
        id: "signup"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Sign Up!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "To sign up for the camp, please fill out these details:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "POST",
        onSubmit: this.handleFormSubmit,
        className: "signup-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-elements"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        required: true,
        type: "text",
        id: "guardian_name",
        name: "guardian_name",
        onChange: this.handleGuard_Name_Change
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "guardian_name"
      }, "Guardian's Full Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "email"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        required: true,
        type: "email",
        id: "guardian_email",
        name: "guardian_email",
        onChange: this.handleGuard_Email_Change
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "guardian_email"
      }, "Guardian's Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        required: true,
        type: "text",
        id: "phone-number",
        name: "phone-number",
        onChange: this.handleGuard_Phone_Change
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone-number"
      }, "Guardian's Phone Number")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "child-list"
      }, this.createChildListArr()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        required: true,
        type: "submit",
        value: "Submit",
        id: "submit-button",
        className: "submit-button"
      }))));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "../client/src/components/Testimonial/message.css":
/*!********************************************************!*\
  !*** ../client/src/components/Testimonial/message.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Testimonial/message.jsx":
/*!********************************************************!*\
  !*** ../client/src/components/Testimonial/message.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.css */ "../client/src/components/Testimonial/message.css");
/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_message_css__WEBPACK_IMPORTED_MODULE_1__);



var Message = function Message(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-container",
    id: "message-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.quote), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.occupation));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "../client/src/components/Testimonial/testimonial.css":
/*!************************************************************!*\
  !*** ../client/src/components/Testimonial/testimonial.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Testimonial/testimonial.jsx":
/*!************************************************************!*\
  !*** ../client/src/components/Testimonial/testimonial.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.jsx */ "../client/src/components/Testimonial/message.jsx");
/* harmony import */ var _testimonial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial.css */ "../client/src/components/Testimonial/testimonial.css");
/* harmony import */ var _testimonial_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testimonial_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Testimonial =
/*#__PURE__*/
function (_Component) {
  _inherits(Testimonial, _Component);

  function Testimonial() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Testimonial);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Testimonial)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      // update the testimonials object to update or add testimonials
      testimonials: [{
        name: "Dennis Gallagher",
        occupation: "Writer at NOLA Times-Picayune.",
        quote: "\"Seeing Gavin in action on the court at his camp is \n                seeing a coach in his element, thoroughly teaching \n                the basics of the game to kids at a time when the \n                fundamentals are often overlooked.\""
      }, {
        name: "Gary Bielman",
        occupation: null,
        quote: "\"Pat has really stepped up with this camp. \n                He loves doing it and wants to give back.\""
      }]
    });

    return _this;
  }

  _createClass(Testimonial, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "testimonial-content-container",
        id: "testimonial"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Testimonials"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "message-list-container"
      }, this.state.testimonials.map(function (testimonial, index) {
        console.log(index);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_message_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: testimonial.name,
          occupation: testimonial.occupation,
          quote: testimonial.quote
        }));
      })));
    }
  }]);

  return Testimonial;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "../client/src/img/homeLogo_480w.png":
/*!*******************************************!*\
  !*** ../client/src/img/homeLogo_480w.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3ca9f50cbaa008d1f9bc0ea20896a910.png";

/***/ }),

/***/ "../client/src/img/sidebar_logo.png":
/*!******************************************!*\
  !*** ../client/src/img/sidebar_logo.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4f27ed1d3cbaaaf33d7739abd2f86f86.png";

/***/ }),

/***/ "./src/Models/Form.js":
/*!****************************!*\
  !*** ./src/Models/Form.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema; // Create Schema for Children 
// Fields:  name, age, shirt size, guardian key (or id)

var childSchema = new mongoose.Schema({
  child_name: {
    type: String,
    required: true //validator: nameValidator(this.guardian_name)  

  },
  child_age: {
    type: Number,
    required: true //validator: nameValidator(this.guardian_name)  

  },
  shirt_size: {
    type: String,
    required: true //validator: nameValidator(this.guardian_name)  

  },
  guardian_id: {
    type: Schema.Types.ObjectId,
    ref: 'Guardian',
    required: true
  }
}); // Create Guardian Schema
// Fields:  name, email, phone number, children id

var guardianSchema = new mongoose.Schema({
  guardian_name: {
    type: String,
    required: true //validator: nameValidator(this.guardian_name) 

  },
  guardian_email: {
    type: String,
    required: true //validator: emailValidator(this.guardian_email) 

  },
  guardian_phone: {
    type: Number,
    required: true //validator: phoneValidator(this.guardian_phone) 

  },
  children: [childSchema],
  submissionDate: {
    type: Date,
    default: Date.now
  }
}); // Create a Child Model and Guardian Model

var Child = mongoose.model('Child', childSchema);
var Guardian = mongoose.model('Guardian', guardianSchema);
module.exports = {
  Child: Child,
  Guardian: Guardian
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/routes */ "./src/routes/routes.js");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_3__);




var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json()); // Uncomment to enable CORS Middleware if front end and...
// back end source code are on two different servers
// app.use((req, res, next) => {
//     // Request origin(s) to allow
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     // Request header(s) to allow
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // Request method(s) to allow
//     res.header('Access-Control-Allow-Methods', 'POST');
//     next();
// });
// Store db environment variables into variables

var uri = "testsignupforms-neigc.mongodb.net/";
var dbName = "sports-site";
var user = "mainUser";
var pass = "mainuser123"; // Connect to Mongoose

mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect("mongodb+srv://".concat(user, ":").concat(pass, "@").concat(uri).concat(dbName, "?retryWrites=true"), {
  useNewUrlParser: true
}); // Get notified for successfull db connection or connection error

var db = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("WE CONNECTED HUNNY!!");
}); // Enable routes and put all API endpoints under '/api'

app.use(_routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"]);
var port = process.env.PORT || 3005;
app.listen(port, function () {
  console.log(chalk__WEBPACK_IMPORTED_MODULE_3___default.a.green("App is running:  http://localhost:".concat(port)));
});

/***/ }),

/***/ "./src/middleware/serverRenderer.js":
/*!******************************************!*\
  !*** ./src/middleware/serverRenderer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../client/src/App */ "../client/src/App.js");




 // Import the main App component


/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  // This context object contains the results of the render
  var context = {};

  var render = function render(error, data) {
    // Send an error message
    if (error) {
      return res.status(500).send({
        error: 'internal server error'
      });
    } // Render the App component as a string


    var html = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
      location: req.url,
      context: context
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_src_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    var replacedHTML = data.replace('<div id="root"></div>', "<div id=\"root\">".concat(html, "</div>"));
    return res.send(replacedHTML);
  }; // Render in PRODUCTION


  if (false) { var filePath; } else {
    // Render in DEVELOPMENT
    console.log("eyeeeeeeeeehhhh"); // Point to the html file created by CRA's build tool

    var _filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '..', '..', 'client/build/index.html');

    console.log("FILEEEEE:  ".concat(_filePath));
    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(_filePath, 'utf8', function (err, htmlData) {
      render(err, htmlData);
    });
  }
});

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_serverRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/serverRenderer */ "./src/middleware/serverRenderer.js");
/* harmony import */ var _Models_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/Form */ "./src/Models/Form.js");
/* harmony import */ var _Models_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Models_Form__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

var renderBuild = function renderBuild(buildFile) {
  return router.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(buildFile));
}; // Render static assets for PRODUCTION


if (false) { var build; } else {
  // Render static assets for DEVELOPMENT
  // Point to cliient build directory
  var _build = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '..', '..', 'client', 'build');

  console.log("BUILD DEVELOPMENT:  ".concat(_build));
  renderBuild(_build);
} // Serve rendered page at root (/)


router.use('^/$', _middleware_serverRenderer__WEBPACK_IMPORTED_MODULE_3__["default"]); // Uncomment to enable config for CORS if front-end and 
// back-end code will be on different servers
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//     method: 'POST'
// };

/* ***********************ROUTES*********************** */
// route:  POST @ /form
// descript:  process the form data, validate data and save it in db
// access:  PRIVATE
// misc:  enable cors

/* ********Uncomment code if CORS is NOT being used********/

router.post('/form', function (req, res) {
  // Store form data in variables
  var guard_name = req.body.guard_name;
  var guard_email = req.body.guard_email;
  var guard_phone = req.body.guard_phone;

  var children = _toConsumableArray(req.body.children);

  var childDocs = []; // Create guardian document

  var newGuardian = new _Models_Form__WEBPACK_IMPORTED_MODULE_4__["Guardian"]({
    guardian_name: guard_name,
    guardian_email: guard_email,
    guardian_phone: guard_phone
  }); // Loop thru array and create a doc for each child
  // store docs into childDocs array 
  // (insert array in guardian doc)

  children.map(function (child) {
    // Create child document
    var newChild = new _Models_Form__WEBPACK_IMPORTED_MODULE_4__["Child"]({
      child_name: child.child_name,
      child_age: child.age,
      shirt_size: child.shirt_size,
      guardian_id: newGuardian._id
    });
    childDocs.push(newChild);
  }); // Create guardian document

  newGuardian.children = childDocs.concat(); // save guardian(and children) to db

  newGuardian.save(function (err) {
    if (err) {
      res.json({
        error: "database error"
      });
    } else {
      res.json({
        success: "Thanks, data was saved!"
      });
    }
  });
});
/* *******************END OF ROUTES************************/

/* **********Uncomment code if CORS is being used**********/
// router.post('/form', cors(corsOptions), (req, res) => {
//     // Store form data in variables
//     const guard_name = req.body.guard_name;
//     const guard_email = req.body.guard_email;
//     const guard_phone = req.body.guard_phone;
//     const children = [...req.body.children];
//     const childDocs = [];
//     // Create guardian document
//     const newGuardian = new Guardian({
//         guardian_name: guard_name,
//         guardian_email: guard_email,
//         guardian_phone: guard_phone
//     });
//     // Loop thru array and create a doc for each child
//     // store docs into childDocs array 
//     // (insert array in guardian doc)
//     children.map(function (child) {
//         // Create child document
//         const newChild = new Child({
//             child_name: child.child_name,
//             child_age: child.age,
//             shirt_size: child.shirt_size,
//             guardian_id: newGuardian._id
//         });
//         childDocs.push(newChild);
//     });
//     // Create guardian document
//     newGuardian.children = [...childDocs];
//     // save guardian(and children) to db
//     newGuardian.save(function (err) {
//         if (err) {
//             res.json({error: "database error"})
//         } else {
//             res.json({success: "Thanks, data was saved!"});
//         }
//     });
// });

/* *******************END OF ROUTES************************/

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXMvYXJ0aWNsZXMuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hvbWUvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9NYWluQ29udGFpbmVyL21haW5Db250YWluZXIuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU2lkZWJhci9zaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NpZGViYXJDb250YWluZXIvc2lkZWJhckNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TaWdudXAvY2hpbGQuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU2lnbnVwL3NpZ251cC5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9UZXN0aW1vbmlhbC9tZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9pbWcvaG9tZUxvZ29fNDgwdy5wbmciLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvaW1nL3NpZGViYXJfbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZGVscy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZS9zZXJ2ZXJSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiXSwibmFtZXMiOlsiQXBwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwidmlld1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsImJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJraWRzIiwic3RhdGUiLCJudW1PZktpZHMiLCJzZXRTdGF0ZSIsImhhbmRsZUNsb3NlU2lkZWJhciIsImhhbmRsZUluY3JlbWVudCIsIkNvbXBvbmVudCIsIkFib3V0IiwiYWJvdXRSZWYiLCJBcnRpY2xlcyIsIkZvb3RlciIsIkhlYWRlciIsInByb3BzIiwib3BlblNpZGViYXIiLCJIb21lIiwicmVxdWlyZSIsIk1haW5Db250YWluZXIiLCJoYW5kbGVPcGVuU2lkZWJhciIsIlRlc3RpbW9uaWFsIiwiU2lnbnVwRm9ybSIsIlNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJTaWRlYmFyQ29udGFpbmVyIiwiQ2hpbGQiLCJoYW5kbGVDaGlsZENoYW5nZSIsImFnZVZhbHVlIiwic2hpcnRWYWx1ZSIsImZvcm0iLCJndWFyZF9uYW1lIiwiZ3VhcmRfZW1haWwiLCJndWFyZF9waG9uZSIsImNoaWxkcmVuIiwiY2hpbGRfbmFtZSIsImFnZSIsInNoaXJ0X3NpemUiLCJzZWxlY3RWYWx1ZXMiLCJpbmRleCIsIm5hbWVDb21wbGV0ZWQiLCJhZ2VDb21wbGV0ZWQiLCJzaGlydENvbXBsZXRlZCIsInN1Ym1pdHRlZCIsImNoaWxkRmllbGRzIiwibnVtT2ZDaGlsZHJlbiIsImNoaWxkTGlzdEFycmF5IiwiaSIsInB1c2giLCJoYW5kbGVDaGlsZEZpZWxkQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwiaW5wdXQiLCJGb3JtRGF0YSIsImdfbmFtZSIsInVzZXJfaW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVwZGF0ZUZvcm1TdGF0ZSIsImdfZW1haWwiLCJnX3Bob25lIiwiQ2hpbGRyZW5BcnJheSIsImlkIiwiZm9yRWFjaCIsIkZvcm1Cb2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVGb3JtU3VibWl0IiwiaGFuZGxlR3VhcmRfTmFtZV9DaGFuZ2UiLCJoYW5kbGVHdWFyZF9FbWFpbF9DaGFuZ2UiLCJoYW5kbGVHdWFyZF9QaG9uZV9DaGFuZ2UiLCJjcmVhdGVDaGlsZExpc3RBcnIiLCJNZXNzYWdlIiwicXVvdGUiLCJuYW1lIiwib2NjdXBhdGlvbiIsInRlc3RpbW9uaWFscyIsIm1hcCIsInRlc3RpbW9uaWFsIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJjaGlsZFNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNoaWxkX2FnZSIsIk51bWJlciIsImd1YXJkaWFuX2lkIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImd1YXJkaWFuU2NoZW1hIiwiZ3VhcmRpYW5fbmFtZSIsImd1YXJkaWFuX2VtYWlsIiwiZ3VhcmRpYW5fcGhvbmUiLCJzdWJtaXNzaW9uRGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwibW9kZWwiLCJHdWFyZGlhbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHAiLCJleHByZXNzIiwidXNlIiwidXJpIiwicHJvY2VzcyIsImRiTmFtZSIsInVzZXIiLCJwYXNzIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsImRiIiwiY29ubmVjdGlvbiIsIm9uIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsInJvdXRlciIsInBvcnQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiY2hhbGsiLCJncmVlbiIsInJlcSIsInJlcyIsIm5leHQiLCJjb250ZXh0IiwicmVuZGVyIiwic2VuZCIsImh0bWwiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwicmVwbGFjZWRIVE1MIiwicmVwbGFjZSIsImZpbGVQYXRoIiwicGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJmcyIsInJlYWRGaWxlIiwiaHRtbERhdGEiLCJSb3V0ZXIiLCJyZW5kZXJCdWlsZCIsImJ1aWxkRmlsZSIsInN0YXRpYyIsImJ1aWxkIiwiam9pbiIsInNlcnZlclJlbmRlcmVyIiwicG9zdCIsImNoaWxkRG9jcyIsIm5ld0d1YXJkaWFuIiwiY2hpbGQiLCJuZXdDaGlsZCIsIl9pZCIsInNhdmUiLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMx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Ozs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9ob21lL3N1cGVyYm93L1Byb2plY3RzL3Nwb3J0cy1zaXRlL3NyYy9zZXJ2ZXIvcHVibGljXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNpZGViYXJDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXJDb250YWluZXIvc2lkZWJhckNvbnRhaW5lci5qc3gnO1xuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db250YWluZXIvbWFpbkNvbnRhaW5lci5qc3gnO1xuXG5pbXBvcnQgJy4vQXBwLmNzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgaGFuZGxlQ2xvc2VTaWRlYmFyID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFxuICAgICAgLy8gc3RvcmUgdmlld3BvcnQgd2lkdGggaW4gdmFyaWFibGVcbiAgICAgIGxldCB2aWV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+PSA5MDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgIC8vIGlmIHZpZXdwb3J0IHdpZHRoIGlzID49IDkwMHB4LCBzaWRlYmFyIHNob3VsZCBub3QgY2xvc2VcbiAgICAgIGlmICh2aWV3V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlbHNlICh0aGUgc2NyZWVuIGlzIHNtYWxsKSwgY2xvc2Ugc2lkZWJhclxuICAgICAgICAgIC8vIEFkZHMgYSBzbW9vdGggdHJhbnNpdGlvbiB0byB0aGUgU2lkZWJhciBjb21wb25lbnQgd2hpbGUgaXQncyBleGl0aW5nXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWNvbnRhaW5lclwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjBweFwiO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDApXCI7XG4gICAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgYSBjbGljayBldmVudCBoYW5kbGVyIGZvciB0aGUgaW5jcmVtZW50IGJ1dHRvbiBvbiA8Q2hpbGQgLz5cbiAgaGFuZGxlSW5jcmVtZW50ID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBraWRzID0gdGhpcy5zdGF0ZS5udW1PZktpZHM7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUgPSB7XG4gICAgICAgICAgbnVtT2ZLaWRzOiBraWRzICsrLFxuICAgICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIkFwcC1Db21wb25lbnRcIiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPFNpZGViYXJDb250YWluZXJcbiAgICAgICAgICAgIGNsb3NlU2lkZWJhcj17dGhpcy5oYW5kbGVDbG9zZVNpZGViYXJ9IC8+XG4gICAgICAgIDxNYWluQ29udGFpbmVyIGluY3JlbWVudEJ1dHRvbj17dGhpcy5oYW5kbGVJbmNyZW1lbnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9hYm91dC5jc3MnO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWNvbnRlbnQtY29udGFpbmVyXCIgXG4gICAgICAgICAgaWQ9XCJhYm91dFwiXG4gICAgICAgICAgcmVmPXt0aGlzLmFib3V0UmVmfT5cbiAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICA8aDM+XG4gICAgICAgIEV2ZXJ5IHllYXIgaW4gTWV0YXJpZSwgTmV3IE9ybGVhbnMsIGEgYmFza2V0YmFsbCBjYW1wIFxuICAgICAgICBpcyBob3N0ZWQgdG8gaGVscCBsb2NhbCB5b3V0aCBwcmFjdGljZSB0aGUgXG4gICAgICAgIGJhc2ljcyBvZiBiYXNrZXRiYWxsLlxuICAgICAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vYXJ0aWNsZXMuY3NzJztcblxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlcy1jb250ZW50LWNvbnRhaW5lclwiIGlkPVwiYXJ0aWNsZXNcIj5cbiAgICAgIDxoMT5BcnRpY2xlczwvaDE+XG4gICAgICA8aDM+SGVyZSBpcyBhbiBhcnRpY2xlIHlvdSBjYW4gY2hlY2tvdXQ6PC9oMz5cbiAgICAgIDxwPnNvbWUgYXJ0aWNsZSBsaW5rLi4uPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vZm9vdGVyLmNzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rcy1jb250YWluZXJcIj5cbiAgICAgICAgPGg1PkxpbmtzPC9oNT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5Ib21lPC9saT5cbiAgICAgICAgICA8bGk+QWJvdXQ8L2xpPlxuICAgICAgICAgIDxsaT5UZXN0aW1vbmlhbHM8L2xpPlxuICAgICAgICAgIDxsaT5TaWdudXA8L2xpPlxuICAgICAgICAgIDxsaT5BcnRpY2xlczwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ubmVjdC1jb250YWluZXJcIj5cbiAgICAgICAgPGg1PkNvbm5lY3Q8L2g1PlxuICAgICAgICA8cD5GYWNlYm9vazwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiSGVhZGVyLUNvbXBvbmVudFwiXG4gICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnVyZ2VyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJidXJnZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9wZW5TaWRlYmFyfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS0xXCI+UGF0IEdhdmluJ3M8L2gyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS0yXCI+QmFza2V0YmFsbCBGdW5kYW1lbnRhbHMgQ2FtcDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaG9tZS5jc3MnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250ZW50LWNvbnRhaW5lclwiIGlkPVwiaG9tZVwiPlxuICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2ltZy9ob21lTG9nb180ODB3LnBuZycpfVxuICAgICAgICAgICBjbGFzc05hbWU9XCJob21lLWxvZ29cIlxuICAgICAgICAgICBhbHQ9XCJQYXQgR2F2aW4ncyBCYXNrZXRiYWxsIEZ1bmRhbWVudGFscyBDYW1wIExvZ29cIi8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvaGVhZGVyLmpzeCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lL2hvbWUuanN4JztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9BYm91dC9hYm91dC5qc3gnO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4uL1Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmpzeCc7XG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuLi9TaWdudXAvc2lnbnVwLmpzeCc7XG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSAnLi4vQXJ0aWNsZXMvYXJ0aWNsZXMuanN4JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL2Zvb3Rlci5qc3gnO1xuXG5pbXBvcnQgJy4vbWFpbkNvbnRhaW5lci5jc3MnO1xuXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBCZWZvcmUgY29tcG9uZW50IG1vdW50cyBhbmQgYmVmb3JlIHBhZ2UgdW5sb2Fkcy4uLlxuICAvLyBUaGUgd2VicGFnZSB3aWxsIGJlIHNjcm9sbGVkIHRvIHRoZSB0b3BcbiAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcbiAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLy8gY3JlYXRlIGEgY2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGJ1cmdlciBidXR0b25cbiAgaGFuZGxlT3BlblNpZGViYXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEFkZHMgYSBzbW9vdGggdHJhbnNpdGlvbiB0byB0aGUgU2lkZWJhciBjb21wb25lbnQgd2hpbGUgaXQncyBlbnRlcmluZ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1jb250YWluZXJcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjI1MHB4XCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHRvZ2dsZS1jbG9zZWRcIj5cbiAgICAgICAgPEhlYWRlciBvcGVuU2lkZWJhcj17dGhpcy5oYW5kbGVPcGVuU2lkZWJhcn0vPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvdGVzdGltb25pYWxcIiBjb21wb25lbnQ9e1Rlc3RpbW9uaWFsfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9zaWdudXBcIiBjb21wb25lbnQ9e1NpZ251cEZvcm19IC8+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FydGljbGVzXCIgY29tcG9uZW50PXtBcnRpY2xlc30gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XG5cbmltcG9ydCAnLi9zaWRlYmFyLmNzcyc7XG5cbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJTaWRlYmFyLUNvbXBvbmVudFwiIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgIHsvKiBNZW51IEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1oZWFkZXJcIj5cbiAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJy4uLy4uL2ltZy9zaWRlYmFyX2xvZ28ucG5nJyl9XG4gICAgICAgICAgICAgIGFsdD1cIlBhdCBHYXZpbidzIEJhc2tldGJhbGwgRnVuZGFtZW50YWxzIENhbXAgTG9nb1wiLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3BhblxuICAgICAgICAgICBpZD1cImNyb3NzLWJ1dHRvblwiXG4gICAgICAgICAgIGNsYXNzTmFtZT1cImNyb3NzXCJcbiAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2xvc2VTaWRlYmFyfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogRW5kIG9mIE1lbnUgSGVhZGVyICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhyXCI+PC9kaXY+XG5cbiAgICAgIHsvKiBTaWRlYmFyIExpbmtzICovfVxuICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbGlua3MtY29udGFpbmVyXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lLXNpZGViYXItaXRlbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZVNpZGViYXJ9PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJhYm91dC1zaWRlYmFyLWl0ZW1cIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2xvc2VTaWRlYmFyfT5cbiAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGVzdGltb25pYWwtc2lkZWJhci1pdGVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlU2lkZWJhcn0+XG4gICAgICAgICAgPExpbmsgdG89XCIvdGVzdGltb25pYWxcIj5UZXN0aW1vbmlhbDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZ251cC1zaWRlYmFyLWl0ZW1cIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2xvc2VTaWRlYmFyfT5cbiAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj5TaWduIFVwPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZXMtc2lkZWJhci1pdGVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlU2lkZWJhcn0+XG4gICAgICAgICAgPExpbmsgdG89XCIvYXJ0aWNsZXNcIj5BcnRpY2xlczwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICB7LyogRW5kIG9mIFNpZGViYXIgTGlua3MgKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9zaWRlYmFyLmpzeCc7XG5cbmltcG9ydCAnLi9zaWRlYmFyQ29udGFpbmVyLmNzcyc7XG5cbmNvbnN0IFNpZGViYXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwic2lkZWJhci1jb250YWluZXJcIlxuICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICAgICAgIDxTaWRlYmFyIGNsb3NlU2lkZWJhcj17cHJvcHMuY2xvc2VTaWRlYmFyfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2NoaWxkLmNzcyc7XG5cbmNvbnN0IENoaWxkID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZC1lbnRyeS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZVwiPlxuICAgICAgICAgICAgICAgIDxwPkFkZC8gUmVtb3ZlIGEgY2hpbGQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1yZW1vdmUtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5jcmVtZW50XCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVjcmVtZW50XCI+eDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjaGlsZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hpbGQtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaGlsZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoaWxkQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGlsZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hpbGQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgQ2hpbGQncyBGdWxsIE5hbWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImFnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5hZ2VWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGlsZENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+QWdlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2hpcnQtc2l6ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGlydC1zaXplc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaGlydF9zaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zaGlydFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoaWxkQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TaXplPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzbWFsbFwiPlM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxhcmdlXCI+TDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGlsZDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDaGlsZCBmcm9tICcuL2NoaWxkLmpzeCc7XG4vL2ltcG9ydCBTdWJtaXNzaW9uTW9kYWwgZnJvbSAnLi9zdWJtaXNzaW9uTW9kYWwuanN4JztcblxuaW1wb3J0ICcuL3NpZ251cC5jc3MnO1xuXG5jbGFzcyBTaWdudXBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgZ3VhcmRfbmFtZTogXCJcIixcbiAgICAgICAgICAgIGd1YXJkX2VtYWlsOiBcIlwiLFxuICAgICAgICAgICAgZ3VhcmRfcGhvbmU6IFwiXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYWdlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzaGlydF9zaXplOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0VmFsdWVzOiB7XG4gICAgICAgICAgICBhZ2VWYWx1ZTogXCJhZ2VzXCIsXG4gICAgICAgICAgICBzaGlydFZhbHVlOiBcInNoaXJ0c1wiXG4gICAgICAgIH0sXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBuYW1lQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgYWdlQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgc2hpcnRDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgICBjaGlsZEZpZWxkczogMVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW1zIGRlcGVuZGluZyBvbiBudW1iZXIgd2l0aGluIGNoaWxkRmllbGRzJyBzdGF0ZVxuICAgIGNyZWF0ZUNoaWxkTGlzdEFyciA9ICgpID0+IHtcbiAgICAgICAgbGV0IG51bU9mQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkRmllbGRzO1xuICAgICAgICBsZXQgY2hpbGRMaXN0QXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAobnVtT2ZDaGlsZHJlbiA8IDQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZDaGlsZHJlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hpbGQgaGFuZGxlQ2hpbGRDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hpbGRGaWVsZENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2VWYWx1ZT17dGhpcy5zdGF0ZS5hZ2VWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlydFZhbHVlPXt0aGlzLnN0YXRlLnNoaXJ0VmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkTGlzdEFycmF5KTtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZExpc3RBcnJheTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9vIG1hbnkgY2hpbHJlbiwgY2hpbGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBkbyB7XG4gICAgICAgIC8vICAgICBpZiAobnVtT2ZDaGlsZHJlbiA8IDQpIHtcbiAgICAgICAgLy8gICAgICAgICAvLyBpbmNyZW1lbnQgY291bnRlciB2YXJpYWJsZVxuICAgICAgICAvLyAgICAgICAgIGkrKztcblxuICAgICAgICAvLyAgICAgICAgIC8vIHJldHVybiBsaSB0YWdzXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuKFxuICAgICAgICAvLyAgICAgICAgICAgICA8bGk+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8Q2hpbGQgaGFuZGxlQ2hpbGRDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hpbGRGaWVsZENoYW5nZX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBhZ2VWYWx1ZT17dGhpcy5zdGF0ZS5hZ2VWYWx1ZX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBzaGlydFZhbHVlPXt0aGlzLnN0YXRlLnNoaXJ0VmFsdWV9IC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIC8vICAgICAgICAgKTsgXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwidG9vIG1hbnkga2lkcywgY2hpbGUuLi5cIik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gd2hpbGUgKGkgPCBudW1PZkNoaWxkcmVuKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBmb3JtIGZpZWxkIHN0YXRlIHdpdGggdXNlciBpbnB1dFxuICAgIHVwZGF0ZUZvcm1TdGF0ZSA9IChmaWVsZCwgaW5wdXQpID0+IHtcbiAgICAgICAgLy8gU3RvcmUgZm9ybSBkYXRhIGluIGEgdmFyaWFibGVcbiAgICAgICAgbGV0IEZvcm1EYXRhID0gey4uLnRoaXMuc3RhdGUuZm9ybX07XG4gICAgXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGhlIGZvcm0gZmllbGQncyBzdGF0ZVxuICAgICAgICBGb3JtRGF0YVtmaWVsZF0gPSBpbnB1dDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybTogRm9ybURhdGF9KTtcbiAgICB9XG5cbiAgICAvKiBUaGUgaGFuZGxlQ2hhbmdlIGV2ZW50IGhhbmRsZXJzIHdpbGwgZG8gdGhlIGZvbGxvd2luZzpcbiAgICAgICAgMS4gIFN0b3JlIG5hbWUgb2Yga2V5IChkYXRhIHR5cGU6IHN0cmluZykgaW4gdmFyaWFibGVcbiAgICAgICAgMi4gIFN0b3JlIHVzZXIgaW5wdXQgaW4gYSB2YXJpYWJsZVxuICAgICAgICAzLiAgUGFzcyBzdHJpbmcgYW5kIHVzZXIgaW5wdXQgYXMgYXJndW1lbnRzIGluIHVwZGF0ZUZvcm1TdGF0ZVxuICAgICovXG4gICAgaGFuZGxlR3VhcmRfTmFtZV9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBnX25hbWUgPSBcImd1YXJkX25hbWVcIjtcbiAgICAgICAgbGV0IHVzZXJfaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtU3RhdGUoZ19uYW1lLCB1c2VyX2lucHV0KTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlR3VhcmRfRW1haWxfQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZ19lbWFpbCA9IFwiZ3VhcmRfZW1haWxcIjtcbiAgICAgICAgbGV0IHVzZXJfaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtU3RhdGUoZ19lbWFpbCwgdXNlcl9pbnB1dCk7XG4gICAgfVxuICAgIFxuICAgIGhhbmRsZUd1YXJkX1Bob25lX0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGdfcGhvbmUgPSBcImd1YXJkX3Bob25lXCI7XG4gICAgICAgIGxldCB1c2VyX2lucHV0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlRm9ybVN0YXRlKGdfcGhvbmUsIHVzZXJfaW5wdXQpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBDaGlsZCBGaWVsZCBDaGFuZ2VcbiAgICBoYW5kbGVDaGlsZEZpZWxkQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgLy8gQXNzaWduIGNoaWxkcmVuIGFycmF5LCB1c2VyIGlucHV0LCBcbiAgICAgICAgLy8gc2VsZWN0ZWQgaHRtbCB0YWcsIGFuZCBpbmRleCBpbiB2YXJpYWJsZXNcbiAgICAgICAgbGV0IENoaWxkcmVuQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5mb3JtLmNoaWxkcmVuXTtcbiAgICAgICAgbGV0IHVzZXJfaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGxldCBpID0gdGhpcy5zdGF0ZS5pbmRleDtcbiAgICBcbiAgICAgICAgLy8gbG9vcCB0aHJ1IGFycmF5XG4gICAgICAgIENoaWxkcmVuQXJyYXkuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayB0byBzZWUgd2hpY2ggZmllbGQgaXMgYmVpbmcgdXBkYXRlZFxuICAgICAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGlsZF9uYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgY29ycmVjdCB2YWx1ZSBpbiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgQ2hpbGRyZW5BcnJheVtpXS5jaGlsZF9uYW1lID0gdXNlcl9pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBmaWVsZCdzIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IENoaWxkcmVuQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lQ29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICBjYXNlIFwiYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgY29ycmVjdCB2YWx1ZSBpbiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgQ2hpbGRyZW5BcnJheVtpXS5hZ2UgPSB1c2VyX2lucHV0O1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGZpZWxkJ3Mgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogQ2hpbGRyZW5BcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZUNvbXBsZXRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSBcInNoaXJ0X3NpemVcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBjb3JyZWN0IHZhbHVlIGluIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBDaGlsZHJlbkFycmF5W2ldLnNoaXJ0X3NpemUgPSB1c2VyX2lucHV0O1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGZpZWxkJ3Mgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogQ2hpbGRyZW5BcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXJ0Q29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbmFtZUNvbXBsZXRlZCA9IHRoaXMuc3RhdGUubmFtZUNvbXBsZXRlZDtcbiAgICAgICAgbGV0IGFnZUNvbXBsZXRlZCA9IHRoaXMuc3RhdGUuYWdlQ29tcGxldGVkO1xuICAgICAgICBsZXQgc2hpcnRDb21wbGV0ZWQgPSB0aGlzLnN0YXRlLnNoaXJ0Q29tcGxldGVkO1xuICAgIFxuICAgICAgICBpZiAobmFtZUNvbXBsZXRlZCAmJiBhZ2VDb21wbGV0ZWQgJiYgc2hpcnRDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIC8vIGlmIGFsbCB0aGUgZmllbGRzIGFyZSBjb21wbGV0ZSwgaW5jcmVtZW50IHRoZSBpbmRleFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGkrKyxcbiAgICAgICAgICAgICAgICBuYW1lQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZ2VDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNoaXJ0Q29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXRcbiAgICBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBGb3JtRGF0YSA9IHsuLi50aGlzLnN0YXRlLmZvcm19O1xuICAgICAgICBsZXQgRm9ybUJvZHkgPSBKU09OLnN0cmluZ2lmeShGb3JtRGF0YSk7XG5cbiAgICAgICAgLy8gUE9TVCByZXF1ZXN0IHRvIGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mb3JtIHZpYSBmZXRjaFxuICAgICAgICBjb25zdCB1cmwgPSAnL2Zvcm0nO1xuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBGb3JtQm9keVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7IC8vIFJlbW92ZSBpbiBQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBhcGkgc2VydmVyIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYERhdGEgZnJvbSB0aGUgc2VydmVyOiAgJHtkYXRhfWApO1xuICAgICAgICB9KVxuICAgICAgICAvLyBFcnJvciBoYW5kbGVyIFxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGFpbmVyXCIgaWQ9XCJzaWdudXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5TaWduIFVwITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5UbyBzaWduIHVwIGZvciB0aGUgY2FtcCwgcGxlYXNlIGZpbGwgb3V0IHRoZXNlIGRldGFpbHM6PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lnbnVwLWZvcm1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJndWFyZGlhbl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWFyZGlhbl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUd1YXJkX05hbWVfQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ3VhcmRpYW5fbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRpYW4ncyBGdWxsIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJndWFyZGlhbl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3VhcmRpYW5fZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR3VhcmRfRW1haWxfQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ3VhcmRpYW5fZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkaWFuJ3MgRW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZS1udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lLW51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHdWFyZF9QaG9uZV9DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkaWFuJ3MgUGhvbmUgTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hpbGQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkTGlzdEFycigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJtaXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vbWVzc2FnZS5jc3MnO1xuXG5jb25zdCBNZXNzYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRhaW5lclwiIGlkPVwibWVzc2FnZS1jb250YWluZXJcIj5cbiAgICAgICAgPHA+e3Byb3BzLnF1b3RlfTwvcD5cbiAgICAgICAgPGgzPntwcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgIDxoNT57cHJvcHMub2NjdXBhdGlvbn08L2g1PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlLmpzeCc7XG5cbmltcG9ydCAnLi90ZXN0aW1vbmlhbC5jc3MnO1xuXG5jbGFzcyBUZXN0aW1vbmlhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIC8vIHVwZGF0ZSB0aGUgdGVzdGltb25pYWxzIG9iamVjdCB0byB1cGRhdGUgb3IgYWRkIHRlc3RpbW9uaWFsc1xuICAgIHRlc3RpbW9uaWFsczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkRlbm5pcyBHYWxsYWdoZXJcIixcbiAgICAgICAgb2NjdXBhdGlvbjogXCJXcml0ZXIgYXQgTk9MQSBUaW1lcy1QaWNheXVuZS5cIixcbiAgICAgICAgcXVvdGU6IGBcIlNlZWluZyBHYXZpbiBpbiBhY3Rpb24gb24gdGhlIGNvdXJ0IGF0IGhpcyBjYW1wIGlzIFxuICAgICAgICAgICAgICAgIHNlZWluZyBhIGNvYWNoIGluIGhpcyBlbGVtZW50LCB0aG9yb3VnaGx5IHRlYWNoaW5nIFxuICAgICAgICAgICAgICAgIHRoZSBiYXNpY3Mgb2YgdGhlIGdhbWUgdG8ga2lkcyBhdCBhIHRpbWUgd2hlbiB0aGUgXG4gICAgICAgICAgICAgICAgZnVuZGFtZW50YWxzIGFyZSBvZnRlbiBvdmVybG9va2VkLlwiYFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJHYXJ5IEJpZWxtYW5cIixcbiAgICAgICAgb2NjdXBhdGlvbjogbnVsbCxcbiAgICAgICAgcXVvdGU6IGBcIlBhdCBoYXMgcmVhbGx5IHN0ZXBwZWQgdXAgd2l0aCB0aGlzIGNhbXAuIFxuICAgICAgICAgICAgICAgIEhlIGxvdmVzIGRvaW5nIGl0IGFuZCB3YW50cyB0byBnaXZlIGJhY2suXCJgXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsLWNvbnRlbnQtY29udGFpbmVyXCIgaWQ9XCJ0ZXN0aW1vbmlhbFwiPlxuICAgICAgICA8aDE+VGVzdGltb25pYWxzPC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2UtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUudGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgbmFtZT17dGVzdGltb25pYWwubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgb2NjdXBhdGlvbj17dGVzdGltb25pYWwub2NjdXBhdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3Rlc3RpbW9uaWFsLnF1b3RlfSAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2NhOWY1MGNiYWEwMDhkMWY5YmMwZWEyMDg5NmE5MTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGYyN2VkMWQzY2JhYWFmMzNkNzczOWFiZDJmODZmODYucG5nXCI7IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuXG4vLyBDcmVhdGUgU2NoZW1hIGZvciBDaGlsZHJlbiBcbi8vIEZpZWxkczogIG5hbWUsIGFnZSwgc2hpcnQgc2l6ZSwgZ3VhcmRpYW4ga2V5IChvciBpZClcblxuY29uc3QgY2hpbGRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBjaGlsZF9uYW1lOiB7IFxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgLy92YWxpZGF0b3I6IG5hbWVWYWxpZGF0b3IodGhpcy5ndWFyZGlhbl9uYW1lKSAgXG4gICAgfSxcblxuICAgIGNoaWxkX2FnZTogeyBcbiAgICAgICAgdHlwZTogTnVtYmVyLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIC8vdmFsaWRhdG9yOiBuYW1lVmFsaWRhdG9yKHRoaXMuZ3VhcmRpYW5fbmFtZSkgIFxuICAgIH0sXG5cbiAgICBzaGlydF9zaXplOiB7IFxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgLy92YWxpZGF0b3I6IG5hbWVWYWxpZGF0b3IodGhpcy5ndWFyZGlhbl9uYW1lKSAgXG4gICAgfSxcblxuICAgIGd1YXJkaWFuX2lkOiB7IFxuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIFxuICAgICAgICByZWY6ICdHdWFyZGlhbicsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxufSk7XG5cbi8vIENyZWF0ZSBHdWFyZGlhbiBTY2hlbWFcbi8vIEZpZWxkczogIG5hbWUsIGVtYWlsLCBwaG9uZSBudW1iZXIsIGNoaWxkcmVuIGlkXG5jb25zdCBndWFyZGlhblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGd1YXJkaWFuX25hbWU6IHsgXG4gICAgICAgIHR5cGU6IFN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAvL3ZhbGlkYXRvcjogbmFtZVZhbGlkYXRvcih0aGlzLmd1YXJkaWFuX25hbWUpIFxuICAgIH0sXG5cbiAgICBndWFyZGlhbl9lbWFpbDogeyBcbiAgICAgICAgdHlwZTogU3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIC8vdmFsaWRhdG9yOiBlbWFpbFZhbGlkYXRvcih0aGlzLmd1YXJkaWFuX2VtYWlsKSBcbiAgICB9LFxuXG4gICAgZ3VhcmRpYW5fcGhvbmU6IHsgXG4gICAgICAgIHR5cGU6IE51bWJlciwgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAvL3ZhbGlkYXRvcjogcGhvbmVWYWxpZGF0b3IodGhpcy5ndWFyZGlhbl9waG9uZSkgXG4gICAgfSxcblxuICAgIGNoaWxkcmVuOiBbY2hpbGRTY2hlbWFdLFxuXG4gICAgc3VibWlzc2lvbkRhdGU6IHsgXG4gICAgICAgIHR5cGU6IERhdGUsIFxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vdyBcbiAgICB9XG59KTtcblxuLy8gQ3JlYXRlIGEgQ2hpbGQgTW9kZWwgYW5kIEd1YXJkaWFuIE1vZGVsXG5jb25zdCBDaGlsZCA9IG1vbmdvb3NlLm1vZGVsKCdDaGlsZCcsIGNoaWxkU2NoZW1hKTtcbmNvbnN0IEd1YXJkaWFuID0gbW9uZ29vc2UubW9kZWwoJ0d1YXJkaWFuJywgZ3VhcmRpYW5TY2hlbWEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ2hpbGQsIEd1YXJkaWFuIH07IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuLy8gVW5jb21tZW50IHRvIGVuYWJsZSBDT1JTIE1pZGRsZXdhcmUgaWYgZnJvbnQgZW5kIGFuZC4uLlxuLy8gYmFjayBlbmQgc291cmNlIGNvZGUgYXJlIG9uIHR3byBkaWZmZXJlbnQgc2VydmVyc1xuXG4vLyBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICAgIC8vIFJlcXVlc3Qgb3JpZ2luKHMpIHRvIGFsbG93XG4vLyAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKTtcbi8vICAgICAvLyBSZXF1ZXN0IGhlYWRlcihzKSB0byBhbGxvd1xuLy8gICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdFwiKTtcbi8vICAgICAvLyBSZXF1ZXN0IG1ldGhvZChzKSB0byBhbGxvd1xuLy8gICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUE9TVCcpO1xuLy8gICAgIG5leHQoKTtcbi8vIH0pO1xuXG4vLyBTdG9yZSBkYiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgaW50byB2YXJpYWJsZXNcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52LkRCX0hPU1Q7XG5jb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5EQl9OQU1FO1xuY29uc3QgdXNlciA9IHByb2Nlc3MuZW52LkRCX1VTRVI7XG5jb25zdCBwYXNzID0gcHJvY2Vzcy5lbnYuREJfUEFTUztcblxuLy8gQ29ubmVjdCB0byBNb25nb29zZVxubW9uZ29vc2UuY29ubmVjdChcbiAgICBgbW9uZ29kYitzcnY6Ly8ke3VzZXJ9OiR7cGFzc31AJHt1cml9JHtkYk5hbWV9P3JldHJ5V3JpdGVzPXRydWVgLFxuICAgIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH1cbik7XG5cbi8vIEdldCBub3RpZmllZCBmb3Igc3VjY2Vzc2Z1bGwgZGIgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGVycm9yXG5jb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIldFIENPTk5FQ1RFRCBIVU5OWSEhXCIpXG59KTtcblxuLy8gRW5hYmxlIHJvdXRlcyBhbmQgcHV0IGFsbCBBUEkgZW5kcG9pbnRzIHVuZGVyICcvYXBpJ1xuYXBwLnVzZShyb3V0ZXIpO1xuICBcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDU7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbihgQXBwIGlzIHJ1bm5pbmc6ICBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKSk7XG59KTsiLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vLyBJbXBvcnQgdGhlIG1haW4gQXBwIGNvbXBvbmVudFxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi8uLi9jbGllbnQvc3JjL0FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXG4gICAgLy8gVGhpcyBjb250ZXh0IG9iamVjdCBjb250YWlucyB0aGUgcmVzdWx0cyBvZiB0aGUgcmVuZGVyXG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgIC8vIFNlbmQgYW4gZXJyb3IgbWVzc2FnZVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IGVycm9yOiAnaW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBSZW5kZXIgdGhlIEFwcCBjb21wb25lbnQgYXMgYSBzdHJpbmdcbiAgICAgICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgICk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkSFRNTCA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicsXG4gICAgICAgICAgICBgPGRpdiBpZD1cInJvb3RcIj4ke2h0bWx9PC9kaXY+YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzLnNlbmQocmVwbGFjZWRIVE1MKTtcbiAgICB9XG4gICAgXG4gICAgLy8gUmVuZGVyIGluIFBST0RVQ1RJT05cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBQb2ludCB0byB0aGUgaHRtbCBmaWxlIGluIHByb2R1Y3Rpb24gYnVpbGQgZGlyZWN0b3J5XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2J1aWxkL2luZGV4Lmh0bWwnKTtcblxuICAgICAgICBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0ZjgnLCAoZXJyLCBodG1sRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyKGVyciwgaHRtbERhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7IFxuICAgIC8vIFJlbmRlciBpbiBERVZFTE9QTUVOVFxuICAgICAgICBjb25zb2xlLmxvZyhgZXllZWVlZWVlZWVoaGhoYCk7XG4gICAgICAgIC8vIFBvaW50IHRvIHRoZSBodG1sIGZpbGUgY3JlYXRlZCBieSBDUkEncyBidWlsZCB0b29sXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ2NsaWVudC9idWlsZC9pbmRleC5odG1sJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGSUxFRUVFRTogICR7ZmlsZVBhdGh9YClcbiAgICAgICAgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4JywgKGVyciwgaHRtbERhdGEpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcihlcnIsIGh0bWxEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSBcbn0iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgc2VydmVyUmVuZGVyZXIgZnJvbSAnLi4vbWlkZGxld2FyZS9zZXJ2ZXJSZW5kZXJlcic7XG5pbXBvcnQgeyBDaGlsZCwgR3VhcmRpYW4gfSBmcm9tICcuLi9Nb2RlbHMvRm9ybSc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IHJlbmRlckJ1aWxkID0gKGJ1aWxkRmlsZSkgPT4ge1xuICAgIHJldHVybiByb3V0ZXIudXNlKGV4cHJlc3Muc3RhdGljKGJ1aWxkRmlsZSkpO1xufVxuXG4vLyBSZW5kZXIgc3RhdGljIGFzc2V0cyBmb3IgUFJPRFVDVElPTlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBQb2ludCB0byBwcm9kdWN0aW9uIGJ1aWxkIGRpcmVjdG9yeVxuICAgIGNvbnN0IGJ1aWxkID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2J1aWxkJyk7XG4gICAgcmVuZGVyQnVpbGQoYnVpbGQpO1xuXG59IGVsc2UgeyBcbi8vIFJlbmRlciBzdGF0aWMgYXNzZXRzIGZvciBERVZFTE9QTUVOVFxuICAgIC8vIFBvaW50IHRvIGNsaWllbnQgYnVpbGQgZGlyZWN0b3J5XG4gICAgY29uc3QgYnVpbGQgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnY2xpZW50JywgJ2J1aWxkJyk7XG4gICAgY29uc29sZS5sb2coYEJVSUxEIERFVkVMT1BNRU5UOiAgJHtidWlsZH1gKTtcbiAgICByZW5kZXJCdWlsZChidWlsZCk7XG59XG5cbi8vIFNlcnZlIHJlbmRlcmVkIHBhZ2UgYXQgcm9vdCAoLylcbnJvdXRlci51c2UoJ14vJCcsIHNlcnZlclJlbmRlcmVyKTtcblxuLy8gVW5jb21tZW50IHRvIGVuYWJsZSBjb25maWcgZm9yIENPUlMgaWYgZnJvbnQtZW5kIGFuZCBcbi8vIGJhY2stZW5kIGNvZGUgd2lsbCBiZSBvbiBkaWZmZXJlbnQgc2VydmVyc1xuXG4vLyBjb25zdCBjb3JzT3B0aW9ucyA9IHtcbi8vICAgICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuLy8gICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsXG4vLyAgICAgbWV0aG9kOiAnUE9TVCdcbi8vIH07XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqUk9VVEVTKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8gcm91dGU6ICBQT1NUIEAgL2Zvcm1cbi8vIGRlc2NyaXB0OiAgcHJvY2VzcyB0aGUgZm9ybSBkYXRhLCB2YWxpZGF0ZSBkYXRhIGFuZCBzYXZlIGl0IGluIGRiXG4vLyBhY2Nlc3M6ICBQUklWQVRFXG4vLyBtaXNjOiAgZW5hYmxlIGNvcnNcblxuLyogKioqKioqKipVbmNvbW1lbnQgY29kZSBpZiBDT1JTIGlzIE5PVCBiZWluZyB1c2VkKioqKioqKiovXG5yb3V0ZXIucG9zdCgnL2Zvcm0nLCAocmVxLCByZXMpID0+IHtcblxuICAgIC8vIFN0b3JlIGZvcm0gZGF0YSBpbiB2YXJpYWJsZXNcbiAgICBjb25zdCBndWFyZF9uYW1lID0gcmVxLmJvZHkuZ3VhcmRfbmFtZTtcbiAgICBjb25zdCBndWFyZF9lbWFpbCA9IHJlcS5ib2R5Lmd1YXJkX2VtYWlsO1xuICAgIGNvbnN0IGd1YXJkX3Bob25lID0gcmVxLmJvZHkuZ3VhcmRfcGhvbmU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbLi4ucmVxLmJvZHkuY2hpbGRyZW5dO1xuICAgIGNvbnN0IGNoaWxkRG9jcyA9IFtdO1xuXG4gICAgLy8gQ3JlYXRlIGd1YXJkaWFuIGRvY3VtZW50XG4gICAgY29uc3QgbmV3R3VhcmRpYW4gPSBuZXcgR3VhcmRpYW4oe1xuICAgICAgICBndWFyZGlhbl9uYW1lOiBndWFyZF9uYW1lLFxuICAgICAgICBndWFyZGlhbl9lbWFpbDogZ3VhcmRfZW1haWwsXG4gICAgICAgIGd1YXJkaWFuX3Bob25lOiBndWFyZF9waG9uZVxuICAgIH0pO1xuXG4gICAgLy8gTG9vcCB0aHJ1IGFycmF5IGFuZCBjcmVhdGUgYSBkb2MgZm9yIGVhY2ggY2hpbGRcbiAgICAvLyBzdG9yZSBkb2NzIGludG8gY2hpbGREb2NzIGFycmF5IFxuICAgIC8vIChpbnNlcnQgYXJyYXkgaW4gZ3VhcmRpYW4gZG9jKVxuICAgIGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNoaWxkIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IG5ld0NoaWxkID0gbmV3IENoaWxkKHtcbiAgICAgICAgICAgIGNoaWxkX25hbWU6IGNoaWxkLmNoaWxkX25hbWUsXG4gICAgICAgICAgICBjaGlsZF9hZ2U6IGNoaWxkLmFnZSxcbiAgICAgICAgICAgIHNoaXJ0X3NpemU6IGNoaWxkLnNoaXJ0X3NpemUsXG4gICAgICAgICAgICBndWFyZGlhbl9pZDogbmV3R3VhcmRpYW4uX2lkXG4gICAgICAgIH0pO1xuICAgICAgICBjaGlsZERvY3MucHVzaChuZXdDaGlsZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgZ3VhcmRpYW4gZG9jdW1lbnRcbiAgICBuZXdHdWFyZGlhbi5jaGlsZHJlbiA9IFsuLi5jaGlsZERvY3NdO1xuICAgIFxuICAgIC8vIHNhdmUgZ3VhcmRpYW4oYW5kIGNoaWxkcmVuKSB0byBkYlxuICAgIG5ld0d1YXJkaWFuLnNhdmUoZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwiZGF0YWJhc2UgZXJyb3JcIn0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuanNvbih7c3VjY2VzczogXCJUaGFua3MsIGRhdGEgd2FzIHNhdmVkIVwifSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLyogKioqKioqKioqKioqKioqKioqKkVORCBPRiBST1VURVMqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qICoqKioqKioqKipVbmNvbW1lbnQgY29kZSBpZiBDT1JTIGlzIGJlaW5nIHVzZWQqKioqKioqKioqL1xuLy8gcm91dGVyLnBvc3QoJy9mb3JtJywgY29ycyhjb3JzT3B0aW9ucyksIChyZXEsIHJlcykgPT4ge1xuXG4vLyAgICAgLy8gU3RvcmUgZm9ybSBkYXRhIGluIHZhcmlhYmxlc1xuLy8gICAgIGNvbnN0IGd1YXJkX25hbWUgPSByZXEuYm9keS5ndWFyZF9uYW1lO1xuLy8gICAgIGNvbnN0IGd1YXJkX2VtYWlsID0gcmVxLmJvZHkuZ3VhcmRfZW1haWw7XG4vLyAgICAgY29uc3QgZ3VhcmRfcGhvbmUgPSByZXEuYm9keS5ndWFyZF9waG9uZTtcbi8vICAgICBjb25zdCBjaGlsZHJlbiA9IFsuLi5yZXEuYm9keS5jaGlsZHJlbl07XG4vLyAgICAgY29uc3QgY2hpbGREb2NzID0gW107XG5cbi8vICAgICAvLyBDcmVhdGUgZ3VhcmRpYW4gZG9jdW1lbnRcbi8vICAgICBjb25zdCBuZXdHdWFyZGlhbiA9IG5ldyBHdWFyZGlhbih7XG4vLyAgICAgICAgIGd1YXJkaWFuX25hbWU6IGd1YXJkX25hbWUsXG4vLyAgICAgICAgIGd1YXJkaWFuX2VtYWlsOiBndWFyZF9lbWFpbCxcbi8vICAgICAgICAgZ3VhcmRpYW5fcGhvbmU6IGd1YXJkX3Bob25lXG4vLyAgICAgfSk7XG5cbi8vICAgICAvLyBMb29wIHRocnUgYXJyYXkgYW5kIGNyZWF0ZSBhIGRvYyBmb3IgZWFjaCBjaGlsZFxuLy8gICAgIC8vIHN0b3JlIGRvY3MgaW50byBjaGlsZERvY3MgYXJyYXkgXG4vLyAgICAgLy8gKGluc2VydCBhcnJheSBpbiBndWFyZGlhbiBkb2MpXG4vLyAgICAgY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuLy8gICAgICAgICAvLyBDcmVhdGUgY2hpbGQgZG9jdW1lbnRcbi8vICAgICAgICAgY29uc3QgbmV3Q2hpbGQgPSBuZXcgQ2hpbGQoe1xuLy8gICAgICAgICAgICAgY2hpbGRfbmFtZTogY2hpbGQuY2hpbGRfbmFtZSxcbi8vICAgICAgICAgICAgIGNoaWxkX2FnZTogY2hpbGQuYWdlLFxuLy8gICAgICAgICAgICAgc2hpcnRfc2l6ZTogY2hpbGQuc2hpcnRfc2l6ZSxcbi8vICAgICAgICAgICAgIGd1YXJkaWFuX2lkOiBuZXdHdWFyZGlhbi5faWRcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIGNoaWxkRG9jcy5wdXNoKG5ld0NoaWxkKTtcbi8vICAgICB9KTtcblxuLy8gICAgIC8vIENyZWF0ZSBndWFyZGlhbiBkb2N1bWVudFxuLy8gICAgIG5ld0d1YXJkaWFuLmNoaWxkcmVuID0gWy4uLmNoaWxkRG9jc107XG4gICAgXG4vLyAgICAgLy8gc2F2ZSBndWFyZGlhbihhbmQgY2hpbGRyZW4pIHRvIGRiXG4vLyAgICAgbmV3R3VhcmRpYW4uc2F2ZShmdW5jdGlvbiAoZXJyKSB7XG4vLyAgICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHtlcnJvcjogXCJkYXRhYmFzZSBlcnJvclwifSlcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHJlcy5qc29uKHtzdWNjZXNzOiBcIlRoYW5rcywgZGF0YSB3YXMgc2F2ZWQhXCJ9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfSk7XG4vKiAqKioqKioqKioqKioqKioqKioqRU5EIE9GIFJPVVRFUyoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9