import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionMainComponent } from './invitacion-main/invitacion-main.component';

const routes: Routes = [
  {
    path: '', component: InvitacionMainComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AceptarRechazarInvitacionRoutingModule { }
