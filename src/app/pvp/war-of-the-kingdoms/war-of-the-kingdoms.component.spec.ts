import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarOfTheKingdomsComponent } from './war-of-the-kingdoms.component';

describe('WarOfTheKingdomsComponent', () => {
  let component: WarOfTheKingdomsComponent;
  let fixture: ComponentFixture<WarOfTheKingdomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarOfTheKingdomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarOfTheKingdomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
