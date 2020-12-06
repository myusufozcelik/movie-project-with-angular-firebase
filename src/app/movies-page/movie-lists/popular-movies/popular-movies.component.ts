import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovies: Movie[];

  constructor(private movieService: MovieService) {
    this.getPopularMovies();
   }

  ngOnInit(): void {
  }

  getPopularMovies(): any {
   this.movieService.getTrend()
   .subscribe(data => {
     this.popularMovies = data;
     console.log(this.popularMovies)
   });
  }

}
