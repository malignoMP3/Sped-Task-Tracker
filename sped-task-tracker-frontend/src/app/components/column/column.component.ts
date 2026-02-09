import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor, NgClass } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CardComponent, NgFor, NgClass],
  templateUrl: './column.component.html',
})
export class ColumnComponent {

  @Input() title!: string;
  @Input() tasks: Task[] = [];

  @Output() selectTask = new EventEmitter<Task>();

  onSelect(task: Task): void {
    this.selectTask.emit(task);
  }
}
