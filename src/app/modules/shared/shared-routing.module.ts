import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/pages/dashboard.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('../dashboard/router-child.module').then(m => m.RouterChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
