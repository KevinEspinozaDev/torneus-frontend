import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTipoTorneoComponent } from '../dialog-tipo-torneo/dialog-tipo-torneo.component';

@Component({
  selector: 'app-crear-torneo-main',
  templateUrl: './crear-torneo-main.component.html',
  styleUrls: ['./crear-torneo-main.component.scss']
})
export class CrearTorneoMainComponent implements OnInit {

  idTipoTorneoSeleccionado:any;

  constructor(public dialog: MatDialog) { }

  openDialog(id:number) {
    this.idTipoTorneoSeleccionado = id;
    console.log('Tipo de Torneo seleccionado: '+this.idTipoTorneoSeleccionado);
    const dialogRef = this.dialog.open(DialogTipoTorneoComponent, {
      data: {
        idTipoTorneo: this.idTipoTorneoSeleccionado
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.idTipoTorneoSeleccionado = null;
    });
  }

  ngOnInit(): void {
  }

}
