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

  constructor(
    private rankingsService : RankingsService
  ) { }

  ngOnInit(): void {
    this.rankingsService.getRankings()
    .subscribe(res => {
      this.topEquipos = res[0];
      console.log(this.topEquipos)
    })
  }

}
