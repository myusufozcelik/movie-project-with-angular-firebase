import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page-card',
  templateUrl: './movie-page-card.component.html',
  styleUrls: ['./movie-page-card.component.scss']
})
export class MoviePageCardComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
