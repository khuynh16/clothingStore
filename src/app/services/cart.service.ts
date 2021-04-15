import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart;
  cartItems = [];
  count: number = 0;
  itemId: number = 0;
  subtotal: number = 0;

  private cartItemsSubject: BehaviorSubject<any> = new BehaviorSubject({cart: [], numItems: 0, subtotal: 0});

  constructor() { }

  getCart() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(title, subtitle, imageUrl, price, size, color) {
    this.count++;
    this.itemId++;

    this.cartItems.push({
      itemId: this.itemId,
      title: title,
      subtitle: subtitle,
      imageUrl: imageUrl,
      price: price,
      size: size,
      color: color
    });

    this.subtotal = this.subtotal + price;

    this.cartItemsSubject.next({
      cart: this.cartItems,
      numItems: this.count,
      subtotal: this.subtotal
    });
  }

  getNumOfCartItems() {
    return this.count;
  }

  getCurrentCartSubtotal() {
    return this.subtotal;
  }

  removeFromCart(itemId, price) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.itemId !== itemId);
    this.count--;

    this.subtotal = this.subtotal - price;

    this.cartItemsSubject.next({
      cart: this.cartItems,
      numItems: this.count,
      subtotal: this.subtotal
    });
  }
}
