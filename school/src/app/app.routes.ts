import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'curses',
    pathMatch: 'full',
  },
  {
    path: 'students',
    loadComponent: () => import('./students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'curses',
    loadComponent: () => import('./curses/curses.page').then( m => m.CursesPage)
  },  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },

];
