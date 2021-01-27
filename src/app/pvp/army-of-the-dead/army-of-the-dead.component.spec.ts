import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyOfTheDeadComponent } from './army-of-the-dead.component';

describe('ArmyOfTheDeadComponent', () => {
  let component: ArmyOfTheDeadComponent;
  let fixture: ComponentFixture<ArmyOfTheDeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmyOfTheDeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyOfTheDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
