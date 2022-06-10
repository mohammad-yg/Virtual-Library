import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailDescriptionComponent } from './book-detail-description.component';

describe('BookDetailDescriptionComponent', () => {
  let component: BookDetailDescriptionComponent;
  let fixture: ComponentFixture<BookDetailDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
