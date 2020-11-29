import { MoviesOmdb } from './../../models/movies.omdb.model';
import { Movies } from './../../models/movies.model';
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
  apiKey = environment.apiKeyTmdb;
  apiKeyOmdb = environment.apiKeyOmdb;
  trendMoviePath = environment.trendMovies;
  movieDetails = environment.detailMovies;
  movieDetailsOmdb = environment.detailOmdbMovies;
  constructor(private httpClient: HttpClient) { }


  getTrend(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.trendMoviePath)
    .pipe(map(result => result['results']));

  }

  getMovies(movieId: number): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(`${this.movieDetails}/${movieId}?api_key=${this.apiKey}`);
  }

  getMoviesOmdb(imdbId: number): Observable<MoviesOmdb[]> {
    return this.httpClient.get<MoviesOmdb[]>(`${this.movieDetailsOmdb}${imdbId}&apikey=${this.apiKeyOmdb}`);
  }

}
