import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/models/task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  create(title: string): void {
    const id = TASKS.length + 1;

    TASKS.push({
      id: id,
      title: title,
    });
  }

  delete(task: Task): void {
    const index = TASKS.indexOf(task);

    TASKS.splice(index, 1);
    console.log(TASKS);
  }
}
