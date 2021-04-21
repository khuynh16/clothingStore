import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-pricing',
  templateUrl: './cart-pricing.component.html',
  styleUrls: ['./cart-pricing.component.css']
})
export class CartPricingComponent implements OnInit, OnDestroy {
  currentRoute: string;
  isCartRoute = false;
  isCheckoutRoute = false;
  toCheckoutOrPlaceOrder: string;
  noItemsInCart = true;
  shippingAndHandlingFee = 3.00;
  tax = 3.00;

  currentNumCartItems: number;
  currentSubtotal: number;

  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, public cartService: CartService) {
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

    this.subscription = this.cartService.getCart().subscribe(cartDetails => {
      this.currentNumCartItems = cartDetails.numItems;
      this.currentSubtotal = cartDetails.subtotal;
      this.noItemsInCart = this.currentNumCartItems > 0 ? false : true;
    });
  }

  navigation(navValue) {
    // navValue should be 'Proceed to Checkout' or 'Place Order'
    console.log(navValue + ' : is here!');
    if (navValue === 'Proceed to Checkout') {
      this.router.navigate(['/checkout']);
    }
    else if (navValue === 'Place Order') {
      this.router.navigate(['/order-confirmed']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
