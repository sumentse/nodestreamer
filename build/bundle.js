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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/charts.js":
/*!***********************!*\
  !*** ./api/charts.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pagination.js */ \"./utils/pagination.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/**\n * API for getting charts\n * @param {MongoDB Collection} collection \n */\n\nvar chartsAPI = function chartsAPI(collection) {\n  router.get('/categories',\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(req, res) {\n      var currency, lp;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return collection.distinct('currency');\n\n            case 2:\n              currency = _context.sent;\n              _context.next = 5;\n              return collection.distinct('lp');\n\n            case 5:\n              lp = _context.sent;\n              res.json({\n                currency: currency,\n                lp: lp\n              });\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }()); //This will serve the data, filter, and pagination.\n\n  router.post('/filter',\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(req, res) {\n      var totalDocuments, currentPage, pageSize, maxPage, paginationObj, results;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return collection.count(_objectSpread({}, req.body));\n\n            case 2:\n              totalDocuments = _context2.sent;\n              currentPage = Number(req.query.currentPage) ? Number(req.query.currentPage) : 1;\n              pageSize = Number(req.query.pageSize) ? Number(req.query.pageSize) : 300;\n              maxPage = Number(req.query.maxPage) ? Number(req.query.maxPage) : 10;\n              paginationObj = Object(_utils_pagination_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(totalDocuments, currentPage, pageSize, maxPage);\n\n              if (!(currentPage > paginationObj.currentPage)) {\n                _context2.next = 11;\n                break;\n              }\n\n              res.sendStatus(404).end();\n              _context2.next = 15;\n              break;\n\n            case 11:\n              _context2.next = 13;\n              return collection.find(_objectSpread({}, req.body)).skip((paginationObj.currentPage - 1) * paginationObj.pageSize).limit(paginationObj.pageSize).toArray();\n\n            case 13:\n              results = _context2.sent;\n              return _context2.abrupt(\"return\", res.json({\n                results: results,\n                pagination: paginationObj\n              }));\n\n            case 15:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chartsAPI);\n\n//# sourceURL=webpack:///./api/charts.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var csv_streamify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! csv-streamify */ \"csv-streamify\");\n/* harmony import */ var csv_streamify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(csv_streamify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var errorhandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! errorhandler */ \"errorhandler\");\n/* harmony import */ var errorhandler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(errorhandler__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/charts */ \"./api/charts.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_11__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();\n\n\n\n\n\n\n\n\n\n\nvar MongoClient = mongodb__WEBPACK_IMPORTED_MODULE_10___default.a.MongoClient; //execute program\n\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee3() {\n  var server, client, url, dataSrc, dbo, exampleDB, startServer, readCSV, checkIfCollectionExist;\n  return regeneratorRuntime.wrap(function _callee3$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          url = process.env.MONGOURL || 'mongodb://localhost:27017';\n          dataSrc = './dataSrc/adata.csv';\n          _context3.next = 5;\n          return MongoClient.connect(url, {\n            useNewUrlParser: true\n          });\n\n        case 5:\n          client = _context3.sent;\n          console.log('Mongo is connected');\n          dbo = client.db('FinTechTest');\n\n          startServer = function startServer() {\n            var app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n            app.set('port', process.env.PORT || 3000);\n            app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\n            app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json({\n              limit: '100mb'\n            }));\n            app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n              extended: true,\n              limit: '100mb'\n            }));\n            app.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('combined'));\n            app.use('/charts', Object(_api_charts__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(exampleDB));\n            app.use(errorhandler__WEBPACK_IMPORTED_MODULE_7___default()());\n            server = app.listen(app.get('port'), function () {\n              console.log(\"Server is running at port \".concat(app.get('port')));\n            });\n          }; //handles CSV to JSON Conversion via streaming\n\n\n          readCSV = function readCSV() {\n            console.log('Processing the file');\n            var parser = csv_streamify__WEBPACK_IMPORTED_MODULE_6___default()({\n              columns: true\n            });\n            var tempArr = [];\n            parser.on('data', function (line) {\n              tempArr.push({\n                _id: uuid_v4__WEBPACK_IMPORTED_MODULE_11___default()(),\n                currency: line.sym,\n                time_stamp: new Date(line.ts),\n                lp: line.lp,\n                bid_price: Number(line.bid_price),\n                bid_quantity: Number(line.bid_quantity),\n                asking_price: Number(line.ask_price),\n                asking_quantity: Number(line.ask_quantity)\n              });\n            });\n            parser.on('end',\n            /*#__PURE__*/\n            _asyncToGenerator(\n            /*#__PURE__*/\n            regeneratorRuntime.mark(function _callee() {\n              return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      _context.next = 2;\n                      return exampleDB.insertMany(tempArr);\n\n                    case 2:\n                      _context.next = 4;\n                      return exampleDB.createIndex({\n                        _id: 1\n                      });\n\n                    case 4:\n                      console.log('Finished processing. Now starting server.');\n                      startServer();\n\n                    case 6:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee, this);\n            })));\n            fs__WEBPACK_IMPORTED_MODULE_8___default.a.createReadStream(dataSrc).pipe(parser);\n          };\n\n          checkIfCollectionExist =\n          /*#__PURE__*/\n          function () {\n            var _ref3 = _asyncToGenerator(\n            /*#__PURE__*/\n            regeneratorRuntime.mark(function _callee2(collectionName) {\n              var hasCollections;\n              return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                  switch (_context2.prev = _context2.next) {\n                    case 0:\n                      _context2.next = 2;\n                      return dbo.collection(collectionName).findOne({});\n\n                    case 2:\n                      hasCollections = _context2.sent;\n\n                      if (hasCollections) {\n                        _context2.next = 12;\n                        break;\n                      }\n\n                      console.log(\"The collection '\".concat(collectionName, \"' does not exist. Creating a new one.\"));\n                      _context2.next = 7;\n                      return dbo.createCollection(collectionName);\n\n                    case 7:\n                      console.log(\"The collection '\".concat(collectionName, \"' was created\"));\n                      exampleDB = dbo.collection(collectionName);\n                      readCSV();\n                      _context2.next = 14;\n                      break;\n\n                    case 12:\n                      exampleDB = dbo.collection(collectionName);\n                      startServer();\n\n                    case 14:\n                    case \"end\":\n                      return _context2.stop();\n                  }\n                }\n              }, _callee2, this);\n            }));\n\n            return function checkIfCollectionExist(_x) {\n              return _ref3.apply(this, arguments);\n            };\n          }();\n\n          checkIfCollectionExist('example');\n          _context3.next = 18;\n          break;\n\n        case 14:\n          _context3.prev = 14;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.log(_context3.t0);\n          server.close();\n\n        case 18:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _callee3, this, [[0, 14]]);\n}))();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./utils/pagination.js":
