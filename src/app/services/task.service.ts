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

  create(task: Task): void {
    TASKS.push(task);
  }
}
