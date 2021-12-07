import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;

  constructor(public httpClient:HttpClient) { }

  getListadoTorneos():Observable<any>{
    const query = 'alltorneos'; 
    let torneos = this.httpClient
    .post(
      `${this.API_URL}${query}`,
      {headers: this.headers}
    );
    //console.log(torneos);
    return torneos;
  }

  getTorneosDisponibles(idequipo:any):Observable<any>{
    const query = 'torneosdisponibles'; 

    const body = {
      idequipo : idequipo
    }

    let torneos = this.httpClient
    .post(
      `${this.API_URL}${query}`, body,
      {headers: this.headers}
    );
    //console.log(torneos);
    return torneos;
  }

  storeParticipacion(objetoTorneo: any, objetoEquipo: any):Observable<any>{
    const query = 'participartorneo'; 
    let objetoRequest = {
      idequipo: objetoEquipo.idusuario,
      idtorneo: objetoTorneo.idtorneo,
      puntostorneo: 0,
      estado: 0,
    };
    let torneos = this.httpClient
    .post(
      `${this.API_URL}${query}`, objetoRequest,
      {headers: this.headers}
    );
    //console.log(torneos);
    return torneos;
  }
}
