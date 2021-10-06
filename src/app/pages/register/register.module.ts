import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterMainComponent } from './register-main/register-main.component';
import { RolRegisterComponent } from './rol-register/rol-register.component';
import { SharedModule } from '../../shared/shared.module';
import { RegisterRoutingModule } from './register-router';



@NgModule({
  declarations: [
    RegisterMainComponent,
    RolRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
