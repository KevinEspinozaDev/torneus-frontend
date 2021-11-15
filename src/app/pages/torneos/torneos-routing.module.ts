import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneosVerComponent } from './torneos-ver/torneos-ver.component';

const routes: Routes = [
  {
    path: '', component: TorneosVerComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneosRoutingModule { }
