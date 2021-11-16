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


  getJugadores():any{
    const jugadores = [
      {
        'idusuario':2,
        'nametorneus':'Jugador Testing',
        'name':'Jugador Testing',
      },
      /*
      {
        'idusuario': 6,
        'nametorneus':'RoweeClaw99',
        'name':'Roweena Ravenclaw',
      }*/
    ]

    return jugadores;
  }

  enviarInvitaciones(jugadores:any):Observable<any>{
    const query = 'invitaralequipo'; 
    return this.httpClient
    .post(`${this.API_URL}${query}`, jugadores,
      {headers: this.headers}
    );
  }
}
