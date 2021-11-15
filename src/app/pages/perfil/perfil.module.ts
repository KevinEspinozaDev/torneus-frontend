import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { SharedModule } from '../../shared/shared.module';
import { DgEditarPerfilComponent } from './dg-editar-perfil/dg-editar-perfil.component';
import { EditarPerfilFormComponent } from './editar-perfil-form/editar-perfil-form.component';
import { DgMensajeEquipoComponent } from './dg-mensaje-equipo/dg-mensaje-equipo.component';


@NgModule({
  declarations: [
    PerfilMainComponent,
    DgEditarPerfilComponent,
    EditarPerfilFormComponent,
    DgMensajeEquipoComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
