import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageRecommentComponent } from './movie-page-recomment.component';

describe('MoviePageRecommentComponent', () => {
  let component: MoviePageRecommentComponent;
  let fixture: ComponentFixture<MoviePageRecommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePageRecommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageRecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
