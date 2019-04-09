import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupConnectionPage } from './setup-connection.page';

describe('SetupConnectionPage', () => {
  let component: SetupConnectionPage;
  let fixture: ComponentFixture<SetupConnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupConnectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupConnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
