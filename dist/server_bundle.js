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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client/pages/HomePage */ "./src/client/pages/HomePage.js");
/* harmony import */ var _client_pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/pages/UsersListPage */ "./src/client/pages/UsersListPage.js");
/* harmony import */ var _client_pages_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/pages/App */ "./src/client/pages/App.js");
/* harmony import */ var _client_pages_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/pages/NotFound */ "./src/client/pages/NotFound.js");
/* harmony import */ var _client_pages_AdminsListPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/pages/AdminsListPage */ "./src/client/pages/AdminsListPage.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = ([_objectSpread({}, _client_pages_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  routes: [_objectSpread({}, _client_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: "/",
    exact: true
  }), _objectSpread({}, _client_pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/users"
  }), _objectSpread({}, _client_pages_AdminsListPage__WEBPACK_IMPORTED_MODULE_5__["default"]), _objectSpread({}, _client_pages_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"])]
})]);

/***/ }),

/***/ "./src/actions/adminsActions.js":
/*!**************************************!*\
  !*** ./src/actions/adminsActions.js ***!
  \**************************************/
/*! exports provided: FETCH_ADMINS_START, FETCH_ADMINS_SUCCESS, FETCH_ADMINS_ERROR, fetchAdmins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADMINS_START", function() { return FETCH_ADMINS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADMINS_SUCCESS", function() { return FETCH_ADMINS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADMINS_ERROR", function() { return FETCH_ADMINS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAdmins", function() { return fetchAdmins; });
var FETCH_ADMINS_START = "FETCH_ADMINS_START";
var FETCH_ADMINS_SUCCESS = "FETCH_ADMINS_SUCCESS";
var FETCH_ADMINS_ERROR = "FETCH_ADMINS_ERROR";
var fetchAdmins = function fetchAdmins() {
  return function (dispatch, getState, api) {
    dispatch({
      type: FETCH_ADMINS_START
    });
    return api.get("/admins").then(function (res) {
      dispatch({
        type: FETCH_ADMINS_SUCCESS,
        admins: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: FETCH_ADMINS_ERROR,
        error: err
      });
    });
  };
};

/***/ }),

/***/ "./src/actions/authActions.js":
/*!************************************!*\
  !*** ./src/actions/authActions.js ***!
  \************************************/
/*! exports provided: FETCH_CURRENT_USER_START, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_ERROR, fetchCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CURRENT_USER_START", function() { return FETCH_CURRENT_USER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CURRENT_USER_SUCCESS", function() { return FETCH_CURRENT_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CURRENT_USER_ERROR", function() { return FETCH_CURRENT_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
var FETCH_CURRENT_USER_START = "FETCH_CURRENT_USER_START";
var FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
var FETCH_CURRENT_USER_ERROR = "FETCH_CURRENT_USER_ERROR";
var fetchCurrentUser = function fetchCurrentUser() {
  return function (dispatch, getState, api) {
    dispatch({
      type: FETCH_CURRENT_USER_START
    });
    return api.get("/current_user").then(function (res) {
      console.log("************* FETCH_CURRENT_USER", res.data);
      dispatch({
        type: FETCH_CURRENT_USER_SUCCESS,
        user: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: FETCH_CURRENT_USER_ERROR,
        error: err
      });
    });
  };
};

/***/ }),

/***/ "./src/actions/usersActions.js":
/*!*************************************!*\
  !*** ./src/actions/usersActions.js ***!
  \*************************************/
/*! exports provided: FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_START", function() { return FETCH_USERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_SUCCESS", function() { return FETCH_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_ERROR", function() { return FETCH_USERS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var FETCH_USERS_START = "FETCH_USERS_START";
var FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
var FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
var fetchUsers = function fetchUsers() {
  return (/*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //api is the axiosInstance created in client.js
                dispatch({
                  type: FETCH_USERS_START
                });
                return _context.abrupt("return", api.get("/users").then(function (res) {
                  dispatch({
                    type: FETCH_USERS_SUCCESS,
                    users: res.data
                  });
                }).catch(function (err) {
                  dispatch({
                    type: FETCH_USERS_SUCCESS,
                    error: err
                  });
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var auth = this.props.auth;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, "Home"), auth.currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/api/logout"
      }, "logout")), !auth.currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/api/auth/google"
      }, "login")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./src/client/components/css/Home.css":
/*!********************************************!*\
  !*** ./src/client/components/css/Home.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* harmony default export */ __webpack_exports__["default"] = (function (ChildComponent) {
  var RequireAuth = /*#__PURE__*/function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, _getPrototypeOf(RequireAuth).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: "render",
      value: function render() {
        console.log("**************RequireAuth props", this.props); // switch (this.props.auth.currentUser) {
        //     case null:
        //         return (
        //             <div>Loading....</div>
        //         );
        //
        //     case false:
        //        return <Redirect to={`/`}/>;
        //
        //     default:
        //         return <ChildComponent {...this.props}/>;
        // }

        if (!this.props.auth.currentUser) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
            to: "/"
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return RequireAuth;
});

/***/ }),

