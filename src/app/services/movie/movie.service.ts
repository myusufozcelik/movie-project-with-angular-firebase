import { Translate } from './../../models/translate.model';
import { MoviesOmdb } from './../../models/movies.omdb.model';
import { Movies } from './../../models/movies.model';
import { Movie } from './../../models/movie.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = environment.apiKeyTmdb;
  apiKeyOmdb = environment.apiKeyOmdb;
  trendMoviePath = environment.popularMovies;
  nowPlayingMoviePath = environment.nowPlayingMovies;
  movieDetails = environment.detailMovies;
  movieDetailsOmdb = environment.detailOmdbMovies;
  topRatedPath = environment.topRated;
  upcomingPath = environment.upcomingMovies;
  constructor(private httpClient: HttpClient) { }


  getTrend(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.trendMoviePath)
      // tslint:disable-next-line: no-string-literal
      .pipe(map(result => result['results']));
  }

  getNowPlaying(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.nowPlayingMoviePath)
      // tslint:disable-next-line: no-string-literal
      .pipe(map(result => result['results']));
  }

  getTopRated(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.topRatedPath)
      // tslint:disable-next-line: no-string-literal
      .pipe(map(result => result['results']));
  }

  getUpcoming(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.upcomingPath)
      // tslint:disable-next-line: no-string-literal
      .pipe(map(result => result['results']));
  }

  getMovieDetail(movieId: number): Observable<Movies> {
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getSimilar(movieId: number): Observable<Movie[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
    // tslint:disable-next-line: no-string-literal
    .pipe(map(result => result['results']));
  }

  getTranslate(movieId: number): Observable<Translate[]> {
    return this.httpClient.get<Translate[]>(`https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${this.apiKey}`)
    .pipe(map(result => result['translations']))
    
  }

  getMovies(movieId: number): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(`${this.movieDetails}/${movieId}?api_key=${this.apiKey}`);
  }

  getMoviesOmdb(imdbId: number): Observable<MoviesOmdb[]> {
    return this.httpClient.get<MoviesOmdb[]>(`${this.movieDetailsOmdb}${imdbId}&apikey=${this.apiKeyOmdb}`);
  }

}
