var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from './services/global';
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Fifa 2020 Web Application';
        this.url = GLOBAL.url;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.get_identity();
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.identity = this._userService.get_identity();
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.identity = null;
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map