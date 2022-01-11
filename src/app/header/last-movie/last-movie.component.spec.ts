import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovieComponent } from './last-movie.component';

describe('LastMovieComponent', () => {
  let component: LastMovieComponent;
  let fixture: ComponentFixture<LastMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
