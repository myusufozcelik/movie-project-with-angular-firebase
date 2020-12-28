import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { ComboboxComponent } from './combobox/combobox.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';
import { SearchComponent } from './search/search.component';
import { FilterMovieComponent } from './filter-movie/filter-movie.component';
import { PaginationsComponent } from './paginations/pagination.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [CommonModule, AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
    exports: [ComboboxComponent, LoadingComponent, SearchComponent, FilterMovieComponent, PaginationsComponent, MenuComponent, LoadingComponent],
    declarations: [
        LoginComponent,
        RegisterComponent,
        LoadingComponent,
        ComboboxComponent,
        SearchComponent,
        FilterMovieComponent,
        PaginationsComponent,
        MenuComponent
    ],
})
export class CommonModules { }
