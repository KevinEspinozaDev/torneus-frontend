import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IntroduccionComponent } from './landing/introduccion/introduccion.component';
import { VentajasComponent } from './landing/ventajas/ventajas.component';
import { PanelesDropdownComponent } from './landing/paneles-dropdown/paneles-dropdown.component';
import { InvitarJugadoresMainComponent } from './invitar-jugadores/invitar-jugadores-main/invitar-jugadores-main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
