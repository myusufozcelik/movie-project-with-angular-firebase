import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieMainPageComponent } from './movie-main-page/main-page.component';
import { MoviePageHeaderComponent } from './movie-page-header/movie-page-header.component';
import { CommonModules } from '../common/common.module';
import { MovieListsPageComponent } from './movie-lists-page/movie-lists-page.component';

@NgModule({
    declarations: [
        MovieCardComponent,
        MovieMainPageComponent,
        MoviePageHeaderComponent,
        MovieListsPageComponent
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
