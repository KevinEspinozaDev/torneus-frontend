import { Component, Input, OnInit } from '@angular/core';
import applicants from '../json/applicants.json';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { TorneosService } from '../../../services/torneos.service';
import { DgAceptarRechazarEquipoComponent } from '../dg-aceptar-rechazar-equipo/dg-aceptar-rechazar-equipo.component';

interface Applicants {  
  id: Number;  
  name: String;  
  //username: String;  
  //email: String;  
}  

@Component({
  selector: 'app-lista-aplicantes-main',
  templateUrl: './lista-aplicantes-main.component.html',
  styleUrls: ['./lista-aplicantes-main.component.scss']
})
export class ListaAplicantesMainComponent implements OnInit {

  idtorneo:any;
  listaAplicantes: any;
  displayedColumns: string[] = ['equipo', 'accion'];

  @Input() soyElOrganizador:boolean = false;

  constructor(
    public dialog: MatDialog,
    private torneosService : TorneosService,
    private route : ActivatedRoute,
    private router: Router,
  ) { }

  equipos: Applicants[] = applicants;
  term: string = '';
  items: Applicants[] = [];

  ngOnInit(): void {
    /* Obtener el id torneo que viene por la url */
    this.route.params 
    .subscribe(  
      (params) => { 
        if (params.idtorneo) {
          this.idtorneo = params.idtorneo;
        }
      } 
    );
    this.torneosService.getListaEquipos(this.idtorneo, false)
    .subscribe(
      (res) => {
        //console.log(res);
        this.listaAplicantes = res;
      }
    );
  }

  acceptRejectTeam(aceptarEquipo: any, objetoEquipo:Applicants){
    
    if(aceptarEquipo){
      //this.items = this.usuarios;
      //this.selectedItems = this.usuariosSeleccionados;
      this.openDialog(objetoEquipo, true);
    }
    else{
      //this.items = this.usuariosSeleccionados;
      //this.selectedItems = this.usuarios;
      this.openDialog(objetoEquipo, false);
    }

    return false;
  }

  openDialog(objetoEquipo: Applicants, accion: boolean) {
    const dialogConfig = new MatDialogConfig();
    let aceptarEquipo: String = '';
    dialogConfig.maxWidth = "100%";
    dialogConfig.minWidth = "50%";
    if(accion){
      aceptarEquipo = "Aceptar";
    }
    else{
      aceptarEquipo = "Rechazar";
    }
    dialogConfig.data = {
      idEquipo: objetoEquipo.id,
      idTorneo : this.idtorneo,
      name: objetoEquipo.name,
      acceptTeam: aceptarEquipo, //string de accion
      accion: accion, //boolean de accion
    };
    //dialogConfig.height = "90%";

    this.dialog.open(DgAceptarRechazarEquipoComponent, dialogConfig);
  }

  

  ordenarArreglo(arreglo: Applicants[]){
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


}
