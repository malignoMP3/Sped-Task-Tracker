import { Component } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

interface MockTask {
  title: string;
  description: string;
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ColumnComponent],
  templateUrl: './board.component.html',
})
export class BoardComponent {

  pendingTasks: MockTask[] = [
    { title: 'Teste mock 1', description: 'Teste 1' },
    { title: 'Teste mock 2', description: 'Teste 2' }
  ];

  progressTasks: MockTask[] = [
    { title: 'Teste mock 3', description: 'Teste 3' }
  ];

  doneTasks: MockTask[] = [
    { title: 'Teste mock 4', description: 'Teste 4' }
  ];
}
