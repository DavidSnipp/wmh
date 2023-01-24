"use strict";
(self["webpackChunkwmh"] = self["webpackChunkwmh"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 1416);
/* harmony import */ var _wedding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wedding.component */ 9380);
/* harmony import */ var _sports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports.component */ 3864);
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.component */ 106);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.component */ 9480);
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.component */ 3993);
/* harmony import */ var _rooms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rooms.component */ 3873);
/* harmony import */ var _rooms_walker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rooms/walker */ 5442);
/* harmony import */ var _rooms_halsey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rooms/halsey */ 7454);
/* harmony import */ var _rooms_cater__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rooms/cater */ 1648);
/* harmony import */ var _rooms_tovey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rooms/tovey */ 1295);
/* harmony import */ var _rooms_kelly__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rooms/kelly */ 9325);
/* harmony import */ var _flyer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./flyer.component */ 5299);
/* harmony import */ var _whatson_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./whatson.component */ 1188);
/* harmony import */ var _caretaker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./caretaker.component */ 1453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);



















const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'rooms',
  component: _rooms_component__WEBPACK_IMPORTED_MODULE_7__.RoomsComponent,
  children: [{
    path: '',
    redirectTo: 'walker',
    pathMatch: 'full'
  }, {
    path: 'walker',
    component: _rooms_walker__WEBPACK_IMPORTED_MODULE_8__.WalkerRoomComponent
  }, {
    path: 'halsey',
    component: _rooms_halsey__WEBPACK_IMPORTED_MODULE_9__.HalseyRoomComponent
  }, {
    path: 'cater',
    component: _rooms_cater__WEBPACK_IMPORTED_MODULE_10__.CaterRoomComponent
  }, {
    path: 'tovey',
    component: _rooms_tovey__WEBPACK_IMPORTED_MODULE_11__.ToveyRoomComponent
  }, {
    path: 'kelly',
    component: _rooms_kelly__WEBPACK_IMPORTED_MODULE_12__.KellyRoomComponent
  }]
}, {
  path: 'wedding',
  component: _wedding_component__WEBPACK_IMPORTED_MODULE_2__.WeddingComponent
}, {
  path: 'sports',
  component: _sports_component__WEBPACK_IMPORTED_MODULE_3__.SportsComponent
}, {
  path: 'history',
  component: _history_component__WEBPACK_IMPORTED_MODULE_4__.HistoryComponent
}, {
  path: 'contact',
  component: _contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent
}, {
  path: 'bookings',
  component: _bookings_component__WEBPACK_IMPORTED_MODULE_6__.BookingsComponent
}, {
  path: 'whatson',
  component: _whatson_component__WEBPACK_IMPORTED_MODULE_14__.WhatsonComponent
}, {
  path: 'caretaker',
  component: _caretaker_component__WEBPACK_IMPORTED_MODULE_15__.CaretakerComponent
}, {
  path: 'flyers/:flyer',
  component: _flyer_component__WEBPACK_IMPORTED_MODULE_13__.FlyerComponent
}];
class AppRoutingModule {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
}));
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




class AppComponent {
  constructor() {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "year", new Date().getFullYear());
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isCollapsed", true);
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(t) {
  return new (t || AppComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 46,
  vars: 2,
  consts: [[1, "Site-content"], [1, "container-fluid", "margin-bottom-20"], [1, "row"], [1, "col-sm-12"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], ["routerLink", "", 1, "navbar-brand"], ["src", "../assets/logo/3.svg", "height", "100px"], ["type", "button", "toggle", "collapse", "aria-expanded", "false", 1, "navbar-toggler", "collapsed", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item"], ["target", "_blank", "href", "https://hallbookingonline.com/worplesdon/", 1, "nav-link"], ["routerLink", "whatson", 1, "nav-link"], ["routerLink", "rooms", 1, "nav-link"], ["routerLink", "sports", 1, "nav-link"], ["routerLink", "wedding", 1, "nav-link"], ["routerLink", "history", 1, "nav-link"], ["routerLink", "contact", 1, "nav-link"], [1, "container-fluid"], [1, "col-md-12"], [1, "sticky-bottom"], [1, "footer"], [1, "container"], [1, "ml-2"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
        return ctx.isCollapsed = !ctx.isCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Bookings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11)(15, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Whats On");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11)(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Rooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 11)(21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sports");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 11)(24, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Weddings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 11)(27, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 11)(30, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19)(33, "div", 2)(34, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21)(37, "div", 19)(38, "div", 2)(39, "div", 20)(40, "footer", 22)(41, "div", 23)(42, "div", 2)(43, "div", 3)(44, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A9 2019-", ctx.year, " Worplesdon Memorial Hall and Recreation Grounds CIO. All Rights Reserved. ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse],
  encapsulation: 2
}));

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ 1416);
/* harmony import */ var _sports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sports.component */ 3864);
/* harmony import */ var _wedding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wedding.component */ 9380);
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.component */ 106);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact.component */ 9480);
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookings.component */ 3993);
/* harmony import */ var _rooms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rooms.component */ 3873);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _rooms_walker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rooms/walker */ 5442);
/* harmony import */ var _rooms_halsey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rooms/halsey */ 7454);
/* harmony import */ var _rooms_cater__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rooms/cater */ 1648);
/* harmony import */ var _rooms_tovey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rooms/tovey */ 1295);
/* harmony import */ var _rooms_kelly__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rooms/kelly */ 9325);
/* harmony import */ var _flyer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flyer.component */ 5299);
/* harmony import */ var _safehtml_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./safehtml.pipe */ 7044);
/* harmony import */ var _whatson_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./whatson.component */ 1188);
/* harmony import */ var _caretaker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./caretaker.component */ 1453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2560);
























