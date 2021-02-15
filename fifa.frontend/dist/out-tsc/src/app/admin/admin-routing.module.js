var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/teams/teams.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminGuard } from '../services/admin.guard';
var adminRoutes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent },
            { path: 'editar/:id', component: EditComponent }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild(adminRoutes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map