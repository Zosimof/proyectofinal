import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.page.html',
  styleUrls: ['./lista-de-tareas.page.scss'],
})
export class ListaDeTareasPage implements OnInit {
  completedTasks: any[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchCompletedTasks();
  }

  async fetchCompletedTasks() {
    try {
      const response = await fetch('http://localhost:3000/completed-tasks');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.completedTasks = await response.json();
    } catch (error) {
      console.error('Error fetching completed tasks:', error);
      alert('Error loading completed tasks');
    }
  }
}