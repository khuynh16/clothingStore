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
      quantity: quantity,
      isChecked: true
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

  adjustNumItemsInCart(newQuantityOfItems, itemId, currentQuantValue, price) {
    let isChecked = false;

    this.cartItems.forEach(item => {
      if (item.itemId === itemId) {
        isChecked = item.isChecked;
      }
    });

    if (isChecked) {
      this.numItemsInCart = this.numItemsInCart + (newQuantityOfItems - currentQuantValue);
      this.subtotal = this.subtotal + (price * (newQuantityOfItems - currentQuantValue));
  
      this.cartItemsSubject.next({
        cart: this.cartItems,
        numItems: this.numItemsInCart,
        subtotal: this.subtotal
      });
    }
  }

  /** 
  *  Handle cart pricing and number of items in cart when user checks or unchecks
  *  the box next to any particular item in cart list.
  *  @param checkStatus true or false in whether item is checked
  *  @param itemId the id number pertaining to the item that was checked or unchecked
  *  @return update to behaviorsubject containing the current cart items, number of items,
  *    and the current subtotal
  */
  adjustItemCheckStatus(checkedStatus: boolean, itemId: number) {
    // find the one particular checked (or unchecked item) and edit the following values/objects
    // accordingly:
    // - the particular item's 'isChecked' value
    // - number of items in cart and subtotal values
    // - behaviorsubject
    this.cartItems.forEach(item => {
      if (item.itemId === itemId) {
        item.isChecked = checkedStatus;
        
        if (checkedStatus === false) {
          this.numItemsInCart = this.numItemsInCart - item.quantity;
          this.subtotal = this.subtotal - (item.price * item.quantity); 
        }
        else if (checkedStatus === true) {
          this.numItemsInCart = this.numItemsInCart + item.quantity;
          this.subtotal = this.subtotal + (item.price * item.quantity); 
        }
      }
    });

    this.cartItemsSubject.next({
      cart: this.cartItems,
      numItems: this.numItemsInCart,
      subtotal: this.subtotal
    });
  }
}
