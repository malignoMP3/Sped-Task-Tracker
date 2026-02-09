import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskStatus } from '../../models/task-status.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {

  @Input() task: Task | null = null;
  @Input() isEditMode = false;

  titulo = '';
  descricao = '';

  taskStatuses = Object.values(TaskStatus);

  status: TaskStatus = TaskStatus.Pendente;

  @Output() submitTask = new EventEmitter<{
    titulo: string;
    descricao: string;
  }>();


  ngOnInit(): void {
    if (this.task) {
      this.titulo = this.task.titulo;
      this.descricao = this.task.descricao;
      this.status = this.task.status;
    }
  }

  onSubmit(): void {
    this.submitTask.emit({

      titulo: this.titulo,
      descricao: this.descricao,
    });
  }
}
