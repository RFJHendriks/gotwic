import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCarnivalComponent } from './dragon-carnival.component';

describe('DragonCarnivalComponent', () => {
  let component: DragonCarnivalComponent;
  let fixture: ComponentFixture<DragonCarnivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonCarnivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCarnivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
