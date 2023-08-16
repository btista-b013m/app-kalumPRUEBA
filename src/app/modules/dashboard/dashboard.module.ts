import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CarreraTecnicaModule } from '../carrera-tecnica/carrera-tecnica.module';
import { JornadaModule } from '../jornada/jornada.module';
import { ExamenAdmisionModule } from '../examen-admision/examen-amision.module';
import { LoginModule } from '../login/login.module';
import { MaterialModule } from '../shared/material.module';
import { Usuario } from '../usuario/models/usuario';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CarreraTecnicaModule,
    JornadaModule,
    ExamenAdmisionModule,
    LoginModule,
    MaterialModule
  ]
})
export class DashboardModule { }
