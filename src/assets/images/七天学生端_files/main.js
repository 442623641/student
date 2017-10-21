webpackJsonp([4],{

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_constants__ = __webpack_require__(58);
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
 * Generated class for the ValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ValidationPage = (function () {
    function ValidationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = {
            confirm: __WEBPACK_IMPORTED_MODULE_2__pages_constants__["b" /* CONFIRM_PAGE */],
        };
    }
    ValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValidationPage');
    };
    return ValidationPage;
}());
ValidationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-validation',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/validation/validation.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>获取验证码</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding-top>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label fixed>手机号码</ion-label>\n      <ion-input placeholder="输入手机号" type="tel"></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label color="dark3" fixed w-80>验证码</ion-label>\n      <ion-input max="6" type="number" name="vcode" placeholder="输入验证码"></ion-input>\n      <button item-right ion-button input-button-right clear style="font-size: 1.5rem">发送验证码</button>\n    </ion-item>\n    <ion-item-divider color="light" class="agreement" [navPush]="pages.agreement">\n      <ion-label>我已阅读并同意<a [navPush]="pages.agreement">《七天网络数据增值服务支付协议》</a></ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item-divider>\n  </ion-list>\n  <p padding>\n    <button ion-button block [navPush]="pages.confirm">下一步</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/validation/validation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ValidationPage);

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rocket; });
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

// declare var require;
// const gsap = require('gsap');//.TimelineMax;
/**
 * Generated class for the RocketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Rocket = (function () {
    // @Input() set state(_state: string) {
    //   this._state = _state;
    // }
    function Rocket() {
        console.log('Hello RocketComponent Component');
    }
    Rocket.prototype.ngOnInit = function () {
        //this.timeLine = new Gsap.TimelineMax({ repeat: 0, repeatDelay: 0 });
    };
    Rocket.prototype.ready = function (shouldReady) {
        // this.timeLine.to('.rocket-wrapper', .5, { y: -40, ease: Gsap.Expo.easeOut })
        // .to('.clouds-wrapper', .5, { top: 13, ease: Gsap.Expo.easeOut }, "-=0.5")
        this.state = shouldReady ? "ready" : '';
        //let tl = new Gsap.TimelineMax({ repeat: 0, repeatDelay: 0 });
        // this.timeLine.from('.cloud', 1, { alpha: 0 })
        //   .to('.rocket-wrapper', 3, { y: -400, ease: Gsap.Expo.easeIn })
        //   .to('.cloud', 3, { attr: { cy: 185 }, ease: Gsap.Expo.easeIn }, "-=3")
        //   .set('.cloud', { clearProps: "all" })
        //   .set('.rocket-wrapper', { y: 450 })
        //   .to('.rocket-wrapper', 4, { y: 0, ease: Gsap.Elastic.easeOut.config(0.5, 0.4) })
        //   .to('.trail-wrapper', 2.5, { scaleX: 0.5, scaleY: 0, alpha: 0, ease: Gsap.Expo.easeOut }, "-=2.0")
    };
    Rocket.prototype.launch = function (shouldReady) {
        this.state = "launch";
    };
    Rocket.prototype.landing = function () {
        this.state = "landing";
        //setTimeout(() => this.state = '', 3200);
        // this.timeLine.set('.cloud', { clearProps: "all" })
        //   .set('.rocket-wrapper', { y: 450 })
        //   .to('.rocket-wrapper', 4, { y: 0, ease: Gsap.Elastic.easeOut.config(0.5, 0.4) })
        //   .to('.trail-wrapper', 2.5, { scaleX: 0.5, scaleY: 0, alpha: 0, ease: Gsap.Expo.easeOut }, "-=2.0")
    };
    return Rocket;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], Rocket.prototype, "state", void 0);
Rocket = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'rocket',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/components/rocket/rocket.html"*/'<!-- <div class="frame"> -->\n<div class="loader" [attr.state]="state">\n  <!-- <div class="loader-ring"></div> -->\n  <div class="rocket-wrapper">\n    <img src="../assets/images/rocket.png" class="rocket" />\n    <div class="trail-wrapper">\n      <img src="../assets/images/trail.png" class="trail" />\n    </div>\n  </div>\n  <div class="clouds-wrapper">\n    <svg class="clouds" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 90.83">\n      <defs>\n        <!-- <clipPath id="clip-path" transform="translate(1.75)">\n          <circle cx="42.5" cy="42.5" r="42.5" fill="none" />\n        </clipPath> -->\n        <filter id="goo" color-interpolation-filters="sRGB">\n          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />\n          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -11" result="goo" />\n          <feBlend in="SourceGraphic" in2="goo" />\n        </filter>\n        <filter id="blurMe">\n          <feGaussianBlur in="SourceGraphic" stdDeviation="0.9" />\n        </filter>\n      </defs>\n      <!-- <g clip-path="url(#clip-path)" fill="#eef2f3" filter="url(#goo)"> -->\n      <g fill="rgba(255,255,255,.7)" filter="url(#goo)">\n        <g class="clouds-wrapper" filter="url(#blurMe)">\n          <ellipse cx="40" cy="61.83" rx="7" ry="7" />\n          <ellipse cx="81" cy="68.83" rx="8" ry="8" />\n          <ellipse cx="6" cy="63.83" rx="6" ry="6" />\n          <ellipse cx="15" cy="70.83" rx="11" ry="11" />\n          <ellipse cx="65" cy="74.83" rx="11" ry="11" />\n          <ellipse cx="48" cy="71.83" rx="14" ry="14" />\n          <ellipse cx="34" cy="75.83" rx="16" ry="16" />\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>\n<!-- /</div> -->\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/components/rocket/rocket.html"*/
    }),
    __metadata("design:paramtypes", [])
], Rocket);

//# sourceMappingURL=rocket.js.map

/***/ }),

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>消息</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item-group padding-vertical>\n    <button ion-item>\n      <!-- <ion-icon item-left name="ichange"></ion-icon> -->\n      <ion-avatar item-start style="background:#4baaf3">\n        <ion-icon item-left name="paper" color="white"></ion-icon>\n        <!-- <img src="img/avatar-cher.png"> -->\n      </ion-avatar>\n      <h2>认领消息</h2>\n      <p>共50条认领消息</p>\n      <ion-badge item-end>5</ion-badge>\n    </button>\n    <button ion-item>\n      <!-- <ion-icon item-left name="iunlock"></ion-icon> -->\n      <ion-avatar item-start style="background: #f3aa4b">\n        <ion-icon item-left name="chatbubbles" color="white"></ion-icon>\n        <!-- <img src="img/avatar-cher.png"> -->\n      </ion-avatar>\n      <h2>系统消息</h2>\n      <p>共150条系统消息</p>\n      <ion-badge item-end>32</ion-badge>\n    </button>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/news/news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = (function () {
    function PasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
    };
    return PasswordPage;
}());
PasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-password',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/password/password.html"*/'<!--\n  Generated template for the PasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>修改密码</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding-top>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label fixed>手机号码</ion-label>\n      <ion-input placeholder="输入手机号" type="tel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>密码</ion-label>\n      <ion-input type="password" placeholder="输入密码"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>确认密码</ion-label>\n      <ion-input type="password" placeholder="再次输入密码"></ion-input>\n    </ion-item>\n  </ion-list>\n  <p padding>\n    <button ion-button block>确 认</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/password/password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PasswordPage);

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_constants__ = __webpack_require__(58);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = {
            agreement: __WEBPACK_IMPORTED_MODULE_2__pages_constants__["a" /* AGREEMENT_PAGE */]
        };
        this.amount = 10;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>确认支付</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item-group margin-top>\n    <ion-item>\n      <span item-left>支付金额</span>\n      <span ion-text color="primary" item-end>305 元</span>\n    </ion-item>\n  </ion-item-group>\n  <ion-item-group radio-group [(ngModel)]="payType">\n    <!-- <ion-item-divider> -->\n    <p class="divider"> 选择支付方式</p>\n    <!-- </ion-item-divider> -->\n    <ion-item>\n      <svg colorful aria-hidden="true" item-left>\n        <use xlink:href="#icon-wepay"></use>\n      </svg>\n      <ion-label>微信支付</ion-label>\n      <ion-radio value="wepay" check-icon></ion-radio>\n    </ion-item>\n    <ion-item>\n      <svg colorful aria-hidden="true" item-left>\n        <use xlink:href="#icon-alipay"></use>\n      </svg>\n      <ion-label>支付宝支付</ion-label>\n      <ion-radio value="alipay" check-icon></ion-radio>\n    </ion-item>\n    <ion-item no-lines>\n      <svg colorful aria-hidden="true" item-left>\n        <use xlink:href="#icon-unionpay"></use>\n      </svg>\n      <ion-label>银联支付</ion-label>\n      <ion-radio value="unionpay" check-icon></ion-radio>\n    </ion-item>\n    <ion-item-divider class="agreement" [navPush]="pages.agreement">\n      <ion-label>本人已阅读并同意<a [navPush]="pages.agreement">《七天网络数据增值服务支付协议》</a></ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item-divider>\n  </ion-item-group>\n  <p padding>\n    <button ion-button block>确认支付 </button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_static_static__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(80);
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
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, staticPro, userPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.staticPro = staticPro;
        this.userPro = userPro;
        this.address = { data: [], name: '', code: '' };
        this.grade = { data: [], name: '', code: '' };
    }
    PersonalPage.prototype.ngOnInit = function () {
        this.initialize();
    };
    PersonalPage.prototype.ngAfterViewInit = function () {
        //this.initialize();
    };
    /**
     * 获取城市数据
     */
    PersonalPage.prototype.initialize = function () {
        var _this = this;
        Promise.all([this.userPro.getUserInfo(), this.staticPro.address(), this.staticPro.grade()]).then(function (res) {
            _this.userInfo = res[0];
            _this.address.data = res[1];
            _this.grade.data = res[2];
            _this.grade.code = _this.userInfo.grade;
            _this.address.code = _this.userInfo.city;
        });
        this.userPro.userInfo().then(function (res) {
            _this.graduated = res.graduated;
            console.log(res);
        });
    };
    /**
     * 城市选择器被改变时触发的事件
     * @param event
     */
    PersonalPage.prototype.addressChange = function (event) {
        console.log(event);
        this.address.code = event['region'].value;
    };
    /**
     * 城市选择器被改变时触发的事件
     * @param event
     */
    PersonalPage.prototype.gradeChange = function (event) {
        console.log(event);
        this.grade.code = event['region'].value;
        this.grade.name = event['region'].text.trim();
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/personal/personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>我的信息</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item-group *ngIf="userInfo">\n    <ion-item-divider color="light"><span ion-text color="primary">{{userInfo.name?\'欢迎您，\'+userInfo.name:\'还差一步，成功绑定信息就可以查看成绩了!\'}}</span></ion-item-divider>\n    <ion-item *ngIf="!userInfo.name">\n      <ion-label color="primary">姓名</ion-label>\n      <ion-input placeholder="实名修改，绑定后不可修改"></ion-input>\n    </ion-item>\n    <button ion-item *ngIf="!userInfo.cityName">\n      <!-- <ion-icon item-left name="pin"></ion-icon> -->\n      <city-picker *ngIf="address.code&&!userInfo.city" item-content cancelText=\'取消\' doneText=\'完成\' separator=\' \' [citiesData]="address.data" [(ngModel)]="address.name" (ionChange)="addressChange($event)">\n      </city-picker>\n      <p>请选择省市，选择后不可修改</p>\n    </button>\n    <ion-item *ngIf="userInfo.cityName">\n      {{userInfo.cityName}}\n    </ion-item>\n    <button ion-item *ngIf="!userInfo.school">\n      <!-- <ion-icon item-left name="school"></ion-icon> -->\n      <p>请选择学校，选择后不可修改</p>\n    </button>\n    <ion-item *ngIf="userInfo.school">\n      {{userInfo.school}}\n    </ion-item>\n    <button ion-item *ngIf="!userInfo.gradeName">\n      <!-- <ion-icon item-left name="people"></ion-icon> -->\n      <city-picker *ngIf="grade.code" item-content cancelText=\'取消\' doneText=\'完成\' separator=\' \' [citiesData]="grade.data" [(ngModel)]="grade.name" (ionChange)="gradeChange($event)">\n      </city-picker>\n      <p>请选择年级，选择后不可修改</p>\n    </button>\n    <ion-item *ngIf="userInfo.gradeName">\n      {{userInfo.gradeName}}\n    </ion-item>\n    <ion-row radio-group *ngIf="userInfo" no-lines>\n      <ion-item class="col" no-border no-lines (tap)="userInfo.role=\'p\'">\n        <ion-label>我是家长</ion-label>\n        <ion-checkbox [checked]="userInfo.role===\'p\'"></ion-checkbox>\n      </ion-item>\n      <ion-item class="col" no-border (tap)="userInfo.role=\'s\'">\n        <ion-label>我是学生</ion-label>\n        <ion-checkbox [checked]="userInfo.role===\'s\'"></ion-checkbox>\n      </ion-item>\n    </ion-row>\n    <ion-item-divider class="agreement" *ngIf="userInfo&&userInfo.role&&userInfo.gradeName&&userInfo.school&&userInfo.cityName">\n      <ion-icon name="information-circle"></ion-icon>\n      如需修改信息，请拨打<a>400-0309776</a>\n    </ion-item-divider>\n    <p class="agreement" *ngIf="graduated">\n      恭喜您毕业了！如果新的学习里程还需要小七的陪伴，请点击下方按钮重新绑定信息哦！\n    </p>\n  </ion-item-group>\n  <p padding *ngIf="userInfo&&!userInfo.role&&!userInfo.gradeName&&!userInfo.school&&!userInfo.cityName||graduated">\n    <!-- <submiton></submiton> -->\n    <button ion-button block>{{graduated?\'重新绑定\':\'保 存\'}}</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/personal/personal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_static_static__["a" /* StaticProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitonComponent; });
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
 * Generated class for the SubmitonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SubmitonComponent = (function () {
    function SubmitonComponent() {
        this.text = '保 存';
        console.log('Hello SubmitonComponent Component');
    }
    SubmitonComponent.prototype.onTap = function () {
        this.state = this.state ? '' : "processing";
        setTimeout(function () {
            //this.state = 'success';
        }, 3000);
    };
    return SubmitonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SubmitonComponent.prototype, "text", void 0);
SubmitonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'submiton',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/components/submiton/submiton.html"*/'<!-- Generated template for the SubmitonComponent component -->\n<button ion-button block (tap)="onTap()" [ngClass]="{\'processing\':state==\'processing\',\'success\':state==\'success\'}">\n  <ion-icon item-left name="checkmark"></ion-icon> <span class="text">{{text}}</span></button>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/components/submiton/submiton.html"*/
    }),
    __metadata("design:paramtypes", [])
], SubmitonComponent);

//# sourceMappingURL=submiton.js.map

/***/ }),

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_constants__ = __webpack_require__(58);
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
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechargePage = (function () {
    function RechargePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = {
            payment: __WEBPACK_IMPORTED_MODULE_2__pages_constants__["j" /* PAYMENT_PAGE */]
        };
    }
    RechargePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RechargePage');
    };
    return RechargePage;
}());
RechargePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recharge',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/recharge/recharge.html"*/'<!--\n  Generated template for the RechargePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>充值学贝</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item-group margin-top>\n    <ion-item>\n      <span item-left>当前余额</span>\n      <span ion-text color="primary" item-end>305 学贝</span>\n    </ion-item>\n  </ion-item-group>\n  <ion-item-group>\n    <p class="divider"> 选择充值学贝 （<span ion-text color="primary">1元=10学贝</span>）</p>\n    <div class="amount-buttons">\n      <ion-row justify-content-center margin-horizontal line-bottom nowrap>\n        <a [class.checked]="amount==10" (tap)="amount=10"><span>100</span>/10元</a>\n        <a [class.checked]="amount==20" (tap)="amount=20"><span>200</span>/20元</a>\n        <a [class.checked]="amount==50" (tap)="amount=50"><span>500</span>/50元</a>\n        <a [class.checked]="amount==80" (tap)="amount=80"><span>800</span>/80元</a>\n      </ion-row>\n    </div>\n    <ion-item>\n      <p class="custom">\n        自定义充值\n        <input type="number" max="1000" />\n        <span ion-text color="primary"> * </span>\n        <span ion-text color="primary">10-10000学贝</span>\n      </p>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col col-8>应付金额 <span ion-text color="primary">24.50</span> 元</ion-col>\n    <a [navPush]="pages.payment">去支付</a>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/recharge/recharge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RechargePage);

//# sourceMappingURL=recharge.js.map

/***/ }),

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user__ = __webpack_require__(80);
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
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetupPage = (function () {
    function SetupPage(userProvider) {
        this.userProvider = userProvider;
    }
    SetupPage.prototype.logout = function () {
        this.userProvider.logout();
        //this.navCtrl.setRoot(LoginPage, {}, { animation: 'wp-transition', animate: true });
    };
    SetupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetupPage');
    };
    return SetupPage;
}());
SetupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setup',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/setup/setup.html"*/'<!--\n  Generated template for the SetupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border>\n    <ion-title>设置</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-list no-lines margin-top> -->\n  <div margin-top>\n    <ion-item>\n      <ion-icon name="sync" item-start></ion-icon>\n      版本 1.0.0\n      <ion-note item-end>已是最新版本</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="information-circle-outline" item-start></ion-icon>\n      关于我们\n    </ion-item>\n  </div>\n  <!-- </ion-list> -->\n  <p padding>\n    <button ion-button block (tap)="logout()">退出登录</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/setup/setup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user__["a" /* UserProvider */]])
], SetupPage);

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trade_trade__ = __webpack_require__(408);
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
 * Generated class for the TradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TradePage = (function () {
    function TradePage(navCtrl, navParams, tradePro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tradePro = tradePro;
    }
    TradePage.prototype.ngAfterViewInit = function () {
        this.tradePro.order().then(function (res) {
            console.log('ionViewDidLoad TradePage');
        });
    };
    return TradePage;
}());
TradePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trade',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/trade/trade.html"*/'<!--\n  Generated template for the TradePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>交易流水</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/trade/trade.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_trade_trade__["a" /* TradeProvider */]])
], TradePage);

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_constants__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Icon.enableColorful();
/**
 * Generated class for the UsercenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsercenterPage = (function () {
    function UsercenterPage(navCtrl, navParams, userPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userPro = userPro;
        this.pages = {
            personal: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["k" /* PERSONAL_PAGE */],
            feedback: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["f" /* FEEDBACK_PAGE */],
            setup: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["n" /* SETUP_PAGE */],
            password: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["q" /* VALIDATION_PAGE */],
            trade: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["o" /* TRADE_PAGE */],
            recharge: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["l" /* RECHARGE_PAGE */],
            coupon: __WEBPACK_IMPORTED_MODULE_3__pages_constants__["c" /* COUPON_PAGE */],
        };
        this.userInfo = {};
        console.log('UsercenterPage');
    }
    UsercenterPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.userPro.getUserInfo().then(function (res) { return _this.userInfo = res; });
    };
    UsercenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsercenterPage');
    };
    UsercenterPage.prototype.go = function (page) {
        this.navCtrl.push(page);
    };
    Object.defineProperty(UsercenterPage.prototype, "desc", {
        get: function () {
            var grade = this.userInfo.gradeName ? "\u3010" + this.userInfo.gradeName + " \u3011" : '';
            return this.userInfo.cityName + " " + this.userInfo.school + " " + grade;
        },
        enumerable: true,
        configurable: true
    });
    return UsercenterPage;
}());
UsercenterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-usercenter',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/usercenter/usercenter.html"*/'<!--\n  Generated template for the UsercenterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="transparent">\n    <!-- <ion-title>我的</ion-title> -->\n    <ion-buttons end>\n      <button ion-button icon-only [navPush]="pages.setup">\n        <ion-icon name="isetup"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content [fullscreen]="true">\n  <div *ngIf="userInfo">\n    <div class="banner">\n      <p class="avatar"><img src="../assets/images/avatar.png"></p>\n      <p>{{userInfo?.name}}</p>\n      <p>{{desc}}</p>\n    </div>\n    <ion-item-group>\n      <button ion-item [navPush]="pages.recharge">\n        <ion-icon item-left name="icopper"></ion-icon>\n        学贝：{{userInfo.coin}}\n      </button>\n      <!-- <button ion-item>\n      <ion-icon item-left name="ipiggy"></ion-icon>\n      积分：1213\n    </button> -->\n      <button ion-item [navPush]="pages.coupon">\n        <ion-icon item-left name="icoupon"></ion-icon>\n        优惠卷\n      </button>\n      <button ion-item [navPush]="pages.trade">\n        <ion-icon item-left name="itrade"></ion-icon>\n        交易流水\n      </button>\n    </ion-item-group>\n    <ion-item-group>\n      <button ion-item [navPush]="pages.personal">\n        <ion-icon item-left name="ichange"></ion-icon>\n        修改信息\n      </button>\n      <button ion-item [navPush]="pages.password">\n        <ion-icon item-left name="lock-outline"></ion-icon>\n        修改密码\n      </button>\n      <!-- <button ion-item>\n      <ion-icon item-left name="isecurity"></ion-icon>\n      账号安全\n    </button> -->\n    </ion-item-group>\n    <ion-item-group margin-bottom>\n      <button ion-item [navPush]="pages.feedback">\n        <ion-icon item-left name="ifeedback"></ion-icon>\n        意见反馈\n      </button>\n    </ion-item-group>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/usercenter/usercenter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */]])
], UsercenterPage);

//# sourceMappingURL=usercenter.js.map

/***/ }),

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentApp = (function () {
    function StudentApp(platform, statusBar, splashScreen, userProvider) {
        var _this = this;
        this.splashScreen = splashScreen;
        this.userProvider = userProvider;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
            _this.login();
        });
    }
    StudentApp.prototype.login = function () {
        var _this = this;
        //this.handler();
        return this.userProvider.getLogin().then(function (login) {
            if (login && login.usercode && login.pwd) {
                return _this.userProvider.login(login).then(function (res) {
                    return res.token ?
                        _this.userProvider.initialize(res, login).then(function () { return _this.goTabsPage(); }) :
                        _this.goLoginPage();
                }).catch(function () { return _this.goLoginPage(); });
            }
            else {
                _this.goLoginPage();
            }
        });
    };
    StudentApp.prototype.goLoginPage = function () {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        setTimeout(function () { return _this.splashScreen.hide(); }, 300);
    };
    StudentApp.prototype.goTabsPage = function () {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__core_tabs_tabs__["a" /* TabsPage */];
        setTimeout(function () { return _this.splashScreen.hide(); }, 300);
    };
    StudentApp.prototype.goWelcomePage = function () {
        var _this = this;
        //this.rootPage = WelcomePage;
        setTimeout(function () { return _this.splashScreen.hide(); }, 300);
    };
    return StudentApp;
}());
StudentApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: '<ion-nav [root]="rootPage"></ion-nav>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__providers_user__["a" /* UserProvider */]])
], StudentApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_module__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_usercenter_usercenter_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_news_news_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loading_loading_module__ = __webpack_require__(1090);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 *Components module
 */

