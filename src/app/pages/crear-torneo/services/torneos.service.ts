import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../shared/services/user.service';
import { Observable } from 'rxjs';

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

  constructor(
    private httpClient: HttpClient,
    private userService : UserService
  ) { }


  crearTorneo(dataTorneo:any): Observable<any>{
    console.log(dataTorneo)

    const query = 'torneos'; 
    return this.httpClient
    .post(`${this.API_URL}${query}`, dataTorneo.value,
    {headers: this.headers}
    );
  }
}
