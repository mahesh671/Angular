import { TestBed } from '@angular/core/testing';

import { SemestersServiceService } from './semesters-service.service';

describe('SemestersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemestersServiceService = TestBed.get(SemestersServiceService);
    expect(service).toBeTruthy();
  });
});
