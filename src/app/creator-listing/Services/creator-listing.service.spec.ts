import { TestBed } from '@angular/core/testing';

import { CreatorListingService } from './creator-listing.service';

describe('CreatorListingService', () => {
  let service: CreatorListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
