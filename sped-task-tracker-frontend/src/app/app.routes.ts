import { Routes } from '@angular/router';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { CreateTaskPageComponent } from './pages/create-task-page/create-task-page.component';

export const routes: Routes = [


    { path: '', component: BoardPageComponent },
    { path: 'tasks/new', component: CreateTaskPageComponent },

];
