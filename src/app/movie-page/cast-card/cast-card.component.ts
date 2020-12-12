import { Router } from '@angular/router';
import { Cast } from './../../models/cast.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent implements OnInit {

  @Input() castDetails: Cast[];
  @Input() director: Cast[];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  goToPersonPage(personId: number) {
    this.router.navigate([`/person/${personId}`])
  }

}
