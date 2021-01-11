import { Person } from './../../models/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-movie-all',
  templateUrl: './person-movie-all.component.html',
  styleUrls: ['./person-movie-all.component.scss']
})
export class PersonMovieAllComponent implements OnInit {

  id: number;
  person: Person;
  personMovies: Movie[];

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.id = +this.route.snapshot.params['id'];
    this.getMovies();
    this.getPersonDetail();
  }

  getPersonDetail(): any {
    this.movieService.getPeopleDetails(this.id)
    .subscribe(data => {
      this.person = data;
    });
  }

  getMovies(): any {
    this.movieService.getPeopleMoviesWithId(this.id)
    .subscribe(data => {
      this.personMovies = data.filter(movie => movie.poster_path !== null).sort((a, b) => b.popularity - a.popularity);
    });
  }

  moviePage(movieId): any {
    this.router.navigate([`/movie/${movieId}`]);
  }


}
