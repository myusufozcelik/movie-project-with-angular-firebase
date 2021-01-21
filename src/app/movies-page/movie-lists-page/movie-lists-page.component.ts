import { ActivatedRoute } from '@angular/router';
import { InterceptorService } from './../../services/interceptor/interceptor.service';
import { Movie } from './../../models/movie.model';
import { MovieService } from './../../services/movie/movie.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-movie-lists-page',
  templateUrl: './movie-lists-page.component.html',
  styleUrls: ['./movie-lists-page.component.scss']
})
export class MovieListsPageComponent implements OnInit {

  movies: Movie[];
  @Input() getMainPageInfo;
  type: string;
  activePage = 1;
  movieListHeader;
  isSearch = false;
  isLoading = false;
  searchValue: string;
  totalPages: number;
  randomNumber = 0;

  constructor(private movieService: MovieService, private activedRouter: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.type = this.activedRouter.snapshot.params.movieType;
    this.getMovies(this.activePage);
    this.headerControl(this.type);
    this.randomNumber = Math.floor(Math.random() * 30);
  }

  getMovies(page: number): any {
    this.isSearch  = false;
    this.isLoading = true;
    this.movieService.getMovieListsWithType(this.type, page)
    .subscribe(movie => {
      // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'];
      this.movies = this.movies.filter(data => data.poster_path !== null);
      this.isLoading = false;
    });
  }

  getPageInfo(activePageNumber: number): any {
    this.activePage = activePageNumber;
    if (!this.isSearch) {
      this.getMovies(this.activePage);
    }
    else if (this.isSearch) {
      this.getSearchMovies(this.searchValue);
    }
    window.scrollTo(0, 150);
  }

  getSearchMovies(event: any): any {
    this.isSearch = true;
    this.searchValue = event;
    this.movieService.getSearchMovies(this.searchValue, this.activePage)
    .subscribe(movie => {
      this.isLoading = true;
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'].filter(data => data.poster_path !== null);
      // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
      this.isLoading = false;
    });
  }

  headerControl(type): any {
    if (type === 'now_playing') {
      this.movieListHeader = 'Vizyondaki Filmler';
    }
    else if (type === 'popular') {
      this.movieListHeader = 'Popüler Filmler';
    }
    else if (type === 'top_rated') {
      this.movieListHeader = 'Trend Filmler';
    }
    else if (type === 'upcoming') {
      this.movieListHeader = 'Vizyona Girecek Filmler';
    }
  }



}
