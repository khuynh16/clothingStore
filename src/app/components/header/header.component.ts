import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onAuthPage: boolean;
  currentRoute: string;
  shoppingCartOrCheckout = false;

  constructor(private route: ActivatedRoute) {
    this.currentRoute = route.snapshot.url[0].path;
  }

  isActive() {

  }


  ngOnInit(): void {
    this.onAuthPage = false;
    if (this.currentRoute === 'sign-in' || this.currentRoute === 'sign-up') {
      this.onAuthPage = true;
    }

    if (this.currentRoute === 'cart' || this.currentRoute === 'checkout') {
      this.shoppingCartOrCheckout = true;
    }


  }
}
