import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  upcoming: Movie[];

  constructor(private movieService: MovieService) {
    this.getUpcomingMovies();
  }

  ngOnInit(): void {
  }

  getUpcomingMovies(): any {
    this.movieService.getUpcoming()
    .subscribe(data => {
      this.upcoming = data;
    });
  }

}
