import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';
import { TorneosOrganizadorComponent } from './torneos-organizador/torneos-organizador.component';


@NgModule({
  declarations: [
    TorneosVerComponent,
    TorneosOrganizadorComponent,
  ],
  imports: [
    CommonModule,
    TorneosRoutingModule,
    SharedModule
  ]
})
export class TorneosModule { }
