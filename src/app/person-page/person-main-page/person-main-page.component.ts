import { Movie } from 'src/app/models/movie.model';
import { Person } from './../../models/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-person-main-page',
  templateUrl: './person-main-page.component.html',
  styleUrls: ['./person-main-page.component.scss']
})
export class PersonMainPageComponent implements OnInit {

  id;
  person: Person;
  personMovies: Movie[];

  constructor(private movieService: MovieService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.id = +this.router.snapshot.params['id'];
    this.getPersonDetail();
    this.getMovieDetail();
  }

  getPersonDetail(): any {
    this.movieService.getPeopleDetails(this.id).
    subscribe(data => {
      this.person = data;
    });
  }


  getMovieDetail(): any {
    this.movieService.getPeopleMoviesWithId(this.id)
    .subscribe(data => {
      // tslint:disable-next-line: no-shadowed-variable
      // tslint:disable-next-line: max-line-length
      this.personMovies = data.filter(person => person.poster_path !== null && person.adult === false).sort((a, b) => b.popularity - a.popularity).slice(0, 8);
     });
  }

  moviePage(movieId): any {
    this.route.navigate([`/movie/${movieId}`]);
  }

  goToMoreMovies(): any {
  this.route.navigate([`/person/movies/${this.id}`]);
  }

}
