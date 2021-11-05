import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


import users from '../json/users.json';
import selectedUsers from '../json/selected_users.json';
import { DgEnviarSolicitudComponent } from '../dg-enviar-solicitud/dg-enviar-solicitud.component';


interface User {  
  id: Number;  
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

  constructor(public dialog: MatDialog) { 
   
  }
  
  //items: object[] = [{ name: 'archie' }, { name: 'jake' }, { name: 'richard' }];
  usuarios: User[] = users;
  usuariosSeleccionados: User[] = selectedUsers;
  term: string = '';
  items: User[] = [];
  selectedItems: User[] = [];

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
    var nombre: String = '';
    for (let i=0; i<arreglo.length; i++){
      if (arreglo[i].id == userId){
        nombre = arreglo[i].name;
      }
    }
    return nombre;
  }

  addDeleteUser(singleUser: User, accionAddDel: Boolean){
    /*
    accionAddDel
      true: add
      false: delete
    */

    this.items = this.usuarios;
    this.selectedItems = this.usuariosSeleccionados;

    var userNombre = singleUser.name;   
    var userId =  singleUser.id;
    
    if(accionAddDel){
      this.selectedItems.push({id: userId, name: userNombre});
      this.items = this.quitarItems(this.items, singleUser);
    }
    else{
      this.items.push({id: userId, name: userNombre});
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
    var userId =  objetoUser.id;

    for (let i=0; i<arregloUsuarios.length; i++){
      if (userId == arregloUsuarios[i].id){
        arregloUsuarios.splice(i, 1);
      }
    }
    return arregloUsuarios;
  }

  enviarSolicitudes(){
    console.log(this.selectedItems);
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    //dialogConfig.height = "90%";

    this.dialog.open(DgEnviarSolicitudComponent, dialogConfig);
  }
  
  ngOnInit(): void {
  }

}



