import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFivePage } from './setup-five.page';

describe('SetupFivePage', () => {
  let component: SetupFivePage;
  let fixture: ComponentFixture<SetupFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
