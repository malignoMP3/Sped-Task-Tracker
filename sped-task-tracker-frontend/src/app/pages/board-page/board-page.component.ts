import { Component } from '@angular/core';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './board-page.component.html',

})
export class BoardPageComponent {

}
