import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountDashboardTabService } from 'src/app/services/account-dashboard-tab.service';
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

  constructor(private route: ActivatedRoute, 
    public authUserService: AuthUserService, 
    public accountDashboardTabService: AccountDashboardTabService) {
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
    });
  }

  logout() {
    this.authUserService.logout();
  }

  toAccountDashboard(accountTabName) {
    this.accountDashboardTabService.assignCurrentTab(accountTabName);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
