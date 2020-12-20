import { RouterModule } from '@angular/router';
import { GenresMainPageComponent } from './genres-main-page/genres-main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from '../common/common.module';
import { MoviePaginationDirective } from './movie-pagination.directive';



@NgModule({
  declarations: [GenresMainPageComponent, MoviePaginationDirective],
  imports: [
    CommonModule,
    CommonModules,
    RouterModule
  ]
})
export class GenresModule { }
