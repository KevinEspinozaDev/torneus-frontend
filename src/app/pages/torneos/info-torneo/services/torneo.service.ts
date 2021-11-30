import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;

  constructor(public httpClient:HttpClient) { }

  

  getDataTorneo(idtorneo: any):Observable<any>{
    const query = 'gettorneobyid'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let torneo = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idtorneo: idtorneo},
      {headers: this.headers}
    );
    console.log(torneo);
    return torneo;
  }

  setFixture(idtorneo:any, objetoVersus: any):Observable<any>{
    const query = 'setparticipantesxtorneo/'+idtorneo; 
    //let params = new HttpParams().set('idusuario', idusuario);
    return this.httpClient
    .post(
      `${this.API_URL}${query}`, objetoVersus,
      {headers: this.headers}
    );
  }
}
