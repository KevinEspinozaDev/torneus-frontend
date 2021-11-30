import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { CrearTorneosService } from '../services/crear-torneos.service';

@Component({
  selector: 'app-crear-torneo-formulario',
  templateUrl: './crear-torneo-formulario.component.html',
  styleUrls: ['./crear-torneo-formulario.component.scss']
})
export class CrearTorneoFormularioComponent implements OnInit {

  startDate: string = '';

  hoy: Date = new Date();
  anioActual: number = this.hoy.getFullYear();
  mesActual: number = this.hoy.getMonth();
  diaActual: number = this.hoy.getDate();
  pipe = new DatePipe('en-US');

  nombreTipoTorneo:string;
  idTipoTorneo:any;
  idOrganizador:any = localStorage.getItem('torneus-id');

  currentDate = new Date();

  registerTipoTorneoForm: FormGroup;

  numEquipos:Array<number> = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

  createdOk:boolean = false;
  listaNumeroEquipos:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private dateAdapter: DateAdapter<Date>,
    private crearTorneosService: CrearTorneosService,
  ) 
  {
    this.dateAdapter.setLocale('es-AR'); //Formato de fecha para el datepicker

    this.nombreTipoTorneo = '';
    this.registerTipoTorneoForm = this.formBuilder.group({
      nombre: new FormControl('',[
        Validators.required,
      ]),
      fechainicio: new FormControl('', [
        Validators.required,
      ]),
      fechafin: new FormControl('', 
        Validators.required,
      ),      
      recompensa: new FormControl('',[
        Validators.required,
        Validators.min(1),
        Validators.max(10000)
      ]),
      nroequipos: new FormControl('',[
        Validators.required,
        Validators.min(2)
      ]),
      idtipotorneo: new FormControl(1),
      idorganizador: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.listaNumeroEquipos = this.selectNumeroEquipos();
    this.idTipoTorneo = this.route.snapshot.paramMap.get('id');
    //this.registerTipoTorneoForm.controls.idtipotorneo.value == this.idTipoTorneo;

    //if (this.idTipoTorneo >= 1 && this.idTipoTorneo <= 3) {
    if (this.idTipoTorneo == 1) {
      if (this.idTipoTorneo == 1) {
        this.nombreTipoTorneo = "Liga";
      }else if(this.idTipoTorneo == 2){
        this.nombreTipoTorneo = "Copa";
      }else{
        this.router.navigate(['/crear-torneo']);
      }
    }
  }

  selectNumeroEquipos(){
    let selectNroEquipos = [];
    for (let i = 2; i <= 30; i+=2) {
      selectNroEquipos.push(i);
    }
    return selectNroEquipos;
  }

  registrarTorneo():any{
    this.registerTipoTorneoForm.controls.idorganizador.setValue(this.idOrganizador);
    console.log(this.registerTipoTorneoForm.value);

    let nuevaFechaInicio = new Date(this.registerTipoTorneoForm.controls.fechainicio.value).toJSON().slice(0, 10);
    this.registerTipoTorneoForm.controls.fechainicio.setValue(nuevaFechaInicio);
    //console.log(typeof nuevaFechaInicio);

    let nuevaFechaFin = new Date(this.registerTipoTorneoForm.controls.fechafin.value).toJSON().slice(0, 10);
    this.registerTipoTorneoForm.controls.fechafin.setValue(nuevaFechaFin);

    this.crearTorneosService.crearTorneo(this.registerTipoTorneoForm)
    .subscribe(
      (res) => {
        console.log(res);
        this.createdOk = true;
      },
      error => {

      }
    );
  }


  test(param:any){
    console.log(param);
  }

}
