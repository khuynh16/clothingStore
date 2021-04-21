import { Component, OnInit } from '@angular/core';
import { CustomerCheckoutService } from 'src/app/services/customer-checkout.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  creditCardNumber: string = '';
  nameOnCard: string = '';
  expirationDate: string = '';
  cardSecurityCode: string = '';

  constructor(private customerCheckoutService: CustomerCheckoutService) { }

  ngOnInit(): void {
  }

  updateCustomerBehaviorSubject(inputNumber) {
    switch (inputNumber) {
      case 14:
        this.customerCheckoutService.updateCreditCardNumber(this.creditCardNumber);
        break;
      case 15:
        this.customerCheckoutService.updateNameOnCard(this.nameOnCard);
        break;
      case 16:
        this.customerCheckoutService.updateExpirationDate(this.expirationDate);
        break;
      case 17:
        this.customerCheckoutService.updateCardSecurityCode(this.cardSecurityCode);
        break;
    }
  }

}
