import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  usuario:any;

  constructor(
    private userService:UserService,
  ) { }

  getMenu():any {
    this.usuario = this.userService.getCurrentUser();
    let menu = {};

    if (this.usuario.idrol == 1) {
      // Sysadmin
      menu = { };

      // Jugador
    } else if (this.usuario.idrol == 2) {
      menu = [
        {
          'url' : '',
          'nombre' : 'Torneos',
          'click' : '',
          'submenus' : [
            {
              'url' : '/torneos',
              'nombre' : 'Ver Torneos',
              'click' : '',
            }
          ]
        },
        {
          'url' : '/perfil',
          'nombre' : 'Mis Invitaciones a Equipos',
          'click' : '',
          'submenus' : []
        }
      ];

      // Equipo
    } else if (this.usuario.idrol == 3){
      menu = [
        {
          'url' : '',
          'nombre' : 'Torneos',
          'click' : '',
          'submenus' : [
            {
              'url' : '/torneos',
              'nombre' : 'Ver Torneos',
              'click' : '',
            },
            {
              'url' : '/solicitud-torneo',
              'nombre' : 'Entrar a un Torneo',
              'click' : ''
            }
          ]
        },
        {
          'url' : '/invitar-jugadores',
          'nombre' : 'Invitar Jugadores al Equipo',
          'click' : '',
          'submenus' : []
        }
      ];

      // Organizador
    } else if (this.usuario.idrol == 4){
      menu = [
        {
          'url' : '',
          'nombre' : 'Torneos',
          'click' : '',
          'submenus' : [
            {
              'url' : '/torneos/crear-torneo',
              'nombre' : 'Crear Torneo',
              'click' : '',
            },
            {
              'url' : '/torneos',
              'nombre' : 'Ver Torneos',
              'click' : '',
            },
            {
              'url' : '/torneos/mis-torneos',
              'nombre' : 'Mis Torneos',
              'click' : ''
            }
          ]
        },
        {
          'url' : '',
          'nombre' : 'Invitar Equipos a un Torneo',
          'click' : '',
          'submenus' : []
        }
      ];
    }

    return menu;
  }
}
