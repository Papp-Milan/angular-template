import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { TodoListComponent } from './components/dashboard/todo-list/todo-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', component: PageNotFoundComponent } // 404 Not Found
];
