import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {

  topRated: Movie[];

  constructor(private movieService: MovieService) {
    this.getTopRated();
   }

  ngOnInit(): void {
  }

  getTopRated(): any {
    this.movieService.getTopRated()
    .subscribe(data => {
      this.topRated = data;
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
