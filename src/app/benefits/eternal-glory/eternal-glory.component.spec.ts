import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalGloryComponent } from './eternal-glory.component';

describe('EternalGloryComponent', () => {
  let component: EternalGloryComponent;
  let fixture: ComponentFixture<EternalGloryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EternalGloryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalGloryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
