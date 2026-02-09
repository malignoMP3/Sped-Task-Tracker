import { Component, ViewChild } from '@angular/core';
import { BoardComponent } from '../../components/board/board.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { NgIf } from '@angular/common';
import { TaskService } from '../../core/task.service';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [BoardComponent, TaskFormComponent, NgIf],
  templateUrl: './board-page.component.html',
})
export class BoardPageComponent {

  @ViewChild(BoardComponent)
  boardComponent!: BoardComponent;

  isCreateModalOpen = false;

  constructor(private taskService: TaskService) { }


  openModal(): void {
    this.isCreateModalOpen = true;
  }

  closeModal(): void {
    this.isCreateModalOpen = false;
  }

  onCreateTask(data: {
    titulo: string;
    descricao: string;
  }): void {

    this.taskService.create(data).subscribe({
      next: (task) => {
        this.closeModal();
        this.boardComponent.loadTasks();

      },
      error: (err) => {
      }
    });
  }




}
