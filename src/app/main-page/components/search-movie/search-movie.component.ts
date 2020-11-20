import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
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
  openMovie;
  @ViewChild('movieTypeForm', {static: true}) test: ElementRef;
  movieTypeData;
  imdbScoreData;
  releaseDateData;
  originCountryData;
  error: string;

  constructor(private router: Router) { }

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
  closeSearchTab()  {
    this.releaseDate = false;
    this.imdbScore = false;
    this.originCountry = false;
    this.movieType = false;
    this.search = false;
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

  // tslint:disable-next-line: typedef
  saveMovieSearch(type= 'action', imdb= '7-8', release= 'Yeni', origin= 'Amerika') {

   console.log(type);
   console.log(imdb);
   console.log(release);
   console.log(origin);
   this.closeSearchTab();
   this.openMovie = true;
  //  this.router.navigate(['/deneme']);
    // this.error = 'Error';
  }

  // tslint:disable-next-line: typedef
  onHandleError() {
    this.error = null;
  }

  // tslint:disable-next-line: typedef
  onButtonExit() {
    this.openMovie = false;
    console.log(this.openMovie);
  }

}
