import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTorneoMainComponent } from './crear-torneo-main/crear-torneo-main.component';
//import { TipoTorneoRegisterComponent } from './tipo-torneo-crear-torneo/tipo-torneo-crear-torneo.component';
import { SharedModule } from '../../shared/shared.module';
import { CrearTorneoRoutingModule } from './crear-torneo-router';
import { DialogTipoTorneoComponent } from './dialog-tipo-torneo/dialog-tipo-torneo.component';
import { CrearTorneoFormularioComponent } from './crear-torneo-formulario/crear-torneo-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { DateFormat } from 'src/app/DateFormat';




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
  providers : [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormat },
  ]
})
export class CrearTorneoModule { }
