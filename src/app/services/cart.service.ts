import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  numItemsInCart: number = 0;
  itemId: number = 0;
  subtotal: number = 0;

  private cartItemsSubject: BehaviorSubject<any> = new BehaviorSubject({cart: [], numItems: 0, subtotal: 0});

  constructor() { }

  getCart() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(title, subtitle, imageUrl, price, size, color, quantity) {
    this.itemId++;
    this.numItemsInCart = this.numItemsInCart + quantity;
    this.subtotal = this.subtotal + (price * quantity);

    this.cartItems.push({
      itemId: this.itemId,
      title: title,
      subtitle: subtitle,
      imageUrl: imageUrl,
      price: price,
      size: size,
      color: color,
      quantity: quantity
    });

    this.cartItemsSubject.next({
      cart: this.cartItems,
      numItems: this.numItemsInCart,
      subtotal: this.subtotal
    });
  }

  removeFromCart(itemId, price, quantity) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.itemId !== itemId);
    this.numItemsInCart = this.numItemsInCart - quantity;

    this.subtotal = this.subtotal - (price * quantity);

    this.cartItemsSubject.next({
      cart: this.cartItems,
      numItems: this.numItemsInCart,
      subtotal: this.subtotal
    });
  }

  adjustNumItemsInCart(newQuantityOfItems, currentQuantValue, price) {
    this.numItemsInCart = this.numItemsInCart + (newQuantityOfItems - currentQuantValue);
    this.subtotal = this.subtotal + (price * (newQuantityOfItems - currentQuantValue));

    this.cartItemsSubject.next({
      cart: this.cartItems,
      numItems: this.numItemsInCart,
      subtotal: this.subtotal
    });
  }
}
