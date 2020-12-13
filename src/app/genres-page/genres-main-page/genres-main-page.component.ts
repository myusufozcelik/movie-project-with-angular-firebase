import { Genres } from './../../models/genres.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres-main-page',
  templateUrl: './genres-main-page.component.html',
  styleUrls: ['./genres-main-page.component.scss']
})
export class GenresMainPageComponent implements OnInit {

  movies: Movie[];
  id: string;
  sortBy = ['popularity', 'release_date', 'revenue', 'primary_release_date', 'original_title', 'vote_average', 'vote_count'];
  genres: string;
  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   // tslint:disable-next-line: no-string-literal

   this.id = this.activatedRoute.snapshot.paramMap.get('genresId');
   this.getMovies();
  }

  getMovies(): any {
    this.movieService.getMoviesWithFilter(undefined, 1, this.id, null)
    .subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      this.movieService.getGenres()
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(data => {
        this.genres = data.filter(genres => genres.id === +this.id)[0].name;
        console.log(this.genres);
      });
    });
  }

  goToMovie(movieId: number):any {
    this.router.navigate([`/movie/${movieId}`]);
  }

  gotoTop(): any {
    window.scroll({
      top:  1000,
      left: 10,
      behavior: 'smooth'
    });
  }

}
