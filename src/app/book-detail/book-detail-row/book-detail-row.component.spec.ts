import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailRowComponent } from './book-detail-row.component';

describe('BookDetailRowComponent', () => {
  let component: BookDetailRowComponent;
  let fixture: ComponentFixture<BookDetailRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
