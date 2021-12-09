import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { TorneosService } from '../../services/torneos.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-info-torneo-main',
  templateUrl: './info-torneo-main.component.html',
  styleUrls: ['./info-torneo-main.component.scss']
})
export class InfoTorneoMainComponent implements OnInit {

  idtorneo:any;
  soyElOrganizador:boolean = false;

  dataTorneo:any;
  dataReady:boolean = false;

  constructor(
    private torneosService : TorneosService,
    private route : ActivatedRoute,
    private router: Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
  
    /* Obtener el id torneo que viene por la url */
    this.route.params 
    .subscribe(  
      (params) => { 
        if (params.idtorneo) {
          this.idtorneo = params.idtorneo;
        }
      } 
    );

    /* Obtener los datos del torneo dado el idtorneo */
    this.torneosService.getDataTorneo(this.idtorneo)
    .subscribe(
      (res) => {
        if(res.length != 0){
          this.dataTorneo = res[0];
          this.dataReady = true;
          if (this.dataReady == true) {
            /* Verifica si yo soy organizador */
             this.evaluarSoyOrganizador();
          }
          
        }
        else{
          console.log('No se encontraron datos para ese torneo desde info-torneo-main')
           this.router.navigateByUrl('/torneos');
        }
      }
    );
    
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
    const usuario = this.userService.getCurrentUser();
    // Si el idorganizador del torneo es igual al idusuario mio, soyelorganizador es true
    if (usuario.idrol == '4' && this.dataTorneo.idorganizador == usuario.idusuario) {
      console.log('Eres el organizador de este torneo.');
      this.soyElOrganizador = true;
    }else{
      console.log('No eres el organizador de este torneo.');
    }
    //Sino
    //this.soyElOrganizador = false;
  }

}
