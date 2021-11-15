import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'app-editar-perfil-form',
  templateUrl: './editar-perfil-form.component.html',
  styleUrls: ['./editar-perfil-form.component.scss']
})
export class EditarPerfilFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  
  usuarioActual:any;

  ngOnInit(): void {
    this.usuarioActual = this.userService.getCurrentUser();
  }

  guardarDatos(){
    console.log("Datos guardados");
  }

}
