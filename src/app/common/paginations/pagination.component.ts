import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationsComponent implements OnInit, OnChanges {

  @Input() totalPage;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  activePage: number;
  arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {

   }

   // tslint:disable-next-line: use-lifecycle-interface
   ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalPage && changes.totalPage.currentValue) {
      const totalP = changes.totalPage.currentValue;
      if (this.arrays.length > this.totalPage) {
        this.arrays = [];
        for (let i = 1; i <= totalP; i++) {
          this.arrays.push(i);
        }
    }
    else {
      this.pageLimit();
    }
    }
   }

  ngOnInit(): void {
  }

  pageDivide(): void {
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
    else if ( this.activePage >= 5  && this.activePage <= this.totalPage - 4) {
      this.restartArrays(this.activePage + 5 , this.activePage - 4);
    }

    else if (this.activePage >= 5 && this.activePage >= this.totalPage - 4) {
      this.restartArrays(this.activePage, this.activePage - 4 );

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
