import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBNFinishPage } from './ibn-finish.page';

describe('IBNFinishPage', () => {
  let component: IBNFinishPage;
  let fixture: ComponentFixture<IBNFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBNFinishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBNFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
