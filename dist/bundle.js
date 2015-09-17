/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./module */ 1);
	
	__webpack_require__(/*! ./controllers/home */ 3);
	
	__webpack_require__(/*! ./config */ 2);

/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module('uiroutertest', ['ui.router']);

/***/ },
/* 2 */
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	app.config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.state('home', { url: '/', templateUrl: 'src/views/home.html', controller: 'homeCtrl' }).state('about', { url: '/about', templateUrl: 'src/views/about.html' });
	});

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./src/controllers/home.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('homeCtrl', function () {
	  console.log('home loaded');
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map