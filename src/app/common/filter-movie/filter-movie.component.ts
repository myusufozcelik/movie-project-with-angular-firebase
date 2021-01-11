import { filter } from 'rxjs/operators';
import { MovieService } from './../../services/movie/movie.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.scss']
})
export class FilterMovieComponent implements OnInit {

  filterList = ['Popülerliğe Göre (Varsayılan)', 'Çıkış Tarihine Göre', 'Puana Göre'];
  @Input() genresId;
  @Input() activePage;
  @Output() filterMovie = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getFilterValue(filterValue: HTMLInputElement): any {
    let genreFilter;
    if (this.genresId !== undefined || this.genresId !== null ) {
      if (filterValue.innerText === this.filterList[0] || filterValue.innerText === this.filterList[3]) {
        genreFilter = 'popularity.desc';
      }
      if (filterValue.innerText === this.filterList[1]) {
        genreFilter = 'release_date.desc';
      }
      if (filterValue.innerText === this.filterList[2]) {
        genreFilter = 'vote_average.desc';
      }
      this.filterMovie.emit(genreFilter);
    }
  }
}
