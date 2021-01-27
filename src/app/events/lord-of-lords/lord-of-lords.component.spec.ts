import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordOfLordsComponent } from './lord-of-lords.component';

describe('LordOfLordsComponent', () => {
  let component: LordOfLordsComponent;
  let fixture: ComponentFixture<LordOfLordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LordOfLordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LordOfLordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
