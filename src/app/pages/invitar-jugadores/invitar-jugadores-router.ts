import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitarJugadoresMainComponent } from './invitar-jugadores-main/invitar-jugadores-main.component';

const routes: Routes = [
    {
        path: '', component: InvitarJugadoresMainComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitarJugadoresRoutingModule { }
