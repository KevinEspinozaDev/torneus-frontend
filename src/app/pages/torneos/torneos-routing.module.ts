import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';
import { TorneosOrganizadorComponent } from './torneos-organizador/torneos-organizador.component';
import { VersusResultadosComponent } from './versus-resultados/versus-resultados.component';
import { InfoTorneoModule } from './info-torneo/info-torneo.module';

const routes: Routes = [
  {
    path: '', component: TorneosVerComponent 
  },
  {
    path: 'mis-torneos', component: TorneosOrganizadorComponent
  },
  {
    path: 'info-torneo/:idtorneo', 
    loadChildren: () => import('./info-torneo/info-torneo.module').then(m => m.InfoTorneoModule)
  },
  {
    path: 'crear-torneo', 
    loadChildren: () => import('./../crear-torneo/crear-torneo.module').then(m => m.CrearTorneoModule)
  },
  {
    path: 'versus-resultados', component: VersusResultadosComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneosRoutingModule { }
