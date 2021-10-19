import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  flag: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ){
    this.flag = false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUserLogged = this.authenticationService.isUserLoged();
    
    if (isUserLogged) {
      // logged in so return true
      this.flag = true;
    } else {
      // User not logged
      this.flag = false;
      this.router.navigate(['login']);
    }
    return this.flag;
  
  }
  
}
