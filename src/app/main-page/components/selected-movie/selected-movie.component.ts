import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit {

  openTrailerBoolean = false;
  openCardBoolean = true;
  imdbScore = 6.7;
  ourScore =  6.5;
  // tslint:disable-next-line: no-output-native
  @Input() openMovie: boolean;
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  trailerFunction() {
    this.openTrailerBoolean = !this.openTrailerBoolean;
    this.openCardBoolean = !this.openCardBoolean;
  }

  // tslint:disable-next-line: typedef
  onClose() {
    this.close.emit();
  }

}
