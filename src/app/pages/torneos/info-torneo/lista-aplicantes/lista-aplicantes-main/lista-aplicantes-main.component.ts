import { Component, OnInit } from '@angular/core';
import applicants from '../json/applicants.json';

import { DgAceptarRechazarEquipoComponent } from '../dg-aceptar-rechazar-equipo/dg-aceptar-rechazar-equipo.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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

  constructor(
    public dialog: MatDialog
  ) { }

  equipos: Applicants[] = applicants;
  term: string = '';
  items: Applicants[] = [];

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
    dialogConfig.width = "80%";
    if(accion){
      aceptarEquipo = "Aceptar";
    }
    else{
      aceptarEquipo = "Rechazar";
    }
    dialogConfig.data = {
      idEquipo: objetoEquipo.id,
      name: objetoEquipo.name,
      acceptTeam: aceptarEquipo, //string de accion
      accion: accion, //boolean de accion
    };
    //dialogConfig.height = "90%";

    this.dialog.open(DgAceptarRechazarEquipoComponent, dialogConfig);
  }

  ngOnInit(): void {
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
