import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  constructor(private taskService: TaskService) {}

  saveTask(title: string): void {
    this.taskService.create({ title: title });
  }
}
