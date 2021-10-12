import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ButtonBackComponent } from './components/button-back/button-back.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonBackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    ButtonBackComponent
  ]
})
export class SharedModule { }
