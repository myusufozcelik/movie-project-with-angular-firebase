import { environment } from './../../../environments/environment';
import { Genres } from './../../models/genres.model';
import { MovieService } from './../../services/movie/movie.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  movieCategories: Genres[];
  path = environment.picturePath; //..//../assets/img/menu
  // tslint:disable-next-line: max-line-length
  imagePaths = [
    {firstImage: `${this.path}/action_1.jpg`, secondImage: `${this.path}/action_2.jpg`},
    {firstImage: `${this.path}/adventure_1.jpg`, secondImage: `${this.path}/adventure_2.jpg`},
    {firstImage: `${this.path}/animation_1.jpg`, secondImage: `${this.path}/animation_2.jpg`},
    {firstImage: `${this.path}/comedy_2.jpg`, secondImage: `${this.path}/comedy_1.jpg`},
    {firstImage: `${this.path}/documentary_1.jpg`, secondImage: `${this.path}/documentary_2.jpg`},
    {firstImage: `${this.path}/dram_1.jpg`, secondImage: `${this.path}/dram_2.jpg`},
    {firstImage: `${this.path}/fantasy_1.jpg`, secondImage: `${this.path}/fantasy_2.jpg`},
    {firstImage: `${this.path}/horror_1.jpg`, secondImage: `${this.path}/horror_2.jpg`},
    {firstImage: `${this.path}/romance_1.jpg`, secondImage: `${this.path}/romance_2.jpg`},
    {firstImage: `${this.path}/scifi_2.jpg`, secondImage: `${this.path}/scifi_1.jpg`},
    {firstImage: `${this.path}/war_1.jpg`, secondImage: `${this.path}/war_2.jpg`},
    {firstImage: `${this.path}/western_1.jpg`, secondImage: `${this.path}/western_2.jpg`}
];

  imagePath = {
    backgroundImage: `url${this.imagePaths}`
  };
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void { // LAZYLOADING EKLE
    this.movieService.getGenres().subscribe(genres => {
      // tslint:disable-next-line: max-line-length
      this.movieCategories = genres.filter(data => data.id !== 80 && data.id !== 10751 && data.id !== 36 && data.id !== 10402 && data.id !== 9648 && data.id !== 10770 && data.id !== 53);
      this.movieCategories['image'] = this.imagePath;
      console.log(this.movieCategories);
    });
  }

  goToGenres(id: number): any {
    this.router.navigate([`/genres/${id}`]);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }
}
