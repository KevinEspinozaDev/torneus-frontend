import { Component, OnInit } from '@angular/core';
import { ListaTorneosService } from '../services/lista-torneos.service'; 
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
  selector: 'app-lista-torneos-inscriptos',
  templateUrl: './lista-torneos-inscriptos.component.html',
  styleUrls: ['./lista-torneos-inscriptos.component.scss']
})
export class ListaTorneosInscriptosComponent implements OnInit {

  listaTorneos: any;
  displayedColumns: string[] = ['nombre', 'fechainicio', 'fechafin'];

  sessionData:any;

  constructor(
    private listaTorneoService: ListaTorneosService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.sessionData = this.authenticationService.getSessionData();
    
    this.listaTorneoService.getListaTorneosByUserId(this.sessionData.idusuario)
    .subscribe(
      (listaTorneos) => {                           //next() callback
        console.log(listaTorneos);
        return this.listaTorneos = listaTorneos;
      },
      (error) => {                              //error() callback
        console.error(error)
      },
    );
    
    //this.listaTorneos = this.listaTorneoService.getListaTorneosByUserId(this.sessionData.idusuario);
  }

}
