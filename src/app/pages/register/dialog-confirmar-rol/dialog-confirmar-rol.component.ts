import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
    public dialog: MatDialog
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

  confirmarRol():any {
    if (this.data.idRol >= 1 && this.data.idRol <= 3) {
      this.dialog.closeAll();
      this.router.navigate(['/register/register-formulario/'+this.data.idRol]);
      console.log("Id correcto");
    }else{
      this.router.navigate(['/register']);
      console.log('Id invalido');
    }
  }

}
