import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../service/auth/auth.service';
import {TokenService} from '../../service/token/token.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	public form = {
		email: null,
		name: null,
		password: null,
		password_confirmation: null
	}

	public error = [];

  constructor(private http: HttpClient, private authService: AuthService, private token: TokenService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

   handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error) {
    this.error = error.error.errors
  }

  ngOnInit() {
    if (this.handleResponse) {
    // console.log('success login')  
    }
  }

}
