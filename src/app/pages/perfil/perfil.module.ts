import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { SharedModule } from '../../shared/shared.module';
import { DgEditarPerfilComponent } from './dg-editar-perfil/dg-editar-perfil.component';
import { EditarPerfilFormComponent } from './editar-perfil-form/editar-perfil-form.component';
import { DgMensajeEquipoComponent } from './dg-mensaje-equipo/dg-mensaje-equipo.component';
import { ListaTorneosInscriptosComponent } from './lista-torneos-inscriptos/lista-torneos-inscriptos.component';
import { ListaInvitacionesEquiposComponent } from './lista-invitaciones-equipos/lista-invitaciones-equipos.component';
import { ListaMisEquiposComponent } from './lista-mis-equipos/lista-mis-equipos.component';


@NgModule({
  declarations: [
    PerfilMainComponent,
    DgEditarPerfilComponent,
    EditarPerfilFormComponent,
    DgMensajeEquipoComponent,
    ListaTorneosInscriptosComponent,
    ListaInvitacionesEquiposComponent,
    ListaMisEquiposComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
