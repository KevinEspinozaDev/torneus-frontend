import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PerfilMainComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
