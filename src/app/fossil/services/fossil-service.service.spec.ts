import { TestBed } from '@angular/core/testing';

import { FossilServiceService } from './fossil-service.service';

describe('FossilServiceService', () => {
  let service: FossilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FossilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
