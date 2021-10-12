import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-formulario',
  templateUrl: './register-formulario.component.html',
  styleUrls: ['./register-formulario.component.scss']
})
export class RegisterFormularioComponent implements OnInit {

  nombreRol:string;
  idRol:any;
  currentDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.nombreRol = "";
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

}
