import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarAddComponent } from './car-add/car-add.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarEditComponent } from './car-edit/car-edit.component';

const routes: Routes = [
  {
    path: 'listar-auto',
    component: CarListComponent
  },
  {
    path: 'agregar-auto',
    component: CarAddComponent
  },
  {
    path: 'editar-auto/:id',
    component: CarEditComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'sales',
    children: [
      {
        path: 'new',
        component: NotFoundComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class CarRoutingModule { }