//import { Loading } from '../../components/loading/loading'
//import { DirectivesModule } from '../../directives/directives.module';
var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__components_loading_loading_module__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_5__pages_usercenter_usercenter_module__["UsercenterPageModule"],
            __WEBPACK_IMPORTED_MODULE_6__pages_news_news_module__["NewsPageModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_tabs_tabs__["a" /* TabsProvider */]
        ],
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transition_transition__ = __webpack_require__(1092);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { RocketComponent } from './rocket/rocket';
var LoadingModule = (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
LoadingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__loading__["a" /* Loading */],
            __WEBPACK_IMPORTED_MODULE_4__transition_transition__["a" /* Transition */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__loading__["a" /* Loading */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__loading__["a" /* Loading */],
            __WEBPACK_IMPORTED_MODULE_4__transition_transition__["a" /* Transition */],
        ],
    })
], LoadingModule);

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(203);
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
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Loading = (function () {
    function Loading(httpHandler, navCtrl) {
        this.httpHandler = httpHandler;
        this.navCtrl = navCtrl;
        this.state = 200;
        this.mess = "暂无记录";
    }
    Loading.prototype.ngOnInit = function () {
        var _this = this;
        this.httpHandler.handleError$.subscribe(function (info) {
            if (!info || !info.status) {
                _this.state = 600;
                _this.mess = '网路异常，请稍后再试';
            }
            else {
                _this.state = info.status;
                _this.mess = info.message || "暂无记录";
            }
        });
        this.httpHandler.handleAuth$.subscribe(function (info) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */], {}, { animation: 'md-transition', animate: true });
        });
        this.httpHandler.$invoke.subscribe(function () {
            _this.state = 0;
        });
        this.httpHandler.$complete.subscribe(function () {
            _this.state = 200;
        });
    };
    return Loading;
}());
Loading = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'loading',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/components/loading/loading.html"*/'<!--\n  Generated template for the LoadingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<transition [if]="!state" name="loading">\n  <div class="loading">\n    <ion-spinner name="bubbles"></ion-spinner>\n    <div class="mess">正在加载...</div>\n  </div>\n</transition>\n<transition [if]="state>399" name="nodata">\n  <!--  <div class="nodata" *ngIf="state>399">\n    <div class="mess animated-background">{{mess}}</div>\n  </div> -->\n  <div class="loading" *ngIf="state>399">\n    <div class="mess animated-background">\n      <div text-left>小七</div>\n      <div text-right>助手</div>\n    </div>\n  </div>\n</transition>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/components/loading/loading.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_httpHandler__["a" /* HttpHandler */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], Loading);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
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
 * Generated class for the TransitionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Transition = (function () {
    function Transition(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.active = false;
        this.transitionClass = [];
        this.enterDuration = 1000;
        this.leaveDuration = 1000;
        this.beforeEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.afterEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.beforeLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.afterLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(Transition.prototype, "duration", {
        set: function (duration) {
            if (duration === undefined)
                return;
            if (duration.enter >= 0)
                this.enterDuration = Number(duration.enter) + 60 * 2;
            if (duration.leave >= 0)
                this.leaveDuration = Number(duration.leave) + 60;
            var d = Number(duration);
            if (d >= 0) {
                this.enterDuration = d + 60 * 2;
                this.leaveDuration = d + 60;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "name", {
        set: function (_name) {
            this.transitionClass = ["enter-" + _name, "enter-active-" + _name, "leave-" + _name, "leave-active-" + _name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "if", {
        set: function (isShow) {
            var _this = this;
            this.clearTm();
            this.zone.run(function () { return isShow ? _this.setEnter() : _this.active && _this.setLeave(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "show", {
        set: function (isShow) {
            var _this = this;
            this.clearTm();
            this.zone.run(function () { return isShow ? _this.setEnter() : _this.active && _this.setLeave(false); });
        },
        enumerable: true,
        configurable: true
    });
    /*
     *入场
     */
    Transition.prototype.setEnter = function () {
        var _this = this;
        this.beforeEnter.emit(null);
        if (this.active) {
            this.resetEnterClass();
        }
        else {
            this.active = true;
        }
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        //this.renderer.setElementStyle(content, 'display', 'none');
        setTimeout(function () {
            var content = _this.el.nativeElement.firstElementChild;
            _this.renderer.setElementStyle(_this.el.nativeElement, 'display', 'initial');
            _this.renderer.setElementStyle(content, 'will-change', 'all');
            _this.renderer.setElementClass(content, _this.transitionClass[0], true);
            _this.onTimout = setTimeout(function () {
                _this.renderer.setElementClass(content, _this.transitionClass[1], true);
                _this.renderer.setElementClass(content, _this.transitionClass[0], false);
            }, 60);
            _this.offTimout = setTimeout(function () {
                _this.renderer.setElementClass(content, _this.transitionClass[1], false);
                _this.renderer.setElementStyle(content, 'will-change', 'auto');
                _this.afterEnter.emit(content);
            }, _this.enterDuration);
        }, 60);
    };
    /*
     *离场
     */
    Transition.prototype.setLeave = function (destory) {
        var _this = this;
        if (destory === void 0) { destory = true; }
        var content = this.el.nativeElement.firstElementChild;
        this.renderer.setElementStyle(content, 'will-change', 'all');
        this.beforeLeave.emit(content);
        this.resetLeaveClass();
        this.onTimout = setTimeout(function () {
            return _this.renderer.setElementClass(content, _this.transitionClass[3], true);
        }, 80);
        this.offTimout = setTimeout(function () {
            _this.renderer.setElementStyle(content, 'will-change', 'auto');
            //this.renderer.setElementClass(content, this.transitionClass[3], false);
            if (destory) {
                _this.active = false;
            }
            else {
                _this.renderer.setElementStyle(content, 'display', 'none');
            }
            setTimeout(function () { return (_this.renderer.setElementClass(content, _this.transitionClass[2], false),
                _this.renderer.setElementClass(content, _this.transitionClass[3], false)); }, 60);
            _this.afterLeave.emit(content);
        }, this.leaveDuration);
    };
    /*
     *清除
     */
    Transition.prototype.clearTm = function () {
        clearTimeout(this.onTimout);
        clearTimeout(this.offTimout);
    };
    Transition.prototype.resetEnterClass = function () {
        var content = this.el.nativeElement.firstElementChild;
        if (!content)
            return;
        this.renderer.setElementStyle(content, 'display', 'none');
        this.renderer.setElementClass(content, this.transitionClass[0], true);
        this.renderer.setElementClass(content, this.transitionClass[1], false);
        this.renderer.setElementClass(content, this.transitionClass[2], false);
        this.renderer.setElementClass(content, this.transitionClass[3], false);
    };
    Transition.prototype.resetLeaveClass = function () {
        var content = this.el.nativeElement.firstElementChild;
        this.renderer.setElementStyle(content, 'display', '');
        this.renderer.setElementClass(content, this.transitionClass[0], false);
        this.renderer.setElementClass(content, this.transitionClass[1], false);
        this.renderer.setElementClass(content, this.transitionClass[2], true);
        this.renderer.setElementClass(content, this.transitionClass[3], false);
    };
    return Transition;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], Transition.prototype, "beforeEnter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], Transition.prototype, "afterEnter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], Transition.prototype, "beforeLeave", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], Transition.prototype, "afterLeave", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Transition.prototype, "duration", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Transition.prototype, "name", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Transition.prototype, "if", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Transition.prototype, "show", null);
Transition = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'transition',
        template: "<ng-content *ngIf=\"active\"></ng-content>",
        styles: ["\n    :host{\n      display:none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], Transition);

//# sourceMappingURL=transition.js.map

/***/ }),

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PersonalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PersonalProvider = (function () {
    function PersonalProvider(http) {
        this.http = http;
        console.log('Hello PersonalProvider Provider');
    }
    PersonalProvider.prototype.address = function () {
        return this.http.get('../assets/data/address.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    PersonalProvider.prototype.grade = function () {
        return this.http.get('../assets/data/grade.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    return PersonalProvider;
}());
PersonalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PersonalProvider);

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SharedProvider = (function () {
    function SharedProvider(http) {
        this.http = http;
        console.log('Hello SharedProvider Provider');
    }
    SharedProvider.prototype.sendSms = function () {
        return this.http.get('registe/getsms');
    };
    return SharedProvider;
}());
SharedProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SharedProvider);

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ChartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChartsProvider = (function () {
    function ChartsProvider() {
        this.colors = {
            primary: '#f66e4f',
            //text: '#414a60',
            line: "rgba(0,0,0,.04)",
            label: "#666",
            text: '#414a60',
        };
        console.log('Hello ChartsProvider Provider');
    }
    ChartsProvider.prototype.ball = function (percent, score) {
        return {
            series: [{
                    color: [this.colors.primary, this.colors.primary],
                    type: 'liquidFill',
                    radius: '74%',
                    data: [percent, {
                            value: percent,
                            direction: 'left',
                        }],
                    itemStyle: {
                        normal: {
                            shadowBlur: 0,
                            opacity: 0.35,
                        }
                    },
                    backgroundStyle: {
                        color: '#fff'
                    },
                    outline: {
                        borderDistance: 0,
                        itemStyle: {
                            borderWidth: 4,
                            borderColor: this.colors.primary,
                            shadowBlur: 0,
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                            color: this.colors.label,
                            insideColor: this.colors.label,
                            align: 'center',
                            position: 'inside',
                            formatter: [
                                "{a|" + score + "}",
                                '{b|总分}',
                                "{c|\u9886\u5148\u4E86" + percent * 100 + "%\u7684\u8003\u751F}"
                            ].join('\n'),
                            rich: {
                                a: {
                                    lineHeight: 40,
                                    height: 40,
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    position: 'top',
                                },
                                b: {
                                    fontSize: 15,
                                    lineHeight: 35,
                                    height: 40,
                                },
                                c: {
                                    fontSize: 13,
                                },
                            }
                        }
                    },
                    amplitude: '3.5%',
                    waveLength: '90%',
                }]
        };
    };
    ChartsProvider.prototype.percents = function (category, series) {
        var lineColor = "rgba(0,0,0,.04)";
        var textColor = "#666";
        return {
            backgroundColor: '#fff',
            grid: {
                top: 16,
                left: 10,
                right: 20,
                bottom: 16,
                containLabel: true,
            },
            xAxis: {
                boundaryGap: [0, 0.01],
                type: 'value',
                position: 'top',
                axisLabel: {
                    textStyle: {
                        color: textColor,
                    },
                    formatter: '{value}%',
                },
                axisLine: {
                    lineStyle: {
                        color: lineColor
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: lineColor
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: category,
                axisLabel: {
                    //formatter: '{value}',
                    textStyle: {
                        color: textColor,
                    },
                    show: true
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: lineColor
                    }
                },
            },
            series: [{
                    type: 'bar',
                    barWidth: 12,
                    barGap: "20%",
                    //barCategoryGap: "10%",
                    itemStyle: {
                        normal: {
                            color: this.colors.label,
                            label: {
                                show: true,
                                textStyle: {
                                    color: textColor,
                                },
                                position: 'right',
                                formatter: '{c}%',
                            }
                        }
                    },
                    data: series[0],
                },
                {
                    barWidth: 12,
                    //barCategoryGap: "10%",
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(204, 204, 204, .8)',
                            label: {
                                show: true,
                                textStyle: {
                                    color: textColor,
                                },
                                position: 'right',
                                formatter: '{c}%',
                            }
                        }
                    },
                    data: series[1]
                }
            ]
        };
    };
    ChartsProvider.prototype.topicPercents = function (category, series) {
        return {
            color: [this.colors.primary],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                    type: 'category',
                    data: category,
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
            yAxis: [{
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
            series: [{
                    type: 'bar',
                    barWidth: '40%',
                    data: series
                },],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c} 人'
                }
            }
        };
    };
    ChartsProvider.prototype.radar = function (obj) {
        var icons = ['rect', 'circle', 'triangle'];
        return {
            title: {
                bottom: 16,
                top: 16,
                left: 14,
                text: '学情分析',
                textStyle: {
                    color: this.colors.text,
                    fontWeight: 400,
                    fontSize: 14
                }
            },
            legend: {
                top: 17,
                bottom: 16,
                right: 16,
                itemHeight: 8,
                itemWidth: 12,
                textStyle: {
                    color: this.colors.label
                },
                data: obj.legend.map(function (item, index) { return { name: item, icon: icons[index] }; }),
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: 10,
                top: 60,
                containLabel: true
            },
            color: [this.colors.primary, "#FFEB3B", '#D7D7D7'],
            radar: [{
                    indicator: obj.indicator,
                    radius: '63%',
                    shape: 'circle',
                    name: {
                        textStyle: {
                            color: this.colors.label,
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['#FEFEFE'],
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#E6E6E6'
                        }
                    }
                }],
            series: [{
                    type: 'radar',
                    data: obj.series.map(function (item, index) { return { symbolSize: 9, value: item, name: obj.legend[index], symbol: icons[index] }; }),
                }]
        };
    };
    /**
     *层次分析
     */
    ChartsProvider.prototype.level = function (obj) {
        return {
            title: {
                bottom: 16,
                top: 16,
                left: 14,
                text: '层次分析',
                textStyle: {
                    color: this.colors.text,
                    fontWeight: 400,
                    fontSize: 14
                }
            },
            legend: {
                top: 17,
                bottom: 16,
                right: 16,
                itemHeight: 8,
                itemWidth: 12,
                textStyle: {
                    color: this.colors.label
                },
                data: obj.legend,
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: '5%',
                top: '28%',
                containLabel: true
            },
            color: ["#3AB87B", "#D8D8D8", "#C0C0C0"],
            textStyle: {
                color: this.colors.label
            },
            xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: this.colors.lineColor
                        }
                    },
                    data: obj.xaxis
                }],
            yAxis: [{
                    type: 'value',
                    name: "成绩(分)",
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: this.colors.line
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: this.colors.line
                        }
                    }
                }],
            // tooltip: {
            //   trigger: 'axis',
            //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
            //     type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            //   }
            // },
            series: obj.series.map(function (item, index) {
                return {
                    name: obj.legend[index],
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 0
                        }
                    },
                    data: item
                };
            })
        };
    };
    return ChartsProvider;
}());
ChartsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChartsProvider);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StaticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StaticProvider = (function () {
    function StaticProvider(http) {
        this.http = http;
        console.log('Hello AdressProvider Provider');
    }
    StaticProvider.prototype.address = function () {
        return this.http.get('../assets/data/address.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    StaticProvider.prototype.getAddressName = function (code) {
        return this.address().then(function (address) {
            var procode = Math.floor(code / 1000), citycode = Math.floor(code / 100), res = [], provice = address.find(function (p) {
                return Math.floor(p.code / 1000) == procode;
            }), city = provice ? provice.children.find(function (c) {
                return Math.floor(c.code / 100) == citycode;
            }) : null, area = city ? city.children.find(function (a) {
                return a.code == code;
            }) : null;
            provice && provice.name && res.push(provice.name);
            city && city.name && res.push(city.name);
            area && area.name && res.push(area.name);
            var add = res.join(" ").trim();
            return add || "未知区域";
        });
    };
    StaticProvider.prototype.grade = function () {
        return this.http.get('../assets/data/grade.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    StaticProvider.prototype.getGradeName = function (code) {
        var name = "";
        return this.grade().then(function (grades) {
            grades.find(function (childs) {
                childs.children[0].children.find(function (item) {
                    if (item.code == code) {
                        name = item.name;
                        return name;
                    }
                });
                return name;
            });
            return name;
        });
    };
    return StaticProvider;
}());
StaticProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StaticProvider);

//# sourceMappingURL=static.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(771);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ExamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExamsProvider = (function () {
    function ExamsProvider(http) {
        this.http = http;
        console.log('Hello ExamsProvider Provider');
    }
    ExamsProvider.prototype.exams = function (page) {
        return this.http.get('exam');
    };
    ExamsProvider.prototype.report = function (data) {
        return this.http.get('exam/report', data);
    };
    return ExamsProvider;
}());
ExamsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpProvider */]])
], ExamsProvider);

//# sourceMappingURL=exams.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
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

var Constant = (function () {
    function Constant() {
        /**
         *服务地址
         */
        this.DOMIN = "";
        /**
         *存储表
         */
        this.storage = {
            USERINFO: "userInfo",
            ACCOUNT: "account",
            TOPICS: "topics",
        };
    }
    return Constant;
}());
Constant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Constant);

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
工具栏事件服务
*/
var TabsProvider = (function () {
    function TabsProvider() {
        this.badgeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.$badge = this.badgeSource.asObservable();
        console.log('Hello TabsProvider Provider');
    }
    TabsProvider.prototype.setBadge = function (num) {
        if (num === void 0) { num = 0; }
        this.badgeSource.next(num);
    };
    return TabsProvider;
}());
TabsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TabsProvider);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_httpHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_constants__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_native__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_tabs_tabs__ = __webpack_require__(209);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, userProvider, httpHandler, nativeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.httpHandler = httpHandler;
        this.nativeProvider = nativeProvider;
        this.pages = {
            validation: __WEBPACK_IMPORTED_MODULE_4__pages_constants__["q" /* VALIDATION_PAGE */],
        };
        this.account = { usercode: '17000001022', pwd: '123456' };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.account.usercode || !(/^1[34578]\d{9}$/.test(this.account.usercode))) {
            this.nativeProvider.toast('请输入正确的手机号码');
            return;
        }
        if (!this.account.pwd) {
            this.nativeProvider.toast('请输入密码');
            return;
        }
        this.state = "launch";
        this.userProvider.login(this.account).then(function (res) {
            _this.userProvider.initialize(res, _this.account).then(function () {
                console.log(res); //测试写缓存
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__core_tabs_tabs__["a" /* TabsPage */], {}, { animate: true, animation: "md-transition" }).catch(function (error) {
                    _this.nativeProvider.toast(error);
                });
                _this.state = "";
            });
        })
            .catch(function (res) {
            _this.state = "";
            _this.nativeProvider.toast(res.message ? res.message : "网络异常，请稍后再试");
        });
        //setTimeout(() => this.navCtrl.setRoot(HOME_PAGE, {}, { animate: true, animation: "wp-transition" }), 3000)
    };
    LoginPage.prototype.goForgot = function () {
        this.rocket.landing();
    };
    LoginPage.prototype.input = function () {
        this.state = this.account.pwd.length > 4 ? "ready" : '';
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('rocket'),
    __metadata("design:type", Object)
], LoginPage.prototype, "rocket", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row class="banner" align-items-center>\n      <h1 class="app-name" padding-top>小七助手</h1>\n      <!-- <loading></loading> -->\n      <rocket #rocket [state]="state"></rocket>\n    </ion-row>\n    <ion-row>\n      <form (ngSubmit)="login()" padding-vertical>\n        <ion-item padding-right>\n          <ion-label color="gray9">\n            <ion-icon name="person-outline"></ion-icon>\n          </ion-label>\n          <ion-input type="tel" name="usercode" placeholder="请输入手机号码" [(ngModel)]="account.usercode" (ionBlur)="focus=false" (ionFocus)="focus=true" clearInput></ion-input>\n        </ion-item>\n        <ion-item padding-top padding-right>\n          <ion-label color="gray9">\n            <ion-icon name="lock-outline"></ion-icon>\n          </ion-label>\n          <ion-input type="password" placeholder="请输入密码" name="password" [(ngModel)]="account.pwd" (ionBlur)="focus=false" (ionFocus)="focus=true" (input)="input()"></ion-input>\n        </ion-item>\n      </form>\n    </ion-row>\n    <ion-row padding>\n      <button ion-button block (tap)="login()">\n        <span *ngIf="!processing">登 录</span>\n        <ion-spinner *ngIf="processing" name="dots" color="white"></ion-spinner>\n      </button>\n      <button ion-button block outline [navPush]="pages.validation">注 册</button>\n    </ion-row>\n    <p text-center class="forgot">\n      <a ion-text color="gray9" [navPush]="pages.validation">忘记密码？</a>\n    </p>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_httpHandler__["a" /* HttpHandler */],
        __WEBPACK_IMPORTED_MODULE_5__providers_native__["a" /* NativeProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_constants__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage(tabProvider) {
        this.tabProvider = tabProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pages_pages_constants__["g" /* HOME_PAGE */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__pages_pages_constants__["i" /* NEWS_PAGE */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__pages_pages_constants__["p" /* USERCENTER_PAGE */];
        this.msgCount = 0;
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.tabProvider.$badge.subscribe(function (count) { return _this.msgCount = count; });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/core/tabs/tabs.html"*/'<ion-tabs selectedIndex="0">\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="ihome"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="消息" tabIcon="igift" [tabBadge]="msgCount" tabBadgeStyle="danger"></ion-tab>\n  <!-- <ion-tab [root]="tab3Root" tabTitle="contacts" tabIcon="person"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="iperson"></ion-tab>\n</ion-tabs>\n<loading></loading>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/core/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_tabs_tabs__["a" /* TabsProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPageModule", function() { return ValidationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_confirm_module__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ValidationPageModule = (function () {
    function ValidationPageModule() {
    }
    return ValidationPageModule;
}());
ValidationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__validation__["a" /* ValidationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__validation__["a" /* ValidationPage */]),
            __WEBPACK_IMPORTED_MODULE_3__confirm_confirm_module__["ConfirmPageModule"],
        ],
    })
], ValidationPageModule);

