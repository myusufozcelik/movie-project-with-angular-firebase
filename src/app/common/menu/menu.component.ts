import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activePage = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  showNav() {
    document.getElementsByClassName('navigation')[0].classList.toggle('active');
  }

  goToSearchPage(event): any {
    this.router.navigate([`/movies/search/${event}`]);
    document.getElementsByClassName('navigation')[0].classList.toggle('active');
  }

}
