import { RegisterComponent } from './common/register/register.component';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';
import { LoginComponent } from './common/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedMovieComponent } from './main-page/components/selected-movie/selected-movie.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'deneme', component: SelectedMovieComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
