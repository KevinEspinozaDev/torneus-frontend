import { Component, OnInit } from '@angular/core';

import users from '../json/users.json';
import selectedUsers from '../json/selected_users.json';


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

  constructor() { 
   
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

  addDeleteUser(newUser: any){
    
    if(newUser.dataset.add_del == "add"){
      this.items = this.usuarios;
      this.selectedItems = this.usuariosSeleccionados;
    }
    else if(newUser.dataset.add_del == "del"){
      this.items = this.usuariosSeleccionados;
      this.selectedItems = this.usuarios;
    }
    var userNombre = this.searchUserById(this.items, newUser.dataset.userid);   
    var userId =  newUser.dataset.userid;
    this.selectedItems.push({id: userId, name: userNombre});
    //console.log(this.items);

    for (let i=0; i<this.items.length; i++){
      if (userId == this.items[i].id){
        this.items.splice(i, 1);
      }
    }

    this.ordenarArreglo(this.items);
    this.ordenarArreglo(this.selectedItems);

    return false;
  }
  
  ngOnInit(): void {
  }

}



