import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosService } from '../services/torneos.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-torneos-ver',
  templateUrl: './torneos-ver.component.html',
  styleUrls: ['./torneos-ver.component.scss']
})
export class TorneosVerComponent implements OnInit {

  objeto:any;

  hoy:any = new Date();
  fechaFinTorneo:any;
  rol:any;

  dataReady:boolean = false;

  listaTorneos:any;
  constructor(
    private torneosService: TorneosService,
    private router : Router,
    private userService : UserService
    ) { 
      
    }

  ngOnInit(): void {
    this.listaTorneos = this.torneosService.getAllTorneos()
    .subscribe(res => {
      if (res) {
        //console.log(res);
        this.dataReady = true;
        this.listaTorneos = res;

        this.rol = this.userService.getRolPalabras();

      }
    });
  }

  objetoTorneo(torneo:any):void{
    console.log(torneo);
    this.router.navigateByUrl('/torneos/mi-torneo/'+torneo.idtorneo);
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
