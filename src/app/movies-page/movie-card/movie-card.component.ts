import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movies: Movie[];
  totalPages: number;
  page: any;
  isSearch: boolean;
  isFilter: boolean;
  searchValue: string;
  activePage = 1;
  totalPagesSearch: number;
  getSearchResult: Movie[];
  filterType: string;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }


  getSearchMovies(event: any): any {
    this.isSearch = true;
    this.searchValue = event;
    this.movieService.getSearchMovies(this.searchValue, this.activePage)
    .subscribe(movie => {
      // tslint:disable-next-line: no-string-literal
      this.movies = movie['results'].filter(data => data.poster_path !== null);
      // tslint:disable-next-line: no-string-literal
      this.totalPages = movie['total_pages'];
    });
  }

  getPageInfo(activePageNumber: number): any {
    this.activePage = activePageNumber;
    if (this.isSearch && !this.isFilter) {
      this.getSearchMovies(this.searchValue);
    }
  }

}
