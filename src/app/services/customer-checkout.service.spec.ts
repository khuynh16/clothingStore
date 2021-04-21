import { TestBed } from '@angular/core/testing';

import { CustomerCheckoutService } from './customer-checkout.service';

describe('CustomerCheckoutService', () => {
  let service: CustomerCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
