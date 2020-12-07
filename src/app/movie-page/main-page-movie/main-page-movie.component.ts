import { Cast } from './../../models/cast.model';
import { TranslateObject } from './../../models/translate-object.model';
import { Movies } from './../../models/movies.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationError, NavigationStart, Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-main-page-movie',
  templateUrl: './main-page-movie.component.html',
  styleUrls: ['./main-page-movie.component.scss']
})
export class MainPageMovieComponent implements OnInit {

  tmdbData: any;
  omdbData: any;
  movieRecommend: Movie[];
  movieDetail: Movies;
  movieId: number;
  translate?: TranslateObject;
  movieCast: Cast[];

  constructor(private movieService: MovieService, private router: ActivatedRoute, private route: Router) {
    this.getMovieDetails();
  }

  ngOnInit(): void {
  }


  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    const movieId: number = +this.router.snapshot.paramMap.get('id');
    this.loadProduct(movieId);
  }


  getMovieDetails(): any {
    const movieId: number = +this.router.snapshot.paramMap.get('id');

    this.movieService.getMovieDetail(movieId)
      .subscribe(data => {
        this.movieDetail = data;
        this.movieId = data.id;
          console.log(this.movieDetail);
      });

    this.movieService.getSimilar(movieId)
      .subscribe(data => {
        this.movieRecommend = data.slice(0, 8);
        console.log(this.movieRecommend);
      });

    this.movieService.getTranslate(movieId)
      .subscribe(data => {
        // tslint:disable-next-line: no-shadowed-variable
        this.translate = data.filter(data => data?.name === 'Türkçe')[0]?.data;
        if (this.translate === undefined) {
          // tslint:disable-next-line: no-shadowed-variable
          this.translate = data.filter(data => data.name === 'English')[0].data;
        }
      });

    this.movieService.getMovieCast(movieId)
      .subscribe(data => {
        // tslint:disable-next-line: no-shadowed-variable
         this.movieCast = data.filter(data => data.popularity >= 2);
          // this.movieCast = this.movieCast.slice().sort((a,b) => b.popularity - a.popularity)
         this.movieCast.splice(5, this.movieCast.length - 1);
         console.log(this.movieCast);
      });
  }


  loadProduct(id): any {
      this.route.navigate([`/movie/${id}`], {relativeTo: this.router});
      setTimeout(() => {
        window.location.reload();
      }, 10);
  }

}
