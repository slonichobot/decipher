webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__morse_morse__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brail_brail__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__binary_binary__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flag_flag__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abc_abc__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calc_calc__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__morse_morse__["a" /* MorsePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__brail_brail__["a" /* BrailPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__binary_binary__["a" /* BinaryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__flag_flag__["a" /* FlagPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__abc_abc__["a" /* AbcPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__calc_calc__["a" /* CalcPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab6Root" tabTitle="Calc" tabIcon="keypad"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="Morse" tabIcon="train"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Brail" tabIcon="eye-off"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Binary" tabIcon="outlet"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Flag" tabIcon="flag"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Abc" tabIcon="keypad"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MorsePage = /** @class */ (function () {
    function MorsePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.morse = "";
        this.items = [];
        this.saved = [];
        this.MORSE = "  ETIANMSURWDKGOHVF L PJBXCYZQ";
        storage.get('morseSaved').then(function (val) {
            if (val && val.length) {
                _this.saved = val.split(',');
            }
        });
    }
    MorsePage.prototype.clicked = function (c) {
        this.morse += c;
        this.calcItems();
    };
    MorsePage.prototype.back = function () {
        this.morse = this.morse.substring(0, this.morse.length - 1);
        this.calcItems();
    };
    MorsePage.prototype.save = function (item) {
        this.saved = [item].concat(this.saved);
        this.storage.set('morseSaved', this.saved.join());
    };
    MorsePage.prototype.clear = function () {
        this.saved = [];
        this.storage.set('morseSaved', this.saved.join());
    };
    MorsePage.prototype.reset = function () {
        this.morse = "";
        this.calcItems();
    };
    MorsePage.prototype.set = function (event) {
        this.morse = event.target.value;
        this.calcItems();
    };
    MorsePage.prototype.calcItems = function () {
        this.items = [
            this.morseDecode(this.morse, 0),
            this.morseDecode(this.morse, 1)
        ];
    };
    MorsePage.prototype.morseDecode = function (str, inv) {
        var cur = 1;
        if (inv == undefined)
            inv = 0;
        var ret = "";
        for (var i = 0; i < str.length; ++i) {
            if (str[i] == '.')
                cur = 2 * cur + inv;
            else if (str[i] == '-')
                cur = 2 * cur + (inv == 1 ? 0 : 1);
            else if (str[i] == '/') {
                if (cur > 1 && cur < this.MORSE.length)
                    ret += this.MORSE[cur];
                else
                    ret += "_";
                cur = 1;
            }
            else
                console.warn("invalid char " + str[i] + " at pos " + i + " of " + str);
        }
        if (cur > 1) {
            if (cur < this.MORSE.length)
                ret += this.MORSE[cur];
            else
                ret += " ";
        }
        return ret;
    };
    MorsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-morse',template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/morse/morse.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Morse</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>morse:</ion-label>\n      <ion-textarea #console class="console" type="text" value="{{morse}}" \n        (input)="set($event)"></ion-textarea>\n    </ion-item>\n    <ion-item text-center>\n      <button ion-button class="cmd big" (click)="clicked(\'.\')">.</button>\n      <button ion-button class="cmd big" (click)="clicked(\'-\')">-</button>\n      <button ion-button class="cmd big" (click)="clicked(\'/\')">/</button>\n      <button ion-button class="cmd big" color="dark" (click)="back()">\n        <ion-icon name="backspace"></ion-icon>\n      </button>\n      <button ion-button class="cmd big" color="dark" (click)="reset()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n   <ion-list *ngIf="items && items.length">\n    <ion-list-header>Translation</ion-list-header>\n    <button ion-item *ngFor="let item of items" (click)="save(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n   <ion-list *ngIf="saved && saved.length">\n    <ion-list-header>Saved items</ion-list-header>\n    <button ion-item *ngFor="let item of saved">\n      {{ item }}\n    </button>\n    <button ion-item (click)="clear()">\n      <ion-icon name="trash"></ion-icon>\n      Clear\n    </button>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar text-right>\n    <ion-buttons>\n      <button ion-button class="cmd" (click)="clicked(\'.\')">.</button>\n      <button ion-button class="cmd" (click)="clicked(\'-\')">-</button>\n      <button ion-button class="cmd" (click)="clicked(\'/\')">/</button>\n      <button ion-button class="cmd" color="dark" (click)="back()">\n        <ion-icon name="backspace"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/morse/morse.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MorsePage);
    return MorsePage;
}());

