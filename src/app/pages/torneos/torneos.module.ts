import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';


@NgModule({
  declarations: [
    TorneosVerComponent
  ],
  imports: [
    CommonModule,
    TorneosRoutingModule
  ]
})
export class TorneosModule { }
