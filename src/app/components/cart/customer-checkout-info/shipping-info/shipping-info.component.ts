import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  states: string[] = ['A', 'B', 'C'];

  constructor() { }

  ngOnInit(): void {
  }

}
