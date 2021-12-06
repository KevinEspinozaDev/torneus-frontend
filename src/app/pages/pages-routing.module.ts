import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { OnlyEquipoGuard } from '../shared/guards/only-equipo.guard';

const routes: Routes = [
  { path: '', redirectTo: 'torneos', pathMatch: 'full' },
  
  {
    path: 'torneos',
    loadChildren: () => import('./torneos/torneos.module').then(m => m.TorneosModule)
  },
  {
    path: 'invitar-jugadores', 
    loadChildren: () => import('./invitar-jugadores/invitar-jugadores.module').then(m => m.InvitarJugadoresModule),
    canActivate : [OnlyEquipoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: 'solicitud-torneo', 
    loadChildren: () => import('./solicitud-torneo/solicitud-torneo.module').then(m => m.SolicitudTorneoModule),
    canActivate : [OnlyEquipoGuard]
  },
  {
    path: 'aceptar-invitacion', 
    loadChildren: () => import('./aceptar-rechazar-invitacion/aceptar-rechazar-invitacion.module').then(m => m.AceptarRechazarInvitacionModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
