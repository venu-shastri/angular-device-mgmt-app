import { TestBed } from '@angular/core/testing';

import { DeviceMgmtService } from './device-mgmt.service';

describe('DeviceMgmtService', () => {
  let service: DeviceMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
