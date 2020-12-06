import { CommonModules } from './common/common.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule} from 'src/app/main-page/main-page.module';
import { MoviePageModule } from 'src/app/movies-page/movie-page.module';
import { MainPageMovieComponent } from './movie-page/main-page-movie/main-page-movie.component';
import { MoviePageRecommentComponent } from './movie-page/movie-page-recomment/movie-page-recomment.component';
import { MoviePageCardComponent } from './movie-page/movie-page-card/movie-page-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageMovieComponent,
    MoviePageRecommentComponent,
    MoviePageCardComponent,
  ],
  imports: [
    AppRoutingModule,
    MainPageModule,
    MoviePageModule,
    CommonModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
