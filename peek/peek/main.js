(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*************************************!*\
  !*** multi ./apps/peek/src/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/peek/peek/apps/peek/src/main.ts */"KJk8");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2tsG":
/*!****************************************!*\
  !*** ./apps/peek/src/app/room/room.ts ***!
  \****************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _peek_core_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @peek/core/model */ "JWxV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








class Room {
    constructor(signaling, media) {
        this.signaling = signaling;
        this.media = media;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * ajuda no controle de estado em
         * negociações evitando conflitos
         */
        this.makingOffer = false;
        this.ignoreOffer = false;
        this.isSettingRemoteAnswerPending = false;
        this.offerOptions = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true,
        };
        this.start = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.media) {
                    this.stream = yield this.media.getUserMedia();
                    for (const track of this.stream.getTracks()) {
                        this.pc.addTrack(track, this.stream);
                    }
                    this.selfView.srcObject = this.stream;
                    this.selfView.muted = true;
                }
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    makeOffer(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.makingOffer = true;
                this.pc.createOffer(options).then((offer) => {
                    const description = new RTCSessionDescription(offer);
                    this.pc.setLocalDescription(description);
                    this.signaling.send({ sender: this.sender, description });
                });
            }
            catch (err) {
                console.error(err);
            }
            finally {
                this.makingOffer = false;
            }
        });
    }
    //  A lógica de negociação perfeita, separada do resto da aplicação
    afterViewComplete() {
        // enviar qualquer candidato de gelo para o outro par
        this.pc.addEventListener('icecandidate', ({ candidate }) => {
            if (candidate) {
                this.signaling.send({ sender: this.sender, candidate });
            }
        });
        // deixe o evento "necessário para a negociação" gerar a oferta
        this.pc.addEventListener('negotiationneeded', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.makeOffer(this.offerOptions);
        }));
        this.signaling.message$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(({ sender, description, candidate }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('sender: ', sender);
            try {
                if (description) {
                    // Uma oferta pode chegar enquanto estamos ocupados processando uma resposta.
                    // Nesse caso, estaremos "estáveis" no momento em que a oferta for processada
                    // Sendo assim, apenas a partir disso devemos seguir com nossas operações.
                    const readyForOffer = !this.makingOffer &&
                        (this.pc.signalingState == 'stable' ||
                            this.isSettingRemoteAnswerPending);
                    // É uma oferta e não está aguardando nada
                    const offerCollision = description.type == _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["PeerEvent"].Offer && !readyForOffer;
                    const polite = sender === this.sender;
                    this.ignoreOffer = polite && offerCollision;
                    if (this.ignoreOffer) {
                        return;
                    }
                    this.isSettingRemoteAnswerPending =
                        description.type == _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["PeerEvent"].Answer;
                    yield this.pc.setRemoteDescription(description); // SRD reverte conforme necessário
                    this.isSettingRemoteAnswerPending = false;
                    if (description.type == _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["PeerEvent"].Offer) {
                        yield this.pc.setLocalDescription(yield this.pc.createAnswer());
                        if (this.pc.localDescription) {
                            this.signaling.send({ description: this.pc.localDescription });
                        }
                    }
                }
                else if (candidate) {
                    try {
                        yield this.pc.addIceCandidate(candidate);
                    }
                    catch (err) {
                        if (!this.ignoreOffer)
                            throw err; // Suprimir os candidatos da oferta ignorada
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        }));
    }
    hangup() {
        console.log('Ending call');
        this.stream.getTracks().forEach((t) => t.stop());
        if (this.pc) {
            this.pc.close();
            Object.defineProperties(this.pc, {});
        }
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this.stream) === null || _a === void 0 ? void 0 : _a.active) {
            this.hangup();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
Room.ɵfac = function Room_Factory(t) { return new (t || Room)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_peek_core_model__WEBPACK_IMPORTED_MODULE_1__["Signaling"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_peek_core_model__WEBPACK_IMPORTED_MODULE_1__["Media"])); };
Room.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: Room, selectors: [["ng-component"]], decls: 0, vars: 0, template: function Room_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](Room, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{ template: '' }]
    }], function () { return [{ type: _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["Signaling"] }, { type: _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["Media"] }]; }, null); })();


/***/ }),

