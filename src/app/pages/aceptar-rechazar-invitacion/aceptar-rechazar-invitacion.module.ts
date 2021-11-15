import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { AceptarRechazarInvitacionRoutingModule } from './aceptar-rechazar-invitacion-routing.module';
import { InvitacionMainComponent } from './invitacion-main/invitacion-main.component';
import { DgAcceptarRechazarComponent } from './dg-acceptar-rechazar/dg-acceptar-rechazar.component';



@NgModule({
  declarations: [
    InvitacionMainComponent,
    DgAcceptarRechazarComponent
  ],
  imports: [
    CommonModule,
    AceptarRechazarInvitacionRoutingModule,
    SharedModule
  ]
})
export class AceptarRechazarInvitacionModule { }
