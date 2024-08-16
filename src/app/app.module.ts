import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideComponent,
    CartComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
