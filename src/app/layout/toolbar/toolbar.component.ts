import { Component, OnInit } from '@angular/core';
import { Router,  NavigationStart, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserService } from '../../shared/services/user.service';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  currentUrl: any;
  currentSection:any;
  sessionData:any;

  rolUsuario:string;
  menu:any;

  loadingModule = false;
  message:any;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private menuService : MenuService,
  ) { 
    this.rolUsuario = this.userService.getRolPalabras();
  }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();
    this.menu = this.menuService.getMenu();
  }

  test():void{
    console.log('Test()');
  }
  

  logout(): void {
    this.authenticationService.logOut();
  }

}
