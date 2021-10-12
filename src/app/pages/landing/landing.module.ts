import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LandingRoutingModule } from './landing-router';
import { LandingMainComponent } from './landing-main/landing-main.component';

import { IntroduccionComponent } from './introduccion/introduccion.component';
import { VentajasComponent } from './ventajas/ventajas.component';
import { PanelesDropdownComponent } from './paneles-dropdown/paneles-dropdown.component';



@NgModule({
  declarations: [
    LandingMainComponent,
    IntroduccionComponent,
    VentajasComponent,
    PanelesDropdownComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
