import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'agregar-tarea',
    loadChildren: () => import('./agregar-tarea/agregar-tarea.module').then( m => m.AgregarTareaPageModule)
  },
  {
    path: 'lista-de-tareas',
    loadChildren: () => import('./lista-de-tareas/lista-de-tareas.module').then( m => m.ListaDeTareasPageModule)
  },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