//# sourceMappingURL=morse.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrailPage = /** @class */ (function () {
    function BrailPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.brail = [[false, false], [false, false], [false, false]];
        this.m = {};
        this.items = [];
        this.saved = [];
        this.m["1"] = 'A';
        this.m["12"] = 'B';
        this.m["14"] = 'C';
        this.m["145"] = 'D';
        this.m["15"] = 'E';
        this.m["124"] = 'F';
        this.m["1245"] = 'G';
        this.m["125"] = 'H';
        this.m["24"] = 'I';
        this.m["245"] = 'J';
        this.m["13"] = 'K';
        this.m["123"] = 'L';
        this.m["134"] = 'M';
        this.m["1345"] = 'N';
        this.m["135"] = 'O';
        this.m["1234"] = 'P';
        this.m["12345"] = 'Q';
        this.m["1235"] = 'R';
        this.m["234"] = 'S';
        this.m["2345"] = 'T';
        this.m["136"] = 'U';
        this.m["1236"] = 'V';
        this.m["2456"] = 'W';
        this.m["1346"] = 'X';
        this.m["13456"] = 'Y';
        this.m["1356"] = 'Z';
        this.evaluate();
        storage.get('brailSaved').then(function (val) {
            if (val && val.length) {
                _this.saved = val.split(',');
            }
        });
    }
    BrailPage.prototype.add = function (char) {
        if (this.items.length == 0)
            this.items = ["", ""];
        this.items[0] += this.currentA;
        this.items[1] += this.currentB;
        this.resetBrail();
    };
    BrailPage.prototype.clear = function () {
        this.items = [];
        this.resetBrail();
    };
    BrailPage.prototype.resetBrail = function () {
        this.brail = [[false, false], [false, false], [false, false]];
        this.evaluate();
    };
    BrailPage.prototype.evaluate = function () {
        var num = 1;
        var curA = "";
        var curB = "";
        for (var j = 0; j < 2; ++j) {
            for (var i = 0; i < 3; ++i) {
                if (this.brail[i][j]) {
                    curA += num;
                }
                else {
                    curB += num;
                }
                num++;
            }
        }
        this.currentA = '_';
        this.currentB = '_';
        if (this.m[curA] != undefined)
            this.currentA = this.m[curA];
        if (this.m[curB] != undefined)
            this.currentB = this.m[curB];
    };
    BrailPage.prototype.save = function (item) {
        if (!item.length)
            return;
        this.saved = [item].concat(this.saved);
        this.storage.set('brailSaved', this.saved.join());
    };
    BrailPage.prototype.clicked = function (x, y) {
        this.brail[x][y] = !this.brail[x][y];
        this.evaluate();
    };
    BrailPage.prototype.clearSaved = function () {
        this.saved = [];
        this.storage.set('brailSaved', this.saved.join());
    };
    BrailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brail',template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/brail/brail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Brail\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<table>\n		<tr>\n			<td><button ion-button round (click)="clicked(0,0)" [ngClass]="brail[0][0] ? \'on\' : \'off\'"></button></td>\n			<td><button ion-button round (click)="clicked(0,1)" [ngClass]="brail[0][1] ? \'on\' : \'off\'"></button></td>\n\n			<td rowspan="3" class="current" text-center>\n				<div class="console" text-center>{{currentA}} {{currentB}}</div>\n				<ion-icon class="action" name="add-circle" (click)="add()"></ion-icon>\n				<ion-icon class="action" name="trash" (click)="clear()"></ion-icon>\n			</td>\n		</tr>\n		<tr>\n			<td><button ion-button round (click)="clicked(1,0)" [ngClass]="brail[1][0] ? \'on\' : \'off\'"></button></td>\n			<td><button ion-button round (click)="clicked(1,1)" [ngClass]="brail[1][1] ? \'on\' : \'off\'"></button></td>\n		</tr>\n		<tr>\n			<td><button ion-button round (click)="clicked(2,0)" [ngClass]="brail[2][0] ? \'on\' : \'off\'"></button></td>\n			<td><button ion-button round (click)="clicked(2,1)" [ngClass]="brail[2][1] ? \'on\' : \'off\'"></button></td>\n		</tr>\n	</table>\n\n   <ion-list *ngIf="items && items.length">\n    <ion-list-header>Translation</ion-list-header>\n    <button ion-item *ngFor="let item of items" (click)="save(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n  <ion-list *ngIf="saved && saved.length">\n    <ion-list-header>Saved items</ion-list-header>\n    <button ion-item *ngFor="let item of saved">\n      {{ item }}\n    </button>\n    <button ion-item (click)="clearSaved()">\n      <ion-icon name="trash"></ion-icon>\n      Clear\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/brail/brail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BrailPage);
    return BrailPage;
}());

