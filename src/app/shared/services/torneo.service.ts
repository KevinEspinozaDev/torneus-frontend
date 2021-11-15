import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor() { }

  getListaTorneos():any{
    const torneos = [
      {
        id: "1",
        nombreTorneo: "Copa Piston",
        estado: "1",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
      {
        id: "2",
        nombreTorneo: "Copa Libertadores",
        estado: "0",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
      {
        id: "3",
        nombreTorneo: "Copa Piston2",
        estado: "1",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
      {
        id: "4",
        nombreTorneo: "Copa Libertadores2",
        estado: "0",
        //descripcion: "Hola! Por favor únete a nuestro equipo!"
      },
    ];

    return torneos;
  }
}
