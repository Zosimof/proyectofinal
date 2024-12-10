import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  tasks: any[] = []; 

  constructor(private routerOutlet: IonRouterOutlet) {}

  ngOnInit() {
    this.fetchTasks(); 
  }

  ionViewWillEnter() {
   
    this.fetchTasks();
  }

  async fetchTasks() {
    try {
      const response = await fetch('http://localhost:3000/tasks'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.tasks = await response.json();
      console.log('Tasks fetched:', this.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Error loading tasks');
    }
  }

  async markTaskAsCompleted(taskId: number) {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}/completed`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Task marked as completed');
      this.fetchTasks(); 
    } catch (error) {
      console.error('Error marking task as completed:', error);
      alert('Error completing task');
    }
  }

  async completarTarea(taskId: number) {
    try {
      const response = await fetch(`http://localhost:3000/completar-task/${taskId}`, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log(`Task with ID ${taskId} marked as completed.`);
  
    
      this.fetchTasks();
    } catch (error) {
      console.error('Error completing task:', error);
      alert('Error completing task');
    }
  }
  
  
}


