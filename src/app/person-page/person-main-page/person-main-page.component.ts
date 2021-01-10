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
    this.id = +this.router.snapshot.params['id'];
    this.getPersonDetail();
    this.getMovieDetail();
  }

  getPersonDetail(): any {
    this.movieService.getPeopleDetails(this.id).
    subscribe(data => {
      this.person = data;
      console.log(this.person);
      // this.movieService.getPeopleMovies(this.person.name.split(" ",1)[0], this.person.name.split(" ",2)[1])
      // .subscribe(data => {
      //   this.personMovies = data[0].known_for;
      //   console.log(this.personMovies)
      // });
    });
  }


  getMovieDetail(): any {
    this.movieService.getPeopleMoviesWithId(this.id)
    .subscribe(data => {
      // tslint:disable-next-line: no-shadowed-variable
      // tslint:disable-next-line: max-line-length
      this.personMovies = data.filter(data => data.poster_path !== null && data.adult === false).sort((a, b) => b.popularity - a.popularity).slice(0, 8);
      console.log(this.personMovies);
     });
  }

  moviePage(movieId): any {
    this.route.navigate([`/movie/${movieId}`]);
  }

  goToMoreMovies(): any {
  this.route.navigate([`/person/movies/${this.id}`]);
  }

}
