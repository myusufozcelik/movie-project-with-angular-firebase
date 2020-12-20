import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationsComponent implements OnInit {

  @Input() totalPage: number;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  activePage: number;
  arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {
    if (this.totalPage < 10) {
      this.arrays = [];
      for (let i = 0; i < this.totalPage; i++) {
        this.arrays.push(i);
      }
    }

   }

  ngOnInit(): void {
  }

  pageDivide(): void {
    console.log(this.totalPage); // 560
  }

  restartArrays(page: number, start: number = 1): any {
    this.arrays = [];
    for (let i = start; i < page; i++) {

      this.arrays.push(i);
    }
  }

  pageLimit(): any {
    this.restartArrays(10, 1);
    if (this.totalPage < 10) {
     this.restartArrays(this.totalPage);
    }

    else if ( this.activePage === this.totalPage) {
      this.restartArrays(this.totalPage, this.activePage - 9);
    }
    else if ( this.activePage >= 5 ) {
      this.restartArrays(this.activePage + 5 , this.activePage - 4);
    }

  }

  onClickPage(pageNumber: number): void {
    if (pageNumber >= 1) {
      this.activePage = pageNumber;

      this.onPageChange.emit(this.activePage);
      this.pageLimit();
    }
  }
}
