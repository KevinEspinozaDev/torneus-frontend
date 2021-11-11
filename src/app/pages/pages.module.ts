import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IntroduccionComponent } from './landing/introduccion/introduccion.component';
import { VentajasComponent } from './landing/ventajas/ventajas.component';
import { PanelesDropdownComponent } from './landing/paneles-dropdown/paneles-dropdown.component';
import { InvitarJugadoresMainComponent } from './invitar-jugadores/invitar-jugadores-main/invitar-jugadores-main.component';
import { SharedModule } from '../shared/shared.module';
import { DialogTipoTorneoComponent } from './crear-torneo/dialog-tipo-torneo/dialog-tipo-torneo.component';
import { CrearTorneoMainComponent } from './crear-torneo/crear-torneo-main/crear-torneo-main.component';
import { CrearTorneoFormularioComponent } from './crear-torneo/crear-torneo-formulario/crear-torneo-formulario.component';
import { SolicitudTorneoMainComponent } from './solicitud-torneo/solicitud-torneo-main/solicitud-torneo-main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