/***/ "./src/client/pages/AdminsListPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/AdminsListPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/usersActions */ "./src/actions/usersActions.js");
/* harmony import */ var _components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hocs/requireAuth */ "./src/client/components/hocs/requireAuth.js");
/* harmony import */ var _actions_adminsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/adminsActions */ "./src/actions/adminsActions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AdminsListPage = /*#__PURE__*/function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminsListPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminsListPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderAdmins", function () {
      // admins' reducer initial state
      var admins = _this.props.admins;
      return admins.admins.map(function (admin) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: admin.id
        }, admin.name);
      });
    });

    return _this;
  }

  _createClass(AdminsListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //avoid fetching admins second time on client if they've already been fetch
      //on the server (admins will already be fetched on the server on page reload on '/admins')
      var _this$props$admins = this.props.admins,
          isFinishedFetchingAdmins = _this$props$admins.isFinishedFetchingAdmins,
          areAdminsFetched = _this$props$admins.areAdminsFetched;

      if (!isFinishedFetchingAdmins && !areAdminsFetched) {
        this.props.dispatch(Object(_actions_adminsActions__WEBPACK_IMPORTED_MODULE_4__["fetchAdmins"])());
      }
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Protected Admins Page List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.renderAdmins()));
    }
  }]);

  return AdminsListPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  // console.log({state});
  return {
    state: state,
    auth: state.auth,
    admins: state.admins
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(_components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminsListPage)),
  loadData: function loadData(store) {
    return store.dispatch(Object(_actions_adminsActions__WEBPACK_IMPORTED_MODULE_4__["fetchAdmins"])());
  }
});

/***/ }),

/***/ "./src/client/pages/App.js":
/*!*********************************!*\
  !*** ./src/client/pages/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/authActions */ "./src/actions/authActions.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./src/client/components/Header.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //avoid fetching current user second time on client if it has already been fetch
      //on the server (current user will already be fetched on the server on any page reload)
      if (!this.props.auth.isFinishedFetchingCurrentUser) {
        this.props.dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"])());
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {//todo: check auth on route change
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          route = _this$props.route,
          state = _this$props.state;
      console.log("*********************State from App => ", state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state,
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(App),
  loadData: function loadData(store) {
    return store.dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"])());
  }
});

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_css_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/css/Home.css */ "./src/client/components/css/Home.css");
/* harmony import */ var _components_css_Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_css_Home_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/usersActions */ "./src/actions/usersActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HomePage = /*#__PURE__*/function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "clicked",
    value: function clicked() {
      alert("Hiii");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "home"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.clicked
      }, "click me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/users"
      }, "Users")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/admins"
      }, "Admins")));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = ({
  component: HomePage
});

/***/ }),

/***/ "./src/client/pages/NotFound.js":
/*!**************************************!*\
  !*** ./src/client/pages/NotFound.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NotFound = function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  //context is received by al;l components as staticContext
  staticContext.notFound = true;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Not Found"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: NotFound
});

/***/ }),

/***/ "./src/client/pages/UsersListPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/UsersListPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/usersActions */ "./src/actions/usersActions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var UsersListPage = /*#__PURE__*/function (_Component) {
  _inherits(UsersListPage, _Component);

  function UsersListPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UsersListPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UsersListPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderUsers", function () {
      //users' reducer initial state
      var users = _this.props.users;
      return users.users.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: user.id
        }, user.name);
      });
    });

    return _this;
  }

  _createClass(UsersListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //avoid fetching users second time on client if they've already been fetch
      //on the server (users will already be fetched on the server on page reload on '/users')
      var _this$props$users = this.props.users,
          isFinishedFetchingUsers = _this$props$users.isFinishedFetchingUsers,
          areUsersFetched = _this$props$users.areUsersFetched;

      if (!isFinishedFetchingUsers && !areUsersFetched) {
        this.props.dispatch(Object(_actions_usersActions__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"])());
      }
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Users List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.renderUsers()));
    }
  }]);

  return UsersListPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  // console.log({state});
  return {
    state: state,
    users: state.users
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(UsersListPage),
  loadData: function loadData(store) {
    //console.log("Trying to load some data....")
    return store.dispatch(Object(_actions_usersActions__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"])());
  }
});

/***/ }),

/***/ "./src/helpers/initStore.js":
/*!**********************************!*\
  !*** ./src/helpers/initStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_allReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/allReducers */ "./src/reducers/allReducers.js");




/* harmony default export */ __webpack_exports__["default"] = (function (req) {
  // console.log("*****************");
  // console.log(req.get("cookie"));
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    //todo: readjust url according to project
    baseURL: "https://react-ssr-api.herokuapp.com",
    headers: {
      cookie: req.get("cookie" || false)
    }
  });
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_allReducers__WEBPACK_IMPORTED_MODULE_3__["default"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));
});

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");







