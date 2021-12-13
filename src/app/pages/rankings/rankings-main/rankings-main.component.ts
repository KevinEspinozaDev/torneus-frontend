import { Component, OnInit } from '@angular/core';
import { RankingsService } from '../services/rankings.service';

@Component({
  selector: 'app-rankings-main',
  templateUrl: './rankings-main.component.html',
  styleUrls: ['./rankings-main.component.scss']
})
export class RankingsMainComponent implements OnInit {

  rankings : any;
  topEquipos:any;
  topJugadores:any;
  dataReady:boolean = false;

  constructor(
    private rankingsService : RankingsService
  ) { }

  ngOnInit(): void {
    this.rankingsService.getRankings()
    .subscribe(res => {
      this.topEquipos = res[0];
      this.topJugadores = res[1];
      this.dataReady = true;
      console.log(this.topJugadores)
    })
  }

}