//# sourceMappingURL=validation.module.js.map

/***/ }),

/***/ 242:
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
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agreement/agreement.module": [
		1095,
		2
	],
	"../pages/confirm/confirm.module": [
		286
	],
	"../pages/coupon/coupon.module": [
		287
	],
	"../pages/doctor/doctor.module": [
		288
	],
	"../pages/exams/exams.module": [
		368
	],
	"../pages/feedback/feedback.module": [
		370
	],
	"../pages/home/home.module": [
		371
	],
	"../pages/login/login.module": [
		374
	],
	"../pages/news/news.module": [
		400
	],
	"../pages/password/password.module": [
		401
	],
	"../pages/payment/payment.module": [
		402
	],
	"../pages/person/person.module": [
		1096,
		1
	],
	"../pages/personal/personal.module": [
		403
	],
	"../pages/recharge/recharge.module": [
		405
	],
	"../pages/register/register.module": [
		1097,
		0
	],
	"../pages/report/report.module": [
		369
	],
	"../pages/setup/setup.module": [
		406
	],
	"../pages/topics/topics.module": [
		1098,
		3
	],
	"../pages/trade/trade.module": [
		407
	],
	"../pages/usercenter/usercenter.module": [
		409
	],
	"../pages/validation/validation.module": [
		210
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 285;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmPageModule = (function () {
    function ConfirmPageModule() {
    }
    return ConfirmPageModule;
}());
ConfirmPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */]),
        ],
    })
], ConfirmPageModule);

//# sourceMappingURL=confirm.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPageModule", function() { return CouponPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponPageModule = (function () {
    function CouponPageModule() {
    }
    return CouponPageModule;
}());
CouponPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */]),
        ],
    })
], CouponPageModule);

//# sourceMappingURL=coupon.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorPageModule", function() { return DoctorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topics_topics__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_ng2__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_echarts_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_doctor_doctor__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_scrollheader_scrollheader__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_lazyLoader__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { TopicsPageModule } from '../topics/topics.module';
var DoctorPageModule = (function () {
    function DoctorPageModule() {
    }
    return DoctorPageModule;
}());
DoctorPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__doctor__["a" /* DoctorPage */],
            __WEBPACK_IMPORTED_MODULE_2__topics_topics__["a" /* TopicsPage */],
            __WEBPACK_IMPORTED_MODULE_8__components_scrollheader_scrollheader__["a" /* ScrollheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_lazyLoader__["a" /* LazyLoader */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__topics_topics__["a" /* TopicsPage */]),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__doctor__["a" /* DoctorPage */]),
            //IonicPageModule.forChild(TopicsPage),
            __WEBPACK_IMPORTED_MODULE_4_echarts_ng2__["EchartsNg2Module"],
            __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_7__components__["a" /* ComponentsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__components_scrollheader_scrollheader__["a" /* ScrollheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_lazyLoader__["a" /* LazyLoader */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__providers_doctor_doctor__["a" /* DoctorProvider */]
        ],
    })
], DoctorPageModule);

//# sourceMappingURL=doctor.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the TopicsPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicsPage = (function () {
    function TopicsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.options = this.navParams.get('options');
    }
    TopicsPage.prototype.ngAfterViewInit = function () {
        console.log('ionViewDidLoad TopicsPage');
    };
    return TopicsPage;
}());
TopicsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topics',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/topics/topics.html"*/'<!--\n  Generated template for the TopicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-shadow>\n  <ion-row justify-content-between class="card-header blur">\n    <ion-col col-5 text-left><i></i>小题得分情况</ion-col>\n    <ion-col><i></i>年级得分率</ion-col>\n    <ion-col><i></i>我的得分率</ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]="true">\n  <!-- <div class="card percents" style="margin-top: 0;">\n    <ion-row class="card-header" justify-content-between>\n      <ion-col col-5 text-left><i></i>小题得分情况</ion-col>\n      <ion-col><i></i>年级得分率</ion-col>\n      <ion-col><i></i>我的得分率</ion-col>\n    </ion-row> -->\n  <echarts-ng2 [option]=\'options\' [style]="{\'height\': 45*options.yAxis.data.length+\'px\'}"></echarts-ng2>\n  <!-- </div> -->\n</ion-content>\n<ion-footer class="blur">\n  <p text-center ion-text (tap)="viewCtrl.dismiss()" style="padding:12px" line-top>\n    <a>关闭更多</a>\n  </p>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/topics/topics.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], TopicsPage);

//# sourceMappingURL=topics.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  import { Http } from '@angular/http';
  Generated class for the DoctorProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DoctorProvider = (function () {
    function DoctorProvider(http) {
        this.http = http;
        console.log('Hello DoctorProvider Provider');
    }
    // default (data: any) {
    //   return this.http.get('exam/subjectdefault', data);
    // }
    DoctorProvider.prototype.subject = function (data) {
        return this.http.get(data.subject ? 'exam/subject' : 'exam/subjectdefault', data);
    };
    DoctorProvider.prototype.topic = function (data) {
        return this.http.get('question/topic', data);
    };
    DoctorProvider.prototype.excellent = function (data) {
        return this.http.get('question/excellent', data);
    };
    return DoctorProvider;
}());
DoctorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpProvider */]])
], DoctorProvider);

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subcon_subcon__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__subcon_subcon__["b" /* SubconPipe */],
            __WEBPACK_IMPORTED_MODULE_1__subcon_subcon__["a" /* SubcolorPipe */],
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__subcon_subcon__["b" /* SubconPipe */],
            __WEBPACK_IMPORTED_MODULE_1__subcon_subcon__["a" /* SubcolorPipe */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsPageModule", function() { return ExamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exams__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctor_doctor_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exams_exams__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_charts_charts__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts_ng2__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_echarts_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_liquidfill__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_liquidfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_echarts_liquidfill__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 *echarts module
 */


var ExamsPageModule = (function () {
    function ExamsPageModule() {
    }
    return ExamsPageModule;
}());
ExamsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__exams__["a" /* ExamsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_echarts_ng2__["EchartsNg2Module"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exams__["a" /* ExamsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__report_report_module__["ReportPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__doctor_doctor_module__["DoctorPageModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__providers_exams_exams__["a" /* ExamsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_charts_charts__["a" /* ChartsProvider */]
        ],
    })
], ExamsPageModule);

//# sourceMappingURL=exams.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_ng2__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_echarts_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_echarts_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_scrollheader_scrollheader__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportPageModule = (function () {
    function ReportPageModule() {
    }
    return ReportPageModule;
}());
ReportPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__report__["a" /* ReportPage */],
            __WEBPACK_IMPORTED_MODULE_5__components_scrollheader_scrollheader__["a" /* ScrollheaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report__["a" /* ReportPage */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_4_echarts_ng2__["EchartsNg2Module"],
        ],
    })
], ReportPageModule);

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbackPageModule = (function () {
    function FeedbackPageModule() {
    }
    return FeedbackPageModule;
}());
FeedbackPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
        ],
    })
], FeedbackPageModule);

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exams_exams_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_home__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import 'echarts-liquidfill';
//import * as echarts from 'echarts';
/**
 *charts module
 */
//import { ChartsModule } from 'ng2-charts';
/**
 *echarts module
 */
//import { EchartsNg2Module } from 'echarts-ng2';


var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__exams_exams_module__["ExamsPageModule"],
            //ChartsModule,
            //EchartsNg2Module,
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__["a" /* DirectivesModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_home__["a" /* HomeProvider */],
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__httpHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 *首页
 */
var HomeProvider = (function () {
    function HomeProvider(http, storage, constant, httpHandler, tabsPro) {
        this.http = http;
        this.storage = storage;
        this.constant = constant;
        this.httpHandler = httpHandler;
        this.tabsPro = tabsPro;
        this.URL = 'index';
        console.log('Hello HomeProvider Provider');
    }
    HomeProvider.prototype.index = function () {
        return this.http.get(this.URL);
    };
    HomeProvider.prototype.ad = function () {
        return this.http.post(this.URL + '/getmodel', { position: '微信首页_弹窗' });
    };
    HomeProvider.prototype.setBadge = function (num) {
        this.tabsPro.setBadge(num);
    };
    return HomeProvider;
}());
HomeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* Constant */],
        __WEBPACK_IMPORTED_MODULE_4__httpHandler__["a" /* HttpHandler */],
        __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsProvider */]])
], HomeProvider);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hook_hook__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__hook_hook__["a" /* HookDirective */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__hook_hook__["a" /* HookDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation_validation_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_rocket_rocket__ = __webpack_require__(1056);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { RegisterPageModule } from '../register/register.module';



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__components_rocket_rocket__["a" /* Rocket */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__validation_validation_module__["ValidationPageModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* UserProvider */],
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
 * added by 442623641@qq.com 201703161032.
 * 原生API
 */
var NativeProvider = (function () {
    function NativeProvider(platform, toastCtrl, alertCtrl, loadingCtrl, ntoast, dialogs) {
        var _this = this;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ntoast = ntoast;
        this.dialogs = dialogs;
        this.loadRunning = false;
        /**
         * 统一调用此方法显示提示信息
         * @param message 信息内容
         * @param duration 显示时长
         */
        this.toast = function (message, duration, positon) {
            if (message === void 0) { message = '操作完成'; }
            if (duration === void 0) { duration = 2000; }
            if (positon === void 0) { positon = "top"; }
            if (_this.native) {
                _this.ntoast.show(message, String(duration), positon).subscribe();
                return new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
                    setTimeout(function () {
                        observer.next(42);
                        observer.complete();
                    }, 2000);
                });
            }
            else {
                _this.toastCtrl.create({
                    message: message,
                    duration: duration,
                    position: positon,
                    showCloseButton: false,
                }).present();
                return new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
                    setTimeout(function () {
                        observer.next(42);
                        observer.complete();
                    }, 2000);
                });
            }
        };
        /**
         * 对话框
         * @param msg 信息内容
         * @buttons 按钮
         * @return {Promise<T>}
         */
        this.confirm = function (msg, btns) {
            if (msg === void 0) { msg = "确定这样做？"; }
            if (btns === void 0) { btns = ["取消", "确认"]; }
            if (_this.native) {
                return _this.isIos() ? _this.dialogs.confirm("", msg, btns).then(function (btn) {
                    return btn - 1;
                }) : _this.dialogs.confirm(msg, "", btns).then(function (btn) {
                    return btn - 1;
                });
            }
            return new Promise(function (resolve, reject) {
                var confirm = _this.alertCtrl.create({
                    title: null,
                    enableBackdropDismiss: false,
                    subTitle: msg,
                    buttons: [{
                            text: btns[0],
                            handler: function () {
                                resolve(0);
                            }
                        }, {
                            text: btns[1],
                            handler: function () {
                                resolve(1);
                            }
                        }]
                });
                confirm.present();
            });
        };
        /**
         * 对话框
         * @param msg 信息内容
         * @buttons 按钮
         * @return {Promise<T>}
         */
        this.alert = function (msg, btn, title) {
            if (msg === void 0) { msg = "确定这样做？"; }
            if (btn === void 0) { btn = "我知道了"; }
            title = title || '';
            if (_this.native) {
                return title || !_this.isIos() ? _this.dialogs.alert(msg, title, btn) : _this.dialogs.alert(title, msg, btn);
            }
            return new Promise(function (resolve, reject) {
                var confirm = _this.alertCtrl.create({
                    title: title,
                    enableBackdropDismiss: false,
                    //message: msg,
                    subTitle: msg,
                    buttons: [{
                            role: "cancel",
                            text: btn,
                            handler: function () {
                                resolve(1);
                            }
                        }]
                });
                confirm.present();
            });
        };
        /**
         * 统一调用此方法显示loading
         * @param content 显示的内容
         */
        this.showLoading = function (content) {
            if (content === void 0) { content = "加载中..."; }
            if (!_this.loadRunning) {
                _this.loadRunning = true;
                _this.loading = _this.loadingCtrl.create({
                    spinner: 'ios',
                    content: content,
                    showBackdrop: true,
                    cssClass: "embedded",
                    dismissOnPageChange: true,
                    duration: 5000
                });
                _this.loading.present();
                setTimeout(function () {
                    _this.loadRunning = false;
                }, 5000);
            }
        };
        /**
         * 关闭loading
         */
        this.hideLoading = function () {
            if (_this.loadRunning) {
                _this.loading.dismiss();
                _this.loadRunning = false;
            }
        };
        this.native = platform.is('mobile') && !platform.is('mobileweb');
    }
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeProvider.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeProvider.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeProvider.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    NativeProvider.prototype.isIpad = function () {
        return this.isMobile() && this.platform.is('ipad');
    };
    return NativeProvider;
}());
NativeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__["a" /* Toast */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__["a" /* Dialogs */]])
], NativeProvider);

//# sourceMappingURL=native.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(1057);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { ComponentsModule } from '../../components';
//import { DirectivesModule } from '../../directives/directives.module';
var NewsPageModule = (function () {
    function NewsPageModule() {
    }
    return NewsPageModule;
}());
NewsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
        ],
    })
], NewsPageModule);

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(1058);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordPageModule = (function () {
    function PasswordPageModule() {
    }
    return PasswordPageModule;
}());
PasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]),
        ],
    })
], PasswordPageModule);

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(1059);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = (function () {
    function PaymentPageModule() {
    }
    return PaymentPageModule;
}());
PaymentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
        ],
    })
], PaymentPageModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPageModule", function() { return PersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_city_picker__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_submiton_submiton__ = __webpack_require__(1064);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { ComponentsModule } from '../../components';

var PersonalPageModule = (function () {
    function PersonalPageModule() {
    }
    return PersonalPageModule;
}());
PersonalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_4__components_submiton_submiton__["a" /* SubmitonComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__personal__["a" /* PersonalPage */]),
            __WEBPACK_IMPORTED_MODULE_2_ionic2_city_picker__["CityPickerModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__components_submiton_submiton__["a" /* SubmitonComponent */],
        ]
    })
], PersonalPageModule);

//# sourceMappingURL=personal.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargePageModule", function() { return RechargePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recharge__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment_module__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RechargePageModule = (function () {
    function RechargePageModule() {
    }
    return RechargePageModule;
}());
RechargePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */]),
            __WEBPACK_IMPORTED_MODULE_3__payment_payment_module__["PaymentPageModule"],
        ],
    })
], RechargePageModule);

//# sourceMappingURL=recharge.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupPageModule", function() { return SetupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup__ = __webpack_require__(1066);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetupPageModule = (function () {
    function SetupPageModule() {
    }
    return SetupPageModule;
}());
SetupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setup__["a" /* SetupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setup__["a" /* SetupPage */]),
        ],
    })
], SetupPageModule);

