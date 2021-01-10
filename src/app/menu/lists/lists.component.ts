import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './../../models/movie.model';
import { MovieService } from './../../services/movie/movie.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  movies: Movie[];

  listDetails = [
    {flag: 'https://www.flaticon.com/svg/static/icons/svg/197/197484.svg', name: 'U.S.A. & U.K.', value: 'en', picture: 'https://image.tmdb.org/t/p/w342//cvaBVpS0GzKqBd63pFT8f1E8OKv.jpg'},
    {flag: 'https://www.flaticon.com/svg/static/icons/svg/197/197615.svg', name: 'Avrupa', value: 'bg|cs|da|de|el|es|fi|fr|hr|hu|is|it|nb|nl|no|pl|pt|ro|ru|sr|sv|uk', picture: 'https://image.tmdb.org/t/p/w342//slVnvaH6fpF22154vnjQJdXCVZd.jpg' },
    {flag: 'https://www.flaticon.com/svg/static/icons/svg/197/197419.svg', name: 'Hindistan', value: 'hi', picture: 'https://image.tmdb.org/t/p/w342//aGah4UXB7ngftxkqel8CxOfrxnj.jpg'},
    {flag: 'https://www.flaticon.com/svg/static/icons/svg/197/197582.svg', name: 'Asya', value: 'ko|zh|vi|th|ka|ja|id|he|fa|ar', picture: 'https://image.tmdb.org/t/p/w342//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'},
    {flag: 'https://www.flaticon.com/svg/static/icons/svg/197/197518.svg', name: 'Yerli', value: 'tr', picture: 'https://image.tmdb.org/t/p/w342//c4OKvnYOHlKdMvLh8DhoabtAwnR.jpg'}
  ];


  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  getMovies(language: any): any {
    console.log(language);
    this.router.navigate([`/movies/country/${language}`]);
  }

}
