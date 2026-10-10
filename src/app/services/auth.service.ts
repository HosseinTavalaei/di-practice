import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usrname = 'ali';
  constructor() {
    console.log('AuthService constructor called');
   }
}
