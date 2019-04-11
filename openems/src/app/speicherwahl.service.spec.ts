import { TestBed } from '@angular/core/testing';

import { SpeicherwahlService } from './speicherwahl.service';

describe('SpeicherwahlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeicherwahlService = TestBed.get(SpeicherwahlService);
    expect(service).toBeTruthy();
  });
});
