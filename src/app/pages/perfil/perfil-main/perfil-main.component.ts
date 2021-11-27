import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from '../../../shared/services/user.service';
import { DgEditarPerfilComponent } from '../dg-editar-perfil/dg-editar-perfil.component';
import { DgMensajeEquipoComponent } from '../dg-mensaje-equipo/dg-mensaje-equipo.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosVerComponent } from '../../torneos/torneos-ver/torneos-ver.component';
import { TorneosService } from '../../torneos/services/torneos.service';

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
  
  objetoTorneo:any;

  constructor(
    private userService: UserService,
    private torneosService : TorneosService,
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute,
    private router : Router,
  ) { 

  }

  ngOnInit(): void {
    this.torneosService.getObjetoTorneo()
    .subscribe(objeto => {
      console.log(objeto)
      this.objetoTorneo = objeto;
      console.log(this.objetoTorneo)
    })
    this.invitaciones = this.userService.getInvitacionesEquipos();
    this.usuarioActual = this.userService.getCurrentUser();
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