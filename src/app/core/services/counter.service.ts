import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count = 0;
  constructor() { 
    console.log('CounterService constructor called');
  }
  increment() {
    this.count++;
  }
}
