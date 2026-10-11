import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  products: any[] = [];
  constructor() { 
    console.log('CartService constructor called');
  }

  addProduct(product: any) {
    this.products.push(product);
  }
}
