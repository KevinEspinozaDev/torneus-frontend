import { Component, OnInit } from '@angular/core';
import { TorneosService } from '../services/torneos.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-versus-resultados',
  templateUrl: './versus-resultados.component.html',
  styleUrls: ['./versus-resultados.component.scss']
})
export class VersusResultadosComponent implements OnInit {

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
