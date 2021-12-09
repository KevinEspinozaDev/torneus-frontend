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
  infotorneo:any;
  resultados:any;
  dataReady:boolean = false;

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
    this.torneosService.getListaInfoVersus(this.data.versus.idtorneo, this.data.versus.idversus)
    .subscribe(res => {
      console.log(res)
      // info versus
      console.log(res[0]);
      this.infoversus = res[0][0];

      // info torneo
      console.log(res[1]);
      this.infotorneo = res[1][0];

      // info equipo 1
      console.log(res[2]);

      this.dataReady = true;
    })
  }

  confirmar(){
    console.log(this.resultados.value);
  }

}
