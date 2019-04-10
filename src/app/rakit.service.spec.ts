import { TestBed } from '@angular/core/testing';

import { RakitService } from './rakit.service';

describe('RakitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RakitService = TestBed.get(RakitService);
    expect(service).toBeTruthy();
  });
});
