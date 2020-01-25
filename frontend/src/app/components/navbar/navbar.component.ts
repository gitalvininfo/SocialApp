import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {CheckAuthService} from '../../service/checkAuth/check-auth.service';
import {TokenService} from '../../service/token/token.service';
import {ProviderService} from '../../service/provider/provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  public focus;
  public listTitles: any[];
  public location: Location;
  public name: any;
  constructor(location: Location,  private element: ElementRef, private router: Router, private checkAuthService: CheckAuthService, private token: TokenService, private providerService: ProviderService) {
    this.location = location;
  }
 
  ngOnInit() {
    this.checkAuthService.authStatus.subscribe( value => this.loggedIn = value)
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.getUserInfo();
  }


    logout() {
    // event.preventDefault();
    console.log('logout');
    this.token.remove();
    this.checkAuthService.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  getUserInfo() {
    this.providerService.getUserInfo(name).then(res => {
      console.log('res', res);
      this.name = res.user;
    })
  }

}
