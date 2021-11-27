import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';
import { TorneosOrganizadorComponent } from './torneos-organizador/torneos-organizador.component';

const routes: Routes = [
  {
    path: '', component: TorneosVerComponent 
  },
  {
    path: 'mis-torneos', component: TorneosOrganizadorComponent
  },
  {
    path: 'crear-torneo', 
    loadChildren: () => import('./../crear-torneo/crear-torneo.module').then(m => m.CrearTorneoModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneosRoutingModule { }
