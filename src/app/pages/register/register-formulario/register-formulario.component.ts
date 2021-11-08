import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/authentication.service';

interface Paises{
  valor: string,
  nombre: string
}

@Component({
  selector: 'app-register-formulario',
  templateUrl: './register-formulario.component.html',
  styleUrls: ['./register-formulario.component.scss']
})
export class RegisterFormularioComponent implements OnInit {

  nombreRol:string;
  idRol:any;
  currentDate = new Date();
  paises:any;
  provincias:any;
  localidades:any;

  successCuadro:boolean;

  registerJugadorOrganizadorForm: FormGroup;
  registerEquipoForm: FormGroup;

  body:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.nombreRol = "";
    this.successCuadro = false;
    this.paises = [
      {
        id: 1,
        nombre: 'Argentina'
      },
      {
        id: 2,
        nombre: 'Brasil'
      },
      {
        id: 3,
        nombre: 'Japón'
      }
    ];
    this.provincias = [
      {
        id: 1,
        idPais: 1,
        nombre: 'Río Negro'
      }
    ];
    this.localidades = [
      {
        id: 1,
        idProvincia: 1,
        idPais: 1,
        nombre: 'Bariloche'
      }
    ];

    this.registerJugadorOrganizadorForm = this.formBuilder.group({
      nombre: new FormControl('',[
        Validators.required,
      ]),
      apellido: new FormControl('',[
        Validators.required,
      ]),
      nametorneus: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[0-9]).{8,}')
      ]),
      email: new FormControl('', [
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{3}$"),
        Validators.required
      ]),
      pais: new FormControl('', [
        Validators.required,
      ]),
      provincia: new FormControl('', [
        Validators.required,
      ]),
      localidad: new FormControl('', [
        Validators.required,
      ]),
    });

    this.registerEquipoForm = this.formBuilder.group({
      nametorneus: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[0-9]).{8,}')
      ]),
      email: new FormControl('', [
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{3}$"),
        Validators.required
      ]),
      pais: new FormControl('', [
        Validators.required,
      ]),
      provincia: new FormControl('', [
        Validators.required,
      ]),
      localidad: new FormControl('', [
        Validators.required,
      ]),
    });
   }

  ngOnInit(): void {
    this.idRol = this.route.snapshot.paramMap.get('id');

    if (this.idRol >= 1 && this.idRol <= 3) {
      if (this.idRol == 1) {
        this.nombreRol = "Jugador";
      }else if(this.idRol == 2){
        this.nombreRol = "Equipo";
      }else if(this.idRol == 3){
        this.nombreRol = "Organizador";
      }
    }else{
      this.router.navigate(['/register']);
    }

    

  }

  registrarUsuario(){
    if (this.idRol == 2) {
      this.body = {
        nametorneus: this.registerEquipoForm.controls.nametorneus.value,
        name: 'Equipo',
        email: this.registerEquipoForm.controls.email.value,
        idpais: this.registerEquipoForm.controls.pais.value,
        idprovincia: this.registerEquipoForm.controls.provincia.value,
        idlocalidad: this.registerEquipoForm.controls.localidad.value,
        password: this.registerEquipoForm.controls.password.value,
        idRol: this.idRol
      };
    }else if(this.idRol == 1 || this.idRol == 3){
      this.body = {
        nametorneus: this.registerJugadorOrganizadorForm.controls.nametorneus.value,
        name: this.registerJugadorOrganizadorForm.controls.nombre.value,
        apellido: this.registerJugadorOrganizadorForm.controls.apellido.value
      }
    }
    
    this.authenticationService.register(this.body).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          console.log('se registró al usuario correctamente!');

          this.successCuadro = true;

          setTimeout(() => {
            this.router.navigateByUrl("/login");
          }, 3000);
          
        } else {
          /*
          this._snackBar.open('No se ha podido crear el titulo.', null, {
            duration: 2000,
          });
          */
         console.log('No se ha podido registrar al usuario.')
        }
      },
      (error) => {
        console.log(error);
        /*
        this._snackBar.open('No se ha podido crear el titulo.', null, {
          duration: 2000,
        });
        */
      }
    );
  }

  test(param:any){
    console.log(param);
  }

}
