
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchMovie = new EventEmitter();
  @Input() activePage;
  constructor() { }

  ngOnInit(): void {
  }

  getSearchMovie(searchInput): any {
    this.searchMovie.emit(searchInput);
  }


}
