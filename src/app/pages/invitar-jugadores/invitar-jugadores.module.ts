import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { InvitarJugadoresRoutingModule } from './invitar-jugadores-router';
import { InvitarJugadoresMainComponent } from './invitar-jugadores-main/invitar-jugadores-main.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { DialogSearchUserComponent } from './dialog-search-user/dialog-search-user.component';
import { DgEnviarSolicitudComponent } from './dg-enviar-solicitud/dg-enviar-solicitud.component';




@NgModule({
  declarations: [
    InvitarJugadoresMainComponent,
    SearchUserComponent,
    DialogSearchUserComponent,
    DgEnviarSolicitudComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InvitarJugadoresRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  
})
export class InvitarJugadoresModule { }
