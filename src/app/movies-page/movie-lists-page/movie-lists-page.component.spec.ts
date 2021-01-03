import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListsPageComponent } from './movie-lists-page.component';

describe('MovieListsPageComponent', () => {
  let component: MovieListsPageComponent;
  let fixture: ComponentFixture<MovieListsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
