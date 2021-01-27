import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleOfTheLongNightComponent } from './battle-of-the-long-night.component';

describe('BattleOfTheLongNightComponent', () => {
  let component: BattleOfTheLongNightComponent;
  let fixture: ComponentFixture<BattleOfTheLongNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleOfTheLongNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleOfTheLongNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
