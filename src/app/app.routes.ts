import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './pages/page/page.component';
import { ListBuzonesComponent } from './pages/list-buzones/list-buzones.component';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginGuard } from './services/login-guard.guard';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ListPackagesComponent } from './pages/list-packages/list-packages.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AddPackageComponent } from './add-packade/add-package.component';





const appRoutes: Routes = [
    {
        path: '',
        component: PageComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'list-buzones', component: ListBuzonesComponent},
            { path: 'dashboard', component: DashboardComponent},
            { path: 'perfil', component: PerfilComponent},
            { path: 'new-list', component: NewListComponent},
            { path: 'packages', component: PackagesComponent},
            { path: 'list-packages', component: ListPackagesComponent},
            { path: 'payment', component: PaymentComponent},
            { path: 'add-package/:id', component: AddPackageComponent},














            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

   // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
