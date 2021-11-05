import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';


@NgModule({
  declarations: [
    TorneosVerComponent,
  ],
  imports: [
    CommonModule,
    TorneosRoutingModule,
    SharedModule
  ]
})
export class TorneosModule { }
