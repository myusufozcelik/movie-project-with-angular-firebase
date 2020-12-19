import { Genres } from './../../models/genres.model';
import { MoviesOmdb } from './../../models/movies.omdb.model';
import { Video } from './../../models/video.model';
import { Cast } from './../../models/cast.model';
import { TranslateObject } from './../../models/translate-object.model';
import { Movies } from './../../models/movies.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page-movie',
  templateUrl: './main-page-movie.component.html',
  styleUrls: ['./main-page-movie.component.scss']
})
export class MainPageMovieComponent implements OnInit {

  tmdbData: any;
  movieRecommend: Movie[];
  movieDetail: Movies;
  movieId: number;
  translate?: TranslateObject;
  movieCast: Cast[];
  movieFragman: Video;
  isOpenFragman = false;
  videoUrl;
  omdbData: MoviesOmdb;
  director: Cast[];


  constructor(private movieService: MovieService, private router: ActivatedRoute, private route: Router,
              private sanitizer: DomSanitizer) {
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
        console.log(this.movieDetail);
        this.movieId = data.id;
        this.movieService.getMoviesOmdb(this.movieDetail.imdb_id)
          // tslint:disable-next-line: no-shadowed-variable
          .subscribe(data => {
            if (this.movieDetail.overview === '') {
              // tslint:disable-next-line: semicolon
              this.movieDetail.overview = data.Plot
            }
            this.omdbData = data;
            // this.originFlag = `../../../assets/img/flags/${this.omdbData.Country}.png`;
            console.log(this.omdbData);
          });
        
      });

    this.movieService.getSimilar(movieId)
      .subscribe(data => {
        this.movieRecommend = data.slice(0, 8);
        console.log(this.movieRecommend);
      });

    // this.movieService.getTranslate(movieId)
    //   .subscribe(data => {
    //     // tslint:disable-next-line: no-shadowed-variable
    //     this.translate = data.filter(data => data?.name === 'Türkçe')[0]?.data;
    //     if (this.translate === undefined) {
    //       // tslint:disable-next-line: no-shadowed-variable
    //       this.translate = data.filter(data => data.name === 'English')[0]?.data;
    //     }
    //   });

    this.movieService.getMovieCast(movieId)
      .subscribe(data => {
        // tslint:disable-next-line: no-shadowed-variable
         this.movieCast = data.filter(data => data.popularity >= 2);
          // this.movieCast = this.movieCast.slice().sort((a,b) => b.popularity - a.popularity)
         this.movieCast.splice(5, this.movieCast.length - 1);
         console.log(this.movieCast);
      });

    this.movieService.getMovieDirector(movieId)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line: no-shadowed-variable
        this.director = data.filter(data => data.job === 'Director');
        console.log(this.director);
      });

    this.movieService.getVideos(movieId)
      .subscribe(data => {
        this.movieFragman = data[0];
        this.videoUrl = `https://www.youtube.com/embed/${this.movieFragman.key}`;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
      });
  }

  openTrailer(): any {
    this.isOpenFragman = !this.isOpenFragman;
  }

  goToGenres(genresId): any {
    this.route.navigate([`/genres/${genresId}`]);
  }

  loadProduct(id): any {
      this.route.navigate([`/movie/${id}`], {relativeTo: this.router});
      setTimeout(() => {
        window.location.reload();
      }, 10);
  }

}