//# sourceMappingURL=brail.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BinaryPage = /** @class */ (function () {
    function BinaryPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.binary = "";
        this.items = [];
        this.saved = [];
        storage.get('binarySaved').then(function (val) {
            if (val && val.length) {
                _this.saved = val.split(',');
            }
        });
    }
    BinaryPage.prototype.clicked = function (c) {
        this.binary += c;
        this.calcItems();
    };
    BinaryPage.prototype.back = function () {
        this.binary = this.binary.substring(0, this.binary.length - 1);
        this.calcItems();
    };
    BinaryPage.prototype.save = function (item) {
        if (!item.length)
            return;
        this.saved = [item].concat(this.saved);
        this.storage.set('binarySaved', this.saved.join());
    };
    BinaryPage.prototype.clear = function () {
        this.saved = [];
        this.storage.set('binarySaved', this.saved.join());
    };
    BinaryPage.prototype.reset = function () {
        this.binary = "";
        this.calcItems();
    };
    BinaryPage.prototype.set = function (event) {
        this.binary = event.target.value;
        this.calcItems();
    };
    BinaryPage.prototype.calcItems = function () {
        this.items = [
            this.binaryDecode(this.binary, 0),
            this.binaryDecode(this.binary, 1),
            this.binaryDecode(this.binary.split('').reverse().join(''), 0).split('').reverse().join(''),
            this.binaryDecode(this.binary.split('').reverse().join(''), 1).split('').reverse().join(''),
        ];
    };
    BinaryPage.prototype.binaryDecode = function (str, inv) {
        var cur = 0;
        if (inv == undefined)
            inv = 0;
        var ret = "";
        for (var i = 0; i < str.length; ++i) {
            if (str[i] == '0')
                cur = 2 * cur + inv;
            else if (str[i] == '1')
                cur = 2 * cur + (inv == 1 ? 0 : 1);
            else if (str[i] == '/') {
                if (cur >= 1 && cur <= 26)
                    ret += String.fromCharCode("a".charCodeAt(0) + cur - 1);
                else
                    ret += "_";
                cur = 0;
            }
            else
                console.warn("invalid char " + str[i] + " at pos " + i + " of " + str);
        }
        if (cur >= 1) {
            if (cur <= 26)
                ret += String.fromCharCode("a".charCodeAt(0) + cur - 1);
            else
                ret += " ";
        }
        return ret;
    };
    BinaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-binary',template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/binary/binary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Binary</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>binary:</ion-label>\n      <ion-textarea #console class="console" type="text" value="{{binary}}" (input)="set($event)"></ion-textarea>\n    </ion-item>\n    <ion-item text-center>\n      <button ion-button class="cmd big" (click)="clicked(\'0\')">0</button>\n      <button ion-button class="cmd big" (click)="clicked(\'1\')">1</button>\n      <button ion-button class="cmd big" (click)="clicked(\'/\')">/</button>\n      <button ion-button class="cmd big" color="dark" (click)="back()"><ion-icon name="backspace"></ion-icon></button>\n      <button ion-button class="cmd big" color="dark" (click)="reset()"><ion-icon name="close"></ion-icon></button>\n    </ion-item>\n  </ion-list>\n\n   <ion-list *ngIf="items && items.length">\n    <ion-list-header>Translation</ion-list-header>\n    <button ion-item *ngFor="let item of items" (click)="save(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n   <ion-list *ngIf="saved && saved.length">\n    <ion-list-header>Saved items</ion-list-header>\n    <button ion-item *ngFor="let item of saved">\n      {{ item }}\n    </button>\n    <button ion-item (click)="clear()">\n      <ion-icon name="trash"></ion-icon>\n      Clear\n    </button>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar text-right>\n    <ion-buttons>\n      <button ion-button class="cmd" (click)="clicked(\'0\')">0</button>\n      <button ion-button class="cmd" (click)="clicked(\'1\')">1</button>\n      <button ion-button class="cmd" (click)="clicked(\'/\')">/</button>\n      <button ion-button class="cmd" color="dark" (click)="back()"><ion-icon name="backspace"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/binary/binary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BinaryPage);
    return BinaryPage;
}());

