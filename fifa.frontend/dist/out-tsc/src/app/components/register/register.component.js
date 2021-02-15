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
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { fadeIn } from '../../components/animation';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Register';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
        this.shown = 'false';
    }
    RegisterComponent.prototype.validateSignUpInfo = function () {
        this.errorMessage = '';
        this.status = '';
        if (!this.user.name || !this.user.surname || !this.user.password || !this.user.email ||
            this.user.name.trim() === '' || this.user.surname.trim() === '' ||
            this.user.password.trim() === '' || this.user.email.trim() === '') {
            this.errorMessage = 'Please fill all the fields in the registration form since all are required tor register at the Zoo';
            this.status = 'error';
            return false;
        }
        if (this.user.password !== this.cPassword) {
            this.errorMessage = 'The passwords you entered didn\'t match.  Please try again.';
            this.status = 'error';
            return false;
        }
        if (!this.validateEmail()) {
            this.errorMessage = 'The email you entered is not a valid email.  Please try again.';
            this.status = 'error';
            return false;
        }
        if (!this.validatePassword()) {
            this.errorMessage = "Your password needs to be at least eight characters long,\n                combine upper case and lower case letters, include a number, and a one of these\n                three special characters (@, ?. or !).";
            this.status = 'error';
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.validateSignUpInfo()) {
            this._userService.register(this.user).subscribe(function (response) {
                if (response.user._id) {
                    _this.status = 'success';
                    _this.user = new User('', '', '', '', '', 'ROLE_USER', '');
                    _this.shown = 'true';
                }
                else {
                    _this.status = 'error';
                }
            }, function (error) {
                //                console.log(<any>error);
                _this.status = 'error';
            });
        }
    };
    RegisterComponent.prototype.validateEmail = function () {
        // tslint:disable-next-line: max-line-length
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.user.email);
    };
    RegisterComponent.prototype.validatePassword = function () {
        // tslint:disable-next-line: max-line-length
        var re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@\?])(?=.{8,})');
        return re.test(this.user.password);
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'register',
            templateUrl: './register.component.html',
            providers: [UserService],
            animations: [fadeIn]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map