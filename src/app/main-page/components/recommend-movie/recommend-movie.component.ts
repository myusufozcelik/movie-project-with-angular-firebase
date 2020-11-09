import { MovieService } from './../../../services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-recommend-movie',
  templateUrl: './recommend-movie.component.html',
  styleUrls: ['./recommend-movie.component.scss']
})
export class RecommendMovieComponent implements OnInit {

  trendMovies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getTrendMovies();
  }

  getTrendMovies() {
   // TODO
    }

}
