import { TestBed } from '@angular/core/testing';

import { VoterTalleyService } from './voter-talley.service';

describe('VoterTalleyService', () => {
  let service: VoterTalleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterTalleyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
