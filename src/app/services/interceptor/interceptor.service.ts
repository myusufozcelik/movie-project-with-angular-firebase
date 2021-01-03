import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  private typeMovieList = new BehaviorSubject('top_rated')
  currentType = this.typeMovieList.asObservable();

  constructor() { }


  changeType(type: string) {
    this.typeMovieList.next(type);
  }


}
