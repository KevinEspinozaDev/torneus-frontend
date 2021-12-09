import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TorneosService } from '../../services/torneos.service';

@Component({
  selector: 'app-informar-resultado',
  templateUrl: './informar-resultado.component.html',
  styleUrls: ['./informar-resultado.component.scss']
})
export class InformarResultadoComponent implements OnInit {

  infoversus:any;
  resultados:any;

  constructor(
    private torneosService : TorneosService,
    private formBuilder : FormBuilder
  ) { 

    this.resultados = this.formBuilder.group({
      partida1: new FormControl('', [
      ]),
      partida2: new FormControl('', [
      ]),
      partida3: new FormControl('', [
      ]),
    });
  }

  ngOnInit(): void {
    this.infoversus = this.torneosService.getVersusParaResultado();
    console.log(this.infoversus)
  }

  confirmar(){
    console.log(this.resultados.value);
  }

}
