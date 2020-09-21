import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTES } from './app.routes';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PageComponent } from './pages/page/page.component';
import { RegisterComponent } from './login/register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ListBuzonesComponent } from './pages/list-buzones/list-buzones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ImagenPipe } from './pipes/imagen.pipe';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { UsersPipe } from './pipes/users.pipe';
import { PackagesComponent } from './pages/packages/packages.component';
import { ListPackagesComponent } from './pages/list-packages/list-packages.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { NgxStripeModule } from 'ngx-stripe';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPackageComponent } from './add-packade/add-package.component';
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    PageComponent,
    RegisterComponent,
    DashboardComponent,
    ListBuzonesComponent,
    FilterPipe,
    ImagenPipe,
    PerfilComponent,
    JumbotronComponent,
    NewListComponent,
    UsersPipe,
    PackagesComponent,
    ListPackagesComponent,
    PaymentComponent,
    AddPackageComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    NgxStripeModule.forRoot('pk_test_51HDbtrDMdRCePFe7TrtAovIqYNmEFwlIoO5qIMRryfEmT8ZAdVAC6M8QxvXOQxXU7IHx9NUzfTJIhzQOD8w3BP1q005uN4TIoE'),
    ReactiveFormsModule,
    CurrencyMaskModule,

    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
