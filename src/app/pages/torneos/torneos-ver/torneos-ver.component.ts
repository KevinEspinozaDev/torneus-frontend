import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosService } from '../services/torneos.service';

@Component({
  selector: 'app-torneos-ver',
  templateUrl: './torneos-ver.component.html',
  styleUrls: ['./torneos-ver.component.scss']
})
export class TorneosVerComponent implements OnInit {

  objeto:any;

  hoy:any = new Date();
  fechaFinTorneo:any;

  currentUser:any;
  dataReady:boolean = false;

  listaTorneos:any;
  constructor(
    private torneosService: TorneosService,
    private router : Router,
    ) { 
      
    }

  ngOnInit(): void {
    this.listaTorneos = this.torneosService.getAllTorneos()
    .subscribe(res => {
      if (res) {
        console.log(res);
        this.dataReady = true;
        this.listaTorneos = res;
      }
    })
  }

  setearObjeto() {

    let objeto = [
      {
        'id' : '10'
      }
    ]
    this.torneosService.setObjetoTorneo(objeto[0]);
    this.router.navigateByUrl('/perfil')
  }

  objetoTorneo(torneo:any):void{
    console.log(torneo);
    console.log(this.hoy)
    console.log(this.fechaFinTorneo)
  }

  torneoExpirado(torneo:any):boolean{
    let resultado = false;
    this.fechaFinTorneo = new Date(torneo.fechafin);
    this.fechaFinTorneo.setDate(this.fechaFinTorneo.getDate() + 1);
    this.fechaFinTorneo.setHours(23);
    this.fechaFinTorneo.setMinutes(59);
    this.fechaFinTorneo.setSeconds(59);

    if (this.hoy > this.fechaFinTorneo) {
      resultado = true;
    }else{
      resultado = false;
    }

    return resultado;
  }

}
