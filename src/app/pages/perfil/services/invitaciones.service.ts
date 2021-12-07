import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;

  constructor(public httpClient:HttpClient) { }

  getInvitacionesPorId(idusuario:any):Observable<any>{
    const query = 'getinvitacionesequipo/'+idusuario; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let invitaciones = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idjugador: idusuario, esInvitacion: true},
      {headers: this.headers}
    );
    console.log(invitaciones);
    return invitaciones;
  }

  getEquiposPertenecePorId(idusuario:any):Observable<any>{
    const query = 'getinvitacionesequipo/'+idusuario; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let equipos = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idjugador: idusuario, esInvitacion: false},
      {headers: this.headers}
    );
    console.log(equipos);
    return equipos;
  }

  updateEquipoEstado(objetoSolicitud:any, accion:boolean):Observable<any>{
    const query = 'actualizarsolic/'+objetoSolicitud.idsolicitud; 
    //let params = new HttpParams().set('idusuario', idusuario);
    if(accion){ //Solicitud aceptada
      objetoSolicitud.estado = 1;
    }
    else{ //Solicitud rechazada
      objetoSolicitud.estado = 2;
    }
    return this.httpClient
    .put(
      `${this.API_URL}${query}`, objetoSolicitud,
      {headers: this.headers}
    );
  }
}
