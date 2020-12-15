import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getArrayOfPage(pageCount: number, startPage): any {
    const pageArray = []; //pageCount 500 geldi
    if (pageCount > 0 && startPage < 10) {
      for (let i=1; i <=10; i++) {
        pageArray.push(i);
      }
      if (pageArray.length > 10 && startPage > 10) {
        pageArray.pop();
        for (let i=startPage; i<= startPage+10; i++) {
          pageArray.push(i);
        }
      }
      console.log(pageArray);
    }
    return pageArray;
  }
}
