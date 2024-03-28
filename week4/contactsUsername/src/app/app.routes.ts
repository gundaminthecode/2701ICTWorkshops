import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'account/:username',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
];
