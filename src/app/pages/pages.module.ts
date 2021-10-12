import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IntroduccionComponent } from './landing/introduccion/introduccion.component';
import { VentajasComponent } from './landing/ventajas/ventajas.component';
import { PanelesDropdownComponent } from './landing/paneles-dropdown/paneles-dropdown.component';


@NgModule({
  declarations: [
    IntroduccionComponent,
    VentajasComponent,
    PanelesDropdownComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
