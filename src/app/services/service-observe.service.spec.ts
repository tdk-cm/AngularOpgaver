import { TestBed } from '@angular/core/testing';

import { ServiceObserveService } from './service-observe.service';

describe('ServiceObserveService', () => {
  let service: ServiceObserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceObserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
