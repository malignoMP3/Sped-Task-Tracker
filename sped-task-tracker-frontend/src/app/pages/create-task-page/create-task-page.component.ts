import { Component } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

@Component({
  selector: 'app-create-task-page',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './create-task-page.component.html',
})
export class CreateTaskPageComponent {

  onCreateTask(data: { titulo: string; descricao: string }): void {
    console.log('Task recebida do form:', data);
  }

}
