import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarreraTecnicaComponent } from '../carrera-tecnica/components/carrera-tecnica/carrera-tecnica.component';
import { JornadaComponent } from '../jornada/components/jornada/jornada.component';
import { ExamenAdmisionComponent } from '../examen-admision/examen-admision/examen-admision.component';

const childRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'carreraTecnica', component: CarreraTecnicaComponent},
  {path: 'jornada', component: JornadaComponent}, 
  {path: 'examenAdmision', component: ExamenAdmisionComponent}

]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class RouterChildModule { }
