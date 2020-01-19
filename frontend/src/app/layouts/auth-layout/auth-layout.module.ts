import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { RequestResetComponent } from '../../pages/password/request-reset/request-reset.component';
import { ResponseResetComponent } from '../../pages/password/response-reset/response-reset.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RequestResetComponent,
    ResponseResetComponent
  ]
})
export class AuthLayoutModule { }
