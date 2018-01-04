import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
    { path: "customers/add", component: CustomerComponent, canActivate: [AuthGuard] },
    { path: "customers/edit/:id", component: CustomerComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);