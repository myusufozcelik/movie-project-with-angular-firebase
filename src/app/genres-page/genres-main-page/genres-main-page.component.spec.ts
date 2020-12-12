import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresMainPageComponent } from './genres-main-page.component';

describe('GenresMainPageComponent', () => {
  let component: GenresMainPageComponent;
  let fixture: ComponentFixture<GenresMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
