var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = GLOBAL.url;
    }
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers: headers })
            .pipe(map(function (res) { return res.json(); }));
    };
    UserService.prototype.sign_up = function (user_to_login, get_token) {
        if (get_token === void 0) { get_token = null; }
        if (get_token != null) {
            user_to_login.gettoken = get_token;
        }
        var params = JSON.stringify(user_to_login);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers }).pipe(map(function (res) { return res.json(); }));
    };
    UserService.prototype.get_identity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.get_token = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService.prototype.update_user = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.get_token()
        });
        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, { headers: headers }).pipe(map(function (res) { return res.json(); }));
    };
    UserService.prototype.get_keepers = function () {
        return this._http.get(this.url + 'keepers')
            .pipe(map(function (res) { return res.json(); }));
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map