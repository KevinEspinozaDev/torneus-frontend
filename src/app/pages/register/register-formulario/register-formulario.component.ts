import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

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
    /*
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
    */

    this.registerJugadorOrganizadorForm = this.formBuilder.group({
      nombre: new FormControl('',[
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
      ]),
      provincia: new FormControl('', [
      ]),
      localidad: new FormControl('', [
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
      ]),
      provincia: new FormControl('', [
      ]),
      localidad: new FormControl('', [
      ]),
    });
   }

  ngOnInit(): void {
    this.idRol = this.route.snapshot.paramMap.get('id');

    if (this.idRol >= 2 && this.idRol <= 4) {
      if (this.idRol == 2) {
        this.nombreRol = "Jugador";
      }else if(this.idRol == 3){
        this.nombreRol = "Equipo";
      }else if(this.idRol == 4){
        this.nombreRol = "Organizador";
      }
    }else{
      this.router.navigate(['/register']);
    }

    

  }

  registrarUsuario(){
    // Si Equipo
    if (this.idRol == 3) {
      this.body = {
        nametorneus: this.registerEquipoForm.controls.nametorneus.value,
        name: this.registerEquipoForm.controls.nametorneus.value,
        email: this.registerEquipoForm.controls.email.value,
        idpais: 1,
        idprovincia: 1,
        idlocalidad: 1,
        password: this.registerEquipoForm.controls.password.value,
        idrol: this.idRol
      };
      // 2 jugador, 4 organizador
    }else if(this.idRol == 2 || this.idRol == 4){
      this.body = {
        nametorneus: this.registerJugadorOrganizadorForm.controls.nametorneus.value,
        name: this.registerJugadorOrganizadorForm.controls.nombre.value,
        email: this.registerJugadorOrganizadorForm.controls.email.value,
        password: this.registerJugadorOrganizadorForm.controls.password.value,
        idpais: 1,
        idprovincia: 1,
        idlocalidad: 1,
        idrol: this.idRol
      }

    }
    
    this.authenticationService.register(this.body).subscribe(
      (response:any) => {
        if (response) {
          //console.log(response);
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
      (error:any) => {
        console.log(error);
        /*
        this._snackBar.open('No se ha podido crear el titulo.', null, {
          duration: 2000,
        });
        */
      }
    );
  }

}
