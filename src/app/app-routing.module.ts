import { ListsComponent } from './menu/lists/lists.component';
import { CategoriesComponent } from './menu/categories/categories.component';
import { MovieListsPageComponent } from './movies-page/movie-lists-page/movie-lists-page.component';
import { GenresMainPageComponent } from './genres-page/genres-main-page/genres-main-page.component';
import { PersonMovieAllComponent } from './person-page/person-movie-all/person-movie-all.component';
import { RegisterComponent } from './common/register/register.component';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';
import { LoginComponent } from './common/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedMovieComponent } from './main-page/components/selected-movie/selected-movie.component';
import { MainPageMovieComponent } from './movie-page/main-page-movie/main-page-movie.component';
import { PersonMainPageComponent } from './person-page/person-main-page/person-main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'deneme', component: SelectedMovieComponent},
  {path: 'movie/:id', component: MainPageMovieComponent},
  {path: 'person/:id', component: PersonMainPageComponent},
  {path: 'person/movies/:id', component: PersonMovieAllComponent},
  {path: 'genres/:genresId', component: GenresMainPageComponent},
  {path: 'movies/country/:countryId', component: GenresMainPageComponent},
  {path: 'movies/:movieType', component: MovieListsPageComponent},
  {path: 'menu/categories', component: CategoriesComponent},
  {path: 'movies/search/:searchValue', component: GenresMainPageComponent},
  {path: 'menu/lists', component: ListsComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
