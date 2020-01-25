import { ResponseResetComponent } from './../../pages/password/response-reset/response-reset.component';
import { RequestResetComponent } from './../../pages/password/request-reset/request-reset.component';
import { Routes, CanActivate } from '@angular/router';
import {AfterloginService} from '../../service/afterlogin/afterlogin.service';
import {BeforeloginService} from '../../service/beforelogin/beforelogin.service';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { 
		path: 'login', 
	    component: LoginComponent, 
	    // canActivate: [BeforeloginService] 
	},

    { 
    	path: 'register', 
    	component: RegisterComponent,
    	// canActivate: [AfterloginService]
 	},

    { 
    	path: 'request-password-reset', 
    	component: RequestResetComponent,
    	// canActivate: [AfterloginService]

    },

    { 
    	path: 'response-password-reset', 
    	component: ResponseResetComponent,
    	// canActivate: [AfterloginService] 
    }
];
