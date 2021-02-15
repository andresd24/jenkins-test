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
var StoreComponent = /** @class */ (function () {
    // private isTimeOutEnabled = false;
    function StoreComponent() {
        this.isDislayButtonText = false;
    }
    StoreComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isDislayButtonText) {
            this.isDislayButtonText = false;
        }
        setTimeout(function () {
            _this.isDislayButtonText = true;
        }, 20000);
    };
    StoreComponent = __decorate([
        Component({
            selector: 'store',
            templateUrl: './store.component.html',
            styles: ['h1 {color: blue}']
        }),
        __metadata("design:paramtypes", [])
    ], StoreComponent);
    return StoreComponent;
}());
export { StoreComponent };
//# sourceMappingURL=store.component.js.map