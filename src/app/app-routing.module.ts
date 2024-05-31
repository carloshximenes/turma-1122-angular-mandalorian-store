import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'equipments',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [],
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'equipments',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
