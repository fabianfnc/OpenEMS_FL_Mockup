import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriePage } from './batterie.page';

describe('BatteriePage', () => {
  let component: BatteriePage;
  let fixture: ComponentFixture<BatteriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
