import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type");

  private API_URL = environment.apiUrl;

  currentUser:any;

  constructor(
    private httpClient : HttpClient
  ) { }

  setCurrentUser(data:any): void {
    localStorage.setItem('torneus-id', data[1].idusuario);
    localStorage.setItem('torneus-username', data[1].nametorneus);
    localStorage.setItem('torneus-name', data[1].name);

    localStorage.setItem('torneus-idrol', data[2][0].role_id);
  }

  getCurrentUser(): any {
    const user = {
      idusuario : localStorage.getItem('torneus-id'),
      idrol : localStorage.getItem('torneus-idrol'),
      username : localStorage.getItem('torneus-username'),
      name : localStorage.getItem('torneus-name'),
      token : localStorage.getItem('torneus-token'),
    } 

    return user;
  }

  getAllDataUser(id:any): Observable<any>{
    const query = ``;

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, {'headers':this.headers});
  }

  getRolPalabras():string{
    const user = this.getCurrentUser();
    let rolPalabra:string = '';

    if (user.idrol == 1) {
      rolPalabra = 'SysAdmin';
    }else if(user.idrol == 2){
      rolPalabra = 'Jugador';
    }else if(user.idrol == 3){
      rolPalabra = 'Equipo';
    }else if(user.idrol == 4){
      rolPalabra = 'Organizador';
    }

    return rolPalabra;
  }

  getInvitacionesEquipos():any{
    const invitaciones = [
      {
        id: "1",
        idEquipo: "1",
        nombreEquipo: "SKT T1",
        estado: "1",
        descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
    ];

    return invitaciones;
  }

  getInvitacionEquipo():any{
    const invitacion = 
      {
        id: "1",
        idEquipo: "1",
        nombreEquipo: "SKT T1",
        estado: "1",
        descripcion: "Hola! Por favor únete a nuestro equipo!"
      };

    return invitacion;
  }

  aceptarInvitacionEquipo(id:any): any{
    const equipos = [
      {
        idEquipo: id,
        nombre: "SKT T1"
      },
    ];

    return equipos;
  }

  setToken(token:any): void{
    localStorage.setItem('torneus-token', token);
  }

  getAllJugadores():Observable<any>{
    const query = `alljugadores`;

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, {'headers':this.headers});
  }
}
