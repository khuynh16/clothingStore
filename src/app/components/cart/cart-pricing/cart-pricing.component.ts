import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

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

    // // determine number of cart items for subtotal text
    // this.currentNumCartItems = this.cartService.getNumOfCartItems();
    
    // // determine subtotal of cart
    // this.currentSubtotal = this.cartService.getCurrentCartSubtotal();

    this.subscription = this.cartService.getCart().subscribe(cartDetails => {
      this.currentNumCartItems = cartDetails.numItems;
      this.currentSubtotal = cartDetails.subtotal;
    });

  }

}
