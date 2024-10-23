import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./user-list/user-list.component').then(
        (m) => m.UserListComponent
      ),
  },
  {
    path: 'adduser',
    loadComponent: () =>
      import('./user-form/user-form.component').then(
        (m) => m.UserFormComponent
      ),
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' },
];
