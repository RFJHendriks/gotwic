import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherInWinterComponent } from './together-in-winter.component';

describe('TogetherInWinterComponent', () => {
  let component: TogetherInWinterComponent;
  let fixture: ComponentFixture<TogetherInWinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogetherInWinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherInWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
