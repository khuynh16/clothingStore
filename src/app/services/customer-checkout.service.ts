import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerCheckoutService {
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
  
  customerName = {};
  emailAddress: string = '';
  shippingAddress = {};
  billingAddress = {};
  cardInfo = {};

  private customerSubject: BehaviorSubject<any> = new BehaviorSubject({
    customerName: {},
    emailAddress: '',
    shippingAddress: {},
    billingAddress: {},
    cardInfo: {}
  });

  constructor() { }

  getCustomer() {
    return this.customerSubject.asObservable();
  }

  /*
  Each of the below functions have three main concepts:
  - update the corresponding temp variable with the parameter
  - update the corresponding temp object with the parameter
  - update the behaviorSubject with the new value and previous behavior subject values
  */

  updateFirstName(firstName) {
    this.firstName = firstName;

    this.customerName['firstName'] = firstName;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateLastName(lastName) {
    this.lastName = lastName;

    this.customerName['lastName'] = lastName;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateEmail(email) {
    this.email = email;

    this.emailAddress = email;

    console.log('DUDE: ' + this.emailAddress);

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateShipStreetAddress1(shipStreetAddress1) {
    this.shipStreetAddress1 = shipStreetAddress1;
    
    this.shippingAddress['shipStreetAddress1'] = shipStreetAddress1;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateShipStreetAddress2(shipStreetAddress2) {
    this.shipStreetAddress2 = shipStreetAddress2;

    this.shippingAddress['shipStreetAddress2'] = shipStreetAddress2;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateShipCity(shipCity) {
    this.shipCity = shipCity;

    this.shippingAddress['shipCity'] = shipCity;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateShipState(shipState) {
    this.shipState = shipState;

    this.shippingAddress['shipState'] = shipState;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateShipZipcode(shipZipcode) {
    this.shipZipcode = shipZipcode;

    this.shippingAddress['shipZipcode'] = shipZipcode;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  // functions for billing address

  updateBillStreetAddress1(billStreetAddress1) {
    this.billStreetAddress1 = billStreetAddress1;

    this.billingAddress['billStreetAddress1'] = billStreetAddress1;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateBillStreetAddress2(billStreetAddress2) {
    this.billStreetAddress2 = billStreetAddress2;

    this.billingAddress['billStreetAddress2'] = billStreetAddress2;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateBillCity(billCity) {
    this.billCity = billCity;

    this.billingAddress['billCity'] = billCity;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateBillState(billState) {
    this.billState = billState;

    this.billingAddress['billState'] = billState;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  updateBillZipcode(billZipcode) {
    this.billZipcode = billZipcode;

    this.billingAddress['billZipcode'] = billZipcode;

    this.customerSubject.next({
      customerName: this.customerName,
      emailAddress: this.emailAddress,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress
    });
  }

  // Payment Information methods

  updateCreditCardNumber(creditCardNumber) {
    console.log('the new number is: ' + creditCardNumber);
  }

  updateNameOnCard(nameOnCard) {
    console.log('new name: ' + nameOnCard);
  }

  updateExpirationDate(expirationDate) {
    console.log('new expiration: ' + expirationDate);
  }

  updateCardSecurityCode(cardSecurityCode) {
    console.log('new code: ' + cardSecurityCode);
  }

  checkCustomerInfoValidity() {

    // this.cartItems.push({
    //   itemId: this.itemId,
    //   title: title,
    //   subtitle: subtitle,
    //   imageUrl: imageUrl,
    //   price: price,
    //   size: size,
    //   color: color,
    //   quantity: quantity,
    //   isChecked: true
    // });

    // this.cartItemsSubject.next({
    //   cart: this.cartItems,
    //   numItems: this.numItemsInCart,
    //   subtotal: this.subtotal
    // });
  }
}
