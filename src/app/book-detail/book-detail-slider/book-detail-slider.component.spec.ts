import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailSliderComponent } from './book-detail-slider.component';

describe('BookDetailSliderComponent', () => {
  let component: BookDetailSliderComponent;
  let fixture: ComponentFixture<BookDetailSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
