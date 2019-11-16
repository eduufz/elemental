(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaderboards-leaderboards-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/leaderboards/leaderboards.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leaderboards/leaderboards.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n\t<ion-toolbar class=\"ion-text-center\">\n\t\t\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title >Clasificaciones Globales</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n\t<ion-tabs>\n\t\t<ion-tab-bar slot=\"bottom\">\n\t\t\t<ion-tab-button tab=\"tab1\" color=\"medium\" expand=\"block\">\n\t\t\t\t<ion-icon name=\"eye\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<strong>Más vistos </strong>\n\t\t\t\t</ion-label>\n\t\t\t</ion-tab-button>\n\n\t\t\t<ion-tab-button tab=\"tab2\" color=\"medium\" expand=\"block\">\n\t\t\t\t<ion-icon name=\"cash\"></ion-icon>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<strong>Mejores donadores</strong>\n\t\t\t\t</ion-label>\n\t\t\t</ion-tab-button>\n\n\t\t</ion-tab-bar>\n\n\t</ion-tabs>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/leaderboards/leaderboards-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/leaderboards/leaderboards-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LeaderboardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardsPageRoutingModule", function() { return LeaderboardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leaderboards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaderboards.page */ "./src/app/leaderboards/leaderboards.page.ts");




var routes = [
    {
        path: 'leaderboards',
        component: _leaderboards_page__WEBPACK_IMPORTED_MODULE_3__["LeaderboardsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: '',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/leaderboards/leaderboards',
        pathMatch: 'full'
    }
];
var LeaderboardsPageRoutingModule = /** @class */ (function () {
    function LeaderboardsPageRoutingModule() {
    }
    LeaderboardsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LeaderboardsPageRoutingModule);
    return LeaderboardsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/leaderboards/leaderboards.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/leaderboards/leaderboards.module.ts ***!
  \*****************************************************/
/*! exports provided: LeaderboardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardsPageModule", function() { return LeaderboardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaderboards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaderboards-routing.module */ "./src/app/leaderboards/leaderboards-routing.module.ts");
/* harmony import */ var _leaderboards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaderboards.page */ "./src/app/leaderboards/leaderboards.page.ts");







var LeaderboardsPageModule = /** @class */ (function () {
    function LeaderboardsPageModule() {
    }
    LeaderboardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _leaderboards_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaderboardsPageRoutingModule"]
            ],
            declarations: [_leaderboards_page__WEBPACK_IMPORTED_MODULE_6__["LeaderboardsPage"]]
        })
    ], LeaderboardsPageModule);
    return LeaderboardsPageModule;
}());



/***/ }),

/***/ "./src/app/leaderboards/leaderboards.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/leaderboards/leaderboards.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-tab-button {\n  max-width: 100% !important;\n  width: 100%;\n  --ripple-color: var(--ion-color-medium);\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-medium);\n}\n\nion-tab-button.tab-selected {\n  --background: var(--ion-color-light) !important;\n  --color-selected: var(--ion-color-primary);\n  border-bottom: 2px solid #50c9c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VhYm9sL2VsZW1lbnRhbC9zcmMvYXBwL2xlYWRlcmJvYXJkcy9sZWFkZXJib2FyZHMucGFnZS5zY3NzIiwic3JjL2FwcC9sZWFkZXJib2FyZHMvbGVhZGVyYm9hcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLHlCQUFBO0VBQ0EsNEJBQUE7QUNDTjs7QURFQTtFQUNDLDBCQUFBO0VBQ0EsV0FBQTtFQUNDLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sZWFkZXJib2FyZHMvbGVhZGVyYm9hcmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICAgIH1cblxuaW9uLXRhYi1idXR0b24ge1xuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0d2lkdGg6IDEwMCU7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwYzljMztcbn1cbiIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwYzljMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/leaderboards/leaderboards.page.ts":
/*!***************************************************!*\
  !*** ./src/app/leaderboards/leaderboards.page.ts ***!
  \***************************************************/
/*! exports provided: LeaderboardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardsPage", function() { return LeaderboardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeaderboardsPage = /** @class */ (function () {
    function LeaderboardsPage() {
    }
    LeaderboardsPage.prototype.ngOnInit = function () {
    };
    LeaderboardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboards',
            template: __webpack_require__(/*! raw-loader!./leaderboards.page.html */ "./node_modules/raw-loader/index.js!./src/app/leaderboards/leaderboards.page.html"),
            styles: [__webpack_require__(/*! ./leaderboards.page.scss */ "./src/app/leaderboards/leaderboards.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeaderboardsPage);
    return LeaderboardsPage;
}());



/***/ })

}]);
//# sourceMappingURL=leaderboards-leaderboards-module-es5.js.map