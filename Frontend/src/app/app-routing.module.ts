import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TireDetailComponent } from './components/tire-detail/tire-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'tire-detail', component: TireDetailComponent
  },
  { path: 'tire-detail/:tireId', component: TireDetailComponent },
  { path: 'special', component: HomeComponent },
  { path: 'winter', component: HomeComponent },
  {
    path:'**', redirectTo:'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
