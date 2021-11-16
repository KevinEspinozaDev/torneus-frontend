import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:any;

  constructor() { }

  setCurrentUser(user:any): void {
    this.currentUser = user;
  }

  getCurrentUser(): any {
    const usuarioActual = {
      id: "1",
      nombre: "Kevin",
      nombreTorneus: "KevinMekuru",
      email: "kevin@gmail.com",
      rol: "Organizador",
      imageUrl: "/assets/images/jugador2.jpg",
    };
    this.setCurrentUser(usuarioActual);
   
    return this.currentUser;
  }

  getInvitacionesEquipos():any{
    const invitaciones = [
      {
        id: "1",
        idEquipo: "1",
        nombreEquipo: "SKT T1",
        estado: "1",
        descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
    ];

    return invitaciones;
  }

  getInvitacionEquipo():any{
    const invitacion = 
      {
        id: "1",
        idEquipo: "1",
        nombreEquipo: "SKT T1",
        estado: "1",
        descripcion: "Hola! Por favor únete a nuestro equipo!"
      };

    return invitacion;
  }

  aceptarInvitacionEquipo(id:any): any{
    const equipos = [
      {
        idEquipo: id,
        nombre: "SKT T1"
      },
    ];

    return equipos;
  }
}
