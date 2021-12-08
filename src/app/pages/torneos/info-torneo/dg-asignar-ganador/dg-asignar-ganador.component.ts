import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TorneosService } from '../../services/torneos.service';


@Component({
  selector: 'app-dg-asignar-ganador',
  templateUrl: './dg-asignar-ganador.component.html',
  styleUrls: ['./dg-asignar-ganador.component.scss']
})
export class DgAsignarGanadorComponent implements OnInit {

  fechaNro: any;
  idequipo1: any;
  idequipo2: any;
  nameequipo1: any;
  nameequipo2: any;
  listaEncuentros: any;
  idequipoganadorfinal: any;

  ganador: any = {
    idequipoganador: 0,
    nombreequipoganador: '',
    nombreequipo1: '',
    nombreequipo2: '',
    puntosequipo1: 0,
    puntosequipo2: 0,
  };
  objetoGanador:any;
  conflicto: any;

  itemParticipa: any;

  constructor(
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private torneosService: TorneosService,
  ) { }

  ngOnInit(): void {
    this.fechaNro = this.data.versus.fechaNro;
    this.idequipo1 = this.data.versus.idequipo1;
    this.idequipo2 = this.data.versus.idequipo2;
    this.nameequipo1 = this.data.versus.nameequipo1;
    this.nameequipo2 = this.data.versus.nameequipo2;
    this.listaEncuentros = this.data.encuentros
    this.idequipoganadorfinal = this.data.versus.idequipoganadorfinal
    //console.log(this.data.versus);

    this.conflicto = this.checkExisteConflicto();

    if(!this.conflicto){
      this.definirGanador();
    }

  }

  checkExisteGanadorVersus(){
    let existeGanador = false;
    if(this.data.versus.idequipoganadorfinal != 0){
      existeGanador = true;
    }
    return existeGanador;
  }

  async updateIdGanador(idganador:any){
    //Asignacion de idganador al idganador del objeto versus
    let objetoVersus = this.data.versus;
    console.log(objetoVersus);
    objetoVersus.idequipoganadorfinal = idganador;

    //Update a la base
    await this.callUpdateIdGanadorVersusFromService(objetoVersus);
  }

  async updatePuntosEquipos(hayConflicto: any){
    //Actualizar id ganador de versus
    this.updateIdGanador(this.ganador.idequipoganador);
    //console.log(this.ganador.idequipoganador);
    if(!hayConflicto){
      //Actualizar puntos en tabla participa
      //console.log(this.ganador.nombreequipo1, this.ganador.puntosequipo1);
      //console.log(this.ganador.nombreequipo2, this.ganador.puntosequipo2);

      //Llamada a los items participa de ambos equipos
      let itemParticipaEquipo1: any = await this.callGetItemParticipaFromService(this.data.versus.idtorneo, this.data.versus.idequipo1);
      let itemParticipaEquipo2: any = await this.callGetItemParticipaFromService(this.data.versus.idtorneo, this.data.versus.idequipo2);
      //console.log(itemParticipaEquipo1[0]);

      //Asignacion de puntos a los objetos de ambos equipos
      let objetoParticipaEquipo1 = itemParticipaEquipo1[0];
      let objetoParticipaEquipo2 = itemParticipaEquipo2[0];
      //console.log(objetoParticipaEquipo1);
      //console.log(objetoParticipaEquipo2);
      objetoParticipaEquipo1.puntostorneo += this.ganador.puntosequipo1;
      objetoParticipaEquipo2.puntostorneo += this.ganador.puntosequipo2;

      //Update a la base de datos
      await this.callUpdatePuntosTorneoFromService(objetoParticipaEquipo1);
      await this.callUpdatePuntosTorneoFromService(objetoParticipaEquipo2);
    }
    else{
      //Asignar 3 puntos al ganador y 0 al perdedor
      //Llamada al item participa del equipo ganador
      //console.log(this.ganador);
      let itemParticipaGanador: any = await this.callGetItemParticipaFromService(this.data.versus.idtorneo, this.ganador.idequipoganador);
      //console.log(itemParticipaEquipo1[0]);

      //Asignacion de puntos al objeto del equipo ganador
      let objetoParticipaGanador = itemParticipaGanador[0];
      //console.log(objetoParticipaEquipo1);
      //console.log(objetoParticipaEquipo2);
      objetoParticipaGanador.puntostorneo += 3;

      //Update a la base de datos
      await this.callUpdatePuntosTorneoFromService(objetoParticipaGanador);
    }

    this.dialog.closeAll();
    /*
      Asignar puntos en la tabla participa segun los encuentros
      1 punto si gana, 0 si pierde
    */
  }

  callGetItemParticipaFromService(idtorneo:any, idequipo:any){
    return this.torneosService.getItemParticipa(idtorneo, idequipo).toPromise()
  }

  callUpdatePuntosTorneoFromService(objetoParticipa:any){
    return this.torneosService.updatePuntosTorneo(objetoParticipa).toPromise()
  }

  callUpdateIdGanadorVersusFromService(objetoVersus:any){
    return this.torneosService.updateIdGanadorVersus(objetoVersus).toPromise()
  }

  checkExisteConflicto(){
    //Hacer for con la lista de encuentros
    //console.log(this.data.encuentros);
    let contVictorias = 0;
    let hayConflicto = false;
    for(let encuentro of this.data.encuentros){
      if(encuentro.victoria == 1){
        contVictorias++;
      }
    }
    //Si hay 4 o mas victorias, hay conflicto
    if(contVictorias >= 4){
      hayConflicto = true;
    }

    return hayConflicto;
  }

  definirGanador(){
    //Hacer for con la lista de encuentros
    let victoriasEquipo1 = 0;
    let victoriasEquipo2 = 0;
    let equipoGanador = {
      idequipoganador: 0,
      nombreequipoganador: '',
      nombreequipo1: '',
      nombreequipo2: '',
      puntosequipo1: 0,
      puntosequipo2: 0,
    };
    //console.log(this.data.versus);
    //console.log(this.data.encuentros);

    equipoGanador.nombreequipo1 = this.data.versus.nameequipo1;
    equipoGanador.nombreequipo2 = this.data.versus.nameequipo2;

    for(let encuentro of this.data.encuentros){
      if(encuentro.idequipoganador == this.data.versus.idequipo1){ //Equipo 1
        if(encuentro.victoria == 1){
          victoriasEquipo1++;
        }
      }
      if(encuentro.idequipoganador == this.data.versus.idequipo2){ //Equipo 2
        if(encuentro.victoria == 1){
          victoriasEquipo2++;
        }
      }
    }
    //Contar las victorias de cada equipo y compararlas

    if(victoriasEquipo1 > victoriasEquipo2){
      //equipoGanador = this.data.versus.idequipo1;
      equipoGanador.idequipoganador = this.data.versus.idequipo1;
      equipoGanador.nombreequipoganador = this.data.versus.nameequipo1;
    }
    else{
      //equipoGanador = this.data.versus.idequipo2;
      equipoGanador.idequipoganador = this.data.versus.idequipo2;
      equipoGanador.nombreequipoganador = this.data.versus.nameequipo2;
    }

    equipoGanador.puntosequipo1 = victoriasEquipo1;
    equipoGanador.puntosequipo2 = victoriasEquipo2;

    //Retornar id del ganador
    this.ganador = equipoGanador;
    //return equipoGanador;
  }

}