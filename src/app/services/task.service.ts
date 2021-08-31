import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Tasks } from '../data/tasks-mock-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url = 'http://localhost:5005/tasks';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return of(Tasks);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  deleteTask(task: Task) {
    let url = `${this.url}/${task.id}`;
    return this.http.delete(url);
  }

  updateTaskReminder(task: Task) {
    let url = `${this.url}/${task.id}`;
    return this.http.put(url, task, httpOptions);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.url, task, httpOptions);
  }
}
