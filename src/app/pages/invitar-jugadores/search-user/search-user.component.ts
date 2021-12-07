import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DgEnviarSolicitudComponent } from '../dg-enviar-solicitud/dg-enviar-solicitud.component';
import { InvitarJugadoresService } from '../services/invitar-jugadores.service';


interface User {  
  idusuario: Number;
  nametorneus: String;  
  name: String;  
  //username: String;  
  //email: String;  
}  

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  //items: object[] = [{ name: 'archie' }, { name: 'jake' }, { name: 'richard' }];
  jugadores: User[] = [];
  usuariosSeleccionados: User[] = [];
  term: string = '';
  items: User[] = [];
  selectedItems: User[] = [];

  invitacionOk:boolean;

  constructor(
    public dialog: MatDialog,
    private invitarJugadoresService : InvitarJugadoresService,
    private router: Router
    ) { 
      this.jugadores = [];
      this.invitacionOk = false;
  }
  
  

  ngOnInit(): void {
    this.jugadores = this.invitarJugadoresService.getJugadores();
    //console.log(this.jugadores)
  }

  ordenarArreglo(arreglo: User[]){
    arreglo.sort(function (a, b){
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  searchUserById(arreglo: User[], userId: Number){
    var name: String = '';
    for (let i=0; i<arreglo.length; i++){
      if (arreglo[i].idusuario == userId){
        name = arreglo[i].name;
      }
    }
    return name;
  }

  addDeleteUser(singleUser: User, accionAddDel: Boolean){
    /*
    accionAddDel
      true: add
      false: delete
    */

    this.items = this.jugadores;
    this.selectedItems = this.usuariosSeleccionados;

    let userNombre = singleUser.name;   
    let userId =  singleUser.idusuario;
    let userNombreTorneus = singleUser.nametorneus
    
    if(accionAddDel){
      this.selectedItems.push({idusuario: userId, name: userNombre, nametorneus:userNombreTorneus});
      this.items = this.quitarItems(this.items, singleUser);
    }
    else{
      this.items.push({idusuario: userId, name: userNombre, nametorneus:userNombreTorneus});
      this.selectedItems = this.quitarItems(this.selectedItems, singleUser);
    }
    //var userNombre = this.searchUserById(this.items, singleUser.id);   
    //console.log(this.items);

    this.ordenarArreglo(this.items);
    this.ordenarArreglo(this.selectedItems);

    return false;
  }

  quitarItems(arregloUsuarios: User[], objetoUser: User){
    var userNombre = objetoUser.name;   
    var userId =  objetoUser.idusuario;

    for (let i=0; i<arregloUsuarios.length; i++){
      if (userId == arregloUsuarios[i].idusuario){
        arregloUsuarios.splice(i, 1);
      }
    }
    return arregloUsuarios;
  }

  enviarSolicitudes(invitados:any){

    invitados.forEach((element:any) => {
      console.log(element)
      const idRolUser = localStorage.getItem('torneus-idrol');

      /* SÓLO si se es equipo, se pueden enviar invitaciones para unirse a uno*/
      if (idRolUser == '3') {
        element.idequipo = localStorage.getItem('torneus-id');
        element.descripcion = "'¡Te invitamos a unirte a nuestro equipo!'";
        element.idjugador = element.idusuario;

        this.invitarJugadoresService.enviarInvitaciones(JSON.stringify(element))
        .subscribe(
          (res) => {
            if (res) {
              console.log(res);
              this.invitacionOk = true;
            }
          },
          (error) => {
            console.log(error);
          });
      }else{
        this.router.navigateByUrl('/');
      }
      console.log(element)
    });
    
    
    //console.log(invitados);
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.maxWidth = "100%";
    dialogConfig.minWidth = "50%";
    //dialogConfig.height = "90%";

    this.dialog.open(DgEnviarSolicitudComponent, dialogConfig);
  }

}



