import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeirwoodMemoriesComponent } from './weirwood-memories.component';

describe('WeirwoodMemoriesComponent', () => {
  let component: WeirwoodMemoriesComponent;
  let fixture: ComponentFixture<WeirwoodMemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeirwoodMemoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeirwoodMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
