import { Component, Input, OnInit } from '@angular/core';
import { generateSchedule } from "sports-schedule-generator";
import { Route, Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TorneosService } from '../../../services/torneos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DgModificarFechaInicioComponent } from '../dg-modificar-fecha-inicio/dg-modificar-fecha-inicio.component';
import { DgAsignarGanadorComponent } from '../../dg-asignar-ganador/dg-asignar-ganador.component';
import { DgInformarResultadoComponent } from '../../dg-informar-resultado/dg-informar-resultado.component';

@Component({
  selector: 'app-fixture-main',
  templateUrl: './fixture-main.component.html',
  styleUrls: ['./fixture-main.component.scss']
})
export class FixtureMainComponent implements OnInit {

  idtorneo: any;
  arregloFechasVersus: any;
  participantes: any;  
  displayedColumns: string[] = ['idequipo1', 'idequipo2', 'fechainicio', 'fechafin', 'informar_resultado'];

  test:any = [];
  arregloEquipos:any;
  arregloVersus:any = [];
  objetoVersus:any;
  @Input() soyElOrganizador: boolean = false;
  @Input() dataTorneo: any;

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

  //Funciones para verificar rol
  soySysadmin(){
    return this.sessionData.idrol == '1';
  }

  soyJugador(){
    return this.sessionData.idrol == '2';
  }

  soyEquipo(){
    return this.sessionData.idrol == '3';
  }

  soyOrganizador(){
    return this.sessionData.idrol == '4';
  }

  //Verificaciones de estados
  verificarEstadoEnCurso(objetoVersus: any){
    return objetoVersus.estado == 1;
  }

  verificarEstadoHayGanador(objetoVersus: any){
    return objetoVersus.estado == 2;
  }

  //Asignacion de estados
  async asignarEstadoEnCurso(objetoVersus: any){
    let fechaActual = new Date();
    let fechaInicio = new Date(objetoVersus.fechaInicio);
    let fechaFin = new Date(objetoVersus.fechafin);
    if(objetoVersus.estado == 0 && fechaActual >= fechaInicio){
      objetoVersus.estado = 1;
      await this.callGetUpdateEstadoVersusFromService(objetoVersus);
    }
  }

  contadorDeVictorias(arregloEncuentros: any){
    let contVictorias = 0;
    for(let encuentro of arregloEncuentros){
      if(encuentro.victoria == 1){
        contVictorias++;
      }
    }
    return contVictorias;
  }

 

  async asignarEstadoHayConflicto(objetoVersus: any){
    let hayConflicto = false;
    console.log(objetoVersus);
    let arregloEncuentros = await this.callGetListaEncuentrosFromService(objetoVersus.idversus)
    let victorias = this.contadorDeVictorias(arregloEncuentros);
    //Si hay 4 o mas victorias, hay conflicto
    if(objetoVersus.estado == 1 && victorias >= 4){
      hayConflicto = true;
      objetoVersus.estado = 3;
      await this.callGetUpdateEstadoVersusFromService(objetoVersus);
    }
  }

  async asignarEstadoHayGanador(objetoVersus: any){
    if((objetoVersus.estado == 1 || objetoVersus.estado == 3 || objetoVersus.estado == 4) && objetoVersus.idganadorfinal != 0){
      objetoVersus.estado = 2;
      await this.callGetUpdateEstadoVersusFromService(objetoVersus);
    }
  }

  async comprobarResultadosEquipo(objetoVersus:any, idequipo:any){
    let resultados:any = await this.callGetEncuentrosSinResultadosFromService(objetoVersus, idequipo);
    let equipoSubioResultados = false;
    if(resultados.length = 0){
      equipoSubioResultados = true;
    }
    return equipoSubioResultados;
  }

  async asignarEstadoSinResultados(objetoVersus: any){
    let fechaActual = new Date();
    let fechaInicio = new Date(objetoVersus.fechaInicio);
    let fechaFin = new Date(objetoVersus.fechafin);
    let equipoUnoSubioResultados = await this.comprobarResultadosEquipo(objetoVersus, objetoVersus.idequipo1);
    let equipoDosSubioResultados = await this.comprobarResultadosEquipo(objetoVersus, objetoVersus.idequipo2);
    if(objetoVersus.estado == 1 && fechaActual >= fechaFin){
      if(!equipoUnoSubioResultados && !equipoDosSubioResultados){
        objetoVersus.estado = 4
        await this.callGetUpdateEstadoVersusFromService(objetoVersus);
      }
    }
  }

