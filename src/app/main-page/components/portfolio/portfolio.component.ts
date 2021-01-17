import { MovieService } from 'src/app/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  openMovie = false;
  movies: Movie[];
  movieType = ['28', '35', '18', '14', '27', '12', '16', '80', '99', '10751', '36', '10402', '9648', '878', '10752', '37'];
  imdbScore = ['4-6', '6-7', '7-8', '8-9', '9-10'];
  releaseDate = ['1980', '1990', '2000', '2010', '2020'];
  originCountry = ['en', 'it', 'ru', 'es', 'fr', 'de', 'hi', 'ko', 'tr', 'he', 'ja'];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  // this.randomNumber = Math.floor(Math.random() * 30);

  goToRandomMoviePage(): any {
       const movieTypeData = this.randomNumberGen(this.movieType.length - 1);
       const imdbScoreData = this.randomNumberGen(this.imdbScore.length - 1);
       const releaseDateData = this.randomNumberGen(this.releaseDate.length - 1);
       const originCountryData = this.randomNumberGen(this.releaseDate.length - 1);
       const scores = this.imdbScore[imdbScoreData].split('-', 2);
       this.movieService.getMoviesWithFilter('popularity.desc', 1, this.movieType[movieTypeData], this.originCountry[originCountryData],
       Number(scores[0]), Number(scores[1]),  +this.releaseDate[releaseDateData])
       .subscribe(data => {
         // tslint:disable-next-line: no-string-literal
         this.movies = data['results'];
         this.movies = this.movies.filter(movie => movie.backdrop_path !== null && movie.overview !== '' && movie.poster_path !== null)
         .slice(0, 1);
       });
       this.openMovie = true;
  }

  randomNumberGen(limit: number): number {
    const randomNumber = Math.floor(Math.random() * limit);
    return randomNumber;
  }

  onButtonExit(): any {
    this.openMovie = false;
  }

}
