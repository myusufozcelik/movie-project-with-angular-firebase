import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.getNowPlaying();
  }

  ngOnInit(): void {
  }


  getNowPlaying(): any {
    this.movieService.getNowPlaying()
    .subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
  
  gotoTop() {
    window.scroll({
      top:  1000,
      left: 10,
      behavior: 'smooth'
    });
  }

}
