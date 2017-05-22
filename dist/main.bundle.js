var ac_main =
webpackJsonpac__name_([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });






var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authUrl = 'http://138.68.82.110/api-token-auth/';
    }
    AuthService.prototype.auth = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers }); // Create a request option
        var bodyString = JSON.stringify(user);
        this.http.post(this.authUrl, bodyString, options)
            .subscribe(function (t) { return sessionStorage.token = t.json().token; });
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
], AuthService);



/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(204)

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
/**
 * Angular 2
 */


/**
 * Environment Providers
 */
var PROVIDERS = [];
/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    /**
     * Production
     */
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    /**
     * Development
     */
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(205)

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });


var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        /**
         * Already return a clone of the current state.
         */
        get: function () {
            return this._state = this._clone(this._state);
        },
        /**
         * Never allow mutation
         */
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        /**
         * Use our state getter for the clone.
         */
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        /**
         * Internally mutate our state.
         */
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        /**
         * Simple object clone.
         */
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], AppState);



/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrComponent; });



var QrComponent = (function () {
    function QrComponent(qrService) {
        this.qrService = qrService;
    }
    QrComponent.prototype.ngOnInit = function () {
        this.getQr();
    };
    QrComponent.prototype.getQr = function () {
        var _this = this;
        this.qrService.getQr()
            .subscribe(function (qrCode) {
            _this.qrCode = qrCode.json().img;
        });
    };
    return QrComponent;
}());
QrComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'qr',
        template: __webpack_require__(77)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__qr_service__["a" /* QrService */]])
], QrComponent);



/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrService; });



var QrService = (function () {
    function QrService(http) {
        this.http = http;
        this.qrUrl = 'http://138.68.82.110/qr/';
    }
    QrService.prototype.getQr = function () {
        return this.http.get(this.qrUrl);
    };
    return QrService;
}());
QrService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]])
], QrService);



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(42)

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_component__ = __webpack_require__(65);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__task_component__["a"]; });



/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });





var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.tasksUrl = 'http://138.68.82.110/tasks/';
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.tasksUrl);
    };
    return TaskService;
}());
TaskService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"]])
], TaskService);



/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(405)

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(413)

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(419)

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(435)

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(468)

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(474)

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(73)

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0)

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(201)

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(62)

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/**
 * App
 */



/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(203)

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });




var AppComponent = (function () {
    function AppComponent(appState, authService) {
        this.appState = appState;
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(82)
        ],
        template: __webpack_require__(75)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */],
        __WEBPACK_IMPORTED_MODULE_3__login_auth_auth_service__["a" /* AuthService */]])
], AppComponent);



/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angularclass_hmr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_resolver__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__no_content__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__qr_qr_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles_styles_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__styles_headings_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__styles_headings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_auth_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__task_task_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_auth_auth_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__qr_qr_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });









/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component













// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_12__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_20__login_auth_auth_service__["a" /* AuthService */],
    __WEBPACK_IMPORTED_MODULE_21__task_task_service__["a" /* TaskService */],
    __WEBPACK_IMPORTED_MODULE_23__qr_qr_service__["a" /* QrService */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        /**
         * Set state
         */
        this.appState._state = store.state;
        /**
         * Set input values
         */
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        /**
         * Save state
         */
        var state = this.appState._state;
        store.state = state;
        /**
         * Recreate root elements
         */
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angularclass_hmr__["createNewHosts"])(cmpLocation);
        /**
         * Save input values
         */
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angularclass_hmr__["createInputTransfer"])();
        /**
         * Remove styles
         */
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        /**
         * Display new elements
         */
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__task__["a" /* TaskComponent */],
            __WEBPACK_IMPORTED_MODULE_17__qr_qr_component__["a" /* QrComponent */],
            __WEBPACK_IMPORTED_MODULE_16__no_content__["a" /* NoContentComponent */],
        ],
        /**
         * Import Angular's modules.
         */
        imports: [
            __WEBPACK_IMPORTED_MODULE_22__login_auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_8__angular_router__["PreloadAllModules"] })
        ],
        /**
         * Expose our Services and Providers into Angular's dependency injection.
         */
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });




var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

/**
 * An array of services to resolve routes with data.
 */
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });



var ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginComponent */] },
    { path: 'task', component: __WEBPACK_IMPORTED_MODULE_0__task__["a" /* TaskComponent */] },
    { path: 'qr', component: __WEBPACK_IMPORTED_MODULE_2__qr__["a" /* QrComponent */] }
    // { path: '**',    component: NoContentComponent },
];


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });




