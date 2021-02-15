var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var MainEmailComponent = /** @class */ (function () {
    function MainEmailComponent() {
        this.title = 'Modulo de emails';
    }
    MainEmailComponent.prototype.ngOnInit = function () {
        console.log("componente principal del modulo cargado");
    };
    MainEmailComponent = __decorate([
        Component({
            selector: 'main-email',
            template: "\n    <div class=\"panel panel-default\">\n    <h1>{{title}}</h1>\n    <mostrar-email></mostrar-email>\n    <guardar-email></guardar-email>\n    </div>\n  ",
        })
    ], MainEmailComponent);
    return MainEmailComponent;
}());
export { MainEmailComponent };
//# sourceMappingURL=main-email.component.js.map