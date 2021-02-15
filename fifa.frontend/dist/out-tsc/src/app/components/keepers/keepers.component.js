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
import { fadeIn } from '../../components/animation';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
var KeepersComponent = /** @class */ (function () {
    function KeepersComponent(_userService) {
        this._userService = _userService;
        this.title = 'Cuidadores';
        this.url = GLOBAL.url;
    }
    KeepersComponent.prototype.ngOnInit = function () {
        console.log("KeepersComponent OnInit");
        this.getKeepers();
        console.log(this.keepers);
    };
    KeepersComponent.prototype.getKeepers = function () {
        var _this = this;
        this._userService.get_keepers().subscribe(function (response) {
            if (!response.users) {
                console.log("error getting keepers");
            }
            else {
                console.log("success getting keepers");
                console.log(response.users);
                _this.keepers = response.users;
            }
        }, function (error) {
            console.log(error);
        });
    };
    KeepersComponent = __decorate([
        Component({
            selector: 'keeper',
            templateUrl: './keepers.component.html',
            animations: [fadeIn],
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [UserService])
    ], KeepersComponent);
    return KeepersComponent;
}());
export { KeepersComponent };
//# sourceMappingURL=keepers.component.js.map