/***/ "82kw":
/*!***********************************!*\
  !*** ./apps/peek/src/envs/env.ts ***!
  \***********************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "+Vou");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `env.ts` with `env.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const env = {
    prod: false,
    seek: 'http://localhost:3000',
    constraints: {
        audio: {
            channelCount: {
                ideal: 2,
            },
            echoCancellation: true,
            frameRate: {
                ideal: 22000,
            },
        },
        video: {
            width: {
                min: 480,
                max: 1280,
                ideal: 1280,
            },
            height: {
                min: 320,
                max: 720,
                ideal: 720,
            },
            facingMode: {
                ideal: 'user',
            },
            frameRate: {
                ideal: 60,
                min: 10,
            },
        },
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "9EZA":
/*!***********************************************************!*\
  !*** ./packs/core/peek/src/lib/shared/material.module.ts ***!
  \***********************************************************/
/*! exports provided: PeekMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeekMaterialModule", function() { return PeekMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










class PeekMaterialModule {
}
PeekMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PeekMaterialModule });
PeekMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PeekMaterialModule_Factory(t) { return new (t || PeekMaterialModule)(); }, imports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PeekMaterialModule, { exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeekMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "BG+L":
/*!***********************************************!*\
  !*** ./packs/core/model/src/lib/signaling.ts ***!
  \***********************************************/
/*! exports provided: Signaling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signaling", function() { return Signaling; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


class Signaling {
    constructor(uri) {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.message$ = this.message.asObservable();
        if (uri) {
            this.io = socket_io_client__WEBPACK_IMPORTED_MODULE_0__["connect"](uri);
            this.io.on('message', (evt) => this.message.next(evt));
        }
    }
    send(data) {
        this.io.send(data);
    }
}


/***/ }),

/***/ "Dz8H":
/*!*****************************************!*\
  !*** ./apps/peek/src/app/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "NazX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "oBC5");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room/room.component */ "NYpi");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "WF5y");
