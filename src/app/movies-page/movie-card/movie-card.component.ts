import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() getMovies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  // getTrendMovies(): any {
  //   this.movieService.getTrend()
  //   .subscribe(data => {
  //     this.trendMovies = data;
  //     console.log(this.trendMovies);
  //   });
  // }

}
