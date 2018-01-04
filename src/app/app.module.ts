import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { CustomerService } from './services/customer.service';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [
    AuthGuard,
    UserService,
    AlertService,
    AuthenticationService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



