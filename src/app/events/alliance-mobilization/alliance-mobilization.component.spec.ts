import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceMobilizationComponent } from './alliance-mobilization.component';

describe('AllianceMobilizationComponent', () => {
  let component: AllianceMobilizationComponent;
  let fixture: ComponentFixture<AllianceMobilizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceMobilizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllianceMobilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
