import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandersComponent } from './commanders.component';

describe('CommandersComponent', () => {
  let component: CommandersComponent;
  let fixture: ComponentFixture<CommandersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
