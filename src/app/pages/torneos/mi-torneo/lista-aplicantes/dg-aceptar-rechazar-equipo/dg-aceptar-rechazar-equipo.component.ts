import { Component, Inject,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dg-aceptar-rechazar-equipo',
  templateUrl: './dg-aceptar-rechazar-equipo.component.html',
  styleUrls: ['./dg-aceptar-rechazar-equipo.component.scss']
})
export class DgAceptarRechazarEquipoComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  idEquipo: Number = -1;
  nombreEquipo: String = '';
  accionEquipoString: String = '';
  accionEquipoBoolean: Boolean = false;

  ngOnInit(): void {
    this.idEquipo = this.data.idEquipo;
    this.nombreEquipo = this.data.name;
    this.accionEquipoString = this.data.acceptTeam;
    this.accionEquipoBoolean = this.data.accion;
    
  }

  confirmarAccion():any {
      this.dialog.closeAll();
      if(this.accionEquipoBoolean){
        console.log(this.idEquipo + "true");
      }
      else{
        console.log(this.idEquipo + "false");
      }
      
  }

}
