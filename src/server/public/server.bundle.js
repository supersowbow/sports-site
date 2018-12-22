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
/* harmony import */ var _components_Menu_menu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Menu/menu.jsx */ "../client/src/components/Menu/menu.jsx");
/* harmony import */ var _components_Header_header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/header.jsx */ "../client/src/components/Header/header.jsx");
/* harmony import */ var _components_MainContainer_mainContainer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MainContainer/mainContainer.jsx */ "../client/src/components/MainContainer/mainContainer.jsx");
/* harmony import */ var _components_Footer_footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer/footer.jsx */ "../client/src/components/Footer/footer.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "../client/src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "activeItem", function (e) {
      e.preventDefault();
      console.log("ACTIVE!");
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "App-Component",
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu_menu_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        activeItem: this.activeItem
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainContainer_mainContainer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        incrementButton: this.handleIncrement
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_footer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
/* harmony import */ var _Home_home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/home.jsx */ "../client/src/components/Home/home.jsx");
/* harmony import */ var _About_about_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../About/about.jsx */ "../client/src/components/About/about.jsx");
/* harmony import */ var _Testimonial_testimonial_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Testimonial/testimonial.jsx */ "../client/src/components/Testimonial/testimonial.jsx");
/* harmony import */ var _Signup_signup_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Signup/signup.jsx */ "../client/src/components/Signup/signup.jsx");
/* harmony import */ var _Articles_articles_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Articles/articles.jsx */ "../client/src/components/Articles/articles.jsx");
/* harmony import */ var _mainContainer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainContainer.css */ "../client/src/components/MainContainer/mainContainer.css");
/* harmony import */ var _mainContainer_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mainContainer_css__WEBPACK_IMPORTED_MODULE_7__);
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


 //import Header from '../Header/header.jsx';





 //import Footer from '../Footer/footer.jsx';



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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _Home_home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/about",
        component: _About_about_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/testimonial",
        component: _Testimonial_testimonial_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/signup",
        component: _Signup_signup_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/articles",
        component: _Articles_articles_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
      }));
    }
  }]);

  return MainContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ }),

/***/ "../client/src/components/Menu/menu.css":
/*!**********************************************!*\
  !*** ../client/src/components/Menu/menu.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/components/Menu/menu.jsx":
/*!**********************************************!*\
  !*** ../client/src/components/Menu/menu.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.css */ "../client/src/components/Menu/menu.css");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_css__WEBPACK_IMPORTED_MODULE_2__);




var Menu = function Menu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "menu-container",
    className: "menu-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-links-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "home-menu-item",
    onClick: props.activeItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "about-menu-item",
    onClick: props.activeItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "testimonial-menu-item",
    onClick: props.activeItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/testimonial"
  }, "Testimonial")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "signup-menu-item",
    onClick: props.activeItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/signup"
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "articles-menu-item",
    onClick: props.activeItem
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/articles"
  }, "Articles"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

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

var host = "testsignupforms-neigc.mongodb.net/";
var dbName = "sports-site";
var user = "mainUser";
var pass = "mainuser123"; // Create mongodb's Atlas uri string

var uri = "mongodb+srv://".concat(user, ":").concat(pass, "@").concat(host).concat(dbName);
console.log("THIS IS THE URI:  ".concat(uri)); // Connect to Mongoose

mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(uri, {
  useNewUrlParser: true
}); // `mongodb+srv://${user}:${pass}@${host}${dbName}?retryWrites=true`,
// Get notified for successfull db connection or connection error

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

/***/ "./src/middleware/addToDB.js":
/*!***********************************!*\
  !*** ./src/middleware/addToDB.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Models_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Form */ "./src/Models/Form.js");
/* harmony import */ var _Models_Form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Models_Form__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/*  This is a function that will add the signup form... 
    data into the db.
*/

/* harmony default export */ __webpack_exports__["default"] = (function (req, res) {
  // Store form data in variables
  var guard_name = req.body.guard_name;
  var guard_email = req.body.guard_email;
  var guard_phone = req.body.guard_phone;

  var children = _toConsumableArray(req.body.children);

  var childDocs = []; // Create guardian document

  var newGuardian = new _Models_Form__WEBPACK_IMPORTED_MODULE_0__["Guardian"]({
    guardian_name: guard_name,
    guardian_email: guard_email,
    guardian_phone: guard_phone
  }); // Loop thru array and create a document for each child
  // store docs into childDocs array 
  // (insert array in guardian doc)

  children.map(function (child) {
    // Create child document
    var newChild = new _Models_Form__WEBPACK_IMPORTED_MODULE_0__["Child"]({
      child_name: child.child_name,
      child_age: child.age,
      shirt_size: child.shirt_size,
      guardian_id: newGuardian._id
    });
    childDocs.push(newChild);
  }); // Create guardian document

  newGuardian.children = [].concat(childDocs); // save guardian(and children) to db

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
/* harmony import */ var _middleware_serverRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/serverRenderer */ "./src/middleware/serverRenderer.js");
/* harmony import */ var _middleware_addToDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/addToDB */ "./src/middleware/addToDB.js");

 // import cors from 'cors'; // Uncomment code if CORS is being used



var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();

var renderBuild = function renderBuild(buildFile) {
  return router.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(buildFile));
}; // Render static assets for PRODUCTION


if (false) { var build; } else {
  // Render static assets for DEVELOPMENT
  // Point to client build directory
  var _build = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '..', '..', 'client', 'build');

  console.log("BUILD DEVELOPMENT:  ".concat(_build));
  renderBuild(_build);
} // Serve rendered page at root (/)


router.use('^/$', _middleware_serverRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]); // Uncomment code if CORS is being used
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//     method: 'POST'
// };

/* ***********************ROUTES*********************** */
// route:  POST @ /api
// descript:  process the form data, validate data and save it in db
// access:  PRIVATE
// misc:  enable cors

/* ********Uncomment code if CORS is NOT being used********/

