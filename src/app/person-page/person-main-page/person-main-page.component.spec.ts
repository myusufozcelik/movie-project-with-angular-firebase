import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMainPageComponent } from './person-main-page.component';

describe('PersonMainPageComponent', () => {
  let component: PersonMainPageComponent;
  let fixture: ComponentFixture<PersonMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
