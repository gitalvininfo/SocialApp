import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../service/auth/auth.service'
import {TokenService} from '../../service/token/token.service';
import {CheckAuthService} from '../../service/checkAuth/check-auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  //define the form as object
  public form = {
    email: null,
    password: null
  }

  public error = null;
  public success = null;
  constructor(private http: HttpClient, private authService: AuthService, private token: TokenService, private router: Router, private checkAuth: CheckAuthService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.checkAuth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error) {
    this.error = error.error.error
  }


  ngOnDestroy() {
  }

}
