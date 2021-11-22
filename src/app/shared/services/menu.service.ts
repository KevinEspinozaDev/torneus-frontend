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
      menu = {
        'usuario' : {
          'perfil' : {
            'url' : '/perfil',
            'nombre' : 'Mi Perfil',
            'click' : 'logout()'
          }
        }
      }
      // Jugador
    } else if (this.usuario.idrol == 2) {
      menu = [
        {
          data : {
            data : {
              'url' : '/perfil',
              'nombre' : 'Mi Perfil',
              'click' : ''
            }
          }
        },
        {
          data : {
            'url' : '',
            'nombre' : 'Cerrar Sesión',
            'click' : 'logout()'
          }
        },
        {
          'entrarAUnTorneo' : {
            'url' : '/solicitud-torneo',
            'nombre' : 'Entrar a un Torneo',
            'click' : ''
          }
        }
      ]
    }

    return menu;
  }
}
