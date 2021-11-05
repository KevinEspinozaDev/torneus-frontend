import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-crear-torneo-formulario',
  templateUrl: './crear-torneo-formulario.component.html',
  styleUrls: ['./crear-torneo-formulario.component.scss']
})
export class CrearTorneoFormularioComponent implements OnInit {

  startDate: string = '';

  nombreTipoTorneo:string;
  idTipoTorneo:any;
  currentDate = new Date();

  registerTipoTorneoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private dateAdapter: DateAdapter<Date>
  ) 
  {
    this.dateAdapter.setLocale('es-AR'); //Formato de fecha para el datepicker

    this.nombreTipoTorneo = "";
    this.registerTipoTorneoForm = this.formBuilder.group({
      nombre: new FormControl('',[
        Validators.required,
      ]),
      fechaInicio: new FormControl('', [
        Validators.required,
      ]),
      fechaFin: new FormControl('', [
        Validators.required,
      ]),      
      recompensa: new FormControl('',[
        Validators.required,
      ]),
      maxEquipos: new FormControl('',[
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.idTipoTorneo = this.route.snapshot.paramMap.get('id');

    //if (this.idTipoTorneo >= 1 && this.idTipoTorneo <= 3) {
    if (this.idTipoTorneo == 3) {
      if (this.idTipoTorneo == 1) {
        this.nombreTipoTorneo = "Copa";
      }else if(this.idTipoTorneo == 2){
        this.nombreTipoTorneo = "Fase de Grupos";
      }else if(this.idTipoTorneo == 3){
        this.nombreTipoTorneo = "Liga";
      }
    }else{
      this.router.navigate(['/crear-torneo']);
    }
  }

  registrarTorneo(){
    console.log(this.registerTipoTorneoForm.value);
  }

  test(param:any){
    console.log(param);
  }

}
