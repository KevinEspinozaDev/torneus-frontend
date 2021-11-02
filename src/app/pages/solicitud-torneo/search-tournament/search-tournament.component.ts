import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import tournaments from '../json/tournaments.json';
import { DialogSolicitudTorneoComponent } from '../dialog-solicitud-torneo/dialog-solicitud-torneo.component'

interface Tournament {  
  id: Number;  
  name: String;  
  estado: Number;
  tipoTorneo: Number;
  equipoAplico: Number;
  startDate: string;
}

@Component({
  selector: 'app-search-tournament',
  templateUrl: './search-tournament.component.html',
  styleUrls: ['./search-tournament.component.scss']
})
export class SearchTournamentComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) 
  {
    
    //this.torneos = this.aplicarFiltrosArreglo(this.torneos);
    this.ordenarArreglo(this.torneos);
    //console.log(this.torneos);

  }

  torneos: Tournament[] = tournaments;
  term: string = '';
  items: Tournament[] = [];

  ordenarArreglo(arreglo: Tournament[]){
    arreglo.sort(function (a, b){
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  aplicarFiltrosArreglo(arregloTorneo: Tournament[]){
    arregloTorneo = this.removerItemsEstado(arregloTorneo);
    arregloTorneo = this.removerItemsEquipoAplico(arregloTorneo);
    arregloTorneo = this.removerItemsStartDate(arregloTorneo);
    return arregloTorneo;
  }
  /* Remover torneos inactivos */
  removerItemsEstado(arregloTorneo: Tournament[]){
    let arregloNuevo: Tournament[] = [];
    for (let i=0; i<arregloTorneo.length; i++){
      if (arregloTorneo[i].estado != 0){
        //arregloTorneo.splice(i-1, 1);
        arregloNuevo.push(arregloTorneo[i]);
      }
    }
    return arregloNuevo;
  }

  /* Remover torneos donde el equipo ya aplico */
  removerItemsEquipoAplico(arregloTorneo: Tournament[]){
    let arregloNuevo: Tournament[] = [];
    for (let i=0; i<arregloTorneo.length; i++){
      if (arregloTorneo[i].equipoAplico != 1){
        //arregloTorneo.splice(i, 1);
        arregloNuevo.push(arregloTorneo[i]);
      }
    }
    return arregloNuevo;
  }

  /* Remover torneos cuya fecha de inicio ya transcurrio */
  removerItemsStartDate(arregloTorneo: Tournament[]){
    let fechaActual: Date = new Date();
    let arregloNuevo: Tournament[] = [];
    for (let i=0; i<arregloTorneo.length; i++){
      let fechaInicio: Date = new Date(arregloTorneo[i].startDate);
      if (fechaActual < fechaInicio){
        //arregloTorneo.splice(i, 1);
        arregloNuevo.push(arregloTorneo[i]);
      }
    }
    return arregloNuevo;
  }

  searchTournamentById(arreglo: Tournament[], tournamentId: Number){
    var nombre: String = '';
    for (let i=0; i<arreglo.length; i++){
      if (arreglo[i].id == tournamentId){
        nombre = arreglo[i].name;
      }
    }
    return nombre;
  }

  enviarSolicitud(solicitudTorneo: any){
    console.log(solicitudTorneo)
    let arregloNuevo: Tournament[] = [];
    var tournamentNombre = this.searchTournamentById(this.torneos, solicitudTorneo.id);   
    var tournamentId =  solicitudTorneo.id;

    for (let i=0; i<this.torneos.length; i++){
      if (tournamentId == this.torneos[i].id){
        this.torneos[i].equipoAplico = 1;
      }
    }
    //this.torneos = this.aplicarFiltrosArreglo(this.torneos);
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    //dialogConfig.height = "90%";

    this.dialog.open(DialogSolicitudTorneoComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
