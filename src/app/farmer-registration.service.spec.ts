import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('FarmerRegistrationService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
