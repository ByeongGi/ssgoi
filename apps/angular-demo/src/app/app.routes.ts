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
    children: [
      {
        path: '',
        redirectTo: 'fade',
        pathMatch: 'full',
      },
      {
        path: 'fade',
        loadComponent: () =>
          import(
            './components/view-transition-demo-detail/fade/fade.component'
          ).then((m) => m.FadeDemoComponent),
      },
      {
        path: 'scroll',
        loadComponent: () =>
          import(
            './components/view-transition-demo-detail/scroll/scroll.component'
          ).then((m) => m.ScrollDemoComponent),
      },
    ],
  },

  {
    path: 'nested-demo',
    loadComponent: () =>
      import('./pages/nested-demo/nested-demo.component').then(
        (m) => m.NestedDemoComponent
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
];
