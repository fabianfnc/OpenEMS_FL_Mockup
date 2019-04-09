import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupIbnprotokolPage } from './setup-ibnprotokol.page';

describe('SetupIbnprotokolPage', () => {
  let component: SetupIbnprotokolPage;
  let fixture: ComponentFixture<SetupIbnprotokolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupIbnprotokolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupIbnprotokolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
