import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
