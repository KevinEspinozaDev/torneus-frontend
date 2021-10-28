import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-perfil-main',
  templateUrl: './perfil-main.component.html',
  styleUrls: ['./perfil-main.component.scss']
})
export class PerfilMainComponent implements OnInit {

  invitaciones:any;
  equiposUsuario:any

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.invitaciones = this.userService.getInvitacionesEquipos();
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

}
