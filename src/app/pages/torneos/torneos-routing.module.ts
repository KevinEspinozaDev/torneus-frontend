import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';
import { TorneosOrganizadorComponent } from './torneos-organizador/torneos-organizador.component';
import { VersusResultadosComponent } from './versus-resultados/versus-resultados.component';
import { MiTorneoModule } from './mi-torneo/mi-torneo.module';

const routes: Routes = [
  {
    path: '', component: TorneosVerComponent 
  },
  {
    path: 'mis-torneos', component: TorneosOrganizadorComponent
  },
  {
    path: 'mi-torneo/:idtorneo', 
    loadChildren: () => import('./mi-torneo/mi-torneo.module').then(m => m.MiTorneoModule)
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