/* harmony import */ var _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @peek/core/peek */ "LwmJ");
/* harmony import */ var _peek_core_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @peek/core/model */ "JWxV");
/* harmony import */ var _room_room__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room/room */ "2tsG");
/* harmony import */ var _envs_env__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../envs/env */ "82kw");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["SIGNALING_CLIENT"],
            useValue: _envs_env__WEBPACK_IMPORTED_MODULE_12__["env"].seek,
        },
        {
            provide: _peek_core_model__WEBPACK_IMPORTED_MODULE_10__["Signaling"],
            useFactory: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["SignalingFactory"],
            deps: [_peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["SIGNALING_CLIENT"]],
        },
        {
            provide: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["MEDIA_CONSTRAINTS"],
            useValue: _envs_env__WEBPACK_IMPORTED_MODULE_12__["env"].constraints,
        },
        {
            provide: _peek_core_model__WEBPACK_IMPORTED_MODULE_10__["Media"],
            useFactory: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["MediaFactory"],
            deps: [_peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["MEDIA_CONSTRAINTS"]],
        },
    ], imports: [[
            _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["CorePeekModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
            _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["PeekMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _room_room__WEBPACK_IMPORTED_MODULE_11__["Room"], _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["CorePeekModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["PeekMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _room_room__WEBPACK_IMPORTED_MODULE_11__["Room"], _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
                imports: [
                    _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["CorePeekModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                    _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["PeekMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                ],
                providers: [
                    {
                        provide: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["SIGNALING_CLIENT"],
                        useValue: _envs_env__WEBPACK_IMPORTED_MODULE_12__["env"].seek,
                    },
                    {
                        provide: _peek_core_model__WEBPACK_IMPORTED_MODULE_10__["Signaling"],
                        useFactory: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["SignalingFactory"],
                        deps: [_peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["SIGNALING_CLIENT"]],
                    },
                    {
                        provide: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["MEDIA_CONSTRAINTS"],
                        useValue: _envs_env__WEBPACK_IMPORTED_MODULE_12__["env"].constraints,
                    },
                    {
                        provide: _peek_core_model__WEBPACK_IMPORTED_MODULE_10__["Media"],
                        useFactory: _peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["MediaFactory"],
                        deps: [_peek_core_peek__WEBPACK_IMPORTED_MODULE_9__["MEDIA_CONSTRAINTS"]],
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "EMN5":
/*!***************************************************!*\
  !*** ./packs/core/peek/src/lib/adapters/index.ts ***!
  \***************************************************/
/*! exports provided: SignalingFactory, SIGNALING_CLIENT, MediaFactory, MEDIA_CONSTRAINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signaling_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signaling.adapter */ "iYXz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalingFactory", function() { return _signaling_adapter__WEBPACK_IMPORTED_MODULE_0__["SignalingFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGNALING_CLIENT", function() { return _signaling_adapter__WEBPACK_IMPORTED_MODULE_0__["SIGNALING_CLIENT"]; });

/* harmony import */ var _media_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.adapter */ "HCGN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaFactory", function() { return _media_adapter__WEBPACK_IMPORTED_MODULE_1__["MediaFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_CONSTRAINTS", function() { return _media_adapter__WEBPACK_IMPORTED_MODULE_1__["MEDIA_CONSTRAINTS"]; });





/***/ }),

/***/ "FCfZ":
/*!*************************************************!*\
  !*** ./packs/core/peek/src/lib/shared/index.ts ***!
  \*************************************************/
/*! exports provided: PeekMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "9EZA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeekMaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_0__["PeekMaterialModule"]; });




/***/ }),

/***/ "H33b":
/*!*************************************************************************!*\
  !*** ./packs/core/peek/src/lib/components/to-peer/to-peer.component.ts ***!
  \*************************************************************************/
/*! exports provided: ToPeerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToPeerComponent", function() { return ToPeerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToPeerComponent {
    set active(value) {
        this._active = value;
    }
    get active() {
        return this._active;
    }
    get isCalling() {
        return this._active;
    }
}
ToPeerComponent.ɵfac = function ToPeerComponent_Factory(t) { return new (t || ToPeerComponent)(); };
ToPeerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToPeerComponent, selectors: [["peek-to-peer"]], hostVars: 2, hostBindings: function ToPeerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isCalling);
    } }, inputs: { active: "active" }, decls: 81, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "200", "height", "200", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["cx", "6.452", "cy", "50", "r", "3"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.5s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "0s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.5s"], ["cx", "6.452", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.5s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.5s"], ["cx", "16.129", "cy", "50", "r", "3"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.7s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.2s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.7s"], ["cx", "16.129", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.7s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.2s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.7s"], ["cx", "25.806", "cy", "50", "r", "3"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.9s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.4s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.9s"], ["cx", "25.806", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.9s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.4s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.9s"], ["cx", "35.484", "cy", "50", "r", "3"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.1s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.6s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.1s"], ["cx", "35.484", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.1s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.6s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.1s"], ["cx", "45.161", "cy", "50", "r", "3"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.3s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-0.8s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.3s"], ["cx", "45.161", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.3s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.8s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.3s"], ["cx", "54.839", "cy", "50", "r", "3"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.5s"], ["cx", "54.839", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.5s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.5s"], ["cx", "64.516", "cy", "50", "r", "3"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.7s"], ["cx", "64.516", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.7s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.2s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.7s"], ["cx", "74.194", "cy", "50", "r", "3"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.9s"], ["cx", "74.194", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.9s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.4s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-1.9s"], ["cx", "83.871", "cy", "50", "r", "3"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.1s"], ["cx", "83.871", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-3.1s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.6s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.1s"], ["cx", "93.548", "cy", "50", "r", "3"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#ffeb3b;#fff;#0b68ea", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.3s"], ["cx", "93.548", "cy", "50", "r", "3", "fill", "#fff"], ["attributeName", "r", "values", "2.4000000000000004;3.5999999999999996;2.4000000000000004", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-3.3s"], ["attributeName", "cy", "keyTimes", "0;0.5;1", "values", "32;68;32", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.8s", "keySplines", "0.5 0 0.5 1;0.5 0 0.5 1", "calcMode", "spline"], ["attributeName", "fill", "keyTimes", "0;0.5;1", "values", "#fff;#ffeb3b;#fff", "dur", "2.4s", "repeatCount", "indefinite", "begin", "-2.3s"]], template: function ToPeerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "animate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "animate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "animate", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "animate", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "animate", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "animate", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "animate", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "animate", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "animate", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "animate", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "animate", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "animate", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "animate", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "animate", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "animate", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "animate", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "animate", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "animate", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "animate", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "circle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "animate", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "animate", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "animate", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "animate", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "animate", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "animate", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "animate", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "animate", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "animate", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "animate", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "animate", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "animate", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "animate", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "animate", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "animate", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "animate", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "animate", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "animate", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "animate", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "animate", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "animate", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "circle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "animate", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "animate", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "animate", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "circle", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "animate", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "animate", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "animate", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "circle", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "animate", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "animate", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "animate", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "circle", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "animate", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "animate", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "animate", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "circle", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "animate", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "animate", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "animate", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "circle", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "animate", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "animate", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "animate", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@-webkit-keyframes slide-in-bck-br {\n  0% {\n    transform: translateZ(700px) translateY(300px) translateX(400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0) translateY(0) translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-bck-br {\n  0% {\n    transform: translateZ(700px) translateY(300px) translateX(400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0) translateY(0) translateX(0);\n    opacity: 1;\n  }\n}\n\n\n@-webkit-keyframes slide-out-bck-br {\n  0% {\n    transform: translateZ(0) translateY(0) translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateZ(-1100px) translateY(1000px) translateX(1000px);\n    opacity: 0;\n  }\n}\n@keyframes slide-out-bck-br {\n  0% {\n    transform: translateZ(0) translateY(0) translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateZ(-1100px) translateY(1000px) translateX(1000px);\n    opacity: 0;\n  }\n}\n\n\n@-webkit-keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-1000px);\n    opacity: 0;\n  }\n}\n@keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-1000px);\n    opacity: 0;\n  }\n}\n\n\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 135px;\n  height: 135px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 100%;\n  -webkit-animation: play 2s ease infinite;\n          animation: play 2s ease infinite;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-animation: slide-in-bck-br 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-bck-br 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: inherit;\n}\n.active[_nghost-%COMP%] {\n  -webkit-animation: slide-out-bck-br 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n  animation: slide-out-bck-br 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n.out[_nghost-%COMP%] {\n  -webkit-animation: slide-out-bck-br 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n  animation: slide-out-bck-br 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n@-webkit-keyframes play {\n  0% {\n    transform: scale(1);\n  }\n  15% {\n    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);\n  }\n  25% {\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 20px rgba(255, 255, 255, 0.2);\n  }\n  25% {\n    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4), 0 0 0 30px rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes play {\n  0% {\n    transform: scale(1);\n  }\n  15% {\n    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);\n  }\n  25% {\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 20px rgba(255, 255, 255, 0.2);\n  }\n  25% {\n    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4), 0 0 0 30px rgba(255, 255, 255, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvc3JjL2xpYi9fYW5pbWF0aW9ucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG8tcGVlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBS0M7RUFDQztJQUVFLGdFQUFBO0lBQ0EsVUFBQTtFQ0FGO0VERUE7SUFFRSxvREFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGO0FERUE7RUFDRTtJQUVFLGdFQUFBO0lBQ0EsVUFBQTtFQ0FGO0VERUE7SUFFRSxvREFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGO0FER0E7Ozs7O21EQUFBO0FBT0E7Ozs7RUFBQTtBQUtBO0VBQ0U7SUFFRSxvREFBQTtJQUNBLFVBQUE7RUNGRjtFRElBO0lBRUUsb0VBQUE7SUFDQSxVQUFBO0VDRkY7QUFDRjtBRElBO0VBQ0U7SUFFRSxvREFBQTtJQUNBLFVBQUE7RUNGRjtFRElBO0lBRUUsb0VBQUE7SUFDQSxVQUFBO0VDRkY7QUFDRjtBREtBOzs7OzttREFBQTtBQU9BOzs7O0VBQUE7QUFLQztFQUNDO0lBRVUsd0JBQUE7SUFDUixVQUFBO0VDSkY7RURNQTtJQUVVLDhCQUFBO0lBQ1IsVUFBQTtFQ0pGO0FBQ0Y7QURNQTtFQUNFO0lBRVUsd0JBQUE7SUFDUixVQUFBO0VDSkY7RURNQTtJQUVVLDhCQUFBO0lBQ1IsVUFBQTtFQ0pGO0FBQ0Y7QURRQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBS0M7RUFDQztJQUVVLDZCQUFBO0lBQ1IsVUFBQTtFQ1BGO0VEU0E7SUFFVSx3QkFBQTtJQUNSLFVBQUE7RUNQRjtBQUNGO0FEU0E7RUFDRTtJQUVVLDZCQUFBO0lBQ1IsVUFBQTtFQ1BGO0VEU0E7SUFFVSx3QkFBQTtJQUNSLFVBQUE7RUNQRjtBQUNGO0FBeklBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBTUEsd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxpRkFBQTtFQUVBLHlFQUFBO0FBcUlGO0FBN0lFO0VBQ0UsY0FBQTtBQStJSjtBQXZJRTtFQUNFLG1GQUFBO0VBRUEsMkVBQUE7QUF3SUo7QUFySUU7RUFDRSxtRkFBQTtFQUVBLDJFQUFBO0FBc0lKO0FBbElBO0VBQ0U7SUFDRSxtQkFBQTtFQXFJRjtFQW5JQTtJQUNFLDhDQUFBO0VBcUlGO0VBbklBO0lBQ0Usb0ZBQUE7RUFxSUY7RUFsSUE7SUFDRSxvRkFBQTtFQW9JRjtBQUNGO0FBakpBO0VBQ0U7SUFDRSxtQkFBQTtFQXFJRjtFQW5JQTtJQUNFLDhDQUFBO0VBcUlGO0VBbklBO0lBQ0Usb0ZBQUE7RUFxSUY7RUFsSUE7SUFDRSxvRkFBQTtFQW9JRjtBQUNGIiwiZmlsZSI6InRvLXBlZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0xMi0yNSAyMTo1NzozOVxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLWluLWJjay1iclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWJjay1iciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig3MDBweCkgdHJhbnNsYXRlWSgzMDBweCkgdHJhbnNsYXRlWCg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDcwMHB4KSB0cmFuc2xhdGVZKDMwMHB4KSB0cmFuc2xhdGVYKDQwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tYmNrLWJyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDcwMHB4KSB0cmFuc2xhdGVZKDMwMHB4KSB0cmFuc2xhdGVYKDQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNzAwcHgpIHRyYW5zbGF0ZVkoMzAwcHgpIHRyYW5zbGF0ZVgoNDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0xMi0yNSAyMjowOjhcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS1vdXQtYmNrLWJyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQtYmNrLWJyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTExMDBweCkgdHJhbnNsYXRlWSgxMDAwcHgpIHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTExMDBweCkgdHJhbnNsYXRlWSgxMDAwcHgpIHRyYW5zbGF0ZVgoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLW91dC1iY2stYnIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTEwMHB4KSB0cmFuc2xhdGVZKDEwMDBweCkgdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTEwMHB4KSB0cmFuc2xhdGVZKDEwMDBweCkgdHJhbnNsYXRlWCgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMS0xMyAwOjE5OjEyXG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtb3V0LXRvcFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLW91dC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLW91dC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMS0xMyAwOjIxOjE0XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtaW4tYm90dG9tXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3BhY2tzL3NoYXJlZC9zdHlsZXMvc3JjL2luZGV4JztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDEzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cblxuICBhbmltYXRpb246IHBsYXkgMnMgZWFzZSBpbmZpbml0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tYmNrLWJyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1iY2stYnIgMC42cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbiAgJi5hY3RpdmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQtYmNrLWJyIDAuNXNcbiAgICAgIGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41MykgYm90aDtcbiAgICBhbmltYXRpb246IHNsaWRlLW91dC1iY2stYnIgMC41cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpIGJvdGg7XG4gIH1cblxuICAmLm91dCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dC1iY2stYnIgMC41c1xuICAgICAgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtb3V0LWJjay1iciAwLjVzIGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41MykgYm90aDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHBsYXkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxNSUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgIDAgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gICAgICAwIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToPeerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'peek-to-peer',
                templateUrl: './to-peer.component.html',
                styleUrls: ['./to-peer.component.scss']
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['active']
        }], isCalling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }] }); })();


/***/ }),

/***/ "HCGN":
/*!***********************************************************!*\
  !*** ./packs/core/peek/src/lib/adapters/media.adapter.ts ***!
  \***********************************************************/
/*! exports provided: MediaFactory, MEDIA_CONSTRAINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFactory", function() { return MediaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_CONSTRAINTS", function() { return MEDIA_CONSTRAINTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _peek_core_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @peek/core/model */ "JWxV");


function MediaFactory(uri) {
    return new _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["Media"](uri);
}
const MEDIA_CONSTRAINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MediaConstraints');


/***/ }),

/***/ "JWxV":
/*!***************************************!*\
  !*** ./packs/core/model/src/index.ts ***!
  \***************************************/
/*! exports provided: PeerEvent, Signaling, code, Message, Media, Code, uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_peer_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/peer-event */ "vvwk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeerEvent", function() { return _lib_peer_event__WEBPACK_IMPORTED_MODULE_0__["PeerEvent"]; });

