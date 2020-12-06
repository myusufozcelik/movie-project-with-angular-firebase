import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageHeaderComponent } from './movie-page-header.component';

describe('MoviePageHeaderComponent', () => {
  let component: MoviePageHeaderComponent;
  let fixture: ComponentFixture<MoviePageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
