import { GenresModule } from './genres-page/genres.module';
import { PersonModule } from './person-page/person.module';
import { CommonModules } from './common/common.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule} from 'src/app/main-page/main-page.module';
import { MoviesPageModule } from 'src/app/movies-page/movie-page.module';
import { MoviePageModule } from 'src/app/movie-page/movie-page.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MainPageModule,
    MoviesPageModule,
    MoviePageModule,
    PersonModule,
    GenresModule,
    CommonModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
