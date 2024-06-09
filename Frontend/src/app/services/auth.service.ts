import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // addToLocalStorage() {
  //   localStorage.setItem('SignedIn', 'true');
  // }

  // removeFromLocalStorage() {
  //   localStorage.removeItem('SignedIn');
  // }

  isSignedIn(): boolean {
    return localStorage.getItem('SignedIn') === 'true';
  }
}
