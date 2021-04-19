import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountDashboardTabService } from 'src/app/services/account-dashboard-tab.service';

@Component({
  selector: 'app-account-tab-group',
  templateUrl: './account-tab-group.component.html',
  styleUrls: ['./account-tab-group.component.css']
})
export class AccountTabGroupComponent implements OnInit, OnDestroy {
  public selectedIndex: number = 0;
  subscription: Subscription;
  tabName: string;

  constructor(public accountDashboardTabService: AccountDashboardTabService) { }

  ngOnInit(): void {
    this.subscription = this.accountDashboardTabService.getCurrentTab().subscribe(tabDetails => {
      this.selectedIndex = tabDetails.tabIndex;
    })
  };

  tabChange(event) {
    
    this.selectedIndex = event.index;
    console.log('selectedIndex is now: ' + this.selectedIndex);
    switch (event.index) {
      case 0:
        this.tabName = 'settings';
        break;
      case 1:
        this.tabName = 'transaction_history';
        break;
      case 2:
        this.tabName = 'track_orders';
        break;
    }
    this.accountDashboardTabService.assignCurrentTab(this.tabName);
  } 
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
