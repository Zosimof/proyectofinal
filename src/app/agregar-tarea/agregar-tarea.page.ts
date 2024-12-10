import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})
export class AgregarTareaPage {
  tarea = {
    titulo: '',
    descripcion: '',
    tipo: '',
  };

  constructor(private navCtrl: NavController) {}

  async agregarTarea() {
    try {
      const response = await axios.post('http://localhost:3000/add-task', this.tarea);
      console.log('Task added:', response.data);
      alert('Tarea agregada exitosamente');
      this.navCtrl.navigateBack('/main');
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error al agregar la tarea');
    }
  }
}



