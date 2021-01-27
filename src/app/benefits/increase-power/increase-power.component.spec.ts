import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreasePowerComponent } from './increase-power.component';

describe('IncreasePowerComponent', () => {
  let component: IncreasePowerComponent;
  let fixture: ComponentFixture<IncreasePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreasePowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreasePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