/* harmony import */ var _lib_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/signaling */ "BG+L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signaling", function() { return _lib_signaling__WEBPACK_IMPORTED_MODULE_1__["Signaling"]; });

/* harmony import */ var _lib_util_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util/code */ "oPOk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code", function() { return _lib_util_code__WEBPACK_IMPORTED_MODULE_2__["code"]; });

/* harmony import */ var _lib_payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/payload */ "kkEQ");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/message */ "XWPx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _lib_message__WEBPACK_IMPORTED_MODULE_4__["Message"]; });

/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/media */ "OC87");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return _lib_media__WEBPACK_IMPORTED_MODULE_5__["Media"]; });

/* harmony import */ var _lib_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/code */ "L47y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _lib_code__WEBPACK_IMPORTED_MODULE_6__["Code"]; });

/* harmony import */ var _lib_uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/uuid */ "YcYU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _lib_uuid__WEBPACK_IMPORTED_MODULE_7__["uuid"]; });











/***/ }),

/***/ "KJk8":
/*!*******************************!*\
  !*** ./apps/peek/src/main.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _envs_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./envs/env */ "82kw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "Dz8H");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_envs_env__WEBPACK_IMPORTED_MODULE_1__["env"].prod) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "L47y":
/*!******************************************!*\
  !*** ./packs/core/model/src/lib/code.ts ***!
  \******************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
class Code {
    constructor(code) {
        this.uid = code.split('-');
    }
}


/***/ }),

