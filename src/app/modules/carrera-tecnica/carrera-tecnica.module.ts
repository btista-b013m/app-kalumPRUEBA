import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CarreraTecnicaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ]
})
export class CarreraTecnicaModule { }
