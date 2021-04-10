import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { HatsComponent } from './components/categories/hats/hats.component';
import { MenComponent } from './components/categories/men/men.component';
import { PantsComponent } from './components/categories/pants/pants.component';
import { ShirtsComponent } from './components/categories/shirts/shirts.component';
import { SocksComponent } from './components/categories/socks/socks.component';
import { WomenComponent } from './components/categories/women/women.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'categories/men', component: MenComponent },
  { path: 'categories/women', component: WomenComponent },
  { path: 'categories/hats', component: HatsComponent },
  { path: 'categories/pants', component: PantsComponent },
  { path: 'categories/shirts', component: ShirtsComponent },
  { path: 'categories/socks', component: SocksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
