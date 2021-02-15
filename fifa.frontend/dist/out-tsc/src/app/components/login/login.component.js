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
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { fadeIn } from '../../components/animation';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Login';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login component cargado');
        console.log(localStorage.getItem('identity'));
        console.log(localStorage.getItem('token'));
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.sign_up(this.user).subscribe(function (response) {
            _this.indentity = response.user;
            if (!_this.indentity || !_this.indentity._id) {
                _this.status = 'success';
            }
            else {
                _this.indentity.password = '';
                localStorage.setItem('identity', JSON.stringify(_this.indentity));
                _this._userService.sign_up(_this.user, 'true').subscribe(function (response) {
                    _this.token = response.token;
                    if (_this.token.length <= 0) {
                        alert("El token no se ha generado");
                    }
                    else {
                        localStorage.setItem('token', _this.token);
                        _this.status = 'success';
                        _this._router.navigate(['/']);
                    }
                }, function (error) {
                    var error_message = error;
                    if (error_message != null) {
                        var body = JSON.parse(error._body);
                        _this.status = 'error';
                    }
                });
            }
        }, function (error) {
            var error_message = error;
            if (error_message != null) {
                var body = JSON.parse(error._body);
                _this.status = 'error';
            }
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'login',
            templateUrl: './login.component.html',
            providers: [UserService],
            animations: [fadeIn]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map