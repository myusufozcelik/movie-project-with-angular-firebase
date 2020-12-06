import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageCardComponent } from './movie-page-card.component';

describe('MoviePageCardComponent', () => {
  let component: MoviePageCardComponent;
  let fixture: ComponentFixture<MoviePageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
