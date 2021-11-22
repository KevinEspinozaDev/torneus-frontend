import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user:any;
  //_options:any;
  private API_URL: string = environment.apiUrl;

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type");

  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
    /*
    this._accessToken = this.util.getAccessToken();
    this._headers = { Authorization: `Bearer ${this._accessToken}` };
    this._options = { headers: this._headers };

    */
  ) { }

  //(email, password): Observable<any>
  login(email:any, password:any): any{
    const query = `auth/login`;
    const url = this.API_URL + query;

    const formData = {
      email : email,
      password : password
    }

    return this.httpClient.post<any>(url, formData, {'headers':this.headers});
  }

  isUserLoged(): boolean {
    const token: any = localStorage.getItem('torneus-token');
    //const isExpired = this.jwtHelper.isTokenExpired(accessToken);
    //console.log(accessToken)
    if (token) {
      this.userService.setToken(token);
      return true;
    } else {
      return false;
    }
  }
  

  /* data del usuario se guarda en localStorage */
  setSessionData(data:any): any{
    this.userService.setCurrentUser(data);
    
    this.userService.setToken(data[0].original.access_token);
    //localStorage.setItem('nametorneus', data.access_token);
  }
  getSessionData():any{
    return this.userService.getCurrentUser();
  }

  setUser(user:any): void {
    this.user = user;
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
      localStorage.removeItem('torneus-id');
      localStorage.removeItem('torneus-name');
      localStorage.removeItem('torneus-username');
      localStorage.removeItem('torneus-idrol');

      this.setUser(undefined);
      window.location.reload();
  }


  /* REGISTRO DE USUARIOS */
  register(registerBody:any){
    return this.httpClient.post(
      `${this.API_URL}auth/register`,
      registerBody,
      {'headers':this.headers}
    );
  }
}
