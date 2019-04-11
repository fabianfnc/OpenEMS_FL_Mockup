import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechselrichterinfoPage } from './wechselrichterinfo.page';

describe('WechselrichterinfoPage', () => {
  let component: WechselrichterinfoPage;
  let fixture: ComponentFixture<WechselrichterinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechselrichterinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechselrichterinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
