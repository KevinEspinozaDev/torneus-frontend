import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTorneoMainComponent } from './crear-torneo-main/crear-torneo-main.component';
//import { TipoTorneoRegisterComponent } from './tipo-torneo-crear-torneo/tipo-torneo-crear-torneo.component';
import { SharedModule } from '../../shared/shared.module';
import { CrearTorneoRoutingModule } from './crear-torneo-router';
import { DialogTipoTorneoComponent } from './dialog-tipo-torneo/dialog-tipo-torneo.component';
import { CrearTorneoFormularioComponent } from './crear-torneo-formulario/crear-torneo-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CrearTorneoMainComponent,
    //TipoTorneoRegisterComponent,
    DialogTipoTorneoComponent,
    CrearTorneoFormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrearTorneoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CrearTorneoModule { }
