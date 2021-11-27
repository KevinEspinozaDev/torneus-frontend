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

  listaTorneos:any;
  constructor(
    private torneosService: TorneosService,
    private router : Router,
    ) { 
      
    }

  ngOnInit(): void {
    this.listaTorneos = this.torneosService.getListaTorneos();
    //console.log(this.listaTorneos);
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

}
