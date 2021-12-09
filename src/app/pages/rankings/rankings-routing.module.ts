import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingsMainComponent } from './rankings-main/rankings-main.component';

const routes: Routes = [
  {
    path : '', component : RankingsMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingsRoutingModule { }
