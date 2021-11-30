import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitarJugadoresService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;

  constructor(
    public httpClient:HttpClient
  ) { }


  getJugadores():Observable<any>{
    const query = 'alljugadoresnopertenece'; 
    return this.httpClient
    .post(`${this.API_URL}${query}`,
      {headers: this.headers});
  }

  enviarInvitaciones(jugadores:any):Observable<any>{
    const query = 'invitaralequipo'; 
    return this.httpClient
    .post(`${this.API_URL}${query}`, jugadores,
      {headers: this.headers});
  }
}
