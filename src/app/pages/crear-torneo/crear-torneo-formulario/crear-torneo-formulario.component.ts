import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TorneosService } from '../services/torneos.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-crear-torneo-formulario',
  templateUrl: './crear-torneo-formulario.component.html',
  styleUrls: ['./crear-torneo-formulario.component.scss']
})
export class CrearTorneoFormularioComponent implements OnInit {

  startDate: string = '';

  nombreTipoTorneo:string;
  idTipoTorneo:any;
  idOrganizador:any = localStorage.getItem('torneus-id');

  currentDate = new Date();

  registerTipoTorneoForm: FormGroup;

  createdOk:boolean = false;
  listaNumeroEquipos:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private dateAdapter: DateAdapter<Date>,
    private torneosService: TorneosService,
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
        Validators.min(1)
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

    let nuevaFechaInicio = new Date(this.registerTipoTorneoForm.controls.fechainicio.value).toJSON().slice(0, 10);
    this.registerTipoTorneoForm.controls.fechainicio.setValue(nuevaFechaInicio);
    //console.log(typeof nuevaFechaInicio);

    let nuevaFechaFin = new Date(this.registerTipoTorneoForm.controls.fechafin.value).toJSON().slice(0, 10);
    this.registerTipoTorneoForm.controls.fechafin.setValue(nuevaFechaFin);

    this.torneosService.crearTorneo(this.registerTipoTorneoForm)
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