class AppModule {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275fac", function AppModule_Factory(t) {
  return new (t || AppModule)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
}));
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  providers: [_safehtml_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbCarouselModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientJsonpModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__.GoogleMapsModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _sports_component__WEBPACK_IMPORTED_MODULE_4__.SportsComponent, _wedding_component__WEBPACK_IMPORTED_MODULE_5__.WeddingComponent, _history_component__WEBPACK_IMPORTED_MODULE_6__.HistoryComponent, _caretaker_component__WEBPACK_IMPORTED_MODULE_18__.CaretakerComponent, _contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent, _rooms_component__WEBPACK_IMPORTED_MODULE_9__.RoomsComponent, _rooms_walker__WEBPACK_IMPORTED_MODULE_10__.WalkerRoomComponent, _rooms_halsey__WEBPACK_IMPORTED_MODULE_11__.HalseyRoomComponent, _rooms_cater__WEBPACK_IMPORTED_MODULE_12__.CaterRoomComponent, _rooms_tovey__WEBPACK_IMPORTED_MODULE_13__.ToveyRoomComponent, _rooms_kelly__WEBPACK_IMPORTED_MODULE_14__.KellyRoomComponent, _bookings_component__WEBPACK_IMPORTED_MODULE_8__.BookingsComponent, _flyer_component__WEBPACK_IMPORTED_MODULE_15__.FlyerComponent, _safehtml_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe, _whatson_component__WEBPACK_IMPORTED_MODULE_17__.WhatsonComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbCarouselModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientJsonpModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__.GoogleMapsModule]
  });
})();

/***/ }),

/***/ 3993:
/*!***************************************!*\
  !*** ./src/app/bookings.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsComponent": () => (/* binding */ BookingsComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class BookingsComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BookingsComponent, "\u0275fac", function BookingsComponent_Factory(t) {
  return new (t || BookingsComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BookingsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BookingsComponent,
  selectors: [["ng-component"]],
  decls: 1,
  vars: 0,
  consts: [["src", "https://hallbookingonline.com/worplesdon/", 2, "width", "100%", "height", "800px", "-webkit-overflow-scrolling", "touch"]],
  template: function BookingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 0);
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 1453:
/*!****************************************!*\
  !*** ./src/app/caretaker.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaretakerComponent": () => (/* binding */ CaretakerComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CaretakerComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CaretakerComponent, "\u0275fac", function CaretakerComponent_Factory(t) {
  return new (t || CaretakerComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CaretakerComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CaretakerComponent,
  selectors: [["ng-component"]],
  decls: 104,
  vars: 0,
  consts: [[1, "display-4", "text-center"], ["href", "mailto:trustees@wmh.org.uk"]],
  template: function CaretakerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Caretaker Job Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Post: Village Hall Caretaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Location: Worplesdon Memorial Hall, Perry Hill, Worplesdon, Guildford, Surrey, GU3 3RF");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Reports to: Trustees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "The Hall Caretaker will be required to open and close the Hall for regular and occasional hirers as required, both during the week and at weekends.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "The Hall Caretaker must be able to self-motivated and work responsibly and flexibly and will be the main contact for all hirers.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "The hours worked should be flexible, consistent with the day to day use of the Hall and should on average should be up to 30 hours per week.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "The Caretaker would need to be CRB and DBS checked.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ol")(18, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Bookings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul")(21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "To be responsible for managing the on line hall booking system and ensuring invoices are sent out and paid. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Servicing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul")(26, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "To ensure that the building remains tidy and that all furniture and equipment is appropriately stored after use.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Make sure that the hall is kept clean at all times.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "To ensure that the car park and area around the hall is kept tidy and maintained.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Management of Systems");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "To manage and adjust systems and services within the Hall as and when required with particular regard to: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul")(37, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Testing the fire alarm system on a weekly basis and maintain test register.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Testing the emergency lighting system on a monthly basis and recording the results.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Regulating the heating system, if required, to ensure that an adequate level of heating is maintained while ensuring unnecessary usage is avoided.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Recording on a quarterly basis the electricity meter readings and advise the Treasurer of the reading.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Record on a monthly basis the electricity meter readings for the tennis court and advise the tennis club of the readings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "To complete on a monthly basis an Inspection Checklist and notify the Trustees of any action needed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Arranging the servicing of the central heating and fire systems when required.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Carry out legionella water test and recording the results. Need to notify Trustees of any action required. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Maintenance and Safety");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul")(56, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "To ensure that the Trust is promptly informed of any new maintenance issues, effecting furniture, fittings and equipment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "To ensure that all lights and heating are working effectively, changing light bulbs/strip lighting and occasionally working at height.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "To carry out regular maintenance and decorating as and when required both for the hall and the outside of the pavilion.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "To maintain the first aid box and accident record.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Setting Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ul")(67, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "To assist with (as appropriate) the setting out and subsequent removal and securing after use, chairs, tables and other equipment in the hall.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ul")(72, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Be the first point of contact in an emergency, responding to and liaising with the emergency services out of hours as needed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "You may be occasionally called out at unsociable hours or at weekends to deal with security issues, make emergency repairs or allow access to any contractor who may be working at the Hall.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Supervision of Premises");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ul")(79, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "To monitor the activities in the Hall to ensure that hirers comply with the Hall's Conditions of Hire and other statutory requirements.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "To open and close the Hall at times appropriate to the booking schedule and to secure the premises when the Hall is not in use.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "To retain custody of a set of keys to the building.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "General");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul")(88, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Understand and implement fire safety regulations, Health and Safety Regulations, COSHH, emergency procedures and the rules for evacuating the building.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Be familiar with the Health & Safety Policy and the Risk Assessment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Ensure compliance with the Trust's council Fire Risk Assessment Plan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Complete monthly timesheets and submit to the Treasurer for checking on the 1st of each month.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Prepare a regular report for Trustees and attend trustee meetings.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "If you are interested in finding out more or think you would make the ideal candidate, please email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "trustees@wmh.org.uk");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Closing date for applications is 17th February 2023.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 9480:
