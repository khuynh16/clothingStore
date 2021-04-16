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

  currentQuantityForItems = {};

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.getCart().subscribe(cartDetails => {
      this.cartItems = cartDetails.cart;

      // update object with key value pairs item id (for each added item(s)) and 
      this.cartItems.forEach(item => {
        this.currentQuantityForItems[item.itemId] = item.quantity;
      });
    });
  }

  removeItemFromCart(itemId, price, quantity) {
    this.cartService.removeFromCart(itemId, price, quantity);
  }

  quantityChange(event, itemId, price) {
    this.cartService.adjustNumItemsInCart(event.value, this.currentQuantityForItems[itemId], price);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
