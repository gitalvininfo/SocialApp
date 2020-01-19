import { ResponseResetComponent } from './../../pages/password/response-reset/response-reset.component';
import { RequestResetComponent } from './../../pages/password/request-reset/request-reset.component';
import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'request-password-reset', component: RequestResetComponent },
    { path: 'response-password-reset', component: ResponseResetComponent }


];
