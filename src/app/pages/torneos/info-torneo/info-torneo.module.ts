import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';


import { InfoTorneoRoutingModule } from './info-torneo-routing.module';
import { ListaAplicantesMainComponent } from './lista-aplicantes/lista-aplicantes-main/lista-aplicantes-main.component';
import { DgAceptarRechazarEquipoComponent } from './lista-aplicantes/dg-aceptar-rechazar-equipo/dg-aceptar-rechazar-equipo.component';
import { InfoTorneoMainComponent } from './info-torneo-main/info-torneo-main.component';
import { DgListaAplicantesComponent } from './dg-lista-aplicantes/dg-lista-aplicantes.component';
import { ListaParticipantesMainComponent } from './lista-participantes/lista-participantes-main/lista-participantes-main.component';
import { FixtureMainComponent } from './fixture/fixture-main/fixture-main.component';
import { DgAsignarGanadorComponent } from './fixture/dg-asignar-ganador/dg-asignar-ganador.component';
import { DgModificarFechaInicioComponent } from './fixture/dg-modificar-fecha-inicio/dg-modificar-fecha-inicio.component';


@NgModule({
  declarations: [
    ListaAplicantesMainComponent,
    DgAceptarRechazarEquipoComponent,
    InfoTorneoMainComponent,
    DgListaAplicantesComponent,
    ListaParticipantesMainComponent,
    FixtureMainComponent,
    DgAsignarGanadorComponent,
    DgModificarFechaInicioComponent
  ],
  imports: [
    CommonModule,
    InfoTorneoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class InfoTorneoModule { }
