import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe, MatIconModule],
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() dataCriacao!: string;

  @Output() select = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
