import { ActivatedRoute } from '@angular/router';
import { InterceptorService } from './../../services/interceptor/interceptor.service';
import { Movie } from './../../models/movie.model';
import { MovieService } from './../../services/movie/movie.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

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
  searchValue: string;
  totalPages: number;

  constructor(private movieService: MovieService, private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.activedRouter.snapshot.params.movieType;
    this.getMovies(this.activePage);
    this.headerControl(this.type);
  }

  getMovies(page: number): any {
    this.isSearch  = false;
    this.movieService.getMovieListsWithType(this.type, page)
    .subscribe(movie => {
      // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'];
      this.movies = this.movies.filter(data => data.poster_path !== null);
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
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'].filter(data => data.poster_path !== null);
      // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
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


  gotoTop() {

  }


}
