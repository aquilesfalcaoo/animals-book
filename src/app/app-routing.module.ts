import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication/authentication.guard';
import { LoginGuard } from './core/guards/authentication/login/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./pages/animals/animals.module').then((m) => m.AnimalsModule),
    canLoad: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
