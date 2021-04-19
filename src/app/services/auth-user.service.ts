import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private authSubject: BehaviorSubject<any> = new BehaviorSubject({authStatus: false});

  constructor(private router: Router) { }

  getAuthStatus() {
    return this.authSubject.asObservable();
  }

  authenticateUser() {
    console.log('hello auth user!');
    this.authSubject.next({
      authStatus: true
    });
  }

  logout() {
    console.log('Auth is now signed out.');
    
    // popup modal of user signing out here

    this.authSubject.next({
      authStatus: false
    });

    this.router.navigate(['/home']);
  }
}