/***/ "LwmJ":
/*!**************************************!*\
  !*** ./packs/core/peek/src/index.ts ***!
  \**************************************/
/*! exports provided: CorePeekModule, ToPeerComponent, SignalingFactory, SIGNALING_CLIENT, MediaFactory, MEDIA_CONSTRAINTS, PeekMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core_peek_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core-peek.module */ "aqU7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorePeekModule", function() { return _lib_core_peek_module__WEBPACK_IMPORTED_MODULE_0__["CorePeekModule"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components */ "mB4t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToPeerComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_1__["ToPeerComponent"]; });

/* harmony import */ var _lib_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/adapters */ "EMN5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalingFactory", function() { return _lib_adapters__WEBPACK_IMPORTED_MODULE_2__["SignalingFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGNALING_CLIENT", function() { return _lib_adapters__WEBPACK_IMPORTED_MODULE_2__["SIGNALING_CLIENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaFactory", function() { return _lib_adapters__WEBPACK_IMPORTED_MODULE_2__["MediaFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_CONSTRAINTS", function() { return _lib_adapters__WEBPACK_IMPORTED_MODULE_2__["MEDIA_CONSTRAINTS"]; });

/* harmony import */ var _lib_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shared */ "FCfZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeekMaterialModule", function() { return _lib_shared__WEBPACK_IMPORTED_MODULE_3__["PeekMaterialModule"]; });







/***/ }),

/***/ "NYpi":
/*!**************************************************!*\
  !*** ./apps/peek/src/app/room/room.component.ts ***!
  \**************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room */ "2tsG");
/* harmony import */ var _peek_core_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @peek/core/model */ "JWxV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _packs_core_peek_src_lib_components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../packs/core/peek/src/lib/components/to-peer/to-peer.component */ "H33b");












const _c0 = ["selfView"];
const _c1 = ["remoteView"];
function RoomComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "peek-to-peer", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.active$) === true);
} }
const _c2 = function (a0, a1) { return { "call-start": a0, "call-end": a1 }; };
class RoomComponent extends _room__WEBPACK_IMPORTED_MODULE_3__["Room"] {
    constructor(signaling, media) {
        super(signaling, media);
        this.signaling = signaling;
        this.media = media;
        this.active = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.active$ = this.active.asObservable();
        this.restart = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.offerOptions.iceRestart = true;
            this.makeOffer(this.offerOptions);
        });
    }
    ngAfterViewInit() {
        this.sender = Object(_peek_core_model__WEBPACK_IMPORTED_MODULE_4__["uuid"])();
        this.selfView = this.selfViewRef.nativeElement;
        this.remoteView = this.remoteViewRef.nativeElement;
        this.pc = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
        });
        this.pc.addEventListener('track', ({ track, streams }) => {
            // assim que a mídia remota chegar,
            // mostre-a no elemento de vídeo remoto
            track.addEventListener('unmute', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // não defina srcObject caso já esteja definido.
                if (this.remoteView.srcObject)
                    return;
                this.remoteView.srcObject = streams[0];
                this.active.next(true);
            }));
        });
        this.afterViewComplete();
        this.start();
    }
    end() {
        this.active.next(false);
        this.hangup();
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_peek_core_model__WEBPACK_IMPORTED_MODULE_4__["Signaling"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_peek_core_model__WEBPACK_IMPORTED_MODULE_4__["Media"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["peek-room"]], viewQuery: function RoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selfViewRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.remoteViewRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 11, consts: [["class", "center", 4, "ngIf"], ["id", "remote", 3, "ngClass"], ["autoplay", ""], ["remoteView", ""], ["id", "local", 1, "mat-elevation-z2"], ["autoplay", "", "muted", ""], ["selfView", ""], ["type", "button", "mat-fab", "", "color", "warn", 3, "click"], [1, "center"], [3, "active"], ["calling", ""]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RoomComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "video", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "video", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_10_listener() { return ctx.end(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "call_end");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.active$) === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.active$) === true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.active$) === false));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _packs_core_peek_src_lib_components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_9__["ToPeerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  max-width: 150px;\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  line-height: 1.2;\n}\n#remote[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#remote.call-start[_ngcontent-%COMP%] {\n  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n#remote.call-end[_ngcontent-%COMP%] {\n  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n}\n#local[_ngcontent-%COMP%] {\n  z-index: 1;\n  left: 4px;\n  width: 240px;\n  height: auto;\n  max-width: 240px;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n  position: fixed;\n  padding: 0;\n  bottom: 4px;\n}\n#local[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: inherit;\n  height: auto;\n  object-fit: cover;\n  margin-bottom: -8px;\n}\n.mat-fab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n@media (orientation: landscape) {\n  #remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: calc(100vh - 64px);\n    object-fit: cover;\n  }\n}\n@media (orientation: portrait) {\n  #remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUVFO0VBRU8seUVBQUE7QUFBVDtBQUVFO0VBRVEsd0VBQUE7QUFBVjtBQUlBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREY7QUFFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLDhCQUFBO0lBQ0EsaUJBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InJvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuICB9XG59XG5cbiNyZW1vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJi5jYWxsLXN0YXJ0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuICB9XG4gICYuY2FsbC1lbmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoO1xuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtb3V0LXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41MykgYm90aDtcbiAgfVxufVxuXG4jbG9jYWwge1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDI0MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMDtcbiAgYm90dG9tOiA0cHg7XG4gIHZpZGVvIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgfVxufVxuLm1hdC1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgI3JlbW90ZSB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICNyZW1vdGUgdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'peek-room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.scss'],
            }]
    }], function () { return [{ type: _peek_core_model__WEBPACK_IMPORTED_MODULE_4__["Signaling"] }, { type: _peek_core_model__WEBPACK_IMPORTED_MODULE_4__["Media"] }]; }, { selfViewRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selfView']
        }], remoteViewRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['remoteView']
        }] }); })();


