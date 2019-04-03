import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTwoPage } from './setup-two.page';

describe('SetupTwoPage', () => {
  let component: SetupTwoPage;
  let fixture: ComponentFixture<SetupTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
