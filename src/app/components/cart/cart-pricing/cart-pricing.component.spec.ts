import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPricingComponent } from './cart-pricing.component';

describe('CartPricingComponent', () => {
  let component: CartPricingComponent;
  let fixture: ComponentFixture<CartPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
