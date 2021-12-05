import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;

  constructor(public httpClient:HttpClient) { }

  getUserPorId(idusuario:any):Observable<any>{
    const query = 'getuserdata/'+idusuario; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let dataUsuario = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idusuario: idusuario},
      {headers: this.headers}
    );
    console.log(dataUsuario);
    return dataUsuario;
  }

  getListaJugadoresEquipo(idequipo:any):Observable<any>{
    const query = 'jugadoresxequipo'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let dataUsuario = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idequipo: idequipo},
      {headers: this.headers}
    );
    return dataUsuario;
  }
}
