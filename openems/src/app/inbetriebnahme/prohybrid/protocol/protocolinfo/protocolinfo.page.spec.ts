import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolinfoPage } from './protocolinfo.page';

describe('ProtocolinfoPage', () => {
  let component: ProtocolinfoPage;
  let fixture: ComponentFixture<ProtocolinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