//# sourceMappingURL=setup.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradePageModule", function() { return TradePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trade__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trade_trade__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TradePageModule = (function () {
    function TradePageModule() {
    }
    return TradePageModule;
}());
TradePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__trade__["a" /* TradePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trade__["a" /* TradePage */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__providers_trade_trade__["a" /* TradeProvider */],
        ]
    })
], TradePageModule);

//# sourceMappingURL=trade.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TradeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TradeProvider = (function () {
    function TradeProvider(http) {
        this.http = http;
        console.log('Hello TradeProvider Provider');
    }
    TradeProvider.prototype.order = function () {
        return this.http.get("order");
    };
    return TradeProvider;
}());
TradeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpProvider */]])
], TradeProvider);

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercenterPageModule", function() { return UsercenterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usercenter__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setup_setup_module__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_personal_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_password_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trade_trade_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coupon_coupon_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recharge_recharge_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validation_validation_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_directives_module__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UsercenterPageModule = (function () {
    function UsercenterPageModule() {
    }
    return UsercenterPageModule;
}());
UsercenterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__usercenter__["a" /* UsercenterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usercenter__["a" /* UsercenterPage */]),
            __WEBPACK_IMPORTED_MODULE_3__feedback_feedback_module__["FeedbackPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__setup_setup_module__["SetupPageModule"],
            __WEBPACK_IMPORTED_MODULE_5__personal_personal_module__["PersonalPageModule"],
            __WEBPACK_IMPORTED_MODULE_6__password_password_module__["PasswordPageModule"],
            __WEBPACK_IMPORTED_MODULE_7__trade_trade_module__["TradePageModule"],
            __WEBPACK_IMPORTED_MODULE_8__coupon_coupon_module__["CouponPageModule"],
            __WEBPACK_IMPORTED_MODULE_9__recharge_recharge_module__["RechargePageModule"],
            __WEBPACK_IMPORTED_MODULE_10__validation_validation_module__["ValidationPageModule"],
            __WEBPACK_IMPORTED_MODULE_11__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_12__directives_directives_module__["a" /* DirectivesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__components__["a" /* ComponentsModule */]
        ],
    })
], UsercenterPageModule);

//# sourceMappingURL=usercenter.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(1086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iconcolorful__ = __webpack_require__(1087);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iconcolorful___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_iconcolorful__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_tabs_tabs_module__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_toast__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_dialogs__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_httpHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_constant__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_native__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_personal_personal__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_static_static__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_shared_shared__ = __webpack_require__(1094);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//enableProdMode();
__WEBPACK_IMPORTED_MODULE_6_iconcolorful__["enableColorful"]();
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
/**
 *page module
 */
// import { HomePageModule } from '../pages/home/home.module';

// import { UsercenterPageModule } from '../pages/usercenter/usercenter.module';
// import { NewsPageModule } from '../pages/news/news.module';

/*
 * native plugins
 */





/**
 *Components module
 */
// import { Loading } from '../components/loading/loading'
// import { ComponentsModule } from '../components';
/**
 *provider
 */
// import { TabsProvider } from '../providers/tabs/tabs';
// import { HomeProvider } from '../providers/home';







//import { ReportProvider } from '../providers/report/report';
//import { GradeProvider } from '../providers/static/grade';
//import { TradeProvider } from '../providers/trade/trade';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* StudentApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* StudentApp */], {
                backButtonText: '',
                iconMode: 'ios',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition',
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/agreement/agreement.module#AgreementPageModule', name: 'AgreementPage', segment: 'agreement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coupon/coupon.module#CouponPageModule', name: 'CouponPage', segment: 'coupon', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/doctor/doctor.module#DoctorPageModule', name: 'DoctorPage', segment: 'doctor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exams/exams.module#ExamsPageModule', name: 'ExamsPage', segment: 'exams', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/person/person.module#PersonPageModule', name: 'PersonPage', segment: 'person', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recharge/recharge.module#RechargePageModule', name: 'RechargePage', segment: 'recharge', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setup/setup.module#SetupPageModule', name: 'SetupPage', segment: 'setup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/topics/topics.module#TopicsPageModule', name: 'TopicsPage', segment: 'topics', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trade/trade.module#TradePageModule', name: 'TradePage', segment: 'trade', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/usercenter/usercenter.module#UsercenterPageModule', name: 'UsercenterPage', segment: 'usercenter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/validation/validation.module#ValidationPageModule', name: 'ValidationPage', segment: 'validation', priority: 'low', defaultHistory: [] }
                ]
            }),
            //ComponentsModule,
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__core_tabs_tabs_module__["a" /* TabsModule */],
            // HomePageModule,
            // UsercenterPageModule,
            // NewsPageModule,
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* StudentApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_14__providers_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_httpHandler__["a" /* HttpHandler */],
            __WEBPACK_IMPORTED_MODULE_16__providers_constant__["a" /* Constant */],
            __WEBPACK_IMPORTED_MODULE_17__providers_native__["a" /* NativeProvider */],
            /*
             * native plugins
             */
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_18__providers_personal_personal__["a" /* PersonalProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_static_static__["a" /* StaticProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_shared_shared__["a" /* SharedProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = (function () {
    function ConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    return ConfirmPage;
}());
ConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirm',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/confirm/confirm.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>设置密码</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding-top>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label fixed>密码</ion-label>\n      <ion-input type="password" placeholder="输入密码"></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label fixed>确认密码</ion-label>\n      <ion-input type="password" placeholder="再次输入密码"></ion-input>\n    </ion-item>\n  </ion-list>\n  <p padding>\n    <button ion-button block>确 认</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/confirm/confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ConfirmPage);

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponPage = (function () {
    function CouponPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CouponPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouponPage');
    };
    return CouponPage;
}());
CouponPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coupon',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/coupon/coupon.html"*/'<!--\n  Generated template for the CouponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>我的优惠卷</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <!-- <div class="c-coupon">\n  <div class="c-coupon__tearaway">\n    <div class="c-coupon__code">MANAGER17</div>\n  </div>\n</div>\n -->\n  <ion-card>\n    <ion-row padding-vertical class="coupon-content" align-items-center>\n      <ion-col col-4><span>10</span>元</ion-col>\n      <ion-col>该券为七天网络充值现金抵用券\n        <br>适用范围：学情套餐\n        <br>通过活动获得\n      </ion-col>\n    </ion-row>\n    <ion-row class="coupon-date" padding-horizontal>\n      <ion-col text-left>有效期至2017-07-20</ion-col>\n      <ion-col text-right ion-text color="primary">3天后过期</ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row padding-vertical class="coupon-content" align-items-center>\n      <ion-col col-4><span>10</span>元</ion-col>\n      <ion-col>该券为七天网络充值现金抵用券\n        <br>适用范围：学情套餐\n        <br>通过活动获得\n      </ion-col>\n    </ion-row>\n    <ion-row class="coupon-date" padding-horizontal>\n      <ion-col text-left>有效期至2017-07-20</ion-col>\n      <ion-col text-right ion-text color="primary">3天后过期</ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class="expire">\n    <ion-row padding-vertical class="coupon-content" align-items-center>\n      <ion-col col-4><span>10</span>元</ion-col>\n      <ion-col>该券为七天网络充值现金抵用券\n        <br>适用范围：学情套餐\n        <br>通过活动获得\n      </ion-col>\n    </ion-row>\n    <ion-row class="coupon-date" padding-horizontal>\n      <ion-col text-left>有效期至2017-07-20</ion-col>\n      <ion-col text-right ion-text color="primary">3天后过期</ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row padding-vertical class="coupon-content" align-items-center>\n      <ion-col col-4><span>10</span>元</ion-col>\n      <ion-col>该券为七天网络充值现金抵用券\n        <br>适用范围：学情套餐\n        <br>通过活动获得\n      </ion-col>\n    </ion-row>\n    <ion-row class="coupon-date" padding-horizontal>\n      <ion-col text-left>有效期至2017-07-20</ion-col>\n      <ion-col text-right ion-text color="primary">3天后过期</ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/coupon/coupon.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], CouponPage);

//# sourceMappingURL=coupon.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_doctor_doctor__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_charts_charts__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topics_topics__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_subjecte__ = __webpack_require__(489);
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
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoctorPage = (function () {
    //excellentNums: number[] = [];
    function DoctorPage(navCtrl, navParams, doctorPro, chartsPro, modalCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doctorPro = doctorPro;
        this.chartsPro = chartsPro;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        //topics: any; //= {};
        /**
         *错题列表
         */
        //errors: any[] = [];
        /**
         *当前小题列表
         */
        //nos: any[] = [];
        /**
         *当前小题列表
         */
        //topicsCache: any = {};
        //subjectsCache: any = {};
        this.subjects = [];
        this.subjectIndex = 0;
        this.exam = {};
        this.balls = [];
    }
    DoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctorPage');
    };
    DoctorPage.prototype.ngOnInit = function () {
        this.exam = this.navParams.data;
        this.subjectSlider.autoHeight = true;
        //this.subjectSlider['observer'] = true;
    };
    DoctorPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.doctorPro.subject({ guid: this.exam.guid }).then(function (res) {
            _this.balls = res.subjects;
            _this.tucker(res.subject, res.subjects[_this.subjectIndex]);
            console.log(res);
            console.log(_this.subjectSlider);
        });
    };
    DoctorPage.prototype.onSlideChanged = function (slider) {
        //重置滑动队列
        if (slider._activeIndex >= this.balls.length || slider._activeIndex < 0) {
            return;
        }
        this.subjectIndex = slider.getActiveIndex();
        //第一次加载
        this.getSubject(this.balls[this.subjectIndex]);
        console.log(this.subject);
    };
    /**
     *获取科目信息
     */
    DoctorPage.prototype.getSubject = function (name) {
        var _this = this;
        this.subjects[this.subjectIndex] ||
            this.doctorPro.subject({ guid: this.exam.guid, subject: name }).then(function (res) { return _this.tucker(res.subject, name); });
    };
    DoctorPage.prototype.tucker = function (subject, name) {
        var _this = this;
        this.subject = new __WEBPACK_IMPORTED_MODULE_5__model_subjecte__["a" /* Subjecte */](name, subject, this.chartsPro.percents(subject.no.filter(function (item, index) { return index < 4; }), subject.series.map(function (items) {
            return items.filter(function (item, index) { return index < 4; });
        })));
        setTimeout(function () {
            _this.subjectSlider.update();
            _this.content.resize();
        }, 60);
        this.topic(this.subject.categoryIndex);
    };
    /**
     *小题答题情况
     */
    DoctorPage.prototype.topic = function (index) {
        var _this = this;
        this.subject.categoryIndex = index;
        if (this.subject.activity.fullString) {
            return;
        }
        this.doctorPro.topic({ guid: this.exam.guid, subject: this.subject.name, th: this.subject.activity.name }).then(function (res) {
            _this.subject.activity.merge(res.question);
        });
    };
    /**
     *切换优秀答题
     */
    DoctorPage.prototype.excellent = function (no, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        // let topics = this.subject.activity;
        if (this.subject.activity.excellent[index].value.length > 1) {
            this.subject.activity.nextExcellent(index);
            return;
        }
        this.doctorPro.excellent({ guid: this.exam.guid, subject: this.subject.name, th: no }).then(function (res) {
            if (!res.length)
                return;
            _this.subject.activity.setExcellents(index, res);
        });
    };
    /**
     *查看更多哦小题得分情况
     */
    DoctorPage.prototype.openPercentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__topics_topics__["a" /* TopicsPage */], { options: this.chartsPro.percents(this.subject.no, this.subject.series) }, { enterAnimation: 'modal-md-slide-in', leaveAnimation: 'modal-md-slide-out' });
        modal.present();
    };
    Object.defineProperty(DoctorPage.prototype, "subject", {
        /**
         *当前活动科目
         */
        get: function () {
            return this.subjects[this.subjectIndex];
        },
        set: function (val) {
            this.subjects[this.subjectIndex] = val;
        },
        enumerable: true,
        configurable: true
    });
    DoctorPage.prototype.scrollEnd = function (event) {
        clearInterval(this.scrollTimer);
    };
    DoctorPage.prototype.scrollStart = function (event) {
        var _this = this;
        this.scrollYStart = event.scrollTop;
        this.scrollTimer = setInterval(function () {
            _this.zone.run(function () {
                var dvalue = event.scrollTop > _this.scrollYStart ? 0 : 45;
                _this.stickTopicHeader = event.scrollTop > (_this.subjectSlider.container.offsetHeight + dvalue);
            });
        }, 60);
    };
    return DoctorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], DoctorPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('subjectSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], DoctorPage.prototype, "subjectSlider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('segmentSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], DoctorPage.prototype, "segmentSlider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topicSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], DoctorPage.prototype, "topicSlider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('percentsElement'),
    __metadata("design:type", Object)
], DoctorPage.prototype, "percentsElement", void 0);
DoctorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-doctor',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/doctor/doctor.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-shadow>\n  <ion-navbar>\n    <ion-title>{{exam.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        学情报告\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div *ngIf="balls.length>1||stickTopicHeader" [class.transformY-45]="stickTopicHeader&&balls.length>1" class="sub-header" line-bottom>\n    <scroll-header [items]="balls" (selectedChange)="subjectSlider.slideTo($event)" *ngIf="balls.length>1" line-bottom></scroll-header>\n    <ion-row class="topics-header" *ngIf="stickTopicHeader">\n      <a col-3 class="fixed-button" (tap)="subject.showAll=!subject.showAll">{{subject.showAll?\'查看错题\':\'查看全部\'}}</a>\n      <ion-col no-padding>\n        <scroll-header [items]="subject.nos" [(selected)]="subject.categoryIndex" (selectedChange)="topic($event)"></scroll-header>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content #content [fullscreen]="true" (ionScrollStart)="scrollStart($event)" (ionScrollEnd)="scrollEnd($event)" padding-bottom>\n  <div class="subjects">\n    <ion-slides #subjectSlider (ionSlideDidChange)="onSlideChanged($event)">\n      <ion-slide *ngFor="let ball of balls">\n        <div *ngIf="subject?.name">\n          <div class="card">\n            <ion-row class="card-header" justify-content-between>\n              <ion-col col-5 text-left><i></i>原始试卷和答案</ion-col>\n            </ion-row>\n            <img-lazy [src]=\'subject.paper\'></img-lazy>\n          </div>\n          <div class="card percents">\n            <ion-row class="card-header" justify-content-between>\n              <ion-col col-5 text-left><i></i>小题得分情况</ion-col>\n              <ion-col><i></i>年级得分率</ion-col>\n              <ion-col><i></i>我的得分率</ion-col>\n            </ion-row>\n            <div class="card-content">\n              <echarts-ng2 [option]=\'subject?.percents\' [style]="{\'height\': 210+\'px\'}"></echarts-ng2>\n            </div>\n            <ion-row class="card-footer" (tap)="openPercentModal()">\n              <a>\n          查看更多\n        </a>\n            </ion-row>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class="topics" *ngIf="subject?.name&&subject.category?.length">\n    <ion-row class="topics-header" line-bottom *ngIf="!stickTopicHeader">\n      <a col-3 class="fixed-button" (tap)="subject.showAll=!subject.showAll">{{subject.showAll?\'查看错题\':\'查看全部\'}}</a>\n      <ion-col no-padding>\n        <scroll-header [items]="subject.nos" [(selected)]="subject.categoryIndex" (selectedChange)="topic($event)"></scroll-header>\n      </ion-col>\n    </ion-row>\n    <div class="topics-content" *ngIf="subject.activity">\n      <div class="topics-item">\n        <div class="item-content">\n          <img-lazy [src]="url" *ngFor="let url of subject.activity.paper"></img-lazy>\n        </div>\n        <p footer>\n          满分：<span color="primary" ion-text>{{subject.activity.fullString}}</span>分&nbsp;&nbsp;&nbsp;我的得分：<span color="primary" ion-text>{{subject.activity.scoreString}}</span>分&nbsp;&nbsp;&nbsp;难度：<span color="primary" ion-text>{{subject.activity.levelString}}</span>\n        </p>\n        <p line-top footer *ngIf="subject.activity.objective&&subject.activity.reply?.length">\n          我的答案：<span ion-text [color]="primary">{{subject.activity.replyString}}</span>&nbsp;\n          <ion-icon name="checkmark"></ion-icon>&nbsp;&nbsp;&nbsp; 正确答案：\n          <span>{{subject.activity.answerString}}</span>\n        </p>\n      </div>\n      <div class="topics-item" *ngIf="!subject.activity.objective&&subject.activity.reply?.length">\n        <p line-bottom>我的答案</p>\n        <div class="item-content">\n          <img-lazy [src]="reply.link" *ngFor="let reply of subject.activity.reply"></img-lazy>\n        </div>\n      </div>\n      <div class="topics-item" *ngIf="subject.activity.topic">\n        <p line-bottom>【知识点】</p>\n        <p footer>{{subject.activity.topic}}</p>\n      </div>\n      <div class="topics-item" *ngIf="subject.activity.resolve?.length">\n        <p line-bottom>【解析】</p>\n        <div class="item-content">\n          <img-lazy [src]="url" *ngFor="let url of subject.activity.resolve"></img-lazy>\n        </div>\n      </div>\n      <div class="topics-item" *ngIf="subject.activity.excellent?.length==1">\n        <p line-bottom *ngIf="subject.activity.excellent.length==1">【优秀答案】\n          <button ion-button clear small float-right style="height: auto" (tap)="excellent(subject.activity.excellent[0].no)">\n            <ion-icon name="refresh"></ion-icon>&nbsp; 换一个\n          </button>\n        </p>\n        <div class="item-content">\n          <img-lazy [src]="url" *ngFor="let url of subject.activity.excellent[0].value[subject.activity.excellentNums[0]]">\n          </img-lazy>\n        </div>\n      </div>\n      <ion-slides [pager]="subject.activity.analyse.length>1" class="topics-item" *ngIf="subject.activity.analyse?.length" spaceBetween="10">\n        <ion-slide *ngFor="let item of subject.activity.analyse;let y=index">\n          <p line-bottom text-left>【{{item.no}} 题得分率】</p>\n          <echarts-ng2 [option]="item.options" [style]="{\'height\': 150+\'px\'}"></echarts-ng2>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/doctor/doctor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_doctor_doctor__["a" /* DoctorProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_charts_charts__["a" /* ChartsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], DoctorPage);

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CategoryOptions */
/* unused harmony export Category */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subjecte; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *题目详细数据
 */