//# sourceMappingURL=binary.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlagPage = /** @class */ (function () {
    function FlagPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.flagAbc = [
            "_ABCDEFG",
            "A_HIKLMN",
            "BH_OPQRS",
            "CIO_TUY_",
            "DKPT__JV",
            "ELQU__WX",
            "FMRYJW_Z",
            "GNS_VXZ_"
        ];
        // dirs:
        // down, left-down, left, left-up,
        // up, right-up, right, right-down
        this.positions = [];
        this.selected = [];
        this.current = '_';
        this.flag = "";
        this.items = [];
        this.saved = [];
        var angle = Math.PI / 2;
        for (var i = 0; i < 8; ++i) {
            this.positions.push({
                x1: 0,
                y1: 0,
                x2: Math.cos(angle),
                y2: Math.sin(angle),
                id: i
            });
            angle += 2 * Math.PI / 8;
        }
        storage.get('flagSaved').then(function (val) {
            if (val && val.length) {
                _this.saved = val.split(',');
            }
        });
    }
    FlagPage.prototype.select = function (id) {
        var pos = this.selected.indexOf(id);
        if (pos == -1) {
            this.selected.push(id);
            if (this.selected.length > 2) {
                this.selected = this.selected.slice(-2);
            }
            console.log(id, this.selected);
        }
        else {
            this.selected.splice(pos, 1);
        }
        this.evaluate();
    };
    FlagPage.prototype.isSelected = function (id) {
        return this.selected.indexOf(id) != -1;
    };
    FlagPage.prototype.evaluate = function () {
        if (this.selected.length != 2) {
            this.current = '_';
            return;
        }
        var x = this.selected[0], y = this.selected[1];
        this.current = this.flagAbc[x][y];
    };
    FlagPage.prototype.add = function () {
        this.flag += this.current;
    };
    FlagPage.prototype.back = function () {
        this.flag = this.flag.substring(0, this.flag.length - 1);
    };
    FlagPage.prototype.save = function () {
        this.saved = [this.flag].concat(this.saved);
        this.storage.set('flagSaved', this.saved.join());
    };
    FlagPage.prototype.clear = function () {
        this.saved = [];
        this.storage.set('flagSaved', this.saved.join());
    };
    FlagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flag',template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/flag/flag.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Flag\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<svg viewBox="-100 -100 200 200">\n		<g *ngFor="let pos of positions">\n			<line\n				[attr.x1]="(pos.x1 * 88)"\n				[attr.y1]="(pos.y1 * 88)"\n				[attr.x2]="(pos.x2 * 88)"\n				[attr.y2]="(pos.y2 * 88)"\n				(click)="select(pos.id)"\n			 />\n		</g>\n		<g *ngFor="let pos of positions">\n			<line\n				*ngIf="isSelected(pos.id)"\n				[attr.x1]="(pos.x1 * 90)"\n				[attr.y1]="(pos.y1 * 90)"\n				[attr.x2]="(pos.x2 * 90)"\n				[attr.y2]="(pos.y2 * 90)"\n				(click)="select(pos.id)"\n				class="selected"\n			 />\n		</g>\n	</svg>\n	<table class="current" text-center><tr>\n		<td class="char">{{current}}</td>\n		<td>\n			<button ion-button color="dark"\n				(click)="add()">\n				<ion-icon name="add-circle"></ion-icon>\n			</button>\n			<button ion-button color="dark"\n				(click)="back()">\n				<ion-icon name="backspace"></ion-icon>\n			</button>\n		</td>\n	</tr></table>\n  \n  <ion-list *ngIf="flag.length">\n  	<button ion-item (click)="save()">\n  		{{flag}}\n  	</button>\n  </ion-list>\n\n\n   <ion-list *ngIf="saved && saved.length">\n    <ion-list-header>Saved items</ion-list-header>\n    <button ion-item *ngFor="let item of saved">\n      {{ item }}\n    </button>\n    <button ion-item (click)="clear()">\n      <ion-icon name="trash"></ion-icon>\n      Clear\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/flag/flag.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], FlagPage);
    return FlagPage;
}());

