var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ParquesComponent = /** @class */ (function () {
    function ParquesComponent() {
        this.pasameLosDatos = new EventEmitter();
        this.nombre = 'Tienda para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }
    ParquesComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ParquesComponent.prototype.ngOnInit = function () {
        console.log("OnInit ");
    };
    ParquesComponent.prototype.ngDoCheck = function () {
        //  console.log("DoCheck");
    };
    ParquesComponent.prototype.emitirEvento = function () {
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ParquesComponent.prototype, "nombre", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ParquesComponent.prototype, "pasameLosDatos", void 0);
    ParquesComponent = __decorate([
        Component({
            selector: 'parque',
            templateUrl: './parques.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ParquesComponent);
    return ParquesComponent;
}());
export { ParquesComponent };
//# sourceMappingURL=parques.component.js.map