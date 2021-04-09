import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems = ['item 1', 'item 2', 'item 3', 'item 4'];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  color = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
