import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { CommonModule } from '@angular/common';
import { RecommendMovieComponent } from './components/recommend-movie/recommend-movie.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { ActionComponent } from './components/action/action.component';
import { ServicesComponent } from './components/services/services.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MoreDetailComponent } from './components/search-movie/more-detail/more-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SelectedMovieComponent } from './components/selected-movie/selected-movie.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavigationComponent,
        PortfolioComponent,
        MainPageComponent,
        ServicesComponent,
        ActionComponent,
        SearchMovieComponent,
        RecommendMovieComponent,
        MoreDetailComponent,
        SelectedMovieComponent
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
export class MainPageModule { }
