import { Movie } from './../../models/movie.model';
import { environment } from './../../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  trendMoviePath = environment.trendMovies;

  constructor(private httpClient: HttpClient) { }



  getTrend(): Observable<Movie[]> {

    return this.httpClient.get<Movie[]>(this.trendMoviePath)
    .pipe(map(result => result['results']));

  }

}
