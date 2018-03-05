webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background{\r\nposition: fixed;\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground-color: #ffffff;\r\n}\r\n\r\n.foreground{\r\nposition: fixed;\r\nwidth: 100%;\r\nheight: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-background class=\"background\"></app-background>\n<!-- <app-foreground class=\"foreground\"></app-foreground> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_background_background_component__ = __webpack_require__("../../../../../src/app/components/background/background.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_foreground_foreground_component__ = __webpack_require__("../../../../../src/app/components/foreground/foreground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parts_bike_bike_component__ = __webpack_require__("../../../../../src/app/components/parts/bike/bike.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_parts_header_header_component__ = __webpack_require__("../../../../../src/app/components/parts/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_parts_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/parts/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_background_background_component__["a" /* BackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_foreground_foreground_component__["a" /* ForegroundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_parts_bike_bike_component__["a" /* BikeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_parts_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_parts_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/background/background.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 1fr 2fr 1fr;\r\n        grid-template-rows: 1fr 2fr 1fr;\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/background/background.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header class=\"top\"></app-header>\r\n  <app-bike class=\"mid\"></app-bike>\r\n  <app-footer class=\"bot\"></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/background/background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    BackgroundComponent.prototype.ngAfterViewInit = function () {
    };
    BackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-background',
            template: __webpack_require__("../../../../../src/app/components/background/background.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/background/background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/foreground/foreground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/foreground/foreground.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/foreground/foreground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForegroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForegroundComponent = /** @class */ (function () {
    function ForegroundComponent() {
    }
    ForegroundComponent.prototype.ngOnInit = function () {
    };
    ForegroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-foreground',
            template: __webpack_require__("../../../../../src/app/components/foreground/foreground.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/foreground/foreground.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForegroundComponent);
    return ForegroundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/parts/bike/bike.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#bike-board {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 50vh;\r\n}\r\n\r\n#bike-road {\r\n  width: 100%;\r\n  height: 50vh;\r\n  position: fixed;\r\n}\r\n\r\n#bike {\r\n  width: 40vw;\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  bottom: 0px;\r\n  position: absolute;\r\n  -webkit-animation: move 2s linear 1;\r\n  animation: move 2s linear 1;\r\n  \r\n}\r\n\r\n#front-wheel {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n#back-wheel {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes move {\r\n  0% {\r\n    margin-left: 0vw;\r\n    margin-right: 0vw;\r\n  }\r\n  100% {\r\n    margin-left: 30vw;\r\n    margin-right: 30vw;\r\n  }\r\n}\r\n\r\n@keyframes move {\r\n  0% {\r\n    margin-left: 0vw;\r\n    margin-right: 0vw;\r\n  }\r\n  100% {\r\n    margin-left: 30vw;\r\n    margin-right: 30vw;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parts/bike/bike.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bike-road\" (window:resize)=\"init()\"></div>\r\n<div  id=\"bike-board\" >\r\n  <svg id=\"bike\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 1273 807\" >\r\n    <path  id=\"back-wheel\" d=\"M262,469A169,169,0,1,0,431,638,169,169,0,0,0,262,469ZM381.77,631.18A8.57,8.57,0,0,0,380,631H319.5A57.07,57.07,0,0,0,311,607.7l44.36-44.36A118.91,118.91,0,0,1,381.77,631.18Zm-82.65-37A57.23,57.23,0,0,0,271,581.63V519.3a119.05,119.05,0,0,1,72.05,30.93ZM253,581.8a57.21,57.21,0,0,0-26.68,12L184.2,551.7a8.93,8.93,0,0,0-2.14-1.57A119,119,0,0,1,253,519.38Zm-81.53-17.37,42.79,42.79A57.24,57.24,0,0,0,205.5,631H143.24a119,119,0,0,1,26.88-68.31A9.34,9.34,0,0,0,171.47,564.43ZM206,649a57.22,57.22,0,0,0,12.2,26.12l-43.94,43.93a119.12,119.12,0,0,1-30.77-70Zm25.73,38A56.94,56.94,0,0,0,253,695.2v62.42a118.9,118.9,0,0,1-65.66-26.22Zm39.3,8.33a57.19,57.19,0,0,0,22.78-8.63l44.31,44.31A119,119,0,0,1,271,757.7Zm80.14,23.27-44-44A57.34,57.34,0,0,0,319,649h61a9.92,9.92,0,0,0,1.55-.14A119,119,0,0,1,351.14,718.64Z\"\r\n    />\r\n    <path id=\"front-wheel\" d=\"M1104,469a169,169,0,1,0,169,169A169,169,0,0,0,1104,469Zm119.77,162.18A8.57,8.57,0,0,0,1222,631h-60.5a57.07,57.07,0,0,0-8.46-23.3l44.36-44.36A118.91,118.91,0,0,1,1223.77,631.18Zm-82.65-37A57.23,57.23,0,0,0,1113,581.63V519.3a119.05,119.05,0,0,1,72,30.93ZM1095,581.8a57.21,57.21,0,0,0-26.68,12L1026.2,551.7a8.93,8.93,0,0,0-2.14-1.57A119,119,0,0,1,1095,519.38Zm-81.53-17.37,42.79,42.79A57.24,57.24,0,0,0,1047.5,631H985.24a119,119,0,0,1,26.88-68.31A9.34,9.34,0,0,0,1013.47,564.43ZM1048,649a57.22,57.22,0,0,0,12.2,26.12l-43.94,43.93a119.12,119.12,0,0,1-30.77-70Zm25.73,38a56.94,56.94,0,0,0,21.3,8.16v62.42a118.9,118.9,0,0,1-65.66-26.22Zm39.3,8.33a57.19,57.19,0,0,0,22.78-8.63l44.31,44.31A119,119,0,0,1,1113,757.7Zm80.14,23.27-44-44A57.34,57.34,0,0,0,1161,649h61a9.92,9.92,0,0,0,1.55-.14A119,119,0,0,1,1193.14,718.64Z\"\r\n    />\r\n    <path d=\"M1243.66,512.48a186.45,186.45,0,0,0-222.34-50L973.67,380A10,10,0,0,0,983,370V356h0a49.14,49.14,0,0,0,49-49V267a49.14,49.14,0,0,0-49-49h0a48.56,48.56,0,0,0-16.84,3h-1.69A31.67,31.67,0,0,0,951,218H917a31.67,31.67,0,0,0-13.47,3H883V208a10,10,0,0,0-2-6V171a10,10,0,0,0-10-10h-5V60.5a7.52,7.52,0,0,0-7.5-7.5,4.19,4.19,0,0,0-.5,0V10a10,10,0,0,0-20,0V70a10,10,0,0,0,13,9.54V155L811.45,64.28A7.47,7.47,0,0,0,807,60.2V28a10,10,0,0,0-20,0V88a10,10,0,0,0,19.61,2.73l21.75,49.9L699.94,126.12a10,10,0,0,0-11.06,8.82l-2.63,23.29a10,10,0,0,0,8.81,11.06L754.13,176l-26.25,7.89a10,10,0,0,0-6.7,12.46l5.47,18.19a10,10,0,0,0,12.46,6.7L805,201.39V202a10,10,0,0,0,10,10h29v9h-6a10,10,0,0,0-10,10v29.88a10,10,0,0,0-3,7.12v20.89A58,58,0,0,0,799.5,283h-134A58.68,58.68,0,0,0,607,341.5v11.81A35.25,35.25,0,0,0,585.5,346h-155A35.6,35.6,0,0,0,395,381.5v26A35.6,35.6,0,0,0,430.5,443h.5v26h-8a10,10,0,0,0-10,10v4.49C372.79,442.56,315.76,417,252.5,417c-74.69,0-140.7,35.63-180.59,90.14C71,507.05,70,507,69,507H33A33.1,33.1,0,0,0,0,540v36a33.1,33.1,0,0,0,33,33c-.6,6.26-.93,12.59-.94,19h73c.56-78,66.62-141,148-141,51,0,95.93,24.71,122.56,62.33A9.92,9.92,0,0,0,373,556V660H91a10,10,0,0,0-10,10v9H61a10,10,0,0,0-10,10v15a10,10,0,0,0,10,10H81v9a10,10,0,0,0,10,10H592v3a10,10,0,0,0,10,10H853a10,10,0,0,0,5.56-1.7,9.93,9.93,0,0,0,2.77.86l17.79,2.77a10,10,0,0,0,11.42-8.34L925,518.26a10,10,0,0,0-8.34-11.42l-17.79-2.77a9.86,9.86,0,0,0-6,1c-.28,0-.56,0-.84,0H858.34l4.51-60H875a10,10,0,0,0,10-10V346h4v24a10,10,0,0,0,10,10h25l60.68,105.1q-1.76,1.38-3.49,2.82C902,553.61,891,671.11,956.66,750.36l.29.33,46.82-38.8-.57-.67a125.14,125.14,0,0,1,12.38-172.64l64,110.78a10,10,0,0,0,13.67,3.66l19.92-11.5a10,10,0,0,0,3.66-13.66L1052,515.58a125.2,125.2,0,0,1,143.92,35.92l.55.69,47.5-39.37C1243.85,512.71,1243.76,512.59,1243.66,512.48Zm-591.32-52A9.58,9.58,0,0,0,652,463v37a10,10,0,0,0,10,10h27a27.08,27.08,0,0,0-27,27v20.34l-13.46,9.78a10,10,0,0,0-5.54,2.76V556a10,10,0,0,0-10-10H618.63a10,10,0,0,0,3.62-5.16l24.25-82A57.47,57.47,0,0,0,652.34,460.48ZM676.68,585A26.8,26.8,0,0,0,689,588h3a10,10,0,0,0-10,10v30a10,10,0,0,0,2.88,7H662V595.66Zm141.43,50.5A10,10,0,0,0,815,635H791.12a10,10,0,0,0,2.88-7V598a10,10,0,0,0-10-10h1a27.08,27.08,0,0,0,27-27v-3h6a9.91,9.91,0,0,0,6.09-2.1ZM603,545.58l1.44.42H603ZM818,492h-5V463a9.58,9.58,0,0,0-.34-2.52,58.18,58.18,0,0,0,19.23-8.34L828,503.91V502A10,10,0,0,0,818,492ZM465,443H585.48l-7.69,26H465Zm418,98L858.6,697.73A9.92,9.92,0,0,0,853,696h-9l11.65-155Z\"\r\n    />\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/parts/bike/bike.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_js__ = __webpack_require__("../../../../svg.js/dist/svg.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BikeComponent = /** @class */ (function () {
    function BikeComponent() {
    }
    BikeComponent_1 = BikeComponent;
    BikeComponent.prototype.ngOnInit = function () {
    };
    BikeComponent.prototype.ngAfterViewInit = function () {
        var _bike_board = document.getElementById(BikeComponent_1.boardID);
        this.bike_road_drawing = __WEBPACK_IMPORTED_MODULE_1_svg_js__(BikeComponent_1.boardID).size('100%', '100%');
        this.init();
    };
    BikeComponent.prototype.frontWheel = function () {
        var _bike = document.getElementById(BikeComponent_1.bikeID).getBoundingClientRect();
        var _wheel = document.getElementById(BikeComponent_1.frontID).getBoundingClientRect();
        var bike = this.center(_bike);
        var wheel = this.center(_wheel);
        var x = ((wheel.x - _bike.left) / _bike.width) * 100 + '%';
        var y = ((wheel.y - _bike.top) / _bike.height) * 100 + '%';
        console.log(x, y);
        document.getElementById(BikeComponent_1.frontID).style.transformOrigin = x + ' ' + y;
    };
    BikeComponent.prototype.backWheel = function () {
        var _bike = document.getElementById(BikeComponent_1.bikeID).getBoundingClientRect();
        var _wheel = document.getElementById(BikeComponent_1.backID).getBoundingClientRect();
        var bike = this.center(_bike);
        var wheel = this.center(_wheel);
        var x = ((wheel.x - _bike.left) / _bike.width) * 100 + '%';
        var y = ((wheel.y - _bike.top) / _bike.height) * 100 + '%';
        document.getElementById(BikeComponent_1.backID).style.transformOrigin = x + ' ' + y;
    };
    BikeComponent.prototype.center = function (rect) {
        var x = (rect.left + rect.right) / 2;
        var y = (rect.top + rect.bottom) / 2;
        return { x: x, y: y };
    };
    BikeComponent.prototype.drawRoad = function () {
        var size = this.getSize(BikeComponent_1.boardID);
        var road = this.bike_road_drawing.line(0, size.h, size.w, size.h).stroke({ width: 10 }).animate(2000);
    };
    BikeComponent.prototype.getSize = function (id) {
        var _drawing = document.getElementById(id);
        var h = _drawing.clientHeight;
        var w = _drawing.clientWidth;
        return { h: h, w: w };
    };
    BikeComponent.prototype.drawBoard = function () {
        this.bike_road_drawing.clear();
        this.drawRoad();
    };
    BikeComponent.prototype.init = function () {
        this.drawBoard();
        this.frontWheel();
        this.backWheel();
    };
    BikeComponent.boardID = 'bike-road';
    BikeComponent.bikeID = 'bike';
    BikeComponent.frontID = 'front-wheel';
    BikeComponent.backID = 'back-wheel';
    BikeComponent = BikeComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-bike',
            template: __webpack_require__("../../../../../src/app/components/parts/bike/bike.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/parts/bike/bike.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BikeComponent);
    return BikeComponent;
    var BikeComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/parts/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100%;\r\n  -ms-grid-columns: 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.social-container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.social {\r\n  bottom: 0px;\r\n  margin: 1vw;\r\n  position: absolute;\r\n  width: 5vw;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n  </div>\n  <div class=\"social-container\">\n    <a href=\"https://www.facebook.com/ram.hithesh/\" >\n      <img class=\"social\"  src=\"assets/facebook.svg\">\n    </a>\n    <a href=\"https://www.instagram.com/uncaped._.crusader/\">\n      <img class=\"social\"  src=\"assets/instagram.svg\">\n    </a>\n    <a href=\"https://www.linkedin.com/in/hithesh-tapila/\">\n      <img class=\"social\"  src=\"assets/linkedin.svg\">\n    </a>\n  </div>\n  <div></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/parts/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/parts/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/parts/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".smiley {\r\n  stroke-dasharray: 200px;\r\n  stroke-dashoffset: 200px;\r\n  -webkit-animation-name: draw;\r\n          animation-name: draw;\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n\r\n.name {\r\n  stroke-dasharray: 600px;\r\n  stroke-dashoffset: 600px;\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\r\n  -webkit-animation-name: draw;\r\n          animation-name: draw;\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n\r\n.name-svg{\r\n   margin-top: 10vh;\r\n}\r\n\r\n.container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 8fr 2fr;\r\n        grid-template-columns: 2fr 8fr 2fr;\r\n    height: 100%;\r\n}\r\n\r\n@-webkit-keyframes draw {\r\n  50% {\r\n    stroke-dashoffset: 0;\r\n    fill: #ffffff;\r\n  }\r\n  100% {\r\n    fill: #000000;\r\n  }\r\n}\r\n\r\n@keyframes draw {\r\n  50% {\r\n    stroke-dashoffset: 0;\r\n    fill: #ffffff;\r\n  }\r\n  100% {\r\n    fill: #000000;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parts/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div></div>\n  <div class=\"name-svg\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1475.01 198.14\">\n      <defs>\n        <style>\n          .a {\n            fill: none;\n            stroke: #000;\n            stroke-miterlimit: 10;\n            stroke-width: 6px;\n          }\n        </style>\n      </defs>\n\n      <path class=\"a name\" d=\"M73.12,56.2c.5-.75,1.58-1.12,3.26-1.12s3.72,1.61,6.14,4.84,3.62,6.32,3.62,9.3q0,2.41-8.18,28.64T65.31,139.52q-2.23,7.81-6.32,7.82a5.1,5.1,0,0,1-4.1-2.05q-1.66-2-1.67-7.44t4.28-19.53a94.27,94.27,0,0,1-16.93,20.83q-9.1,8.19-16.65,8.19T9.7,140.27Q3,133.2,3,125.76q0-17.67,10.32-44.18t17.21-26.5a7.41,7.41,0,0,1,5.86,3.07,10.72,10.72,0,0,1,2.51,7q0,1.68-5,12A251.52,251.52,0,0,0,23.83,101.3q-5,13.86-5,24.27a6.85,6.85,0,0,0,1.86,4.93,5.93,5.93,0,0,0,4.46,2Q32.2,132.46,42,120A158.48,158.48,0,0,0,59.73,91a184.07,184.07,0,0,0,11.9-30.69A14.69,14.69,0,0,1,73.12,56.2Z\"\n      />\n      <path class=\"a name\" d=\"M142.59,69.87Q153.84,55.08,161,55.08t13.58,7.63Q181,70.33,181,78.89q0,13.39-6.14,32.73-11.16,35.72-20.09,35.72-4.1,0-4.09-5.58,0-3.91,4-15.91t7.44-23.62q3.44-11.62,3.44-17.48t-1.77-8.65c-1.18-1.86-2.35-2.79-3.53-2.79a7.07,7.07,0,0,0-3.63,1.11,19.67,19.67,0,0,0-4.18,3.72c-1.55,1.74-3,3.44-4.37,5.12S145,87.32,143,90.42s-3.75,5.74-5.11,7.91-3.35,5.3-5.95,9.39-4.59,7.19-6,9.3-3.16,5-5.39,8.55-4,6.39-5.3,8.37-2.76,4.16-4.37,6.51q-4.65,6.88-7.35,6.89t-6.23-4.19c-2.36-2.79-3.53-5.24-3.53-7.35a25.81,25.81,0,0,1,1.3-5q3.53-10.78,7.81-26.69a150.44,150.44,0,0,0,4.65-36.18q.56-13.57,3.91-13.57,4.08,0,8.18,4.27a13.35,13.35,0,0,1,4.09,9.4q0,5.11-3.07,19.71A264.51,264.51,0,0,1,113.48,115Q131.35,84.66,142.59,69.87Z\"\n      />\n      <path class=\"a name\" d=\"M224.43,147.34q-10.89,0-20.37-8.47t-9.48-20.08q0-11.62,7.81-26.88a86.34,86.34,0,0,1,20.18-26q12.36-10.79,24.09-10.79,7.62,0,13.39,6.88t5.76,12.09a3.58,3.58,0,0,1-.93,2.51,3.43,3.43,0,0,1-2.69,1q-1.77,0-6.23-3.35t-8-3.35q-10.05,0-23.44,17.67t-13.39,30.88a11.78,11.78,0,0,0,3.63,9.11q3.62,3.34,11.71,3.35a53.31,53.31,0,0,0,14.88-2,57.9,57.9,0,0,0,10.51-3.9q3.72-2,5.77-2,3.53,0,3.53,3.53,0,5.4-12.92,12.55T224.43,147.34Z\"\n      />\n      <path class=\"a name\" d=\"M342.07,63.54q7.06,8.48,7.07,15.25t-4.65,13.86c1.49,1.86,2.23,3.48,2.23,4.84q0,5.2-2.32,17.85t-2.79,16.56q-.47,3.9-.84,6.23t-.93,4.56c-.5,3.1-1.61,4.65-3.35,4.65-2.23,0-4.06-2-5.49-5.86a51.27,51.27,0,0,1-2.51-15.16q-16.55,21-30.69,21-8.55,0-16.83-7.35t-8.28-15.16q0-11.16,8.19-27.62a108.79,108.79,0,0,1,21.2-29.3q13-12.82,24.55-12.83Q335,55.08,342.07,63.54Zm-6.88,24.28q0-17.31-6.88-17.3-7.26,0-16.93,10.32A102.76,102.76,0,0,0,295,104.18q-6.69,13-6.69,20.65a6.07,6.07,0,0,0,2.6,5.11,9.9,9.9,0,0,0,6.14,2q8.74,0,19.72-11.81A64.88,64.88,0,0,0,332,91.35,3.88,3.88,0,0,1,335.19,88Z\"\n      />\n      <path class=\"a name\" d=\"M425.21,54.52q8,0,13.86,10.23a41.92,41.92,0,0,1,5.86,21.11q0,10.89-6.33,21.77A82.61,82.61,0,0,1,423,127.06a89.94,89.94,0,0,1-20.55,14.23Q391.17,147,381.69,147a25.91,25.91,0,0,1-7.07-.93q-.75,3.16-2.6,11.35T368.85,171q-1.29,5.39-3,11.53-3.35,12.64-5.95,12.65c-1.74,0-3.57-1.34-5.49-4s-2.88-5.06-2.88-7.16,2-11.16,5.95-27.16q17.85-72.34,17.86-97.46,0-5.58,4.09-5.58,3.35,0,8.09,4.93a15.37,15.37,0,0,1,4.74,10.88,32.24,32.24,0,0,1-.74,6.51Q408.1,54.52,425.21,54.52Zm-45.38,77.94q9.85,0,21.3-6.7A64.25,64.25,0,0,0,420.66,108q8.08-11.07,8.09-22,0-15.43-7.26-15.44T401.87,83q-12.37,12.47-19.62,32.36L378,132.46Z\"\n      />\n      <path class=\"a name\" d=\"M527.51,85.86q0,10-10.69,16.18a47.09,47.09,0,0,1-24.18,6.24,93.14,93.14,0,0,1-24.46-3,48.73,48.73,0,0,0-2.61,14.6q0,6.42,4,9.95t13.21,3.54a59.83,59.83,0,0,0,19-3.26q9.76-3.25,10.7-3.25,4.83,0,4.83,3.72,0,5-11.34,10.88t-22.14,5.86q-14.51,0-23.62-8.65t-9.11-21.86q0-13.2,7.06-27.62a77.49,77.49,0,0,1,18.23-24.27q11.16-9.86,22.14-9.86t20,10.42Q527.51,75.91,527.51,85.86ZM499.43,69.77q-6.89,0-14.33,7.17A62.58,62.58,0,0,0,472.46,94.7a77.75,77.75,0,0,0,16.92,1.67,41.26,41.26,0,0,0,16.56-3.07Q513,90.24,513,85.21c0-3.35-1.52-6.75-4.55-10.23S502.4,69.77,499.43,69.77Z\"\n      />\n      <path class=\"a name\" d=\"M616.61,3q3,0,7.34,5.49t4.37,10.32q0,4.85-4.65,27.44T612.89,93q-13.39,54.31-17.67,54.32-2.61,0-5.68-3.26c-2-2.17-3.07-4.06-3.07-5.67a69.16,69.16,0,0,1,1.31-9.67q-18.24,18.6-31.81,18.6-8.19,0-14.79-7.44t-6.6-15.44q0-11.53,6.23-27.44a94.45,94.45,0,0,1,18-28.92q11.72-13,24.92-13T602.1,70.89q9.48-39.43,10.41-62.31Q612.51,3,616.61,3ZM596.15,94.33q0-10-3.45-16.93t-8.27-6.88q-8,0-16.37,9.86a78,78,0,0,0-13.3,22.6q-4.93,12.74-4.93,22a6.72,6.72,0,0,0,2.42,5.39,8.6,8.6,0,0,0,5.77,2.05q7.25,0,19.62-10.42a61.25,61.25,0,0,0,18-24.55l.56-2.23Z\"\n      />\n      <path class=\"a smiley\" d=\"M651,151.24q-4.65,0-10.6-6t-5.95-10a12.66,12.66,0,0,1,3.26-8c2.16-2.66,4.4-4,6.69-4s5,3,8,9.11S657,142.94,657,146c0,1-.69,2.11-2.05,3.35A6,6,0,0,1,651,151.24Z\"\n      />\n      <path class=\"a smiley\" d=\"M771,145.29q0,3.17-10,4.46a299.87,299.87,0,0,1-32.09,2.14q-14.22.09-27.71,1.12t-16.74,1c-2.17,0-4.06-1.09-5.67-3.25a10.9,10.9,0,0,1-2.42-6.51q0-3.26,14.69-4.93a338.1,338.1,0,0,1,37.2-1.68q22.51,0,34.6,2.24Q771,141.39,771,145.29Z\"\n      />\n      <path class=\"a smiley\" d=\"M808.18,151.24q-4.65,0-10.6-6t-6-10a12.7,12.7,0,0,1,3.25-8q3.25-4,6.7-4t8,9.11q4.54,9.12,4.55,13.76c0,1-.68,2.11-2,3.35A6,6,0,0,1,808.18,151.24Z\"\n      />\n      <path class=\"a name\" d=\"M861.1,147.34q-10.89,0-20.37-8.47t-9.48-20.08q0-11.62,7.81-26.88a86.34,86.34,0,0,1,20.18-26q12.36-10.79,24.09-10.79,7.62,0,13.39,6.88t5.76,12.09a3.58,3.58,0,0,1-.93,2.51,3.43,3.43,0,0,1-2.69,1q-1.77,0-6.23-3.35t-8-3.35q-10.05,0-23.44,17.67T847.8,119.44a11.78,11.78,0,0,0,3.63,9.11q3.62,3.34,11.71,3.35a53.31,53.31,0,0,0,14.88-2,57.9,57.9,0,0,0,10.51-3.9q3.72-2,5.77-2,3.53,0,3.53,3.53,0,5.4-12.92,12.55T861.1,147.34Z\"\n      />\n      <path class=\"a name\" d=\"M925,77.77l-.56-13.95q0-8.73,4.09-8.74,3.54,0,6.79,4.56a18.06,18.06,0,0,1,3.26,10.78,86.42,86.42,0,0,1-.38,9.4q16.18-24.55,30.7-24.55,9.11,0,9.11,4.46a5.45,5.45,0,0,1-2,4.09,34.17,34.17,0,0,1-6.51,4.28A41.59,41.59,0,0,0,952.8,81.21a78.83,78.83,0,0,0-11.07,20q-4.28,11.16-6.79,18.78c-1.67,5.09-3,9.06-3.81,11.91s-1.86,5.64-3,8.37q-3,7.44-6.88,7.44c-2.11,0-3.81-1.21-5.12-3.63A14.88,14.88,0,0,1,914.2,137q0-3.44,3.16-13.67A146.69,146.69,0,0,0,925,77.77Z\"\n      />\n      <path class=\"a name\" d=\"M1042.73,56.2c.49-.75,1.58-1.12,3.25-1.12s3.72,1.61,6.14,4.84,3.63,6.32,3.63,9.3q0,2.41-8.19,28.64t-12.65,41.66q-2.22,7.81-6.32,7.82a5.08,5.08,0,0,1-4.09-2.05q-1.68-2-1.68-7.44t4.28-19.53a94.52,94.52,0,0,1-16.92,20.83q-9.12,8.19-16.65,8.19t-14.23-7.07q-6.69-7.07-6.7-14.51,0-17.67,10.33-44.18t17.2-26.5a7.4,7.4,0,0,1,5.86,3.07,10.72,10.72,0,0,1,2.51,7q0,1.68-5,12a249.13,249.13,0,0,0-10,24.18q-5,13.86-5,24.27a6.85,6.85,0,0,0,1.86,4.93,5.93,5.93,0,0,0,4.47,2q7.07,0,16.83-12.47a158.48,158.48,0,0,0,17.76-29,185.05,185.05,0,0,0,11.91-30.69A14.06,14.06,0,0,1,1042.73,56.2Z\"\n      />\n      <path class=\"a name\" d=\"M1118.05,55.08q6.33,0,11.91,7t5.58,12.18c0,2.11-1,3.16-3,3.16q-2,0-6.32-3.25a14.35,14.35,0,0,0-8.74-3.26q-4.47,0-14,5.21t-9.58,11q0,4.29,17.11,14.7a49.81,49.81,0,0,1,11.82,10.5,21.27,21.27,0,0,1,5.3,13.77q0,7.35-10.14,14.32a40.65,40.65,0,0,1-23.62,7,43.68,43.68,0,0,1-23.81-6.51q-10.32-6.51-10.32-12.28a5.6,5.6,0,0,1,1.21-3.81,3.86,3.86,0,0,1,3.06-1.4q1.86,0,5.21,2.42,10.05,7.26,20.93,7.25t15.72-2.51q4.83-2.5,4.83-6.69t-5.39-8.93a74.78,74.78,0,0,0-11.81-8.46,57,57,0,0,1-11.81-9.12q-5.4-5.39-5.4-11,0-9.85,15.53-20.56T1118.05,55.08Z\"\n      />\n      <path class=\"a name\" d=\"M1209,63.54q7.07,8.48,7.06,15.25t-4.65,13.86c1.49,1.86,2.24,3.48,2.24,4.84q0,5.2-2.33,17.85t-2.79,16.56q-.46,3.9-.84,6.23c-.25,1.55-.55,3.07-.93,4.56-.49,3.1-1.61,4.65-3.34,4.65-2.24,0-4.07-2-5.49-5.86a50.94,50.94,0,0,1-2.51-15.16q-16.56,21-30.69,21-8.57,0-16.83-7.35t-8.28-15.16q0-11.16,8.18-27.62A109,109,0,0,1,1169,67.91q13-12.82,24.55-12.83Q1201.94,55.08,1209,63.54Zm-6.89,24.28q0-17.31-6.88-17.3-7.24,0-16.92,10.32A102.45,102.45,0,0,0,1162,104.18q-6.71,13-6.7,20.65a6.08,6.08,0,0,0,2.61,5.11,9.88,9.88,0,0,0,6.13,2q8.74,0,19.72-11.81A64.68,64.68,0,0,0,1199,91.35a3.89,3.89,0,0,1,3.16-3.35Z\"\n      />\n      <path class=\"a name\" d=\"M1310.93,3c2,0,4.43,1.83,7.35,5.49s4.37,7.1,4.37,10.32-1.55,12.37-4.65,27.44-6.69,30.66-10.79,46.77q-13.39,54.31-17.67,54.32-2.6,0-5.67-3.26t-3.07-5.67a68.61,68.61,0,0,1,1.3-9.67q-18.22,18.6-31.8,18.6-8.19,0-14.79-7.44t-6.6-15.44q0-11.53,6.23-27.44a94.26,94.26,0,0,1,17.95-28.92q11.72-13,24.92-13t18.42,15.81q9.48-39.43,10.41-62.31Q1306.84,3,1310.93,3Zm-20.46,91.33q0-10-3.44-16.93t-8.27-6.88q-8,0-16.37,9.86a78,78,0,0,0-13.3,22.6q-4.93,12.74-4.93,22a6.69,6.69,0,0,0,2.42,5.39,8.59,8.59,0,0,0,5.76,2.05q7.26,0,19.63-10.42a61.34,61.34,0,0,0,18-24.55l.55-2.23Z\"\n      />\n      <path class=\"a name\" d=\"M1398.35,85.86q0,10-10.69,16.18a47.11,47.11,0,0,1-24.18,6.24,93.08,93.08,0,0,1-24.46-3,48.73,48.73,0,0,0-2.61,14.6q0,6.42,4,9.95t13.21,3.54a59.83,59.83,0,0,0,19-3.26q9.77-3.25,10.7-3.25,4.83,0,4.83,3.72,0,5-11.34,10.88t-22.14,5.86q-14.51,0-23.62-8.65t-9.11-21.86q0-13.2,7.06-27.62a77.49,77.49,0,0,1,18.23-24.27q11.16-9.86,22.14-9.86t20,10.42Q1398.34,75.91,1398.35,85.86Zm-28.08-16.09q-6.88,0-14.33,7.17A62.58,62.58,0,0,0,1343.3,94.7a77.75,77.75,0,0,0,16.92,1.67,41.26,41.26,0,0,0,16.56-3.07q7.07-3.06,7.06-8.09c0-3.35-1.52-6.75-4.55-10.23S1373.24,69.77,1370.27,69.77Z\"\n      />\n      <path class=\"a name\" d=\"M1419,77.77l-.56-13.95q0-8.73,4.09-8.74,3.54,0,6.79,4.56a18.06,18.06,0,0,1,3.25,10.78,87,87,0,0,1-.37,9.4q16.18-24.55,30.69-24.55,9.12,0,9.12,4.46a5.48,5.48,0,0,1-2,4.09,34.17,34.17,0,0,1-6.51,4.28,41.69,41.69,0,0,0-16.65,13.11,79.12,79.12,0,0,0-11.06,20q-4.29,11.16-6.79,18.78t-3.81,11.91c-.87,2.85-1.87,5.64-3,8.37q-3,7.44-6.88,7.44-3.16,0-5.12-3.63a14.88,14.88,0,0,1-2-7.07q0-3.44,3.16-13.67A147,147,0,0,0,1419,77.77Z\"\n      />\n    </svg>\n  </div>\n  <div></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parts/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var u1 = document.getElementById('u1');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/parts/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/parts/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map