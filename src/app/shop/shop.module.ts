import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from '../core/services/cart.service';


@NgModule({
  declarations: [
    ProductListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  providers: [
    CartService
  ]
})
export class ShopModule { }
