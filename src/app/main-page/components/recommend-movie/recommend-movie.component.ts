import { Router } from '@angular/router';
import { MovieService } from './../../../services/movie/movie.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-recommend-movie',
  templateUrl: './recommend-movie.component.html',
  styleUrls: ['./recommend-movie.component.scss']
})
export class RecommendMovieComponent implements OnInit, AfterViewInit {

  trendMovies: Movie[];
  popularMovies: Movie[];
  nowPlaying: Movie[];
  upcoming: Movie[];

  constructor(private movieService: MovieService, private router: Router) {
    this.getTrendMovies();
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getUpcomingMovies();
  }

getTrendMovies(): any {
  this.movieService.getTrend()
  .subscribe(data => {
    this.trendMovies = data.slice(0, 5);
  });
}

getPopularMovies(): any {
  this.movieService.getTopRated()
  .subscribe(data => {
    this.popularMovies = data.slice(0, 5);
  });
}

getNowPlayingMovies(): any {
  this.movieService.getNowPlaying()
  .subscribe(data => {
    this.nowPlaying = data.slice(0, 5);
  });
}

getUpcomingMovies(): any {
  this.movieService.getUpcoming()
  .subscribe(data => {
    this.upcoming = data.slice(0, 5);
  });
}

goToMoreMovies(movieType): any {
  this.router.navigate([`/${movieType}`]);
}

}
