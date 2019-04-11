import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechselrichtererrorPage } from './wechselrichtererror.page';

describe('WechselrichtererrorPage', () => {
  let component: WechselrichtererrorPage;
  let fixture: ComponentFixture<WechselrichtererrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechselrichtererrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechselrichtererrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
