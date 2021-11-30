import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { TorneosService } from '../../services/torneos.service';

@Component({
  selector: 'app-info-torneo-main',
  templateUrl: './info-torneo-main.component.html',
  styleUrls: ['./info-torneo-main.component.scss']
})
export class InfoTorneoMainComponent implements OnInit {

  idtorneo:any;
  soyElOrganizador:boolean = false;

  dataTorneo:any;

  constructor(
    private torneosService : TorneosService,
    private route : ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /* Verifica si yo soy organizador */
    this.evaluarSoyOrganizador();

    /* Obtener el id torneo que viene por la url */
    this.route.params 
    .subscribe(  
      (params) => { 
        if (params.idtorneo) {
          this.idtorneo = params.idtorneo;
        }
        else{
          //this.router.navigate(['/torneos']);
        }
      } 
    );

    /* Obtener los datos del torneo dado el idtorneo */
    this.torneosService.getDataTorneo(this.idtorneo);
    
      /* Dentro del subscribe. si da error la request, hacer un
      this.router.navigateByUrl('/torneos);
      */

    /*
    this.idtorneo = this.torneosService.getObjetoTorneo()
    .subscribe((res) => {
        console.log(res);
    });
    */
  }

  evaluarSoyOrganizador(){
    // Si el idorganizador del torneo es igual al idusuario mio, soyelorganizador es true
    this.soyElOrganizador = true;

    //Sino
    //this.soyElOrganizador = false;
  }

}
