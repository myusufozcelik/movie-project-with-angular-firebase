import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MovieService } from './../../../services/movie/movie.service';
import { AfterViewInit, Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-recommend-movie',
  templateUrl: './recommend-movie.component.html',
  styleUrls: ['./recommend-movie.component.scss']
})
export class RecommendMovieComponent implements OnInit, OnChanges {

  movies: Movie[];
  type = 'top_rated';
  // tslint:disable-next-line: object-literal-key-quotes
  typeList = ['top-rated-movies', 'popular-movies', 'now-playing-movies', 'upcoming-movies'];
  constructor(private movieService: MovieService, private router: Router) {
    this.getMoviesLists(this.type);
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMoviesLists(this.type);
  }


getMoviesLists(type: string): any {
  this.movieService.getMovieListsWithType(type, 1)
  .subscribe(movie => {
    // tslint:disable-next-line: no-string-literal
    this.movies = movie['results'];
    this.movies = this.movies.slice(0, 5);
  });
}

goToMoreMovies(movieType): any {
  console.log(movieType);
  this.router.navigate([`/${movieType}`]);
}

}