/*!**************************************!*\
  !*** ./src/app/contact.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ 3889);






function ContactComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "google-map", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "map-marker", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", ctx_r0.options.center);
  }
}
class ContactComponent {
  constructor(httpClient) {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpClient", void 0);
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", {
      center: {
        lat: 51.277002,
        lng: -0.610312
      },
      zoom: 15
    });
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiLoaded", void 0);
    this.httpClient = httpClient;
    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAga8m5cIZJL-WmWlH2w1fjh5iRhwTgx04', 'callback').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(_ => true), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      console.log(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactComponent, "\u0275fac", function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["ng-component"]],
  decls: 23,
  vars: 3,
  consts: [["href", "tel:01483 232117"], ["href", "mailto:tim@wmh.org.uk"], ["target", "_blank", "href", "https://www.google.co.uk/maps/place/Worplesdon+Memorial+Hall/@51.2770657,-0.6121381,17z/data=!4m5!3m4!1s0x4875d6d80318fa25:0x8ac1e5c8b889d890!8m2!3d51.2770626!4d-0.6101308"], [4, "ngIf"], ["href", "mailto:trustees@wmh.org.uk"], [3, "options"], [3, "position"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The Hall Manager and Caretaker is Mr Tim Astley, who lives in the cottage alongside the Hall.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Telephone: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "01483 232117");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "tim@wmh.org.uk");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Address: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Memorial Hall Cottage, Perry Hill, Worplesdon, Guildford, Surrey GU3 3RF.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ContactComponent_ng_container_14_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacting the Trustees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "The Worplesdon Memorial Trustees, who have ultimate responsibility for the Hall and Recreation Ground, may be contacted at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "trustees@wmh.org.uk");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 1, ctx.apiLoaded));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.MapMarker, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  encapsulation: 2
}));

/***/ }),

/***/ 5299:
/*!************************************!*\
  !*** ./src/app/flyer.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlyerComponent": () => (/* binding */ FlyerComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _safehtml_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safehtml.pipe */ 7044);







function FlyerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const html_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, html_r1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
class FlyerComponent {
  constructor(route, httpClient) {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpClient", void 0);
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "html$", this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(params => this.httpClient.get(`assets/flyers/${params.flyer}`, {
      responseType: 'text'
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)('')));
    this.route = route;
    this.httpClient = httpClient;
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FlyerComponent, "\u0275fac", function FlyerComponent_Factory(t) {
  return new (t || FlyerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FlyerComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FlyerComponent,
  selectors: [["ng-component"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "innerHTML"]],
  template: function FlyerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FlyerComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.html$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _safehtml_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe],
  encapsulation: 2,
  changeDetection: 0
}));

/***/ }),