/***/ }),

/***/ "NazX":
/*!*************************************************!*\
  !*** ./apps/peek/src/app/app-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "WF5y");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room/room.component */ "NYpi");






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: '', pathMatch: 'full', redirectTo: 'home' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
                { path: 'room', component: _room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] },
                { path: 'room/:code', component: _room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] },
            ], {
                initialNavigation: 'enabled',
                relativeLinkResolution: 'legacy',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                        { path: '', pathMatch: 'full', redirectTo: 'home' },
                        { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
                        { path: 'room', component: _room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] },
                        { path: 'room/:code', component: _room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] },
                    ], {
                        initialNavigation: 'enabled',
                        relativeLinkResolution: 'legacy',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "OC87":
/*!*******************************************!*\
  !*** ./packs/core/model/src/lib/media.ts ***!
  \*******************************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class Media {
    constructor(constraints) {
        this.constraints = constraints;
    }
    getUserMedia(constraints) {
        return navigator.mediaDevices.getUserMedia(constraints ? constraints : this.constraints);
    }
    getDevices(deviceKind) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filter = ({ kind }) => kind === deviceKind;
            const devices = yield navigator.mediaDevices.enumerateDevices();
            return deviceKind ? devices.filter(filter) : devices;
        });
    }
    getDisplayMedia() {
        const configuration = { video: true };
        const mediaDevices = navigator.mediaDevices;
        if ('getDisplayMedia' in navigator) {
            return navigator.getDisplayMedia(configuration);
        }
        else if ('getDisplayMedia' in mediaDevices) {
            return mediaDevices.getDisplayMedia(configuration);
        }
        else {
            return mediaDevices.getUserMedia({
                video: { mediaSourcee: 'screen' },
            });
        }
    }
}


/***/ }),

