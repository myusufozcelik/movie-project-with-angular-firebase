import { Movie } from 'src/app/models/movie.model';
import { Person } from './../../models/person.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-main-page',
  templateUrl: './person-main-page.component.html',
  styleUrls: ['./person-main-page.component.scss']
})
export class PersonMainPageComponent implements OnInit {

  person: Person;
  personMovies: Movie[];

  constructor(private movieService: MovieService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPersonDetail();
  }

  getPersonDetail() {
    const id = +this.router.snapshot.params['id'];
    this.movieService.getPeopleDetails(id).
    subscribe(data => {
      this.person = data;
      this.movieService.getPeopleMovies(this.person.name.split(" ",1)[0], this.person.name.split(" ",2)[1])
      .subscribe(data => {
        this.personMovies = data;
        console.log(this.personMovies)
      });
    });
   
  }



}
