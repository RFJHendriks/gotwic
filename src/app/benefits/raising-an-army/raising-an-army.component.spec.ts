import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisingAnArmyComponent } from './raising-an-army.component';

describe('RaisingAnArmyComponent', () => {
  let component: RaisingAnArmyComponent;
  let fixture: ComponentFixture<RaisingAnArmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisingAnArmyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisingAnArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
