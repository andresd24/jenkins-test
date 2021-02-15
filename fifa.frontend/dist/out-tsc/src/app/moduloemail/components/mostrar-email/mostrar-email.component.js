var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var MostrarEmailComponent = /** @class */ (function () {
    function MostrarEmailComponent() {
        this.title = 'Mostrar email';
    }
    MostrarEmailComponent.prototype.ngOnInit = function () {
        this.emailContacto = localStorage.getItem('emailContacto');
    };
    MostrarEmailComponent.prototype.ngDoCheck = function () {
        this.emailContacto = localStorage.getItem('emailContacto');
    };
    MostrarEmailComponent.prototype.borrarEmail = function () {
        localStorage.removeItem('emailContacto');
        localStorage.clear;
        this.emailContacto = null;
    };
    MostrarEmailComponent = __decorate([
        Component({
            selector: 'mostrar-email',
            template: "\n        <h4>{{title}}</h4>\n\n        <span *ngIf=\"emailContacto\">\n            <strong>Email de contacto:</strong> {{emailContacto}}\n            <button (click)=\"borrarEmail()\">Eliminar email de contacto</button>\n        </span>\n  ",
        })
    ], MostrarEmailComponent);
    return MostrarEmailComponent;
}());
export { MostrarEmailComponent };
//# sourceMappingURL=mostrar-email.component.js.map