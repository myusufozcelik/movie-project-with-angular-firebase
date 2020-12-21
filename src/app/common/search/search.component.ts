import { Movie } from './../../models/movie.model';
import { MovieService } from './../../services/movie/movie.service';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchMovie = new EventEmitter();
  @Input() activePage;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getSearchMovie(searchInput): any {
    console.log(searchInput.value);
    console.log(this.activePage);
    this.movieService.getSearchMovies(searchInput.value, this.activePage)
      .subscribe(movie => {
        // tslint:disable-next-line: no-string-literal
        console.log(movie);
        this.searchMovie.emit(movie);
      });
  }


}
