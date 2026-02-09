import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { TaskService } from '../../core/task.service';
import { Task } from '../../models/task.model';
import { TaskStatus } from '../../models/task-status.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ColumnComponent],
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {

  @Output() editTask = new EventEmitter<Task>();

  pendingTasks: Task[] = [];
  progressTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(private taskService: TaskService) { }



  
loadTasks(): void {
  this.taskService.getAll().subscribe(tasks => {
    this.pendingTasks = tasks.filter(t => t.status === TaskStatus.Pendente);
    this.progressTasks = tasks.filter(t => t.status === TaskStatus.EmAndamento);
    this.doneTasks = tasks.filter(t => t.status === TaskStatus.Concluido);
  });
  
}


onEditTask(task: Task): void {
  this.editTask.emit(task);
}


  ngOnInit(): void {
    this.loadTasks();
  }
}
