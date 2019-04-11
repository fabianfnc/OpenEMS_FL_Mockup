import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterieinfoPage } from './batterieinfo.page';

describe('BatterieinfoPage', () => {
  let component: BatterieinfoPage;
  let fixture: ComponentFixture<BatterieinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterieinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterieinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
