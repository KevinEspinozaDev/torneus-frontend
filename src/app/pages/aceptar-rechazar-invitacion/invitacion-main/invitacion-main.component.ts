import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DgAcceptarRechazarComponent } from '../dg-acceptar-rechazar/dg-acceptar-rechazar.component';

@Component({
  selector: 'app-invitacion-main',
  templateUrl: './invitacion-main.component.html',
  styleUrls: ['./invitacion-main.component.scss']
})
export class InvitacionMainComponent implements OnInit {

  invitacion:any;
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.invitacion = this.userService.getInvitacionEquipo();
    console.log(this.invitacion);
  }

  accionSolicitud(acepto: Boolean){
    if(acepto){
      console.log("Acepto");
    }
    else{
      console.log("Rechazo");
    }
    this.openDialog(acepto);
  }

  openDialog(accion: Boolean) {
    const dialogConfig = new MatDialogConfig();

    let aceptarInvitacion: String = '';
    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    if(accion){
      aceptarInvitacion = "Aceptada";
    }
    else{
      aceptarInvitacion = "Rechazada";
    }
    dialogConfig.data = {
      name: this.invitacion.nombreEquipo,
      acceptInv: aceptarInvitacion, //string de accion
      accion: accion, //boolean de accion
    };
    //dialogConfig.height = "90%";

    this.dialog.open(DgAcceptarRechazarComponent, dialogConfig);
  }

}
