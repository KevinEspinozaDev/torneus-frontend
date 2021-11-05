import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { MiTorneoRoutingModule } from './mi-torneo-routing.module';
import { ListaAplicantesMainComponent } from './lista-aplicantes/lista-aplicantes-main/lista-aplicantes-main.component';
import { DgAceptarRechazarEquipoComponent } from './lista-aplicantes/dg-aceptar-rechazar-equipo/dg-aceptar-rechazar-equipo.component';
import { SingleTorneoMainComponent } from './single-torneo-main/single-torneo-main.component';
import { DgListaAplicantesComponent } from './dg-lista-aplicantes/dg-lista-aplicantes.component';


@NgModule({
  declarations: [
    ListaAplicantesMainComponent,
    DgAceptarRechazarEquipoComponent,
    SingleTorneoMainComponent,
    DgListaAplicantesComponent
  ],
  imports: [
    CommonModule,
    MiTorneoRoutingModule,
    SharedModule
  ]
})
export class MiTorneoModule { }
