import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { InvitacionesService } from '../services/invitaciones.service';


@Component({
  selector: 'app-lista-mis-equipos',
  templateUrl: './lista-mis-equipos.component.html',
  styleUrls: ['./lista-mis-equipos.component.scss']
})
export class ListaMisEquiposComponent implements OnInit {

  equiposUsuario:any;
  displayedColumns: string[] = ['nametorneus'];

  sessionData:any;

  constructor(
    private invitacionesService: InvitacionesService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();

    this.invitacionesService.getEquiposPertenecePorId(this.sessionData.idusuario)
    .subscribe(
      (equipos) => {//next() callback
        console.log(equipos);
        return this.equiposUsuario = equipos;
      },
      (error) => {//error() callback
        console.error(error)
      },
    );
  }

}
