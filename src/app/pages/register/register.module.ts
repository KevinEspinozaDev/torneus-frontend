import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterMainComponent } from './register-main/register-main.component';
import { RolRegisterComponent } from './rol-register/rol-register.component';
import { SharedModule } from '../../shared/shared.module';
import { RegisterRoutingModule } from './register-router';
import { DialogConfirmarRolComponent } from './dialog-confirmar-rol/dialog-confirmar-rol.component';
import { RegisterFormularioComponent } from './register-formulario/register-formulario.component';



@NgModule({
  declarations: [
    RegisterMainComponent,
    RolRegisterComponent,
    DialogConfirmarRolComponent,
    RegisterFormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
