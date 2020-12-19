import { Genres } from './../../models/genres.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


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
  totalPages: number;
  page: any;
  activePage = 1;
  getSearchResults: Movie[];
  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   // tslint:disable-next-line: no-string-literal

   this.id = this.activatedRoute.snapshot.paramMap.get('genresId');
   this.getMovies(this.activePage);
  }


  getMovies(page: number): any {
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

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
    this.getMovies(this.activePage);
    window.scrollTo(0, 950);   // tekrar bak!!s!

  }

  // goToMovie(movieId: number):any {
  //   this.router.navigate([`/movie/${movieId}`]);
  // }

  getSearchMovies(event: any): any {
    console.log(event);
    if (event !== undefined) {
      this.movies = [];
      this.movies = event.results.filter(data => data.poster_path !== null);
      const totalPages = event.total_pages;
      const totalResults = event.total_results;
      console.log(this.movies);
    }
  }

  getFilterMovies(event: any): any {
    console.log(event);
    if (event !== undefined) {
      this.movies = [];
      this.movies = event.results.filter(data => data.poster_path !== null);
      const totalPages = event.total_pages;
      const totalResults = event.total_results;
      console.log(this.movies);
    }
  }

  gotoTop(): any {
    window.scroll({
      top:  1000,
      left: 10,
      behavior: 'smooth'
    });
  }

}
