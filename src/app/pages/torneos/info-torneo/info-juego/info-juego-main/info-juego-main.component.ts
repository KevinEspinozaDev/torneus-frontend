import { Component, Input, OnInit } from '@angular/core';
import { TorneosService } from '../../../services/torneos.service';

@Component({
  selector: 'app-info-juego-main',
  templateUrl: './info-juego-main.component.html',
  styleUrls: ['./info-juego-main.component.scss']
})
export class InfoJuegoMainComponent implements OnInit {

  @Input() dataTorneo: any;
  infoJuego: any;

  constructor(
    private torneosService: TorneosService,
  ) { }

  ngOnInit(): void {
    //this.callGetVideojuegoFromService();
  }

}
