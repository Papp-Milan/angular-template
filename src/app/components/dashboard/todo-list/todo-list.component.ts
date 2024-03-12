import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos = Array.from({ length: 10 }, (_, i) => `Todo no. ${i+1}`);
}
