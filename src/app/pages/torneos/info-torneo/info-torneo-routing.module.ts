import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyEquipoGuard } from 'src/app/shared/guards/only-equipo.guard';
import { OnlyOrganizadorGuard } from 'src/app/shared/guards/only-organizador.guard';
import { VersusResultadosComponent } from '../versus-resultados/versus-resultados.component';
import { InfoTorneoMainComponent } from './info-torneo-main/info-torneo-main.component';

const routes: Routes = [
  {
    path: '', component: InfoTorneoMainComponent 
  },
  {
    path: ':idtorneo',
    component: InfoTorneoMainComponent
  },
  {
    path: 'resultados', component: VersusResultadosComponent,
    canActivate : [OnlyEquipoGuard, OnlyOrganizadorGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoTorneoRoutingModule { }
