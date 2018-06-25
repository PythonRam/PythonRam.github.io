(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-top: 4vw;\r\n  min-width: 900px;\r\n  max-width: 1200px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: #222;\r\n  background-color: white;\r\n}\r\n\r\n.addIncrement {\r\n  padding: 2vw;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.addIncrement>button {\r\n  width: auto;\r\n  height: auto;\r\n  border: none;\r\n  background-color: blueviolet;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0.5vw;\r\n  margin: auto;\r\n}\r\n\r\n.addIncrement>button:disabled {\r\n  background-color: #eeeeee;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.line{\r\n  width: 100%;\r\n  border-style: solid;\r\n  border-width: 0.8px;\r\n  border-right: none;\r\n  border-left: none;\r\n}\r\n\r\n@media print {\r\n  mat-datepicker-toggle,\r\n  .addIncrement{\r\n    display: none;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div *ngFor=\"let increment of increments; let i= index;\">\r\n    <app-increment *ngIf=\"i === 0\" [initDate]=\"null\" (yearData)=\"yearsData($event,i)\"></app-increment>\r\n    <app-increment *ngIf=\"i !== 0\" [initDate]=\"increments[i-1].final\" (yearData)=\"yearsData($event,i)\"></app-increment>\r\n    <div class=\"line\"></div>\r\n  </div>\r\n\r\n  <div class=\"addIncrement\">\r\n    <button [disabled]=\" increments.length > 0 &&  !increments[increments.length-1].final\" (click)=\"addIncrement()\">Add Year</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.increments = [];
    }
    AppComponent.prototype.addIncrement = function () {
        this.increments.push({
            final: null,
            leaves: []
        });
    };
    AppComponent.prototype.yearsData = function (data, index) {
        this.increments[index]['final'] = data.final;
        this.increments[index]['leaves'] = data.leaves;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_leave_leave_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/leave/leave.component */ "./src/app/components/leave/leave.component.ts");
/* harmony import */ var _dateFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dateFormat */ "./src/app/dateFormat.ts");
/* harmony import */ var _components_increment_increment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/increment/increment.component */ "./src/app/components/increment/increment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = /** @class */ (function () {
    function AppModule(dateAdapter) {
        this.dateAdapter = dateAdapter;
        dateAdapter.setLocale('en-in'); // DD/MM/YYYY
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_leave_leave_component__WEBPACK_IMPORTED_MODULE_8__["LeaveComponent"],
                _components_increment_increment_component__WEBPACK_IMPORTED_MODULE_10__["IncrementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _dateFormat__WEBPACK_IMPORTED_MODULE_9__["DateFormat"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/increment/increment.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/increment/increment.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding-top: 1vw;\r\n  padding-bottom: 1vw;\r\n}\r\n\r\n.main>div>p>span {\r\n  background-color: yellow;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.addLeave {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.addLeave>button {\r\n  width: auto;\r\n  height: auto;\r\n  border: none;\r\n  background-color: green;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0.5vw;\r\n  margin: auto;\r\n  margin-bottom: 0.5vw;\r\n}\r\n\r\n.leaveContainer {\r\n  border-style: dashed;\r\n  border-width: 0.5px;\r\n  margin: auto;\r\n  padding-top: 0.8vw;\r\n  padding-bottom: 0.8vw;\r\n  margin-bottom: 1vw;\r\n  width: 90%;\r\n}\r\n\r\n.addLeave>button:disabled {\r\n  background-color: #eee;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.headers {\r\n  display: none;\r\n}\r\n\r\n@media print {\r\n  mat-datepicker-toggle,\r\n  .addLeave {\r\n    display: none;\r\n  }\r\n  .headers {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    width: 80%;\r\n    margin: auto;\r\n  }\r\n  input{\r\n    font-weight: bold;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/increment/increment.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/increment/increment.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <mat-form-field>\n    <span class=\"onlyPrint\" matPrefix>\n     Starting Date: \n    </span>\n    <input matInput (dateChange)=\"computeMinMax()\" (change)=\"computeMinMax()\" [matDatepicker]=\"doj\" placeholder=\"Starting Date\"\n      [formControl]=\"date_of_joining\">\n    <mat-datepicker-toggle matSuffix [for]=\"doj\"></mat-datepicker-toggle>\n    <mat-datepicker #doj></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n    <span class=\"onlyPrint\" matPrefix>\n      Increment Gap: \n    </span>\n    <input type=\"number\" (change)=\"computeMinMax()\" #dbi [formControl]=\"days_before_increment\" matInput placeholder=\"Days before increment\">\n  </mat-form-field>\n  <div>\n    <p>Final Date:\n      <span *ngIf=\"date_of_increment\">{{date_of_increment.toDateString()}}</span>\n    </p>\n  </div>\n</div>\n\n<div *ngIf=\"leaves.length>0\" class=\"headers\">\n  <b>From</b>\n  <b>To</b>\n  <b>Number of Leaves</b>\n</div>\n\n<div *ngIf=\"leaves.length>0\" class=\"leaveContainer\">\n  <app-leave *ngFor=\"let leave of leaves; let i = index;\" [minDate]=\"minDate\" (days)=\"days($event,i)\" (delete)=\"delete(i)\"></app-leave>\n</div>\n\n<div class=\"addLeave\">\n  <button [disabled]=\"!date_of_joining.value || !days_before_increment.value\" (click)=\"addLeave()\">Add Leave</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/increment/increment.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/increment/increment.component.ts ***!
  \*************************************************************/
/*! exports provided: IncrementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementComponent", function() { return IncrementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncrementComponent = /** @class */ (function () {
    function IncrementComponent() {
        this.yearData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.date_of_joining = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.days_before_increment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](365);
        this.leaves = [];
    }
    IncrementComponent.prototype.ngOnChanges = function () {
        if (this.initDate) {
            this.date_of_joining.setValue(this.initDate);
        }
        this.computeMinMax();
    };
    IncrementComponent.prototype.computeDate = function () {
        var days = 0;
        this.leaves.forEach(function (l) {
            days += l.days * 24 * 60 * 60 * 1000;
        });
        var extra = this.days_before_increment.value * 24 * 60 * 60 * 1000;
        this.date_of_increment = (new Date(((new Date(this.date_of_joining.value).valueOf()) + days + extra)));
        var validLeaves = this.leaves;
        validLeaves = validLeaves.filter(function (l) { return l['days'] > 0; });
        var yearObj = {
            leaves: validLeaves,
            final: this.date_of_increment
        };
        this.yearData.emit(yearObj);
    };
    IncrementComponent.prototype.days = function (e, i) {
        this.leaves[i]['start_date'] = e.start_date;
        this.leaves[i]['end_date'] = e.end_date;
        this.leaves[i]['days'] = e.days;
        this.computeDate();
    };
    IncrementComponent.prototype.delete = function (i) {
        this.leaves.splice(i, 1);
        this.computeDate();
    };
    IncrementComponent.prototype.addLeave = function () {
        this.leaves.push({ 'days': 0 });
    };
    IncrementComponent.prototype.computeMinMax = function () {
        this.minDate = new Date(this.date_of_joining.value);
        this.computeDate();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('initDate'),
        __metadata("design:type", Date)
    ], IncrementComponent.prototype, "initDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('yearData'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IncrementComponent.prototype, "yearData", void 0);
    IncrementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-increment',
            template: __webpack_require__(/*! ./increment.component.html */ "./src/app/components/increment/increment.component.html"),
            styles: [__webpack_require__(/*! ./increment.component.css */ "./src/app/components/increment/increment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncrementComponent);
    return IncrementComponent;
}());



/***/ }),

/***/ "./src/app/components/leave/leave.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/leave/leave.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deleteButton {\r\n  background-color: #eee;\r\n  color: #ee0000;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 2vw;\r\n  width: 5vw;\r\n  margin: auto;\r\n}\r\n\r\n.leave-container {\r\n  width: 100%;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1.5fr 1.5fr 2fr;\r\n      grid-template-columns: 1fr 1.5fr 1.5fr 2fr;\r\n}\r\n\r\n.leave-container>mat-form-field {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n.leave-container>div {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n@media print {\r\n  mat-datepicker-toggle,\r\n  .deleteButton {\r\n    display: none;\r\n  }\r\n  .leave-container>div>p:nth-child(1) {\r\n    display: none;\r\n  }\r\n  \r\n  .leave-container>div>p:nth-child(2) {\r\n    text-align: center;\r\n    margin-left: 100px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/leave/leave.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/leave/leave.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leave-container\">\n  <button class=\"deleteButton\" (click)=\"DeleteLeave()\">Delete</button>\n  <mat-form-field>\n   \n    <input matInput id=\"start_date\" (dateChange)=\"computeDays()\" [min]=\"minDate\" [matDatepicker]=\"dls\" placeholder=\"Leave Start Date\"\n      [formControl]=\"leave_start\">\n    <mat-datepicker-toggle matSuffix [for]=\"dls\"></mat-datepicker-toggle>\n    <mat-datepicker #dls></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field [hidden]=\"leave_start.valid\">\n    <input id=\"end_date\" matInput (dateChange)=\"computeDays()\" [min]=\"leave_start.value\" [matDatepicker]=\"dle\" placeholder=\"Leave End Date\"\n      [formControl]=\"leave_end\" [disabled]=\"!leave_start.value\">\n    <mat-datepicker-toggle [disabled]=\"!leave_start.value\" matSuffix [for]=\"dle\"></mat-datepicker-toggle>\n    <mat-datepicker #dle></mat-datepicker>\n  </mat-form-field>\n  <div>\n    <p>Number of leaves:</p>\n    <p>\n      <b>{{leaves}}</b>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/leave/leave.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/leave/leave.component.ts ***!
  \*****************************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaveComponent = /** @class */ (function () {
    function LeaveComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.days = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leaves = 0;
        this.leave_start = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.leave_end = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    LeaveComponent.prototype.DeleteLeave = function () {
        this.delete.emit();
    };
    LeaveComponent.prototype.computeDays = function () {
        if (this.leave_start.valid && this.leave_end.valid && this.leave_end.value >= this.leave_start.value) {
            this.leaves = ((this.leave_end.value - this.leave_start.value) / (24 * 60 * 60 * 1000)) + 1;
            var leaveObj = {
                start_date: new Date(this.leave_start.value).toDateString(),
                end_date: new Date(this.leave_end.value).toDateString(),
                days: this.leaves
            };
            this.days.emit(leaveObj);
        }
    };
    LeaveComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('minDate'),
        __metadata("design:type", Date)
    ], LeaveComponent.prototype, "minDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LeaveComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LeaveComponent.prototype, "days", void 0);
    LeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave',
            template: __webpack_require__(/*! ./leave.component.html */ "./src/app/components/leave/leave.component.html"),
            styles: [__webpack_require__(/*! ./leave.component.css */ "./src/app/components/leave/leave.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LeaveComponent);
    return LeaveComponent;
}());



/***/ }),

/***/ "./src/app/dateFormat.ts":
/*!*******************************!*\
  !*** ./src/app/dateFormat.ts ***!
  \*******************************/
/*! exports provided: DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
var DateFormat = /** @class */ (function (_super) {
    __extends(DateFormat, _super);
    function DateFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.useUtcForDisplay = true;
        return _this;
    }
    DateFormat.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    return DateFormat;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\Nanna\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map