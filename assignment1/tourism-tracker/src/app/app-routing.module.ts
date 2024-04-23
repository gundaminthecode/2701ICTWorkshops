import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Import AuthGuard
import { AuthService } from './auth.service'; // Import AuthService
import { TabsPage } from './tabs/tabs.page'; // Import TabsPage
import { FriendsPage } from './friends/friends.page'; // Import FriendsPage
import { AllTripsPage } from './all-trips/all-trips.page'; // Import AllTripsPage
import { AccountPage } from './account/account.page'; // Import AccountPage
import { LoginPage } from './login/login.page'; // Import LoginPage

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard] // Apply AuthGuard to this route
  },
  {
    path: 'friends',
    loadChildren: () => import('./friends/friends.module').then(m => m.FriendsPageModule),
    canActivate: [AuthGuard] // Apply AuthGuard to this route
  },
  {
    path: 'all-trips',
    loadChildren: () => import('./all-trips/all-trips.module').then(m => m.AllTripsPageModule),
    canActivate: [AuthGuard] // Apply AuthGuard to this route
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule),
    canActivate: [AuthGuard] // Apply AuthGuard to this route
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [TabsPage, FriendsPage, AllTripsPage, AccountPage, LoginPage]; // Export components
