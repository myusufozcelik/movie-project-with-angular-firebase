import { GenresMainPageComponent } from './genres-main-page/genres-main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from '../common/common.module';
import { MoviePaginationDirective } from './movie-pagination.directive';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [GenresMainPageComponent, MoviePaginationDirective, PaginationComponent],
  imports: [
    CommonModule,
    CommonModules
  ]
})
export class GenresModule { }
