import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TorneosService } from '../../services/torneos.service';

@Component({
  selector: 'app-dg-informar-resultado',
  templateUrl: './dg-informar-resultado.component.html',
  styleUrls: ['./dg-informar-resultado.component.scss']
})
export class DgInformarResultadoComponent implements OnInit {

  infoversus:any;
  resultados:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private torneosService : TorneosService,
    private formBuilder : FormBuilder
  ) { 

    this.resultados = this.formBuilder.group({
      partida1: new FormControl('', [
        Validators.required
      ]),
      partida2: new FormControl('', [
        Validators.required
      ]),
      partida3: new FormControl('', [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
    this.infoversus = this.data.data;
  }

  confirmar(){
    console.log(this.resultados.value);
  }

}
