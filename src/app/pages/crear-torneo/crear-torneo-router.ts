import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTorneoMainComponent } from './crear-torneo-main/crear-torneo-main.component';
//import { RolRegisterComponent } from './rol-register/rol-register.component';
import { CrearTorneoFormularioComponent } from './crear-torneo-formulario/crear-torneo-formulario.component';

const routes: Routes = [
    {
        path: '', component: CrearTorneoMainComponent
    },
    {
      path: 'crear-torneo-formulario/:id', component: CrearTorneoFormularioComponent, pathMatch : 'full'
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearTorneoRoutingModule { }
