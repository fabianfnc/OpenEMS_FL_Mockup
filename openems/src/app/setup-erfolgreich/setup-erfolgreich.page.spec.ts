import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupErfolgreichPage } from './setup-erfolgreich.page';

describe('SetupErfolgreichPage', () => {
  let component: SetupErfolgreichPage;
  let fixture: ComponentFixture<SetupErfolgreichPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupErfolgreichPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupErfolgreichPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
