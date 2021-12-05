import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaTorneosService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;

  constructor(public httpClient:HttpClient) { }

  getListaTorneosByUserId(idequipo:any)/*:Observable<any>*/{
    const query = 'torneosdondeparticipo'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let listaTorneos = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idequipo: idequipo},
      {headers: this.headers}
    );
    
    /*
    let dataUsuario = [
      {
        idtorneo: 1,
        nombre: 'Torneo1',
        fechainicio: '2021-12-12',
        fechafin: '2022-12-12',
        recompensa: '20',
        nroequipos: '20',
        idtipotorneo: 2,
        idorganizador: 2,
      }
    ];
    */
    return listaTorneos;
  }
}
