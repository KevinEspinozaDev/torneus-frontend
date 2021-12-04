import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

import { TorneosService } from '../../../services/torneos.service';


@Component({
  selector: 'app-lista-participantes-main',
  templateUrl: './lista-participantes-main.component.html',
  styleUrls: ['./lista-participantes-main.component.scss']
})
export class ListaParticipantesMainComponent implements OnInit {

  idtorneo:any;
  listaParticipantes: any;
  displayedColumns: string[] = ['equipo', 'puntos'];
  dataReady : boolean = false;

  constructor(
    private torneosService : TorneosService,
    private route : ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /* Obtener el id torneo que viene por la url */
    this.route.params 
    .subscribe(  
      (params) => { 
        if (params.idtorneo) {
          this.idtorneo = params.idtorneo;
        }
      } 
    );
    this.torneosService.getListaEquipos(this.idtorneo, true)
    .subscribe(
      (res) => {
        
        this.listaParticipantes = res;
        this.dataReady = true;
      }
    );
  }

}
