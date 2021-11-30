import { Component, OnInit } from '@angular/core';
import { generateSchedule } from "sports-schedule-generator";

import { TorneoService } from '../../services/torneo.service'; 
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-fixture-main',
  templateUrl: './fixture-main.component.html',
  styleUrls: ['./fixture-main.component.scss']
})
export class FixtureMainComponent implements OnInit {

  arregloFechasVersus: any;
  participantes: any;
  displayedColumns: string[] = ['idequipo1', 'idequipo2', 'fecha', 'informar_resultado'];

  test:any = [];

  sessionData:any;

  constructor(
    private torneoService: TorneoService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();
  }

  generarFixture(){
    /*
    this.torneoService.getListaParticipantes(idtorneo)
    .subscribe(
      (participantes) => {      //next() callback
        console.log(participantes);
        this.participantes = participantes;
      },
      (error) => {      //error() callback
        console.error(error)
      },
    );
    */
    let arrayIdEquipos: any = [];
    /*
    for (let participante of this.participantes) {
      arrayIdEquipos.push(participante.idequipo);
    }
    */
    for (let i=1; i<=6; i++) {
      arrayIdEquipos.push(i);
    }
    //console.log(arrayIdEquipos);
    arrayIdEquipos = this.shuffleArray(arrayIdEquipos);
    this.arregloFechasVersus = generateSchedule(arrayIdEquipos);

    console.log(this.arregloFechasVersus);

    let objetoVersus;
    let index = 1;
    let arregloVersus = [];
    for (let fecha of this.arregloFechasVersus) {
      for (let versus of fecha) {
        objetoVersus = {
          nroFecha: index,
          idequipo1: versus.home,
          idequipo2: versus.away,
          fecha: "2021-12-12", //Por defecto: fecha inicio del torneo
        };
        arregloVersus.push(objetoVersus);
        //console.log(objetoVersus);
      }
      /*
      this.torneoService.setFixture(idtorneo, objetoVersus)
      .subscribe(
        (res) => {                           //next() callback
          console.log(res);
        },
        (error) => {                              //error() callback
          console.error(error)
        },
      );
      */
      index++;
    }
    console.log(arregloVersus);

    let arregloVersusFinal: any = [];

    for(let versusSingle of arregloVersus){
      if(typeof arregloVersusFinal[versusSingle.nroFecha] === 'undefined'){
        arregloVersusFinal[versusSingle.nroFecha] = [];
      }
      arregloVersusFinal[versusSingle.nroFecha].push(versusSingle);
    }

    arregloVersusFinal = arregloVersusFinal.filter(function (el:any) {
      return el != null;
    });

    console.log(arregloVersusFinal);
    this.test = arregloVersusFinal;

  }

  shuffleArray(a:any) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
 }

}
