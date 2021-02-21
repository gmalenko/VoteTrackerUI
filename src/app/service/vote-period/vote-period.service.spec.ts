import { TestBed } from '@angular/core/testing';

import { VotePeriodService } from './vote-period.service';

describe('VotePeriodService', () => {
  let service: VotePeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotePeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
