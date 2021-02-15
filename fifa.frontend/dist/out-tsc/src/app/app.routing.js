import { RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'teams', component: TeamsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cuidadores', component: KeepersComponent },
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: UserEditComponent },
    { path: 'team/:id', component: TeamDetailComponent },
    { path: '**', component: HomeComponent }
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map