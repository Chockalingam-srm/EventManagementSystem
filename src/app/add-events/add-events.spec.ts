import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvents } from './add-events';

describe('AddEvents', () => {
  let component: AddEvents;
  let fixture: ComponentFixture<AddEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
