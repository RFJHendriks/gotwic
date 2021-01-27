import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteTrialsComponent } from './elite-trials.component';

describe('EliteTrialsComponent', () => {
  let component: EliteTrialsComponent;
  let fixture: ComponentFixture<EliteTrialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliteTrialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliteTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
