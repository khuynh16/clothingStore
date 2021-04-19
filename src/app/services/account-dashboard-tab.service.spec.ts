import { TestBed } from '@angular/core/testing';

import { AccountDashboardTabService } from './account-dashboard-tab.service';

describe('AccountDashboardTabService', () => {
  let service: AccountDashboardTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDashboardTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
