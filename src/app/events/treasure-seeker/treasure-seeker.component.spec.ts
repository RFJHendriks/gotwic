import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureSeekerComponent } from './treasure-seeker.component';

describe('TreasureSeekerComponent', () => {
  let component: TreasureSeekerComponent;
  let fixture: ComponentFixture<TreasureSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasureSeekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasureSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
