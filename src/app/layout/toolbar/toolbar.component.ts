import { Component, OnInit } from '@angular/core';
import { Router,  NavigationStart, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  currentSession:boolean;
  currentUrl: any;
  currentSection:any;
  sessionData:any;

  loadingModule = false;
  message:any;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { 
    this.currentSession = false;
  }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();
  }

  

  logout(): void {
    this.authenticationService.logOut();
    this.currentSession = false;
  }

}
