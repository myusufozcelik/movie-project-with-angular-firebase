import { filter } from 'rxjs/operators';
import { Genres } from './../../models/genres.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';


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
  getSearchResults: Movie[];
  filterType: string;
  startOne: boolean;
  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
   // tslint:disable-next-line: no-string-literal
   this.id = this.activatedRoute.snapshot.paramMap.get('genresId');
   this.getMovies(this.activePage);
  }



  getMovies(page: number): any {
    this.isSearch = false;
    this.isFilter = false;
    this.isLoading = true;
    this.movieService.getMoviesWithFilter(undefined, page, this.id, null)
    .subscribe(data => {
      this.isLoading = true;
      // tslint:disable-next-line: no-string-literal
      this.totalPages = data['total_pages'];
      // tslint:disable-next-line: no-string-literal
      this.movies = data['results'].filter(movie => movie.poster_path !== null);
      console.log(this.movies);
      this.movieService.getGenres()
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(data => {
        console.log(data);
        this.genres = data.filter(genres => genres.id === +this.id)[0];
        console.log(this.genres);
      });
      this.isLoading = false;
    });
  }


  getPageInfo(activePageNumber: number): any {
    console.log(activePageNumber);
    this.activePage = activePageNumber;
    if (!this.isSearch && !this.isFilter) {
      this.getMovies(this.activePage);
    }
    else if (this.isSearch && !this.isFilter){
      console.log(this.searchValue);
      this.getSearchMovies(this.searchValue);
    }
    else {
      this.getFilterMovies(this.filterType);
    }
    window.scrollTo(0, 460);
  }

  // goToMovie(movieId: number):any {
  //   this.router.navigate([`/movie/${movieId}`]);
  // }

  getSearchMovies(event: any): any {
    this.isSearch = true;
    this.searchValue = event;
    console.log(this.searchValue , this.activePage);
    this.movieService.getSearchMovies(this.searchValue, this.activePage)
    .subscribe(movie => {
      console.log(movie);
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'].filter(data => data.poster_path !== null);
        // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
    });
    }

//   this.movieService.getMoviesWithFilter(genreFilter, this.activePage, this.genresId)
    //   .subscribe(movie => {
    //       console.log(movie);
    //       this.filterMovie.emit(genreFilter);
    //   });
    // }
    // else {
    //   this.movieService.getMoviesWithFilter(genreFilter, 1, null)
    //   .subscribe(movie => {
    //       console.log(movie);
    //       this.filterMovie.emit(movie);
    //   });


  getFilterMovies(event: any): any {
    this.isFilter = true;
    this.filterType = event;
    if (this.filterType !== null) {
      this.movieService.getMoviesWithFilter(this.filterType, this.activePage, String(this.genres.id))
      .subscribe(movieFilter => {
        // tslint:disable-next-line: no-string-literal
        this.movies = movieFilter['results'].filter(data => data.poster_path !== null);
        // tslint:disable-next-line: no-string-literal
        this.totalPages = movieFilter['total_pages'];
      });
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
