import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoTorneoMainComponent } from './info-torneo-main/info-torneo-main.component';

const routes: Routes = [
  {
    path: '', component: InfoTorneoMainComponent 
  },
  {
    path: ':idtorneo',
    component: InfoTorneoMainComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoTorneoRoutingModule { }
