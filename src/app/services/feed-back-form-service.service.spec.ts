import { TestBed } from '@angular/core/testing';

import { FeedBackFormServiceService } from './feed-back-form-service.service';

describe('FeedBackFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedBackFormServiceService = TestBed.get(FeedBackFormServiceService);
    expect(service).toBeTruthy();
  });
});
