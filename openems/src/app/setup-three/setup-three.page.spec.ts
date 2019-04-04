import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupThreePage } from './setup-three.page';

describe('SetupThreePage', () => {
  let component: SetupThreePage;
  let fixture: ComponentFixture<SetupThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
