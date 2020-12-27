import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('chooseCategory') category: ElementRef;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToGenres(e: HTMLInputElement): any {
    console.log(e.innerText);

    this.router.navigate([`/genres/${this.category}`]);
  }

}
