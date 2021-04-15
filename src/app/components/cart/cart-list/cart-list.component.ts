import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  color = 'primary';
  subscription: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.getCart().subscribe(cartDetails => {
      this.cartItems = cartDetails.cart;
    });
  }

  removeItemFromCart(itemId, price) {
    this.cartService.removeFromCart(itemId, price);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
