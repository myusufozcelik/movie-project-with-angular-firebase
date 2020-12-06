import { CommonModules } from './common/common.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule} from 'src/app/main-page/main-page.module';
import { MoviesPageModule } from 'src/app/movies-page/movie-page.module';
import { MoviePageModule } from 'src/app/movie-page/movie-page.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    MainPageModule,
    MoviesPageModule,
    MoviePageModule,
    CommonModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
