import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {CheckAuthService} from '../../service/checkAuth/check-auth.service';
import {TokenService} from '../../service/token/token.service';


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
  constructor(location: Location,  private element: ElementRef, private router: Router, private checkAuthService: CheckAuthService, private token: TokenService) {
    this.location = location;
  }

  ngOnInit() {
    this.checkAuthService.authStatus.subscribe( value => this.loggedIn = value)
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

    logout() {
    // event.preventDefault();
    this.token.remove();
    this.checkAuthService.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }



  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
