import { Movies } from './../../../models/movies.model';
import { MovieService } from './../../../services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-recommend-movie',
  templateUrl: './recommend-movie.component.html',
  styleUrls: ['./recommend-movie.component.scss']
})
export class RecommendMovieComponent implements OnInit {

  trendMovies: Movie[];
  movies: Movies[];
  trendMoviePath = environment.trendMovies;
  imdbId: number;
  constructor(private movieService: MovieService) {
   }

  ngOnInit() {
    this.getTrendMovies();
  }


  getTrendMovies() {
      this.movieService.getTrend().pipe(take(7))
      .subscribe(getTrend => {
        this.trendMovies = getTrend.slice(0, 6);
        console.log(this.trendMovies);
      });
    }

  // tslint:disable-next-line: typedef
  getMovies(movie: Movie) {
    this.movieService.getMovies(movie.id)
    .subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      this.getMoviesOmdb(this.movies['imdb_id']);
    });
  }

  getMoviesOmdb(imdbId: any) {
    return this.movieService.getMoviesOmdb(imdbId)
    .subscribe(data => {
      console.log(data);
    });
  }
}