var CategoryOptions = (function () {
    function CategoryOptions(obj) {
        if (obj === void 0) { obj = { paper: [], topic: '', excellent: [], answer: [], reply: [], resolve: [], full: [], score: [], level: [], objective: true }; }
        var _this = this;
        /**
         *优秀答卷索引列表
         */
        this.excellentNums = [0];
        this.paper = obj.paper;
        this.topic = obj.topic;
        this.answer = obj.answer || [];
        this.reply = obj.reply || [];
        this.resolve = obj.resolve;
        this.full = obj.full || [];
        this.score = obj.score || [];
        this.level = obj.level || [];
        this.objective = obj.objective;
        this.excellent = obj.excellent || [];
        this.excellent.forEach(function (item, index) { return _this.excellentNums[index] = 0; });
        this.analyse = obj.analyse || [];
    }
    CategoryOptions.prototype.nextExcellent = function (index) {
        if (index === void 0) { index = 0; }
        if (this.excellent[index].value.length > 1) {
            this.excellentNums[index] = this.excellentNums[index] < this.excellent[index].value.length - 1 ? this.excellentNums[index] + 1 : 0;
            return this.excellentNums[index];
        }
        return 0;
    };
    CategoryOptions.prototype.setExcellents = function (index, items) {
        if (index === void 0) { index = 0; }
        if (items === void 0) { items = []; }
        this.excellent[index].value = items;
    };
    Object.defineProperty(CategoryOptions.prototype, "fullString", {
        get: function () {
            return this.full.join(",");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryOptions.prototype, "answerString", {
        get: function () {
            return this.answer.join(",");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryOptions.prototype, "replyString", {
        get: function () {
            return this.reply.join(",");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryOptions.prototype, "scoreString", {
        get: function () {
            return this.score.join(",");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryOptions.prototype, "levelString", {
        get: function () {
            return this.level.join(",");
        },
        enumerable: true,
        configurable: true
    });
    return CategoryOptions;
}());

/**
 *题目信息
 */
var Category = (function (_super) {
    __extends(Category, _super);
    /**
     *题目详细信息
     */
    //data ? : CategoryOptions;
    function Category(obj) {
        if (obj === void 0) { obj = { no: '', name: '', right: false }; }
        var _this = _super.call(this) || this;
        _this.no = obj.no;
        _this.name = obj.name;
        _this.right = obj.right;
        //this.data = obj.data || new CategoryOptions();
        // code...
        var s = ["f56d4e", "ff8820", "04b8d9", "b564ef", "7788f2", "3ad1a4", "ffc001", "d74ce8", "3ac8d1", "54adff", "5872f8", "ff5454", "f56d4e"];
        return _this;
    }
    /**
     *追加合并信息
     */
    Category.prototype.merge = function (obj) {
        var _this = this;
        if (!obj)
            return;
        obj.analyse = obj.analyse.map(function (item) {
            return { no: item.no, options: _this.setOpt(item.category, item.series) };
        });
        Object.assign(this, new CategoryOptions(obj));
    };
    Category.prototype.setOpt = function (category, series) {
        return {
            color: ['#f66e4f', '#3398DB'],
            grid: {
                top: 16,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                    type: 'category',
                    data: category,
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
            yAxis: [{
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
            series: [{
                    type: 'bar',
                    barWidth: '40%',
                    data: series
                },],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c} 人'
                }
            }
        };
    };
    return Category;
}(CategoryOptions));

/**
 *错题诊断 科目
 */
var Subjecte = (function () {
    function Subjecte(name, obj, percents) {
        if (name === void 0) { name = ''; }
        if (obj === void 0) { obj = { paper: '', no: [], series: [], showAll: false, category: [] }; }
        if (percents === void 0) { percents = {}; }
        /**
         *题目列表
         */
        this.category = [];
        /**
         *当前题号索引
         */
        this.categoryIndex = 0;
        /**
         *显示全部题目
         */
        this.showAll = false;
        this.name = name;
        this.percents = percents;
        this.paper = obj.paper;
        this.no = obj.no;
        this.series = obj.series;
        this.category = obj.category.map(function (item) { return new Category(item); });
        // code...
    }
    Object.defineProperty(Subjecte.prototype, "activity", {
        /**
         *当前活动题
         */
        get: function () {
            return this.category[this.categoryIndex];
        },
        set: function (data) {
            this.category[this.categoryIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subjecte.prototype, "nos", {
        /**
         *题号列表
         */
        get: function () {
            return this.category.map(function (item) {
                return item.no;
            });
        },
        enumerable: true,
        configurable: true
    });
    return Subjecte;
}());

//# sourceMappingURL=subjecte.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TABS_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PERSONAL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FEEDBACK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SETUP_PAGE; });
/* unused harmony export REGISTER_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return USERCENTER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NEWS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGREEMENT_PAGE; });
/* unused harmony export PASSWORD_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PAYMENT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TRADE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COUPON_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RECHARGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return VALIDATION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONFIRM_PAGE; });
/* unused harmony export PERSON_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EXAMS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return REPORT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DOCTOR_PAGE; });
/* unused harmony export TOPICS_PAGE */
//Constants for getting type references
//Constants for getting type references
var TABS_PAGE = 'TabsPage';
var PERSONAL_PAGE = 'PersonalPage';
var FEEDBACK_PAGE = 'FeedbackPage';
var SETUP_PAGE = 'SetupPage';
var REGISTER_PAGE = 'RegisterPage';
var LOGIN_PAGE = 'LoginPage';
var HOME_PAGE = 'HomePage';
var USERCENTER_PAGE = 'UsercenterPage';
var NEWS_PAGE = 'NewsPage';
var AGREEMENT_PAGE = 'AgreementPage';
var PASSWORD_PAGE = 'PasswordPage';
var PAYMENT_PAGE = 'PaymentPage';
var TRADE_PAGE = 'TradePage';
var COUPON_PAGE = 'CouponPage';
var RECHARGE_PAGE = 'RechargePage';
var VALIDATION_PAGE = 'ValidationPage';
var CONFIRM_PAGE = 'ConfirmPage';
var PERSON_PAGE = 'PersonPage';
var EXAMS_PAGE = 'ExamsPage';
var REPORT_PAGE = 'ReportPage';
var DOCTOR_PAGE = 'DoctorPage';
var TOPICS_PAGE = 'TopicsPage';
//# sourceMappingURL=pages.constants.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
异常处理
*/
var HttpHandler = (function () {
    function HttpHandler() {
        this.handleAuthSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.handleMessageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.invokeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.completeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.handleErrorSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.handleMessage$ = this.handleMessageSource.asObservable();
        this.handleAuth$ = this.handleAuthSource.asObservable();
        this.handleError$ = this.handleErrorSource.asObservable();
        this.$invoke = this.invokeSource.asObservable();
        this.$complete = this.completeSource.asObservable();
    }
    HttpHandler.prototype.invoke = function () {
        this.invokeSource.next();
    };
    HttpHandler.prototype.complete = function () {
        this.completeSource.next();
    };
    // Service message commands
    HttpHandler.prototype.handleMessage = function (message) {
        //this.handleMessageSource.next(message);
        throw { status: 403, message: message };
    };
    HttpHandler.prototype.handleAuth = function (message) {
        this.handleAuthSource.next(message);
    };
    HttpHandler.prototype.handleError = function (error) {
        //
        this.handleErrorSource.next(error);
        console.error(error);
        //throw error;
    };
    HttpHandler.prototype.extractData = function (res) {
        if (!res || !res.status) {
            res = { status: 500, message: res };
            this.handleError(res);
        }
        else if (res.status == 200) {
            this.complete();
            return res.data;
        }
        else if (res.status == 401) {
            this.handleAuth(res.message);
            throw res;
        }
        else if (res.status == 403) {
            this.handleMessage(res.message);
            throw res;
        }
        else {
            this.handleError(res);
            throw res;
        }
    };
    return HttpHandler;
}());
HttpHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HttpHandler);

//# sourceMappingURL=httpHandler.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubconPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcolorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var subejects = {
    '总分': {
        'icon': 'star-outline',
        'color': '#f66e4f'
    },
    '数学': {
        'icon': 'imath',
        'color': '#54adff'
    },
    '地理': {
        'icon': 'igeography',
        'color': '#54adff',
    },
    '历史': {
        'icon': 'ihistory',
        'color': '#3ac8d2',
    },
    '物理': {
        'icon': 'ibulb',
        'color': '#7788f2',
    },
    '英语': {
        'icon': 'ienglish',
        'color': '#54adff',
    },
    '自定义': {
        'icon': 'icustom',
        'color': '#f66e4f',
    },
    '语文': {
        'icon': 'ichinese',
        'color': '#b564ef',
    },
    '政治': {
        'icon': 'ipolitics',
        'color': '#b564ef',
    },
    '化学': {
        'icon': 'ichemistry',
        'color': '#b564ef',
    },
    '生物': {
        'icon': 'ibiology',
        'color': '#b564ef',
    },
    '理科综合': {
        'icon': 'iscience',
        'color': '#b564ef',
    },
    '文科综合': {
        'icon': 'iliterature',
        'color': '#b564ef',
    },
    '理科': {
        'icon': 'iscience',
        'color': '#b564ef',
    },
    '文科': {
        'icon': 'iliterature',
        'color': '#b564ef',
    },
    'default': {
        'icon': 'iother',
        'color': '#54adff',
    },
};
/**
 * Generated class for the SubconPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SubconPipe = (function () {
    function SubconPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SubconPipe.prototype.transform = function (value) {
        if (!subejects[value]) {
            return subejects['default']['icon'];
        }
        return subejects[value]['icon'];
    };
    return SubconPipe;
}());
SubconPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'subcon',
    })
], SubconPipe);

var SubcolorPipe = (function () {
    function SubcolorPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SubcolorPipe.prototype.transform = function (value) {
        if (!subejects[value]) {
            return subejects['default']['color'];
        }
        return subejects[value]['color'];
    };
    return SubcolorPipe;
}());
SubcolorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'subcolor',
    })
], SubcolorPipe);

//# sourceMappingURL=subcon.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elasticLine__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iscroll__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Transition } from './transition';


//import { ScrollheaderComponent } from './scrollheader/scrollheader';
//import { SubmitonComponent } from './submiton/submiton';
// import { RocketComponent } from './rocket/rocket';
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__elasticLine__["a" /* ElasticLine */],
            //LazyLoader,
            __WEBPACK_IMPORTED_MODULE_3__iscroll__["a" /* Iscroll */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__elasticLine__["a" /* ElasticLine */],
            //LazyLoader,
            __WEBPACK_IMPORTED_MODULE_3__iscroll__["a" /* Iscroll */],
        ],
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elasticLine__ = __webpack_require__(773);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__elasticLine__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticLine; });
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

var ElasticLine = (function () {
    function ElasticLine() {
    }
    Object.defineProperty(ElasticLine.prototype, "progress", {
        set: function (index) {
            this.styles = this.transform(Number(index));
        },
        enumerable: true,
        configurable: true
    });
    ElasticLine.prototype.ngOnInit = function () {
        this.lineWidth = !this.lineWidth ? this.ratio * 100 : Math.min(this.lineWidth, this.ratio) * 100;
        this.setctionW = this.ratio * 100;
        this.styles = this.transform(0);
    };
    ElasticLine.prototype.transform = function (index) {
        var x = this.setctionW * index + (this.setctionW - this.lineWidth) / 2 + 'vw';
        return {
            'width': this.lineWidth + 'vw',
            'transform': 'translateX(' + x + ')',
            '-webkit-transform': 'translateX(' + x + ')',
        };
    };
    return ElasticLine;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ElasticLine.prototype, "lineWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ElasticLine.prototype, "ratio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ElasticLine.prototype, "progress", null);
ElasticLine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'elastic-line',
        template: "<p class=\"elastic-line\" [ngStyle]=\"styles\"></p>",
        styles: ["\n    :host{\n      display: block;\n      background: rgba(255, 255, 255, 0.85);\n    }\n    .elastic-line{\n      height: 2px;\n      padding: 0;\n      margin: 0;\n      background:#f76e50;\n      -webkit-transition: -webkit-transform .38s;\n      -moz-transition: -moz-transform .38s;\n      transition: transform .38s;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], ElasticLine);

//# sourceMappingURL=elasticLine.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iscroll__ = __webpack_require__(775);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__iscroll__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iscroll; });
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

var Iscroll = (function () {
    function Iscroll(el) {
        this.el = el;
        //@ViewChild('scroll') scroll:any;
        this.num = 10;
        this.scrollY = true;
        this.scrollX = false;
    }
    Iscroll.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollElement = this.el.nativeElement.firstElementChild;
        setTimeout(function () { return _this.num = 1; }, 1500);
    };
    Iscroll.prototype.setTop = function (top) {
        this.scrollElement.scrollTop = top;
    };
    Iscroll.prototype.getScrollTop = function () {
        return this.scrollElement.scrollTop;
    };
    Iscroll.prototype.getMaxScrollTop = function () {
        return this.scrollElement.firstElementChild.offsetHeight - this.scrollElement.offsetHeight;
    };
    Iscroll.prototype.setLeft = function (left) {
        this.scrollElement.scrollLeft = left;
    };
    Iscroll.prototype.getScrollLeft = function () {
        return this.scrollElement.scrollLeft;
    };
    Iscroll.prototype.getMaxScrollLeft = function () {
        return this.scrollElement.firstElementChild.offsetWidth - this.scrollElement.offsetWidth;
    };
    /*
     *滚动到左边
     */
    Iscroll.prototype.scrollToLeft = function (duration) {
        if (duration === void 0) { duration = 350; }
        return this.scrollTo(-this.getScrollLeft(), duration);
    };
    /*
     *滚动到顶部
     */
    Iscroll.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 350; }
        return this.scrollTo(-this.getScrollTop(), duration);
    };
    /*
     *滚动到底部
     */
    Iscroll.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 350; }
        return this.scrollTo(this.getMaxScrollTop(), duration);
    };
    Iscroll.prototype.scrollToTarget = function (querySelector, duration) {
        if (duration === void 0) { duration = 350; }
        var targets = this.scrollElement.querySelectorAll(querySelector);
        if (!targets || !targets[0])
            return new Promise(function (reslove) {
                console.warn("the '" + querySelector + "' doesn't exist in iscroll");
                reslove(null);
            });
        return this.scrollToElement(targets[0], duration);
    };
    Iscroll.prototype.scrollToElement = function (element, duration) {
        if (duration === void 0) { duration = 350; }
        var rect = element.getBoundingClientRect(), top = 0;
        if (rect.top < 0) {
            top = rect.top;
        }
        else {
            var dY = rect.bottom - this.scrollElement.offsetHeight;
            if (dY > 10) {
                top = rect.top;
            }
            else {
                return new Promise(function (reslove) { return reslove(false); });
            }
        }
        return this.scrollTo(top, duration);
    };
    /*
     *滚动动画处理
     */
    Iscroll.prototype.scrollTo = function (offsetY, duration) {
        var _this = this;
        if (duration === void 0) { duration = 350; }
        return new Promise(function (reslove) {
            var maxTop = _this.getMaxScrollTop();
            if (Math.abs(offsetY) < 5 || maxTop < 0) {
                return reslove(false);
            }
            var currentFrameId = null, frames = 0, interval = Math.ceil(offsetY * 50 / duration), start = _this.getScrollTop();
            offsetY = offsetY < 0 ? Math.max(-start, offsetY) : Math.min(maxTop, offsetY);
            var cancel = function () {
                window.cancelAnimationFrame(currentFrameId);
                currentFrameId = null;
                reslove(true);
            };
            var _raf = function () {
                currentFrameId = window.requestAnimationFrame(function () { return _nextFrame(); });
            };
            var _nextFrame = function () {
                frames += interval;
                var top = start + frames;
                _this.setTop(Math.max(top, 0));
                // scrollElement.scrollTop = ;
                if (interval > 0 && frames >= offsetY || interval < 0 && frames <= offsetY) {
                    cancel();
                }
                else {
                    _raf();
                }
            };
            _raf();
        });
    };
    return Iscroll;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], Iscroll.prototype, "scrollY", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], Iscroll.prototype, "scrollX", void 0);
Iscroll = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'iscroll',
        template: "<div class=\"scroll-content\" [class.scroll-y]=\"scrollY\" [class.scroll-x]=\"scrollX\"><ng-content></ng-content></div>",
        styles: ["\n    :host {\n      position: relative;\n      display: block;\n      width:100%;\n      overflow: hidden;\n    }\n\n\n    .scroll-x.scroll-content {\n      overflow-x: scroll;\n      height: calc(100% + 10px);\n      height: -webkit-calc(100% + 10px);\n      padding-bottom:10px;\n    }\n\n    .scroll-y.scroll-content {\n      overflow-y: scroll;\n      width: calc(100% + 10px);\n      width: -webkit-calc(100% + 10px);\n      padding-right:10px;\n    }\n\n   .scroll-content {\n      overflow-y: hidden;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], Iscroll);

//# sourceMappingURL=iscroll.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollheaderComponent; });
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
 * Generated class for the ScrollheaderComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ScrollheaderComponent = (function () {
    function ScrollheaderComponent() {
        this.items = [];
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.selectedValue = 0;
        console.log('Hello ScrollheaderComponent Component');
    }
    Object.defineProperty(ScrollheaderComponent.prototype, "selected", {
        get: function () {
            return this.selectedValue;
        },
        set: function (val) {
            this.selectedValue = val;
            this.selectedChange.emit(this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    ScrollheaderComponent.prototype.ngAfterViewInit = function () {
    };
    ScrollheaderComponent.prototype.tap = function (i) {
        if (this.selected === i)
            return;
        this.selected = i;
        //this.onChanged.emit(i);
    };
    return ScrollheaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ScrollheaderComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], ScrollheaderComponent.prototype, "selectedChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], ScrollheaderComponent.prototype, "selected", null);
ScrollheaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'scroll-header',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/components/scrollheader/scrollheader.html"*/'<!-- Generated template for the ScrollheaderComponent component,add by leo zhang 201710010101 -->\n<iscroll [scrollX]="true" [scrollY]="false">\n  <ion-row col-auto nowrap align-items-center justify-content-between>\n    <ion-col interactive *ngFor="let item of items;let i=index;" [attr.select]="i===selectedValue" (tap)="tap(i)">\n      {{item}}\n    </ion-col>\n  </ion-row>\n</iscroll>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/components/scrollheader/scrollheader.html"*/
    }),
    __metadata("design:paramtypes", [])
], ScrollheaderComponent);

//# sourceMappingURL=scrollheader.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazyloader__ = __webpack_require__(778);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lazyloader__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoader; });
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

var LazyLoader = (function () {
    function LazyLoader() {
        this.state = 0;
    }
    LazyLoader.prototype.refresh = function () {
        var _this = this;
        if (!this.state)
            return;
        this.timer = setTimeout(function () {
            _this.state = -1;
        }, 3600);
        this.state = 0;
    };
    LazyLoader.prototype.onLoad = function () {
        clearTimeout(this.timer);
        this.state = 1;
    };
    LazyLoader.prototype.onError = function () {
        clearTimeout(this.timer);
        this.state = -1;
    };
    return LazyLoader;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], LazyLoader.prototype, "src", void 0);
LazyLoader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'img-lazy',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/components/lazyLoader/lazyloader.html"*/'<img src="{{src}}" (load)="onLoad()" [hidden]="state!=1" (error)="onError()" />\n<div *ngIf="state!=1" class="loader" (tap)="refresh()">\n  <ion-icon name="ios-alert-outline" *ngIf="state===-1" color="gray9"></ion-icon>\n  <ion-spinner name="bubbles" color="gray9" *ngIf="state===0"></ion-spinner>\n</div>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/components/lazyLoader/lazyloader.html"*/,
    }),
    __metadata("design:paramtypes", [])
], LazyLoader);

