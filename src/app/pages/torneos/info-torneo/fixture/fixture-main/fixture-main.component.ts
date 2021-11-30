import { Component, OnInit } from '@angular/core';
import { generateSchedule } from "sports-schedule-generator";
import { Route, Router, ActivatedRoute } from '@angular/router';

import { TorneosService } from '../../../services/torneos.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-fixture-main',
  templateUrl: './fixture-main.component.html',
  styleUrls: ['./fixture-main.component.scss']
})
export class FixtureMainComponent implements OnInit {

  idtorneo: any;
  arregloFechasVersus: any;
  participantes: any;
  dataTorneo: any;
  displayedColumns: string[] = ['idequipo1', 'idequipo2', 'fecha', 'informar_resultado'];

  test:any = [];
  arregloEquipos:any;
  arregloVersus:any;
  objetoVersus:any;
  

  sessionData:any;

  constructor(
    private torneosService: TorneosService,
    private authenticationService: AuthenticationService,
    private route : ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();
    
    /* Obtener el id torneo que viene por la url */
    this.route.params 
    .subscribe(  
      (params) => { 
        if (params.idtorneo) {
          this.idtorneo = params.idtorneo;
        }
      } 
    );

    /* Obtener los datos del torneo dado el idtorneo */
    this.torneosService.getDataTorneo(this.idtorneo)
    .subscribe(
      (res) => {
        if(res.length != 0){
          console.log(res);
          this.dataTorneo = res[0];
        }
        else{
           this.router.navigateByUrl('/torneos');
        }
      }
    );

    this.torneosService.getVersus(this.idtorneo)
    .subscribe(
      (res) => {
        if(res.length != 0){
          //console.log(res);
          //this.acomodarArregloParaVista(res);
          this.arregloVersus = this.acomodarArregloParaVista(res);
        }
      }
    );
  }

  longitudObjeto(objeto:any){
    let longitud = Object.keys(objeto).length
    return longitud;
  }

  generarFixture(){
    this.torneosService.getListaEquipos(this.idtorneo, true)
    .subscribe(
      (res) => {
        this.participantes = res;
        this.participantes = this.shuffleArray(this.participantes)
        this.arregloEquipos = generateSchedule(this.participantes);
        //console.log(this.arregloEquipos);
        this.saveVersus(this.arregloEquipos);
      },
    );
  }

  saveVersus(arrayEquipos: any){
    let nroFecha = 1;
    let objetoVersus;
    for (let fecha of arrayEquipos) {
      for (let versus of fecha) {
        let fechaFinVersus;
        fechaFinVersus = new Date(this.dataTorneo.fechainicio);
        fechaFinVersus.setDate(fechaFinVersus.getDate() + 1);
        fechaFinVersus = this.javascriptDateToSqlDate(fechaFinVersus)

        objetoVersus = {
          idtorneo: this.idtorneo,
          fechaNro: nroFecha,
          fechainicio: this.dataTorneo.fechainicio,
          fechafin: fechaFinVersus,
          idequipo1: versus.home.idequipo,
          idequipo2: versus.away.idequipo,
          idequipoganadorfinal: 0,
        }
        console.log(objetoVersus);
        
        this.torneosService.addVersus(objetoVersus)
        .subscribe(
          (res) => {
            console.log("Versus agregado")
          },
          (error) => {
            console.log("Versus no agregado")
          }
        );
        
      }
      nroFecha++;
    }
  }

  acomodarArregloParaVista(arregloVersus:any){
    
    let arregloVersusFinal:any = [];
    for (let key in arregloVersus) {
      console.log(key, arregloVersus[key]);
      if(typeof arregloVersusFinal[key] === 'undefined'){
        arregloVersusFinal[key] = [];
      }
      arregloVersusFinal.push(arregloVersus[key]);
    }
    arregloVersusFinal = arregloVersusFinal.filter(function (el:any) {
      return el != null && el.length;
    });
    /*
    for(let i = 1; i <= Object.keys(arregloVersus).length; i++){
      console.log(arregloVersus.i)
      if(typeof arregloVersusFinal[i] === 'undefined'){
        arregloVersusFinal[i] = [];
        
      }
      arregloVersusFinal.push(arregloVersus.i);
    }
    */
    console.log(arregloVersusFinal);
    return arregloVersusFinal;
    
    //console.log(arregloVersus);
  }

  javascriptDateToSqlDate(fecha:any){
    fecha = fecha.getUTCFullYear() + '-' +
      ('00' + (fecha.getUTCMonth()+1)).slice(-2) + '-' +
      ('00' + fecha.getUTCDate()).slice(-2) + ' ' + 
      ('00' + fecha.getUTCHours()).slice(-2) + ':' + 
      ('00' + fecha.getUTCMinutes()).slice(-2) + ':' + 
      ('00' + fecha.getUTCSeconds()).slice(-2);
    return fecha;
  }

  shuffleArray(a:any) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
 }

}
