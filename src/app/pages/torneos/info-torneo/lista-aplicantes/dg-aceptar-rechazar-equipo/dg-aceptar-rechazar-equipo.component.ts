import { Component, Inject,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TorneosService } from '../../../services/torneos.service';

@Component({
  selector: 'app-dg-aceptar-rechazar-equipo',
  templateUrl: './dg-aceptar-rechazar-equipo.component.html',
  styleUrls: ['./dg-aceptar-rechazar-equipo.component.scss']
})
export class DgAceptarRechazarEquipoComponent implements OnInit {

  constructor(public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA,
    ) public data: any,
      private torneosService : TorneosService
    ) { 
    
  }

  idEquipo: Number = -1;
  nombreEquipo: String = '';
  accionEquipoString: String = '';
  accionEquipoBoolean: Boolean = false;
  idTorneo : any;

  ngOnInit(): void {
    this.idEquipo = this.data.idEquipo;
    this.nombreEquipo = this.data.name;
    this.accionEquipoString = this.data.acceptTeam;
    this.accionEquipoBoolean = this.data.accion;
    this.idTorneo = this.data.idTorneo;
    
  }

  confirmarAccion():any {
      
      if(this.accionEquipoBoolean){
        console.log(this.data)
        this.torneosService.aceptarEquipoEnTorneo(this.data.id)
        .subscribe(res => {
          console.log(res)
        })
      }
      else{
        console.log(this.idEquipo + " false");
      }
      this.dialog.closeAll();
  }

}
