import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  count: number = 0;
  subtotal: number = 0;

  // private cartItemsSubject = new Subject<{}>();

  constructor() { }

  getCart() {
    return this.cartItems;
  }

  getNumOfCartItems() {
    return this.count;
  }

  getCurrentCartSubtotal() {
    return this.subtotal;
  }

  addToCart(title, subtitle, imageUrl, price, size, color) {
    this.count++;

    this.cartItems.push({
      itemId: this.count,
      title: title,
      subtitle: subtitle,
      imageUrl: imageUrl,
      price: price,
      size: size,
      color: color
    });
    
    this.subtotal = this.subtotal + price;
    console.log('cartItems size: ' + this.cartItems.length);
  }

  removeFromCart(itemId) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.itemId !== itemId);
    console.log('hello');
    this.count--;
  }
}
