var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';
var ModuloemailModule = /** @class */ (function () {
    function ModuloemailModule() {
    }
    ModuloemailModule = __decorate([
        NgModule({
            declarations: [
                GuardarEmailComponent,
                MostrarEmailComponent,
                MainEmailComponent
            ],
            exports: [MainEmailComponent],
            imports: [
                CommonModule,
                FormsModule
            ]
        })
    ], ModuloemailModule);
    return ModuloemailModule;
}());
export { ModuloemailModule };
//# sourceMappingURL=moduloemail.module.js.map