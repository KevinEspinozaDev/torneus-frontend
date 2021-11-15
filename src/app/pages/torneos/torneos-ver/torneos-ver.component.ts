import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../../../shared/services/torneo.service';

@Component({
  selector: 'app-torneos-ver',
  templateUrl: './torneos-ver.component.html',
  styleUrls: ['./torneos-ver.component.scss']
})
export class TorneosVerComponent implements OnInit {

  listaTorneos:any;
  constructor(private torneoService: TorneoService) { }

  ngOnInit(): void {
    this.listaTorneos = this.torneoService.getListaTorneos();
    //console.log(this.listaTorneos);
  }

}
