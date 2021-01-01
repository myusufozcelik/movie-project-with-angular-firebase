import { Movie } from './../../../models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

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
  movies: Movie[];

  constructor(private router: Router, private movieService: MovieService) { }

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
  saveMovieSearch(type= '28', imdb= '7-8', release= '2020', origin= 'Amerika') {
    const page = 1;
    const scores = imdb.split('-', 2);
   console.log('popularity.desc', page, type, origin, Number(scores[0]), Number(scores[1]), Number(release))
    this.movieService.getMoviesWithFilter('popularity.desc', page, type, origin, Number(scores[0]), Number(scores[1]), Number(release))
    .subscribe(data => {
      this.movies = data['results'];
      console.log(this.movies);
    });

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
