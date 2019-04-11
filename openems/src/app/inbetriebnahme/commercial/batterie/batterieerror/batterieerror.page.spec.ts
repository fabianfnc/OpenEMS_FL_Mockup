import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterieerrorPage } from './batterieerror.page';

describe('BatterieerrorPage', () => {
  let component: BatterieerrorPage;
  let fixture: ComponentFixture<BatterieerrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterieerrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterieerrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
