import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyEquipoGuard } from 'src/app/shared/guards/only-equipo.guard';
import { OnlyOrganizadorGuard } from 'src/app/shared/guards/only-organizador.guard';
import { InfoTorneoMainComponent } from './info-torneo-main/info-torneo-main.component';
import { InformarResultadoComponent } from './informar-resultado/informar-resultado.component';

const routes: Routes = [
  {
    path: '', component: InfoTorneoMainComponent 
  },
  
  {
    path: 'resultados', component: InformarResultadoComponent,
    canActivate : [OnlyEquipoGuard, OnlyOrganizadorGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoTorneoRoutingModule { }
