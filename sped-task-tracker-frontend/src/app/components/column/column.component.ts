import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor, NgClass } from '@angular/common';

interface MockTask {
  title: string;
  description: string;
}

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CardComponent, NgFor, NgClass],
  templateUrl: './column.component.html',
})
export class ColumnComponent {
  @Input() title!: string;
  @Input() status!: 'pending' | 'progress' | 'done';
  @Input() tasks: MockTask[] = [];
}
