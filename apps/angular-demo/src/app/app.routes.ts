import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'item/:id',
    loadComponent: () =>
      import('./pages/item/item.component').then((m) => m.ItemComponent),
  },
  {
    path: 'jaemin',
    loadComponent: () =>
      import('./pages/jaemin/jaemin.component').then((m) => m.JaeminComponent),
  },
  {
    path: 'view-transitions',
    loadComponent: () =>
      import('./pages/view-transitions/view-transitions.component').then(
        (m) => m.ViewTransitionsComponent
      ),
  },
  {
    path: 'transitions',
    loadComponent: () =>
      import('./pages/transitions/transitions.component').then(
        (m) => m.TransitionsComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'fade',
        pathMatch: 'full',
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './components/transition-demo-detail/transition-demo-detail.component'
          ).then((m) => m.TransitionDemoDetailComponent),
      },
    ],
  },
  {
    path: 'transitions/:id',
    loadComponent: () =>
      import(
        './components/transition-demo-detail/transition-demo-detail.component'
      ).then((m) => m.TransitionDemoDetailComponent),
  },
];
