import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movieFirst: Movie;
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getNowPlaying()
    .subscribe(movies => {
      this.movies = movies.slice(0, 5);
      this.movieFirst = this.movies[0];
      this.movies = this.movies.slice(1, 5);
    });
    console.log(window.screen.height)
    console.log(window.screen.width) // width : 1920 
  }

}
