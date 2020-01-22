import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {TokenService} from '../../service/token/token.service';
@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {

	private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
	authStatus = this.loggedIn.asObservable();

	changeAuthStatus(value: boolean) {
		this.loggedIn.next(value);
	}

  constructor(private token: TokenService) { }
}
