import { UpcomingMoviesComponent } from './movie-lists/upcoming-movies/upcoming-movies.component';
import { TopRatedMoviesComponent } from './movie-lists/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './movie-lists/popular-movies/popular-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieMainPageComponent } from './movie-main-page/main-page.component';
import { MoviePageHeaderComponent } from './movie-page-header/movie-page-header.component';
import { NowPlayingMoviesComponent } from './movie-lists/now-playing-movies/now-playing-movies.component';
import { CommonModules } from '../common/common.module';

@NgModule({
    declarations: [
        MovieCardComponent,
        MovieMainPageComponent,
        MoviePageHeaderComponent,
        NowPlayingMoviesComponent,
        PopularMoviesComponent,
        TopRatedMoviesComponent,
        UpcomingMoviesComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        CommonModules,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class MoviesPageModule { }