/*!*****************************!*\
  !*** ./utils/pagination.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * A function that will returns a pagination object.\n * @function\n * @param {Number} totalItems\n * @param {Number} currentPage\n * @param {Number} pageSize \n * @param {Number} maxPages \n * @returns {Object} It will return a pagination object \n */\nvar paginate = function paginate(totalItems) {\n  var currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n  var maxPages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;\n  // calculate total pages\n  var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range\n\n  if (currentPage < 1) {\n    currentPage = 1;\n  } else if (currentPage > totalPages) {\n    currentPage = totalPages;\n  }\n\n  var startPage, endPage;\n\n  if (totalPages <= maxPages) {\n    // total pages less than max so show all pages\n    startPage = 1;\n    endPage = totalPages;\n  } else {\n    // total pages more than max so calculate start and end pages\n    var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);\n    var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;\n\n    if (currentPage <= maxPagesBeforeCurrentPage) {\n      // current page near the start\n      startPage = 1;\n      endPage = maxPages;\n    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {\n      // current page near the end\n      startPage = totalPages - maxPages + 1;\n      endPage = totalPages;\n    } else {\n      // current page somewhere in the middle\n      startPage = currentPage - maxPagesBeforeCurrentPage;\n      endPage = currentPage + maxPagesAfterCurrentPage;\n    }\n  } // calculate start and end item indexes\n\n\n  var startIndex = (currentPage - 1) * pageSize;\n  var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control\n\n  var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {\n    return startPage + i;\n  }); // return object with all pager properties required by the view\n\n  return {\n    totalItems: totalItems,\n    currentPage: currentPage,\n    pageSize: pageSize,\n    totalPages: totalPages,\n    startPage: startPage,\n    endPage: endPage,\n    startIndex: startIndex,\n    endIndex: endIndex,\n    pages: pages\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (paginate);\n\n//# sourceURL=webpack:///./utils/pagination.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "csv-streamify":
/*!********************************!*\
  !*** external "csv-streamify" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csv-streamify\");\n\n//# sourceURL=webpack:///external_%22csv-streamify%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"errorhandler\");\n\n//# sourceURL=webpack:///external_%22errorhandler%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ })

/******/ });