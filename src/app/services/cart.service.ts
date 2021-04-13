import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];

  count: number = 0;

  constructor() { }

  getCart() {
    return this.cartItems;
  }

  addToCart(title, subtitle, imageUrl, price, size, color) {
    this.cartItems.push({
      title: title,
      subtitle: subtitle,
      imageUrl: imageUrl,
      price: price,
      size: size,
      color: color
    });
    console.log('cartItems size: ' + this.cartItems.length);
  }
}
