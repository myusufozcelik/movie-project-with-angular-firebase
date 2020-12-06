import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMovieComponent } from './main-page-movie.component';

describe('MainPageMovieComponent', () => {
  let component: MainPageMovieComponent;
  let fixture: ComponentFixture<MainPageMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
