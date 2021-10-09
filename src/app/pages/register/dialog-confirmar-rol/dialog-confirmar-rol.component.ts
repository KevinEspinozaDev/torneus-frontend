import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterMainComponent } from '../register-main/register-main.component';

export interface DialogData {
  idRol: number;
  nombreRol: string;
}


@Component({
  selector: 'app-dialog-confirmar-rol',
  templateUrl: './dialog-confirmar-rol.component.html',
  styleUrls: ['./dialog-confirmar-rol.component.scss']
})
export class DialogConfirmarRolComponent implements OnInit {

  nombreRol:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  ngOnInit(): void {
    if (this.data.idRol == 1) {
      this.nombreRol = "Jugador";
    }else if(this.data.idRol == 2){
      this.nombreRol = "Equipo";
    }else if(this.data.idRol == 3){
      this.nombreRol = "Organizador";
    }
  }

  confirmar():any {

  }

}