/***/ "WF5y":
/*!**************************************************!*\
  !*** ./apps/peek/src/app/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["peek-home"]], decls: 9, vars: 0, consts: [[1, "home"], ["src", "assets/images/logo.svg", "alt", ""], ["mat-raised-button", "", "disabled", "", "color", "accent"], ["mat-flat-button", "", "color", "primary", "routerLink", "/room"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Usar c\u00F3digo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(breve)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Acessar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 64px;\n}\n[_nghost-%COMP%]   .home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  max-height: calc(100vh - 288px);\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUFHTjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUVKO0FBREk7RUFDRSxPQUFBO0FBR04iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5ob21lIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2NHB4O1xuICAgIGltZyB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjg4cHgpO1xuICAgIH1cbiAgfVxuICAubWF0LXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTJweDtcbiAgICAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'peek-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "XWPx":
/*!*********************************************!*\
  !*** ./packs/core/model/src/lib/message.ts ***!
  \*********************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor({ sender, description, candidate }) {
        this.sender = sender;
        this.candidate = candidate;
        this.description = description;
    }
}


/***/ }),

/***/ "YcYU":
/*!******************************************!*\
  !*** ./packs/core/model/src/lib/uuid.ts ***!
  \******************************************/
/*! exports provided: uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
function uuid() {
    function S4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}


/***/ }),

