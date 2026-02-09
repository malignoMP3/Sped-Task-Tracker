import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor, NgClass } from '@angular/common';
import { Task } from '../../models/task.model';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [
    CardComponent,
    NgFor,
    NgClass,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './column.component.html',
})
export class ColumnComponent {

  @Input() dropListId!: string;
  @Input() connectedTo: string[] = [];

  @Input() title!: string;
  @Input() tasks: Task[] = [];

  @Output() selectTask = new EventEmitter<Task>();

  @Output() taskDropped = new EventEmitter<CdkDragDrop<Task[]>>();

  onDrop(event: CdkDragDrop<Task[]>) {
    this.taskDropped.emit(event);
  }

  onSelect(task: Task): void {
    this.selectTask.emit(task);
  }
}
