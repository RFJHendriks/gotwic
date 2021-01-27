import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEffortComponent } from './best-effort.component';

describe('BestEffortComponent', () => {
  let component: BestEffortComponent;
  let fixture: ComponentFixture<BestEffortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestEffortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestEffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