//# sourceMappingURL=flag.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbcPage = /** @class */ (function () {
    function AbcPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.saved = [];
        this.translation = ["", "", "", "", ""];
        this.charA = "A".charCodeAt(0);
        this.charZ = "Z".charCodeAt(0);
        storage.get('abcSaved').then(function (val) {
            if (val && val.length) {
                _this.saved = val.split(',');
            }
        });
    }
    AbcPage.prototype.set = function (type, event) {
        var nums = this.toNums(type, event.target.value);
        var translation = ["", "", "", "", ""];
        translation[0] = nums.join(',');
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var i = nums_1[_i];
            if (isNaN(i) || i < 1 || i > 26) {
                translation[1] += "_";
                translation[2] += "_";
            }
            else {
                translation[1] += String
                    .fromCharCode("A".charCodeAt(0) + i - 1);
                translation[2] += String
                    .fromCharCode("Z".charCodeAt(0) - i + 1);
            }
            if (isNaN(i) || i < 0 || i >= 26) {
                translation[3] += "_";
                translation[4] += "_";
            }
            else {
                translation[3] += String
                    .fromCharCode(this.charA + i);
                translation[4] += String
                    .fromCharCode(this.charZ - i);
            }
        }
        this.translation = translation;
    };
    AbcPage.prototype.toNums = function (type, val) {
        var _this = this;
        var ret = [];
        switch (type) {
            case 0:
                if (val[val.length - 1] == ',')
                    val = val.substr(0, val.length - 1);
                ret = val.split(',').map(Number);
                break;
            case 1:
                val = val.toUpperCase();
                ret = val.split('').map(function (c) { return Number(c.charCodeAt(0) - _this.charA + 1); });
                break;
            case 2:
                val = val.toUpperCase();
                ret = val.split('').map(function (c) { return Number(_this.charZ - c.charCodeAt(0) + 1); });
                break;
            case 3:
                val = val.toUpperCase();
                ret = val.split('').map(function (c) { return Number(c.charCodeAt(0) - _this.charA); });
                break;
            case 4:
                val = val.toUpperCase();
                ret = val.split('').map(function (c) { return Number(-c.charCodeAt(0) + _this.charZ); });
                break;
        }
        return ret;
    };
    AbcPage.prototype.save = function (item) {
        if (!item.length)
            return;
        this.saved = [item].concat(this.saved);
        this.storage.set('abcSaved', this.saved.join());
    };
    AbcPage.prototype.clear = function () {
        this.saved = [];
        this.storage.set('abcSaved', this.saved.join());
    };
    AbcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abc',template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/abc/abc.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Abc\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n	  <ion-item> <!-- (click)="save(translation[1])" -->\n	    <ion-label stacked>Input numbers delimited by comma:</ion-label>\n	    <ion-input (input)="set(0, $event)" value="{{translation[0]}}"></ion-input>\n	    <button item-right (click)="save(translation[0])">save</button>\n	  </ion-item>\n\n	  <ion-item> <!-- (click)="save(translation[1])" -->\n	    <ion-label stacked>abc</ion-label>\n	  	<ion-input (input)="set(1, $event)" value="{{translation[1]}}"></ion-input>\n	  	<button item-right (click)="save(translation[1])">save</button>\n	  </ion-item>\n\n	  <ion-item> <!-- (click)="save(translation[2])" -->\n	    <ion-label stacked>reverse abc</ion-label>\n	  	<ion-input (input)="set(2, $event)" value="{{translation[2]}}"></ion-input>\n	  	<button item-right (click)="save(translation[2])">save</button>\n	  </ion-item>\n\n	  <ion-item> <!-- (click)="save(translation[3])" -->\n	    <ion-label stacked>0 indexed abc</ion-label>\n	  	<ion-input (input)="set(3, $event)" value="{{translation[3]}}"></ion-input>\n	  	<button item-right (click)="save(translation[3])">save</button>\n	  </ion-item>\n\n	  <ion-item> <!-- (click)="save(translation[4])" -->\n	    <ion-label stacked>0 indexed abc reversed</ion-label>\n	  	<ion-input (input)="set(4, $event)" value="{{translation[4]}}"></ion-input>\n	  	<button item-right (click)="save(translation[4])">save</button>\n	  </ion-item>\n  </ion-list>\n   <ion-list *ngIf="saved && saved.length">\n    <ion-list-header>Saved items</ion-list-header>\n    <button ion-item *ngFor="let item of saved">\n      {{ item }}\n    </button>\n    <button ion-item (click)="clear()">\n      <ion-icon name="trash"></ion-icon>\n      Clear\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/abc/abc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AbcPage);
    return AbcPage;
}());

