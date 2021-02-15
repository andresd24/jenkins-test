import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { TeamsAdminComponent} from './components/teams/teams-admin.component';
import { ListComponent} from './components/list/list.component';
import { AddComponent} from './components/add/add.component';
import { EditComponent} from './components/edit/edit.component';
import { TeamDetailComponent } from '../components/team-detail/team-detail.component';
 
import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-teams',
        component: TeamsAdminComponent,
        canActivate: [ AdminGuard ],
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full'},
            { path: 'listado', component: ListComponent},
            { path: 'crear', component: AddComponent},
            { path: 'editar', component: EditComponent},
            { path: 'editar/:id', component: EditComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}
