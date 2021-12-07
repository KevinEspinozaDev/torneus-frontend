import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dg-modificar-fecha-inicio',
  templateUrl: './dg-modificar-fecha-inicio.component.html',
  styleUrls: ['./dg-modificar-fecha-inicio.component.scss']
})
export class DgModificarFechaInicioComponent implements OnInit {

  fechainicio: any;

  constructor(
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.fechainicio = new Date(this.data);
    this.fechainicio.setDate(this.fechainicio.getDate() + 1);
    console.log(this.fechainicio);
  }

  updateFechasVersus(fechaInicio:any){
    let fechaInicioModificada = new Date(fechaInicio);
    let fechaFinModificada = new Date(fechaInicio);
    fechaFinModificada.setDate(fechaFinModificada.getDate() + 1);

    fechaInicioModificada = this.javascriptDateToSqlDate(fechaInicioModificada);
    fechaFinModificada = this.javascriptDateToSqlDate(fechaFinModificada);

    console.log(fechaInicioModificada+" - "+fechaFinModificada);
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

}
