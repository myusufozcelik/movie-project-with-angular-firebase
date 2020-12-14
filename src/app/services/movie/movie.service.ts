import { Person } from './../../models/person.model';
import { Video } from './../../models/video.model';
import { Cast } from './../../models/cast.model';
import { Translate } from './../../models/translate.model';
import { MoviesOmdb } from './../../models/movies.omdb.model';
import { Movies } from './../../models/movies.model';
import { Movie } from './../../models/movie.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Genres } from 'src/app/models/genres.model';


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
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=tr&page=1`);
  }

  getSimilar(movieId: number): Observable<Movie[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
    // tslint:disable-next-line: no-string-literal
    .pipe(map(result => result['results']));
  }

  // getTranslate(movieId: number): Observable<Translate[]> {
  //   return this.httpClient.get<Translate[]>(`https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${this.apiKey}`)
  //   // tslint:disable-next-line: no-string-literal
  //   .pipe(map(result => result['translations']));
  // }

  getMovieCast(movieId: number): Observable<Cast[]> {
    return this.httpClient.get<Cast[]>(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`)
    // tslint:disable-next-line: no-string-literal
    .pipe(map(result => result['cast']));
  }

  getMovieDirector(movieId: number): Observable<Cast[]> {
    return this.httpClient.get<Cast[]>(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`)
    .pipe(map(result => result['crew']));
  }

  getVideos(movieId: number): Observable<Video> {
    return this.httpClient.get<Video>(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`)
    .pipe(map(result => result['results']))
  }

  getPeopleDetails(personId: number): Observable<Person> {
      return this.httpClient.get<Person>(`https://api.themoviedb.org/3/person/${personId}?api_key=1809a55509c3d4f7842300e2a5529fbb&language=en-US`)
  }

  getPeopleMovies(peopleName: string, peopleSurname: string): Observable<Movie[]> {

    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&language=en-US&query=${peopleName}%20${peopleSurname}&include_adult=false`)
    .pipe(map(result => result['results']))
  }

  getPeopleMoviesWithId(peopleId: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/person/${peopleId}/movie_credits?api_key=${this.apiKey}&language=en-US`)
    .pipe(map(result => result['cast']))
  }

  getMovies(movieId: number): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(`${this.movieDetails}/${movieId}?api_key=${this.apiKey}`);
  }

  getGenres(): Observable<Genres[]>{
    return this.httpClient.get<Genres[]>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=tr`)
    // tslint:disable-next-line: no-string-literal
    .pipe(map(result => result['genres']));
  }

  getMoviesWithFilter(sortBy?: any, page = 1, genres?: string, languages?: string ): Observable<Movie[]> {
    let api = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&page=${page}`;
    if (sortBy) {
      // tslint:disable-next-line: no-unused-expression
      api =  api.concat(`&sort_by=${sortBy}`);
    }
    if (genres) {
      api = api.concat(`&with_genres=${genres}`);
    }
    if (languages) {
      api = api.concat(`&with_original_language=${languages}`);
    }
    return this.httpClient.get<Movie[]>(api)
    // tslint:disable-next-line: no-string-literal
    .pipe(map(result => result['results']));
  }

  getMoviesOmdb(imdbId: number): Observable<MoviesOmdb> {
    return this.httpClient.get<MoviesOmdb>(`${this.movieDetailsOmdb}${imdbId}&apikey=${this.apiKeyOmdb}`);
  }

}
