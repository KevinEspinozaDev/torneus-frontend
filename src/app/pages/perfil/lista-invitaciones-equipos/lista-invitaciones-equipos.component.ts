import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

//Servicios
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { InvitacionesService } from '../services/invitaciones.service';

//Dialogs
import { DgMensajeEquipoComponent } from '../dg-mensaje-equipo/dg-mensaje-equipo.component';


@Component({
  selector: 'app-lista-invitaciones-equipos',
  templateUrl: './lista-invitaciones-equipos.component.html',
  styleUrls: ['./lista-invitaciones-equipos.component.scss']
})
export class ListaInvitacionesEquiposComponent implements OnInit {

  invitaciones:any;
  displayedColumns: string[] = ['nametorneus', 'descripcion', 'accion'];

  sessionData:any;

  constructor(
    private invitacionesService: InvitacionesService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();

    this.invitacionesService.getInvitacionesPorId(this.sessionData.idusuario)
    .subscribe(
      (invitaciones) => {                           //next() callback
        console.log(invitaciones);
        return this.invitaciones = invitaciones;
      },
      (error) => {                              //error() callback
        console.error(error)
      },
    );
  }

  aceptarInvitacion(objetoSolicitud:any){
    //this.invitaciones = false;

    this.invitacionesService.updateEquipoEstado(objetoSolicitud, true)
    .subscribe(
      (res) => {                           //next() callback
        console.log(res);
        window.location.reload();
      },
      (error) => {                              //error() callback
        console.error(error)
      },
    );
    //console.log(this.equiposUsuario)
  }

  rechazarInvitacion(objetoSolicitud:any){
    //this.invitaciones = false;
    this.invitacionesService.updateEquipoEstado(objetoSolicitud, false)
    .subscribe(
      (res) => {                           //next() callback
        console.log(res);
      },
      (error) => {                              //error() callback
        console.error(error)
      },
    );
  }

  abrirMensaje(objetoEquipo: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    dialogConfig.data = objetoEquipo;

    this.dialog.open(DgMensajeEquipoComponent, dialogConfig);
  }

}
