import { Component, ViewChild } from '@angular/core';
import { BoardComponent } from '../../components/board/board.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { NgIf } from '@angular/common';
import { TaskService } from '../../core/task.service';
import { Task } from '../../models/task.model';

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
  selectedTask: Task | null = null;
  isEditMode = false;

  constructor(private taskService: TaskService) {}

  openModal(): void {
    this.selectedTask = null;
    this.isEditMode = false;
    this.isCreateModalOpen = true;
  }

  openEditModal(task: Task): void {
    this.selectedTask = task;
    this.isEditMode = true;
    this.isCreateModalOpen = true;
  }

  closeModal(): void {
    this.isCreateModalOpen = false;
    this.selectedTask = null;
    this.isEditMode = false;
  }

  onSubmitTask(data: { titulo: string; descricao: string }): void {
    if (this.isEditMode && this.selectedTask) {
      this.taskService.update(this.selectedTask.id, data).subscribe({
        next: () => this.afterSave()
      });
    } else {
      this.taskService.create(data).subscribe({
        next: () => this.afterSave()
      });
    }
  }

  private afterSave(): void {
    this.closeModal();
    this.boardComponent.loadTasks();
  }
}
