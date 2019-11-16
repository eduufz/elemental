(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z0 striped animated slideInDown fast\">\n\n\t<!-- Position Column -->\n\t<ng-container matColumnDef=\"position\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n\t\t<td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t</ng-container>\n\n\t<!-- Symbol Column -->\n\t<ng-container matColumnDef=\"symbol\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header  class=\"ion-text-uppercase\"> <strong>Insignia</strong>  </th>\n\t\t<td mat-cell *matCellDef=\"let element\"> \n\t\t\t<ion-thumbnail slot=\"end\">\n\t\t\t\t<img src=\"../../assets/icon/ranks/rank{{element.symbol}}.svg \">\n\t\t\t</ion-thumbnail>\n\n\t\t</td>\n\t</ng-container>\n\n\t<!-- Name Column -->\n\t<ng-container matColumnDef=\"name\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header  class=\"ion-text-uppercase\"> <strong>Usuario</strong>  </th>\n\t\t<td mat-cell *matCellDef=\"let element\" color=\"light\"><strong> {{element.name}} </strong> </td>\n\t</ng-container>\n\n\t<!-- points Column -->\n\t<ng-container matColumnDef=\"amount\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header  class=\"ion-text-uppercase\"><strong class=\"ion-float-right\">Cantidad Donado</strong>  </th>\n\t\t<td mat-cell *matCellDef=\"let element\" style=\"text-align: right;\"> \n\t\t\t{{element.amount}} €\n\t\t</td>\n\t</ng-container>\n\n\n\n\n\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n"

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab2PageRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: #989aa2;\n}\n\nion-thumbnail {\n  --size: 24px;\n}\n\ntr th {\n  background-color: var(--ion-color-primary);\n  padding: 1em;\n  text-align: left;\n  color: white;\n  border: none;\n}\n\ntr td {\n  color: #989aa2;\n  border-bottom: none;\n  -webkit-transition: height 1s ease-in-out;\n  transition: height 1s ease-in-out;\n}\n\ntr:nth-child(even), tr:nth-child(even) td {\n  background-color: #F4F5FA;\n  color: #0bb8cc;\n}\n\ntr:hover td {\n  background-color: #96deda !important;\n  cursor: pointer;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VhYm9sL2VsZW1lbnRhbC9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQywwQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7RUFDRSx5Q0FBQTtFQUFBLGlDQUFBO0FDRUg7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogIzk4OWFhMjtcbn1cblxuaW9uLXRodW1ibmFpbHtcblx0LS1zaXplOiAyNHB4O1xufVxuXG50ciB0aCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0cGFkZGluZzogMWVtO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRjb2xvcjogd2hpdGU7XG5cdGJvcmRlcjpub25lO1xufVxudHIgdGQge1xuXHRjb2xvcjogIzk4OWFhMjtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcbiAgXHR0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG50cjpudGgtY2hpbGQoZXZlbiksIHRyOm50aC1jaGlsZChldmVuKSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGNvbG9yOiAjMGJiOGNjO1xufVxuXG50cjpob3ZlciB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2ZGVkYSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiAjOTg5YWEyO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1zaXplOiAyNHB4O1xufVxuXG50ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudHIgdGQge1xuICBjb2xvcjogIzk4OWFhMjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbiksIHRyOm50aC1jaGlsZChldmVuKSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGNvbG9yOiAjMGJiOGNjO1xufVxuXG50cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NmRlZGEgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");




const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', amount: 1.0079, symbol: '11' },
    { position: 2, name: 'Helium', amount: 4.0026, symbol: '12' },
    { position: 3, name: 'Lithium', amount: 6.941, symbol: '13' },
    { position: 4, name: 'Beryllium', amount: 9.0122, symbol: '14' },
    { position: 5, name: 'Boron', amount: 10.811, symbol: '5' },
    { position: 6, name: 'Carbon', amount: 12.0107, symbol: '17' },
    { position: 7, name: 'Nitrogen', amount: 14.0067, symbol: '18' },
    { position: 8, name: 'Oxygen', amount: 15.9994, symbol: '9' },
    { position: 9, name: 'Fluorine', amount: 18.9984, symbol: '19' },
    { position: 10, name: 'Neon', amount: 20.1797, symbol: '13' },
];
let Tab2Page = class Tab2Page {
    constructor() {
        this.displayedColumns = ['position', 'symbol', 'name', 'amount'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], Tab2Page.prototype, "sort", void 0);
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map