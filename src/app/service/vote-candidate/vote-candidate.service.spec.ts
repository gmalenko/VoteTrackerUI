import { TestBed } from '@angular/core/testing';

import { VoteCandidateService } from './vote-candidate.service';

describe('VoteCandidateService', () => {
  let service: VoteCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
