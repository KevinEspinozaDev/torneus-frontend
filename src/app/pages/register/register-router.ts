import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMainComponent } from './register-main/register-main.component';
import { RolRegisterComponent } from './rol-register/rol-register.component';
import { RegisterFormularioComponent } from './register-formulario/register-formulario.component';

const routes: Routes = [
    {
        path: '', component: RegisterMainComponent
    },
    {
      path: 'register-formulario', component: RegisterFormularioComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
