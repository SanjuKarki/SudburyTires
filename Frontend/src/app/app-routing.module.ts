import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TireDetailComponent } from './components/tire-detail/tire-detail.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path:'tire-detail', component: TireDetailComponent, canActivate: [AuthGuard]
  },
  { path: 'tire-detail/:tireId', component: TireDetailComponent, canActivate: [AuthGuard] },
  { path: 'special', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'winter', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path:'**', redirectTo:'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
