import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMainComponent } from './register-main/register-main.component';
import { RolRegisterComponent } from './rol-register/rol-register.component';

const routes: Routes = [
    {
        path: '', component: RegisterMainComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
