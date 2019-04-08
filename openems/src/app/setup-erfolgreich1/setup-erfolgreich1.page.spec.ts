import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupErfolgreich1Page } from './setup-erfolgreich1.page';

describe('SetupErfolgreich1Page', () => {
  let component: SetupErfolgreich1Page;
  let fixture: ComponentFixture<SetupErfolgreich1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupErfolgreich1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupErfolgreich1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