  async ngOnInit() { //:void
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
    
    this.getListaEquipos(this.dataTorneo.idtorneo, true);

    /* Obtener los versus para el torneo */
    this.torneosService.getVersus(this.dataTorneo.idtorneo)
    .subscribe(
      (res) => {
          this.arregloVersus = this.acomodarArregloParaVista(res);
          this.dataReady = true;
      },
    );

    let arregloVersus = await this.callGetVersusSinAgruparFromService();
    //this.arregloVersus = this.acomodarArregloParaVista(this.arregloVersus)
    //console.log(this.arregloVersus);
    for(let versus of arregloVersus){
      this.asignarEstadoEnCurso(versus);
      this.asignarEstadoHayConflicto(versus);
      this.asignarEstadoSinResultados(versus);
      this.asignarEstadoHayGanador(versus);
    }
    

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
        
          if (this.suficientesEquipos == true) {
            
          }
        }else{
          console.log('No hay equipos pares');
        }
        //console.log(this.suficientesEquipos)
      },
      error => {
        console.log(error);
      });
      
  }

  generarFixture(){
    //this.torneosService.getListaEquipos(this.idtorneo, true)
    this.torneosService.getListaEquipos(this.dataTorneo.idtorneo, true)
    .subscribe(
      async (res) => {
        this.participantes = res;
        this.participantes = this.shuffleArray(this.participantes)
        this.arregloEquipos = generateSchedule(this.participantes);
        //console.log(this.arregloEquipos);
        await this.saveVersus(this.arregloEquipos);
        console.log(this.callGetVersusFromService()); //Bizarro pero esto tiene que estar, si no, no trae versus en el saveEncuentros
        await this.saveEncuentros();
        window.location.reload();

        if (res) {
          //window.location.reload();
        }
      },
    );
  }

  async saveVersus(arrayEquipos: any){
    let nroFecha = 1;
    let objetoVersus;
    let arrayVersus = [];
    //console.log(arrayEquipos)
    for (let fecha of arrayEquipos) {
      for (let versus of fecha) {
        let fechaFinVersus = new Date(this.dataTorneo.fechainicio);
        fechaFinVersus.setDate(fechaFinVersus.getDate() + 1);;
        fechaFinVersus = this.javascriptDateToSqlDate(fechaFinVersus)

        objetoVersus = {
          idtorneo: this.dataTorneo.idtorneo,
          fechaNro: nroFecha,
          fechainicio: this.dataTorneo.fechainicio,
          fechafin: fechaFinVersus,
          idequipo1: versus.home.idusuario,
          idequipo2: versus.away.idusuario,
          idequipoganadorfinal: 0,
        }
        arrayVersus.push(objetoVersus);
      }
      nroFecha++;
    }
    await this.callAddVersusFromService(arrayVersus);
  }

  acomodarArregloParaVista(arregloVersus:any){
    
    let arregloVersusFinal:any = [];
    for (let key in arregloVersus) {
      //console.log(key, arregloVersus[key]);
      if(typeof arregloVersusFinal[key] === 'undefined'){
        arregloVersusFinal[key] = [];
      }
      arregloVersusFinal.push(arregloVersus[key]);
    }
    arregloVersusFinal = arregloVersusFinal.filter(function (el:any) {
      return el != null && el.length;
    });
    return arregloVersusFinal;
  }

  callGetVersusFromService(){
    return this.torneosService.getVersus(this.dataTorneo.idtorneo).toPromise();
  }

  callGetVersusSinAgruparFromService(){
    return this.torneosService.getVersusSinAgrupar(this.dataTorneo.idtorneo).toPromise();
  }

  async saveEncuentros(){
    /*
    this.torneosService.getVersus(this.dataTorneo.idtorneo)
    .subscribe(
      (res) => {
        
      }
    );
    */
    let res = await this.callGetVersusFromService();

    if(res.length != 0){
      let arregloVersus = this.acomodarArregloParaVista(res);
      //console.log(arregloVersus);
      let arregloJuega = [];
      let arregloEncuentros = [];
      for(let fecha of arregloVersus){
        //console.log(fecha);
        for(let versus of fecha){
          let objetoJuegaEquipo1 = {
            idversus: versus.idversus,
            idequipo: versus.idequipo1,
          };
          let objetoJuegaEquipo2 = {
            idversus: versus.idversus,
            idequipo: versus.idequipo2,
          };
          arregloJuega.push(objetoJuegaEquipo1);
          arregloJuega.push(objetoJuegaEquipo2);
          for(let i=1; i<=3; i++){
            let objetoEncuentroEquipo1 = {
              idversus: versus.idversus,
              idequipoganador: versus.idequipo1,
              victoria: -1,
            }
            //console.log(objetoEncuentroEquipo1);

            let objetoEncuentroEquipo2 = {
              idversus: versus.idversus,
              idequipoganador: versus.idequipo2,
              victoria: -1,
            }
            //console.log(objetoEncuentroEquipo2);

            arregloEncuentros.push(objetoEncuentroEquipo1);
            arregloEncuentros.push(objetoEncuentroEquipo2);
          }



          //this.addTresEncuentros(objetoEncuentroEquipo1, objetoEncuentroEquipo2);

        }
      }
      //console.log(arregloEncuentros);
      //console.log(arregloJuega);
      await this.callAddJuegaFromService(arregloJuega);
      await this.callAddEncuentroFromService(arregloEncuentros);
    }
  }
  /*
  addTresEncuentros(objEncuentroEquipo1:any, objEncuentroEquipo2:any){
    let booleano1 = true;
    let booleano2 = true;
    for(let i=1; i<=3 && booleano1 && booleano2; i++){
      booleano1 = this.callAddEncuentroFromService(objEncuentroEquipo1) 
      booleano2 = this.callAddEncuentroFromService(objEncuentroEquipo2) 
    }
  }
  */
  /*
  callGetVersusFromService(){
    this.torneosService.getVersus(this.dataTorneo.idtorneo)
    .subscribe(
      (res) => {

      },
      (error) => {

      }
    );
  }
  */

  callAddVersusFromService(objetoVersus:any){
    /*
    this.torneosService.addVersus(objetoVersus)
    .subscribe(
      (res) => {
        console.log("Versus agregado")

      },
      (error) => {
        console.log("Versus no agregado")
      }
    );
    */
    return this.torneosService.addVersus(objetoVersus).toPromise();
  }

  callAddEncuentroFromService(objetoEncuentro:any){
    /*
    //setTimeout(()=>{ 
      //let booleano = false;
      this.torneosService.addEncuentro(objetoEncuentro)
      .subscribe(
        (res) => {
          console.log("Encuentro agregado")
          //booleano = true;
        },
        (error) => {
          console.log("Encuentro no agregado")
        }
      );
      //return booleano;
    //}, 500)
    */
   return this.torneosService.addEncuentro(objetoEncuentro).toPromise();
  }

  callAddJuegaFromService(objetoJuega:any){
    /*
    this.torneosService.addJuega(objetoJuega)
    .subscribe(
      (res) => {
        console.log("Juega agregado")
      },
      (error) => {
        console.log("Juega no agregado")
      }
    );
    */
    return this.torneosService.addJuega(objetoJuega).toPromise();
  }

  callGetListaEncuentrosFromService(idversus:any): Promise<any>{
    //Llamar al servicio que trae los encuentros
    /*
    this.torneosService.getListaEncuentros(idversus)
    .subscribe(
      (res) => {
        this.listaEncuentros = res;
      },
      (error) => {
        
      }
    );
    */
   return this.torneosService.getListaEncuentros(idversus).toPromise()
  }

  callGetUpdateEstadoVersusFromService(objetoVersus:any){
    return this.torneosService.updateEstadoVersus(objetoVersus).toPromise();
  }

  callGetEncuentrosSinResultadosFromService(objetoVersus:any, idequipo:any){
    return this.torneosService.getEncuentrosSinResultados(objetoVersus, idequipo).toPromise();
  }

  async asignarGanador(objetoVersus: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = "100%";
    dialogConfig.minWidth = "50%";
    let listaEncuentros = await this.callGetListaEncuentrosFromService(objetoVersus.idversus);
    dialogConfig.data = {
      versus: objetoVersus,
      encuentros: listaEncuentros
    }; //Mandar también la lista de resultados
    this.dialog.open(DgAsignarGanadorComponent, dialogConfig);
  }

  modificarFechas(fechaVersus: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    dialogConfig.data = fechaVersus;

    this.dialog.open(DgModificarFechaInicioComponent, dialogConfig);
  }

  /**
   * Devuelve true si está cerrado, falso en caso contrario
   */
  checkVersusCerrado(objetoVersus:any){
    //Comprobar fecha de fin de versus
    /*
    let versusCerrado = false;
    let fechaCumplida = false;
    let existeGanador = false;
    let fechaActual = new Date();
    let fechaFinVersus = new Date(objetoVersus.fechafin);
    if(fechaActual > fechaFinVersus){
      fechaCumplida = true;
    }
    //Traer lista de encuentros segun idversus
    //Checkear si no existe encuentro con victoria en -1
    */
   let versusCerrado = false;

   /*
    if(objetoVersus.estado != 0){
      versusCerrado = true;
    }
    */

    return true;
  }

  checkConflicto(objetoVersus: any){
    //let listaEncuentros = this.callGetListaEncuentrosFromService(objetoVersus.idversus);
    let hayConflicto = false;
    /*
    if(objetoVersus.estado == 2){
      hayConflicto = true;
    }
    */
    return true;
    return hayConflicto;
  }

  checkExisteGanadorVersus(objetoVersus:any){
    let existeGanador = false;
    if(objetoVersus.idequipoganadorfinal != 0){
      existeGanador = true;
    }
    return existeGanador;
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

  //Verificar si equipo logueado pertenece a versus
  participoEnEsteVersus(idequipo1: any, idequipo2: any){
    let participo = false;
    if(this.soyEquipo()){
      let idUser = this.sessionData.idusuario;
      if(idUser == idequipo1 || idUser == idequipo2){
        participo = true;
      }
    }
    return participo;
  }

  //Verificar si usuario es el organizador de torneo
  soyElOrganizadorDelTorneo(){
    let organizo = false;
    if(this.soyOrganizador()){
      let idUser = this.sessionData.idusuario;
      if(idUser == this.dataTorneo.idorganizador){
        organizo = true;
      }
    }
    return organizo;
  }

  /*********** update Kevin 100% ****************** */
  dialogInformarResultado(versus:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = "95%";
    dialogConfig.height = "98%";

    dialogConfig.data = {
      versus: versus,
    }; //Mandar también la lista de resultados
    this.dialog.open(DgInformarResultadoComponent, dialogConfig);
  }

}
