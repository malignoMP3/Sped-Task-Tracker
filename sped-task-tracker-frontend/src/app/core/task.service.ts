import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskStatus } from '../models/task-status.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly apiUrl = 'http://localhost:5147/api/Task'
  // inserido porta fixa para não precisar utilizar o .env com a url



  constructor(private http: HttpClient) { }


  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }


  create(task: {
    titulo: string;
    descricao: string;
  }): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }


  update(
    id: number,
    task: {
      titulo: string;
      descricao: string;
      status: TaskStatus;
    }
  ): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }






}