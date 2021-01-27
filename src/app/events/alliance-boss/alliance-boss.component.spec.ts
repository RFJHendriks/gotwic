import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceBossComponent } from './alliance-boss.component';

describe('AllianceBossComponent', () => {
  let component: AllianceBossComponent;
  let fixture: ComponentFixture<AllianceBossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceBossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllianceBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
