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

  getAllTorneos(): Observable<any>{
    const query = `alltorneos`;

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, {'headers':this.headers});
  }

  getDataTorneo(idtorneo: any):Observable<any>{
    const query = 'getdatostorneo'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let torneo = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idtorneo: idtorneo},
      {headers: this.headers}
    );
    //console.log(torneo);
    return torneo;
  }

  getListaEquipos(idtorneo: any, participa:any):Observable<any>{ //participa: true = aceptado, false = pendiente
    const query = 'getparticipantesxtorneo'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let participantes = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idtorneo: idtorneo, participa: participa},
      {headers: this.headers}
    );
    //console.log(participantes);
    return participantes;
  }

  addVersus(objetoVersus: any):Observable<any>{
    const query = 'crearversus'; 
    return this.httpClient
    .post(
      `${this.API_URL}${query}`, objetoVersus,
      {headers: this.headers}
    );
  }

  getVersus(idtorneo:any):Observable<any>{
    const query = 'getversusxtorneo'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let versus = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idtorneo: idtorneo},
      {headers: this.headers}
    );
    //console.log(versus);
    return versus;
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

  getVersusParaResultado():any{
    const res:any = [
      {
        'infotorneo' : {
          'nombre' : 'Liga Torneus',
          'nombreorganizador' : 'Torneus Oficial',
          'fechainicio' : '29-11-2021',
          'fechafin' : '29-11-2021'
        },

        'infoversus' : {
          'equipoa' : 'Equipo 1',
          'equipob' : 'Equipo 2',
          'fecha' : '29-11-2021'
        }
      }
    ];

    return res[0];
  }


}
