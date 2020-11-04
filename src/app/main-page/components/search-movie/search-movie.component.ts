import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  movieType = false;
  imdbScore = false;
  releaseDate = false;
  originCountry = false;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  getMovieType() {
    this.movieType = !this.movieType;
  }

  // tslint:disable-next-line: typedef
  getImdbScore() {
    this.imdbScore = !this.imdbScore;
  }

  // tslint:disable-next-line: typedef
  getReleaseDate() {
    this.releaseDate = !this.releaseDate;
  }

  // tslint:disable-next-line: typedef
  getOriginCountry() {
    this.originCountry = !this.originCountry;
  }


}
