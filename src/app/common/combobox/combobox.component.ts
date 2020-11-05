import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  movieType = ['Aksiyon', 'Komedi', 'Drama', 'Fantastik', 'Korku', 'Gizem', 'Romantik', 'Gerilim', 'Western'];

  movieOrigin = ['Amerika', 'Yerli', 'Avrupa', 'Asya', 'Diğer'];

  constructor() { }

  ngOnInit() {
  }

}
