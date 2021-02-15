import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { StoreComponent } from './components/store/store.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { User } from './models/user';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'teams', component: TeamsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cuidadores', component: KeepersComponent},
    {path: 'home', component: HomeComponent},
    {path: 'store', component: StoreComponent},
    {path: 'signup', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: UserEditComponent},
    {path: 'team/:id', component: TeamDetailComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);