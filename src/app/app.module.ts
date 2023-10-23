import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    ProductItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
