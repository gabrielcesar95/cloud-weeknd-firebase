import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { CollectionReference, addDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks$: Observable<Task[]>;
  firestore: Firestore = inject(Firestore);
  tasksCollection: CollectionReference;

  constructor() {
    this.tasksCollection = collection(this.firestore, 'tasks');
    this.tasks$ = collectionData(this.tasksCollection, {
      idField: 'id',
    }) as Observable<Task[]>;
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  async create(title: string): Promise<void> {
    if (!title) {
      return;
    }

    await addDoc(this.tasksCollection, <Task>{ title });
  }

  async update(task: Task): Promise<void> {
    const docReference = doc(this.firestore, `tasks/${task.id}`);
    await updateDoc(docReference, { ...task });
  }

  async delete(task: Task): Promise<void> {
    const docReference = doc(this.firestore, `tasks/${task.id}`);
    await deleteDoc(docReference);
  }
}