/***/ 106:
/*!**************************************!*\
  !*** ./src/app/history.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class HistoryComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HistoryComponent, "\u0275fac", function HistoryComponent_Factory(t) {
  return new (t || HistoryComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HistoryComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HistoryComponent,
  selectors: [["ng-component"]],
  decls: 38,
  vars: 0,
  template: function HistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "History and Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "The Hall was built in 1922 in memory of the local men killed in World War I.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The land had been donated to Worplesdon Parish Council for this purpose in 1919 by Sir James Lewis Walker (1845-1927), a local landowner who had enjoyed a distinguished career as a banker and newspaper owner in India. A portrait of Sir James can be seen in the hall. He lived in Worplesdon Place at the centre of an estate which included property on both sides of the A322. The house is now the Worplesdon Place Hotel, almost opposite the hall.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "The Hall itself was built with funds from an anonymous donor, who was later identified as Sir Laurence Edward Halsey (1871-1945). Sir Laurence lived at Gooserye in Worplesdon and was a leading member of the accountancy profession, holding many distinguished appointments, including Auditor to the Duchy of Lancaster. He was High Sheriff of Surrey in 1935.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Although it retains formal ownership of the land, the Parish Council is not responsible for the management of the property. Instead, the management of the Memorial Hall and Grounds is in the hands of the Worplesdon Memorial Trustees, a registered charity. (This is the registered working name of the charity; the full formal name is Worplesdon Memorial Hall and Recreation Ground and the Sime Trust.)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "If you would like know more about the work of the trustees, you may like to see our most recent Annual Report and Accounts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "The trustees are committed to provide the residents of Worplesdon with recreational and social facilities. As volunters, they give their time and efforts to maintain the objectives of the Hall Trust as set out in the original Deed of 1919 and are always seeking to improve and expand the facilities for the benefit all users.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p")(15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "The Walker Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ", previously known as the Main Hall consists of a large 128.27 sqm open area as well as a Stage which is 38.47 sqm. Sir James Walker of Worplesdon Place who gave the land for the Memorial hall to be built on. He bought Worplesdon Place in about 1905 and lived their until he died in 1927. He was born in India in 1845. During his career he established the Alliance Bank of Simla. He was also a newspaper proprietor of two Indian periodicals. He was friend of Rudyard Kipling, who lived with Sir James and his first wife in India as a child. Sir James was Kiplings first patron and Rudyard Kipling even visited them at Worplesdon Place in 1911. Obviously Sir James spent lot of his life in India. Huge picture on wall is of Sir James Walker in main hall.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p")(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "The Halsey Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ", previously known as the Small Hall consists of a 47.29 sqm open area. Sir Laurence Halsey (1871-1945) was the 1st Chairman and served 23 years (1921-1944). He gave the monies for the hall to be built. He is buried across at St Mary\u2019s Worplesdon rest of his family in Pirbright. He did not marry or have a family of his own. He lived at Gooserye on Whitmoor common.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p")(23, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "The Tovey Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ", previously known as the Conference Room consists of a 10.7 sqm open area. Tovey who was trustee from 1942-1952 Margaret Tovey was Hon secretary from 1948-1974.Rev Duncan Crookes Tovey 1842-1912 had been rector in St Mary\u2019s Parish as well as Worplesdon Parish council chairman from 1899-1909. Plus had played huge part in village life while he lived here. His son also named Duncan died in WW1 in 1918 leaving widow and two sons and a daughter as children. Margaret Joan Woodd Walker later became the wife of one of the sons also named Duncan Lorimer Pattison Tovey 1903-1948. Margaret was also co- author of two history booklets produce called Notes on the history of Worplesdon and the other Worplesdon Old and New. ( named as Joan Tovey) she was very involved in village life and the heavily involved in WI and also of course neighbour of Sidney and Mary Sime recommending to her friend Mary to leave Sidney\u2019s art work to the trustees of the Memorial hall for the purpose of exhibiting her husband\u2019s collection of drawings and paintings bequeathing in her will monies to build a room at the hall. Sir Laurence Halsey had been consulted on this matter before his death.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p")(27, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "The Cater Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ", previously known as the Committee Room. Terry Cater was the 8th Chairman of WMH from 2004-2018 as well as a Worplesdon Parish councillor for many years. Also as we know Terry\u2019s history with all the hall and sport on the grounds must be second to none. 17 years a trustee/ chairman. Also his father was very heavily involved in both as well. Terry\u2019s father was chair of Worplesdon Parish council during his years as a councillor from 1972-1973 then 1976-1985/6 until his death. Also the wicketkeeper for Fairlands cricket team. He was described by Surrey Advertiser as \u201Cthe spirit of Worplesdon\u201D something his son Terry has continued to do. During covid lockdown Terry volunteered to put new pictures up in the Sime Gallery no easy task for man of mature years. Terry has also been involved as Hon secretary of football club for 12 years and chairman of cricket club for 10 years and player of Worplesdon football and cricket clubs for 42 years and still watches matches . Also was Chairman of the committee responsible to the Worplesdon Parish council for the millennium book Worplesdon A Tale of Four Villages. He received Guildford Mayors award for community service. A families dedication to the well being of the Memorial hall and recreational grounds. As you can see both men 14 years chairman of WMH quite something. Obviously Sir Laurence Halsey the longest serving chairman. Harry his father was known as Mr Worplesdon, he was a member of the territorial army , he was one of the first to serve at Dunkirk and one of twenty in his unit to survive the Battle of Arnham. On his return to Worplesdon he became involved in Fairlands Liddington Hall and Gravetts lane community association FLGCA. He and other residents negotiated purchase of disused nissen hut on Fairlands later in 1963 involved in fund raising and building of current community centre. He later became president of FLGCA. He even was invited to Queen\u2019s garden party for services to community.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p")(31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "The Kelly Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, ", previously known as the Council Chambers consists of a 38.47 sqm located on the first floor, accessible from the stairs at the front of the building to the right of the main entrance. After, Mr Arthur Lindsay Kelly he was 2nd Chairman of WMH trustees , he also served 25 years as chairman of Worplesdon Parish council. He was also Worplesdon Parish council for 55 years. ( My understanding probably the longest serving WPC possibly the next is Sandra Morgan MBE 53 years currently) He died in 1963 he lived later part of his life at Highclere just over the road from the hall between the cottages and the road named The Avenue and before that at Hockley Lands on Burdenshott road recently renamed Hertford Park . A lifetime of public service to Surrey County an alderman since 1947. His funeral was attended by officials of SCC, Guildford rural council of which he had been a founder member of the executive, Woking magistrates court and hospital managements. He was a former chairman of WMH trustees 1945-1959 who was also a former chairman of Worplesdon Parish council. Arthur Lindsay Kelly 1880-1963 was a very prominent figure all around in the Parish and St Mary\u2019s church and community. He is seen in Worplesdon football photographs and he was a cricketer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p")(35, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "The Thompson Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, ", previously known as the Anti-Room or Womens Institute (WI) Room.Winifred Amy Thompson not married was a trustee from 1939-1944 she was also prominent member of Womens institute (WI) and county WI agricultural committee having a jersey cow heard. She was VAD nurse in 1914-1918 and was 15 years the rectors warden at St Mary\u2019s church for 3 rectors. She had two sisters and although not born here very prominent in their time here in Worplesdon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 1416:
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function HomeComponent_33_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", img_r1.title);
  }
}
function HomeComponent_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_33_ng_template_0_Template, 2, 2, "ng-template", 17);
  }
}
class HomeComponent {
  constructor() {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "grounds", [{
      url: '../assets/grounds/14.jpg',
      title: 'Title 1'
    }, {
      url: '../assets/grounds/15.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/16.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/17.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/18.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/19.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/20.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/21.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/22.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/23.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/24.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/25.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/26.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/27.jpg',
      title: 'Title 2'
    }]);
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeComponent, "\u0275fac", function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["ng-component"]],
  decls: 75,
  vars: 2,
  consts: [[1, "jumbotron", "p-2"], [1, "container-fluid"], [1, "display-4", "text-center"], [1, "text-center"], ["href", "mailto:trustees@wmh.org.uk"], ["href", "caretaker"], [1, "carousel", "slide", 2, "max-width", "750px", "margin", "auto", "margin-bottom", "20px", 3, "interval"], [4, "ngFor", "ngForOf"], ["target", "_blank", "href", "https://www.google.co.uk/maps/place/Worplesdon+Memorial+Hall/@51.2770657,-0.6121381,17z/data=!4m5!3m4!1s0x4875d6d80318fa25:0x8ac1e5c8b889d890!8m2!3d51.2770626!4d-0.6101308"], ["routerLink", "/contact", 1, "btn", "btn-primary", "btn-large"], [1, "container"], [1, "row"], [1, "col-md-4"], ["routerLink", "/sports", 1, "btn", "btn-secondary"], ["routerLink", "/wedding", 1, "btn", "btn-secondary"], ["src", "assets/sidney_sime.jpg"], ["href", "https://www.sidneysimegallery.org.uk", 1, "btn", "btn-secondary"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [3, "src", "alt"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Worplesdon Memorial Hall and Recreation Ground CIO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Worplesdon Memorial Hall is looking for a Caretaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "We are looking to appoint a friendly, energetic, and reliable individual with a range of practical skills for the role of Caretaker to join our team and contribute to the smooth running of the village hall. The successful applicant will have a range of duties across the site and should be self-motivated, dependable and trustworthy and able to work under their own initiative to prioritise workloads. Responsibilities include looking after the security of the building, minor maintenance and repairs, ensuring the cleanliness of the premises, meeting potential hirers and preparing the hall for bookings. The caretaker will need to be available to attend the hall at irregular hours to help with the overall running of the facilities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "The post is permanent and subject to a period of successful probation. The hours worked will be flexible and consistent with the day to day use of the hall and should not exceed a maximum 30 hours per week. We are looking for the successful candidate to start as soon as possible. As part of the salary package, the cottage on site will be provided. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "If you are interested in finding out more or think you would make the ideal candidate, please email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "trustees@wmh.org.uk");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Closing date for applications is 17th February 2023.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p")(18, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Click here for the Job Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Volunteer Treasurer Needed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Worplesdon Memorial Hall and Recreation Ground CIO is seeking a treasurer to join the running of our Village Hall. The Treasurer\u2019s responsibilities include liaising with the Trust, ensuring payments in and out are accurately and timely made, preparing the annual Charity Commission Report and annual accounts, producing monthly reports to the Trustees and attending trust meetings. Applicants should be well organised and computer literate so as to manage email correspondence and online banking. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "If you are interested we would love to hear from you. Simply email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "trustees@wmh.org.uk");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " and we will be in touch.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr")(31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ngb-carousel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HomeComponent_33_Template, 1, 0, null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Worplesdon Memorial Hall is a popular village hall near Guildford in Surrey. With its central position in the village, easy access from Guildford and adequate parking, the hall is an ideal venue for all kinds of social activities, public or private, including weddings.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "There is good access to the hall for the disabled, which is facilitated by the availability of parking next to the hall entrance. The toilets have disabled facilities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p")(39, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Free wi-fi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " is available throughout the building.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Our address is: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Worplesdon Memorial Hall, Perry Hill, Worplesdon, Guildford, Surrey GU3 3RF");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10)(49, "div", 11)(50, "div", 12)(51, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Sports");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "With a Tennis Club, Cricket Club and a Football Club as well as a children's playground, Worplesdon Memorial Hall is the ideal venue for your sporting activities");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p")(56, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 12)(59, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "From holding dance classes to your Wedding, we are your number one local venue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p")(64, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 12)(67, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Sidney Sime Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "On the first floor of the Hall there is a small gallery devoted to the fascinating and highly characteristic work of Sidney Sime (1865-1941), the famous artist, illustrator and caricaturist. Sime owned a cottage at Worplesdon and spent much of his time here during the latter part of his life.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p")(73, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grounds);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 3873:
/*!************************************!*\
  !*** ./src/app/rooms.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsComponent": () => (/* binding */ RoomsComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class RoomsComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RoomsComponent, "\u0275fac", function RoomsComponent_Factory(t) {
  return new (t || RoomsComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RoomsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RoomsComponent,
  selectors: [["ng-component"]],
  decls: 24,
  vars: 0,
  consts: [[1, "Site-content"], [1, "row"], [1, "col-sm-12"], [1, "navbar", "navbar-expand-md", "navbar-light"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "walker", 1, "nav-link"], ["routerLink", "halsey", 1, "nav-link"], ["routerLink", "tovey", 1, "nav-link"], ["routerLink", "cater", 1, "nav-link"], ["routerLink", "kelly", 1, "nav-link"], [1, "container-fluid"], [1, "col-md-12"]],
  template: function RoomsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Walker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5)(9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Halsey");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 5)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tovey");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 5)(15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cater");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 5)(18, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "div", 1)(22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  encapsulation: 2
}));

/***/ }),

/***/ 1648:
/*!********************************!*\
  !*** ./src/app/rooms/cater.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaterRoomComponent": () => (/* binding */ CaterRoomComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



function CaterRoomComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CaterRoomComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CaterRoomComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CaterRoomComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CaterRoomComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class CaterRoomComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CaterRoomComponent, "\u0275fac", function CaterRoomComponent_Factory(t) {
  return new (t || CaterRoomComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CaterRoomComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CaterRoomComponent,
  selectors: [["ng-component"]],
  decls: 16,
  vars: 1,
  consts: [[1, "row", 2, "height", "900px"], [1, "col-sm-4", 2, "max-width", "750px"], [1, "carousel", "slide", 2, "width", "100%", 3, "interval"], ["ngbSlide", ""], ["href", "../../assets/rooms/cater floorplan.png", "target", "_blank"], ["src", "../../assets/rooms/cater floorplan.png", 2, "width", "100%"], [1, "col-sm-8"], ["src", "https://hallbookingonline.com/worplesdon/plugin.php?filter=cater", "width", "100%", "height", "100%"], [1, "picsum-img-wrapper"], ["src", "../../assets/rooms/cater1.jpg", "alt", ""], ["src", "../../assets/rooms/cater2.jpg", "alt", ""], ["src", "../../assets/rooms/cater3.jpg", "alt", ""], ["src", "../../assets/rooms/cater4.jpg", "alt", ""], ["src", "../../assets/rooms/cater5.jpg", "alt", ""]],
  template: function CaterRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CaterRoomComponent_ng_template_3_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CaterRoomComponent_ng_template_4_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CaterRoomComponent_ng_template_5_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaterRoomComponent_ng_template_6_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CaterRoomComponent_ng_template_7_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Our smaller meeting room. Can seat up to 12 round a large table. Hire includes use of our main kitchen for tea and coffee making facilities. PLEASE NOTE: This room is only accessible via a large staircase.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "This space is perfect for smaller meetings of up to 12 people, with a large central table and comfortable armchairs. Accessed via a staircase from the kitchen anteroom, this room can also be hired in conjunction with the Walker Room as a changing room or band room for large events.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "iframe", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 7454:
/*!*********************************!*\
  !*** ./src/app/rooms/halsey.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HalseyRoomComponent": () => (/* binding */ HalseyRoomComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



function HalseyRoomComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HalseyRoomComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HalseyRoomComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HalseyRoomComponent, "\u0275fac", function HalseyRoomComponent_Factory(t) {
  return new (t || HalseyRoomComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HalseyRoomComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HalseyRoomComponent,
  selectors: [["ng-component"]],
  decls: 13,
  vars: 1,
  consts: [[1, "row", 2, "height", "900px"], [1, "col-sm-4", 2, "max-width", "750px"], [1, "carousel", "slide", 2, "width", "100%", 3, "interval"], ["ngbSlide", ""], ["href", "../../assets/rooms/halsey floorplan.png", "target", "_blank"], ["src", "../../assets/rooms/halsey floorplan.png", 2, "width", "100%"], [1, "col-sm-8"], ["src", "https://hallbookingonline.com/worplesdon/plugin.php?filter=halsey", "width", "100%", "height", "100%"], [1, "picsum-img-wrapper"], ["src", "../../assets/rooms/halsey1.jpg", "alt", ""], ["src", "../../assets/rooms/halsey2.jpg", "alt", ""]],
  template: function HalseyRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HalseyRoomComponent_ng_template_3_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HalseyRoomComponent_ng_template_4_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Can seat up to 40 people, depending on configuration. 6ft trestle tables and chairs available for use at no extra cost. PLEASE NOTE: Hire does not include use of the kitchen. Access to toilets is through Walker Room or via outside covered area.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Our second largest room, this space is suitable for events such as meetings, talks or smaller gatherings. Hirers booking the Walker Room for parties or similar events may wish to consider also hiring the Halsey room as a second space for use as a bar area or quieter room.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "iframe", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 9325:
/*!********************************!*\
  !*** ./src/app/rooms/kelly.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KellyRoomComponent": () => (/* binding */ KellyRoomComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



function KellyRoomComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function KellyRoomComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class KellyRoomComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(KellyRoomComponent, "\u0275fac", function KellyRoomComponent_Factory(t) {
  return new (t || KellyRoomComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(KellyRoomComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: KellyRoomComponent,
  selectors: [["ng-component"]],
  decls: 13,
  vars: 1,
  consts: [[1, "row", 2, "height", "900px"], [1, "col-sm-4", 2, "max-width", "750px"], [1, "carousel", "slide", 2, "width", "100%", 3, "interval"], ["ngbSlide", ""], ["href", "../../assets/rooms/kelly floorplan.png", "target", "_blank"], ["src", "../../assets/rooms/kelly floorplan.png", 2, "width", "100%"], [1, "col-sm-8"], ["src", "https://hallbookingonline.com/worplesdon/plugin.php?filter=kelly", "width", "100%", "height", "100%"], [1, "picsum-img-wrapper"], ["src", "../../assets/rooms/kelly1.jpg", "alt", ""], ["src", "../../assets/rooms/kelly2.jpg", "alt", ""]],
  template: function KellyRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, KellyRoomComponent_ng_template_3_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, KellyRoomComponent_ng_template_4_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "A self-contained meeting room. Can seat up to 16. PLEASE NOTE: This room is only accessible via a large staircase.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "With its own external entrance, this is a quiet, self-contained room, suitable for meetings or private working space. This room does not have access to the kitchen, however a kettle is available. Toilets available are the outside toilets at the other end of the building.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "iframe", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 1295:
/*!********************************!*\
  !*** ./src/app/rooms/tovey.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToveyRoomComponent": () => (/* binding */ ToveyRoomComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




function ToveyRoomComponent_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.url(item_r1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ToveyRoomComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToveyRoomComponent_3_ng_template_0_Template, 2, 1, "ng-template", 8);
  }
}
class ToveyRoomComponent {
  constructor() {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pictures", [1, 2, 3, 4, 5, 6, 7, 8]);
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "url", item => `../../assets/rooms/tovey/${item}.jpg`);
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ToveyRoomComponent, "\u0275fac", function ToveyRoomComponent_Factory(t) {
  return new (t || ToveyRoomComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ToveyRoomComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ToveyRoomComponent,
  selectors: [["ng-component"]],
  decls: 12,
  vars: 2,
  consts: [[1, "row", 2, "height", "900px"], [1, "col-sm-4", 2, "max-width", "750px"], [1, "carousel", "slide", 2, "width", "100%", 3, "interval"], [4, "ngFor", "ngForOf"], ["href", "../../assets/rooms/tovey floorplan.png", "target", "_blank"], ["src", "../../assets/rooms/tovey floorplan.png", 2, "width", "100%"], [1, "col-sm-8"], ["src", "https://hallbookingonline.com/worplesdon/plugin.php?filter=tovey", "width", "100%", "height", "100%"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "", 2, "width", "100%", 3, "src"]],
  template: function ToveyRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToveyRoomComponent_3_Template, 1, 0, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Our largest meeting room. Can seat 30 end on or 20 at tables. 6ft trestle tables and chairs available for use at no extra cost. Equipped with kitchenette, fridge and whiteboard. Outside toilets directly opposite.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "This self-contained room with its own external entrance is ideal for meetings, training sessions or talks. It is a flexible space that can be set up to suit the event, with comfortable chairs and trestle tables which can be configured as a rectangle to seat 16. The small kitchenette includes tea and coffee making facilities, fridge and sink. The room is directly opposite our outside toilets which have ambulant disabled facilities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "iframe", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pictures);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 5442:
/*!*********************************!*\
  !*** ./src/app/rooms/walker.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalkerRoomComponent": () => (/* binding */ WalkerRoomComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



function WalkerRoomComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WalkerRoomComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WalkerRoomComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WalkerRoomComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WalkerRoomComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class WalkerRoomComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(WalkerRoomComponent, "\u0275fac", function WalkerRoomComponent_Factory(t) {
  return new (t || WalkerRoomComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(WalkerRoomComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WalkerRoomComponent,
  selectors: [["ng-component"]],
  decls: 16,
  vars: 1,
  consts: [[1, "row", 2, "height", "900px"], [1, "col-sm-4", 2, "max-width", "750px"], [1, "carousel", "slide", 2, "width", "100%", 3, "interval"], ["ngbSlide", ""], ["href", "../../assets/rooms/walker floorplan.png", "target", "_blank"], ["src", "../../assets/rooms/walker floorplan.png", 2, "width", "100%"], [1, "col-sm-8"], ["src", "https://hallbookingonline.com/worplesdon/plugin.php?filter=walker", "width", "100%", "height", "100%"], [1, "picsum-img-wrapper"], ["src", "../../assets/rooms/walker1.jpg", "alt", ""], ["src", "../../assets/rooms/walker2.jpg", "alt", ""], ["src", "../../assets/rooms/walker3.jpg", "alt", ""], ["src", "../../assets/rooms/walker4.jpg", "alt", ""], ["src", "../../assets/rooms/walker5.jpg", "alt", ""]],
  template: function WalkerRoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WalkerRoomComponent_ng_template_3_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WalkerRoomComponent_ng_template_4_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WalkerRoomComponent_ng_template_5_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WalkerRoomComponent_ng_template_6_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WalkerRoomComponent_ng_template_7_Template, 2, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Can seat 160 facing the stage, or up to 120 at tables, depending on configuration. 20 6ft trestle tables and 120 chairs available for use at no extra cost. Hire of the Walker Room includes use of the kitchen and toilets.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "A light and spacious hall with a raised stage at one end this is a versatile space, perfect for parties. Eight built-in benches run either side providing convenient seating, with plenty of extra chairs and tables available. The hardwood floor is a great dancefloor, used every week by our resident dance groups and the stage, which contains a grand piano, is ideal for a band, DJ or other entertainment. Hire of the Walker Room includes use of our modern, well-equipped kitchen, which includes a large range cooker, washing machine, two fridges, freezer, hot water urn and microwave. There is easy access to the toilet facilities, which comprise Ladies, Gentlemens and Disabled which includes baby change. Can be hired alongside the Halsey Room which is directly adjacent, if more space is required.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "iframe", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 7044:
/*!**********************************!*\
  !*** ./src/app/safehtml.pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



class SafeHtmlPipe {
  constructor(sanitized) {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sanitized", void 0);
    this.sanitized = sanitized;
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SafeHtmlPipe, "\u0275fac", function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer, 16));
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SafeHtmlPipe, "\u0275pipe", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true
}));

/***/ }),

/***/ 3864:
/*!*************************************!*\
  !*** ./src/app/sports.component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsComponent": () => (/* binding */ SportsComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




function SportsComponent_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", img_r2.title);
  }
}
function SportsComponent_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SportsComponent_12_ng_template_0_Template, 2, 2, "ng-template", 6);
  }
}
function SportsComponent_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", img_r5.title);
  }
}
function SportsComponent_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SportsComponent_17_ng_template_0_Template, 2, 2, "ng-template", 6);
  }
}
class SportsComponent {
  constructor() {
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "images", [{
      url: '../assets/tennis/1.jpg',
      title: 'Title 1'
    }, {
      url: '../assets/tennis/2.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/tennis/3.jpg',
      title: 'Title 3'
    }, {
      url: '../assets/tennis/4.jpg',
      title: 'Title 4'
    }, {
      url: '../assets/tennis/5.jpg',
      title: 'Title 5'
    }]);
    (0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "grounds", [{
      url: '../assets/grounds/1.jpg',
      title: 'Title 1'
    }, {
      url: '../assets/grounds/2.jpg',
      title: 'Title 2'
    }, {
      url: '../assets/grounds/3.jpg',
      title: 'Title 3'
    }, {
      url: '../assets/grounds/4.jpg',
      title: 'Title 4'
    }, {
      url: '../assets/grounds/5.jpg',
      title: 'Title 5'
    }, {
      url: '../assets/grounds/6.jpg',
      title: 'Title 6'
    }, {
      url: '../assets/grounds/7.jpg',
      title: 'Title 7'
    }, {
      url: '../assets/grounds/8.jpg',
      title: 'Title 8'
    }, {
      url: '../assets/grounds/9.jpg',
      title: 'Title 9'
    }, {
      url: '../assets/grounds/10.jpg',
      title: 'Title 10'
    }, {
      url: '../assets/grounds/11.jpg',
      title: 'Title 11'
    }, {
      url: '../assets/grounds/12.jpg',
      title: 'Title 12'
    }, {
      url: '../assets/grounds/13.jpg',
      title: 'Title 13'
    }]);
  }
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SportsComponent, "\u0275fac", function SportsComponent_Factory(t) {
  return new (t || SportsComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SportsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SportsComponent,
  selectors: [["ng-component"]],
  decls: 24,
  vars: 4,
  consts: [["target", "_blank", "href", "https://wbcc.play-cricket.com/home"], ["target", "_blank", "href", "https://www.pitchero.com/clubs/worplesdonphoenix"], [1, "carousel", "slide", 2, "max-width", "750px", "margin", "auto", "margin-bottom", "20px", 3, "interval"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["target", "_blank", "href", "http://clubspark.lta.org.uk/WorplesdonTennisClub/"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [3, "src", "alt"]],
  template: function SportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The Sports Ground and Tennis Courts grounds adjoining the hall support many local sporting activities:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "There is a long-standing tradition of cricket on the field. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Worplesdon and Burpham Cricket Club");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " can trace its formation back to 1890 and its Worplesdon predecessor first began to use the site in 1912.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p")(8, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Worplesdon Phoenix Football Club");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " plays regular league matches at weekends and occasional games during the week.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SportsComponent_12_Template, 1, 0, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 4)(14, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Worplesdon Tennis Club");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngb-carousel", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SportsComponent_17_Template, 1, 0, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Worplesdon Tennis Club was formed in 1991 using the two existing public courts and has since added two more for Club use. A new Club House was opened in 2005. The Club has a thriving membership of adults and juniors - players of all abilities are welcome.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "A sports pavilion serving the Cricket, Football and Tennis Clubs was opened in 2008.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "All clubs are delighted to welcome new members and enquiries can be made via the club web sites.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grounds);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 3000);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbSlide],
  encapsulation: 2
}));

/***/ }),

/***/ 9380:
/*!**************************************!*\
  !*** ./src/app/wedding.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeddingComponent": () => (/* binding */ WeddingComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class WeddingComponent {}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(WeddingComponent, "\u0275fac", function WeddingComponent_Factory(t) {
  return new (t || WeddingComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(WeddingComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WeddingComponent,
  selectors: [["ng-component"]],
  decls: 73,
  vars: 0,
  consts: [["href", "https://www.worplesdonparish.com", "target", "_blank"], [1, "card-deck"], [1, "card", 2, "width", "18rem"], ["src", "../assets/wedding/pic1.jpg", 1, "card-img-top"], [1, "card-body"], [1, "card-text"], ["src", "../assets/wedding/pic2.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic3.jpg", 1, "card-img-top"], [1, "card-columns"], ["src", "../assets/wedding/pic4.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic5.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic9.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic6.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic7.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic8.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic10.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic11.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic12.jpg", 1, "card-img-top"], ["src", "../assets/wedding/pic13.jpg", 1, "card-img-top"]],
  template: function WeddingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Wedding receptions in the Hall");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\nPrices for ceremony from \u00A3585. Price for reception from \u00A31000.\nCall us to discuss your special requirements \u2013 your numbers \u2013 your catering needs \u2013 your ceremony wish-list.\nWe are here to help.\nPlease Call:\nFor weddings: 01483 233091\nFor reception: 01483 232117\nSee also:\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "www.worplesdonparish.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The Village Reception");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "The Worplesdon Memorial Hall offers the flexibility to design your reception whichever way suits you best");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Whether a formal dinner or an informal buffet, the Memorial Hall makes sure that all your friends and family feel at home.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4)(21, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "A range of rooms are available so that your wedding party can change their outfits. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Weddings at Worplesdon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "If you are thinking of tying the knot then think about being married here at Worplesdon. Worplesdon village offers a wonderful experience. A traditional church wedding followed by a village reception.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8)(28, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 4)(31, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "St. Mary\u2019s Church, Worplesdon, offers a traditional wedding service in an historic setting. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 10)(35, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4)(39, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "From the Lych Gate, a footpath winds up to the church porch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 12)(43, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 13)(46, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 14)(49, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 4)(53, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "The church interior retains its original feel, hardly changed from earlier times");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4)(58, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Enjoy being married in the traditional way. Weddings have been conducted at St. Mary\u2019s for many years");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 16)(62, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 4)(66, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "After the ceremony, enjoy a time with your photographer outside this historic village church. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 4)(71, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Then move to the Memorial Hall in the village to continue your festivities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 1188:
/*!**************************************!*\
  !*** ./src/app/whatson.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsonComponent": () => (/* binding */ WhatsonComponent)
/* harmony export */ });
/* harmony import */ var C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class WhatsonComponent {
  constructor() {}
  ngOnInit() {}
}
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(WhatsonComponent, "\u0275fac", function WhatsonComponent_Factory(t) {
  return new (t || WhatsonComponent)();
});
(0,C_Stardraw_wmh_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(WhatsonComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WhatsonComponent,
  selectors: [["app-whatson"]],
  decls: 7,
  vars: 0,
  consts: [[1, "my-5", "text-center", 2, "list-style", "none"], [1, "py-3"], ["target", "_blank", "href", "/assets/flyers/Jazz Night.pdf"], ["target", "_blank", "href", "/assets/flyers/The First 100 Years A4 Poster.pdf"]],
  template: function WhatsonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Jazz Night - 7pm on October 15th 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 1)(5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The First 100 Years - 3pm to 6pm on October 16th 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
}));

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map