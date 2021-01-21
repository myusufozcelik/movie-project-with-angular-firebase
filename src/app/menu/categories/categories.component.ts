import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genres } from 'src/app/models/genres.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, AfterViewInit {

  movieCategories: Genres[];
  path = environment.picturePath;
  showLoading = false;
  // tslint:disable-next-line: max-line-length
  imagePaths = [
    {firstImage: `${this.path}/action_1.jpg`, secondImage: `${this.path}/action_2.jpg`},
    {firstImage: `${this.path}/adventure_2.jpg`, secondImage: `${this.path}/adventure_1.jpg`},
    {firstImage: `${this.path}/animation_1.jpg`, secondImage: `${this.path}/animation_2.jpg`},
    {firstImage: `${this.path}/comedy_2.jpg`, secondImage: `${this.path}/comedy_1.jpg`},
    {firstImage: `${this.path}/crime_1.jpg`, secondImage: `${this.path}/crime_2.jpg`},
    {firstImage: `${this.path}/documentary_1.jpg`, secondImage: `${this.path}/documentary_2.jpg`},
    {firstImage: `${this.path}/dram_1.jpg`, secondImage: `${this.path}/dram_2.jpg`},
    {firstImage: `${this.path}/family_1.jpg`, secondImage: `${this.path}/family_2.jpg`},
    {firstImage: `${this.path}/fantasy_1.jpg`, secondImage: `${this.path}/fantasy_2.jpg`},
    {firstImage: `${this.path}/history_1.jpg`, secondImage: `${this.path}/history_2.jpg`},
    {firstImage: `${this.path}/horror_1.jpg`, secondImage: `${this.path}/horror_2.jpg`},
    {firstImage: `${this.path}/musical_2.jpg`, secondImage: `${this.path}/musical_1.jpg`},
    {firstImage: `${this.path}/mystery_1.jpg`, secondImage: `${this.path}/mystery_2.jpg`},
    {firstImage: `${this.path}/romance_1.jpg`, secondImage: `${this.path}/romance_2.jpg`},
    {firstImage: `${this.path}/scifi_2.jpg`, secondImage: `${this.path}/scifi_1.jpg`},
    {firstImage: `${this.path}/tv_1.jpg`, secondImage: `${this.path}/tv_2.jpg`},
    {firstImage: `${this.path}/thriller_1.jpg`, secondImage: `${this.path}/thriller_2.jpg`},
    {firstImage: `${this.path}/war_1.jpg`, secondImage: `${this.path}/war_2.jpg`},
    {firstImage: `${this.path}/western_1.jpg`, secondImage: `${this.path}/western_2.jpg`}
];


  constructor(private movieService: MovieService, private router: Router) {
    this.showLoading = true;
   }


  ngOnInit(): void { // LAZYLOADING EKLE
    this.movieService.getGenres().subscribe(genres => {
      // tslint:disable-next-line: max-line-length
      this.movieCategories = genres;
    });
  }

  ngAfterViewInit(): void {
    this.showLoading = false;
  }

  goToGenres(id: number): any {
    this.router.navigate([`/genres/${id}`]);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

}
