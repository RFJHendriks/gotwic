import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceConquestComponent } from './alliance-conquest.component';

describe('AllianceConquestComponent', () => {
  let component: AllianceConquestComponent;
  let fixture: ComponentFixture<AllianceConquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllianceConquestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllianceConquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
