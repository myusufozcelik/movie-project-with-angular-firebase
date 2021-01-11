import { InterceptorService } from './../../../services/interceptor/interceptor.service';
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
  typeList = ['top_rated', 'popular', 'now_playing', 'upcoming'];
  constructor(private movieService: MovieService, private router: Router) {
    this.getMoviesLists(this.type);
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMoviesLists(this.type);
  }


getMoviesLists(type: string): any {
  console.log(type);
  this.movieService.getMovieListsWithType(type, 1)
  .subscribe(movie => {
    // tslint:disable-next-line: no-string-literal
    this.movies = movie['results'];
    console.log(this.movies);
    if (type === 'top_rated') {
      this.movies = this.movies.slice(3, 8);
    }
    else {
      this.movies = this.movies.slice(0, 5);
    }
  });
}

goToMoreMovies(movieType): any {
  this.router.navigate([`/movies/${movieType}`]);
}

}
