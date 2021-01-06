import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  @Input() imdbScore: string;
  @Input() metacriticScore: string;
  @Input() weScore: number;

  constructor() { }

  ngOnInit() {
  }

}
