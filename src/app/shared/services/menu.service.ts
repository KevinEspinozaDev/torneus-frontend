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
      menu = { }

      // Jugador
    } else if (this.usuario.idrol == 2) {
      menu = [
        {
          'url' : '/',
          'nombre' : 'Mis Invitaciones a Equipos',
          'click' : '',
          'submenus' : [
            {
              'url' : '/perfil',
              'nombre' : 'Crear Torneo',
              'click' : 'test()',
            }
          ]
        },
      ]
    }

    return menu;
  }
}
