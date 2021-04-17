import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { CartComponent } from './components/cart/cart.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthFormComponent } from './components/auth/auth-form/auth-form.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartPricingComponent } from './components/cart/cart-pricing/cart-pricing.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { CustomerCheckoutInfoComponent } from './components/cart/customer-checkout-info/customer-checkout-info.component';
import { ShippingInfoComponent } from './components/cart/customer-checkout-info/shipping-info/shipping-info.component';
import { PaymentInfoComponent } from './components/cart/customer-checkout-info/payment-info/payment-info.component';
import { WomenComponent } from './components/categories/women/women.component';
import { MenComponent } from './components/categories/men/men.component';
import { HatsComponent } from './components/categories/hats/hats.component';
import { PantsComponent } from './components/categories/pants/pants.component';
import { ShirtsComponent } from './components/categories/shirts/shirts.component';
import { SocksComponent } from './components/categories/socks/socks.component';
import { AddToCartModal, DisplayClothingTemplateComponent } from './components/display-clothing-template/display-clothing-template.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CartComponent,
    SignInComponent,
    SignUpComponent,
    AuthFormComponent,
    CartListComponent,
    CartPricingComponent,
    CheckoutComponent,
    CustomerCheckoutInfoComponent,
    ShippingInfoComponent,
    PaymentInfoComponent,
    WomenComponent,
    MenComponent,
    HatsComponent,
    PantsComponent,
    ShirtsComponent,
    SocksComponent,
    DisplayClothingTemplateComponent,
    FooterComponent,
    ContactPageComponent,
    AddToCartModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
