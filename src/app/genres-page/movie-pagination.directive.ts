import { Directive, Input, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMoviePagination]',
  exportAs: 'pagination'
})
export class MoviePaginationDirective {

  @Input() totalPages: number;
  @Output() onChangeEventEmitter = new EventEmitter();
  pageNo = 1;

  constructor(private rendered: Renderer2, private el: ElementRef) { }


  onNext() {
    this.setPage(Math.min(this.totalPages, this.pageNo + 1 ));
  }

  onPrevious() {
    this.setPage(Math.min(1, this.pageNo - 1));
  }

  onFirst() {
    this.setPage(1);
  }

  onLast() {
    this.setPage(this.totalPages);
  }

  setPage(pageno) {
    this.pageNo = pageno;
    this.rendered.setProperty(this.el.nativeElement, 'value', this.pageNo);
    this.onChangeEventEmitter.emit(this.pageNo);
  }

}
