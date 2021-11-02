import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudTorneoMainComponent } from './solicitud-torneo-main/solicitud-torneo-main.component';

const routes: Routes = [
    {
        path: '', component: SolicitudTorneoMainComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudTorneoRoutingModule { }
