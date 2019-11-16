(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z0 striped animated slideInDown fast\">\n\n\t<!-- Position Column -->\n\t<ng-container matColumnDef=\"position\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n\t\t<td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t</ng-container>\n\n\t<!-- Symbol Column -->\n\t<ng-container matColumnDef=\"symbol\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header  class=\"ion-text-uppercase\"> <strong>Insignia</strong>  </th>\n\t\t<td mat-cell *matCellDef=\"let element\"> \n\t\t\t<ion-thumbnail slot=\"end\">\n\t\t\t\t<img src=\"../../assets/icon/ranks/rank{{element.symbol}}.svg \">\n\t\t\t</ion-thumbnail>\n\n\t\t</td>\n\t</ng-container>\n\n\t<!-- Name Column -->\n\t<ng-container matColumnDef=\"name\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header  class=\"ion-text-uppercase\"> <strong>Usuario</strong>  </th>\n\t\t<td mat-cell *matCellDef=\"let element\" color=\"light\"><strong> {{element.name}} </strong> </td>\n\t</ng-container>\n\n\t<!-- points Column -->\n\t<ng-container matColumnDef=\"points\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header  class=\"ion-text-uppercase\"><strong class=\"ion-float-right\">Anuncios Vistos</strong>  </th>\n\t\t<td mat-cell *matCellDef=\"let element\" style=\"text-align: right;\"> \n\t\t\t\t {{element.points}} \n\t\t</td>\n\t</ng-container>\n\n\n\n\n\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }
];
var Tab1PageRoutingModule = /** @class */ (function () {
    function Tab1PageRoutingModule() {
    }
    Tab1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], Tab1PageRoutingModule);
    return Tab1PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab1PageRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: #989aa2;\n}\n\nion-thumbnail {\n  --size: 24px;\n}\n\ntr th {\n  background-color: var(--ion-color-primary);\n  padding: 1em;\n  text-align: left;\n  color: white;\n  border: none;\n}\n\ntr td {\n  color: #989aa2;\n  border-bottom: none;\n}\n\ntr:nth-child(even), tr:nth-child(even) td {\n  background-color: #F4F5FA;\n  color: #0bb8cc;\n}\n\ntr:hover td {\n  background-color: #96deda !important;\n  cursor: pointer;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VhYm9sL2VsZW1lbnRhbC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQywwQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUNFRDs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBREFBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiAjOTg5YWEyO1xufVxuXG5pb24tdGh1bWJuYWlse1xuXHQtLXNpemU6IDI0cHg7XG59XG5cbnRyIHRoIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRwYWRkaW5nOiAxZW07XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOm5vbmU7XG59XG50ciB0ZCB7XG5cdGNvbG9yOiAjOTg5YWEyO1xuXHRib3JkZXItYm90dG9tOiBub25lO1xufVxudHI6bnRoLWNoaWxkKGV2ZW4pLCB0cjpudGgtY2hpbGQoZXZlbikgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBjb2xvcjogIzBiYjhjYztcbn1cblxudHI6aG92ZXIgdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NmRlZGEgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogIzk4OWFhMjtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIC0tc2l6ZTogMjRweDtcbn1cblxudHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRyIHRkIHtcbiAgY29sb3I6ICM5ODlhYTI7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSwgdHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcbiAgY29sb3I6ICMwYmI4Y2M7XG59XG5cbnRyOmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2ZGVkYSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");




var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', points: 1.0079, symbol: '1' },
    { position: 2, name: 'Helium', points: 4.0026, symbol: '2' },
    { position: 3, name: 'Lithium', points: 6.941, symbol: '3' },
    { position: 4, name: 'Beryllium', points: 9.0122, symbol: '4' },
    { position: 5, name: 'Boron', points: 10.811, symbol: '5' },
    { position: 6, name: 'Carbon', points: 12.0107, symbol: '7' },
    { position: 7, name: 'Nitrogen', points: 14.0067, symbol: '8' },
    { position: 8, name: 'Oxygen', points: 15.9994, symbol: '9' },
    { position: 9, name: 'Fluorine', points: 18.9984, symbol: '10' },
    { position: 10, name: 'Neon', points: 20.1797, symbol: '13' },
];
var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.displayedColumns = ['position', 'symbol', 'name', 'points'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], Tab1Page.prototype, "sort", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map