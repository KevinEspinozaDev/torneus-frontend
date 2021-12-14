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

  getListaTorneosOrganizador(idusuario:any): Observable<any>{
    const query = `listartorneos`;

    const objetoIdUsuario = {
      'idusuario' : idusuario
    }

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, objetoIdUsuario, {'headers':this.headers});
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

  getVersusSinAgrupar(idtorneo:any):Observable<any>{
    const query = 'getversusxtorneosinagrupar'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let versus = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idtorneo: idtorneo},
      {headers: this.headers}
    );
    //console.log(versus);
    return versus;
  }

  getListaInfoVersus(idtorneo:any, idversus:any):Observable<any>{
    const query = `listarinfoversus`;

    const body = {
      idtorneo : idtorneo,
      idversus : idversus
    }

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, body, {'headers':this.headers});
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

  aceptarEquipoEnTorneo(idparticipa:any) : Observable<any>{
    const query = `confirmarparticipacion/`+idparticipa;

    const body = {
      'estado' : 1,
      '_method' : 'PUT'
    }

    const url = this.API_URL + query;

    return this.httpClient.post<any>(url, body, {'headers':this.headers});
  }

  /****************** Update maxi 100  ************************/

  addEncuentro(objetoEncuentro: any):Observable<any>{
    const query = 'crearencuentro'; 
    return this.httpClient
    .post(
      `${this.API_URL}${query}`, objetoEncuentro,
      {headers: this.headers}
    );
  }

  addJuega(objetoJuega: any):Observable<any>{
    const query = 'crearjuega'; 
    return this.httpClient
    .post(
      `${this.API_URL}${query}`, objetoJuega,
      {headers: this.headers}
    );
  }
  

  getListaEncuentros(idversus:any):Observable<any>{
    const query = 'getencuentrosxversus'; 
    let encuentros = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idversus: idversus},
      {headers: this.headers}
    );
    return encuentros;
  }

  getItemParticipa(idtorneo:any, idequipo:any):Observable<any>{
    const query = 'getparticipaxtorneoyequipo'; 
    let itemParticipa = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idtorneo: idtorneo, idequipo: idequipo},
      {headers: this.headers}
    );
    return itemParticipa;
  }

  getEncuentrosSinResultados(idversus:any, idequipo:any):Observable<any>{
    const query = 'getencuentrossinresultados'; 
    let encuentros = this.httpClient
    .post(
      `${this.API_URL}${query}`, {idversus: idversus, idequipoganador: idequipo},
      {headers: this.headers}
    );
    return encuentros;
  }

  getEncuentrosDeEquipo(idversus:any, idequipo:any):Observable<any>{
    const query = 'getencuentrosxversusyequipo'; 
    //let params = new HttpParams().set('idusuario', idusuario);
    let encuentros = this.httpClient
    .post(
      `${this.API_URL}${query}`, {
        idversus: idversus, 
        idequipoganador: idequipo,
      },
      {headers: this.headers}
    );
    //console.log(versus);
    return encuentros;
  }

  updatePuntosTorneo(objetoParticipa:any):Observable<any>{
    const query = 'asignarpuntaje/'+objetoParticipa.id; 
    return this.httpClient
    .put(
      `${this.API_URL}${query}`, objetoParticipa,
      {headers: this.headers}
    );
  }

  updateIdGanadorVersus(objetoVersus:any):Observable<any>{
    const query = 'actualizaridganador/'+objetoVersus.idversus; 
    return this.httpClient
    .put(
      `${this.API_URL}${query}`, objetoVersus,
      {headers: this.headers}
    );
  }

  updateEstadoVersus(objetoVersus:any):Observable<any>{
    const query = 'actualizarestadoversus/'+objetoVersus.idversus; 
    return this.httpClient
    .put(
      `${this.API_URL}${query}`, objetoVersus,
      {headers: this.headers}
    );
  }

  updateEncuentroVictoria(arregloEncuentros:any):Observable<any>{
    const query = 'updatevictorias'; 
    return this.httpClient
    .put(
      `${this.API_URL}${query}`, arregloEncuentros,
      {headers: this.headers}
    );
  }


}
