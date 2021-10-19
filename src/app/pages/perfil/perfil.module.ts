import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';


@NgModule({
  declarations: [
    PerfilMainComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
