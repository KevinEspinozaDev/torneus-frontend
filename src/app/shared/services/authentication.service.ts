import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user:any;

  constructor(
    private userService: UserService
  ) { }

  //(email, password): Observable<any>
  login(email:any, password:any): any{
    //const query = `autenticar/login`;
    //const url = this.API_URL + query;

    if (email == "email@gmail.com" && password == 123456789) {
      /* TOKEN */
      let userData = [
        {
          token: "torneus-token",
          idRol: 2,
          nombre: "Kevin",
          apellido: "Espinoza"
        }
      ];

      this.setUser(userData);

      return userData;
    }else{
      return false;
    }
    //return this.http.post<any>(url, formData, {'headers':this.headers});
  }

  isUserLoged(): boolean {
    const token: any = localStorage.getItem('torneus-token');
    //const isExpired = this.jwtHelper.isTokenExpired(accessToken);
    //console.log(accessToken)
    if (token) {
      this.setDataLogin(token);
      return true;
    } else {
      return false;
    }
  }
  

  /* data del usuario se guarda en localStorage */
  setDataLogin(data:any): any{
    localStorage.setItem('torneus-token', data[0].token);
  }
  setUser(user:any): void {
    this.user = user;
    //this.userService.getUserConfig();
    this.userService.setCurrentUser(user);
  }

  logOut(): void {
    //const query = `usuario/logout`;
    //const url = this.API_URL + query;

    /*this.http.post<any>(url, {}).subscribe(
      res => {
        localStorage.removeItem('cpen-token');
        this.setUser(undefined);
        window.location.reload();
      },
      err => {
        localStorage.removeItem('cpen-token');
        this.setUser(undefined);
        window.location.reload();
      }); */
      localStorage.removeItem('torneus-token');
      this.setUser(undefined);
      window.location.reload();
  }
}
