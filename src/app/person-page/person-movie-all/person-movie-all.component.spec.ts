import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMovieAllComponent } from './person-movie-all.component';

describe('PersonMovieAllComponent', () => {
  let component: PersonMovieAllComponent;
  let fixture: ComponentFixture<PersonMovieAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonMovieAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMovieAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
