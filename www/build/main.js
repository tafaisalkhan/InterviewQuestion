webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorite_favorite__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SideMenuComponent = (function () {
    function SideMenuComponent(navCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__["a" /* MainMenuComponent */];
        console.log('Hello SideMenuComponent Component');
        this.text = 'Hello World';
        //this.nav.setRoot(DuaListComponent);
    }
    SideMenuComponent.prototype.openPage = function (page) {
        if (page == 'menu') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_menu_main_menu__["a" /* MainMenuComponent */]);
        }
        else if (page == 'setting') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingComponent */]);
        }
        else if (page == 'about') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutComponent */]);
        }
        else if (page == 'favorite') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__favorite_favorite__["a" /* FavoriteComponent */]);
        }
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], SideMenuComponent.prototype, "nav", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'side-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/components/side-menu/side-menu.html"*/'\n\n\n<ion-menu [content]="content" side="left" id="site_menu" >\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  <ion-content>\n    <ion-list >\n          <button menuClose ion-item  (click)="openPage(\'menu\')">\n              <div style="font-weight: bold;font-size:14px">\n                 Main Menu\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'favorite\')">\n                <div style="font-weight: bold;font-size:14px">\n                    Favorite\n                </div>\n              </button>\n            <button menuClose ion-item  (click)="openPage(\'setting\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Setting\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'about\')">\n                <div style="font-weight: bold;font-size:14px">\n                    About\n                </div>\n            </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/components/side-menu/side-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SideMenuComponent);

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_interview_service_interview_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_interview_constant_interview_constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_list_question_list__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MainMenuComponent = (function () {
    function MainMenuComponent(navCtrl, questionServiceProvider, storage, plt, questionConstantProvider, admobFree) {
        this.navCtrl = navCtrl;
        this.questionServiceProvider = questionServiceProvider;
        this.storage = storage;
        this.plt = plt;
        this.questionConstantProvider = questionConstantProvider;
        this.admobFree = admobFree;
        this.dataList = [];
        this.loadDua();
    }
    MainMenuComponent.prototype.loadDua = function () {
        //check for local storage
        /*this.questionServiceProvider.getQuestion()
        .subscribe(data => {
            this.dataList = data['questions'].type ;
            //this.version = data[0].version;
            console.log(this.dataList);
            this.storage.set('questionList', this.dataList);
            //this.storage.set('version', data[0].version);
            debugger;
      
          },
        (err) => {console.log(err);
      
      
          }
          );*/
        var _this = this;
        this.storage.set('questionList', null);
        this.storage.get('questionList').then(function (val) {
            if (val != null) {
                _this.dataList = val;
            }
            else {
                _this.questionServiceProvider.getQuestion()
                    .subscribe(function (data) {
                    _this.dataList = data['questions'].type;
                    _this.version = data['questions'].version;
                    console.log(_this.dataList);
                    _this.storage.set('questionList', _this.dataList);
                    //this.storage.set('version', data[0].version);
                    debugger;
                }, function (err) {
                    console.log(err);
                });
            }
        });
        this.storage.get('version').then(function (val) {
            if (val != null) {
                _this.version = val;
                _this.questionServiceProvider.getQuestion()
                    .subscribe(function (data) {
                    if (_this.version != data['questions'].version) {
                        _this.dataList = data['questions'].type;
                        _this.version = data['questions'].version;
                        console.log(_this.dataList);
                        _this.storage.set('questionList', _this.dataList);
                        _this.storage.set('version', data['questions'].version);
                        debugger;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
        if (this.plt.is('iphone')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.questionConstantProvider.device = "small";
            this.platform = "small";
        }
        else if (this.plt.is('ipad')) {
            // This will only print when on iOS
            console.log('I am an ipad device!');
            this.questionConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('tablet')) {
            // This will only print when on iOS
            console.log('I am an tablet device!');
            this.questionConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('mobile')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.questionConstantProvider.device = "small";
            this.platform = "small";
        }
        else {
            console.log('I am an browser device!');
        }
    };
    MainMenuComponent.prototype.itemTapped = function (evnet, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__question_list_question_list__["a" /* QuestionListComponent */], {
            item: item
        });
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'main-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/components/main-menu/main-menu.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Main Menu </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n<ion-content padding style="padding: 20px; ">\n  \n            <div >\n  \n                <ion-card  style="background-color: #64B5F6; text-align: center;" *ngIf="dataList.length == 0">\n                    \n                    <ion-spinner icon="spiral"></ion-spinner>\n                    \n                <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n               \n                </ion-card-content>\n                    \n                        </ion-card>\n            <ion-card *ngFor="let item of dataList; let i = index" (click)="itemTapped($event, item, i)" (tab)="itemTapped($event, item, i)" style=" background-color: #64B5F6;">\n        \n            \n        \n           <!--     <ion-card-content  style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                    <ion-item style="background-color: #64B5F6;font-size: larger; font-weight: 900;">\n                    -->\n                    <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                        <ion-item  [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                   \n                        {{item.name}} \n                       \n                     \n                    </ion-item>\n                \n                  \n                  <!-- Add card content here! -->\n                  <!--<button ion-button color="secondary" round  (click)="duaList()">Light</button> -->\n                </ion-card-content>\n        \n            </ion-card>\n          </div> \n  \n     \n  </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/components/main-menu/main-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_interview_service_interview_service__["a" /* InterviewServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_interview_constant_interview_constant__["a" /* InterviewConstantProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], MainMenuComponent);

//# sourceMappingURL=main-menu.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_interview_service_interview_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_interview_constant_interview_constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the QuestionListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var QuestionListComponent = (function () {
    function QuestionListComponent(navParams, navCtrl, questionServiceProvider, storage, questionConstantProvider, admobFree, socialSharing) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.questionServiceProvider = questionServiceProvider;
        this.storage = storage;
        this.questionConstantProvider = questionConstantProvider;
        this.admobFree = admobFree;
        this.socialSharing = socialSharing;
        this.item = [];
        this.favoriteArray = [];
        this.sizeStore = "normal";
        this.item = this.navParams.get('item');
        this.name = this.item.name;
        this.type = this.item.type;
        this.loadQuestion();
    }
    QuestionListComponent.prototype.loadQuestion = function () {
        var _this = this;
        this.platform = this.questionConstantProvider.device;
        //this.storage.set('favoriteArrayStore', null);
        this.storage.get('favoriteArrayStore').then(function (val) {
            if (val != null) {
                _this.favoriteArray = val;
                for (var _i = 0, _a = _this.item.questions; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var i = _this.favoriteArray.indexOf(item.index);
                    if (i >= 0) {
                        item.favorite = true;
                    }
                    console.log(item);
                    console.log(i);
                }
            }
        });
        this.storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeStore = val;
            }
        });
        console.log(this.item);
    };
    QuestionListComponent.prototype.unFavorite = function (index) {
        //this.favoriteArray.slice(this.duaIndex);
        var i = this.favoriteArray.indexOf(index);
        //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
        if (i != -1) {
            this.favoriteArray.splice(i, 1);
        }
        var temp = this.item.questions.filter(function (question) { return question.index == index; });
        temp[0].favorite = false;
        this.storage.set('favoriteArrayStore', this.favoriteArray);
    };
    QuestionListComponent.prototype.favorite = function (index) {
        this.favoriteArray.push(index);
        this.storage.set('favoriteArrayStore', this.favoriteArray);
        var temp = this.item.questions.filter(function (question) { return question.index == index; });
        temp[0].favorite = true;
    };
    QuestionListComponent.prototype.shareQuestion = function (index, type, item) {
        this.socialSharing.share(this.item.question + "  <br/> " + this.item.answer, "Interview Question  " + this.name, null);
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'question-list',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/components/question-list/question-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>{{name}} Question List </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="padding: 20px; ">\n  \n            <div >\n  \n \n            <ion-card *ngFor="let item of item.questions; let i = index"  >\n        \n             <ion-card-header style="padding: 0px; " [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                <ion-toolbar  [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                    <ion-buttons start  (tap)="shareQuestion(item.index, type, item)">\n                        <button ion-button icon-only >\n                            <ion-icon name="share"></ion-icon>\n                          \n                        </button>\n                      </ion-buttons>  \n                    <ion-title [ngClass]="platform==\'small\'? \'toolbar-title-small-font\' : \'toolbar-title-large-font\'" > Question {{i+1}} </ion-title>\n                    \n                    <ion-buttons end *ngIf="item.favorite " (tap)="unFavorite(item.index)" >\n                        <button ion-button icon-only >\n                           \n                            <ion-icon name="star"  (click)="favorite()"></ion-icon>\n                        </button>\n                      </ion-buttons> \n                      <ion-buttons end *ngIf="!item.favorite" (tap)="favorite(item.index)">\n                          <button ion-button icon-only >\n                              <ion-icon name="star-outline"></ion-icon>\n                            \n                          </button>\n                        </ion-buttons>  \n\n                  </ion-toolbar>\n\n \n                  \n             \n            </ion-card-header>\n        \n\n              \n              <ion-card-content>\n              <br/>\n               <p [style.font-size]="sizeStore" [ngClass]="platform==\'small\'? \'p-medium-font\' : \'p-large-font\'" [innerHTML]="item.question"> \n              <!--  <p style= "font-size: xx-large"> -->\n            \n                   \n                \n                </p>\n                <br/>\n                <p [style.font-size]="sizeStore" [innerHTML]="item.answer"> \n                  \n                   \n              </ion-card-content>\n        \n            </ion-card>\n          </div> \n  \n     \n  </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/components/question-list/question-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_interview_service_interview_service__["a" /* InterviewServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_interview_constant_interview_constant__["a" /* InterviewConstantProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
], QuestionListComponent);

//# sourceMappingURL=question-list.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SettingComponent = (function () {
    function SettingComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.sizeSelected = "normal";
        storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeSelected = val;
            }
        });
    }
    SettingComponent.prototype.selectSizeOption = function () {
        this.storage.set('sizeStore', this.sizeSelected);
        console.log(this.sizeSelected);
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'setting',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/components/setting/setting.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Setting </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n\n  <ion-list radio-group [(ngModel)]="sizeSelected">\n      <ion-list-header>\n          Font Size\n        </ion-list-header>\n        <ion-item>\n            <ion-label>normal</ion-label>\n            <ion-radio checked="true" value="normal" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Large</ion-label>\n            <ion-radio value="large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>XX-Large</ion-label>\n            <ion-radio value="xx-large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n  </ion-list>\n\n  <br/>\n  <br/>\n\n  <ion-list radio-group [(ngModel)]="translationSelected">\n      <ion-list-header>\n          Transaltion\n        </ion-list-header>\n  <ion-item>\n      <ion-label>English</ion-label>\n      <ion-radio checked="true" value="english" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Urdu</ion-label>\n      <ion-radio value="urdu" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Spanish</ion-label>\n      <ion-radio value="spanish" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label>Turkish</ion-label>\n        <ion-radio value="turkish" (click)="selectTranlationOption()" ></ion-radio>\n      </ion-item>  \n\n    <ion-item>\n        <ion-label>Japanese</ion-label>\n        <ion-radio value="japanses" (click)="selectTranlationOption()" ></ion-radio>\n    </ion-item>  \n\n\n    <ion-item>\n        <ion-label>Chianese</ion-label>\n        <ion-radio value="chianses" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n   \n</ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/components/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], SettingComponent);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AboutComponent = (function () {
    function AboutComponent() {
        console.log('Hello AboutComponent Component');
        this.text = 'Hello World';
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'about',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/components/about/about.html"*/'\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title>Setting </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  \n  </ion-header>\n  \n\n\n  <ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n      \n      <ion-card>\n         \n        \n        <ion-card-content>\n          <p style="font-size: large;">\n              Contant From: Quran.com\n              <br/>\n              Voice: Saad Al-Ghamadi\n\n              \n          </p>\n        </ion-card-content>\n\n\n\n        </ion-card>\n      </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/components/about/about.html"*/
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_interview_service_interview_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_interview_constant_interview_constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_question_data_question_data__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FavoriteComponent = (function () {
    function FavoriteComponent(questionData, interviewServiceProvider, navParams, actionSheetCtrl, storage, socialSharing, interviewConstantProvider) {
        this.questionData = questionData;
        this.interviewServiceProvider = interviewServiceProvider;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.interviewConstantProvider = interviewConstantProvider;
        this.sizeStore = "normal";
        this.itemsQuestion = [];
        this.itemsFavoite = [];
        this.loadData();
    }
    FavoriteComponent.prototype.loadData = function () {
        var _this = this;
        try {
            this.platform = this.interviewConstantProvider.device;
            this.storage.get('favoriteArrayStore').then(function (val) {
                if (val != null) {
                    _this.favoriteArray = val;
                }
            });
            this.storage.get('sizeStore').then(function (val) {
                if (val != null) {
                    _this.sizeStore = val;
                }
            });
            this.storage.get('questionList').then(function (val) {
                if (val != null) {
                    _this.itemsQuestion = val;
                    for (var question in _this.itemsQuestion) {
                        //console.log(question);
                        //console.log(this.itemsQuestion[question]);
                        var questionData = new __WEBPACK_IMPORTED_MODULE_6__providers_question_data_question_data__["a" /* QuestionDataProvider */]();
                        questionData.name = _this.itemsQuestion[question].name;
                        questionData.questions = [];
                        var _loop_1 = function (index) {
                            console.log(_this.itemsQuestion[question].questions.filter(function (question) { return question.index == _this.favoriteArray[index]; }).length);
                            if (_this.itemsQuestion[question].questions.filter(function (question) { return question.index == _this.favoriteArray[index]; }).length > 0) {
                                temp = _this.itemsQuestion[question].questions.filter(function (question) { return question.index == _this.favoriteArray[index]; });
                                temp[0].favorite = true;
                                questionData.questions.push(temp);
                            }
                        };
                        var temp;
                        for (var index in _this.favoriteArray) {
                            _loop_1(index);
                        }
                        _this.itemsFavoite.push(questionData);
                    }
                    console.log(_this.itemsFavoite);
                }
            });
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.unFavorite = function (index) {
        //this.favoriteArray.slice(this.duaIndex);
        var i = this.favoriteArray.indexOf(index);
        //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
        if (i != -1) {
            this.favoriteArray.splice(i, 1);
        }
        for (var data in this.itemsFavoite) {
            console.log(data);
            var temp = this.itemsFavoite[data].questions.filter(function (quest) { return quest[0].index == index; });
            if (temp.length > 0) {
                temp[0][0].favorite = false;
            }
        }
        //var temp = this.item.questions.filter(question => question.index == index);
        //temp[0].favorite = false;
        this.storage.set('favoriteArrayStore', this.favoriteArray);
    };
    FavoriteComponent.prototype.favorite = function (index) {
        this.favoriteArray.push(index);
        this.storage.set('favoriteArrayStore', this.favoriteArray);
        for (var data in this.itemsFavoite) {
            console.log(data);
            var temp = this.itemsFavoite[data].questions.filter(function (quest) { return quest[0].index == index; });
            if (temp.length > 0) {
                temp[0][0].favorite = true;
            }
        }
        // var temp = this.item.questions.filter(question => question.index == index);
        // temp[0].favorite = true;
    };
    FavoriteComponent.prototype.shareQuestion = function (type, item) {
        this.socialSharing.share(item.question + "  <br/> " + item.answer, "Interview Question  " + type, null);
    };
    return FavoriteComponent;
}());
FavoriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'favorite',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/components/favorite/favorite.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title>Favorite Question </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding style="padding: 20px; ">\n    \n              <div *ngFor="let items of itemsFavoite; let i = index"  >\n   \n                 \n                  <ion-list  *ngIf="items.questions.length > 0">\n                        <ion-item style="background-color: yellowgreen;">\n                            <ion-label> {{items.name}}</ion-label>\n                           \n                          </ion-item>\n                        \n                        \n                  </ion-list>\n                  \n              <ion-card *ngFor="let item of items.questions; let i = index"  >\n               \n               <ion-card-header style="padding: 0px; " [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                  <ion-toolbar  [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                      <ion-buttons start  (tap)="shareQuestion(item[0], items.name)">\n                          <button ion-button icon-only >\n                              <ion-icon name="share"></ion-icon>\n                            \n                          </button>\n                        </ion-buttons>  \n                      <ion-title [ngClass]="platform==\'small\'? \'toolbar-title-small-font\' : \'toolbar-title-large-font\'" > Question {{i+1}} </ion-title>\n                      \n                      <ion-buttons end *ngIf="item[0].favorite " (tap)="unFavorite(item[0].index)" >\n                          <button ion-button icon-only >\n                             \n                              <ion-icon name="star"  (click)="favorite()"></ion-icon>\n                          </button>\n                        </ion-buttons> \n                        <ion-buttons end *ngIf="!item[0].favorite" (tap)="favorite(item[0].index)">\n                            <button ion-button icon-only >\n                                <ion-icon name="star-outline"></ion-icon>\n                              \n                            </button>\n                          </ion-buttons>  \n  \n                    </ion-toolbar>\n  \n   \n                    \n               \n              </ion-card-header>\n          \n  \n                \n                <ion-card-content>\n                <br/>\n                 <p [style.font-size]="sizeStore" [ngClass]="platform==\'small\'? \'p-medium-font\' : \'p-large-font\'" [innerHTML]="item[0].question"> \n                <!--  <p style= "font-size: xx-large"> -->\n              \n                     \n                  \n                  </p>\n                  <br/>\n                  <p [style.font-size]="sizeStore" [innerHTML]="item[0].answer"> \n                    \n                     \n                </ion-card-content>\n          \n              </ion-card>\n            </div> \n    \n       \n    </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/components/favorite/favorite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_question_data_question_data__["a" /* QuestionDataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_interview_service_interview_service__["a" /* InterviewServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_interview_constant_interview_constant__["a" /* InterviewConstantProvider */]])
], FavoriteComponent);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);

/*
  Generated class for the QuestionDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var QuestionDataProvider = (function () {
    function QuestionDataProvider() {
        this.questions = [];
    }
    return QuestionDataProvider;
}());

//# sourceMappingURL=question-data.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_main_menu_main_menu__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_question_list_question_list__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_setting_setting__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_about_about__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_favorite_favorite__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_interview_constant_interview_constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_interview_service_interview_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_media__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_question_data_question_data__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_main_menu_main_menu__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_question_list_question_list__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_about_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_favorite_favorite__["a" /* FavoriteComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_main_menu_main_menu__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_question_list_question_list__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_about_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_favorite_favorite__["a" /* FavoriteComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_interview_constant_interview_constant__["a" /* InterviewConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_interview_service_interview_service__["a" /* InterviewServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_question_data_question_data__["a" /* QuestionDataProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_side_menu_side_menu__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__components_side_menu_side_menu__["a" /* SideMenuComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__["a" /* SideMenuComponent */]);
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fkhan/Desktop/InterviewQuestion/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/InterviewQuestion/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods


var InterviewServiceProvider = (function () {
    function InterviewServiceProvider(http) {
        this.http = http;
    }
    InterviewServiceProvider.prototype.getQuestion = function () {
        return this.http.get("assets/json/question.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return InterviewServiceProvider;
}());
InterviewServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], InterviewServiceProvider);

//# sourceMappingURL=interview-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InterviewConstantProvider = (function () {
    function InterviewConstantProvider() {
    }
    return InterviewConstantProvider;
}());
InterviewConstantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], InterviewConstantProvider);

//# sourceMappingURL=interview-constant.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.js.map