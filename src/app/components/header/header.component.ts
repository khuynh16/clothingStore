import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  onAuthPage: boolean;
  currentRoute: string;
  shoppingCartOrCheckout = false;
  subscription: Subscription;
  isAuthorized: boolean;

  constructor(private route: ActivatedRoute, public authUserService: AuthUserService) {
    this.currentRoute = route.snapshot.url[0].path;
  }

  ngOnInit(): void {
    this.onAuthPage = false;
    if (this.currentRoute === 'sign-in' || this.currentRoute === 'sign-up') {
      this.onAuthPage = true;
    }

    if (this.currentRoute === 'cart' || this.currentRoute === 'checkout') {
      this.shoppingCartOrCheckout = true;
    }

    this.subscription = this.authUserService.getAuthStatus().subscribe(authDetails => {
      this.isAuthorized = authDetails.authStatus;
      console.log('this is isAuthorized: ' + this.isAuthorized);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
