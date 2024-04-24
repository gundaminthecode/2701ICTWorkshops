import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'friends',
    loadComponent: () => import('./friends/friends.page').then( m => m.FriendsPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'all-trips',
    loadComponent: () => import('./all-trips/all-trips.page').then( m => m.AllTripsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
