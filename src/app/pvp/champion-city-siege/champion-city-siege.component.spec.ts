import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionCitySiegeComponent } from './champion-city-siege.component';

describe('ChampionCitySiegeComponent', () => {
  let component: ChampionCitySiegeComponent;
  let fixture: ComponentFixture<ChampionCitySiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionCitySiegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionCitySiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
