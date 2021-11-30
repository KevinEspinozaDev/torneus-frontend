import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { generateSchedule } from "sports-schedule-generator";

import { UserService } from '../../../shared/services/user.service';
import { InvitacionesService } from '../services/invitaciones.service';
import { PerfilService } from '../services/perfil.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ActivatedRoute } from "@angular/router";

import { DgEditarPerfilComponent } from '../dg-editar-perfil/dg-editar-perfil.component';
import { DgMensajeEquipoComponent } from '../dg-mensaje-equipo/dg-mensaje-equipo.component';
import { Observable } from 'rxjs';
import { TorneosVerComponent } from '../../torneos/torneos-ver/torneos-ver.component';
import { TorneosService } from '../../torneos/services/torneos.service';

const schedule = generateSchedule(["Equipo A", "Equipo B", "Equipo C", "Equipo D", "Equipo E", "Equipo F"]);

@Component({
  selector: 'app-perfil-main',
  templateUrl: './perfil-main.component.html',
  styleUrls: ['./perfil-main.component.scss']
})


export class PerfilMainComponent implements OnInit {

  invitaciones:any;
  dataUsuario:any
  usuarioActual:any;
  rolUsuarioActual:any;
  equiposUsuario:any;
  displayedColumns: string[] = ['nametorneus', 'descripcion', 'accion'];

  allDataUser:any;

  sessionData:any;

  encuentros:any;
  dataReady:boolean = false;

  constructor(
    private userService: UserService,
    private invitacionesService: InvitacionesService,
    private perfilService: PerfilService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
  ) { 
    /*
    this.route.params
    .subscribe( 
      (params) => {
        //console.log(params);
        this.perfilService.getUserPorId(params.iduser)
        .subscribe(
          (dataUser) => {                           //next() callback
            console.log(dataUser);
            this.usuarioActual = dataUser[0];
            //return this.dataUsuario = dataUser;
          },
          (error) => {                              //error() callback
            console.error(error)
          },
        );
      }
    );
    */

  }

  shuffleArray(a:any) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
 }

  ngOnInit(): void {
    //this.sessionData = this.authenticationService.getSessionData();
    //this.invitaciones = this.userService.getInvitacionesEquipos();

    //this.encuentros = schedule;
    //this.encuentros = this.shuffleArray(schedule);
    //console.log(this.encuentros);

    

    this.usuarioActual = this.userService.getCurrentUser();
    this.rolUsuarioActual = this.userService.getRolPalabras();
    //console.log(this.invitaciones);

    /*this.userService.getAllDataUser(this.usuarioActual.idrol)
    .subscribe(res => {
      console.log(res);
      this.allDataUser = res;
    })*/
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

  

}