router.post('/api', function (req, res) {
  Object(_middleware_addToDB__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
});
/* *************END OF ROUTES WITHOUT CORS*****************/

/* **********Uncomment code if CORS is being used**********/
// router.post('/form', cors(corsOptions), (req, res) => {
//     addToDB(req, res);
// });

/* *************END OF ROUTES WITH CORS*****************/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQWJvdXQvYWJvdXQuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXMvYXJ0aWNsZXMuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hvbWUvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9NYWluQ29udGFpbmVyL21haW5Db250YWluZXIuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTWVudS9tZW51LmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NpZ251cC9jaGlsZC5qc3giLCJ3ZWJwYWNrOi8vLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TaWdudXAvc2lnbnVwLmpzeCIsIndlYnBhY2s6Ly8vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFsL21lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWwvdGVzdGltb25pYWwuanN4Iiwid2VicGFjazovLy8uLi9jbGllbnQvc3JjL2ltZy9ob21lTG9nb180ODB3LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWxzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlL2FkZFRvREIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmUvc2VydmVyUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiXSwibmFtZXMiOlsiQXBwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwidmlld1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsImJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJraWRzIiwic3RhdGUiLCJudW1PZktpZHMiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVJdGVtIiwiaGFuZGxlSW5jcmVtZW50IiwiQ29tcG9uZW50IiwiQWJvdXQiLCJhYm91dFJlZiIsIkFydGljbGVzIiwiRm9vdGVyIiwiSGVhZGVyIiwicHJvcHMiLCJvcGVuU2lkZWJhciIsIkhvbWUiLCJyZXF1aXJlIiwiTWFpbkNvbnRhaW5lciIsIlRlc3RpbW9uaWFsIiwiU2lnbnVwRm9ybSIsIk1lbnUiLCJDaGlsZCIsImhhbmRsZUNoaWxkQ2hhbmdlIiwiYWdlVmFsdWUiLCJzaGlydFZhbHVlIiwiZm9ybSIsImd1YXJkX25hbWUiLCJndWFyZF9lbWFpbCIsImd1YXJkX3Bob25lIiwiY2hpbGRyZW4iLCJjaGlsZF9uYW1lIiwiYWdlIiwic2hpcnRfc2l6ZSIsInNlbGVjdFZhbHVlcyIsImluZGV4IiwibmFtZUNvbXBsZXRlZCIsImFnZUNvbXBsZXRlZCIsInNoaXJ0Q29tcGxldGVkIiwic3VibWl0dGVkIiwiY2hpbGRGaWVsZHMiLCJudW1PZkNoaWxkcmVuIiwiY2hpbGRMaXN0QXJyYXkiLCJpIiwicHVzaCIsImhhbmRsZUNoaWxkRmllbGRDaGFuZ2UiLCJmaWVsZCIsImlucHV0IiwiRm9ybURhdGEiLCJnX25hbWUiLCJ1c2VyX2lucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJ1cGRhdGVGb3JtU3RhdGUiLCJnX2VtYWlsIiwiZ19waG9uZSIsIkNoaWxkcmVuQXJyYXkiLCJpZCIsImZvckVhY2giLCJGb3JtQm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsIkVycm9yIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImhhbmRsZUd1YXJkX05hbWVfQ2hhbmdlIiwiaGFuZGxlR3VhcmRfRW1haWxfQ2hhbmdlIiwiaGFuZGxlR3VhcmRfUGhvbmVfQ2hhbmdlIiwiY3JlYXRlQ2hpbGRMaXN0QXJyIiwiTWVzc2FnZSIsInF1b3RlIiwibmFtZSIsIm9jY3VwYXRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiY2hpbGRTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjaGlsZF9hZ2UiLCJOdW1iZXIiLCJndWFyZGlhbl9pZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJndWFyZGlhblNjaGVtYSIsImd1YXJkaWFuX25hbWUiLCJndWFyZGlhbl9lbWFpbCIsImd1YXJkaWFuX3Bob25lIiwic3VibWlzc2lvbkRhdGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIm1vZGVsIiwiR3VhcmRpYW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImhvc3QiLCJwcm9jZXNzIiwiZGJOYW1lIiwidXNlciIsInBhc3MiLCJ1cmkiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiZGIiLCJjb25uZWN0aW9uIiwib24iLCJlcnJvciIsImJpbmQiLCJvbmNlIiwicm91dGVyIiwicG9ydCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJjaGFsayIsImdyZWVuIiwicmVxIiwicmVzIiwiY2hpbGREb2NzIiwibmV3R3VhcmRpYW4iLCJjaGlsZCIsIm5ld0NoaWxkIiwiX2lkIiwic2F2ZSIsInN1Y2Nlc3MiLCJuZXh0IiwiY29udGV4dCIsInJlbmRlciIsInNlbmQiLCJodG1sIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsInJlcGxhY2VkSFRNTCIsInJlcGxhY2UiLCJmaWxlUGF0aCIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiZnMiLCJyZWFkRmlsZSIsImh0bWxEYXRhIiwiUm91dGVyIiwicmVuZGVyQnVpbGQiLCJidWlsZEZpbGUiLCJzdGF0aWMiLCJidWlsZCIsImpvaW4iLCJzZXJ2ZXJSZW5kZXJlciIsInBvc3QiLCJhZGRUb0RCIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFB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O0FBQ0gsQ0FGRDtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVlUixxRUFBZixFOzs7Ozs7Ozs7OztBQ3hEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvaG9tZS9zdXBlcmJvdy9Qcm9qZWN0cy9zcG9ydHMtc2l0ZS9zcmMvc2VydmVyL3B1YmxpY1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9NZW51L21lbnUuanN4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIuanN4JztcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyL21haW5Db250YWluZXIuanN4JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIuanN4JztcblxuaW1wb3J0ICcuL0FwcC5jc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGhhbmRsZUNsb3NlU2lkZWJhciA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBcbiAgICAgIC8vIHN0b3JlIHZpZXdwb3J0IHdpZHRoIGluIHZhcmlhYmxlXG4gICAgICBsZXQgdmlld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggPj0gOTAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAvLyBpZiB2aWV3cG9ydCB3aWR0aCBpcyA+PSA5MDBweCwgc2lkZWJhciBzaG91bGQgbm90IGNsb3NlXG4gICAgICBpZiAodmlld1dpZHRoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZWxzZSAodGhlIHNjcmVlbiBpcyBzbWFsbCksIGNsb3NlIHNpZGViYXJcbiAgICAgICAgICAvLyBBZGRzIGEgc21vb3RoIHRyYW5zaXRpb24gdG8gdGhlIFNpZGViYXIgY29tcG9uZW50IHdoaWxlIGl0J3MgZXhpdGluZ1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1jb250YWluZXJcIikuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwKVwiO1xuICAgICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIGEgY2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGluY3JlbWVudCBidXR0b24gb24gPENoaWxkIC8+XG4gIGhhbmRsZUluY3JlbWVudCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQga2lkcyA9IHRoaXMuc3RhdGUubnVtT2ZLaWRzO1xuXG4gICAgICB0aGlzLnNldFN0YXRlID0ge1xuICAgICAgICAgIG51bU9mS2lkczoga2lkcyArKyxcbiAgICAgIH07XG4gIH1cblxuICAvLyBNYWtlIHRoZSBtZW51IGl0ZW0gYWN0aXZlIGJ5IGNoYW5naW5nIGl0cyBjb2xvclxuICBhY3RpdmVJdGVtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coYEFDVElWRSFgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIkFwcC1Db21wb25lbnRcIiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPE1lbnUgYWN0aXZlSXRlbT17dGhpcy5hY3RpdmVJdGVtfSAvPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxNYWluQ29udGFpbmVyIGluY3JlbWVudEJ1dHRvbj17dGhpcy5oYW5kbGVJbmNyZW1lbnR9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2Fib3V0LmNzcyc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtY29udGVudC1jb250YWluZXJcIiBcbiAgICAgICAgICBpZD1cImFib3V0XCJcbiAgICAgICAgICByZWY9e3RoaXMuYWJvdXRSZWZ9PlxuICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgIDxoMz5cbiAgICAgICAgRXZlcnkgeWVhciBpbiBNZXRhcmllLCBOZXcgT3JsZWFucywgYSBiYXNrZXRiYWxsIGNhbXAgXG4gICAgICAgIGlzIGhvc3RlZCB0byBoZWxwIGxvY2FsIHlvdXRoIHByYWN0aWNlIHRoZSBcbiAgICAgICAgYmFzaWNzIG9mIGJhc2tldGJhbGwuXG4gICAgICA8L2gzPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9hcnRpY2xlcy5jc3MnO1xuXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVzLWNvbnRlbnQtY29udGFpbmVyXCIgaWQ9XCJhcnRpY2xlc1wiPlxuICAgICAgPGgxPkFydGljbGVzPC9oMT5cbiAgICAgIDxoMz5IZXJlIGlzIGFuIGFydGljbGUgeW91IGNhbiBjaGVja291dDo8L2gzPlxuICAgICAgPHA+c29tZSBhcnRpY2xlIGxpbmsuLi48L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9mb290ZXIuY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDU+TGlua3M8L2g1PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICAgIDxsaT5BYm91dDwvbGk+XG4gICAgICAgICAgPGxpPlRlc3RpbW9uaWFsczwvbGk+XG4gICAgICAgICAgPGxpPlNpZ251cDwvbGk+XG4gICAgICAgICAgPGxpPkFydGljbGVzPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDU+Q29ubmVjdDwvaDU+XG4gICAgICAgIDxwPkZhY2Vib29rPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaGVhZGVyLmNzcyc7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJIZWFkZXItQ29tcG9uZW50XCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXJnZXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD1cImJ1cmdlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub3BlblNpZGViYXJ9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlLTFcIj5QYXQgR2F2aW4nczwvaDI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlLTJcIj5CYXNrZXRiYWxsIEZ1bmRhbWVudGFscyBDYW1wPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9ob21lLmNzcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWNvbnRlbnQtY29udGFpbmVyXCIgaWQ9XCJob21lXCI+XG4gICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vaW1nL2hvbWVMb2dvXzQ4MHcucG5nJyl9XG4gICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWUtbG9nb1wiXG4gICAgICAgICAgIGFsdD1cIlBhdCBHYXZpbidzIEJhc2tldGJhbGwgRnVuZGFtZW50YWxzIENhbXAgTG9nb1wiLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vL2ltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL2hlYWRlci5qc3gnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZS9ob21lLmpzeCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vQWJvdXQvYWJvdXQuanN4JztcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tICcuLi9UZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5qc3gnO1xuaW1wb3J0IFNpZ251cEZvcm0gZnJvbSAnLi4vU2lnbnVwL3NpZ251cC5qc3gnO1xuaW1wb3J0IEFydGljbGVzIGZyb20gJy4uL0FydGljbGVzL2FydGljbGVzLmpzeCc7XG4vL2ltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL2Zvb3Rlci5qc3gnO1xuXG5pbXBvcnQgJy4vbWFpbkNvbnRhaW5lci5jc3MnO1xuXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBCZWZvcmUgY29tcG9uZW50IG1vdW50cyBhbmQgYmVmb3JlIHBhZ2UgdW5sb2Fkcy4uLlxuICAvLyBUaGUgd2VicGFnZSB3aWxsIGJlIHNjcm9sbGVkIHRvIHRoZSB0b3BcbiAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcbiAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLy8gY3JlYXRlIGEgY2xpY2sgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGJ1cmdlciBidXR0b25cbiAgaGFuZGxlT3BlblNpZGViYXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEFkZHMgYSBzbW9vdGggdHJhbnNpdGlvbiB0byB0aGUgU2lkZWJhciBjb21wb25lbnQgd2hpbGUgaXQncyBlbnRlcmluZ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1jb250YWluZXJcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjI1MHB4XCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4yKVwiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyIHRvZ2dsZS1jbG9zZWRcIj5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3Rlc3RpbW9uaWFsXCIgY29tcG9uZW50PXtUZXN0aW1vbmlhbH0gLz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXBGb3JtfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hcnRpY2xlc1wiIGNvbXBvbmVudD17QXJ0aWNsZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgJy4vbWVudS5jc3MnO1xuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1lbnUtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHsvKiBNZW51IExpbmtzICovfVxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlua3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWUtbWVudS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuYWN0aXZlSXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhYm91dC1tZW51LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5hY3RpdmVJdGVtfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsLW1lbnUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmFjdGl2ZUl0ZW19PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Rlc3RpbW9uaWFsXCI+VGVzdGltb25pYWw8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lnbnVwLW1lbnUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmFjdGl2ZUl0ZW19PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiPlNpZ24gVXA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZXMtbWVudS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuYWN0aXZlSXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYXJ0aWNsZXNcIj5BcnRpY2xlczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHsvKiBFbmQgb2YgTWVudSBMaW5rcyAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiAgXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vY2hpbGQuY3NzJztcblxuY29uc3QgQ2hpbGQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLWVudHJ5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RlXCI+XG4gICAgICAgICAgICAgICAgPHA+QWRkLyBSZW1vdmUgYSBjaGlsZC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXJlbW92ZS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmNyZW1lbnRcIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWNyZW1lbnRcIj54PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNoaWxkX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGlsZC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNoaWxkX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hpbGRDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoaWxkX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGlsZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICBDaGlsZCdzIEZ1bGwgTmFtZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYWdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmFnZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoaWxkQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5BZ2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzaGlydC1zaXplXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoaXJ0LXNpemVzXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNoaXJ0X3NpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNoaXJ0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hpbGRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNpemU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNtYWxsXCI+Uzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGFyZ2VcIj5MPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoaWxkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENoaWxkIGZyb20gJy4vY2hpbGQuanN4Jztcbi8vaW1wb3J0IFN1Ym1pc3Npb25Nb2RhbCBmcm9tICcuL3N1Ym1pc3Npb25Nb2RhbC5qc3gnO1xuXG5pbXBvcnQgJy4vc2lnbnVwLmNzcyc7XG5cbmNsYXNzIFNpZ251cEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICBndWFyZF9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgZ3VhcmRfZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBndWFyZF9waG9uZTogXCJcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZF9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHNoaXJ0X3NpemU6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RWYWx1ZXM6IHtcbiAgICAgICAgICAgIGFnZVZhbHVlOiBcImFnZXNcIixcbiAgICAgICAgICAgIHNoaXJ0VmFsdWU6IFwic2hpcnRzXCJcbiAgICAgICAgfSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIG5hbWVDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBhZ2VDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBzaGlydENvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICAgIGNoaWxkRmllbGRzOiAxXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxpc3QgaXRlbXMgZGVwZW5kaW5nIG9uIG51bWJlciB3aXRoaW4gY2hpbGRGaWVsZHMnIHN0YXRlXG4gICAgY3JlYXRlQ2hpbGRMaXN0QXJyID0gKCkgPT4ge1xuICAgICAgICBsZXQgbnVtT2ZDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRGaWVsZHM7XG4gICAgICAgIGxldCBjaGlsZExpc3RBcnJheSA9IFtdO1xuXG4gICAgICAgIGlmIChudW1PZkNoaWxkcmVuIDwgNCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZkNoaWxkcmVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlsZCBoYW5kbGVDaGlsZENoYW5nZT17dGhpcy5oYW5kbGVDaGlsZEZpZWxkQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZVZhbHVlPXt0aGlzLnN0YXRlLmFnZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXJ0VmFsdWU9e3RoaXMuc3RhdGUuc2hpcnRWYWx1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hpbGRMaXN0QXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTGlzdEFycmF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b28gbWFueSBjaGlscmVuLCBjaGlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGRvIHtcbiAgICAgICAgLy8gICAgIGlmIChudW1PZkNoaWxkcmVuIDwgNCkge1xuICAgICAgICAvLyAgICAgICAgIC8vIGluY3JlbWVudCBjb3VudGVyIHZhcmlhYmxlXG4gICAgICAgIC8vICAgICAgICAgaSsrO1xuXG4gICAgICAgIC8vICAgICAgICAgLy8gcmV0dXJuIGxpIHRhZ3NcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4oXG4gICAgICAgIC8vICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxDaGlsZCBoYW5kbGVDaGlsZENoYW5nZT17dGhpcy5oYW5kbGVDaGlsZEZpZWxkQ2hhbmdlfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGFnZVZhbHVlPXt0aGlzLnN0YXRlLmFnZVZhbHVlfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNoaXJ0VmFsdWU9e3RoaXMuc3RhdGUuc2hpcnRWYWx1ZX0gLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgLy8gICAgICAgICApOyBcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJ0b28gbWFueSBraWRzLCBjaGlsZS4uLlwiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSB3aGlsZSAoaSA8IG51bU9mQ2hpbGRyZW4pO1xuICAgIH1cbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGZvcm0gZmllbGQgc3RhdGUgd2l0aCB1c2VyIGlucHV0XG4gICAgdXBkYXRlRm9ybVN0YXRlID0gKGZpZWxkLCBpbnB1dCkgPT4ge1xuICAgICAgICAvLyBTdG9yZSBmb3JtIGRhdGEgaW4gYSB2YXJpYWJsZVxuICAgICAgICBsZXQgRm9ybURhdGEgPSB7Li4udGhpcy5zdGF0ZS5mb3JtfTtcbiAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0aGUgZm9ybSBmaWVsZCdzIHN0YXRlXG4gICAgICAgIEZvcm1EYXRhW2ZpZWxkXSA9IGlucHV0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtOiBGb3JtRGF0YX0pO1xuICAgIH1cblxuICAgIC8qIFRoZSBoYW5kbGVDaGFuZ2UgZXZlbnQgaGFuZGxlcnMgd2lsbCBkbyB0aGUgZm9sbG93aW5nOlxuICAgICAgICAxLiAgU3RvcmUgbmFtZSBvZiBrZXkgKGRhdGEgdHlwZTogc3RyaW5nKSBpbiB2YXJpYWJsZVxuICAgICAgICAyLiAgU3RvcmUgdXNlciBpbnB1dCBpbiBhIHZhcmlhYmxlXG4gICAgICAgIDMuICBQYXNzIHN0cmluZyBhbmQgdXNlciBpbnB1dCBhcyBhcmd1bWVudHMgaW4gdXBkYXRlRm9ybVN0YXRlXG4gICAgKi9cbiAgICBoYW5kbGVHdWFyZF9OYW1lX0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGdfbmFtZSA9IFwiZ3VhcmRfbmFtZVwiO1xuICAgICAgICBsZXQgdXNlcl9pbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvcm1TdGF0ZShnX25hbWUsIHVzZXJfaW5wdXQpO1xuICAgIH1cbiAgICBcbiAgICBoYW5kbGVHdWFyZF9FbWFpbF9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBnX2VtYWlsID0gXCJndWFyZF9lbWFpbFwiO1xuICAgICAgICBsZXQgdXNlcl9pbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvcm1TdGF0ZShnX2VtYWlsLCB1c2VyX2lucHV0KTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlR3VhcmRfUGhvbmVfQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZ19waG9uZSA9IFwiZ3VhcmRfcGhvbmVcIjtcbiAgICAgICAgbGV0IHVzZXJfaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtU3RhdGUoZ19waG9uZSwgdXNlcl9pbnB1dCk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIENoaWxkIEZpZWxkIENoYW5nZVxuICAgIGhhbmRsZUNoaWxkRmllbGRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAvLyBBc3NpZ24gY2hpbGRyZW4gYXJyYXksIHVzZXIgaW5wdXQsIFxuICAgICAgICAvLyBzZWxlY3RlZCBodG1sIHRhZywgYW5kIGluZGV4IGluIHZhcmlhYmxlc1xuICAgICAgICBsZXQgQ2hpbGRyZW5BcnJheSA9IFsuLi50aGlzLnN0YXRlLmZvcm0uY2hpbGRyZW5dO1xuICAgICAgICBsZXQgdXNlcl9pbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgbGV0IGkgPSB0aGlzLnN0YXRlLmluZGV4O1xuICAgIFxuICAgICAgICAvLyBsb29wIHRocnUgYXJyYXlcbiAgICAgICAgQ2hpbGRyZW5BcnJheS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRvIHNlZSB3aGljaCBmaWVsZCBpcyBiZWluZyB1cGRhdGVkXG4gICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNoaWxkX25hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBjb3JyZWN0IHZhbHVlIGluIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBDaGlsZHJlbkFycmF5W2ldLmNoaWxkX25hbWUgPSB1c2VyX2lucHV0O1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGZpZWxkJ3Mgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogQ2hpbGRyZW5BcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVDb21wbGV0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgXCJhZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBjb3JyZWN0IHZhbHVlIGluIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBDaGlsZHJlbkFycmF5W2ldLmFnZSA9IHVzZXJfaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZmllbGQncyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBDaGlsZHJlbkFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWdlQ29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlIFwic2hpcnRfc2l6ZVwiOlxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGNvcnJlY3QgdmFsdWUgaW4gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIENoaWxkcmVuQXJyYXlbaV0uc2hpcnRfc2l6ZSA9IHVzZXJfaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZmllbGQncyBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBDaGlsZHJlbkFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcnRDb21wbGV0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuYW1lQ29tcGxldGVkID0gdGhpcy5zdGF0ZS5uYW1lQ29tcGxldGVkO1xuICAgICAgICBsZXQgYWdlQ29tcGxldGVkID0gdGhpcy5zdGF0ZS5hZ2VDb21wbGV0ZWQ7XG4gICAgICAgIGxldCBzaGlydENvbXBsZXRlZCA9IHRoaXMuc3RhdGUuc2hpcnRDb21wbGV0ZWQ7XG4gICAgXG4gICAgICAgIGlmIChuYW1lQ29tcGxldGVkICYmIGFnZUNvbXBsZXRlZCAmJiBzaGlydENvbXBsZXRlZCkge1xuICAgICAgICAgICAgLy8gaWYgYWxsIHRoZSBmaWVsZHMgYXJlIGNvbXBsZXRlLCBpbmNyZW1lbnQgdGhlIGluZGV4XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbmRleDogaSsrLFxuICAgICAgICAgICAgICAgIG5hbWVDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFnZUNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hpcnRDb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pdFxuICAgIGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IEZvcm1EYXRhID0gey4uLnRoaXMuc3RhdGUuZm9ybX07XG4gICAgICAgIGxldCBGb3JtQm9keSA9IEpTT04uc3RyaW5naWZ5KEZvcm1EYXRhKTtcblxuICAgICAgICAvLyBQT1NUIHJlcXVlc3QgdG8gaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Zvcm0gdmlhIGZldGNoXG4gICAgICAgIGNvbnN0IHVybCA9ICcvZm9ybSc7XG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEZvcm1Cb2R5XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTsgLy8gUmVtb3ZlIGluIFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIG9uIGFwaSBzZXJ2ZXIhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGF0YSBmcm9tIHRoZSBzZXJ2ZXI6ICAke2RhdGF9YCk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIEVycm9yIGhhbmRsZXIgXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250YWluZXJcIiBpZD1cInNpZ251cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlNpZ24gVXAhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlRvIHNpZ24gdXAgZm9yIHRoZSBjYW1wLCBwbGVhc2UgZmlsbCBvdXQgdGhlc2UgZGV0YWlsczo8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImd1YXJkaWFuX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImd1YXJkaWFuX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR3VhcmRfTmFtZV9DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJndWFyZGlhbl9uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGlhbidzIEZ1bGwgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImd1YXJkaWFuX2VtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJndWFyZGlhbl9lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHdWFyZF9FbWFpbF9DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJndWFyZGlhbl9lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRpYW4ncyBFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lLW51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmUtbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUd1YXJkX1Bob25lX0NoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRpYW4ncyBQaG9uZSBOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGlsZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRMaXN0QXJyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1Ym1pdC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9tZXNzYWdlLmNzcyc7XG5cbmNvbnN0IE1lc3NhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGFpbmVyXCIgaWQ9XCJtZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8cD57cHJvcHMucXVvdGV9PC9wPlxuICAgICAgICA8aDM+e3Byb3BzLm5hbWV9PC9oMz5cbiAgICAgICAgPGg1Pntwcm9wcy5vY2N1cGF0aW9ufTwvaDU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UuanN4JztcblxuaW1wb3J0ICcuL3Rlc3RpbW9uaWFsLmNzcyc7XG5cbmNsYXNzIFRlc3RpbW9uaWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgLy8gdXBkYXRlIHRoZSB0ZXN0aW1vbmlhbHMgb2JqZWN0IHRvIHVwZGF0ZSBvciBhZGQgdGVzdGltb25pYWxzXG4gICAgdGVzdGltb25pYWxzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiRGVubmlzIEdhbGxhZ2hlclwiLFxuICAgICAgICBvY2N1cGF0aW9uOiBcIldyaXRlciBhdCBOT0xBIFRpbWVzLVBpY2F5dW5lLlwiLFxuICAgICAgICBxdW90ZTogYFwiU2VlaW5nIEdhdmluIGluIGFjdGlvbiBvbiB0aGUgY291cnQgYXQgaGlzIGNhbXAgaXMgXG4gICAgICAgICAgICAgICAgc2VlaW5nIGEgY29hY2ggaW4gaGlzIGVsZW1lbnQsIHRob3JvdWdobHkgdGVhY2hpbmcgXG4gICAgICAgICAgICAgICAgdGhlIGJhc2ljcyBvZiB0aGUgZ2FtZSB0byBraWRzIGF0IGEgdGltZSB3aGVuIHRoZSBcbiAgICAgICAgICAgICAgICBmdW5kYW1lbnRhbHMgYXJlIG9mdGVuIG92ZXJsb29rZWQuXCJgXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkdhcnkgQmllbG1hblwiLFxuICAgICAgICBvY2N1cGF0aW9uOiBudWxsLFxuICAgICAgICBxdW90ZTogYFwiUGF0IGhhcyByZWFsbHkgc3RlcHBlZCB1cCB3aXRoIHRoaXMgY2FtcC4gXG4gICAgICAgICAgICAgICAgSGUgbG92ZXMgZG9pbmcgaXQgYW5kIHdhbnRzIHRvIGdpdmUgYmFjay5cImBcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWwtY29udGVudC1jb250YWluZXJcIiBpZD1cInRlc3RpbW9uaWFsXCI+XG4gICAgICAgIDxoMT5UZXN0aW1vbmlhbHM8L2gxPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZS1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBuYW1lPXt0ZXN0aW1vbmlhbC5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICBvY2N1cGF0aW9uPXt0ZXN0aW1vbmlhbC5vY2N1cGF0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17dGVzdGltb25pYWwucXVvdGV9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWw7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzY2E5ZjUwY2JhYTAwOGQxZjliYzBlYTIwODk2YTkxMC5wbmdcIjsiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbi8vIENyZWF0ZSBTY2hlbWEgZm9yIENoaWxkcmVuIFxuLy8gRmllbGRzOiAgbmFtZSwgYWdlLCBzaGlydCBzaXplLCBndWFyZGlhbiBrZXkgKG9yIGlkKVxuXG5jb25zdCBjaGlsZFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGNoaWxkX25hbWU6IHsgXG4gICAgICAgIHR5cGU6IFN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAvL3ZhbGlkYXRvcjogbmFtZVZhbGlkYXRvcih0aGlzLmd1YXJkaWFuX25hbWUpICBcbiAgICB9LFxuXG4gICAgY2hpbGRfYWdlOiB7IFxuICAgICAgICB0eXBlOiBOdW1iZXIsIFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgLy92YWxpZGF0b3I6IG5hbWVWYWxpZGF0b3IodGhpcy5ndWFyZGlhbl9uYW1lKSAgXG4gICAgfSxcblxuICAgIHNoaXJ0X3NpemU6IHsgXG4gICAgICAgIHR5cGU6IFN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAvL3ZhbGlkYXRvcjogbmFtZVZhbGlkYXRvcih0aGlzLmd1YXJkaWFuX25hbWUpICBcbiAgICB9LFxuXG4gICAgZ3VhcmRpYW5faWQ6IHsgXG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgXG4gICAgICAgIHJlZjogJ0d1YXJkaWFuJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG59KTtcblxuLy8gQ3JlYXRlIEd1YXJkaWFuIFNjaGVtYVxuLy8gRmllbGRzOiAgbmFtZSwgZW1haWwsIHBob25lIG51bWJlciwgY2hpbGRyZW4gaWRcbmNvbnN0IGd1YXJkaWFuU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgZ3VhcmRpYW5fbmFtZTogeyBcbiAgICAgICAgdHlwZTogU3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIC8vdmFsaWRhdG9yOiBuYW1lVmFsaWRhdG9yKHRoaXMuZ3VhcmRpYW5fbmFtZSkgXG4gICAgfSxcblxuICAgIGd1YXJkaWFuX2VtYWlsOiB7IFxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgLy92YWxpZGF0b3I6IGVtYWlsVmFsaWRhdG9yKHRoaXMuZ3VhcmRpYW5fZW1haWwpIFxuICAgIH0sXG5cbiAgICBndWFyZGlhbl9waG9uZTogeyBcbiAgICAgICAgdHlwZTogTnVtYmVyLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIC8vdmFsaWRhdG9yOiBwaG9uZVZhbGlkYXRvcih0aGlzLmd1YXJkaWFuX3Bob25lKSBcbiAgICB9LFxuXG4gICAgY2hpbGRyZW46IFtjaGlsZFNjaGVtYV0sXG5cbiAgICBzdWJtaXNzaW9uRGF0ZTogeyBcbiAgICAgICAgdHlwZTogRGF0ZSwgXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93IFxuICAgIH1cbn0pO1xuXG4vLyBDcmVhdGUgYSBDaGlsZCBNb2RlbCBhbmQgR3VhcmRpYW4gTW9kZWxcbmNvbnN0IENoaWxkID0gbW9uZ29vc2UubW9kZWwoJ0NoaWxkJywgY2hpbGRTY2hlbWEpO1xuY29uc3QgR3VhcmRpYW4gPSBtb25nb29zZS5tb2RlbCgnR3VhcmRpYW4nLCBndWFyZGlhblNjaGVtYSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyBDaGlsZCwgR3VhcmRpYW4gfTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzL3JvdXRlcyc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuXG4vLyBVbmNvbW1lbnQgdG8gZW5hYmxlIENPUlMgTWlkZGxld2FyZSBpZiBmcm9udCBlbmQgYW5kLi4uXG4vLyBiYWNrIGVuZCBzb3VyY2UgY29kZSBhcmUgb24gdHdvIGRpZmZlcmVudCBzZXJ2ZXJzXG5cbi8vIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4vLyAgICAgLy8gUmVxdWVzdCBvcmlnaW4ocykgdG8gYWxsb3dcbi8vICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIpO1xuLy8gICAgIC8vIFJlcXVlc3QgaGVhZGVyKHMpIHRvIGFsbG93XG4vLyAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0XCIpO1xuLy8gICAgIC8vIFJlcXVlc3QgbWV0aG9kKHMpIHRvIGFsbG93XG4vLyAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQT1NUJyk7XG4vLyAgICAgbmV4dCgpO1xuLy8gfSk7XG5cbi8vIFN0b3JlIGRiIGVudmlyb25tZW50IHZhcmlhYmxlcyBpbnRvIHZhcmlhYmxlc1xuY29uc3QgaG9zdCA9IHByb2Nlc3MuZW52LkRCX0hPU1Q7XG5jb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5EQl9OQU1FO1xuY29uc3QgdXNlciA9IHByb2Nlc3MuZW52LkRCX1VTRVI7XG5jb25zdCBwYXNzID0gcHJvY2Vzcy5lbnYuREJfUEFTUztcblxuLy8gQ3JlYXRlIG1vbmdvZGIncyBBdGxhcyB1cmkgc3RyaW5nXG5jb25zdCB1cmkgPSBgbW9uZ29kYitzcnY6Ly8ke3VzZXJ9OiR7cGFzc31AJHtob3N0fSR7ZGJOYW1lfWA7XG5cbmNvbnNvbGUubG9nKGBUSElTIElTIFRIRSBVUkk6ICAke3VyaX1gKTtcblxuLy8gQ29ubmVjdCB0byBNb25nb29zZVxubW9uZ29vc2UuY29ubmVjdCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuLy8gYG1vbmdvZGIrc3J2Oi8vJHt1c2VyfToke3Bhc3N9QCR7aG9zdH0ke2RiTmFtZX0/cmV0cnlXcml0ZXM9dHJ1ZWAsXG5cbi8vIEdldCBub3RpZmllZCBmb3Igc3VjY2Vzc2Z1bGwgZGIgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGVycm9yXG5jb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3I6JykpO1xuZGIub25jZSgnb3BlbicsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIldFIENPTk5FQ1RFRCBIVU5OWSEhXCIpXG59KTtcblxuLy8gRW5hYmxlIHJvdXRlcyBhbmQgcHV0IGFsbCBBUEkgZW5kcG9pbnRzIHVuZGVyICcvYXBpJ1xuYXBwLnVzZShyb3V0ZXIpO1xuICBcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDU7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbihgQXBwIGlzIHJ1bm5pbmc6ICBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKSk7XG59KTsiLCJpbXBvcnQgeyBDaGlsZCwgR3VhcmRpYW4gfSBmcm9tICcuLi9Nb2RlbHMvRm9ybSc7XG5cbi8qICBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGFkZCB0aGUgc2lnbnVwIGZvcm0uLi4gXG4gICAgZGF0YSBpbnRvIHRoZSBkYi5cbiovXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICAvLyBTdG9yZSBmb3JtIGRhdGEgaW4gdmFyaWFibGVzXG4gICAgY29uc3QgZ3VhcmRfbmFtZSA9IHJlcS5ib2R5Lmd1YXJkX25hbWU7XG4gICAgY29uc3QgZ3VhcmRfZW1haWwgPSByZXEuYm9keS5ndWFyZF9lbWFpbDtcbiAgICBjb25zdCBndWFyZF9waG9uZSA9IHJlcS5ib2R5Lmd1YXJkX3Bob25lO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gWy4uLnJlcS5ib2R5LmNoaWxkcmVuXTtcbiAgICBjb25zdCBjaGlsZERvY3MgPSBbXTtcblxuICAgIC8vIENyZWF0ZSBndWFyZGlhbiBkb2N1bWVudFxuICAgIGNvbnN0IG5ld0d1YXJkaWFuID0gbmV3IEd1YXJkaWFuKHtcbiAgICAgICAgZ3VhcmRpYW5fbmFtZTogZ3VhcmRfbmFtZSxcbiAgICAgICAgZ3VhcmRpYW5fZW1haWw6IGd1YXJkX2VtYWlsLFxuICAgICAgICBndWFyZGlhbl9waG9uZTogZ3VhcmRfcGhvbmVcbiAgICB9KTtcblxuICAgIC8vIExvb3AgdGhydSBhcnJheSBhbmQgY3JlYXRlIGEgZG9jdW1lbnQgZm9yIGVhY2ggY2hpbGRcbiAgICAvLyBzdG9yZSBkb2NzIGludG8gY2hpbGREb2NzIGFycmF5IFxuICAgIC8vIChpbnNlcnQgYXJyYXkgaW4gZ3VhcmRpYW4gZG9jKVxuICAgIGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNoaWxkIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IG5ld0NoaWxkID0gbmV3IENoaWxkKHtcbiAgICAgICAgICAgIGNoaWxkX25hbWU6IGNoaWxkLmNoaWxkX25hbWUsXG4gICAgICAgICAgICBjaGlsZF9hZ2U6IGNoaWxkLmFnZSxcbiAgICAgICAgICAgIHNoaXJ0X3NpemU6IGNoaWxkLnNoaXJ0X3NpemUsXG4gICAgICAgICAgICBndWFyZGlhbl9pZDogbmV3R3VhcmRpYW4uX2lkXG4gICAgICAgIH0pO1xuICAgICAgICBjaGlsZERvY3MucHVzaChuZXdDaGlsZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgZ3VhcmRpYW4gZG9jdW1lbnRcbiAgICBuZXdHdWFyZGlhbi5jaGlsZHJlbiA9IFsuLi5jaGlsZERvY3NdO1xuICAgIFxuICAgIC8vIHNhdmUgZ3VhcmRpYW4oYW5kIGNoaWxkcmVuKSB0byBkYlxuICAgIG5ld0d1YXJkaWFuLnNhdmUoZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXMuanNvbih7ZXJyb3I6IFwiZGF0YWJhc2UgZXJyb3JcIn0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuanNvbih7c3VjY2VzczogXCJUaGFua3MsIGRhdGEgd2FzIHNhdmVkIVwifSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vLyBJbXBvcnQgdGhlIG1haW4gQXBwIGNvbXBvbmVudFxuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi8uLi9jbGllbnQvc3JjL0FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXG4gICAgLy8gVGhpcyBjb250ZXh0IG9iamVjdCBjb250YWlucyB0aGUgcmVzdWx0cyBvZiB0aGUgcmVuZGVyXG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gICAgY29uc3QgcmVuZGVyID0gKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgIC8vIFNlbmQgYW4gZXJyb3IgbWVzc2FnZVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IGVycm9yOiAnaW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBSZW5kZXIgdGhlIEFwcCBjb21wb25lbnQgYXMgYSBzdHJpbmdcbiAgICAgICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgICk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkSFRNTCA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicsXG4gICAgICAgICAgICBgPGRpdiBpZD1cInJvb3RcIj4ke2h0bWx9PC9kaXY+YFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzLnNlbmQocmVwbGFjZWRIVE1MKTtcbiAgICB9XG4gICAgXG4gICAgLy8gUmVuZGVyIGluIFBST0RVQ1RJT05cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBQb2ludCB0byB0aGUgaHRtbCBmaWxlIGluIHByb2R1Y3Rpb24gYnVpbGQgZGlyZWN0b3J5XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2J1aWxkL2luZGV4Lmh0bWwnKTtcblxuICAgICAgICBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0ZjgnLCAoZXJyLCBodG1sRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyKGVyciwgaHRtbERhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH0gZWxzZSB7IFxuICAgIC8vIFJlbmRlciBpbiBERVZFTE9QTUVOVFxuICAgICAgICBjb25zb2xlLmxvZyhgZXllZWVlZWVlZWVoaGhoYCk7XG4gICAgICAgIC8vIFBvaW50IHRvIHRoZSBodG1sIGZpbGUgY3JlYXRlZCBieSBDUkEncyBidWlsZCB0b29sXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ2NsaWVudC9idWlsZC9pbmRleC5odG1sJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGSUxFRUVFRTogICR7ZmlsZVBhdGh9YClcbiAgICAgICAgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4JywgKGVyciwgaHRtbERhdGEpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcihlcnIsIGh0bWxEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSBcbn0iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7IC8vIFVuY29tbWVudCBjb2RlIGlmIENPUlMgaXMgYmVpbmcgdXNlZFxuaW1wb3J0IHNlcnZlclJlbmRlcmVyIGZyb20gJy4uL21pZGRsZXdhcmUvc2VydmVyUmVuZGVyZXInO1xuaW1wb3J0IGFkZFRvREIgZnJvbSAnLi4vbWlkZGxld2FyZS9hZGRUb0RCJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcmVuZGVyQnVpbGQgPSAoYnVpbGRGaWxlKSA9PiB7XG4gICAgcmV0dXJuIHJvdXRlci51c2UoZXhwcmVzcy5zdGF0aWMoYnVpbGRGaWxlKSk7XG59XG5cbi8vIFJlbmRlciBzdGF0aWMgYXNzZXRzIGZvciBQUk9EVUNUSU9OXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFBvaW50IHRvIHByb2R1Y3Rpb24gYnVpbGQgZGlyZWN0b3J5XG4gICAgY29uc3QgYnVpbGQgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYnVpbGQnKTtcbiAgICByZW5kZXJCdWlsZChidWlsZCk7XG5cbn0gZWxzZSB7IFxuLy8gUmVuZGVyIHN0YXRpYyBhc3NldHMgZm9yIERFVkVMT1BNRU5UXG4gICAgLy8gUG9pbnQgdG8gY2xpZW50IGJ1aWxkIGRpcmVjdG9yeVxuICAgIGNvbnN0IGJ1aWxkID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJ2NsaWVudCcsICdidWlsZCcpO1xuICAgIGNvbnNvbGUubG9nKGBCVUlMRCBERVZFTE9QTUVOVDogICR7YnVpbGR9YCk7XG4gICAgcmVuZGVyQnVpbGQoYnVpbGQpO1xufVxuXG4vLyBTZXJ2ZSByZW5kZXJlZCBwYWdlIGF0IHJvb3QgKC8pXG5yb3V0ZXIudXNlKCdeLyQnLCBzZXJ2ZXJSZW5kZXJlcik7XG5cbi8vIFVuY29tbWVudCBjb2RlIGlmIENPUlMgaXMgYmVpbmcgdXNlZFxuXG4vLyBjb25zdCBjb3JzT3B0aW9ucyA9IHtcbi8vICAgICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuLy8gICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsXG4vLyAgICAgbWV0aG9kOiAnUE9TVCdcbi8vIH07XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqUk9VVEVTKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8gcm91dGU6ICBQT1NUIEAgL2FwaVxuLy8gZGVzY3JpcHQ6ICBwcm9jZXNzIHRoZSBmb3JtIGRhdGEsIHZhbGlkYXRlIGRhdGEgYW5kIHNhdmUgaXQgaW4gZGJcbi8vIGFjY2VzczogIFBSSVZBVEVcbi8vIG1pc2M6ICBlbmFibGUgY29yc1xuXG4vKiAqKioqKioqKlVuY29tbWVudCBjb2RlIGlmIENPUlMgaXMgTk9UIGJlaW5nIHVzZWQqKioqKioqKi9cbnJvdXRlci5wb3N0KCcvYXBpJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgYWRkVG9EQihyZXEsIHJlcyk7XG59KTtcbi8qICoqKioqKioqKioqKipFTkQgT0YgUk9VVEVTIFdJVEhPVVQgQ09SUyoqKioqKioqKioqKioqKioqL1xuXG4vKiAqKioqKioqKioqVW5jb21tZW50IGNvZGUgaWYgQ09SUyBpcyBiZWluZyB1c2VkKioqKioqKioqKi9cbi8vIHJvdXRlci5wb3N0KCcvZm9ybScsIGNvcnMoY29yc09wdGlvbnMpLCAocmVxLCByZXMpID0+IHtcbi8vICAgICBhZGRUb0RCKHJlcSwgcmVzKTtcbi8vIH0pO1xuLyogKioqKioqKioqKioqKkVORCBPRiBST1VURVMgV0lUSCBDT1JTKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=