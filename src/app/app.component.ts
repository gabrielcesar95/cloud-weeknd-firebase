import { Component } from '@angular/core';
import { TASKS } from './mock-tasks';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  tasks = TASKS;
}
