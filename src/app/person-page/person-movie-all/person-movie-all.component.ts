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
    this.id = +this.route.snapshot.params['id'];
    this.getMovies();
    this.getPersonDetail();
  }

  getPersonDetail() {
    this.movieService.getPeopleDetails(this.id)
    .subscribe(data => {
      this.person = data;
    });
  }

  getMovies() {
    
    this.movieService.getPeopleMoviesWithId(this.id)
    .subscribe(data => {
      console.log(data);
      this.personMovies = data.filter(data => data.poster_path !== null).sort((a,b) => b.popularity - a.popularity)
      
    })
  }

  moviePage(movieId): any {
    this.router.navigate([`/movie/${movieId}`]);
  }


}
