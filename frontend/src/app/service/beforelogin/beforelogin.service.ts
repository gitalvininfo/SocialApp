import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from '../../service/token/token.service';
@Injectable({
  providedIn: 'root'
})
export class BeforeloginService implements CanActivate {

		  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn();
}
  constructor(private token: TokenService) { }
}
