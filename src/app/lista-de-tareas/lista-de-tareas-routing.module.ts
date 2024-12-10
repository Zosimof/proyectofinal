import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeTareasPage } from './lista-de-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeTareasPageRoutingModule {}
