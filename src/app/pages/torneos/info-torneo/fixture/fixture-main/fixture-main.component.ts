import { Component, OnInit } from '@angular/core';
import { generateSchedule } from "sports-schedule-generator";
import { Route, Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TorneosService } from '../../../services/torneos.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditarFechaComponent } from '../dialog-editar-fecha/dialog-editar-fecha.component';

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
  arregloVersus:any = [];
  objetoVersus:any;

  suficientesEquipos:boolean = false;

  dataReady:boolean = false;
  

  sessionData:any;

  constructor(
    private torneosService: TorneosService,
    private authenticationService: AuthenticationService,
    private route : ActivatedRoute,
    private router: Router,
    private dialog : MatDialog
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
          //console.log(res);
          this.dataTorneo = res[0];
        }
        else{
           this.router.navigateByUrl('/torneos');
        }
      }
    );
    
    this.getListaEquipos(this.idtorneo, true);

    /* Obtener los versus para el torneo */
    this.torneosService.getVersus(this.idtorneo)
    .subscribe(
      (res) => {
          this.arregloVersus = this.acomodarArregloParaVista(res);
          this.dataReady = true;
      },
    );

  }

  longitudObjeto(objeto:any){
    let longitud = Object.keys(objeto).length
    return longitud;
  }

  getListaEquipos(idtorneo:any, participa:boolean){
    this.torneosService.getListaEquipos(idtorneo, participa)
    .subscribe(
      (res) => {
        this.participantes = res;
        if (this.participantes.length != 0) {
          this.suficientesEquipos = this.participantesPares(this.participantes.length, this.dataTorneo.nroequipos);
        }else{
          console.log('No hay equipos pares');
        }
        console.log(this.suficientesEquipos)
      },
      error => {
        console.log(error);
      });
      
  }

  generarFixture(){
        
      this.participantes = this.shuffleArray(this.participantes)
      this.arregloEquipos = generateSchedule(this.participantes);
      //console.log(this.arregloEquipos);
      this.saveVersus(this.arregloEquipos);

      window.location.reload();
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

  participantesPares(valor1:any, valor2:any):boolean{
    let  flag:boolean;
    
    if (valor1 || valor2 != 0) {
      if (valor1 % valor2 == 0) {
        flag = true;
        console.log('Pares')
      }else{
        flag = false;
        console.log('Impares')
      }
    }else{
      flag = false;
    }
    

    return flag;
  }

}
