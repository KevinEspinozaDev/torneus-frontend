import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from '../../../shared/services/user.service';
import { DgEditarPerfilComponent } from '../dg-editar-perfil/dg-editar-perfil.component';
import { DgMensajeEquipoComponent } from '../dg-mensaje-equipo/dg-mensaje-equipo.component';

@Component({
  selector: 'app-perfil-main',
  templateUrl: './perfil-main.component.html',
  styleUrls: ['./perfil-main.component.scss']
})
export class PerfilMainComponent implements OnInit {

  invitaciones:any;
  usuarioActual:any;
  equiposUsuario:any;
  displayedColumns: string[] = ['nombreEquipo', 'descripcion', 'accion'];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.invitaciones = this.userService.getInvitacionesEquipos();
    this.usuarioActual = this.userService.getCurrentUser();
    //console.log(this.invitaciones);
  }


  aceptarInvitacion(id:any){
    this.invitaciones = false;

    this.equiposUsuario = this.userService.aceptarInvitacionEquipo(id);
    console.log(this.equiposUsuario)
  }

  rechazarInvitacion(id:any){
    this.invitaciones = false;
  }

  editarPerfil(){
    this.openDialog();
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    //dialogConfig.data = this.usuarioActual;

    this.dialog.open(DgEditarPerfilComponent, dialogConfig);
  }

  abrirMensaje(objetoEquipo: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    dialogConfig.data = objetoEquipo;

    this.dialog.open(DgMensajeEquipoComponent, dialogConfig);
  }

}
