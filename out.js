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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Parallax = {
    parrallaxes: [document.querySelectorAll('.parallax--dots'), document.querySelectorAll('.parallax--circle'), document.querySelectorAll('.parallax--traingles'), document.querySelectorAll('.parallax--hart')],

    scroll: function scroll() {
        var scrolled = document.documentElement.scrollTop;
        //here we move the divs
        console.log(scrolled);
        this.parrallaxes[0].forEach(function (parallax) {
            return parallax.style.marginTop = 0 - scrolled * 0.3 + 'px';
        });
        this.parrallaxes[1].forEach(function (parallax) {
            return parallax.style.marginTop = 0 - scrolled * 0.4 + 'px';
        });
        this.parrallaxes[2].forEach(function (parallax) {
            return parallax.style.marginTop = 0 - scrolled * 0.5 + 'px';
        });
        this.parrallaxes[3].forEach(function (parallax) {
            return parallax.style.marginTop = 0 - scrolled * 0.6 + 'px';
        });
    },
    assign: function assign() {
        window.addEventListener("scroll", function (event) {
            Parallax.scroll();
        });
    },
    init: function init() {
        Parallax.assign();
    }
};

var Page = {
    home: document.querySelector('#home'),
    homeLink: document.querySelector('[href="#home"]'),
    portfolio: document.querySelector('#portfolio'),
    portfolioLink: document.querySelector('[href="#portfolio"]'),
    portfolioScroll: document.querySelector('.scroll'),
    contact: document.querySelector('#contact'),
    contactLink: document.querySelector('[href="#contact"]'),
    getSectionPositions: function getSectionPositions() {
        this.topOfPortfolio = this.portfolio.offsetTop;
        this.topOfContact = this.contact.offsetTop;
    },
    showActiveMenu: function showActiveMenu() {
        this.portfolioLink.classList.remove('menu__link--active');
        this.contactLink.classList.remove('menu__link--active');
        this.homeLink.classList.remove('menu__link--active');
        if (window.scrollY < this.topOfPortfolio - 100) {
            this.homeLink.classList.add('menu__link--active');
        } else if (window.scrollY < this.topOfContact - 100) {
            this.portfolioLink.classList.add('menu__link--active');
        } else {
            this.contactLink.classList.add('menu__link--active');
        }
    },
    assign: function assign() {
        window.addEventListener("scroll", function (event) {
            Page.showActiveMenu();
        });
        window.addEventListener("resize", function (event) {
            Page.getSectionPositions();
        });
        this.homeLink.addEventListener("click", function (event) {
            event.preventDefault();
            Page.home.scrollIntoView({
                behavior: 'smooth'
            });
        });
        this.portfolioLink.addEventListener("click", function (event) {
            event.preventDefault();
            Page.portfolio.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
        this.portfolioScroll.addEventListener("click", function (event) {
            event.preventDefault();
            Page.portfolio.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
        this.contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            Page.contact.scrollIntoView({
                behavior: 'smooth'
            });
        });
    },
    init: function init() {
        Page.assign();
        Page.getSectionPositions();
        Page.showActiveMenu();
        Parallax.init();
    }
};

Page.init();

/***/ })
/******/ ]);