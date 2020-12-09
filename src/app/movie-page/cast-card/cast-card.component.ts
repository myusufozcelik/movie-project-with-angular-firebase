import { Cast } from './../../models/cast.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent implements OnInit {

  @Input() castDetails: Cast[];

  constructor() { }

  ngOnInit(): void {
  }

}
