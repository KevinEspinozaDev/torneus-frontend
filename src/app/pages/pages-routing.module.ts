import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';

const routes: Routes = [
  {
    path: 'home', component: HomeMainComponent
  },
  {
    path: 'torneos',
    loadChildren: () => import('./torneos/torneos.module').then(m => m.TorneosModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
