import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  idTipoTorneo: number;
  nombreTipoTorneo: string;
}

@Component({
  selector: 'app-dialog-tipo-torneo',
  templateUrl: './dialog-tipo-torneo.component.html',
  styleUrls: ['./dialog-tipo-torneo.component.scss']
})
export class DialogTipoTorneoComponent implements OnInit {

  nombreTipoTorneo:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private router: Router, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.data.idTipoTorneo == 1) {
      this.nombreTipoTorneo = "Liga";
    }else if(this.data.idTipoTorneo == 2){
      this.nombreTipoTorneo = "Copa";
    }
  }

  confirmarTipoTorneo():any {
    //if (this.data.idTipoTorneo >= 1 && this.data.idTipoTorneo <= 3) {
    if (this.data.idTipoTorneo == 1) {
      this.dialog.closeAll();
      this.router.navigate(['/torneos/crear-torneo/crear-torneo-formulario/'+this.data.idTipoTorneo]);
    }else{
      this.router.navigate(['/torneos/crear-torneo']);
    }
  }

}