function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'JWT',
        tokenGetter: (function () { return sessionStorage.getItem('token'); }),
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]]
            }
        ]
    })
], AuthModule);



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });



// import {NgForm} from '@angular/forms/src/forms';


var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.userForm = fb.group({
            username: '',
            password: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    LoginComponent.prototype.auth = function (value) {
        this.authService.auth(value);
        this.router.navigate(['/task']);
    };
    return LoginComponent;
}());
LoginComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(76)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
], LoginComponent);



/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qr_component__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__qr_component__["a"]; });



/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });



var TaskComponent = (function () {
    /**
     * Set our default values
     */
    /**
     * TypeScript public modifiers
     */
    function TaskComponent(taskService) {
        this.taskService = taskService;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.getTasks();
        /**
         * this.title.getData().subscribe(data => this.data = data);
         */
    };
    TaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks.json();
        });
    };
    return TaskComponent;
}());
TaskComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        /**
         * The selector is what angular internally uses
         * for `document.querySelectorAll(selector)` in our index.html
         * where, in this case, selector is the string 'task'.
         */
        selector: 'task',
        /**
         * We need to tell Angular's Dependency Injection which providers are in our app.
         */
        /**
         * Every Angular template is first compiled by the browser before Angular runs it's compiler.
         */
        template: __webpack_require__(78)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]])
], TaskComponent);



/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/**
 * Angular bootstrapping
 */



/**
 * App Module
 * our top level module that holds all of our components
 */

/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(202)

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #00838F;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n", ""]);

// exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\na.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "h1 {\n  color: #00BCD4;\n}", ""]);

// exports


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav>\n    <div class=\"nav-wrapper\">\n      <div class=\"brand-logo center\">qrLocker</div>\n      <ul *ngIf=\"authService.loggedIn()\" class=\"right hide-on-med-and-down\">\n        <li><a class=\"waves-effect waves-light btn\" (click)=\"logout()\">Logout<i class=\"material-icons left\">input</i></a></li>\n      </ul>\n    </div>\n  </nav>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s6 offset-s3\">\n    <div id=\"login-page\" class=\"row\">\n      <div class=\"col s12 z-depth-4 card-panel\">\n        <form class=\"login-form\" (ngSubmit)=\"auth(userForm.value)\" [formGroup]=\"userForm\">\n          <div class=\"row margin\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-social-person-outline prefix\"></i>\n              <input id=\"username\" type=\"text\" [formControl]=\"userForm.controls['username']\">\n              <label for=\"username\" class=\"center-align\">Username</label>\n            </div>\n          </div>\n          <div class=\"row margin\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-lock-outline prefix\"></i>\n              <input id=\"password\" type=\"password\" [formControl]=\"userForm.controls['password']\">\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n          <!--<div class=\"row\">-->\n            <!--<div class=\"input-field col s12 m12 l12  login-text\">-->\n              <!--<input type=\"checkbox\" id=\"remember-me\" />-->\n              <!--<label for=\"remember-me\">Remember me</label>-->\n            <!--</div>-->\n          <!--</div>-->\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <button type=\"submit\" class=\"btn waves-effect waves-light col s12\">Login</button>\n            </div>\n          </div>\n          <!--<div class=\"row\">-->\n            <!--<div class=\"input-field col s6 m6 l6\">-->\n              <!--<p class=\"margin medium-small\"><a href=\"page-register.html\">Register Now!</a></p>-->\n            <!--</div>-->\n            <!--<div class=\"input-field col s6 m6 l6\">-->\n              <!--<p class=\"margin right-align medium-small\"><a href=\"page-forgot-password.html\">Forgot password ?</a></p>-->\n            <!--</div>-->\n          <!--</div>-->\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "<style>\n  img {\n    width: 100%;\n  }\n</style>\n<div class=\"row\">\n  <div class=\"col s6 offset-s3\">\n    <img src=\"{{qrCode}}\">\n  </div>\n</div>\n"

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "<ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n  <li *ngFor=\"let task of tasks\">\n    <div class=\"collapsible-header\">{{ task.title }}</div>\n    <div class=\"collapsible-body\"><span>{{ task.text }}</span></div>\n  </li>\n</ul>\n"

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(24)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(24)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(72);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

},[66]);
//# sourceMappingURL=main.bundle.js.map