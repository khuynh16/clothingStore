import { Component, OnInit } from '@angular/core';
import { CustomerCheckoutService } from 'src/app/services/customer-checkout.service';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  states: string[] = ['A', 'B', 'C'];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  shipStreetAddress1: string = '';
  shipStreetAddress2: string = '';
  shipCity: string = '';
  shipState: string = '';
  shipZipcode: string = '';
  billStreetAddress1: string = '';
  billStreetAddress2: string = '';
  billCity: string = '';
  billState: string = '';
  billZipcode: string = '';

  constructor(private customerCheckoutService: CustomerCheckoutService) { }

  ngOnInit(): void {
  }

  updateCustomerBehaviorSubject(inputNumber) {
    switch (inputNumber) {
      case 1:
        this.customerCheckoutService.updateFirstName(this.firstName);
        break;
      case 2:
        this.customerCheckoutService.updateLastName(this.lastName);
        break;
      case 3:
        this.customerCheckoutService.updateEmail(this.email);
        break;
      case 4:
        this.customerCheckoutService.updateShipStreetAddress1(this.shipStreetAddress1);
        break;
      case 5:
        this.customerCheckoutService.updateShipStreetAddress2(this.shipStreetAddress2);
        break;
      case 6:
        this.customerCheckoutService.updateShipCity(this.shipCity);
        break;
      case 7:
        this.customerCheckoutService.updateShipState(this.shipState);
        break;
      case 8:
        this.customerCheckoutService.updateShipZipcode(this.shipZipcode);
        break;
      case 9:
        this.customerCheckoutService.updateBillStreetAddress1(this.billStreetAddress1);
        break;
      case 10:
        this.customerCheckoutService.updateBillStreetAddress2(this.billStreetAddress2);
        break;
      case 11:
        this.customerCheckoutService.updateBillCity(this.billCity);
        break;
      case 12:
        this.customerCheckoutService.updateBillState(this.billState);
        break;
      case 13:
        this.customerCheckoutService.updateBillZipcode(this.billZipcode);
        break;
    }
  }

}
