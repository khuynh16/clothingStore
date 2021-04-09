import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = ['item 1', 'item 2', 'item 3', 'item 4'];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  color = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
