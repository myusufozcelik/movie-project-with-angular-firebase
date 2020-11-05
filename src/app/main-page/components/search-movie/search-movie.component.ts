import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

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
  search = false;
  @ViewChild('f', {static: true}) test: ElementRef;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  getMovieType() {
    this.movieType = !this.movieType;
    this.searchMovie();
  }

  // tslint:disable-next-line: typedef
  getImdbScore() {
    this.imdbScore = !this.imdbScore;
    this.searchMovie();
  }

  // tslint:disable-next-line: typedef
  getReleaseDate() {
    this.releaseDate = !this.releaseDate;
    this.searchMovie();
  }

  // tslint:disable-next-line: typedef
  getOriginCountry() {
    this.originCountry = !this.originCountry;
    this.searchMovie();
  }

  // tslint:disable-next-line: typedef
  searchMovie() {
    if (this.movieType || this.imdbScore || this.originCountry || this.releaseDate) {
      this.search = true;
    }
    else {
      this.search = false;
    }
  }

  getMovie(f) {
    console.log(f);
  }



}
