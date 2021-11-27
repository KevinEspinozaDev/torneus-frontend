import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  private API_URL: string = environment.apiUrl;

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type");

  private objetoTorneo:any = new Subject<String>();

  constructor(
    private httpClient: HttpClient,
    private userService : UserService
  ) { }

  getListaTorneos():any{
    const torneos = [
      {
        id: "1",
        nombreTorneo: "Copa Piston",
        estado: "1",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
      {
        id: "2",
        nombreTorneo: "Copa Libertadores",
        estado: "0",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
      {
        id: "3",
        nombreTorneo: "Copa Piston2",
        estado: "1",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
      {
        id: "4",
        nombreTorneo: "Copa Libertadores2",
        estado: "0",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
    ];

    return torneos;
  }

  getListaTorneosOrganizador(idusuario:any): Observable<any>{
    const query = `listartorneos`;

    const objetoIdUsuario = {
      'idusuario' : idusuario
    }

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, objetoIdUsuario, {'headers':this.headers});
  }

  public getObjetoTorneo(): Observable<any>{
    return this.objetoTorneo.asObservable();
  }

  public setObjetoTorneo(objeto:any){
    return this.objetoTorneo.next(objeto);
  }
}
