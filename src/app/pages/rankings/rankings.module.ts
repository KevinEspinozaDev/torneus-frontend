import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsMainComponent } from './rankings-main/rankings-main.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RankingsMainComponent
  ],
  imports: [
    CommonModule,
    RankingsRoutingModule,
    SharedModule
  ]
})
export class RankingsModule { }
