import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneosService } from '../services/torneos.service';
import { UserService } from '../../../shared/services/user.service';
import moment from 'moment';

@Component({
  selector: 'app-torneos-organizador',
  templateUrl: './torneos-organizador.component.html',
  styleUrls: ['./torneos-organizador.component.scss']
})
export class TorneosOrganizadorComponent implements OnInit {

  hoy:any = new Date();
  fechaFinTorneo:any;

  objeto:any;
  currentUser:any;
  dataReady:boolean = false;

  listaTorneos:any = [];

  constructor(
    private torneosService: TorneosService,
    private userService : UserService,
    private router : Router,
    ) { 
      
    }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();

    // Se utiliza el servicio para obtener la lista de torneos y se le pasa el parametro del idusuario
    this.listaTorneos = this.torneosService.getListaTorneosOrganizador(this.currentUser.idusuario)
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
