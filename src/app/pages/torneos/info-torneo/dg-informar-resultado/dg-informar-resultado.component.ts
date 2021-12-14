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

  nameequipo1:any;
  nameequipo2:any;

  listaEncuentrosPorEquipo:any;

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
      idequipo: new FormControl(''),
      idversus: new FormControl('')
    });
  }

  ngOnInit(): void {
    //console.log(this.data);
    this.nameequipo1 = this.data.versus.nameequipo1;
    this.nameequipo2 = this.data.versus.nameequipo2;
    this.torneosService.getListaInfoVersus(this.data.versus.idtorneo, this.data.versus.idversus)
    .subscribe(res => {
      // info versus
      //console.log(res[0][0]);
      this.infoversus = res[0][0];

      // info torneo
      //console.log(res[1]);
      this.infotorneo = res[1][0];

      // info equipo 1
      //console.log(res[2]);
      //console.log(res);

      this.dataReady = true;
    });
    this.callGetEncuentrosDeEquipoFromService(this.data.versus.idversus, this.data.idusuario);
  }

  callGetEncuentrosDeEquipoFromService(idversus:any, idequipo:any){
    return this.torneosService.getEncuentrosDeEquipo(idversus, idequipo)
    .subscribe(
      (res) => {
        this.listaEncuentrosPorEquipo = res;
      }
    );
  }

  confirmar(){
    this.resultados.controls['idequipo'].setValue(this.data.idusuario);
    this.resultados.controls['idversus'].setValue(this.infoversus.idversus);
    //console.log(this.resultados.value);
    console.log(this.listaEncuentrosPorEquipo);
    let listaEncuentros = this.listaEncuentrosPorEquipo;

    let arregloVictorias = [
      {victoriaNueva: parseInt(this.resultados.value.partida1)},
      {victoriaNueva: parseInt(this.resultados.value.partida2)},
      {victoriaNueva: parseInt(this.resultados.value.partida3)},
    ]
    //console.log(arregloVictorias);
    let indexVictoria = 0;
    let encuentrosModificado = [];

    for(let encuentro of listaEncuentros){
      let objetoEncuentro = encuentro;
      objetoEncuentro.victoria = arregloVictorias[indexVictoria].victoriaNueva;
      encuentrosModificado.push(objetoEncuentro);
      indexVictoria++;
    }
    console.log(encuentrosModificado);

    
    this.torneosService.updateEncuentroVictoria(encuentrosModificado)
    .subscribe(
      (res) => {
        window.location.reload();
      }
    );
    
    
  }

}
