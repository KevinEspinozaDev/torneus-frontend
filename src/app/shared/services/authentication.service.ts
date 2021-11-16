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
      this.setToken(token);
      return true;
    } else {
      return false;
    }
  }
  

  /* data del usuario se guarda en localStorage */
  setSessionData(data:any): any{
    console.log(data[1])
    localStorage.setItem('torneus-id', data[1].idusuario);
    localStorage.setItem('torneus-username', data[1].nametorneus);
    
    if (data[1].nametorneus == 'JugadorTestingPro') {
      localStorage.setItem('torneus-idrol', '2');
    }else if(data[1].nametorneus == 'Equipo Testing'){
      localStorage.setItem('torneus-idrol', '3');

    }
    
    this.setToken(data[0].original.access_token);
    //localStorage.setItem('nametorneus', data.access_token);
  }
  getSessionData():any{
    const data = {
      idusuario : localStorage.getItem('torneus-id'),
      idrol : localStorage.getItem('torneus-idrol'),
      username : localStorage.getItem('torneus-username'),
      token : localStorage.getItem('torneus-token'),
    } 

    return data;
  }
  setUser(user:any): void {
    this.user = user;
    //this.userService.getUserConfig();
    this.userService.setCurrentUser(user);
  }

  setToken(token:any): void{
    localStorage.setItem('torneus-token', token);
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
      localStorage.removeItem('torneus-idrol');
      localStorage.removeItem('torneus-username');

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
