import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task?: Task;
  @ViewChild('titleInput') titleInput!: ElementRef;
  isEditing = false;

  constructor(private taskService: TaskService) {}

  toggleIsEditing(): void {
    if (!this.isEditing) {
      setTimeout(() => {
        this.titleInput.nativeElement.focus();
      }, 0);
    }
    this.isEditing = !this.isEditing;
  }

  handleDelete(task: Task): void {
    this.taskService.delete(task);
  }
}
