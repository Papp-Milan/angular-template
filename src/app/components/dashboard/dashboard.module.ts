import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardComponent,
    TodoListComponent,
  ],
  exports: [
    CommonModule,
    DashboardComponent,
    TodoListComponent,
  ]
})
export class DashboardModule {
  
}
