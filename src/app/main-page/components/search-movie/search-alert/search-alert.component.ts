import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-alert',
  templateUrl: './search-alert.component.html',
  styleUrls: ['./search-alert.component.scss']
})
export class SearchAlertComponent implements OnInit {

  @Input() message: string;
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onClose() {
    this.close.emit();
  }


}
