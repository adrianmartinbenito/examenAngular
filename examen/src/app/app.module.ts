import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './features/product-card/product-card.component';
import { ProductComponent } from './features/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
