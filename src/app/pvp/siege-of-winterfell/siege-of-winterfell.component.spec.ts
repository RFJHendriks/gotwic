import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeOfWinterfellComponent } from './siege-of-winterfell.component';

describe('SiegeOfWinterfellComponent', () => {
  let component: SiegeOfWinterfellComponent;
  let fixture: ComponentFixture<SiegeOfWinterfellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiegeOfWinterfellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiegeOfWinterfellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
