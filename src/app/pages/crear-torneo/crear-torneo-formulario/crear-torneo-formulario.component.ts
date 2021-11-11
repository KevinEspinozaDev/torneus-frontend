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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private dateAdapter: DateAdapter<Date>,
    private torneosService: TorneosService,
  ) 
  {
    this.dateAdapter.setLocale('en-US'); //Formato de fecha para el datepicker

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
      ]),
      nroequipos: new FormControl('',[
        Validators.required,
      ]),
      idtipotorneo: new FormControl(1),
      idorganizador: new FormControl(this.idOrganizador),
    });
  }

  ngOnInit(): void {
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

  registrarTorneo():any{

    this.torneosService.crearTorneo(this.registerTipoTorneoForm)
    .subscribe(
      (res) => {
        console.log(res.value)
      },
      error => {

      }
    );
  }

  test(param:any){
    console.log(param);
  }

}
