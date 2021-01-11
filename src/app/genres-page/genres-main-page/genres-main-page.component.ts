import { count, filter } from 'rxjs/operators';
import { Genres } from './../../models/genres.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-genres-main-page',
  templateUrl: './genres-main-page.component.html',
  styleUrls: ['./genres-main-page.component.scss']
})
export class GenresMainPageComponent implements OnInit {

  movies: Movie[];
  id: string;
  sortBy = ['popularity', 'release_date', 'revenue', 'primary_release_date', 'original_title', 'vote_average', 'vote_count'];
  genres: Genres;
  isLoading = false;
  searchValue: string;
  totalPages: number;
  page: any;
  isSearch: boolean;
  isFilter: boolean;
  activePage = 1;
  totalPagesSearch: number;
  randomNumber = 0;
  getSearchResults: Movie[];
  filterType: string;
  headerName: string;
  startOne: boolean;
  countryId: any;
  getSearchValue: any;
  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.randomNumber = Math.floor(Math.random() * 30);
   }

  ngOnInit(): void {
   this.getSearchValue = this.activatedRoute.snapshot.paramMap.get('searchValue');
   this.countryId = this.activatedRoute.snapshot.paramMap.get('countryId');
   this.id = this.activatedRoute.snapshot.paramMap.get('genresId');
   if (this.getSearchValue) {
    this.getSearchMovies(this.getSearchValue);
    return;
  }
   if (this.countryId) {
     this.id = this.countryId;
     if (this.countryId === 'tr'){
        this.headerName = 'Yerli Filmler';
     }
    else if (this.countryId === 'hi') {
       this.headerName = 'Hint Filmleri';
     }
    else if (this.countryId === 'ko|zh|vi|th|ka|ja|id|he|fa|ar') {
       this.headerName = 'Asya Filmleri';
      }
    else if (this.countryId === 'en') {
       this.headerName = 'U.S.A. & U.K. Filmleri';
     }
     else {
       this.headerName = 'Avrupa Filmleri';
     }
   }
   this.getMovies(this.activePage);
  }

  getMovies(page: number): any {
    this.isSearch = false;
    this.isFilter = false;
    this.isLoading = true;
    if (this.countryId) {
        this.movieService.getMoviesWithFilter(undefined, page, undefined, this.id)
        .subscribe(data => {
          this.isLoading = true;
          // tslint:disable-next-line: no-string-literal
          this.totalPages = data['total_pages'];
          // tslint:disable-next-line: no-string-literal
          this.movies = data['results'].filter(movie => movie.poster_path !== null);
          console.log(this.movies);
          this.isLoading = false;
        });
    }
    else {
    this.movieService.getMoviesWithFilter(undefined, page, this.id)
    .subscribe(data => {
      this.isLoading = true;
      // tslint:disable-next-line: no-string-literal
      this.totalPages = data['total_pages'];
      // tslint:disable-next-line: no-string-literal
      this.movies = data['results'].filter(movie => movie.poster_path !== null);
      this.movieService.getGenres()
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(data => {
        console.log(data)
        this.genres = data.filter(genres => genres.id === +this.id)[0];
      });
      this.isLoading = false;
    });
  }
  }


  getPageInfo(activePageNumber: number): any {
    this.activePage = activePageNumber;
    if (!this.isSearch && !this.isFilter) {
      this.getMovies(this.activePage);
    }
    else if (this.isSearch && !this.isFilter){
      this.getSearchMovies(this.searchValue);
    }
    else {
      this.getFilterMovies(this.filterType);
    }
    window.scrollTo(0, 460);
  }

  getSearchMovies(event: any): any {
    document.getElementById('')
    this.isSearch = true;
    this.searchValue = event;
    this.movieService.getSearchMovies(this.searchValue, this.activePage)
    .subscribe(movie => {
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'].filter(data => data.poster_path !== null);
      console.log(this.movies);
        // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
      this.headerName = event;
    });
    }

  getFilterMovies(event: any): any {
    this.isFilter = true;
    this.filterType = event;
    if (this.filterType !== null) {

      if (this.countryId) {
        this.movieService.getMoviesWithFilter(this.filterType, this.activePage, undefined, this.id)
        .subscribe(movieFilter => {
          // tslint:disable-next-line: no-string-literal
          this.movies = movieFilter['results'].filter(data => data.poster_path !== null);
          // tslint:disable-next-line: no-string-literal
          this.totalPages = movieFilter['total_pages'];
        });
      }

      else {
        this.movieService.getMoviesWithFilter(this.filterType, this.activePage, String(this.genres.id))
        .subscribe(movieFilter => {
          // tslint:disable-next-line: no-string-literal
          this.movies = movieFilter['results'].filter(data => data.poster_path !== null);
          // tslint:disable-next-line: no-string-literal
          this.totalPages = movieFilter['total_pages'];
        });
      }
    }
  }
  // gotoTop(): any {
  //   window.scroll({
  //     top:  1000,
  //     left: 10,
  //     behavior: 'smooth'
  //   });
  // }

}
