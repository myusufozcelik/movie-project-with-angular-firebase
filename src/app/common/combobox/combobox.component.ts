import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  movieType = ['Aksiyon', 'Komedi', 'Drama', 'Fantastik', 'Korku', 'Gizem', 'Romantik', 'Gerilim', 'Western'];

  imdbScore = ['9-10', '8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1'];

  movieOrigin = ['Amerika', 'Yerli', 'Avrupa', 'Asya', 'Diğer'];

  constructor() { }

  ngOnInit() {
  }

}
