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
        RecommendMovieComponent
    ]
})
export class MainPageModule { }
