import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() pageSize: 10 ;
  @Input() totalRecords = 0;
  @Input() recordsPerPage = 0;
  startIndex: number;
  lastIndex: number;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  pages: number[] = [];
  activePage: number;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const pageCount = this.getPageCount();
    this.pages = this.getArrayOfPage(pageCount);
    this.activePage = 1;
    this.onPageChange.emit(1);
  }

  // getPager(totalItems: number, currentPage: number, pageSize: number) {
  //   currentPage = 1;
  //   pageSize = 10;
  //   let totalPages = Math.ceil(totalItems / pageSize);

  //   let startPage: number, endPage: number;

  //   if (totalPages <= 10) {
  //     startPage = 1;
  //     endPage = totalPages;
  //   }
  //   else {
  //     if (currentPage <= 7) {
  //       startPage = 1;
  //       endPage = 5;
  //     }
  //     else if (currentPage + 1 >= totalPages) {
  //       startPage = totalPages - 8;
  //       endPage = totalPages;
  //     }
  //     else {
  //       startPage = currentPage - 2;
  //       endPage = currentPage + 2;
  //     }
  //   }
  //   let startIndex = (currentPage - 1) * pageSize;
  //   let endIndex = Math.min(startIndex + pageSize -1, totalItems -1);
  // }

   getPageCount(): any {
    let totalPage = 0;

    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);
      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1: roundedPageCount;
    }

    return totalPage;
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 10;
    this.lastIndex = this.startIndex + 10;
  } 

   getArrayOfPage(pageCount: number): any {
    const pageArray = []; //pageCount 500 geldi
    if (pageCount > 0) {
      for (let i=1; i <=10; i++) {
        pageArray.push(i);
      }
    }
    return pageArray;
  }

  onClickPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.activePage = pageNumber;

      this.onPageChange.emit(this.activePage);
    }
  }

}
