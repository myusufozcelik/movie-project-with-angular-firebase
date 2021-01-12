import { PersonMainPageComponent } from './person-main-page/person-main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonMovieAllComponent } from './person-movie-all/person-movie-all.component';
import { PersonPipe } from './person.pipe';



@NgModule({
  declarations: [PersonMainPageComponent, PersonMovieAllComponent, PersonPipe],
  imports: [
    CommonModule
  ]
})
export class PersonModule { }
