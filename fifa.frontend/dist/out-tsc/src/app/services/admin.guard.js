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
import { Router } from '@angular/router';
import { UserService } from './user.service';
var AdminGuard = /** @class */ (function () {
    function AdminGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AdminGuard.prototype.canActivate = function () {
        var identity = this._userService.get_identity();
        if (identity && identity.role == 'ROLE_ADMIN') {
            return true;
        }
        else {
            this._router.navigate(['/home']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router,
            UserService])
    ], AdminGuard);
    return AdminGuard;
}());
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map