//# sourceMappingURL=lazyloader.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exams_exams__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_charts_charts__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_constants__ = __webpack_require__(58);
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
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamsPage = (function () {
    function ExamsPage(navCtrl, navParams, examsPro, chartsPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.examsPro = examsPro;
        this.chartsPro = chartsPro;
        this.pages = {
            report: __WEBPACK_IMPORTED_MODULE_4__pages_constants__["m" /* REPORT_PAGE */],
            doctor: __WEBPACK_IMPORTED_MODULE_4__pages_constants__["d" /* DOCTOR_PAGE */]
        };
        this.view = { viewindex: 0, viewlength: 10 };
        this.latest = {};
        this.exams = [];
    }
    ExamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamsPage');
    };
    ExamsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.examsPro.exams(this.view).then(function (res) {
            console.log(res);
            _this.latest = res.latest;
            _this.waterball = _this.chartsPro.ball(_this.latest.percent, _this.latest.score);
            _this.exams = res.exams;
        });
    };
    return ExamsPage;
}());
ExamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exams',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/exams/exams.html"*/'<!--\n  Generated template for the ExamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>成绩单</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="banner" *ngIf="waterball">\n    <h3>{{latest.name}}</h3>\n    <p ion-text color="gray9">发布时间：{{latest.time}}</p>\n    <echarts-ng2 [option]="waterball" [style]="{\'height\': \'210px\'}"></echarts-ng2>\n    <ion-row justify-content-between>\n      <ion-col col-6>\n        <button ion-button outline block [navPush]=\'pages.report\' [navParams]="latest">学情报告</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button outline block color="green" [navPush]=\'pages.doctor\' [navParams]="latest">{{latest.payment?\'错题诊断\':\'答题情况\'}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-list no-lines>\n    <!-- <ion-item-divider>历史考试</ion-item-divider> -->\n    <ion-card *ngFor="let exam of exams">\n      <ion-item class="card-header" no-lines>\n        {{exam.name}}\n        <ion-note item-right color="gray6">\n        </ion-note>\n      </ion-item>\n      <ion-row nowrap justify-content-start class="desc">\n        <ion-col col-auto text-left>\n          <ion-icon name="time-outline"></ion-icon> 发布时间：{{exam.time}}</ion-col>\n        <!-- <ion-col col-auto>\n          <ion-icon name="person-outline"></ion-icon> 1242名考生 </ion-col>\n        <ion-col col-auto>\n          <ion-icon name="apps-outline"></ion-icon> 4个科目 </ion-col>[navParams]="{guid:latest.guid}" -->\n      </ion-row>\n      <ion-row class="footer">\n        <a [navPush]=\'pages.report\' [navParams]="exam">学情报告</a>\n        <a [navPush]=\'pages.doctor\' [navParams]="exam">{{exam.payment?\'错题诊断\':\'答题情况\'}}</a>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/exams/exams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_exams_exams__["a" /* ExamsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_charts_charts__["a" /* ChartsProvider */]])
], ExamsPage);

