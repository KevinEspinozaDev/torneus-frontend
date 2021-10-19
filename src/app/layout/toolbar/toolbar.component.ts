import { Component, OnInit } from '@angular/core';
import { Router,  NavigationStart, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  currentSession:boolean;
  currentUrl: any;
  currentSection:any;

  loadingModule = false;
  message:any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { 
    this.currentSession = false;
/*
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event) => {
      if (event instanceof NavigationStart) {
        // console.log('%cSTART', 'color: blue; font-size: 24px');
        this.loadingModule = true;
        this.message = 'Cargando Página';
      }
    }); 

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // console.log('%cEND', 'color: red; font-size: 24px');
      this.loadingModule = false;
      this.message = undefined;
      //this.currentUrl = "/documentacion/capacitaciones";
      this.currentUrl = event.urlAfterRedirects;
      this.currentSection = event.urlAfterRedirects.split('/')[event.urlAfterRedirects.split('/').length - 1];

      // this.openStep(this.sidebarItems.findIndex(nav => nav.url === `/${sectionUrl}`));
    });
    */
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logOut();
    this.currentSession = false;
  }

}
