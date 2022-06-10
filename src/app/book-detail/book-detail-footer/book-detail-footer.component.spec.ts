import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailFooterComponent } from './book-detail-footer.component';

describe('BookDetailFooterComponent', () => {
  let component: BookDetailFooterComponent;
  let fixture: ComponentFixture<BookDetailFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
