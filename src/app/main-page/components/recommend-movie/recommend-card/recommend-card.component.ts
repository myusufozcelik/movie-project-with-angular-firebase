import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.scss']
})
export class RecommendCardComponent implements OnInit {

  @Input() movies: Movie[];
  // @Input() popularMovies: Movie[];
  // @Input() nowPlaying: Movie[];
  // @Input() upcoming: Movie[];

  constructor(private movieService: MovieService, private route: Router) {
   }

  ngOnInit(): void {
  }

  loadMovie(id): any {
      this.route.navigate([`/movie/${id}`]);
  }

}
