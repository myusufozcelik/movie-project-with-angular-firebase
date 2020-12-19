import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationsComponent implements OnInit {

  @Input() totalPage: number;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  activePage : number;
  arrays = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
    
  }
  

  pageDivide() {
    console.log(this.totalPage); // 560
  }

  restartArrays():void {
    this.arrays = [];
    for (let i=0; i<this.totalPage; i++) {
      this.arrays.push(i);
    }
  }

  pageLimit() {

    if (this.totalPage < 10) {
     this.restartArrays();
    }
    else {
      for (let i=this.activePage; i<this.activePage+10; i++) {
          this.arrays.shift();
          this.arrays.push(i);
          console.log(this.arrays)
      }
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
