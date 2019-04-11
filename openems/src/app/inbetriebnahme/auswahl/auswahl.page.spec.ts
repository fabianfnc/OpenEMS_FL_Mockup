import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuswahlPage } from './auswahl.page';

describe('AuswahlPage', () => {
  let component: AuswahlPage;
  let fixture: ComponentFixture<AuswahlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuswahlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuswahlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
