import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailInformationComponent } from './book-detail-information.component';

describe('BookDetailInformationComponent', () => {
  let component: BookDetailInformationComponent;
  let fixture: ComponentFixture<BookDetailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
