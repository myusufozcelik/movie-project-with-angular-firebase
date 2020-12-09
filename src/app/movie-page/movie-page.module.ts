import { RouterModule } from '@angular/router';
import { MoviePageRecommentComponent } from './movie-page-recomment/movie-page-recomment.component';
import { MoviePageCardComponent } from './movie-page-card/movie-page-card.component';
import { MainPageMovieComponent } from './main-page-movie/main-page-movie.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CastCardComponent } from './cast-card/cast-card.component';


@NgModule({
    declarations: [
        MainPageMovieComponent,
        MoviePageCardComponent,
        MoviePageRecommentComponent,
        CastCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppRoutingModule,
        BrowserModule,
        HttpClientModule
    ]
})
export class MoviePageModule { }