//# sourceMappingURL=abc.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalcPage = /** @class */ (function () {
    function CalcPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.saved = [];
        this.result = [];
        this.inBasis = 10;
        this.outBasis = 10;
        this.abcTransl = 0;
        this.digitOrder = 0;
        this.changed = false;
        this.val = "";
        this.divisors = [';', ','];
        this.operators = ['+', '-', '*', '/', '%', '^', '&', '|'];
        storage.get('calcSaved').then(function (val) {
            if (val && val.length) {
                _this.saved = val.split(',');
            }
        });
    }
    CalcPage.prototype.setBasis = function (type, event) {
        var val = event.target.value;
        if (val != 'A' && val != 'A0') {
            val = Number(val);
            if (isNaN(val) || val < 2)
                return false;
        }
        if (type === 0)
            this.inBasis = val;
        else
            this.outBasis = val;
        this.changed = true;
        this.calc({ target: { value: this.val } });
    };
    CalcPage.prototype.calc = function (event) {
        var nval = event.target.value.toLowerCase();
        for (var i = 1; i <= this.divisors.length; i++) {
            nval = nval.split(this.divisors[i]).join(this.divisors[0]);
        }
        if (nval == this.val && !this.changed)
            return;
        this.changed = false;
        this.val = nval;
        var val_arr = this.val.split(this.divisors[0]);
        this.result = [[]];
        try {
            for (var _i = 0, val_arr_1 = val_arr; _i < val_arr_1.length; _i++) {
                var val = val_arr_1[_i];
                var curNum = [];
                var expr = "";
                for (var _a = 0, val_1 = val; _a < val_1.length; _a++) {
                    var c = val_1[_a];
                    if (('0' <= c && c <= '9')) {
                        curNum.push(c.charCodeAt(0) - '0'.charCodeAt(0));
                    }
                    else if (this.operators.indexOf(c) !== -1) {
                        expr += this.getNum(curNum);
                        curNum = [];
                        expr += c;
                    }
                    else if ('a' <= c && c <= 'z') {
                        var abcshift = String(this.inBasis) == 'A' ? 1 :
                            String(this.inBasis) == 'A0' ? 0 : 10;
                        var cur = c.charCodeAt(0) - ('a'.charCodeAt(0)) + abcshift;
                        curNum.push(cur);
                    }
                }
                expr += this.getNum(curNum);
                var ret = eval(expr);
                this.result[0].push(this.getRet(ret));
            }
            this.result[0] = this.result[0].join(', ');
        }
        catch (e) {
            this.result = ["ERROR: " + e.message];
        }
    };
    CalcPage.prototype.getNum = function (numArr) {
        if (this.digitOrder)
            numArr.reverse();
        var ret = 0;
        var inBasis = typeof (this.inBasis) === 'string' ? 26 : this.inBasis;
        for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
            var i = numArr_1[_i];
            ret = ret * inBasis + i;
        }
        return ret;
    };
    CalcPage.prototype.getRet = function (num) {
        var _this = this;
        var ret = [];
        var minus = num < 0 ? '-' : '';
        num = Math.abs(num);
        var outBasis = String(this.outBasis) === 'A0' ? 26 :
            String(this.outBasis) === 'A' ? 27 : this.outBasis;
        while (num > 0) {
            ret.push(num % outBasis);
            num = Math.floor(num / outBasis);
        }
        ret.reverse();
        if (String(this.outBasis)[0] == 'A') {
            ret = ret.map(function (x) {
                if (String(_this.outBasis) == 'A')
                    x -= 1;
                return String.fromCharCode(x + "A".charCodeAt(0));
            });
            return minus + ret.join('');
        }
        else if (outBasis <= 10) {
            return minus + ret.join('');
        }
        else if (outBasis <= 35) {
            ret = ret.map(function (x) {
                return (x > 10 ? String.fromCharCode(x - 10 + "A".charCodeAt(0))
                    : String(x));
            });
            return minus + ret.join('');
        }
        return minus + '(' + ret.join(',') + ')'; // outBasis>35
    };
    CalcPage.prototype.save = function (item) {
        this.saved = [item].concat(this.saved);
        this.storage.set('calcSaved', this.saved.join());
    };
    CalcPage.prototype.clear = function () {
        this.saved = [];
        this.storage.set('calcSaved', this.saved.join());
    };
    CalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calc',template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/pages/calc/calc.html"*/'<ion-header>\n	<ion-navbar>\n	<ion-title>\n		Calc\n	</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-item>\n    	<ion-label>ABC translation (1-indexed vs 0-indexed)</ion-label>\n	    <ion-toggle [(ngModel)]="abcTransl"></ion-toggle>\n	</ion-item>\n	<ion-item>\n    	<ion-label>Digit order (left to right / right to left) </ion-label>\n	    <ion-toggle [(ngModel)]="digitOrder"></ion-toggle>\n	</ion-item>\n	<ion-item>\n    	<ion-label>Input Basis</ion-label>\n	    <ion-input (input)="setBasis(0, $event)" value="{{inBasis}}"></ion-input>\n	</ion-item>\n	<ion-item>\n    	<ion-label>Output Basis</ion-label>\n	    <ion-input (input)="setBasis(1, $event)" value="{{outBasis}}">10</ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-textarea placeholder="Enter an expression in your basis." (input)="calc($event)">\n	</ion-textarea>\n	</ion-item>\n	<ion-list *ngIf="result && result.length">\n		<ion-list-header>Result</ion-list-header>\n	<button ion-item *ngFor="let item of result">\n		{{ item }}\n	</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/pages/calc/calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CalcPage);
    return CalcPage;
}());

//# sourceMappingURL=calc.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_brail_brail__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_binary_binary__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_morse_morse__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_flag_flag__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_abc_abc__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_calc_calc__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(194);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_brail_brail__["a" /* BrailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_binary_binary__["a" /* BinaryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_morse_morse__["a" /* MorsePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_flag_flag__["a" /* FlagPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_abc_abc__["a" /* AbcPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calc_calc__["a" /* CalcPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_brail_brail__["a" /* BrailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_binary_binary__["a" /* BinaryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_morse_morse__["a" /* MorsePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_flag_flag__["a" /* FlagPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_abc_abc__["a" /* AbcPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calc_calc__["a" /* CalcPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/me/sifrovacky/decipher/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/me/sifrovacky/decipher/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map