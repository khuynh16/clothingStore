import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private authSubject: BehaviorSubject<any> = new BehaviorSubject({authStatus: false});

  constructor() { }

  getAuthStatus() {
    return this.authSubject.asObservable();
  }

  authenticateUser() {
    console.log('hello auth user!');
    this.authSubject.next({
      authStatus: true
    });
  }
}
