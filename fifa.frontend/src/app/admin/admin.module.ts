import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';


import { TeamsAdminComponent} from './components/teams/teams-admin.component';
import { ListComponent} from './components/list/list.component';
import { AddComponent} from './components/add/add.component';
import { EditComponent} from './components/edit/edit.component';

import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    declarations: [
        TeamsAdminComponent,
        ListComponent,
        AddComponent,
        EditComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    providers: []
})

export class AdminModule { }
