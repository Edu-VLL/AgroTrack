import { TestBed } from '@angular/core/testing';

import { Sunat } from './sunat';

describe('Sunat', () => {
  let service: Sunat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sunat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
