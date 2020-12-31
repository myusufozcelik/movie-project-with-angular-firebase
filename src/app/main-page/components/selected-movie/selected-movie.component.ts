import { Movie } from 'src/app/models/movie.model';
import { Component,  EventEmitter,  Input,  OnChanges,  OnInit, Output, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit, OnChanges {

  openTrailerBoolean = false;
  openCardBoolean = true;
  imdbScore = 6.7;
  ourScore =  6.5;
  currentMovie: Movie;
  movieNumber = 0;
  // tslint:disable-next-line: no-output-native
  @Input() openMovie: boolean;
  @Input() movie: Movie[];
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentMovie = this.movie['results'][0];
  }

  changeMovie(type: any) {
    console.log(type);
    if (type==='next') {
      this.currentMovie = this.movie['results'][++this.movieNumber];
    }
    else if (type=== 'previous') {
      this.currentMovie = this.movie['results'][--this.movieNumber];
    }
    console.log(this.currentMovie);
  }
  
  // tslint:disable-next-line: typedef
  trailerFunction() {
    this.openTrailerBoolean = !this.openTrailerBoolean;
    this.openCardBoolean = !this.openCardBoolean;
  }

  // tslint:disable-next-line: typedef
  onClose() {
    this.close.emit();
  }

}
