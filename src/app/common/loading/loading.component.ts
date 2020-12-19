import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

   open(): any {
     this.isOpen = true;
   }

   close(): any {
     this.isOpen = false;
   }

}
