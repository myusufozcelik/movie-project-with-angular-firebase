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
  trendMoviePath = environment.trendMovies;
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

}
