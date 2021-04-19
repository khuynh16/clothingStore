import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDashboardTabService {
  private tabSubject: BehaviorSubject<any> = new BehaviorSubject({tabIndex: 0});

  constructor(private router: Router) { }

  getCurrentTab() {
    return this.tabSubject.asObservable();
  }

  assignCurrentTab(tabName) {

    switch(tabName) {
      case 'settings':
        this.tabSubject.next({ tabIndex: 0 });
        break;
      case 'transaction_history':
        this.tabSubject.next({ tabIndex: 1 });
        break;
      case 'track_orders':
        this.tabSubject.next({ tabIndex: 2 });
        break;
    }

    this.router.navigate(['/account']);
  }
}
