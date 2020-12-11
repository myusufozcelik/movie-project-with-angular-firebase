import { UpcomingMoviesComponent } from './movies-page/movie-lists/upcoming-movies/upcoming-movies.component';
import { TopRatedMoviesComponent } from './movies-page/movie-lists/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './movies-page/movie-lists/popular-movies/popular-movies.component';
import { RegisterComponent } from './common/register/register.component';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';
import { LoginComponent } from './common/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedMovieComponent } from './main-page/components/selected-movie/selected-movie.component';
import { NowPlayingMoviesComponent } from './movies-page/movie-lists/now-playing-movies/now-playing-movies.component';
import { MainPageMovieComponent } from './movie-page/main-page-movie/main-page-movie.component';
import { PersonMainPageComponent } from './person-page/person-main-page/person-main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'deneme', component: SelectedMovieComponent},
  {path: 'popular-movies', component: PopularMoviesComponent},
  {path: 'now-playing-movies', component: NowPlayingMoviesComponent},
  {path: 'top-rated-movies', component: TopRatedMoviesComponent},
  {path: 'upcoming-movies', component: UpcomingMoviesComponent},
  {path: 'movie/:id', component: MainPageMovieComponent},
  {path: 'person/:id', component: PersonMainPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
