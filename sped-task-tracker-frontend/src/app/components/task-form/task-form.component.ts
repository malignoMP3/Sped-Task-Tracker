import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskStatus } from '../../models/task-status.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {

  titulo = '';
  descricao = '';

  taskStatuses = Object.values(TaskStatus);

  status: TaskStatus = TaskStatus.Pendente;

  @Output() submitTask = new EventEmitter<{
    titulo: string;
    descricao: string;
  }>();

  onSubmit(): void {
    this.submitTask.emit({

      titulo: this.titulo,
      descricao: this.descricao,
    });
  }
}
