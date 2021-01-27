import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatCitiesComponent } from './great-cities.component';

describe('GreatCitiesComponent', () => {
  let component: GreatCitiesComponent;
  let fixture: ComponentFixture<GreatCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
