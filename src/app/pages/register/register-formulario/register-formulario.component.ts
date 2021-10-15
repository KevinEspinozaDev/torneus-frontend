import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  ciudades:any;

  registerJugadorOrganizadorForm: FormGroup;
  registerEquipoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.nombreRol = "";
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
    this.ciudades = [
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
      nombreUsuario: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      nombreTorneus: new FormControl('', [
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
      fechaNacimiento: new FormControl('', [
        Validators.required,
      ]),
      
      pais: new FormControl('', [
        Validators.required,
      ]),
      provincia: new FormControl('', [
        Validators.required,
      ]),
      ciudad: new FormControl('', [
        Validators.required,
      ]),
    });

    this.registerEquipoForm = this.formBuilder.group({
      nombreUsuario: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      nombreTorneus: new FormControl('', [
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
      fechaNacimiento: new FormControl('', [
        Validators.required,
      ]),
      pais: new FormControl('', [
        Validators.required,
      ]),
      provincia: new FormControl('', [
        Validators.required,
      ]),
      ciudad: new FormControl('', [
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
    console.log(this.registerJugadorOrganizadorForm.value);
  }

  test(param:any){
    console.log(param);
  }

}
