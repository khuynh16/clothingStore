import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerCheckoutService } from 'src/app/services/customer-checkout.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit, OnDestroy {
  customerName: {
    firstName: string,
    lastName: string
  };
  emailAddress: string;
  shippingAddress: {
    shipStreetAddress1: string,
    shipStreetAddress2: string,
    shipCity: string,
    shipState: string,
    shipZipcode: string
  };
  billingAddress: {
    billStreetAddress1: string,
    billStreetAddress2: string,
    billCity: string,
    billState: string,
    billZipcode: string
  };
  cardInfo: {};
  subscription: Subscription;

  constructor(public  customerCheckoutService: CustomerCheckoutService) { }

  ngOnInit(): void {
    this.subscription = this.customerCheckoutService.getCustomer().subscribe(customerDetails => {

      this.customerName = { ...customerDetails.customerName };
      this.emailAddress = customerDetails.emailAddress;
      this.shippingAddress = { ...customerDetails.shippingAddress };
      this.billingAddress = { ...customerDetails.billingAddress };

      console.log('in');
      console.log(customerDetails);
    });

    console.log('======');
    console.log(this.customerName);
    console.log(this.emailAddress);
    console.log(this.shippingAddress);
    console.log(this.billingAddress);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  

}
