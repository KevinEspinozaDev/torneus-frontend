import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTorneoMainComponent } from './single-torneo-main/single-torneo-main.component';

const routes: Routes = [
  {
    path: '', component: SingleTorneoMainComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiTorneoRoutingModule { }
