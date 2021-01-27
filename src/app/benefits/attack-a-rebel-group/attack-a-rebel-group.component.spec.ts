import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackARebelGroupComponent } from './attack-a-rebel-group.component';

describe('AttackARebelGroupComponent', () => {
  let component: AttackARebelGroupComponent;
  let fixture: ComponentFixture<AttackARebelGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackARebelGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackARebelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
