import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowChevronUpIconComponent } from './arrow-chevron-up-icon.component';

describe('ArrowChevronUpIconComponent', () => {
  let component: ArrowChevronUpIconComponent;
  let fixture: ComponentFixture<ArrowChevronUpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowChevronUpIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowChevronUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