/* harmony default export */ __webpack_exports__["default"] = (function (req, store, context) {
  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: req.path,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__["renderRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_6__["default"])))));
  var html = "\n    <html>\n    <body>\n        <head>\n            <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\"/>\n        </head>\n        <div id=\"root\">".concat(content, "</div>\n        <script>\n            window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), "\n        </script>\n        <script src=\"client_bundle.js\"></script>\n        <script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script>\n    </body>\n    </html>\n    ");
  return html;
});

/***/ }),

/***/ "./src/reducers/adminsReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/adminsReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_adminsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/adminsActions */ "./src/actions/adminsActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  admins: [],
  isFetchingAdmins: false,
  isFinishedFetchingAdmins: false,
  areAdminsFetched: false,
  error: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_adminsActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADMINS_START"]:
      return _objectSpread({}, state, {
        isFetchingAdmins: true,
        isFinishedFetchingAdmins: false,
        areAdminsFetched: false
      });

    case _actions_adminsActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADMINS_SUCCESS"]:
      {
        return _objectSpread({}, state, {
          isFetchingAdmins: false,
          isFinishedFetchingAdmins: true,
          areAdminsFetched: true,
          admins: action.admins
        });
      }

    case _actions_adminsActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADMINS_ERROR"]:
      {
        return _objectSpread({}, state, {
          isFetchingAdmins: false,
          isFinishedFetchingAdmins: true,
          areAdminsFetched: false,
          error: action.error
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/allReducers.js":
/*!*************************************!*\
  !*** ./src/reducers/allReducers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/usersReducer */ "./src/reducers/usersReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./src/reducers/authReducer.js");
/* harmony import */ var _adminsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminsReducer */ "./src/reducers/adminsReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  admins: _adminsReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/reducers/authReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/authActions */ "./src/actions/authActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  isFetchingCurrentUser: false,
  isFinishedFetchingCurrentUser: false,
  isCurrentUserFetched: false,
  currentUser: null,
  error: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_authActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CURRENT_USER_START"]:
      {
        return _objectSpread({}, state, {
          isFetchingCurrentUser: true,
          isFinishedFetchingCurrentUser: false,
          isCurrentUserFetched: false
        });
      }

    case _actions_authActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CURRENT_USER_SUCCESS"]:
      return _objectSpread({}, state, {
        isFetchingCurrentUser: false,
        isFinishedFetchingCurrentUser: true,
        isCurrentUserFetched: true,
        currentUser: action.user === "" ? null : action.user
      });

    case _actions_authActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CURRENT_USER_ERROR"]:
      return _objectSpread({}, state, {
        isFetchingCurrentUser: false,
        isFinishedFetchingCurrentUser: true,
        isCurrentUserFetched: false,
        currentUser: false,
        error: action.error
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/usersReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/usersReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/usersActions */ "./src/actions/usersActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  users: [],
  isFetchingUsers: false,
  isFinishedFetchingUsers: false,
  areUsersFetched: false,
  error: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_usersActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_START"]:
      return _objectSpread({}, state, {
        isFetchingUsers: true,
        isFinishedFetchingUsers: false,
        areUsersFetched: false
      });

    case _actions_usersActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_SUCCESS"]:
      return _objectSpread({}, state, {
        isFetchingUsers: false,
        isFinishedFetchingUsers: true,
        areUsersFetched: true,
        users: action.users
      });

    case _actions_usersActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS_ERROR"]:
      return _objectSpread({}, state, {
        isFetchingUsers: false,
        isFinishedFetchingUsers: true,
        areUsersFetched: false,
        error: action.error
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/renderer */ "./src/helpers/renderer.js");
/* harmony import */ var _helpers_initStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/initStore */ "./src/helpers/initStore.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");


var express = __webpack_require__(/*! express */ "express");

var React = __webpack_require__(/*! react */ "react");






var app = express();
var PORT = 3000; //todo: change api endpoint depending on project

app.use("/api", express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default()("http://react-ssr-api.herokuapp.com", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    //todo: setting origin of requests(will change depending on project)
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  }
}));
app.use(express.static("public"));
app.get("*", function (req, res) {
  //load redux store data before sending html to client
  var store = Object(_helpers_initStore__WEBPACK_IMPORTED_MODULE_4__["default"])(req);
  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["matchRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_5__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store) : null;
  }) //render app after loading all data
  .map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  }); //render app after all data fetching is completed

  Promise.all(promises).then(function () {
    var context = {};
    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_3__["default"])(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});
app.listen(PORT, function () {
  console.log("Listening on port ".concat(PORT));
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=server_bundle.js.map