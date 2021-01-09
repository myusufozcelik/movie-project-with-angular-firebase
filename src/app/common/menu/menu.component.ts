import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showNav() {
    document.getElementsByClassName("navigation")[0].classList.toggle("active");
  }

}
