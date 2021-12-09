import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")
  .set("Authorization", "Bearer " + localStorage.getItem("torneus-token"));

  private API_URL: string = environment.apiUrl;


  constructor(
    private httpClient: HttpClient,
  ) { }

  getRankings(): Observable<any>{
    const query = 'ranking'; 
    
    return this.httpClient
    .get(`${this.API_URL}${query}`,
      {headers: this.headers}
    );
  }
}
