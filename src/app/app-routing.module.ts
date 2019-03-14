import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './alintaenergy/container/home/home.component';
import { ResultsComponent } from './alintaenergy/container/results/results.component';
const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'home'
    }
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: {
      breadcrumb: 'results'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
