import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCheckoutInfoComponent } from './customer-checkout-info.component';

describe('CustomerCheckoutInfoComponent', () => {
  let component: CustomerCheckoutInfoComponent;
  let fixture: ComponentFixture<CustomerCheckoutInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCheckoutInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCheckoutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
