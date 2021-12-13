import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { TorneosService } from '../services/torneos.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import tournaments from '../json/tournaments.json';
import { DialogSolicitudTorneoComponent } from '../dialog-solicitud-torneo/dialog-solicitud-torneo.component'
import { UserService } from '../../../shared/services/user.service';

interface Tournament {  
  nombre: string;  
  fechainicio: string;
  fechafin: string;
}

@Component({
  selector: 'app-search-tournament',
  templateUrl: './search-tournament.component.html',
  styleUrls: ['./search-tournament.component.scss']
})

export class SearchTournamentComponent implements OnInit {

  sessionData:any;

  torneos: any;
  term: string = '';
  items: any;
  rolEquipo: any;
  
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'videojuego', 'fechainicio', 'fechafin', 'nroequipos'];

  hoy:any = new Date();
  fechaFinTorneo:any;
  loading:boolean = false;

  constructor(
    public dialog: MatDialog,
    private torneosService: TorneosService,
    private authenticationService: AuthenticationService,
    private userService : UserService
  ) 
  {
    
    //this.torneos = this.aplicarFiltrosArreglo(this.torneos);
    //this.ordenarArreglo(this.torneos);
    //console.log(this.torneos);

  }

  ngOnInit(): void {
    this.sessionData = this.userService.getCurrentUser();
    this.rolEquipo = this.checkRolEquipo(this.sessionData);
    //this.invitaciones = this.userService.getInvitacionesEquipos();

    this.torneosService.getTorneosDisponibles(this.sessionData.idusuario)
    .subscribe(
      (torneos) => {                           //next() callback
        console.log(torneos)
        this.torneos = torneos;
        this.dataSource.data = this.torneos;
        //return this.torneos = torneos;
      },
      (error) => {                              //error() callback
        console.error(error)
      },
    );
    this.dataSource.data = this.torneos;
  }

  checkRolEquipo(user: any){
    let esEquipo = false;
    if(user.idrol == 3){
      esEquipo = true;
      this.displayedColumns.push('accion');
    }
    
    return esEquipo;
  }

  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.torneos);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ordenarArreglo(arreglo: any){
    arreglo.sort(function (a:any, b:any){
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

  searchTournamentById(arreglo: any, tournamentId: Number){
    var nombre: String = '';
    for (let i=0; i<arreglo.length; i++){
      if (arreglo[i].id == tournamentId){
        nombre = arreglo[i].name;
      }
    }
    return nombre;
  }

  enviarSolicitud(objetoTorneo: any){
    
    //let arregloNuevo: any = [];
    //var tournamentNombre = this.searchTournamentById(this.torneos, objetoTorneo.id);   
    //var tournamentId =  objetoTorneo.id;
    this.loading = true;

    this.torneosService.storeParticipacion(objetoTorneo, this.sessionData)
    .subscribe(
      (torneos) => {                           //next() callback
        this.openDialog();
        //return this.torneos = torneos;
        this.loading = false;
      },
      (error) => {                              //error() callback
        console.error(error)
      },
    );
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.maxWidth = "100%";
    dialogConfig.minWidth = "50%";
    //dialogConfig.height = "90%";

    this.dialog.open(DialogSolicitudTorneoComponent, dialogConfig);
  }

  //Logica que va en el backend en realidad
  aplicarFiltrosArreglo(arregloTorneo: any){
    arregloTorneo = this.removerItemsEstado(arregloTorneo);
    arregloTorneo = this.removerItemsEquipoAplico(arregloTorneo);
    arregloTorneo = this.removerItemsStartDate(arregloTorneo);
    return arregloTorneo;
  }
  /* Remover torneos inactivos */
  removerItemsEstado(arregloTorneo: any){
    let arregloNuevo: any = [];
    for (let i=0; i<arregloTorneo.length; i++){
      if (arregloTorneo[i].estado != 0){
        //arregloTorneo.splice(i-1, 1);
        arregloNuevo.push(arregloTorneo[i]);
      }
    }
    return arregloNuevo;
  }

  /* Remover torneos donde el equipo ya aplico */
  removerItemsEquipoAplico(arregloTorneo: any){
    let arregloNuevo: any = [];
    for (let i=0; i<arregloTorneo.length; i++){
      if (arregloTorneo[i].equipoAplico != 1){
        //arregloTorneo.splice(i, 1);
        arregloNuevo.push(arregloTorneo[i]);
      }
    }
    return arregloNuevo;
  }

  /* Remover torneos cuya fecha de inicio ya transcurrio */
  removerItemsStartDate(arregloTorneo: any){
    let fechaActual: Date = new Date();
    let arregloNuevo: any = [];
    for (let i=0; i<arregloTorneo.length; i++){
      let fechaInicio: Date = new Date(arregloTorneo[i].startDate);
      if (fechaActual < fechaInicio){
        //arregloTorneo.splice(i, 1);
        arregloNuevo.push(arregloTorneo[i]);
      }
    }
    return arregloNuevo;
  }

  torneoExpirado(torneo:any):boolean{
    let resultado = false;
    this.fechaFinTorneo = new Date(torneo.fechafin);
    this.fechaFinTorneo.setDate(this.fechaFinTorneo.getDate() + 1);
    this.fechaFinTorneo.setHours(23);
    this.fechaFinTorneo.setMinutes(59);
    this.fechaFinTorneo.setSeconds(59);

    if (this.hoy > this.fechaFinTorneo) {
      resultado = true;
    }else{
      resultado = false;
    }

    return resultado;
  }

  /*
  cupoLleno(torneo:any):boolean{
    let resultado = false;
    
  }
  */

}