//# sourceMappingURL=exams.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exams_exams__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_charts_charts__ = __webpack_require__(122);
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
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = (function () {
    function ReportPage(navCtrl, navParams, examsPro, chartsPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.examsPro = examsPro;
        this.chartsPro = chartsPro;
        this.scores = [];
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
    };
    ReportPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.name = this.navParams.get('name');
        this.examsPro.report({ guid: this.navParams.get('guid') }).then(function (res) {
            _this.level = res.level;
            _this.percent = res.percent;
            _this.studentCount = res.studentcount;
            _this.scores = res.myscore;
            _this.lanalysis = _this.chartsPro.radar(res.learnanalysis);
            _this.levelanalys = _this.chartsPro.level(res.levelanalysis);
            console.log(res);
        });
        //this.reportPro.
    };
    ReportPage.prototype.onSegmentChanged = function (event) {
        console.log(event);
    };
    return ReportPage;
}());
ReportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-report',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/report/report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-shadow>\n<ion-navbar>\n  <ion-title>{{name}}</ion-title>\n  <ion-buttons end>\n    <button ion-button>\n      错题诊断\n    </button>\n  </ion-buttons>\n</ion-navbar>\n<!-- <ion-segment [(ngModel)]="level" mode="md" color="text">\n    <ion-segment-button value="3">\n      联考\n    </ion-segment-button>\n    <ion-segment-button value="2">\n      本校\n    </ion-segment-button>\n    <ion-segment-button value="1">\n      班级\n    </ion-segment-button>\n  </ion-segment> -->\n<scroll-header [items]="balls" *ngIf="balls.length>1" line-bottom></scroll-header>\n</ion-header>\n<ion-content [fullscreen]="true">\n  <p line-bottom line-top class="tip">总计{{studentCount}}名考生 领先{{percent}}考生</p>\n  <ion-slides>\n    <ion-slide>\n      <ion-card>\n        <ion-card-header text-center color="primary">\n          我的成绩\n        </ion-card-header>\n        <ion-row line-top *ngFor="let score of scores">\n          <ion-col col-4>\n            <ion-icon *ngIf="score.name" name="{{score.name|subcon}}"></ion-icon>\n            {{score.name | slice:0:2}}\n          </ion-col>\n          <ion-col *ngFor="let item of score.subjects">\n            {{item}}\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-card>\n        <echarts-ng2 [option]="lanalysis" [style]="{\'height\': \'250px\'}"></echarts-ng2>\n        <p text-center>\n          <button ion-button round>查看学情分析</button>\n        </p>\n      </ion-card>\n      <ion-card>\n        <!-- <ion-card-header text-center color="primary">\n      层次分析\n    </ion-card-header> -->\n        <echarts-ng2 [option]="levelanalys" [style]="{\'height\': \'250px\'}"></echarts-ng2>\n        <p text-center>\n          <button ion-button round>查看层次分析</button>\n        </p>\n      </ion-card>\n      <ion-card>\n        <ion-card-header text-center color="primary">\n          排名对比\n        </ion-card-header>\n        <echarts-ng2 [option]="lanalysis" [style]="{\'height\': \'230px\'}"></echarts-ng2>\n        <p text-center>\n          <button ion-button round>查看排名对比</button>\n        </p>\n      </ion-card>\n      <ion-card>\n        <ion-card-header text-center color="primary">\n          成绩趋势\n        </ion-card-header>\n        <echarts-ng2 [option]="lanalysis" [style]="{\'height\': \'230px\'}"></echarts-ng2>\n        <p text-center>\n          <button ion-button round>查看成绩趋势</button>\n        </p>\n      </ion-card>\n      <ion-card>\n        <ion-card-header text-center color="primary">\n          排名趋势\n        </ion-card-header>\n        <echarts-ng2 [option]="lanalysis" [style]="{\'height\': \'230px\'}"></echarts-ng2>\n        <p text-center>\n          <button ion-button round>查看排名趋势</button>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/report/report.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_exams_exams__["a" /* ExamsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_charts_charts__["a" /* ChartsProvider */]])
], ReportPage);

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/feedback/feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border>\n    <ion-title>意见反馈</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="content-inner">\n    <ion-textarea placeholder="输入您的反馈..." [(ngModel)]="text" max="300" maxLength="300" rows="8" [attr.length]="text?text.length:0">\n    </ion-textarea>\n    <div class="line"></div>\n    <ion-row padding class="images">\n      <a col-2>\n        <ion-icon name="ios-camera-outline"></ion-icon>\n      </a>\n    </ion-row>\n  </div>\n  <p padding>\n    <button ion-button block>提交反馈</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/feedback/feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_constants__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_static_static__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsProvider } from '../../providers/tabs/tabs';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, homeProvider, userProvider, staticPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeProvider = homeProvider;
        this.userProvider = userProvider;
        this.staticPro = staticPro;
        this.pages = {
            recharge: __WEBPACK_IMPORTED_MODULE_2__pages_constants__["l" /* RECHARGE_PAGE */],
            personal: __WEBPACK_IMPORTED_MODULE_2__pages_constants__["k" /* PERSONAL_PAGE */],
            exams: __WEBPACK_IMPORTED_MODULE_2__pages_constants__["e" /* EXAMS_PAGE */],
        };
        this.state = 0;
        this.chartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.chartLabels = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
        this.chartType = 'bar';
        this.chartLegend = true;
        this.chartData = [
            { data: [75, 80, 45, 100], label: 'Student A' },
            { data: [80, 55, 75, 95], label: 'Student B' }
        ];
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.userProvider.getUserInfo().then(function (userInfo) {
            _this.userInfo = userInfo;
            console.log(_this.userInfo);
        });
        this.homeProvider.index().then(function (res) {
            console.log(res);
            _this.package = res.package;
            _this.homeProvider.setBadge(res.msgCount);
        });
    };
    HomePage.prototype.ball = function () {
        this.optionWaterball = {
            series: [{
                    type: 'liquidFill',
                    data: [0.5, {
                            value: 0.5,
                            phase: Math.PI
                        }],
                    phase: 0,
                    period: 4000,
                    waveLength: '100%',
                    animationDurationUpdate: 2000
                }]
        };
        //setTimeout(() => console.log(this.ballEl), 2000);
        // setInterval(() => {
        //   this.ballEl.setOption({
        //     series: [{
        //       amplitude: Math.random() * 20
        //     }]
        //   })
        // }, 3000);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('ball'),
    __metadata("design:type", Object)
], HomePage.prototype, "ballEl", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/zhangleo/workspace/student/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>首页</ion-title>\n  </ion-navbar>\n</ion-header>\n -->\n<param hook="home">\n<ion-content>\n  <!-- <div class="banner"> -->\n  <div *ngIf="package&&userInfo" [ngSwitch]="package.open">\n    <ion-row class="header" padding-vertical align-items-center justify-content-between>\n      <!-- <echarts-ng2 [option]="optionWaterball" #ball></echarts-ng2> -->\n      <a class="avatar" text-center [navPush]="pages.personal">\n      <img src="../assets/images/avatar.png">\n    </a>\n      <ion-col nowrap text-left col-6 class="user-info">\n        <span [navPush]="pages.personal">{{userInfo.name}} | {{userInfo.gradeName}}</span>\n        <span [navPush]="pages.personal"> {{userInfo.cityName}} {{userInfo.school}}</span>\n      </ion-col>\n      <ion-col class="coin" text-right>\n        <div>{{userInfo.coin}} 学贝</div>\n        <a class="button" [navPush]="pages.recharge">\n        充值学贝\n        <!-- <span>充值学贝</span> -->\n        <!-- <ion-icon name="arrow-forward"></ion-icon> -->\n      </a>\n      </ion-col>\n    </ion-row>\n    <ion-row class="charge-tip" *ngSwitchCase="true">\n      <ion-col text-center col-9>\n        学情套餐{{package.expires | date:\'yyyy年M月d日\'}}到期\n      </ion-col>\n      <ion-icon name="idivision"></ion-icon>\n      <a text-center class="col" [navPush]="pages.recharge">\n      续费\n    </a>\n    </ion-row>\n    <ion-row class="charge-tip" *ngSwitchCase="false">\n      <a text-center class="col" [navPush]="pages.recharge">点击开通学情套餐 >> </a>\n    </ion-row>\n    <ion-row class="banner">\n      <a no-padding>\n    <img src="http://7netpublic.oss-cn-hangzhou.aliyuncs.com/market/xueqing_640x160.png">\n  </a>\n    </ion-row>\n    <div class="card">\n      <div class="card-header">\n        <i></i>\n        <span>基础数据服务</span>\n      </div>\n      <ion-row class="card-content">\n        <a [navPush]="pages.exams" href="javascript:void(0);">\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-ianalysis"></use>\n          </svg>\n          <!-- <ion-icon name="headset"></ion-icon> -->\n          <div>成绩趋势</div>\n        </a>\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-icause"></use>\n          </svg>\n          <div>错题分析</div>\n        </a>\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-iset"></use>\n          </svg>\n          <div>名校试题</div>\n        </a>\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-iclaim"></use>\n          </svg>\n          <div>认领考试</div>\n        </a>\n      </ion-row>\n    </div>\n    <div class="card">\n      <div class="card-header">\n        <i></i>\n        <span>个性地址服务</span>\n        <span>成绩如何提升？</span>\n      </div>\n      <ion-row class="card-content">\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-ierrorbook"></use>\n          </svg>\n          <div>错题本\n            <br>（纸质版）</div>\n        </a>\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-ieerrorbook"></use>\n          </svg>\n          <div>错题本\n            <br>（电子版）</div>\n        </a>\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-istrengthening"></use>\n          </svg>\n          <div>提分课堂</div>\n        </a>\n        <a>\n          <svg colorful aria-hidden="true" item-left>\n            <use xlink:href="#icon-idiagnose"></use>\n          </svg>\n          <div>知识点诊断</div>\n        </a>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangleo/workspace/student/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_home__["a" /* HomeProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_static_static__["a" /* StaticProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HookDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_httpHandler__ = __webpack_require__(75);
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
 * Generated class for the HookDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var HookDirective = (function () {
    function HookDirective(httpHandler) {
        this.httpHandler = httpHandler;
        this.loading = true;
        this.loading && this.httpHandler.invoke();
    }
    HookDirective.prototype.ngAfterViewInit = function () {
        this.hook && console.log("Hello page " + this.hook);
        //this.mobclickAgent.onPageBegin(this.umengPage);
    };
    HookDirective.prototype.ngOnDestroy = function () {
        //this.mobclickAgent.onPageEnd(this.umengPage);
    };
    return HookDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hook'),
    __metadata("design:type", String)
], HookDirective.prototype, "hook", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], HookDirective.prototype, "loading", void 0);
HookDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[hook]' // Attribute selector
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_httpHandler__["a" /* HttpHandler */]])
], HookDirective);

//# sourceMappingURL=hook.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__httpHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_static__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
用户
*/






var UserProvider = (function () {
    function UserProvider(http, storage, constant, httpHandler, staticPro) {
        this.http = http;
        this.storage = storage;
        this.constant = constant;
        this.httpHandler = httpHandler;
        this.staticPro = staticPro;
        //userInfo:any={};
        this.URL = ""; //this.http.domin + "login";
    }
    //初始数据
    UserProvider.prototype.initialize = function (userInfo, login) {
        var _this = this;
        this.setLogin(login);
        this.http.setToken(userInfo.token);
        return Promise.all([this.staticPro.getAddressName(userInfo.city), this.staticPro.getGradeName(userInfo.grade)])
            .then(function (ress) {
            console.log(ress);
            userInfo.cityName = ress[0];
            userInfo.gradeName = ress[1];
            return _this.setUserInfo(userInfo);
        });
    };
    UserProvider.prototype.login = function (user) {
        //友盟登陆统计
        //this.mobclickAgent.profileSignInWithPUID(user.usercode);
        return this.http.post(this.URL + 'login', user, true);
    };
    UserProvider.prototype.userInfo = function () {
        return this.http.get(this.URL + 'userinfo/getinfo');
    };
    UserProvider.prototype.logout = function () {
        var _this = this;
        //友盟登出统计
        //this.mobclickAgent.profileSignOff();
        this.storage.remove(this.constant.storage.USERINFO);
        this.storage.remove(this.constant.storage.ACCOUNT);
        this.httpHandler.handleAuth();
        return this.getLogin().then(function (res) {
            return res && _this.setLogin({ usercode: res.usercode });
        });
    };
    UserProvider.prototype.setUserInfo = function (userInfo) {
        this.storage.set(this.constant.storage.USERINFO, userInfo);
    };
    UserProvider.prototype.setLogin = function (login) {
        return this.storage.set(this.constant.storage.ACCOUNT, login);
    };
    UserProvider.prototype.getLogin = function () {
        return this.storage.get(this.constant.storage.ACCOUNT);
    };
    UserProvider.prototype.getUserInfo = function () {
        return this.storage.get(this.constant.storage.USERINFO);
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* Constant */],
        __WEBPACK_IMPORTED_MODULE_4__httpHandler__["a" /* HttpHandler */],
        __WEBPACK_IMPORTED_MODULE_5__static_static__["a" /* StaticProvider */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 *本项目中用到API访问控制，思路是除了公开API，其他的都需要用token去访问，而这个token是和用户挂钩的，
 *在登陆成功就生成了，调用系统功能时每个人必须带上自己的token，否则API返回401.
 *实现思路是：登录时返回用户信息，其中包含token存储在本地，以后调用时从本地取出，
 *连同请求一起发给服务器。要实现4种请求
 *httpGetWithAuth、httpGetNoAuth、httpPostNoAuth、httpPostWithAuth
 */
var HttpProvider = (function () {
    function HttpProvider(http, nativeHttp, handleService, platform) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.handleService = handleService;
        this.platform = platform;
        this.version = "1.0.0";
        this.domin = 'http://studentapp.septnet.cn/';
        //this.init();
        this.isNative = this.platform.is('mobile') && !this.platform.is('mobileweb');
        this.initialize(this.version);
    }
    HttpProvider.prototype.enableSSL = function () {
        if (this.isNative && this.domin.indexOf('https') > -1) {
            this.nativeHttp.enableSSLPinning(true);
            return this.nativeHttp.acceptAllCerts(true);
        }
        else {
            return Promise.resolve();
        }
    };
    HttpProvider.prototype.initialize = function (version) {
        this.setVersion(version);
        if (this.isNative) {
            //真机环境
            this.get = this.nativeGet;
            this.post = this.nativePost;
        }
        else {
            //web环境
            this.domin = window.location.origin + '/';
            this.get = this.webGet;
            this.post = this.webPost;
        }
        return this.enableSSL();
    };
    HttpProvider.prototype.setToken = function (token) {
        this.token = token;
    };
    HttpProvider.prototype.setVersion = function (version) {
        this.version = version;
    };
    /*auto url for develop*/
    HttpProvider.prototype.url = function (url) {
        return this.domin + url;
    };
    HttpProvider.prototype.json = function (res) {
        //console.log(JSON.stringify(res));
        var data = {};
        try {
            if (res.status >= 400) {
                //return this.handleService.handleMessage('请查看网络是否已经链接');
                throw { status: 600, message: '请查看网络是否连接' };
            }
            if (res.data) {
                data = JSON.parse(res.data);
            }
            else {
                data = res.json();
            }
        }
        catch (ex) {
            return this.handleService.handleError(ex);
        }
        return this.handleService.extractData(data);
    };
    /*
     * http get sdk 请求
     *
     * @param url: string,
     * @param body:object，
     * @param headers:Headers
     */
    HttpProvider.prototype.nativeGet = function (url, body, inject) {
        var _this = this;
        body = body || {};
        url = this.url(url);
        return this.nativeHttp.get(url + '?' + this.toParams(body), {}, { Token: this.token, version: this.version })
            .then(function (res) { return _this.json(res); })
            .catch(function (err) { return _this.catchError(err, inject); });
    };
    /*
     * xmlhttprequest get 请求
     *
     * @param url: string,
     * @param body:object，
     * @param headers:Headers
     */
    HttpProvider.prototype.webGet = function (url, body, inject) {
        var _this = this;
        body = body || {};
        url = this.url(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Version', this.version);
        this.token && headers.append('Token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url + '?' + this.toParams(body), options)
            .toPromise()
            .then(function (res) { return _this.json(res); })
            .catch(function (err) { return _this.catchError(err, inject); });
    };
    /*
     * http post sdk 请求
     *
     * @param url: string,
     * @param body:object，
     * @param headers:Headers
     */
    HttpProvider.prototype.nativePost = function (url, body, inject) {
        var _this = this;
        body = body || {};
        url = this.url(url);
        return this.nativeHttp.post(url, body, { Token: this.token, version: this.version })
            .then(function (res) { return _this.json(res); })
            .catch(function (err) { return _this.catchError(err, inject); });
    };
    /*
     * xmlhttprequest post 请求
     *
     * @param url: string,
     * @param body:object，
     * @param headers:Headers
     */
    HttpProvider.prototype.webPost = function (url, body, inject) {
        var _this = this;
        body = body || {};
        url = this.url(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('Version', this.version);
        this.token && headers.append('Token', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, this.toParams(body), options)
            .toPromise()
            .then(function (res) { return _this.json(res); })
            .catch(function (err) { return _this.catchError(err, inject); });
    };
    HttpProvider.prototype.toParams = function (obj) {
        if (typeof obj == 'undefined') {
            return '';
        }
        var ret = [];
        for (var key in obj) {
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    };
    HttpProvider.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    HttpProvider.prototype.catchError = function (err, inject) {
        //autoCompletethis.han
        if (inject) {
            throw err;
        }
        else {
            this.handleService.handleError(err);
        }
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
        __WEBPACK_IMPORTED_MODULE_3__httpHandler__["a" /* HttpHandler */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */]])
], HttpProvider);

//# sourceMappingURL=http.js.map

/***/ })

},[451]);
//# sourceMappingURL=main.js.map