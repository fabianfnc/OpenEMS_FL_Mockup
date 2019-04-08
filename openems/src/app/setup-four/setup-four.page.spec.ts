import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFourPage } from './setup-four.page';

describe('SetupFourPage', () => {
  let component: SetupFourPage;
  let fixture: ComponentFixture<SetupFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
