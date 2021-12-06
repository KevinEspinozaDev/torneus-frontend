import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { InvitacionesService } from '../services/invitaciones.service';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-lista-mis-jugadores',
  templateUrl: './lista-mis-jugadores.component.html',
  styleUrls: ['./lista-mis-jugadores.component.scss']
})
export class ListaMisJugadoresComponent implements OnInit {

  jugadoresUsuario:any;
  displayedColumns: string[] = ['nametorneus', 'name', 'email', 'prestigio'];
  dataReady : boolean = false;

  sessionData:any;


  constructor(
    private perfilService : PerfilService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();

    this.perfilService.getListaJugadoresEquipo(this.sessionData.idusuario)
    .subscribe(
      (jugadores) => {//next() callback
        this.dataReady = true;
        return this.jugadoresUsuario = jugadores;
      },
      (error) => {//error() callback
        console.error(error)
      },
    );
  }

}
