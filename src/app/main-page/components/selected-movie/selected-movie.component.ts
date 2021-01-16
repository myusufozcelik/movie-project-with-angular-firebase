import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movies } from './../../../models/movies.model';
import { Movie } from 'src/app/models/movie.model';
import { Component,  EventEmitter,  Input,  OnChanges,  OnInit, Output, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit, OnChanges {

  openTrailerBoolean = false;
  openCardBoolean = true;
  currentMovie: Movie;
  movieNumber = 0;
  isRandomMovies = false;
  videoUrl;
  // tslint:disable-next-line: no-output-native
  @Input() openMovie: boolean;
  @Input() movie: Movie[];
  movieDetail: Movies;
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter<void>();

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentMovie = this.movie[0];
    this.getMovieDetail(this.currentMovie?.id);
  }

  // tslint:disable-next-line: typedef
  changeMovie(type: any) {
    if (type === 'next') {
      this.currentMovie = this.movie[++this.movieNumber];
    }
    else if (type === 'previous') {
      this.currentMovie = this.movie[--this.movieNumber];
    }
    this.getMovieDetail(this.currentMovie?.id);
  }

  getMovieDetail(movieId): any {
    this.movieService.getMovieDetail(movieId)
    .subscribe(movie => {
      this.movieDetail = movie;
      this.movieService.getVideos(movieId)
      .subscribe(data => {
        this.videoUrl = data[0];
        this.videoUrl = `https://www.youtube.com/embed/${this.videoUrl?.key}`;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
      });
    });
  }
  // tslint:disable-next-line: typedef
  trailerFunction() {
    this.openTrailerBoolean = !this.openTrailerBoolean;
    this.openCardBoolean = !this.openCardBoolean;
  }

  // tslint:disable-next-line: typedef
  onClose() {
    this.close.emit();
  }

  goToMoviePage(id): any {
    if (this.openTrailerBoolean) {
      this.trailerFunction();
    }
    else {
      this.router.navigate([`/movie/${id}`]);
    }
  }

  goToGenres(id): any {
    this.router.navigate([`/genres/${id}`]);
  }

}
