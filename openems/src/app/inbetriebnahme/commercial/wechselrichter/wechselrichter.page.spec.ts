import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechselrichterPage } from './wechselrichter.page';

describe('WechselrichterPage', () => {
  let component: WechselrichterPage;
  let fixture: ComponentFixture<WechselrichterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechselrichterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechselrichterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
