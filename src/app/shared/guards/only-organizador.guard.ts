import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyOrganizadorGuard implements CanActivate {
  flag: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
  ){
    this.flag = false;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const user = this.userService.getCurrentUser();
    
    if (user.idrol != '4') {
      this.flag = false;
      this.router.navigate(['/']);
    } else {
      // User not logged
      this.flag = true;
    }
    return this.flag;
  }
  
}
