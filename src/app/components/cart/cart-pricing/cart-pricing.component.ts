import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-pricing',
  templateUrl: './cart-pricing.component.html',
  styleUrls: ['./cart-pricing.component.css']
})
export class CartPricingComponent implements OnInit {
  currentRoute: string;
  isCartRoute = false;
  isCheckoutRoute = false;
  toCheckoutOrPlaceOrder: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.currentRoute = route.snapshot.url[0].path;
  }

  ngOnInit(): void {
    if (this.currentRoute === 'cart') {
      this.isCartRoute = true;
      this.isCheckoutRoute = false;
      this.toCheckoutOrPlaceOrder = "Proceed to Checkout";
    } else if (this.currentRoute === 'checkout') {
      this.isCheckoutRoute = true;
      this.isCartRoute = false;
      this.toCheckoutOrPlaceOrder = "Place Order";
    }
  }

}