/***/ "aqU7":
/*!*****************************************************!*\
  !*** ./packs/core/peek/src/lib/core-peek.module.ts ***!
  \*****************************************************/
/*! exports provided: CorePeekModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorePeekModule", function() { return CorePeekModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/to-peer/to-peer.component */ "H33b");




class CorePeekModule {
}
CorePeekModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CorePeekModule });
CorePeekModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CorePeekModule_Factory(t) { return new (t || CorePeekModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CorePeekModule, { declarations: [_components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_2__["ToPeerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_2__["ToPeerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorePeekModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_2__["ToPeerComponent"]],
                exports: [_components_to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_2__["ToPeerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "iYXz":
/*!***************************************************************!*\
  !*** ./packs/core/peek/src/lib/adapters/signaling.adapter.ts ***!
  \***************************************************************/
/*! exports provided: SignalingFactory, SIGNALING_CLIENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalingFactory", function() { return SignalingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNALING_CLIENT", function() { return SIGNALING_CLIENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _peek_core_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @peek/core/model */ "JWxV");


function SignalingFactory(uri) {
    return new _peek_core_model__WEBPACK_IMPORTED_MODULE_1__["Signaling"](uri);
}
const SIGNALING_CLIENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Signaling');


/***/ }),

/***/ "kkEQ":
/*!*********************************************!*\
  !*** ./packs/core/model/src/lib/payload.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "mB4t":
/*!*****************************************************!*\
  !*** ./packs/core/peek/src/lib/components/index.ts ***!
  \*****************************************************/
/*! exports provided: ToPeerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-peer/to-peer.component */ "H33b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToPeerComponent", function() { return _to_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_0__["ToPeerComponent"]; });




/***/ }),

/***/ "oBC5":
/*!********************************************!*\
  !*** ./apps/peek/src/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class AppComponent {
    constructor() {
        this.title = 'peek';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["peek-root"]], decls: 14, vars: 2, consts: [["autosize", "", 1, "peek-container", 3, "hasBackdrop"], ["mode", "over", "role", "navigation", 1, "peek-sidenav"], ["drawer", ""], [1, "peek-content"], ["role", "banner"], ["mat-icon-button", "", "routerLink", "/"], ["role", "logo"], ["role", "contentinfo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Auto-resizing sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, "!");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-family: sans-serif;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]:first-child {\n  padding-left: 8px;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]:first-child   .mat-button-base[_ngcontent-%COMP%]:first-child {\n  margin-right: 8px;\n}\n[_nghost-%COMP%]   .peek-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .peek-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.peek-content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.peek-content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBQUk7RUFDRSxpQkFBQTtBQUVOO0FBQ0U7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURGO0FBRUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXG4gIC5tYXQtdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgLm1hdC1idXR0b24tYmFzZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbiAgLnBlZWstY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuXG4ucGVlay1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'peek-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oPOk":
/*!***********************************************!*\
  !*** ./packs/core/model/src/lib/util/code.ts ***!
  \***********************************************/
/*! exports provided: code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
function code() {
    function S4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return `${S4()}${S4()}-${S4()}-${S4()}`;
}


/***/ }),

/***/ "um+W":
/*!****************************************************************!*\
  !*** ./apps/peek/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "um+W";

/***/ }),

/***/ "vvwk":
/*!************************************************!*\
  !*** ./packs/core/model/src/lib/peer-event.ts ***!
  \************************************************/
/*! exports provided: PeerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerEvent", function() { return PeerEvent; });
var PeerEvent;
(function (PeerEvent) {
    PeerEvent["Connect"] = "connect";
    PeerEvent["Disconnect"] = "disconnect";
    PeerEvent["Connected"] = "connected";
    PeerEvent["Completed"] = "completed";
    PeerEvent["Offer"] = "offer";
    PeerEvent["Answer"] = "answer";
    PeerEvent["Aloha"] = "aloha";
})(PeerEvent || (PeerEvent = {}));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map