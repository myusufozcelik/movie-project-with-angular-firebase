import { Component,  OnInit } from '@angular/core';



@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit {

  openTrailerBoolean = false;
  openCardBoolean = true;
  imdbScore = 6.7;
  ourScore =  6.5;
  constructor() { }

  ngOnInit(): void {
  }


  trailerFunction() {
    this.openTrailerBoolean = !this.openTrailerBoolean;
    this.openCardBoolean = !this.openCardBoolean;
  }


}
