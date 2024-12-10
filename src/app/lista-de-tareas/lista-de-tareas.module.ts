import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeTareasPageRoutingModule } from './lista-de-tareas-routing.module';

import { ListaDeTareasPage } from './lista-de-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeTareasPageRoutingModule
  ],
  declarations: [ListaDeTareasPage]
})
export class ListaDeTareasPageModule {}
