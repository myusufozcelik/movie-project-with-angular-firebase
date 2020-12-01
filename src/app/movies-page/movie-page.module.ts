import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieMainPageComponent } from '../movies-page/movie-main-page/main-page.component';

@NgModule({
    declarations: [
        MovieCardComponent,
        MovieMainPageComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class MoviePageModule { }
