import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFEHLERPage } from './setup-fehler.page';

describe('SetupFEHLERPage', () => {
  let component: SetupFEHLERPage;
  let fixture: ComponentFixture<SetupFEHLERPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFEHLERPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFEHLERPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
