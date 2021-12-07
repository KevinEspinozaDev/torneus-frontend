import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dg-mensaje-equipo',
  templateUrl: './dg-mensaje-equipo.component.html',
  styleUrls: ['./dg-mensaje-equipo.component.scss']
})
export class DgMensajeEquipoComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  nombreEquipo: String = '';
  mensajeEquipo: String = '';

  ngOnInit(): void {
    this.nombreEquipo = this.data.nombreEquipo;
    this.mensajeEquipo = this.data.descripcion;
  }

}
