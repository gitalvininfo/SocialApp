import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../service/auth/auth.service'
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

  constructor(private http: HttpClient, private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error) {
    this.error = error.error.errors
  }

  ngOnInit() {
  }

}
